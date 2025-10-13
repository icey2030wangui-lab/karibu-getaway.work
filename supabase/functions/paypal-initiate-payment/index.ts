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

    console.log('Initiating PayPal payment:', { firstName, lastName, email, packageName, packagePrice });

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !packageName || !packagePrice) {
      throw new Error('Missing required booking information');
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

    // Generate unique booking reference
    const bookingReference = `BK${Date.now()}`;

    // Determine PayPal environment (use sandbox for testing)
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
      const errorText = await tokenResponse.text();
      console.error('PayPal token error:', errorText);
      throw new Error(`Failed to get PayPal token: ${tokenResponse.status}`);
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Step 2: Create PayPal order
    console.log('Creating PayPal order...');
    const priceValue = packagePrice.replace('$', '').trim();
    
    const orderPayload = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          reference_id: bookingReference,
          description: `${packageName} - Karibu Tours Kenya`,
          amount: {
            currency_code: 'USD',
            value: priceValue,
          },
          custom_id: bookingReference,
        },
      ],
      application_context: {
        return_url: `${supabaseUrl}/functions/v1/paypal-payment-callback?reference=${bookingReference}`,
        cancel_url: `${supabaseUrl.replace('.supabase.co', '.lovableproject.com')}/?payment=cancelled&reference=${bookingReference}`,
        brand_name: 'Karibu Tours Kenya',
        landing_page: 'BILLING',
        user_action: 'PAY_NOW',
      },
    };

    const orderResponse = await fetch(`${paypalBaseUrl}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(orderPayload),
    });

    if (!orderResponse.ok) {
      const errorText = await orderResponse.text();
      console.error('PayPal order creation error:', errorText);
      throw new Error(`Failed to create PayPal order: ${orderResponse.status}`);
    }

    const orderData = await orderResponse.json();
    console.log('PayPal order created:', orderData.id);

    // Step 3: Save booking to database
    console.log('Saving booking to database...');
    const { error: insertError } = await supabase
      .from('bookings')
      .insert({
        booking_reference: bookingReference,
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        package_name: packageName,
        package_price: packagePrice,
        payment_status: 'pending',
        paypal_order_id: orderData.id,
      });

    if (insertError) {
      console.error('Database insert error:', insertError);
      throw new Error(`Failed to save booking: ${insertError.message}`);
    }

    console.log('Booking saved successfully');

    // Get approval URL
    const approvalUrl = orderData.links.find((link: any) => link.rel === 'approve')?.href;

    if (!approvalUrl) {
      throw new Error('No approval URL found in PayPal response');
    }

    return new Response(
      JSON.stringify({
        success: true,
        bookingReference,
        redirectUrl: approvalUrl,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error in paypal-initiate-payment:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});
