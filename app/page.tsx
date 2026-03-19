import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { SaaSSection } from "@/components/home/SaaSSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { Differentiators } from "@/components/home/Differentiators";
import { Industries } from "@/components/home/Industries";
import { Testimonials } from "@/components/home/Testimonials";
import { BlogHighlights } from "@/components/home/BlogHighlights";
import { CTASection } from "@/components/home/CTASection";
import { PageTransition } from "@/components/shared/PageTransition";

/**
 * OutsourceTel Homepage
 * Sections ordered for maximum brand impact and conversion
 */
export default function HomePage() {
  return (
    <PageTransition>
      {/* 1. Hero - Full-screen dark navy with 11x headline */}
      <Hero />

      {/* 2. Stats Bar - Animated counters (navy background) */}
      <Stats />

      {/* 3. SaaS Specialization - Two-column with dashboard mockup */}
      <SaaSSection />

      {/* 4. Services Grid - 4-card with hover effects */}
      <ServicesSection />

      {/* 5. Differentiators - Why OutsourceTel (dark navy) */}
      <Differentiators />

      {/* 6. Industries - 8 industry cards grid */}
      <Industries />

      {/* 7. Testimonials - Auto-play carousel (dark navy) */}
      <Testimonials />

      {/* 8. Blog Highlights - 3 featured posts */}
      <BlogHighlights />

      {/* 9. Final CTA - "Unlock Your Potential" */}
      <CTASection />
    </PageTransition>
  );
}