import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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
  price: "$50",
  priceLabel: "Per Month",
  highlight: false,
},
{
  name: "Bachelor's Degree - Credit Advancement",
  tagline: "Full Coaching + Tools",
  features: [
  "Everything in Associate Degree",
  "Custom improvement roadmap",
  "Automated dispute letter engine",
  "24/7 AI agent support",
  "Payment reminder scheduling",
  "Credit GPA grading system"],
  price: "$110",
  priceLabel: "Per Month",
  highlight: true,
},
{
  name: "Master's degree - Elite Credit Strategy",
  tagline: "Advanced + Priority",
  features: [
  "Everything in Bachelor's Degree",
  "Classify budgeting with tax prep",
  "A Class Credit Approval Lab - loan readiness tool with GPA scoring system",
  "Elite credit strategies",
  "Direct appointment booking"],
  price: "$180",
  priceLabel: "Per Month",
  highlight: false,
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
  "Credit Coaching strategy sessions (1 per month by appointment)",],
  price: "$100",
  priceLabel: "Per Month",
  highlight: false,
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
  highlight: false,
},
];

const ServicesSection = () => {

  // Load the CRC widget script once on mount
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.creditrepaircloud.com/app/widget.umd.cjs";
    script.async = true;
    script.onload = () => {
      if (window.createWidget) {
        window.createWidget({
          containerId: "crc-client-signup-widget",
          url: "https://aclasscredit.getcredithelpnow.com/billing",
          color: "#181B19",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  // Handler to proxy-click the widget's internal button
  const handleGetStarted = () => {
    const widgetBtn = document
      .getElementById("crc-client-signup-widget")
      ?.querySelector("button, a");
    if (widgetBtn) (widgetBtn as HTMLElement).click();
  };

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
        <p className="mt-4 text-secondary-foreground max-w-2xl mx-auto">
          Select the credit education package that fits your goals. Upgrade or downgrade anytime.
        </p>
      </motion.div>

      {/* Top row: First 3 boxes */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">
        {tiers.map((tier, i) =>
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className={`rounded-2xl p-8 flex flex-col bg-card shadow-card border ${tier.highlight ? 'border-accent ring-2 ring-accent' : 'border-border'}`}>
            {tier.highlight && (
              <span className="self-start text-xs font-bold uppercase tracking-wide bg-accent text-accent-foreground px-3 py-1 rounded-full -mt-12 mb-4">
                Most Popular
              </span>
            )}
            <h3 className="font-display text-2xl font-bold text-secondary-foreground">{tier.name}</h3>
            {tier.tagline ? (
              <p className="text-sm mt-1 mb-6 text-muted-foreground">{tier.tagline}</p>
            ) : (
              <div className="mb-6" />
            )}
            <ul className="space-y-3 flex-1">
              {tier.features.map((f) =>
                <li key={f} className="flex items-start gap-3 text-sm text-secondary-foreground">
                  <Check className="h-5 w-5 text-green-500 shrink-0" />
                  {f}
                </li>
              )}
            </ul>
            {/* FIX: Removed extra $ prefix — tier.price already contains the $ sign */}
            <div className="flex items-baseline justify-center gap-2 mt-6">
              <span className="text-white font-extrabold text-4xl">{tier.price}</span>
              <span className="text-muted-foreground text-sm font-medium leading-tight">Per Month</span>
            </div>
            <Button
              variant={tier.highlight ? "hero" : "gold"}
              className="mt-8 w-full"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
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
                <li key={f} className="flex items-start gap-3 text-sm text-secondary-foreground">
                  <Check className="h-5 w-5 text-green-500 shrink-0" />
                  {f}
                </li>
              )}
            </ul>
            {tier.price && (
              <div className="flex items-baseline justify-center gap-2 mt-6">
                <span className="text-white font-extrabold text-4xl">{tier.price}</span>
                <span className="text-muted-foreground text-sm font-medium leading-tight whitespace-pre-line">{tier.priceLabel}</span>
              </div>
            )}
            
              <Button variant="gold" className="mt-8 w-full">
                Coming Soon
              </Button>
            
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
                label: "Business Credit Elit",
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
            ].map((tier, i) => (
              <div key={tier.label} className="bg-navy-light/50 rounded-xl p-5">
                <h4 className="font-bold text-lg text-white mb-2">{tier.label}</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-extrabold text-white">{tier.price}</span>
                  <span className="text-white/60 text-sm">/{tier.period}</span>
                </div>
                <ul className="space-y-2">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-white/80">
                      <Check className="h-4 w-4 text-green-400 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            
              <Button variant="hero" className="px-10">
                Coming Soon
              </Button>
            
          </div>
        </div>
      </motion.div>

      {/* Hidden CRC widget mount point */}
      <div id="crc-client-signup-widget" style={{ display: "none" }} />

    </div>
  </section>
  );
};

export default ServicesSection;
