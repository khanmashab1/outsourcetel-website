"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShoppingBag,
  Megaphone,
  Truck,
  Car,
  Users,
  UserCheck,
  CreditCard,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

/**
 * Industries Served Section - PREMIUM OVERHAUL
 */

const industries = [
  {
    icon: ShoppingBag,
    title: "Food Delivery Elite",
    description: "Order syncing, rapid dispatch & VIP support for high-volume delivery ecosystems.",
    stat: "Instant Sync",
    href: "/industries/food-delivery",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Megaphone,
    title: "Inside Sales Mastery",
    description: "Cold-calling, lead nurturing & pipeline domination for high-growth SaaS firms.",
    stat: "11X Lead Gen",
    href: "/industries/sales-marketing",
    color: "from-teal to-teal-800",
  },
  {
    icon: Truck,
    title: "Elite Transportation",
    description: "Precision freight coordination & 24/7 carrier synchronicity solutions.",
    stat: "35% Cost Cut",
    href: "/industries/transportation",
    color: "from-blue-600 to-navy-deep",
  },
  {
    icon: Car,
    title: "Fleet Synchronization",
    description: "Predictive fleet monitoring, route optimization & driver safety ops.",
    stat: "40% Efficiency",
    href: "/industries/fleet-management",
    color: "from-navy-surface to-navy-deep",
  },
  {
    icon: Car,
    title: "Taxi & Limo VIP",
    description: "High-end booking logistics & executive dispatch management globally.",
    stat: "Zero Downtime",
    href: "/industries/taxi-limo",
    color: "from-gold to-gold-700",
  },
  {
    icon: Users,
    title: "Customer Retention",
    description: "Proactive account management systems designed for maximum lifetime value.",
    stat: "99% Retention",
    href: "/industries/customer-success",
    color: "from-green-500 to-emerald-700",
  },
  {
    icon: UserCheck,
    title: "Platform Onboarding",
    description: "Frictionless setup cycles to accelerate user time-to-value for new products.",
    stat: "60% Faster",
    href: "/industries/onboarding",
    color: "from-purple-500 to-purple-800",
  },
  {
    icon: CreditCard,
    title: "Billing & Treasury",
    description: "High-accuracy reconciliation, recovery & professional collections.",
    stat: "99.9% Accuracy",
    href: "/industries/billing",
    color: "from-teal to-gold",
  },
];

export function Industries() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Premium Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-navy-deep/5 text-teal font-black text-xs uppercase tracking-[0.2em] mb-8"
            >
              <ShieldCheck className="w-4 h-4 text-teal" />
              Vertical Domination
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black text-navy-deep mb-8 leading-[0.95]">
              Specialized <span className="text-teal">Intelligence.</span><br />
              Universal <span className="text-gold">Impact.</span>
            </h2>
            
            <p className="text-navy-deep/60 text-lg md:text-xl font-medium leading-relaxed">
              We don&apos;t just horizontal scale; we go deep into your vertical DNA 
              to engineer industry-specific success.
            </p>
          </div>
        </AnimatedSection>

        {/* 4x2 Grid with Hover Dominance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <AnimatedSection key={industry.title} delay={index * 0.05}>
                <Link href={industry.href}>
                  <motion.div
                    whileHover={{ y: -12, scale: 1.02 }}
                    className="group relative bg-gray-50/80 border border-gray-100 rounded-[2rem] p-8 hover:bg-white hover:border-teal/30 hover:shadow-[0_40px_80px_-30px_rgba(0,167,181,0.2)] transition-all duration-500 cursor-pointer h-full"
                  >
                    {/* Floating Glow Dot */}
                    <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-teal opacity-0 group-hover:opacity-100 group-hover:animate-ping" />

                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-all duration-500 shadow-xl shadow-black/10`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="text-lg lg:text-xl font-black text-navy-deep mb-3 leading-tight group-hover:text-teal transition-colors">
                      {industry.title}
                    </h3>

                    <p className="text-sm font-medium text-navy-deep/50 leading-relaxed mb-6 group-hover:text-navy-deep/80 transition-colors">
                      {industry.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100/50">
                      <span className="text-[10px] font-black uppercase tracking-widest text-teal bg-teal/10 px-3 py-1.5 rounded-full overflow-hidden relative">
                        {industry.stat}
                        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </span>
                      <ArrowRight className="w-5 h-5 text-teal opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
