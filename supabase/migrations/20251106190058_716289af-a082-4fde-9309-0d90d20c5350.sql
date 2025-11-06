-- Create booking activity logs table
CREATE TABLE IF NOT EXISTS public.booking_activity_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID NOT NULL REFERENCES public.bookings(id) ON DELETE CASCADE,
  action TEXT NOT NULL,
  old_value TEXT,
  new_value TEXT,
  changed_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.booking_activity_logs ENABLE ROW LEVEL SECURITY;

-- Create policy for admins to view activity logs
CREATE POLICY "Admins can view activity logs"
ON public.booking_activity_logs
FOR SELECT
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create policy for admins to insert activity logs
CREATE POLICY "Admins can insert activity logs"
ON public.booking_activity_logs
FOR INSERT
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Create index for faster queries
CREATE INDEX idx_booking_activity_logs_booking_id ON public.booking_activity_logs(booking_id);
CREATE INDEX idx_booking_activity_logs_created_at ON public.booking_activity_logs(created_at DESC);