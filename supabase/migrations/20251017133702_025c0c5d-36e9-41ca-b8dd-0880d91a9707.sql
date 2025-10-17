-- Fix RLS policies for conversations and messages to allow anonymous contact form submissions

-- Drop existing policies if any
DROP POLICY IF EXISTS "Allow anonymous to insert conversations" ON public.conversations;
DROP POLICY IF EXISTS "Allow anonymous to insert messages" ON public.messages;
DROP POLICY IF EXISTS "Allow authenticated to view their conversations" ON public.conversations;
DROP POLICY IF EXISTS "Allow authenticated to view their messages" ON public.messages;

-- Allow anyone (including anonymous users) to insert conversations
CREATE POLICY "Allow anonymous to insert conversations"
ON public.conversations
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow anyone (including anonymous users) to insert messages
CREATE POLICY "Allow anonymous to insert messages"
ON public.messages
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow authenticated users to view all conversations (for admin)
CREATE POLICY "Allow authenticated to view conversations"
ON public.conversations
FOR SELECT
TO authenticated
USING (true);

-- Allow authenticated users to view all messages (for admin)
CREATE POLICY "Allow authenticated to view messages"
ON public.messages
FOR SELECT
TO authenticated
USING (true);

-- Allow authenticated users to update conversations (for marking as read)
CREATE POLICY "Allow authenticated to update conversations"
ON public.conversations
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Allow authenticated users to update messages (for marking as read)
CREATE POLICY "Allow authenticated to update messages"
ON public.messages
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);