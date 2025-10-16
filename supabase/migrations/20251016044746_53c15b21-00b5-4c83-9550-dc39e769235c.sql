-- Drop ALL existing policies on conversations and messages
DO $$ 
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'conversations') LOOP
        EXECUTE 'DROP POLICY IF EXISTS "' || r.policyname || '" ON public.conversations';
    END LOOP;
    
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'messages') LOOP
        EXECUTE 'DROP POLICY IF EXISTS "' || r.policyname || '" ON public.messages';
    END LOOP;
END $$;

-- Disable RLS temporarily
ALTER TABLE public.conversations DISABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages DISABLE ROW LEVEL SECURITY;

-- Re-enable RLS
ALTER TABLE public.conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- Create fresh policies for conversations
CREATE POLICY "conversations_insert_policy"
ON public.conversations
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "conversations_select_admin"
ON public.conversations
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "conversations_update_admin"
ON public.conversations
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create fresh policies for messages
CREATE POLICY "messages_insert_policy"
ON public.messages
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "messages_select_admin"
ON public.messages
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "messages_update_admin"
ON public.messages
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));