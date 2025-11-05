import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const ERROR_MESSAGES = {
  VALIDATION_ERROR: 'Invalid booking information provided',
  RATE_LIMIT_ERROR: 'Too many booking attempts. Please try again later.',
  PAYMENT_ERROR: 'Payment initialization failed. Please try again.',
  DATABASE_ERROR: 'Failed to save booking information',
};

serve(async (req) => {
  console.log('=== Paystack Payment Initiation ===');
  
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, packageName, packagePrice } = await req.json();
    
    console.log('Received booking request:', { firstName, lastName, email, packageName, packagePrice });

    // Validate required fields
    if (!firstName || !lastName || !email || !packageName || !packagePrice) {
      console.error('Missing required fields');
      throw new Error(ERROR_MESSAGES.VALIDATION_ERROR);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email format');
      throw new Error(ERROR_MESSAGES.VALIDATION_ERROR);
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Rate limiting check
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { data: recentBookings, error: rateLimitError } = await supabase
      .from('bookings')
      .select('id')
      .eq('customer_email', email)
      .gte('created_at', oneHourAgo);

    if (rateLimitError) {
      console.error('Rate limit check error:', rateLimitError);
    }

    if (recentBookings && recentBookings.length >= 5) {
      console.error('Rate limit exceeded for email:', email);
      throw new Error(ERROR_MESSAGES.RATE_LIMIT_ERROR);
    }

    // Get Paystack secret key
    const paystackSecretKey = Deno.env.get('PAYSTACK_SECRET_KEY');
    if (!paystackSecretKey) {
      throw new Error('Paystack credentials not configured');
    }

    // Initialize Paystack transaction
    const amount = Math.round(packagePrice * 100); // Convert to kobo/cents
    const reference = `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    console.log('Initializing Paystack transaction:', { amount, reference });

    const paystackResponse = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${paystackSecretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        amount: amount,
        reference: reference,
        callback_url: `${supabaseUrl}/functions/v1/paystack-payment-callback`,
        metadata: {
          firstName,
          lastName,
          packageName,
        },
      }),
    });

    if (!paystackResponse.ok) {
      const errorData = await paystackResponse.text();
      console.error('Paystack initialization failed:', errorData);
      throw new Error(ERROR_MESSAGES.PAYMENT_ERROR);
    }

    const paystackData = await paystackResponse.json();
    console.log('Paystack transaction initialized:', paystackData);

    // Save booking to database
    const { data: booking, error: insertError } = await supabase
      .from('bookings')
      .insert({
        booking_reference: reference,
        customer_first_name: firstName,
        customer_last_name: lastName,
        customer_email: email,
        package_name: packageName,
        package_price: packagePrice,
        payment_status: 'pending',
        paystack_reference: reference,
      })
      .select()
      .single();

    if (insertError) {
      console.error('Database insert error:', insertError);
      throw new Error(ERROR_MESSAGES.DATABASE_ERROR);
    }

    console.log('Booking saved successfully:', booking);

    return new Response(
      JSON.stringify({
        success: true,
        authorization_url: paystackData.data.authorization_url,
        reference: reference,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    console.error('Error in paystack-initiate-payment:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || 'An unexpected error occurred',
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    );
  }
});
