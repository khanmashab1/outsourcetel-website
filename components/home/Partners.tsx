"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

/**
 * Partner/client logos section
 * Infinite scrolling marquee effect for social proof
 */
const partners = [
  "Microsoft",
  "Google",
  "Amazon",
  "Salesforce",
  "HubSpot",
  "Shopify",
  "Stripe",
  "Slack",
];

export function Partners() {
  return (
    <section className="py-16 border-y bg-muted/20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider font-medium">
            Trusted by leading companies
          </p>
        </AnimatedSection>

        <div className="overflow-hidden relative">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

          <motion.div
            className="flex gap-16 items-center"
            animate={{ x: [0, -1200] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner}-${i}`}
                className="flex-shrink-0 text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors whitespace-nowrap"
              >
                {partner}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}