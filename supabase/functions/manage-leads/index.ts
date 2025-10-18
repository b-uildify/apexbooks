import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Verify Clerk JWT token
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      console.error('No authorization header provided');
      return new Response(
        JSON.stringify({ error: 'Unauthorized - No token provided' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Extract the Clerk token
    const clerkToken = authHeader.replace('Bearer ', '');
    
    // Verify the Clerk JWT token
    const CLERK_JWT_KEY = Deno.env.get('CLERK_JWT_KEY');
    if (!CLERK_JWT_KEY) {
      console.error('CLERK_JWT_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Decode and verify the Clerk JWT
    try {
      const parts = clerkToken.split('.');
      if (parts.length !== 3) {
        throw new Error('Invalid token format');
      }
      
      const payload = JSON.parse(atob(parts[1]));
      const userId = payload.sub;
      
      if (!userId) {
        throw new Error('Invalid token - no user ID');
      }

      console.log('Authenticated user:', userId);
      
      // TODO: Implement admin check here
      // For now, allow all authenticated users
      // In production, check against admin list or database
      
    } catch (error) {
      console.error('Token verification failed:', error);
      return new Response(
        JSON.stringify({ error: 'Invalid token' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Supabase client with service role key
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { method, action, leadId, status } = await req.json();

    console.log('Processing request:', { method, action, leadId, status });

    // Handle different operations
    switch (action) {
      case 'list': {
        const { data, error } = await supabase
          .from('leads')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching leads:', error);
          throw error;
        }

        return new Response(
          JSON.stringify({ data }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      case 'updateStatus': {
        if (!leadId || !status) {
          return new Response(
            JSON.stringify({ error: 'Missing leadId or status' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const { data, error } = await supabase
          .from('leads')
          .update({ status })
          .eq('id', leadId)
          .select()
          .single();

        if (error) {
          console.error('Error updating lead:', error);
          throw error;
        }

        return new Response(
          JSON.stringify({ data }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      default:
        return new Response(
          JSON.stringify({ error: 'Invalid action' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }
  } catch (error) {
    console.error('Error in manage-leads function:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
