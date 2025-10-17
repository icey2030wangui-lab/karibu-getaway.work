-- Drop ALL existing policies including the duplicates
DROP POLICY IF EXISTS "conversations_insert_policy" ON public.conversations;
DROP POLICY IF EXISTS "conversations_select_policy" ON public.conversations;
DROP POLICY IF EXISTS "conversations_update_policy" ON public.conversations;
DROP POLICY IF EXISTS "conversations_select_admin" ON public.conversations;
DROP POLICY IF EXISTS "conversations_update_admin" ON public.conversations;
DROP POLICY IF EXISTS "Allow anonymous to insert conversations" ON public.conversations;
DROP POLICY IF EXISTS "Allow authenticated to view conversations" ON public.conversations;
DROP POLICY IF EXISTS "Allow authenticated to update conversations" ON public.conversations;

DROP POLICY IF EXISTS "messages_insert_policy" ON public.messages;
DROP POLICY IF EXISTS "messages_select_policy" ON public.messages;
DROP POLICY IF EXISTS "messages_update_policy" ON public.messages;
DROP POLICY IF EXISTS "messages_select_admin" ON public.messages;
DROP POLICY IF EXISTS "messages_update_admin" ON public.messages;
DROP POLICY IF EXISTS "Allow anonymous to insert messages" ON public.messages;
DROP POLICY IF EXISTS "Allow authenticated to view messages" ON public.messages;
DROP POLICY IF EXISTS "Allow authenticated to update messages" ON public.messages;

-- Create brand new policies with unique names
CREATE POLICY "public_insert_conversations"
ON public.conversations
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "public_select_conversations"
ON public.conversations
FOR SELECT
TO public
USING (true);

CREATE POLICY "public_update_conversations"
ON public.conversations
FOR UPDATE
TO public
USING (true)
WITH CHECK (true);

CREATE POLICY "public_insert_messages"
ON public.messages
FOR INSERT
TO public
WITH CHECK (true);

CREATE POLICY "public_select_messages"
ON public.messages
FOR SELECT
TO public
USING (true);

CREATE POLICY "public_update_messages"
ON public.messages
FOR UPDATE
TO public
USING (true)
WITH CHECK (true);