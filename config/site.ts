/**
 * Global site configuration
 * OutsourceTel - BPO Platform
 */
export const siteConfig = {
  name: "OutsourceTel",
  tagline: "Boost Your Business Projections 11x",
  description:
    "Award-winning business process outsourcing solutions. Streamline operations, optimize costs, and drive growth with our certified agents and enterprise-grade services.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://outsourcetel.com",
  ogImage: "/images/og-image.jpg",
  links: {
    twitter: "https://twitter.com/outsourcetel",
    linkedin: "https://linkedin.com/company/outsourcetel",
    facebook: "https://facebook.com/outsourcetel",
  },
  contact: {
    email: "info@outsourcetel.com",
    phone: "+1 (888) 555-0199",
    address: "Orlando, Florida, United States",
    hours: "Mon–Fri: 8AM–8PM EST | Sat: 9AM–5PM EST",
  },
  stats: {
    agents: 500,
    years: 10,
    partners: 30,
    retention: 98,
  },
  navigation: [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Industries", href: "/industries" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ],
  budgetRanges: [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
  ],
  timeSlots: [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
  ],
};