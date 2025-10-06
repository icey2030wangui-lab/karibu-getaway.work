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
    const orderTrackingId = url.searchParams.get('OrderTrackingId');
    const orderMerchantReference = url.searchParams.get('OrderMerchantReference');
    
    console.log('Received payment callback:', { orderTrackingId, orderMerchantReference });

    if (!orderTrackingId) {
      throw new Error('Missing OrderTrackingId in callback');
    }

    // Get Pesapal credentials
    const consumerKey = Deno.env.get('PESAPAL_CONSUMER_KEY');
    const consumerSecret = Deno.env.get('PESAPAL_CONSUMER_SECRET');
    
    if (!consumerKey || !consumerSecret) {
      throw new Error('Pesapal credentials not configured');
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

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

    // Step 2: Get transaction status from Pesapal
    console.log('Fetching transaction status for:', orderTrackingId);
    const statusResponse = await fetch(
      `https://pay.pesapal.com/v3/api/Transactions/GetTransactionStatus?orderTrackingId=${orderTrackingId}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    if (!statusResponse.ok) {
      const errorText = await statusResponse.text();
      console.error('Status check error:', errorText);
      throw new Error(`Failed to get transaction status: ${statusResponse.status}`);
    }

    const statusData = await statusResponse.json();
    console.log('Transaction status:', statusData);

    // Step 3: Update booking in database based on payment status
    const paymentStatus = statusData.payment_status_description?.toLowerCase() || 'pending';
    const statusMapping: Record<string, string> = {
      'completed': 'completed',
      'paid': 'completed',
      'failed': 'failed',
      'cancelled': 'cancelled',
      'pending': 'pending',
    };

    const mappedStatus = statusMapping[paymentStatus] || 'pending';

    console.log('Updating booking with status:', mappedStatus);
    const { error: updateError } = await supabase
      .from('bookings')
      .update({ 
        payment_status: mappedStatus,
      })
      .eq('pesapal_tracking_id', orderTrackingId);

    if (updateError) {
      console.error('Database update error:', updateError);
      throw new Error(`Failed to update booking: ${updateError.message}`);
    }

    console.log('Booking updated successfully');

    // Redirect user to success or failure page based on payment status
    const redirectUrl = mappedStatus === 'completed' 
      ? `${Deno.env.get('SUPABASE_URL')?.replace('.supabase.co', '.lovableproject.com')}/?payment=success&reference=${orderMerchantReference}`
      : `${Deno.env.get('SUPABASE_URL')?.replace('.supabase.co', '.lovableproject.com')}/?payment=failed&reference=${orderMerchantReference}`;

    return Response.redirect(redirectUrl, 302);

  } catch (error) {
    console.error('Error in pesapal-payment-callback:', error);
    
    // Redirect to error page
    const errorUrl = `${Deno.env.get('SUPABASE_URL')?.replace('.supabase.co', '.lovableproject.com')}/?payment=error`;
    return Response.redirect(errorUrl, 302);
  }
});
