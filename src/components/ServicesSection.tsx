import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

// Widget script loader
const useCreditRepairCloudWidget = () => {
  useEffect(() => {
    // Check if widget script already exists
    if (document.getElementById("crc-widget-script")) return;

    // Create and append the script
    const script = document.createElement("script");
    script.id = "crc-widget-script";
    script.src = "https://app.creditrepaircloud.com/app/widget.umd.cjs";
    script.async = true;
    document.body.appendChild(script);

    // Initialize widget after script loads
    script.onload = () => {
      if (window.createWidget) {
        window.createWidget({
          text: "Sign Up For $0 Today",
          color: "#6366f1", // Use site's accent color
          containerId: "crc-widget-widget1",
          url: "https://aclasscredit.getcredithelpnow.com/billing"
        });
        window.createWidget({
          text: "Sign Up For $0 Today",
          color: "#6366f1",
          containerId: "crc-widget-widget2",
          url: "https://aclasscredit.getcredithelpnow.com/billing"
        });
        window.createWidget({
          text: "Sign Up For $0 Today",
          color: "#6366f1",
          containerId: "crc-widget-widget3",
          url: "https://aclasscredit.getcredithelpnow.com/billing"
        });
      }
    };

    return () => {
      // Cleanup on unmount
      const existingScript = document.getElementById("crc-widget-script");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);
};

const tiers = [
{
  name: "Associate Degree - Credit Foundations",
  tagline: "Education + AI Tools",
  features: [
  "AI credit report analysis",
  "Score projection simulator",
  "Credit education micro-lessons",
  "Utilization tracking alerts",
  "AI Chat Credit Coach"],

  highlight: false
},
{
  name: "Bachelor's Degree – Credit Advancement",
  tagline: "Full Coaching + Disputes",
  features: [
  "Everything in Associate Degree",
  "Custom improvement roadmap",
  "Automated dispute letter engine",
  "24/7 AI agent support",
  "Payment reminder scheduling",
  "Credit GPA grading system"],

  highlight: true
},
{
  name: "Master's Degree – Elite Credit Strategy",
  tagline: "Advanced Strategy + Wealth",
  features: [
  "Everything in Bachelor's Degree",
  "Classify budgeting with tax prep",
  "A Class Credit Approval Lab - loan readiness tool with GPA scoring system",
  "Elite credit strategies",
  "Direct appointment booking"],

  highlight: false
}];

const bottomTiers = [
  {
    name: "Continuing Ed Credit Courses",
    tagline: "Choose Your Course",
    features: [
      "Credit monitoring with ID theft protection",
      "A Class Credit Approval Lab - loan readiness tool with GPA scoring system",
      "Classify budgeting with tax prep",
      "24/7 AI credit coaching assistant",
      "Credit Coaching strategy sessions (1 per month by appointment)",
    ],
    price: "$100",
    priceLabel: "Per Month\nPick Any 2 Services",
  },
  {
    name: "B2B A Class Credit",
    tagline: "Realtors - Car Dealers - Loan Officers",
    features: [
      "A Class Credit Approval Lab - client loan readiness tool with GPA scoring system",
      "Classify budgeting with tax prep",
    ],
    price: "$100",
    priceLabel: "Per Month",
  },
];

const ServicesSection = () => {
  useCreditRepairCloudWidget();

  return (
  <section id="services" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16">
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary-foreground">Membership Tiers</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
          Choose Your <span className="text-gradient-gold">Credit Class</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
          Monthly membership. No one-time fees. Cancel anytime.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tiers.map((tier, i) =>
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className={`rounded-2xl p-8 flex flex-col ${
              tier.highlight
                ? "bg-navy text-primary-foreground ring-2 ring-accent shadow-gold scale-[1.03]"
                : "bg-card shadow-card border border-border"
            }`}>
            {tier.highlight && (
              <span className="self-start text-xs font-bold uppercase tracking-wide bg-accent text-accent-foreground px-3 py-1 rounded-full mb-4">
                Most Popular
              </span>
            )}
            <h3 className="font-display text-2xl font-bold text-secondary-foreground">{tier.name}</h3>
            <p className={`text-sm mt-1 mb-6 ${tier.highlight ? "text-white/70" : "text-muted-foreground"}`}>
              {tier.tagline}
            </p>
            <ul className="space-y-3 flex-1">
              {tier.features.map((f) =>
                <li key={f} className="flex items-start gap-2 text-sm text-secondary-foreground">
                  <Check className={`w-4 h-4 mt-0.5 shrink-0 text-accent`} />
                  <span className={tier.highlight ? "text-white" : "text-foreground/80"}>{f}</span>
                </li>
              )}
            </ul>
            {i === 0 && (
              <div className="flex items-baseline justify-center gap-2 mt-6">
                <span className="text-white font-extrabold text-4xl">$50</span>
                <span className="text-muted-foreground text-sm font-medium leading-tight">Per Month</span>
              </div>
            )}
            {i === 1 && (
              <div className="flex items-baseline justify-center gap-2 mt-6">
                <span className="text-white font-extrabold text-4xl">$110</span>
                <span className="text-muted-foreground text-sm font-medium leading-tight">Per Month</span>
              </div>
            )}
            {i === 2 && (
              <div className="flex items-baseline justify-center gap-2 mt-6">
                <span className="text-white font-extrabold text-4xl">$180</span>
                <span className="text-muted-foreground text-sm font-medium leading-tight">Per Month</span>
              </div>
            )}
            <div id="crc-widget-widget1" className="mt-8 w-full min-h-[50px] flex items-center justify-center"></div>
          </motion.div>
        )}
      </div>

      {/* Bottom row: 4th & 5th boxes centered */}
      <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto mt-6 justify-center">
        {bottomTiers.map((tier, i) =>
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="rounded-2xl p-8 flex flex-col bg-card shadow-card border border-border md:w-[calc(33.333%-0.5rem)]">
            <h3 className="font-display text-2xl font-bold text-secondary-foreground">{tier.name}</h3>
            {tier.tagline ? (
              <p className="text-sm mt-1 mb-6 text-muted-foreground">{tier.tagline}</p>
            ) : (
              <div className="mb-6" />
            )}
            <ul className="space-y-3 flex-1">
              {tier.features.map((f) =>
                <li key={f} className="flex items-start gap-2 text-sm text-secondary-foreground">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                  <span className="text-foreground/80">{f}</span>
                </li>
              )}
            </ul>
            {tier.price && (
              <div className="flex items-baseline justify-center gap-2 mt-6">
                <span className="text-white font-extrabold text-4xl">{tier.price}</span>
                <span className="text-muted-foreground text-sm font-medium leading-tight whitespace-pre-line">{tier.priceLabel}</span>
              </div>
            )}
            <div id="crc-widget-widget2" className="mt-8 w-full min-h-[50px] flex items-center justify-center"></div>
          </motion.div>
        )}
      </div>

      {/* 6th box – Business Degree */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mt-6"
      >
        <div className="rounded-2xl p-8 md:p-10 bg-navy text-primary-foreground ring-2 ring-accent shadow-gold">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wide bg-accent text-accent-foreground px-3 py-1 rounded-full">
              For Entrepreneurs
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-secondary-foreground mt-4">
              A Class Credit Business Degree
            </h3>
            <p className="text-sm mt-1 text-white/70">
              Institute for Higher Learning for Entrepreneurs
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              {
                label: "Business Credit Foundations",
                price: "$30",
                period: "Per Month",
                features: [
                  "Credit monitoring",
                  "Basic business dashboard",
                  "Fundability business profile",
                  "Alerts",
                  "Basic roadmap",
                  "AI coaching",
                ],
              },
              {
                label: "Business Credit Advancement",
                price: "$80",
                period: "Per Month",
                features: [
                  "Everything in Foundations",
                  "Vendor intelligence database",
                  "Advanced roadmap",
                  "Business credit builder",
                  "Funding probability engine",
                  "Capital stack planner",
                  "AI credit strategist",
                  "Marketplace access",
                ],
              },
              {
                label: "Business Credit Elite",
                price: "$150",
                period: "Per Month",
                features: [
                  "Everything in Advancement",
                  "Advanced funding strategy",
                  "Deeper probability modeling",
                  "Classify budgeting with tax prep",
                  "Priority support",
                  "Lender matching",
                  "Advanced analytics",
                  "AI underwriting insights",
                ],
              },
            ].map((t) => (
              <div
                key={t.label}
                className="rounded-xl border border-accent/30 bg-white/5 backdrop-blur-sm p-5 flex flex-col"
              >
                <div className="text-center mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                    {t.label}
                  </span>
                  <div className="mt-2">
                    <span className="text-white font-extrabold text-3xl">{t.price}</span>
                    <span className="text-muted-foreground text-sm font-medium ml-1">{t.period}</span>
                  </div>
                </div>
                <ul className="space-y-2 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
                      <span className="text-white/90">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div id="crc-widget-widget3" className="inline-block min-h-[50px]"></div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
  );
};


export default ServicesSection;