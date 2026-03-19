"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  FolderKanban,
  BarChart3,
  Menu,
  X,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const adminNavItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/leads", icon: Users, label: "Leads" },
  { href: "/admin/services", icon: Briefcase, label: "Services" },
  { href: "/admin/projects", icon: FolderKanban, label: "Projects" },
  { href: "/admin/analytics", icon: BarChart3, label: "Analytics" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen pt-20">
      <div className="flex">
        {/* Admin Sidebar */}
        <aside
          className={cn(
            "fixed left-0 top-20 bottom-0 w-64 bg-card border-r p-4 z-40 transition-transform duration-300 lg:translate-x-0",
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-6">
            <Shield className="w-6 h-6" />
            <div>
              <p className="font-semibold text-sm">Admin Panel</p>
              <p className="text-xs text-blue-200">Management Console</p>
            </div>
          </div>

          <nav className="space-y-1">
            {adminNavItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/admin" && pathname.startsWith(item.href));
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

        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-background/50 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <main className="flex-1 lg:ml-64">
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