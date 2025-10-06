-- Allow authenticated users to create conversations
CREATE POLICY "Authenticated users can create conversations"
ON public.conversations
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Allow authenticated users to insert messages
CREATE POLICY "Authenticated users can insert messages"
ON public.messages
FOR INSERT
TO authenticated
WITH CHECK (true);