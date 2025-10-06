-- Drop existing insert policies for conversations
DROP POLICY IF EXISTS "Public can create conversations" ON public.conversations;
DROP POLICY IF EXISTS "Anyone can create conversations" ON public.conversations;
DROP POLICY IF EXISTS "Authenticated users can create conversations" ON public.conversations;

-- Create a single policy for all users (anon and authenticated)
CREATE POLICY "Anyone can create conversations"
ON public.conversations
FOR INSERT
WITH CHECK (true);

-- Drop existing insert policies for messages
DROP POLICY IF EXISTS "Public can insert messages" ON public.messages;
DROP POLICY IF EXISTS "Anyone can insert client messages" ON public.messages;
DROP POLICY IF EXISTS "Authenticated users can insert messages" ON public.messages;

-- Create a single policy for all users to insert messages
CREATE POLICY "Anyone can insert messages"
ON public.messages
FOR INSERT
WITH CHECK (true);