-- Drop existing insert policies for conversations
DROP POLICY IF EXISTS "Anyone can create conversations" ON public.conversations;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON public.conversations;

-- Drop existing insert policies for messages  
DROP POLICY IF EXISTS "Anyone can insert messages" ON public.messages;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON public.messages;
DROP POLICY IF EXISTS "Admins can insert messages" ON public.messages;

-- Create clean insert policies
CREATE POLICY "Allow anonymous and authenticated inserts to conversations"
ON public.conversations
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Allow anonymous and authenticated inserts to messages"
ON public.messages
FOR INSERT
WITH CHECK (true);