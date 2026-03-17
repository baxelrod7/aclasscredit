import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
{ label: "How It Works", href: "#how-it-works" },
{ label: "Why Us", href: "#why-us" },
{ label: "Services", href: "#services" },
{ label: "Testimonials", href: "#testimonials" },
{ label: "Partners", href: "#partners" }];


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/90 backdrop-blur-md border-b border-accent/10">
      <div className="container mx-auto flex items-center justify-between h-[9.5rem] px-4">
        <a href="/" className="flex items-center">
          <img src={logo} alt="A Class Credit" className="h-36 w-auto" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) =>
          <a
            key={l.href}
            href={l.href}
            className="text-sm font-medium transition-colors text-secondary-foreground">
            
              {l.label}
            </a>
          )}
          <a href="https://www.secureclientaccess.com/" target="_blank" rel="noopener noreferrer">
            <Button variant="gold" size="sm">
              Start My Credit Plan
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-navy-dark/95 backdrop-blur-md overflow-hidden">
          
            <div className="flex flex-col gap-3 px-4 py-4">
              {navLinks.map((l) =>
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors">
              
                  {l.label}
                </a>
            )}
              <a href="https://www.secureclientaccess.com/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
                <Button variant="gold" size="sm" className="mt-2 w-full">
                  Start My Credit Plan
                </Button>
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

};

export default Navbar;