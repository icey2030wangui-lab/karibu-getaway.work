-- Add paystack_reference column to bookings table
ALTER TABLE public.bookings 
ADD COLUMN IF NOT EXISTS paystack_reference TEXT;