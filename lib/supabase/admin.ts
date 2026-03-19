import { createClient } from "@supabase/supabase-js";

/**
 * Supabase admin client with service role key
 * USE ONLY in server-side code (API routes, edge functions)
 * Bypasses RLS - handle with care
 */
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dummy.supabase.co",
    process.env.SUPABASE_SERVICE_ROLE_KEY || "dummy_service_key",
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}