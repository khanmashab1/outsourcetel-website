"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FolderKanban,
  MessageSquare,
  FileText,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";

/**
 * Dashboard layout with sidebar navigation
 * Provides consistent navigation across all dashboard pages
 */

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Overview" },
  { href: "/dashboard/projects", icon: FolderKanban, label: "Projects" },
  { href: "/dashboard/messages", icon: MessageSquare, label: "Messages" },
  { href: "/dashboard/files", icon: FileText, label: "Files" },
  { href: "/dashboard/settings", icon: Settings, label: "Settings" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { profile } = useAuth();

  return (
    <div className="min-h-screen pt-20">
      <div className="flex">
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed left-0 top-20 bottom-0 w-64 bg-card border-r p-4 z-40 transition-transform duration-300 lg:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          {/* User info */}
          <div className="p-4 rounded-xl bg-muted/50 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold mb-2">
              {profile?.full_name?.[0] || "U"}
            </div>
            <p className="font-semibold text-sm truncate">
              {profile?.full_name || "User"}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {profile?.email}
            </p>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 lg:ml-64">
          {/* Mobile sidebar toggle */}
          <div className="lg:hidden p-4 border-b">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X /> : <Menu />}
            </Button>
          </div>

          <div className="p-6 md:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}