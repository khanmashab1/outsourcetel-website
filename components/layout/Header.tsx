"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const servicesDropdown = [
  { title: "SaaS Business Management", href: "/services/saas-management" },
  { title: "Contact Center (CCaaS)", href: "/services/ccaas" },
  { title: "Offshore Talent Pool", href: "/services/offshore-talent" },
  { title: "Dispatch Order Management", href: "/services/dispatch" },
];

const industriesDropdown = [
  { title: "Food Delivery", href: "/industries/food-delivery" },
  { title: "Transportation", href: "/industries/transportation" },
  { title: "Fleet Management", href: "/industries/fleet-management" },
  { title: "Customer Success", href: "/industries/customer-success" },
  { title: "Inside Sales & Marketing", href: "/industries/sales-marketing" },
  { title: "Taxi & Limousine Services", href: "/industries/taxi-limo" },
];

/**
 * OutsourceTel Header - Sticky dark navy header with dropdown menus
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navItems = [
    {
      title: "Services",
      href: "/services",
      dropdown: servicesDropdown,
    },
    {
      title: "Industries",
      href: "/industries",
      dropdown: industriesDropdown,
    },
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-[#0A1A2F]/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/5"
          : "bg-[#0A1A2F]"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00A7B5] to-[#0082A0] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-white tracking-tight">
                Outsource<span className="text-[#00A7B5]">Tel</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === item.href
                      ? "text-[#00A7B5]"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.title}
                  {item.dropdown && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        activeDropdown === item.title && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-60 bg-[#0A1A2F] border border-white/10 rounded-xl shadow-2xl shadow-black/40 overflow-hidden"
                      >
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-[#1E3A5F] transition-colors"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Right side CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact">
              <Button
                variant="ghost"
                size="sm"
                className="text-white/80 hover:text-white hover:bg-white/5 rounded-xl"
              >
                Talk to Sales
              </Button>
            </Link>
            <Link href="/booking">
              <Button
                size="sm"
                className="bg-[#00A7B5] hover:bg-[#0095A2] text-white rounded-xl gap-2 font-semibold shadow-lg shadow-[#00A7B5]/20 transition-all duration-300 hover:shadow-[#00A7B5]/40"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 text-white rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pb-6 space-y-1 border-t border-white/10 pt-4">
                {navItems.map((item) => (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
                    >
                      {item.title}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2 text-white/50 hover:text-white/80 text-xs transition-colors"
                          >
                            → {sub.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <Link href="/booking" className="block">
                    <Button className="w-full bg-[#00A7B5] hover:bg-[#0095A2] text-white rounded-xl gap-2 font-semibold">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}