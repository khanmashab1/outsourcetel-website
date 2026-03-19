"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Paperclip, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/hooks/useAuth";
import { createClient } from "@/lib/supabase/client";
import type { Message, Project } from "@/types";
import { cn } from "@/lib/utils";

/**
 * Client messaging system
 * Real-time messaging between client and admin per project
 */
export default function MessagesPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const supabase = createClient();

  // Fetch projects
  useEffect(() => {
    if (!user) return;

    async function fetchProjects() {
      const { data } = await supabase
        .from("projects")
        .select("*")
        .eq("client_id", user!.id)
        .order("updated_at", { ascending: false });

      setProjects(data || []);
      if (data && data.length > 0) {
        setSelectedProject(data[0].id);
      }
      setLoading(false);
    }

    fetchProjects();
  }, [user]);

  // Fetch messages for selected project
  useEffect(() => {
    if (!selectedProject) return;

    async function fetchMessages() {
      const { data } = await supabase
        .from("messages")
        .select("*, sender:profiles(full_name, avatar_url, role)")
        .eq("project_id", selectedProject)
        .order("created_at", { ascending: true });

      setMessages(data || []);
    }

    fetchMessages();

    // Real-time subscription
    const channel = supabase
      .channel(`messages-${selectedProject}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `project_id=eq.${selectedProject}`,
        },
        async (payload) => {
          // Fetch full message with sender info
          const { data } = await supabase
            .from("messages")
            .select("*, sender:profiles(full_name, avatar_url, role)")
            .eq("id", payload.new.id)
            .single();

          if (data) {
            setMessages((prev) => [...prev, data]);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [selectedProject]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!newMessage.trim() || !selectedProject || !user) return;

    await supabase.from("messages").insert({
      project_id: selectedProject,
      sender_id: user.id,
      content: newMessage.trim(),
      message_type: "text",
    });

    setNewMessage("");
  };

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-[600px]" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Messages</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-250px)]">
        {/* Project List */}
        <Card className="lg:col-span-1 overflow-auto">
          <CardHeader>
            <CardTitle className="text-lg">Projects</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 p-4 pt-0">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                className={cn(
                  "w-full text-left p-3 rounded-xl text-sm transition-colors",
                  selectedProject === project.id
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )}
              >
                <p className="font-medium truncate">{project.title}</p>
                <p
                  className={cn(
                    "text-xs mt-1",
                    selectedProject === project.id
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  )}
                >
                  {project.status.replace("_", " ")}
                </p>
              </button>
            ))}
            {projects.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-8">
                No projects found
              </p>
            )}
          </CardContent>
        </Card>

        {/* Chat Area */}
        <Card className="lg:col-span-3 flex flex-col">
          <CardHeader className="border-b">
            <CardTitle className="text-lg">
              {projects.find((p) => p.id === selectedProject)?.title ||
                "Select a project"}
            </CardTitle>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 overflow-auto p-4 space-y-4">
            {messages.map((msg) => {
              const isOwn = msg.sender_id === user?.id;

              return (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn("flex gap-3", isOwn && "flex-row-reverse")}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {(msg.sender as any)?.full_name?.[0] || "U"}
                  </div>
                  <div
                    className={cn(
                      "max-w-[70%] rounded-2xl px-4 py-3",
                      isOwn
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    <p className="text-sm">{msg.content}</p>
                    <p
                      className={cn(
                        "text-xs mt-1",
                        isOwn
                          ? "text-primary-foreground/60"
                          : "text-muted-foreground"
                      )}
                    >
                      {new Date(msg.created_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </motion.div>
              );
            })}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Message Input */}
          {selectedProject && (
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1"
                />
                <Button
                  variant="gradient"
                  size="icon"
                  onClick={sendMessage}
                  disabled={!newMessage.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}