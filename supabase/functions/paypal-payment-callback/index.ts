import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse query parameters from the URL
    const url = new URL(req.url);
    const token = url.searchParams.get('token'); // PayPal order ID
    const reference = url.searchParams.get('reference'); // Our booking reference
    
    console.log('Received PayPal callback:', { token, reference });

    if (!token) {
      throw new Error('Missing PayPal order token in callback');
    }

    // Get PayPal credentials
    const clientId = Deno.env.get('PAYPAL_CLIENT_ID');
    const clientSecret = Deno.env.get('PAYPAL_CLIENT_SECRET');
    
    if (!clientId || !clientSecret) {
      throw new Error('PayPal credentials not configured');
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Step 1: Get PayPal access token
    console.log('Getting PayPal access token...');
    const auth = btoa(`${clientId}:${clientSecret}`);
    const tokenResponse = await fetch('https://api-m.paypal.com/v1/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${auth}`,
      },
      body: 'grant_type=client_credentials',
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('PayPal token error:', errorText);
      throw new Error(`Failed to get PayPal token: ${tokenResponse.status}`);
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Step 2: Capture the payment
    console.log('Capturing PayPal payment for order:', token);
    const captureResponse = await fetch(
      `https://api-m.paypal.com/v2/checkout/orders/${token}/capture`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    if (!captureResponse.ok) {
      const errorText = await captureResponse.text();
      console.error('Payment capture error:', errorText);
      throw new Error(`Failed to capture payment: ${captureResponse.status}`);
    }

    const captureData = await captureResponse.json();
    console.log('Payment capture response:', captureData);

    // Step 3: Determine payment status
    const paymentStatus = captureData.status;
    let mappedStatus = 'pending';

    if (paymentStatus === 'COMPLETED') {
      mappedStatus = 'completed';
    } else if (paymentStatus === 'FAILED') {
      mappedStatus = 'failed';
    } else if (paymentStatus === 'CANCELLED') {
      mappedStatus = 'cancelled';
    }

    console.log('Updating booking with status:', mappedStatus);

    // Step 4: Update booking in database
    const { error: updateError } = await supabase
      .from('bookings')
      .update({ 
        payment_status: mappedStatus,
      })
      .eq('paypal_order_id', token);

    if (updateError) {
      console.error('Database update error:', updateError);
      throw new Error(`Failed to update booking: ${updateError.message}`);
    }

    console.log('Booking updated successfully');

    // Redirect user to success or failure page based on payment status
    const redirectUrl = mappedStatus === 'completed' 
      ? `${supabaseUrl.replace('.supabase.co', '.lovableproject.com')}/?payment=success&reference=${reference || token}`
      : `${supabaseUrl.replace('.supabase.co', '.lovableproject.com')}/?payment=failed&reference=${reference || token}`;

    return Response.redirect(redirectUrl, 302);

  } catch (error) {
    console.error('Error in paypal-payment-callback:', error);
    
    // Redirect to error page
    const errorUrl = `${Deno.env.get('SUPABASE_URL')?.replace('.supabase.co', '.lovableproject.com')}/?payment=error`;
    return Response.redirect(errorUrl, 302);
  }
});
