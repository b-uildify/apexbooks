-- Disable RLS on leads table to work with Clerk authentication
ALTER TABLE public.leads DISABLE ROW LEVEL SECURITY;

-- Disable RLS on user_roles table to work with Clerk authentication
ALTER TABLE public.user_roles DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies on leads table
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.leads;
DROP POLICY IF EXISTS "Only admins can delete leads" ON public.leads;
DROP POLICY IF EXISTS "Only admins can update leads" ON public.leads;
DROP POLICY IF EXISTS "Only admins can view leads" ON public.leads;

-- Drop all existing policies on user_roles table
DROP POLICY IF EXISTS "Only admins can insert roles" ON public.user_roles;
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;