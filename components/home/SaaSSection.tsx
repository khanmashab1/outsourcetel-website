"use client";

import { motion } from "framer-motion";
import { CheckCircle, BarChart3, Users, Lightbulb, Target, ArrowRight, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

/**
 * SaaS Specialization Section - PREMIUM ENHANCEMENT
 */
export function SaaSSection() {
  const keyPoints = [
    { icon: BarChart3, text: "Leveraging deep SaaS expertise", color: "text-teal" },
    { icon: Users, text: "Dedicated specialist teams", color: "text-gold" },
    { icon: Target, text: "Tailored solutions for your stack", color: "text-teal" },
    { icon: Lightbulb, text: "Innovation-first approach", color: "text-gold" },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-navy-deep/5 backdrop-blur-3xl -skew-x-12 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <AnimatedSection>
            <div className="max-w-xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal/10 border border-teal/20 text-teal font-bold text-xs uppercase tracking-widest mb-6"
              >
                <ShieldCheck className="w-4 h-4" />
                Enterprise Specialization
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy-deep leading-[0.95] mb-8">
                Empowering <br />
                <span className="text-teal italic">SaaS-Based</span><br />
                Outsourcing.
              </h2>
              
              <p className="text-navy-deep/70 text-lg md:text-xl font-medium leading-relaxed mb-10">
                OutsourceTel dominates the SaaS outsourcing landscape. Our elite 
                workforce is engineered to propel platform-based organizations to 
                the absolute peak of service excellence.
              </p>

              {/* Key Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {keyPoints.map(({ icon: Icon, text, color }) => (
                  <motion.div
                    key={text}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-teal/30 hover:bg-white hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 ${color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-navy-deep/80 leading-snug">{text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="/services/saas-management"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-navy-deep text-white font-bold hover:bg-teal transition-all duration-300 shadow-xl shadow-navy-deep/20"
              >
                Explore SaaS DNA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.a>
            </div>
          </AnimatedSection>

          {/* Right Visual - Ultra Premium Dashboard Mockup */}
          <AnimatedSection delay={0.2}>
            <div className="relative group">
              {/* Main Frame */}
              <div className="relative rounded-[2.5rem] bg-navy-deep p-1.5 shadow-[0_50px_100px_-20px_rgba(10,26,47,0.5)] overflow-hidden scale-100 group-hover:scale-[1.02] transition-transform duration-700">
                <div className="absolute inset-0 bg-mesh-navy opacity-30" />
                
                {/* Dashboard UI */}
                <div className="relative z-10 bg-navy-surface/90 backdrop-blur-xl rounded-[2.25rem] p-8 border border-white/5 overflow-hidden">
                  <div className="flex items-center justify-between mb-10">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/50 font-bold tracking-widest uppercase">
                      Live Ops Monitor
                    </div>
                  </div>

                  {/* Core Metrics */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 relative overflow-hidden group/card">
                      <div className="text-teal text-3xl font-black mb-1">427</div>
                      <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Active Units</div>
                      <div className="absolute -right-4 -bottom-4 w-12 h-12 bg-teal/10 rounded-full blur-xl group-hover/card:scale-150 transition-transform" />
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 relative overflow-hidden group/card">
                      <div className="text-gold text-3xl font-black mb-1">99.8%</div>
                      <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest">Uptime SLA</div>
                      <div className="absolute -right-4 -bottom-4 w-12 h-12 bg-gold/10 rounded-full blur-xl group-hover/card:scale-150 transition-transform" />
                    </div>
                  </div>

                  {/* Visual Chart Area */}
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-white/60 text-xs font-bold">Scaling Velocity</div>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-teal" />
                        <div className="w-2 h-2 rounded-full bg-gold" />
                      </div>
                    </div>
                    <div className="flex items-end gap-2 h-24">
                      {[35, 50, 40, 75, 60, 85, 95, 80, 100, 90].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0, opacity: 0 }}
                          whileInView={{ height: `${h}%`, opacity: 1 }}
                          transition={{ duration: 0.8, delay: 0.5 + i * 0.05 }}
                          className={`flex-1 rounded-full ${i > 7 ? 'bg-gold' : 'bg-teal/60'}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Activity Feed */}
                  <div className="space-y-4">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                        <div className="w-8 h-8 rounded-lg bg-teal/20 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-teal" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="h-2 w-[80%] bg-white/10 rounded-full" />
                          <div className="h-2 w-[40%] bg-white/5 rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Performance Indicator */}
              <motion.div
                animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass-card px-6 py-4 rounded-3xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center">
                    <Star className="w-6 h-6 text-gold fill-gold" />
                  </div>
                  <div>
                    <div className="text-white text-xl font-black leading-none">11X</div>
                    <div className="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-1">Projection Lift</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Security Badge */}
              <motion.div
                animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 glass-card px-6 py-4 rounded-3xl z-20 border-teal/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal/20 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-teal" />
                  </div>
                  <div>
                    <div className="text-white text-xl font-black leading-none">SECURE</div>
                    <div className="text-white/50 text-[10px] font-bold uppercase tracking-widest mt-1">Compliance Tier 1</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
