import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const ERROR_MESSAGES = {
  VALIDATION: 'Invalid booking information provided',
  RATE_LIMIT: 'Too many booking attempts. Please try again later',
  PAYMENT: 'Payment processing error occurred',
  DATABASE: 'Unable to save booking information',
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
      packageName, 
      packagePrice 
    } = await req.json();

    console.log('Initiating PayPal payment for:', { email, packageName });

    // Input validation
    if (!firstName || !lastName || !email || !packageName || !packagePrice) {
      return new Response(
        JSON.stringify({ error: ERROR_MESSAGES.VALIDATION }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate input lengths
    if (firstName.length > 50 || lastName.length > 50 || email.length > 255 || packageName.length > 200) {
      return new Response(
        JSON.stringify({ error: ERROR_MESSAGES.VALIDATION }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: ERROR_MESSAGES.VALIDATION }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate price format (must be numeric)
    const priceValue = packagePrice.replace(/[^0-9.]/g, '').trim();
    const priceNum = parseFloat(priceValue);
    if (isNaN(priceNum) || priceNum <= 0 || priceNum > 100000) {
      return new Response(
        JSON.stringify({ error: ERROR_MESSAGES.VALIDATION }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Rate limiting check
    const rateLimitKey = `booking:${email}`;
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);

    const { data: rateLimitData, error: rateLimitError } = await supabase
      .from('rate_limits')
      .select('attempts, last_attempt_at')
      .eq('identifier', rateLimitKey)
      .eq('endpoint', 'paypal-initiate-payment')
      .gt('last_attempt_at', oneHourAgo.toISOString())
      .maybeSingle();

    if (rateLimitError && rateLimitError.code !== 'PGRST116') {
      console.error('Rate limit check error:', rateLimitError);
    }

    // Allow max 5 bookings per hour per email
    if (rateLimitData && rateLimitData.attempts >= 5) {
      return new Response(
        JSON.stringify({ error: ERROR_MESSAGES.RATE_LIMIT }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Update rate limit
    if (rateLimitData) {
      await supabase
        .from('rate_limits')
        .update({
          attempts: rateLimitData.attempts + 1,
          last_attempt_at: now.toISOString(),
        })
        .eq('identifier', rateLimitKey)
        .eq('endpoint', 'paypal-initiate-payment');
    } else {
      await supabase
        .from('rate_limits')
        .insert({
          identifier: rateLimitKey,
          endpoint: 'paypal-initiate-payment',
          attempts: 1,
          first_attempt_at: now.toISOString(),
          last_attempt_at: now.toISOString(),
        });
    }

    // Get PayPal credentials
    const clientId = Deno.env.get('PAYPAL_CLIENT_ID');
    const clientSecret = Deno.env.get('PAYPAL_CLIENT_SECRET');
    
    if (!clientId || !clientSecret) {
      console.error('PayPal credentials not configured');
      return new Response(
        JSON.stringify({ error: ERROR_MESSAGES.PAYMENT }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

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
      return new Response(
        JSON.stringify({ error: ERROR_MESSAGES.PAYMENT }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Step 2: Create PayPal order
    console.log('Creating PayPal order...');
    
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
        return_url: `https://xekqpliuvgiyhhyumrnc.supabase.co/functions/v1/paypal-payment-callback?reference=${bookingReference}`,
        cancel_url: `https://e3743a47-54c8-43bb-be94-a1816ffc7bb8.lovableproject.com/payment-status?payment=cancelled&reference=${bookingReference}`,
        brand_name: 'Karibu Tours Kenya',
        landing_page: 'LOGIN',
        shipping_preference: 'NO_SHIPPING',
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
      return new Response(
        JSON.stringify({ error: ERROR_MESSAGES.PAYMENT }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const orderData = await orderResponse.json();
    console.log('PayPal order created:', orderData.id);

    // Step 3: Save booking to database
    console.log('Saving booking to database...');
    const { error: insertError } = await supabase
      .from('bookings')
      .insert({
        booking_reference: bookingReference,
        customer_first_name: firstName,
        customer_last_name: lastName,
        customer_email: email,
        package_name: packageName,
        package_price: priceValue,
        payment_status: 'pending',
        paypal_order_id: orderData.id,
      });

    if (insertError) {
      console.error('Database insert error:', insertError);
      return new Response(
        JSON.stringify({ error: ERROR_MESSAGES.DATABASE }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Booking saved successfully');

    // Get approval URL
    const approvalUrl = orderData.links.find((link: any) => link.rel === 'approve')?.href;

    if (!approvalUrl) {
      console.error('No approval URL in PayPal response');
      return new Response(
        JSON.stringify({ error: ERROR_MESSAGES.PAYMENT }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
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
      JSON.stringify({ error: ERROR_MESSAGES.PAYMENT }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
