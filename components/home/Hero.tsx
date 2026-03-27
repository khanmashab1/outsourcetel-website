"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Globe,
  TrendingUp,
  Headphones,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * OutsourceTel Hero - VIVID COLOR COMBO
 */
export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-mesh-hero">
      {/* ── Living Orbs ── */}
      <motion.div
        animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] left-[5%] w-[500px] h-[500px] bg-teal/15 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -50, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[10%] right-[5%] w-[600px] h-[600px] bg-lavender/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-gold/8 rounded-full blur-[80px] pointer-events-none"
      />

      {/* ── Dot grid ── */}
      <div className="absolute inset-0 bg-dots" />

      {/* ── Floating Badges (2xl+) ── */}
      {[
        { icon: Headphones, label: "500+ Agents", pos: "top-[18%] left-[6%]", color: "from-teal to-teal-700", delay: 0 },
        { icon: Globe, label: "30+ Partners", pos: "top-[22%] right-[7%]", color: "from-gold to-coral", delay: 1.5 },
        { icon: TrendingUp, label: "98% Retention", pos: "bottom-[32%] left-[8%]", color: "from-lavender to-lavender/80", delay: 1 },
        { icon: Sparkles, label: "Elite Provider", pos: "bottom-[38%] right-[10%]", color: "from-mint to-teal", delay: 2 },
      ].map(({ icon: Icon, label, pos, color, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute ${pos} hidden 2xl:flex items-center gap-3 glass-card-vivid px-5 py-3 rounded-2xl z-20`}
          animate={{ y: [-10, 10, -10], rotate: [-1, 1, -1] }}
          transition={{ duration: 7, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <span className="text-white/90 text-sm font-semibold">{label}</span>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* ── Enterprise Badge ── */}
          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass-card-vivid">
              <Sparkles className="w-4 h-4 text-teal" />
              <span className="text-white/80 text-xs font-bold uppercase tracking-[0.2em]">
                Enterprise Specialization
              </span>
              <Sparkles className="w-4 h-4 text-teal" />
            </div>
          </motion.div>

          {/* ── Main Headline ── */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight leading-[0.95] mb-8 text-white"
          >
            Empowering
            <br />
            <span className="relative inline-block">
              <span className="gradient-text">SaaS-Based</span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.2, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-teal via-lavender to-gold rounded-full origin-left"
              />
            </span>
            <br />
            <span className="text-white/90">Outsourcing.</span>
          </motion.h1>

          {/* ── Sub-headline ── */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
          >
            OutsourceTel dominates the SaaS outsourcing landscape. Our elite workforce is engineered
            to propel platform-based organizations to the absolute peak of service excellence.
          </motion.p>

          {/* ── CTA Buttons ── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
          >
            <Link href="/services">
              <button className="btn-premium px-10 h-16 text-lg font-bold rounded-2xl text-white group flex items-center gap-3 min-w-[260px] justify-center">
                Explore SaaS DNA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </Link>
            <Link href="/services">
              <button className="btn-outline-premium px-10 h-16 text-lg font-bold rounded-2xl text-white flex items-center gap-3 min-w-[260px] justify-center group">
                <Play className="w-5 h-5 fill-teal text-teal group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </Link>
          </motion.div>

          {/* ── Feature Pills ── */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {[
              "Leveraging deep SaaS expertise",
              "Dedicated specialist teams",
              "Tailored solutions for your stack",
              "Innovation-first approach",
            ].map((feature, i) => (
              <span
                key={i}
                className="px-5 py-2.5 bg-white/5 rounded-full text-sm text-white/60 border border-white/10 font-medium hover:bg-white/10 hover:text-white/80 transition-all cursor-default"
              >
                {feature}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}