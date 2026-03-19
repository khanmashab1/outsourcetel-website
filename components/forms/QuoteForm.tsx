"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle,
  Loader2,
  User,
  Mail,
  Phone,
  Building,
  MessageSquare,
  DollarSign,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { quoteFormSchema, type QuoteFormData } from "@/lib/validations";
import { siteConfig } from "@/config/site";
import { createClient } from "@/lib/supabase/client";

/**
 * Smart quote request form with validation and success animation
 * Stores submissions in Supabase and creates both a lead and a quote
 */

const services = [
  "Inbound Call Center",
  "Outbound Call Center",
  "Virtual Assistant",
  "Dispatch Services",
  "Web Development",
  "SEO Services",
];

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const supabase = createClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    try {
      // Create lead in Supabase
      const { error: leadError } = await supabase.from("leads").insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company: data.company || null,
        budget: data.budget,
        message: data.message,
        source: "quote_form",
        status: "new",
      });

      if (leadError) throw leadError;

      // Create quote record
      const { error: quoteError } = await supabase.from("quotes").insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company: data.company || null,
        budget_range: data.budget,
        requirements: data.message,
        status: "pending",
      });

      if (quoteError) throw quoteError;

      // Trigger notification (API route)
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      setIsSubmitted(true);
      reset();
    } catch (error) {
      console.error("Error submitting quote:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Card className="shadow-xl border-0 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
        <CardTitle className="text-2xl">Request a Free Quote</CardTitle>
        <p className="text-blue-100 mt-2">
          Fill out the form below and we&apos;ll get back to you within 24
          hours.
        </p>
      </CardHeader>
      <CardContent className="p-8">
        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.2,
                }}
              >
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">
                Quote Request Submitted!
              </h3>
              <p className="text-muted-foreground mb-6">
                Our team will review your request and get back to you within 24
                hours.
              </p>
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                Submit Another Request
              </Button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6"
            >
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4" /> Full Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    {...register("name")}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    {...register("email")}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone & Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Phone
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+1 (555) 000-0000"
                    {...register("phone")}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center gap-2">
                    <Building className="w-4 h-4" /> Company
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your Company"
                    {...register("company")}
                  />
                </div>
              </div>

              {/* Service & Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="service" className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" /> Service *
                  </Label>
                  <select
                    id="service"
                    {...register("service")}
                    className="flex h-10 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-sm text-destructive">
                      {errors.service.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget" className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4" /> Budget Range *
                  </Label>
                  <select
                    id="budget"
                    {...register("budget")}
                    className="flex h-10 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select budget range</option>
                    {siteConfig.budgetRanges.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                  {errors.budget && (
                    <p className="text-sm text-destructive">
                      {errors.budget.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" /> Project Details *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project requirements, goals, and timeline..."
                  rows={5}
                  {...register("message")}
                  className={errors.message ? "border-destructive" : ""}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="gradient"
                size="xl"
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Quote Request
                  </>
                )}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}