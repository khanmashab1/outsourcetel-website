"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Zap, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";

/**
 * OutsourceTel Final CTA - PREMIUM TERMINATOR
 */
export function CTASection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="relative rounded-[3rem] overflow-hidden group">
            {/* Ultra Premium Mesh Background */}
            <div className="absolute inset-0 bg-mesh-navy opacity-100 transition-transform duration-[10s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-dots opacity-20" />

            {/* Kinetic Glow Blobs */}
            <motion.div 
              animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
              transition={{ duration: 15, repeat: Infinity }}
              className="absolute -top-20 -left-20 w-96 h-96 bg-teal/20 rounded-full blur-[100px]" 
            />
            <motion.div 
              animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
              transition={{ duration: 20, repeat: Infinity, delay: 2 }}
              className="absolute -bottom-20 -right-20 w-[30rem] h-[30rem] bg-gold/10 rounded-full blur-[120px]" 
            />

            <div className="relative z-10 py-24 md:py-32 px-10 md:px-20 text-center">
              {/* Elite Signal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-gold font-black text-xs uppercase tracking-[0.3em] mb-10 shadow-2xl"
              >
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-teal"></span>
                </div>
                Ready to Dominate?
              </motion.div>

              {/* Mega Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter"
              >
                Unlock Your <span className="text-teal italic">Potential</span><br />
                <span className="gradient-text">Scale Without Limits.</span>
              </motion.h2>

              {/* Persuasive Sub-text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white/50 text-xl md:text-2xl font-medium max-w-3xl mx-auto mb-14 leading-relaxed"
              >
                Join the 500+ elite organizations that leverage OutsourceTel 
                to maintain 11X growth projections. Your platform deserves 
                premium synchronicity.
              </motion.p>

              {/* Kinetic Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
              >
                <Link href="/booking">
                  <Button
                    size="xl"
                    className="btn-premium px-12 h-20 text-xl font-black rounded-3xl group shadow-[0_20px_50px_rgba(0,167,181,0.3)] min-w-[280px]"
                  >
                    Start Your Journey
                    <ArrowRight className="ml-3 w-7 h-7 group-hover:translate-x-3 transition-transform" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="xl"
                    variant="outline"
                    className="bg-white/5 hover:bg-white/10 border-white/20 text-white px-12 h-20 text-xl font-black rounded-3xl backdrop-blur-xl transition-all min-w-[280px] group"
                  >
                    <Phone className="mr-3 w-6 h-6 text-teal group-hover:scale-110 transition-transform" />
                    Contact Sales
                  </Button>
                </Link>
              </motion.div>

              {/* Trust Reassurance */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-8 mt-16"
              >
                {[
                  { icon: ShieldCheck, text: "Zero Long-term Risk" },
                  { icon: Zap, text: "Rapid Node Activation" },
                  { icon: Sparkles, text: "Elite Certified Stack" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 group cursor-default">
                    <item.icon className="w-5 h-5 text-white/20 group-hover:text-gold transition-colors" />
                    <span className="text-white/30 text-xs font-black uppercase tracking-widest">{item.text}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}