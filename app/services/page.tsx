import { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { ServicesGrid } from "./ServicesGrid";
import { PageTransition } from "@/components/shared/PageTransition";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our comprehensive BPO services including call centers, virtual assistants, dispatch, web development, and SEO.",
};

/**
 * Services listing page
 * Fetches all active services from Supabase
 */
export default async function ServicesPage() {
  const supabase = createClient();

  const { data: services } = await supabase
    .from("services")
    .select("*")
    .eq("is_active", true)
    .order("sort_order");

  return (
    <PageTransition>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Services"
            title="End-to-End BPO Solutions"
            description="We offer a comprehensive suite of outsourcing services designed to scale your operations and reduce costs."
          />

          <ServicesGrid services={services || []} />
        </div>
      </section>
      <CTASection />
    </PageTransition>
  );
}