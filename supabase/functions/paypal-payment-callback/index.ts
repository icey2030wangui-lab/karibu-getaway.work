import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const ERROR_MESSAGES = {
  PAYMENT_ERROR: 'Payment processing error occurred',
  PAYMENT_FAILED: 'Payment was not completed successfully',
};

serve(async (req) => {
  console.log('=== PayPal Callback Triggered ===');
  console.log('Request method:', req.method);
  console.log('Request URL:', req.url);
  
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse query parameters from the URL
    const url = new URL(req.url);
    const token = url.searchParams.get('token'); // PayPal order ID
    const reference = url.searchParams.get('reference'); // Our booking reference
    const frontendUrl = url.searchParams.get('frontend_url') || 'https://lovable.app';
    
    console.log('Received PayPal callback:', { token, reference, frontendUrl });

    if (!token) {
      console.error('Missing token in callback');
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

    // Determine PayPal environment
    const paypalBaseUrl = Deno.env.get('PAYPAL_MODE') === 'live' 
      ? 'https://api-m.paypal.com' 
      : 'https://api-m.sandbox.paypal.com';

    // Step 1: Get PayPal access token
    console.log('Getting PayPal access token from:', paypalBaseUrl);
    const auth = btoa(`${clientId}:${clientSecret}`);
    const tokenResponse = await fetch(`${paypalBaseUrl}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${auth}`,
      },
      body: 'grant_type=client_credentials',
    });

    if (!tokenResponse.ok) {
      console.error('PayPal token error');
      const bookingReference = reference || token;
      return Response.redirect(
        `${frontendUrl}/payment-status?payment=error&reference=${bookingReference}`,
        303
      );
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Step 2: Capture the payment
    console.log('Capturing PayPal payment for order:', token);
    const captureResponse = await fetch(
      `${paypalBaseUrl}/v2/checkout/orders/${token}/capture`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    if (!captureResponse.ok) {
      console.error('PayPal capture error');
      const bookingReference = reference || token;
      return Response.redirect(
        `${frontendUrl}/payment-status?payment=failed&reference=${bookingReference}`,
        303
      );
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
      ? `${frontendUrl}/payment-status?payment=success&reference=${reference || token}`
      : `${frontendUrl}/payment-status?payment=failed&reference=${reference || token}`;

    return Response.redirect(redirectUrl, 302);

  } catch (error) {
    console.error('Error in paypal-payment-callback:', error);
    
    // Redirect to error page
    const url = new URL(req.url);
    const frontendUrl = url.searchParams.get('frontend_url') || 'https://lovable.app';
    const errorUrl = `${frontendUrl}/payment-status?payment=error`;
    return Response.redirect(errorUrl, 302);
  }
});
