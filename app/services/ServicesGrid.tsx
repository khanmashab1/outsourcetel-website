"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  PhoneIncoming,
  PhoneOutgoing,
  UserCheck,
  Truck,
  Globe,
  Search,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import type { Service } from "@/types";
import { formatCurrency } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  PhoneIncoming,
  PhoneOutgoing,
  UserCheck,
  Truck,
  Globe,
  Search,
};

const categories = [
  "All",
  "Call Center",
  "Virtual Assistant",
  "Dispatch Services",
  "Web Development",
  "SEO",
];

export function ServicesGrid({ services }: { services: Service[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            size="sm"
            className="rounded-full"
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Services grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredServices.map((service, index) => {
          const Icon = iconMap[service.icon || "Globe"] || Globe;

          return (
            <AnimatedSection key={service.id} delay={index * 0.1}>
              <motion.div layout>
                <Link href={`/services/${service.slug}`}>
                  <Card className="h-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <Badge variant="secondary">{service.category}</Badge>
                      </div>

                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.short_description}
                      </p>

                      {/* Pricing */}
                      {service.pricing?.starting_price && (
                        <div className="mb-4 p-3 rounded-xl bg-muted/50">
                          <p className="text-sm text-muted-foreground">
                            Starting at
                          </p>
                          <p className="text-lg font-bold text-primary">
                            {formatCurrency(service.pricing.starting_price)}{" "}
                            <span className="text-sm font-normal text-muted-foreground">
                              /{service.pricing.unit}
                            </span>
                          </p>
                        </div>
                      )}

                      <span className="inline-flex items-center text-sm font-medium text-primary gap-1 group-hover:gap-2 transition-all">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </AnimatedSection>
          );
        })}
      </motion.div>
    </>
  );
}