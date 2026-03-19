import { Metadata } from "next";
import { PricingCalculator } from "@/components/pricing/PricingCalculator";
import { PageTransition } from "@/components/shared/PageTransition";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Pricing Calculator",
  description:
    "Calculate the cost of our BPO services with our interactive pricing tool.",
};

export default function PricingPage() {
  return (
    <PageTransition>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Pricing"
            title="Transparent Pricing Calculator"
            description="Get an instant estimate for our services. Customize your requirements and see real-time pricing."
          />
          <PricingCalculator />
        </div>
      </section>
      <CTASection />
    </PageTransition>
  );
}