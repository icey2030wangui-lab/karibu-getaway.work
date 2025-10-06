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
    const { 
      firstName, 
      lastName, 
      email, 
      phone, 
      packageName, 
      packagePrice 
    } = await req.json();

    console.log('Received payment initiation request:', { firstName, lastName, email, packageName, packagePrice });

    // Get Pesapal credentials from environment
    const consumerKey = Deno.env.get('PESAPAL_CONSUMER_KEY');
    const consumerSecret = Deno.env.get('PESAPAL_CONSUMER_SECRET');
    
    if (!consumerKey || !consumerSecret) {
      throw new Error('Pesapal credentials not configured');
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Generate unique booking reference
    const bookingReference = `BK${Date.now()}${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

    // Step 1: Get OAuth token from Pesapal
    console.log('Getting OAuth token from Pesapal...');
    const tokenResponse = await fetch('https://pay.pesapal.com/v3/api/Auth/RequestToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        consumer_key: consumerKey,
        consumer_secret: consumerSecret,
      }),
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      console.error('Pesapal token error:', errorText);
      throw new Error(`Failed to get Pesapal token: ${tokenResponse.status}`);
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.token;
    console.log('Successfully obtained OAuth token');

    // Step 2: Register IPN (Instant Payment Notification) URL
    const ipnUrl = `${supabaseUrl}/functions/v1/pesapal-payment-callback`;
    console.log('Registering IPN URL:', ipnUrl);
    
    const ipnResponse = await fetch('https://pay.pesapal.com/v3/api/URLSetup/RegisterIPN', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        url: ipnUrl,
        ipn_notification_type: 'GET',
      }),
    });

    if (!ipnResponse.ok) {
      const errorText = await ipnResponse.text();
      console.error('IPN registration error:', errorText);
      throw new Error(`Failed to register IPN: ${ipnResponse.status}`);
    }

    const ipnData = await ipnResponse.json();
    const ipnId = ipnData.ipn_id;
    console.log('Successfully registered IPN with ID:', ipnId);

    // Step 3: Submit order request
    const callbackUrl = `${supabaseUrl}/functions/v1/pesapal-payment-callback`;
    
    const orderData = {
      id: bookingReference,
      currency: 'KES',
      amount: parseFloat(packagePrice),
      description: `Booking for ${packageName}`,
      callback_url: callbackUrl,
      notification_id: ipnId,
      billing_address: {
        email_address: email,
        phone_number: phone,
        first_name: firstName,
        last_name: lastName,
      },
    };

    console.log('Submitting order to Pesapal:', orderData);

    const orderResponse = await fetch('https://pay.pesapal.com/v3/api/Transactions/SubmitOrderRequest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(orderData),
    });

    if (!orderResponse.ok) {
      const errorText = await orderResponse.text();
      console.error('Order submission error:', errorText);
      throw new Error(`Failed to submit order: ${orderResponse.status}`);
    }

    const orderResult = await orderResponse.json();
    console.log('Order submitted successfully:', orderResult);

    // Step 4: Save booking to database
    const { error: dbError } = await supabase
      .from('bookings')
      .insert({
        customer_first_name: firstName,
        customer_last_name: lastName,
        customer_email: email,
        customer_phone: phone,
        package_name: packageName,
        package_price: parseFloat(packagePrice),
        booking_reference: bookingReference,
        payment_status: 'pending',
        pesapal_tracking_id: orderResult.order_tracking_id,
        pesapal_merchant_reference: orderResult.merchant_reference,
      });

    if (dbError) {
      console.error('Database error:', dbError);
      throw new Error(`Failed to save booking: ${dbError.message}`);
    }

    console.log('Booking saved successfully');

    // Return the redirect URL to the client
    return new Response(
      JSON.stringify({
        success: true,
        bookingReference,
        redirectUrl: orderResult.redirect_url,
        orderTrackingId: orderResult.order_tracking_id,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Error in pesapal-initiate-payment:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});
