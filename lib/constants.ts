export const APP_NAME = "OutSource";
export const APP_DESCRIPTION = "Professional outsourcing & freelancing platform";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Booking", href: "/booking" },
  { label: "Chat", href: "/chat" },
];

export const ADMIN_NAV_LINKS = [
  { label: "Dashboard", href: "/admin", icon: "LayoutDashboard" },
  { label: "Bookings", href: "/admin/booking", icon: "CalendarCheck" },
  { label: "Chat", href: "/admin/chat", icon: "MessageSquare" },
  { label: "About Page", href: "/admin/about", icon: "FileText" },
  { label: "Config", href: "/admin/config", icon: "Settings" },
];

export const BOOKING_STATUS_OPTIONS = [
  { value: "pending", label: "Pending" },
  { value: "confirmed", label: "Confirmed" },
  { value: "in_progress", label: "In Progress" },
  { value: "completed", label: "Completed" },
  { value: "cancelled", label: "Cancelled" },
];

export const SERVICE_TYPES = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "SEO & Marketing",
  "Content Writing",
  "Video Editing",
  "Data Analysis",
  "Consulting",
];