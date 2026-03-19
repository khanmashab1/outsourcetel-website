"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Loader2, Save, User, Building, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { createClient } from "@/lib/supabase/client";

export default function SettingsPage() {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user, profile } = useAuth();
  const supabase = createClient();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      full_name: profile?.full_name || "",
      company: profile?.company || "",
      phone: profile?.phone || "",
    },
  });

  const onSubmit = async (data: any) => {
    if (!user) return;
    setSaving(true);

    await supabase.from("profiles").update(data).eq("id", user.id);

    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-3xl font-bold">Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> Email
              </Label>
              <Input value={profile?.email || ""} disabled className="bg-muted" />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <User className="w-4 h-4" /> Full Name
              </Label>
              <Input {...register("full_name")} placeholder="Your full name" />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Building className="w-4 h-4" /> Company
              </Label>
              <Input {...register("company")} placeholder="Company name" />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> Phone
              </Label>
              <Input {...register("phone")} placeholder="+1 (555) 000-0000" />
            </div>

            <Button type="submit" variant="gradient" disabled={saving} className="gap-2">
              {saving ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              {saved ? "Saved!" : "Save Changes"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}