import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
{
  quote: "Joe took my score from 520 to 740 in under 8 months. I closed on my first home last spring. Life-changing.",
  name: "Marcus T.",
  role: "First-Time Homebuyer"
},
{
  quote: "As a realtor, I send every client to A Class Credit. They come back qualified and confident. Joe is the real deal.",
  name: "Danielle R.",
  role: "Real Estate Agent"
},
{
  quote: "I was ashamed of my credit. Joe's team made me feel empowered. 180-point jump and counting.",
  name: "Priya K.",
  role: "Small Business Owner"
}];


const TestimonialsSection = () =>
<section id="testimonials" className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16">
      
        <span className="text-sm font-semibold uppercase tracking-widest text-secondary-foreground">Testimonials</span>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
          Real People. <span className="text-gradient-gold">Real Results.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) =>
      <motion.div
        key={t.name}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.12 }}
        className="bg-card rounded-xl p-8 shadow-card flex flex-col">
        
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) =>
          <Star key={j} className="w-4 h-4 fill-accent text-accent" />
          )}
            </div>
            <p className="text-foreground/80 leading-relaxed flex-1 italic">"{t.quote}"</p>
            <div className="mt-6 pt-4 border-t border-border">
              <p className="font-display font-bold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
      )}
      </div>
    </div>
  </section>;


export default TestimonialsSection;