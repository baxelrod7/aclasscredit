import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight">
          Credit isn't luck. <br />
          It's <span className="text-gradient-gold">leverage</span>.
        </h2>
        <p className="text-muted-foreground mt-6 text-lg max-w-xl mx-auto">
          A 400 score and an 800 score don't live in the same financial world. We show you how to move up in class.
        </p>
        <Button variant="hero" size="lg" className="mt-10 px-10 py-6 text-base">
          Start My Free Assessment
          <ArrowRight className="w-5 h-5 ml-1" />
        </Button>
      </motion.div>
    </div>
  </section>
);

export default CtaSection;
