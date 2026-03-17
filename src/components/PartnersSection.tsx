import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Building2, Car, Calculator, Briefcase, Scale, ShieldCheck, Rocket, Layers } from "lucide-react";

const partners = [
{ icon: Building2, label: "Realtors" },
{ icon: Car, label: "Auto Dealers" },
{ icon: Calculator, label: "CPAs" },
{ icon: Briefcase, label: "Financial Planners" },
{ icon: Scale, label: "Attorneys" },
{ icon: ShieldCheck, label: "Insurance Agents" },
{ icon: Rocket, label: "Entrepreneurs" },
{ icon: Layers, label: "B2B White-Labeling" }];


const PartnersSection = () =>
<section id="partners" className="py-24 bg-hero-gradient">
    <div className="container mx-auto px-4">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-14">
      
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary-foreground">Affiliate Program</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-secondary-foreground">
          Become an <span className="text-gradient-gold">A Class Partner</span>
        </h2>
        <p className="mt-4 max-w-lg mx-auto text-secondary-foreground">
          Earn commissions, co-brand landing pages, and give your clients an unfair advantage.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mb-12">
        {partners.map((p, i) =>
      <motion.div
        key={p.label}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.06 }}
        className="flex items-center gap-2 px-5 py-3 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 text-sm font-medium text-secondary-foreground">
        
            <p.icon className="w-4 h-4 text-accent" />
            {p.label}
          </motion.div>
      )}
      </div>

      <div className="text-center">
        <Button variant="hero" size="lg" className="px-10 py-6">
          Apply to Partner Program
        </Button>
      </div>
    </div>
  </section>;


export default PartnersSection;