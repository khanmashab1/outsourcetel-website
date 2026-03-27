"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote, ArrowRight, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

/**
 * OutsourceTel Testimonials - PREMIUM & USER FRIENDLY
 */

const testimonials = [
  {
    name: "Noah Wilson",
    company: "TechScale Inc.",
    role: "CEO",
    content:
      "Exceptional service! OutsourceTel goes above and beyond to meet their customers' needs. They've integrated as a core growth engine for our SaaS operations. Our efficiency spiked 40% in just 90 days. I couldn't be happier with the results.",
    rating: 5,
    initials: "NW",
    color: "from-teal to-teal-800",
  },
  {
    name: "Liam Patel",
    company: "SwiftLogix",
    role: "Operations Director",
    content:
      "Outstanding quality and professionalism. I've been a loyal customer for years and have never been disappointed. Their team's expertise in streamlining our operations has been transformative for our business.",
    rating: 5,
    initials: "LP",
    color: "from-navy-surface to-navy-deep",
  },
  {
    name: "Olivia Martinez",
    company: "OmniRetail",
    role: "VP Customer Experience",
    content:
      "Reliable and trustworthy doesn't begin to describe OutsourceTel. I highly recommend this business to anyone looking for top-notch outsourcing solutions. Their 98% retention rate speaks for itself.",
    rating: 5,
    initials: "OM",
    color: "from-gold to-gold-800",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrent(
        (prev) => (prev + newDirection + testimonials.length) % testimonials.length
      );
    },
    []
  );

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 8000);
    return () => clearInterval(timer);
  }, [paginate]);

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({ x: direction < 0 ? 100 : -100, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section className="py-32 bg-navy-deep relative overflow-hidden">
      {/* Premium Accents */}
      <div className="absolute inset-0 bg-mesh-navy opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-gold font-black text-xs uppercase tracking-[0.3em] mb-8"
            >
              <ShieldCheck className="w-4 h-4 text-teal" />
              Elite Partnerships
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[0.95]">
              Trusted by <span className="text-teal italic">Industry Titans.</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto relative px-12">
          {/* Main Display Area */}
          <div className="relative min-h-[450px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full"
              >
                <div className="relative glass-card-light p-10 md:p-16 rounded-[3rem] border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden group">
                  {/* Visual Background Decor */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal/10 rounded-full blur-3xl group-hover:bg-gold/10 transition-all duration-700" />
                  
                  {/* Quote & Stars */}
                  <div className="flex items-center justify-between mb-10">
                    <Quote className="w-16 h-16 text-teal/20" />
                    <div className="flex gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-gold fill-gold shadow-gold-glow" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <div className="relative z-10 mb-12">
                    <p className="text-2xl md:text-4xl font-black text-white leading-[1.1] tracking-tight mb-4 group-hover:text-teal/90 transition-colors">
                      &ldquo;{t.content}&rdquo;
                    </p>
                  </div>

                  {/* Author Signature */}
                  <div className="flex items-center gap-5 border-t border-white/10 pt-10">
                    <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-black text-xl shadow-xl shadow-black/20 group-hover:scale-110 transition-transform`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-xl font-black text-white">{t.name}</p>
                      <p className="text-sm font-bold text-white/40 uppercase tracking-[0.2em]">
                        {t.role} <span className="text-teal mx-2">/</span> {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Precision Controls */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-white/50 hover:text-white hover:border-teal/50 hover:bg-teal/10 transition-all active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-white/50 hover:text-white hover:border-teal/50 hover:bg-teal/10 transition-all active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === current ? "bg-teal w-12" : "bg-white/10 w-2 hover:bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}