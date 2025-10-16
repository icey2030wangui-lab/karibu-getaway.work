-- Drop and recreate policies with explicit role targeting
DROP POLICY IF EXISTS "Allow anonymous and authenticated inserts to conversations" ON public.conversations;
DROP POLICY IF EXISTS "Allow anonymous and authenticated inserts to messages" ON public.messages;

-- Create policies explicitly for anon and authenticated roles
CREATE POLICY "Allow anonymous and authenticated inserts to conversations"
ON public.conversations
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Allow anonymous and authenticated inserts to messages"
ON public.messages
FOR INSERT
TO anon, authenticated
WITH CHECK (true);