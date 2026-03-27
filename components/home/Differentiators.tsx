"use client";

import { motion } from "framer-motion";
import {
  Users,
  Clock,
  Globe,
  Heart,
  Cpu,
  TrendingUp,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

/**
 * Differentiators / Why Us Section - PREMIUM POLISH
 */

const differentiators = [
  {
    icon: Users,
    title: "500+ Certified Agents",
    description: "Elite workforce with rigorous 3rd-party certification and monthly elite training cycles.",
    stat: "500+",
    color: "from-teal to-teal-800",
    glow: "rgba(0,167,181,0.2)",
  },
  {
    icon: Clock,
    title: "10+ Years of Mastery",
    description: "Over a decade of dominance in the BPO space, refining the growth formula daily.",
    stat: "10+",
    color: "from-navy-surface to-navy-deep",
    glow: "rgba(30,58,95,0.2)",
  },
  {
    icon: Globe,
    title: "30+ Global Partners",
    description: "Access to the world's most advanced technology stacks and infrastructure partners.",
    stat: "30+",
    color: "from-gold to-gold-800",
    glow: "rgba(255,184,0,0.2)",
  },
  {
    icon: Heart,
    title: "98% Client Retention",
    description: "Deep-rooted partnerships built on exceeding benchmarks and delivering consistent results.",
    stat: "98%",
    color: "from-teal to-navy-deep",
    glow: "rgba(0,167,181,0.15)",
  },
  {
    icon: Cpu,
    title: "Cutting-Edge Technology",
    description: "AI-driven automation, real-time analytics, and neural operations for maximum efficiency.",
    stat: "AI",
    color: "from-navy-deep to-teal",
    glow: "rgba(10,26,47,0.25)",
  },
  {
    icon: TrendingUp,
    title: "Flexible & Scalable",
    description: "Solutions that grow with your business from mid-market to global enterprise.",
    stat: "∞",
    color: "from-teal to-gold",
    glow: "rgba(0,167,181,0.15)",
  },
];

export function Differentiators() {
  return (
    <section className="py-32 bg-navy-deep relative overflow-hidden">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 bg-mesh-navy opacity-60" />
      <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-teal/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gold font-black text-xs uppercase tracking-[0.3em] mb-8 shadow-2xl"
            >
              <Zap className="w-4 h-4 text-teal animate-pulse" />
              The OutsourceTel Edge
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] mb-8">
              Why <span className="text-teal italic">Dominate</span><br />
              With Us?
            </h2>
            
            <p className="text-white/40 text-lg md:text-xl font-medium max-w-2xl mx-auto tracking-wide">
              We separate the elite from the standard. OutsourceTel is the 
              definitive choice for data-driven, high-velocity growth.
            </p>
          </div>
        </AnimatedSection>

        {/* 3-Column Elite Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => {
            const Icon = item.icon;
            return (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative h-full glass-card p-10 rounded-[2.5rem] border-white/10 hover:border-teal/50 hover:bg-white/10 transition-all duration-500 cursor-default"
                >
                  {/* Subtle Corner Glow */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity blur-3xl`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-xl shadow-black/40 group-hover:rotate-6 transition-transform group-hover:shadow-${item.color}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-black text-gold tracking-tighter opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">{item.stat}</div>
                        <div className="text-white/20 text-[10px] font-black uppercase tracking-widest mt-1">Metric Rank</div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-teal transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/50 font-medium leading-relaxed group-hover:text-white/70 transition-colors">
                      {item.description}
                    </p>
                  </div>

                  {/* Geometric Decoration */}
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 border-l border-b border-white/5 rounded-bl-[2rem] opacity-50 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
