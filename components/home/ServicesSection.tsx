"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Settings,
  Headphones,
  Globe,
  Truck,
  ArrowRight,
  CheckCircle,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Cpu,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

/**
 * OutsourceTel Services Grid - PREMIUM REDESIGN
 */

const services = [
  {
    icon: Cpu,
    title: "SaaS Business Management",
    description:
      "Enterprise-grade infrastructure management and user success operations for platform-based systems.",
    features: [
      "Stack-wide optimization",
      "Executive reporting",
      "24/7 technical oversight",
      "Seamless tool stacking",
    ],
    href: "/services/saas-management",
    color: "from-teal to-teal-700",
    bgGlow: "rgba(0, 167, 181, 0.15)",
  },
  {
    icon: Headphones,
    title: "Contact Center Elite",
    description:
      "High-velocity omnichannel support with certified agents and real-time AI-driven analytics.",
    features: [
      "Omnichannel dominance",
      "Premium cert. agents",
      "Predictive analytics",
      "NPS-first culture",
    ],
    href: "/services/ccaas",
    color: "from-navy-surface to-navy-deep",
    bgGlow: "rgba(30, 58, 95, 0.15)",
  },
  {
    icon: Sparkles,
    title: "Global Talent Network",
    description:
      "Access the top 1% of remote professionals for engineering, data science, and creative leadership.",
    features: [
      "Engineering excellence",
      "Data intelligence",
      "Strategic creative",
      "Back-office scaling",
    ],
    href: "/services/offshore-talent",
    color: "from-gold to-gold-700",
    bgGlow: "rgba(255, 184, 0, 0.15)",
  },
  {
    icon: TrendingUp,
    title: "Logistics & Dispatch Ops",
    description:
      "Full-scale dispatch synchronization with real-time visibility and automated workflow engines.",
    features: [
      "Real-time fleet sync",
      "Automated load balancing",
      "Inventory precision",
      "KPI-driven logistics",
    ],
    href: "/services/dispatch",
    color: "from-teal to-gold",
    bgGlow: "rgba(0, 167, 181, 0.1)",
  },
];

export function ServicesSection() {
  return (
    <section className="py-32 bg-gray-50/50 relative overflow-hidden">
      {/* Premium Background Ambience */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-teal/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-navy-deep/5 text-navy-deep font-black text-xs uppercase tracking-[0.2em] mb-6"
            >
              <ShieldCheck className="w-4 h-4 text-teal" />
              Core Capabilities
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy-deep mb-8 leading-[0.95]">
              Elite <span className="text-teal">Solutions.</span><br />
              Enterprise <span className="text-gold">Scale.</span>
            </h2>
            
            <p className="text-navy-deep/60 text-lg md:text-xl font-medium leading-relaxed">
              Engineered for impact. We deliver end-to-end outsourcing frameworks 
              specifically designed to accelerate your bottom line.
            </p>
          </div>
        </AnimatedSection>

        {/* Dynamic Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.title} delay={index * 0.1}>
                <Link href={service.href}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="group relative bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-[0_20px_40px_-15px_rgba(10,26,47,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,167,181,0.2)] transition-all duration-500 overflow-hidden h-full cursor-pointer"
                  >
                    {/* Hover Glow Mask */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      {/* Premium Icon with Shadow */}
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-500 shadow-xl shadow-black/10 group-hover:rotate-3`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>

                      {/* Content Stack */}
                      <h3 className="text-2xl lg:text-3xl font-black text-navy-deep mb-4 group-hover:text-teal transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-navy-deep/60 font-medium leading-relaxed mb-8 group-hover:text-navy-deep/80 transition-colors">
                        {service.description}
                      </p>

                      {/* Minimalist Feature List */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                        {service.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0">
                              <CheckCircle className="w-3 h-3 text-teal" />
                            </div>
                            <span className="text-xs font-bold text-navy-deep/70 uppercase tracking-wider">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Interactive Link Label */}
                      <div className="flex items-center gap-2 text-teal font-black text-sm uppercase tracking-widest group-hover:gap-4 transition-all duration-300">
                        Analyze Solution
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>

                    {/* Background Decorative Element */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-navy-deep/5 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity" />
                  </motion.div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Global Action */}
        <AnimatedSection delay={0.4}>
          <div className="text-center mt-20">
            <Link href="/services">
              <Button
                size="xl"
                className="btn-premium px-12 h-16 rounded-2xl font-black text-lg shadow-2xl group"
              >
                View Full Ecosystem
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}