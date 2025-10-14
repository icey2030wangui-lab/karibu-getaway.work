import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const ERROR_MESSAGES = {
  VALIDATION: 'Invalid message data provided',
  RATE_LIMIT: 'Too many messages sent. Please try again later',
  EMAIL_SERVICE: 'Unable to send message at this time',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message } = await req.json();

    // Input validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: ERROR_MESSAGES.VALIDATION }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate lengths
    if (name.length > 100 || email.length > 255 || message.length > 1000) {
      return new Response(
        JSON.stringify({ error: ERROR_MESSAGES.VALIDATION }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: ERROR_MESSAGES.VALIDATION }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Rate limiting check
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const rateLimitKey = `contact:${email}`;
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);

    const { data: rateLimitData, error: rateLimitError } = await supabase
      .from('rate_limits')
      .select('attempts, last_attempt_at')
      .eq('identifier', rateLimitKey)
      .eq('endpoint', 'send-contact-email')
      .gt('last_attempt_at', oneHourAgo.toISOString())
      .maybeSingle();

    if (rateLimitError && rateLimitError.code !== 'PGRST116') {
      console.error('Rate limit check error:', rateLimitError);
    }

    // Allow max 5 messages per hour per email
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
        .eq('endpoint', 'send-contact-email');
    } else {
      await supabase
        .from('rate_limits')
        .insert({
          identifier: rateLimitKey,
          endpoint: 'send-contact-email',
          attempts: 1,
          first_attempt_at: now.toISOString(),
          last_attempt_at: now.toISOString(),
        });
    }

    // Send email via EmailJS
    const emailjsServiceId = Deno.env.get('EMAILJS_SERVICE_ID');
    const emailjsTemplateId = Deno.env.get('EMAILJS_TEMPLATE_ID');
    const emailjsPublicKey = Deno.env.get('EMAILJS_PUBLIC_KEY');

    if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
      console.error('EmailJS credentials not configured');
      return new Response(
        JSON.stringify({ error: ERROR_MESSAGES.EMAIL_SERVICE }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: emailjsServiceId,
        template_id: emailjsTemplateId,
        user_id: emailjsPublicKey,
        template_params: {
          from_name: name,
          from_email: email,
          message: message,
          to_email: 'info@karibugateway.com',
        },
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('EmailJS error:', errorText);
      return new Response(
        JSON.stringify({ error: ERROR_MESSAGES.EMAIL_SERVICE }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Contact email sent successfully');

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent successfully' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in send-contact-email:', error);
    return new Response(
      JSON.stringify({ error: ERROR_MESSAGES.EMAIL_SERVICE }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
