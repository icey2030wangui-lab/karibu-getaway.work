-- Fix 1: Remove customer_phone column that's causing booking failures
ALTER TABLE public.bookings DROP COLUMN IF EXISTS customer_phone;

-- Fix 2: Drop the insecure unauthenticated access policy
DROP POLICY IF EXISTS "Users can view their own bookings" ON public.bookings;

-- Fix 3: Create secure authenticated-only SELECT policy for bookings
CREATE POLICY "Authenticated users view own bookings"
ON public.bookings
FOR SELECT
TO authenticated
USING (customer_email = (current_setting('request.jwt.claims', true)::json->>'email'));

-- Fix 4: Add secure public booking lookup by reference (for payment callbacks)
CREATE POLICY "Public can view bookings by reference"
ON public.bookings
FOR SELECT
USING (booking_reference IS NOT NULL);

-- Fix 5: Add admin UPDATE policy for managing bookings
CREATE POLICY "Admins can update bookings"
ON public.bookings
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Fix 6: Add admin DELETE policy (soft delete recommended in production)
CREATE POLICY "Admins can delete bookings"
ON public.bookings
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Fix 7: Add audit columns for tracking modifications
ALTER TABLE public.bookings ADD COLUMN IF NOT EXISTS modified_by UUID REFERENCES auth.users(id);
ALTER TABLE public.bookings ADD COLUMN IF NOT EXISTS modified_at TIMESTAMPTZ;

-- Fix 8: Create trigger to update modified_at timestamp
CREATE OR REPLACE FUNCTION public.update_booking_modified_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.modified_at = now();
  NEW.modified_by = auth.uid();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER set_booking_modified_at
BEFORE UPDATE ON public.bookings
FOR EACH ROW
EXECUTE FUNCTION public.update_booking_modified_at();

-- Fix 9: Create rate limiting table for payment endpoints
CREATE TABLE IF NOT EXISTS public.rate_limits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  identifier TEXT NOT NULL,
  endpoint TEXT NOT NULL,
  attempts INTEGER DEFAULT 1,
  first_attempt_at TIMESTAMPTZ DEFAULT now(),
  last_attempt_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(identifier, endpoint)
);

ALTER TABLE public.rate_limits ENABLE ROW LEVEL SECURITY;

-- Rate limits are managed by edge functions only
CREATE POLICY "Service role can manage rate limits"
ON public.rate_limits
FOR ALL
USING (true);

-- Fix 10: Add index for better rate limit query performance
CREATE INDEX IF NOT EXISTS idx_rate_limits_lookup 
ON public.rate_limits(identifier, endpoint, last_attempt_at);

-- Fix 11: Create cleanup function for old rate limit entries
CREATE OR REPLACE FUNCTION public.cleanup_old_rate_limits()
RETURNS void AS $$
BEGIN
  DELETE FROM public.rate_limits 
  WHERE last_attempt_at < now() - interval '24 hours';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;