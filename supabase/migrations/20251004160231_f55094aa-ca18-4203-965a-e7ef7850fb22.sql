-- Create leads table to store contact form submissions
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'converted', 'closed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert leads (public contact form)
CREATE POLICY "Anyone can submit contact form"
ON public.leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Allow authenticated users to view all leads (for admin access)
CREATE POLICY "Authenticated users can view leads"
ON public.leads
FOR SELECT
TO authenticated
USING (true);

-- Allow authenticated users to update lead status
CREATE POLICY "Authenticated users can update leads"
ON public.leads
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_leads_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_leads_timestamp
BEFORE UPDATE ON public.leads
FOR EACH ROW
EXECUTE FUNCTION public.update_leads_updated_at();

-- Create index for faster queries
CREATE INDEX idx_leads_created_at ON public.leads(created_at DESC);
CREATE INDEX idx_leads_status ON public.leads(status);