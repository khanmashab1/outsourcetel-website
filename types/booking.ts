export type BookingStatus =
  | "pending"
  | "confirmed"
  | "in_progress"
  | "completed"
  | "cancelled";

export interface Booking {
  id: string;
  client_id: string;
  freelancer_id: string;
  service_type: string;
  title: string;
  description: string;
  status: BookingStatus;
  price: number;
  currency: string;
  scheduled_at: string;
  completed_at?: string;
  created_at: string;
  updated_at: string;
  client?: {
    full_name: string;
    email: string;
    avatar_url?: string;
  };
  freelancer?: {
    full_name: string;
    email: string;
    avatar_url?: string;
  };
}

export interface BookingFilters {
  status?: BookingStatus;
  search?: string;
  date_from?: string;
  date_to?: string;
  page: number;
  per_page: number;
}

export interface BookingStats {
  total: number;
  pending: number;
  confirmed: number;
  in_progress: number;
  completed: number;
  cancelled: number;
  total_revenue: number;
}