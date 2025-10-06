-- Drop existing policies that might be blocking anonymous inserts
DROP POLICY IF EXISTS "Allow anonymous users to insert conversations" ON conversations;
DROP POLICY IF EXISTS "Allow anonymous users to insert messages" ON messages;

-- Create new policies that explicitly allow anonymous inserts
CREATE POLICY "Enable insert for anonymous users"
ON conversations
FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Enable insert for anonymous users"
ON messages
FOR INSERT
TO anon
WITH CHECK (true);