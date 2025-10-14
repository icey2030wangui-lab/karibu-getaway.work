-- Fix search_path for security definer functions to prevent attacks
CREATE OR REPLACE FUNCTION public.update_booking_modified_at()
RETURNS TRIGGER 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.modified_at = now();
  NEW.modified_by = auth.uid();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.cleanup_old_rate_limits()
RETURNS void 
LANGUAGE plpgsql 
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  DELETE FROM public.rate_limits 
  WHERE last_attempt_at < now() - interval '24 hours';
END;
$$;