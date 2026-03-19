"use client";

import { AnimatedSection } from "./AnimatedSection";
import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

/**
 * Consistent section heading component
 * Used across all page sections for visual consistency
 */
export function SectionHeading({
  badge,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-16`}
    >
      {badge && (
        <Badge
          variant="secondary"
          className="mb-4 px-4 py-1.5 text-sm bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
        >
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}