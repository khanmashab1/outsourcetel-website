export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  role: "admin" | "client" | "freelancer";
  phone?: string;
  created_at: string;
  updated_at: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}