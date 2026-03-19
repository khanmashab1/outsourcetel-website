import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ---------- AUTH ----------
export async function getCurrentUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user) return null;

  const { data: profile } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.id)
    .single();

  return profile;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

// ---------- BOOKINGS ----------
export async function getBookings(filters?: Record<string, string>) {
  let query = supabase
    .from("bookings")
    .select(
      `*, client:users!client_id(full_name, email, avatar_url),
          freelancer:users!freelancer_id(full_name, email, avatar_url)`
    )
    .order("created_at", { ascending: false });

  if (filters?.status) query = query.eq("status", filters.status);
  if (filters?.search) query = query.ilike("title", `%${filters.search}%`);

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function getBookingById(id: string) {
  const { data, error } = await supabase
    .from("bookings")
    .select(
      `*, client:users!client_id(full_name, email, avatar_url),
          freelancer:users!freelancer_id(full_name, email, avatar_url)`
    )
    .eq("id", id)
    .single();
  if (error) throw error;
  return data;
}

export async function updateBookingStatus(id: string, status: string) {
  const { data, error } = await supabase
    .from("bookings")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deleteBooking(id: string) {
  const { error } = await supabase.from("bookings").delete().eq("id", id);
  if (error) throw error;
}

// ---------- CHAT ----------
export async function getChatRooms(userId: string) {
  const { data, error } = await supabase
    .from("chat_rooms")
    .select("*")
    .contains("participant_ids", [userId])
    .order("updated_at", { ascending: false });
  if (error) throw error;
  return data;
}

export async function getMessages(roomId: string) {
  const { data, error } = await supabase
    .from("messages")
    .select(`*, sender:users!sender_id(full_name, avatar_url)`)
    .eq("room_id", roomId)
    .order("created_at", { ascending: true });
  if (error) throw error;
  return data;
}

export async function sendMessage(
  roomId: string,
  senderId: string,
  content: string
) {
  const { data, error } = await supabase
    .from("messages")
    .insert({ room_id: roomId, sender_id: senderId, content })
    .select()
    .single();
  if (error) throw error;
  return data;
}

// ---------- CONFIG / SITE SETTINGS ----------
export async function getSiteConfig() {
  const { data, error } = await supabase
    .from("site_config")
    .select("*")
    .single();
  if (error) throw error;
  return data;
}

export async function updateSiteConfig(config: Record<string, unknown>) {
  const { data, error } = await supabase
    .from("site_config")
    .update(config)
    .eq("id", 1)
    .select()
    .single();
  if (error) throw error;
  return data;
}

// ---------- ABOUT PAGE CONTENT ----------
export async function getAboutContent() {
  const { data, error } = await supabase
    .from("pages")
    .select("*")
    .eq("slug", "about")
    .single();
  if (error) throw error;
  return data;
}

export async function updateAboutContent(content: Record<string, unknown>) {
  const { data, error } = await supabase
    .from("pages")
    .update(content)
    .eq("slug", "about")
    .select()
    .single();
  if (error) throw error;
  return data;
}