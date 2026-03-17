import { motion } from "framer-motion";
import { Landmark, BarChart3, Bot, Handshake, GraduationCap, ShieldCheck } from "lucide-react";

const reasons = [
{ icon: Landmark, title: "Former Banking Insider", desc: "Prior bank and bureau experience provides a rare advantage in how disputes are handled." },
{ icon: BarChart3, title: "Data-Driven Tracking", desc: "Every action is measured, modeled, and optimized for maximum impact. Each client gets a \"Credit Report Card.\"" },
{ icon: Bot, title: "AI-Powered Assistant", desc: "24/7 credit coaching that answers questions and recommends next steps." },
{ icon: Handshake, title: "Real Industry Relationships", desc: "Connected with mortgage lenders, auto dealers, CPAs, and attorneys." },
{ icon: GraduationCap, title: "20 Years Experience", desc: "Most people never learn how credit actually works. Our program is structured from experience. We help people earn their degree from our credit journey." },
{ icon: ShieldCheck, title: "Full Credit Strategy", desc: "Good credit built through education, structure, and progression — not just removing negatives. We help you build, maintain, and protect your good credit." }];


const WhyUsSection = () =>
<section id="why-us" className="py-24 bg-hero-gradient">
    <div className="container mx-auto px-4 text-secondary-foreground">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16">
      
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary-foreground">Why Choose Us</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-secondary-foreground">
          This Isn't Credit Repair. <br className="hidden sm:block" />
          It's the <span className="text-gradient-gold">A Class Credit Academy</span>.
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-secondary-foreground">
        {reasons.map((r, i) =>
      <motion.div
        key={r.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        className="flex gap-4 p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-accent/30 transition-colors text-secondary-foreground">
        
            <r.icon className="w-6 h-6 text-accent shrink-0 mt-1" />
            <div>
              <h3 className="font-display font-bold mb-1 text-primary">{r.title}</h3>
              <p className="text-sm leading-relaxed text-secondary-foreground">{r.desc}</p>
            </div>
          </motion.div>
      )}
      </div>
    </div>
  </section>;


export default WhyUsSection;