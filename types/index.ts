/**
 * Core type definitions for the BPO Platform
 */

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  company: string | null;
  phone: string | null;
  avatar_url: string | null;
  role: "admin" | "client";
  is_active: boolean;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  short_description: string | null;
  description: string | null;
  icon: string | null;
  category: string;
  benefits: string[];
  features: string[];
  pricing: {
    starting_price: number;
    unit: string;
    currency: string;
  };
  image_url: string | null;
  is_active: boolean;
  sort_order: number;
  seo_title: string | null;
  seo_description: string | null;
  created_at: string;
  updated_at: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  service_id: string | null;
  source: string;
  status: "new" | "contacted" | "qualified" | "proposal" | "won" | "lost";
  budget: string | null;
  message: string | null;
  assigned_to: string | null;
  notes: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  // Joined relations
  service?: Service;
  assigned_profile?: Profile;
}

export interface Quote {
  id: string;
  lead_id: string | null;
  client_id: string | null;
  service_id: string | null;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  budget_range: string | null;
  requirements: string | null;
  estimated_price: number | null;
  status: "pending" | "reviewed" | "accepted" | "rejected";
  admin_notes: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  service?: Service;
}

export interface Project {
  id: string;
  title: string;
  description: string | null;
  client_id: string;
  service_id: string | null;
  assigned_to: string | null;
  status: "pending" | "in_progress" | "review" | "completed" | "cancelled";
  priority: number;
  start_date: string | null;
  end_date: string | null;
  progress: number;
  budget: number | null;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
  service?: Service;
  client?: Profile;
  assigned_profile?: Profile;
}

export interface Message {
  id: string;
  project_id: string;
  sender_id: string;
  content: string;
  message_type: "text" | "file" | "system";
  file_url: string | null;
  file_name: string | null;
  is_read: boolean;
  created_at: string;
  sender?: Profile;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string | null;
  role: string | null;
  content: string;
  rating: number;
  avatar_url: string | null;
  is_featured: boolean;
  is_active: boolean;
  sort_order: number;
  created_at: string;
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  service_id: string | null;
  preferred_date: string;
  preferred_time: string;
  timezone: string;
  notes: string | null;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  created_at: string;
  updated_at: string;
  service?: Service;
}

export interface FileRecord {
  id: string;
  project_id: string;
  uploaded_by: string;
  file_name: string;
  file_url: string;
  file_size: number | null;
  file_type: string | null;
  created_at: string;
}

// Dashboard analytics types
export interface DashboardStats {
  totalLeads: number;
  totalProjects: number;
  activeProjects: number;
  revenue: number;
  conversionRate: number;
  newLeadsThisMonth: number;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: string | number;
}