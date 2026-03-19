import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Clock,
} from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageTransition } from "@/components/shared/PageTransition";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { formatCurrency } from "@/lib/utils";
import type { Service } from "@/types";

interface Props {
  params: { slug: string };
}

/**
 * Dynamic service detail page
 * Fetches service data by slug from Supabase
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const supabase = createClient();
  const { data: service } = await supabase
    .from("services")
    .select("title, seo_title, seo_description, short_description")
    .eq("slug", params.slug)
    .single();

  if (!service) return { title: "Service Not Found" };

  return {
    title: service.seo_title || service.title,
    description: service.seo_description || service.short_description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const supabase = createClient();

  const { data: service } = await supabase
    .from("services")
    .select("*")
    .eq("slug", params.slug)
    .eq("is_active", true)
    .single();

  if (!service) notFound();

  const benefits: string[] = Array.isArray(service.benefits)
    ? service.benefits
    : [];
  const features: string[] = Array.isArray(service.features)
    ? service.features
    : [];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                {service.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
                {service.short_description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/quote">
                  <Button variant="gradient" size="xl" className="gap-2 group">
                    Request Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/booking">
                  <Button variant="outline" size="xl">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Description */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      {benefits.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <SectionHeading
              badge="Benefits"
              title="Why Choose This Service"
              description="Here's how this service will help your business grow."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={benefit} delay={index * 0.1}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="font-medium">{benefit}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      {features.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeading
              badge="Features"
              title="What's Included"
              description="A comprehensive breakdown of everything you get."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {features.map((feature, index) => (
                <AnimatedSection key={feature} delay={index * 0.05}>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing & CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <Card className="border-primary/20 shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white text-center">
                  <h3 className="text-2xl font-bold mb-2">
                    Ready to Get Started?
                  </h3>
                  {service.pricing?.starting_price && (
                    <div className="mt-4">
                      <p className="text-blue-200 text-sm">Starting at</p>
                      <p className="text-4xl font-bold">
                        {formatCurrency(service.pricing.starting_price)}
                        <span className="text-lg text-blue-200">
                          /{service.pricing.unit}
                        </span>
                      </p>
                    </div>
                  )}
                </div>
                <CardContent className="p-8 text-center">
                  <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                    {[
                      { icon: Shield, text: "No commitment required" },
                      { icon: Clock, text: "Response within 24 hours" },
                      { icon: Star, text: "100% satisfaction guarantee" },
                    ].map(({ icon: Icon, text }) => (
                      <span
                        key={text}
                        className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                      >
                        <Icon className="w-4 h-4 text-primary" />
                        {text}
                      </span>
                    ))}
                  </div>
                  <Link href="/quote">
                    <Button variant="gradient" size="xl" className="gap-2">
                      Request Custom Quote
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </PageTransition>
  );
}