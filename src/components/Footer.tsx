const Footer = () =>
<footer className="bg-navy-dark border-t border-accent/10 py-12 text-secondary-foreground">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-display text-lg font-bold text-secondary-foreground">
            A Class <span className="text-gradient-gold">Credit</span>
          </span>
          <p className="text-primary-foreground/40 text-sm mt-1">A Better Class of Credit</p>
        </div>
        <div className="flex gap-6 text-sm text-primary-foreground/50">
          <a href="#" className="transition-colors text-primary">Privacy</a>
          <a href="#" className="transition-colors text-primary">Terms</a>
          <a href="#" className="transition-colors text-primary">Contact</a>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center text-xs text-secondary-foreground">
        © {new Date().getFullYear()} A Class Credit. All rights reserved.
      </div>
    </div>
  </footer>;


export default Footer;