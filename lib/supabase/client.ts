import { createBrowserClient } from "@supabase/ssr";

/**
 * Create a Supabase client for browser-side operations
 * Used in Client Components
 */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dummy.supabase.co",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "dummy_anon_key"
  );
}