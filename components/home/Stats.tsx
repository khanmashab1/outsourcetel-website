"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Clock, Globe, Heart } from "lucide-react";

/**
 * OutsourceTel Stats — VIVID UPGRADE
 */

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Certified Agents",
    icon: Users,
    color: "text-teal",
    iconBg: "bg-teal/15",
    borderColor: "border-teal/20",
    glowColor: "from-teal/20 to-transparent",
  },
  {
    value: 10,
    suffix: "+",
    label: "Years Experience",
    icon: Clock,
    color: "text-gold",
    iconBg: "bg-gold/15",
    borderColor: "border-gold/20",
    glowColor: "from-gold/20 to-transparent",
  },
  {
    value: 30,
    suffix: "+",
    label: "Global Partners",
    icon: Globe,
    color: "text-lavender",
    iconBg: "bg-lavender/15",
    borderColor: "border-lavender/20",
    glowColor: "from-lavender/20 to-transparent",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention",
    icon: Heart,
    color: "text-mint",
    iconBg: "bg-mint/15",
    borderColor: "border-mint/20",
    glowColor: "from-mint/20 to-transparent",
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
    const duration = 2000;
    const steps = 60;
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
    <section className="py-20 bg-mesh-dark relative overflow-hidden" ref={ref}>
      {/* Divider lines */}
      <div className="section-divider-glow absolute top-0 left-0 w-full" />
      <div className="section-divider-glow absolute bottom-0 left-0 w-full" />
      <div className="absolute inset-0 bg-dots" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className={`relative glass-card p-8 rounded-3xl ${stat.borderColor} hover:bg-white/8 transition-all duration-500 group-hover:-translate-y-2 text-center`}>
                  {/* Gradient glow on hover */}
                  <div className={`absolute -top-8 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-b ${stat.glowColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${stat.iconBg} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className={`w-7 h-7 ${stat.color}`} />
                  </div>

                  {/* Counter */}
                  <div className={`text-4xl md:text-5xl font-heading font-extrabold mb-2 tracking-tight ${stat.color}`}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} isInView={isInView} />
                  </div>

                  {/* Label */}
                  <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}