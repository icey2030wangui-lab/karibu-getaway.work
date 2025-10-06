-- Drop the policies using 'public' role
DROP POLICY IF EXISTS "Anyone can create conversations" ON public.conversations;
DROP POLICY IF EXISTS "Anyone can insert messages" ON public.messages;

-- Create policies for both anon and authenticated roles
CREATE POLICY "Anyone can create conversations"
ON public.conversations
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Anyone can insert messages"
ON public.messages
FOR INSERT
TO anon, authenticated
WITH CHECK (true);