-- Update bookings table to use PayPal instead of Pesapal
ALTER TABLE IF EXISTS bookings 
  DROP COLUMN IF EXISTS pesapal_tracking_id;

ALTER TABLE IF EXISTS bookings 
  ADD COLUMN IF NOT EXISTS paypal_order_id TEXT;