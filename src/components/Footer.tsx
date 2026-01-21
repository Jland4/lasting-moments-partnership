const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-lg font-bold">L</span>
              </div>
              <span className="font-serif text-xl font-semibold text-primary-foreground">
                Lasting Moments
              </span>
            </div>
            <p className="text-primary-foreground/60 max-w-md text-sm leading-relaxed">
              Helping funeral homes offer families a secure, milestone-based video legacy service that delivers a loved one's voice at life's most meaningful moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#why-partner" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Why Partner
                </a>
              </li>
              <li>
                <a href="#partnership" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Partnership Model
                </a>
              </li>
              <li>
                <a href="#resources" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Partner Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:partners@lastingmoments.com" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  partners@lastingmoments.com
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                  Schedule a Demo
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/50">
              © {currentYear} Lasting Moments. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
