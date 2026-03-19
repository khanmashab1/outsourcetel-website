import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Create a Supabase client for server-side operations
 * Used in Server Components, Route Handlers, and Server Actions
 */
export function createClient() {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dummy.supabase.co",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "dummy_anon_key",
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: any[]) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // The `setAll` method is called from a Server Component
            // This can be ignored if middleware refreshes sessions
          }
        },
      },
    }
  );
}