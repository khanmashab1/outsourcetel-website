"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Tag, ShieldCheck, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

/**
 * OutsourceTel Blog Highlights - PREMIUM UPGRADE
 */

const blogPosts = [
  {
    category: "BPO Insights",
    title: "How SaaS Companies Are Scaling 10x Faster via Outsourcing",
    excerpt:
      "Strategic playbooks from 500+ successful SaaS scale-ups reveal the 11X growth secret.",
    readTime: "6 min",
    date: "Mar 15, 2025",
    slug: "/blog/saas-outsourcing-scale",
    gradient: "from-teal to-teal-800",
    tag: "Featured",
  },
  {
    category: "Customer Success",
    title: "The DNA of World-Class CCaaS: A 10-Year Framework",
    excerpt:
      "Frameworks, metrics, and mindset shifts that deliver consistent 98%+ satisfaction.",
    readTime: "8 min",
    date: "Mar 10, 2025",
    slug: "/blog/ccaas-excellence",
    gradient: "from-navy-surface to-navy-deep",
    tag: "Pro Guide",
  },
  {
    category: "Dispatch Ops",
    title: "Recovering Lost Revenue in Modern Logistics Dispatch",
    excerpt:
      "3 common mistakes cost logistics firms 35% in revenue. Here's how to fix them today.",
    readTime: "5 min",
    date: "Mar 5, 2025",
    slug: "/blog/dispatch-efficiency",
    gradient: "from-gold to-gold-800",
    tag: "Case Study",
  },
];

export function BlogHighlights() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-navy-deep/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-navy-deep/5 text-teal font-black text-xs uppercase tracking-[0.2em] mb-6"
              >
                <Zap className="w-4 h-4 text-teal" />
                Latest Intelligence
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-black text-navy-deep leading-[0.95]">
                From the <span className="text-teal">OutsourceTel</span><br />
                Command Center.
              </h2>
            </div>
            
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-white border border-gray-200 text-navy-deep font-black text-sm uppercase tracking-widest hover:bg-navy-deep hover:text-white transition-all shadow-xl shadow-black/5"
              >
                View Full Archive
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </AnimatedSection>

        {/* Elite Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.slug} delay={index * 0.1}>
              <Link href={post.slug}>
                <motion.div
                  whileHover={{ y: -12 }}
                  className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:border-teal/30 hover:shadow-[0_40px_80px_-20px_rgba(10,26,47,0.1)] transition-all duration-500 cursor-pointer h-full flex flex-col"
                >
                  {/* Visual Header */}
                  <div className={`h-56 bg-gradient-to-br ${post.gradient} relative overflow-hidden p-8 flex flex-col justify-between`}>
                    <div className="absolute inset-0 bg-mesh-navy opacity-30" />
                    
                    <div className="relative z-10 flex justify-between items-start">
                      <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-[10px] font-black text-white uppercase tracking-widest">
                        {post.category}
                      </span>
                      <ShieldCheck className="w-6 h-6 text-white/40" />
                    </div>

                    <div className="relative z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white text-navy-deep text-[10px] font-black uppercase tracking-widest shadow-lg">
                        <Tag className="w-3 h-3 text-teal" />
                        {post.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-10 flex flex-col flex-1">
                    <h3 className="text-2xl font-black text-navy-deep mb-4 leading-tight group-hover:text-teal transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-navy-deep/50 font-medium leading-relaxed mb-8 flex-1 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-8 border-t border-gray-50">
                      <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-navy-deep/30">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                        <span>·</span>
                        <span>{post.date}</span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white transition-all">
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
