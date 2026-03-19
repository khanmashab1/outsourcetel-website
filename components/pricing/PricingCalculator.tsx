"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  Users,
  Clock,
  Monitor,
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { formatCurrency } from "@/lib/utils";

/**
 * Interactive pricing calculator
 * Users select service type, team size, hours, and features
 * Dynamic price estimation with smooth animations
 */

interface PricingConfig {
  service: string;
  agents: number;
  hoursPerDay: number;
  daysPerWeek: number;
  features: string[];
}

const serviceRates: Record<string, number> = {
  "call-center": 8,
  "virtual-assistant": 6,
  dispatch: 12,
  "web-development": 25,
  seo: 20,
};

const serviceLabels: Record<string, string> = {
  "call-center": "Call Center",
  "virtual-assistant": "Virtual Assistant",
  dispatch: "Dispatch Services",
  "web-development": "Web Development",
  seo: "SEO Services",
};

const featureOptions = [
  { id: "24-7", label: "24/7 Coverage", multiplier: 1.3 },
  { id: "multilingual", label: "Multilingual Support", multiplier: 1.2 },
  { id: "dedicated-manager", label: "Dedicated Account Manager", multiplier: 1.1 },
  { id: "reporting", label: "Advanced Reporting", multiplier: 1.05 },
  { id: "quality-assurance", label: "Quality Assurance", multiplier: 1.1 },
  { id: "training", label: "Custom Training", multiplier: 1.15 },
];

export function PricingCalculator() {
  const [config, setConfig] = useState<PricingConfig>({
    service: "call-center",
    agents: 5,
    hoursPerDay: 8,
    daysPerWeek: 5,
    features: [],
  });

  // Calculate base monthly cost
  const baseRate = serviceRates[config.service] || 8;
  const weeksPerMonth = 4.33;
  const baseMonthlyCost =
    baseRate *
    config.agents *
    config.hoursPerDay *
    config.daysPerWeek *
    weeksPerMonth;

  // Apply feature multipliers
  const featureMultiplier = config.features.reduce((mult, featureId) => {
    const feature = featureOptions.find((f) => f.id === featureId);
    return mult * (feature?.multiplier || 1);
  }, 1);

  const totalMonthlyCost = Math.round(baseMonthlyCost * featureMultiplier);
  const costPerAgent = Math.round(totalMonthlyCost / config.agents);
  const savingsVsUS = Math.round(totalMonthlyCost * 1.6); // Estimated US cost

  const toggleFeature = (featureId: string) => {
    setConfig((prev) => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter((f) => f !== featureId)
        : [...prev.features, featureId],
    }));
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Configuration Panel */}
        <div className="lg:col-span-2 space-y-8">
          {/* Service Selection */}
          <AnimatedSection>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-primary" />
                  Select Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {Object.entries(serviceLabels).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() =>
                        setConfig((prev) => ({ ...prev, service: key }))
                      }
                      className={`p-4 rounded-xl border-2 text-sm font-medium transition-all duration-200 ${
                        config.service === key
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-muted hover:border-primary/30"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Team Size */}
          <AnimatedSection delay={0.1}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Team Size
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Number of agents
                    </span>
                    <span className="text-2xl font-bold text-primary">
                      {config.agents}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={1}
                    max={50}
                    value={config.agents}
                    onChange={(e) =>
                      setConfig((prev) => ({
                        ...prev,
                        agents: Number(e.target.value),
                      }))
                    }
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1</span>
                    <span>25</span>
                    <span>50</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Hours Configuration */}
          <AnimatedSection delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Working Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Hours per day
                      </span>
                      <span className="font-semibold">
                        {config.hoursPerDay}h
                      </span>
                    </div>
                    <input
                      type="range"
                      min={4}
                      max={24}
                      value={config.hoursPerDay}
                      onChange={(e) =>
                        setConfig((prev) => ({
                          ...prev,
                          hoursPerDay: Number(e.target.value),
                        }))
                      }
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        Days per week
                      </span>
                      <span className="font-semibold">
                        {config.daysPerWeek}d
                      </span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={7}
                      value={config.daysPerWeek}
                      onChange={(e) =>
                        setConfig((prev) => ({
                          ...prev,
                          daysPerWeek: Number(e.target.value),
                        }))
                      }
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Feature Add-ons */}
          <AnimatedSection delay={0.3}>
            <Card>
              <CardHeader>
                <CardTitle>Feature Add-ons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {featureOptions.map((feature) => (
                    <button
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                        config.features.includes(feature.id)
                          ? "border-primary bg-primary/5"
                          : "border-muted hover:border-primary/30"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                          config.features.includes(feature.id)
                            ? "bg-primary border-primary"
                            : "border-muted-foreground/30"
                        }`}
                      >
                        {config.features.includes(feature.id) && (
                          <Check className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <div>
                        <p className="text-sm font-medium">{feature.label}</p>
                        <p className="text-xs text-muted-foreground">
                          +{Math.round((feature.multiplier - 1) * 100)}%
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        {/* Price Summary Panel */}
        <div className="lg:col-span-1">
          <div className="sticky top-32">
            <AnimatedSection direction="left">
              <Card className="shadow-xl border-primary/20 overflow-hidden">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Calculator className="w-5 h-5" />
                    <span className="text-sm font-medium text-blue-200">
                      Estimated Monthly Cost
                    </span>
                  </div>
                  <motion.div
                    key={totalMonthlyCost}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl font-bold"
                  >
                    {formatCurrency(totalMonthlyCost)}
                    <span className="text-lg text-blue-200">/mo</span>
                  </motion.div>
                </div>
                <CardContent className="p-6 space-y-6">
                  {/* Breakdown */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                      Breakdown
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Service</span>
                        <span className="font-medium">
                          {serviceLabels[config.service]}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Agents</span>
                        <span className="font-medium">{config.agents}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Base rate
                        </span>
                        <span className="font-medium">
                          {formatCurrency(baseRate)}/hr
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Cost/agent
                        </span>
                        <span className="font-medium">
                          {formatCurrency(costPerAgent)}/mo
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Savings */}
                  <div className="p-4 rounded-xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
                    <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                      Estimated Savings vs. US Staffing
                    </p>
                    <p className="text-2xl font-bold text-green-700 dark:text-green-400">
                      {formatCurrency(savingsVsUS - totalMonthlyCost)}
                      <span className="text-sm font-normal">/mo</span>
                    </p>
                  </div>

                  {/* Selected features */}
                  {config.features.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        Selected Features
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {config.features.map((featureId) => {
                          const feature = featureOptions.find(
                            (f) => f.id === featureId
                          );
                          return (
                            <Badge key={featureId} variant="secondary">
                              {feature?.label}
                            </Badge>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <Link href="/quote">
                    <Button
                      variant="gradient"
                      size="lg"
                      className="w-full gap-2 group"
                    >
                      Get Custom Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>

                  <p className="text-xs text-center text-muted-foreground">
                    Final pricing may vary based on specific requirements
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}