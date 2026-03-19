"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Loader2,
  Mail,
  Lock,
  User,
  Building,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { signupFormSchema, type SignupFormData } from "@/lib/validations";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupFormSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    setError("");

    const { error: authError } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          full_name: data.fullName,
          company: data.company,
          role: "client",
        },
      },
    });

    if (authError) {
      setError(authError.message);
      return;
    }

    setSuccess(true);
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-2">Account Created!</h2>
          <p className="text-muted-foreground mb-6">
            Check your email to verify your account, then sign in to access your
            dashboard.
          </p>
          <Link href="/login">
            <Button variant="gradient" size="lg">
              Go to Login
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
          </Link>
          <h1 className="text-3xl font-bold">Create Account</h1>
          <p className="text-muted-foreground mt-2">
            Get started with your BPO dashboard
          </p>
        </div>

        <Card className="shadow-xl">
          <CardContent className="p-8">
            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mb-6 p-4 rounded-xl bg-destructive/10 text-destructive text-sm"
              >
                {error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <User className="w-4 h-4" /> Full Name *
                </Label>
                <Input
                  placeholder="John Doe"
                  {...register("fullName")}
                  className={errors.fullName ? "border-destructive" : ""}
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Email *
                </Label>
                <Input
                  type="email"
                  placeholder="you@company.com"
                  {...register("email")}
                  className={errors.email ? "border-destructive" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Building className="w-4 h-4" /> Company
                </Label>
                <Input
                  placeholder="Your Company"
                  {...register("company")}
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Lock className="w-4 h-4" /> Password *
                </Label>
                <Input
                  type="password"
                  placeholder="Min 8 characters"
                  {...register("password")}
                  className={errors.password ? "border-destructive" : ""}
                />
                {errors.password && (
                  <p className="text-sm text-destructive">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Lock className="w-4 h-4" /> Confirm Password *
                </Label>
                <Input
                  type="password"
                  placeholder="Confirm password"
                  {...register("confirmPassword")}
                  className={
                    errors.confirmPassword ? "border-destructive" : ""
                  }
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-destructive">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary font-medium hover:underline"
              >
                Sign In
              </Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}