"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Clock, Globe, Heart, Zap } from "lucide-react";

/**
 * OutsourceTel Stats Bar - PREMIUM GLOW UP
 */

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Certified Agents",
    icon: Users,
    color: "text-teal",
    bgGlow: "bg-teal/20",
    border: "border-teal/20",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    icon: Clock,
    color: "text-gold",
    bgGlow: "bg-gold/20",
    border: "border-gold/20",
  },
  {
    value: 30,
    suffix: "+",
    label: "Global Partners",
    icon: Globe,
    color: "text-teal",
    bgGlow: "bg-teal/20",
    border: "border-teal/20",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention",
    icon: Heart,
    color: "text-gold",
    bgGlow: "bg-gold/20",
    border: "border-gold/20",
  },
];

function AnimatedCounter({
  value,
  suffix,
  isInView,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2500;
    const steps = 80;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-navy-deep relative overflow-hidden" ref={ref}>
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-mesh-navy opacity-40" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                {/* Visual Connector Line (Lg only) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-white/10 to-transparent z-0" />
                )}

                <div className={`relative z-10 transition-transform duration-500 group-hover:-translate-y-2 glass-card p-8 rounded-3xl border ${stat.border} hover:bg-white/10`}>
                  {/* Icon with Ring */}
                  <div className={`w-16 h-16 rounded-2xl ${stat.bgGlow} flex items-center justify-center mx-auto mb-6 relative group-hover:scale-110 transition-all duration-500`}>
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                    <div className="absolute -inset-2 bg-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Counter */}
                  <div className={`text-4xl md:text-5xl lg:text-6xl font-black mb-3 tracking-tighter ${stat.color} text-center`}>
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      isInView={isInView}
                    />
                  </div>

                  {/* Label with micro-zap */}
                  <div className="flex items-center justify-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-white/20 group-hover:text-gold transition-colors" />
                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
                    <Zap className="w-3.5 h-3.5 text-white/20 group-hover:text-gold transition-colors" />
                  </div>
                  
                  {/* Subtle Background Badge */}
                  <div className="absolute -bottom-2 -right-2 text-white/5 font-black text-6xl pointer-events-none select-none">
                    0{index + 1}
                  </div>
                </div>
                
                {/* Glow behind card */}
                <div className={`absolute inset-0 ${stat.bgGlow} blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}