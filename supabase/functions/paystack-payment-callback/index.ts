import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  console.log('=== Paystack Callback Triggered ===');
  console.log('Request method:', req.method);
  console.log('Request URL:', req.url);
  
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const reference = url.searchParams.get('reference');
    const frontendUrl = url.searchParams.get('frontend_url') || 'https://lovable.app';
    
    console.log('Received Paystack callback with reference:', reference);

    if (!reference) {
      console.error('Missing reference in callback');
      throw new Error('Missing payment reference');
    }

    const paystackSecretKey = Deno.env.get('PAYSTACK_SECRET_KEY');
    if (!paystackSecretKey) {
      throw new Error('Paystack credentials not configured');
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Verify transaction with Paystack
    console.log('Verifying transaction with Paystack:', reference);
    const verifyResponse = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${paystackSecretKey}`,
      },
    });

    if (!verifyResponse.ok) {
      console.error('Paystack verification failed');
      return Response.redirect(
        `${frontendUrl}/payment-status?payment=error&reference=${reference}`,
        303
      );
    }

    const verifyData = await verifyResponse.json();
    console.log('Payment verification response:', verifyData);

    // Determine payment status
    const paymentStatus = verifyData.data.status;
    let mappedStatus = 'pending';

    if (paymentStatus === 'success') {
      mappedStatus = 'completed';
    } else if (paymentStatus === 'failed') {
      mappedStatus = 'failed';
    } else if (paymentStatus === 'abandoned') {
      mappedStatus = 'cancelled';
    }

    console.log('Updating booking with status:', mappedStatus);

    // Update booking in database
    const { error: updateError } = await supabase
      .from('bookings')
      .update({ 
        payment_status: mappedStatus,
      })
      .eq('paystack_reference', reference);

    if (updateError) {
      console.error('Database update error:', updateError);
      throw new Error(`Failed to update booking: ${updateError.message}`);
    }

    console.log('Booking updated successfully');

    // Redirect user based on payment status
    const redirectUrl = mappedStatus === 'completed' 
      ? `${frontendUrl}/payment-status?payment=success&reference=${reference}`
      : `${frontendUrl}/payment-status?payment=failed&reference=${reference}`;

    return Response.redirect(redirectUrl, 302);

  } catch (error) {
    console.error('Error in paystack-payment-callback:', error);
    
    const url = new URL(req.url);
    const frontendUrl = url.searchParams.get('frontend_url') || 'https://lovable.app';
    const errorUrl = `${frontendUrl}/payment-status?payment=error`;
    return Response.redirect(errorUrl, 302);
  }
});
