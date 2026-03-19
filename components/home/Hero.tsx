"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  CheckCircle,
  Award,
  Globe,
  TrendingUp,
  Headphones,
  Star,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * OutsourceTel Hero Section - PREMIUM UPGRADE
 */
export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const floatingElements = [
    {
      icon: Headphones,
      position: "top-[15%] left-[6%]",
      delay: 0,
      label: "500+ Agents",
      color: "from-teal to-teal-600",
    },
    {
      icon: Globe,
      position: "top-[25%] right-[8%]",
      delay: 1.5,
      label: "30+ Partners",
      color: "from-gold to-gold-600",
    },
    {
      icon: TrendingUp,
      position: "bottom-[30%] left-[10%]",
      delay: 1,
      label: "98% Retention",
      color: "from-teal to-navy-500",
    },
    {
      icon: Sparkles,
      position: "bottom-[40%] right-[12%]",
      delay: 2,
      label: "Top Provider",
      color: "from-gold to-teal",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-mesh-navy">
      {/* Dynamic Glow Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-teal/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] bg-navy-surface/60 rounded-full blur-[150px]" 
        />
      </div>

      {/* Grid Pattern Overlay with Fade */}
      <div className="absolute inset-0 bg-dots opacity-20 mask-image:linear-gradient(to_bottom,black,transparent)" />

      {/* Floating Animated Badges (Desktop Only) */}
      {floatingElements.map(({ icon: Icon, position, delay, label, color }, i) => (
        <motion.div
          key={i}
          className={`absolute ${position} hidden 2xl:flex items-center gap-3 glass-card px-4 py-2 rounded-2xl z-20`}
          animate={{ y: [-12, 12, -12], rotate: [-1, 1, -1] }}
          transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg shadow-black/20`}>
            <Icon className="w-5 h-5 text-white" />
          </div>
          <span className="text-white/90 text-sm font-semibold tracking-wide">{label}</span>
          <div className="absolute -inset-0.5 bg-gradient-to-br from-white/20 to-transparent rounded-2xl blur-sm opacity-50" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Elite Badge */}
          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-gold font-bold tracking-widest text-xs uppercase shadow-2xl">
              <div className="flex -space-x-1">
                {[1,2,3].map(i => <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />)}
              </div>
              <span className="text-white/80">Award-Winning BPO Provider 2024</span>
              <div className="flex -space-x-1">
                {[1,2,3].map(i => <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />)}
              </div>
            </div>
          </motion.div>

          {/* Epic Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-white"
          >
            Boost Projections{" "}
            <span className="relative inline-block text-gold text-glow-gold italic">
              11X
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute -bottom-2 left-0 w-full h-2 bg-teal rounded-full" 
              />
            </span>
            <br />
            <span className="gradient-text font-black">OutsourceTel</span>
          </motion.h1>

          {/* Premium Sub-text */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
          >
            Elite Business Process Outsourcing. Streamline operations, 
            slash costs, and dominate your market with our certified formula.
          </motion.p>

          {/* High-Impact Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Link href="/booking">
              <Button
                size="xl"
                className="btn-premium px-10 h-16 text-lg font-bold rounded-2xl group min-w-[240px]"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="xl"
                variant="outline"
                className="bg-white/5 hover:bg-white/10 border-white/20 text-white px-10 h-16 text-lg font-bold rounded-2xl backdrop-blur-xl transition-all"
              >
                <Play className="mr-3 w-6 h-6 fill-teal text-teal" />
                Watch Formula
              </Button>
            </Link>
          </motion.div>

          {/* Trust Ecosystem */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
          >
            {[
              { icon: CheckCircle, text: "24/7 Global Elite Ops" },
              { icon: CheckCircle, text: "ISO 27001 Certified" },
              { icon: CheckCircle, text: "Direct Executive Access" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center group-hover:bg-teal transition-colors">
                  <item.icon className="w-4 h-4 text-teal group-hover:text-white" />
                </div>
                <span className="text-white/60 text-sm font-semibold tracking-wide uppercase">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}