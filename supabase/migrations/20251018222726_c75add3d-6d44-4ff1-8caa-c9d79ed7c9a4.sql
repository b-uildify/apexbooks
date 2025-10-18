-- Fix SECURITY DEFINER function to use SECURITY INVOKER
-- Need to drop the trigger first, then recreate the function with SECURITY INVOKER

-- Drop the existing trigger
DROP TRIGGER IF EXISTS update_leads_timestamp ON public.leads;

-- Drop and recreate the function with SECURITY INVOKER
DROP FUNCTION IF EXISTS public.update_leads_updated_at();

CREATE OR REPLACE FUNCTION public.update_leads_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY INVOKER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Recreate the trigger
CREATE TRIGGER update_leads_timestamp
  BEFORE UPDATE ON public.leads
  FOR EACH ROW
  EXECUTE FUNCTION public.update_leads_updated_at();