"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FolderKanban,
  MessageSquare,
  Clock,
  CheckCircle,
  ArrowRight,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/useAuth";
import { createClient } from "@/lib/supabase/client";
import type { Project, Quote } from "@/types";

/**
 * Client Dashboard Overview
 * Shows project status, recent activity, and quick actions
 */
export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const { user, profile } = useAuth();
  const supabase = createClient();

  useEffect(() => {
    if (!user) return;

    async function fetchData() {
      const [projectsRes, quotesRes] = await Promise.all([
        supabase
          .from("projects")
          .select("*, service:services(*)")
          .eq("client_id", user!.id)
          .order("created_at", { ascending: false })
          .limit(5),
        supabase
          .from("quotes")
          .select("*, service:services(*)")
          .eq("client_id", user!.id)
          .order("created_at", { ascending: false })
          .limit(5),
      ]);

      setProjects(projectsRes.data || []);
      setQuotes(quotesRes.data || []);
      setLoading(false);
    }

    fetchData();
  }, [user]);

  const statsCards = [
    {
      title: "Active Projects",
      value: projects.filter((p) => p.status === "in_progress").length,
      icon: FolderKanban,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Pending Quotes",
      value: quotes.filter((q) => q.status === "pending").length,
      icon: Clock,
      color: "from-orange-500 to-amber-500",
    },
    {
      title: "Completed",
      value: projects.filter((p) => p.status === "completed").length,
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Total Projects",
      value: projects.length,
      icon: FileText,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const statusColors: Record<string, string> = {
    pending: "warning",
    in_progress: "info",
    review: "secondary",
    completed: "success",
    cancelled: "destructive",
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-32" />
          ))}
        </div>
        <Skeleton className="h-64" />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Welcome header */}
      <div>
        <h1 className="text-3xl font-bold">
          Welcome back, {profile?.full_name?.split(" ")[0] || "there"}! 👋
        </h1>
        <p className="text-muted-foreground mt-1">
          Here&apos;s an overview of your projects and activity.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, i) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Recent Projects */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Projects</CardTitle>
          <Link href="/dashboard/projects">
            <Button variant="ghost" size="sm" className="gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          {projects.length === 0 ? (
            <div className="text-center py-12">
              <FolderKanban className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
              <p className="text-muted-foreground">No projects yet</p>
              <Link href="/quote">
                <Button variant="gradient" size="sm" className="mt-4">
                  Request a Quote
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold truncate">
                        {project.title}
                      </h3>
                      <Badge
                        variant={
                          (statusColors[project.status] as any) || "secondary"
                        }
                      >
                        {project.status.replace("_", " ")}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <Progress value={project.progress} className="flex-1" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {project.progress}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}