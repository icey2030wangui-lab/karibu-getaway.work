-- Grant table-level permissions on conversations
GRANT INSERT ON public.conversations TO anon, authenticated;
GRANT SELECT, UPDATE ON public.conversations TO authenticated;

-- Grant table-level permissions on messages
GRANT INSERT ON public.messages TO anon, authenticated;
GRANT SELECT, UPDATE ON public.messages TO authenticated;