import { motion } from "framer-motion";
import { Brain, Route, Radar } from "lucide-react";

const steps = [
{
  icon: Brain,
  title: "AI Credit Analysis",
  description: "Our AI analyzes your credit profile, identifies risk factors, and explains everything in plain English."
},
{
  icon: Route,
  title: "Custom Action Plan",
  description: "Receive a personalized roadmap with prioritized actions tailored to your goals — home, car, or business."
},
{
  icon: Radar,
  title: "Guided Execution",
  description: "We walk with you every step — monitoring progress, adjusting strategy, and keeping you on track."
}];


const HowItWorksSection = () =>
<section id="how-it-works" className="py-24 bg-background text-secondary-foreground">
    <div className="container mx-auto px-4">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16">
      
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary-foreground">How It Works</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
          Three Steps to <span className="text-gradient-gold">Better Credit</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, i) =>
      <motion.div
        key={step.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.15 }}
        className="relative bg-card rounded-xl p-8 shadow-card hover:shadow-card-hover transition-shadow group border-secondary-foreground">
        
            <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <step.icon className="w-7 h-7 text-accent" />
            </div>
            <span className="absolute top-6 right-6 text-5xl font-display font-bold text-primary">
              {i + 1}
            </span>
            <h3 className="font-display text-xl font-bold mb-3 text-foreground">{step.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
          </motion.div>
      )}
      </div>
    </div>
  </section>;


export default HowItWorksSection;