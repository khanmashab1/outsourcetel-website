"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  FileSearch,
  Rocket,
  BarChart3,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

/**
 * How it works section - Step-by-step process visualization
 * Shows the client journey from initial contact to ongoing support
 */
const steps = [
  {
    icon: MessageSquare,
    title: "Submit Your Request",
    description:
      "Tell us about your needs through our quote form or schedule a free consultation call.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileSearch,
    title: "Custom Proposal",
    description:
      "Our team analyzes your requirements and creates a tailored solution with transparent pricing.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Rocket,
    title: "Launch & Onboard",
    description:
      "We set up your dedicated team, integrate with your systems, and begin operations.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: BarChart3,
    title: "Monitor & Optimize",
    description:
      "Track performance in real-time through your dashboard. We continuously optimize for better results.",
    color: "from-green-500 to-emerald-500",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="How It Works"
          title="Get Started in 4 Simple Steps"
          description="Our streamlined process ensures a smooth transition and rapid time-to-value for your business."
        />

        <div className="relative">
          {/* Connection line (desktop only) */}
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection key={step.title} delay={index * 0.15}>
                <div className="relative text-center group">
                  {/* Step number */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-primary text-xs font-bold text-primary">
                      {index + 1}
                    </span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}