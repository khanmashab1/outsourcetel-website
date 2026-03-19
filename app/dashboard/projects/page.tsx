"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FolderKanban, Calendar, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/useAuth";
import { createClient } from "@/lib/supabase/client";
import { formatDate, formatCurrency } from "@/lib/utils";
import type { Project } from "@/types";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const supabase = createClient();

  useEffect(() => {
    if (!user) return;

    async function fetchProjects() {
      const { data } = await supabase
        .from("projects")
        .select("*, service:services(title)")
        .eq("client_id", user!.id)
        .order("created_at", { ascending: false });

      setProjects(data || []);
      setLoading(false);
    }

    fetchProjects();
  }, [user]);

  const statusVariant: Record<string, any> = {
    pending: "warning",
    in_progress: "info",
    review: "secondary",
    completed: "success",
    cancelled: "destructive",
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-40" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <Badge variant="secondary" className="text-sm">
          {projects.length} total
        </Badge>
      </div>

      {projects.length === 0 ? (
        <Card>
          <CardContent className="py-16 text-center">
            <FolderKanban className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Projects Yet</h3>
            <p className="text-muted-foreground">
              Your projects will appear here once you submit a quote and
              it&apos;s approved.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-semibold">
                          {project.title}
                        </h3>
                        <Badge variant={statusVariant[project.status]}>
                          {project.status.replace("_", " ")}
                        </Badge>
                      </div>
                      {project.description && (
                        <p className="text-sm text-muted-foreground">
                          {project.description}
                        </p>
                      )}
                    </div>
                    {project.budget && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <DollarSign className="w-4 h-4" />
                        {formatCurrency(project.budget)}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <Progress value={project.progress} className="flex-1" />
                    <span className="text-sm font-bold">{project.progress}%</span>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    {project.service && (
                      <span className="flex items-center gap-1">
                        <FolderKanban className="w-4 h-4" />
                        {(project.service as any)?.title}
                      </span>
                    )}
                    {project.start_date && (
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(project.start_date)}
                        {project.end_date && ` - ${formatDate(project.end_date)}`}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}