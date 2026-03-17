import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () =>
<section
  className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16"
  style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
  
    {/* Overlay */}
    <div className="absolute inset-0 bg-navy-dark/60" />

    <div className="container relative z-10 mx-auto px-4 py-20 text-center text-primary-foreground border-primary">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto">
      
        <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-8 border-primary bg-primary-foreground">
          <Shield className="w-4 h-4 text-accent" />
          <span className="text-xs font-semibold tracking-wide uppercase bg-primary-foreground text-secondary-foreground">
            AI-Powered Credit Coaching
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-secondary-foreground">
          Upgrade to{" "}
          <span className="text-gradient-gold">A Better Class</span>
          {" "}of Credit
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light text-secondary-foreground">
          AI-powered credit coaching designed to help you build, rebuild, and master your credit — with a real expert by your side.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" className="text-base px-8 py-6">
            Start My Credit Plan
            <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
          <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
            Book Consultation
          </Button>
        </div>

        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-14 flex flex-wrap items-center justify-center gap-8 text-primary-foreground/50 text-sm">
        
          <span>✓ 20 Years Experience</span>
          <span>✓ 100–200 Point Improvements</span>
          <span>✓ Thousands of Clients</span>
        </motion.div>
      </motion.div>
    </div>
  </section>;


export default HeroSection;