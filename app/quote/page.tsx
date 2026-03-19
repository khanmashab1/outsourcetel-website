import { Metadata } from "next";
import { CheckCircle, Clock, Shield, Award } from "lucide-react";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { PageTransition } from "@/components/shared/PageTransition";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Get a free, customized quote for our BPO services. We respond within 24 hours.",
};

export default function QuotePage() {
  const highlights = [
    {
      icon: Clock,
      title: "24-Hour Response",
      desc: "We review every request within one business day.",
    },
    {
      icon: Shield,
      title: "No Commitment",
      desc: "Our quotes are free with no obligation.",
    },
    {
      icon: Award,
      title: "Custom Solutions",
      desc: "Every quote is tailored to your specific needs.",
    },
    {
      icon: CheckCircle,
      title: "Transparent Pricing",
      desc: "No hidden fees or surprise charges.",
    },
  ];

  return (
    <PageTransition>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left column - Info */}
            <AnimatedSection direction="right">
              <div className="sticky top-32">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Let&apos;s Build Something{" "}
                  <span className="text-gradient">Amazing</span> Together
                </h1>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  Tell us about your project and we&apos;ll create a custom
                  solution that fits your budget and timeline.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {highlights.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right column - Form */}
            <AnimatedSection direction="left">
              <QuoteForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}