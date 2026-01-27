import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const PartnerCTASection = () => {
  return (
    <section id="contact" className="py-24 hero-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-primary-foreground mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
            Discover how Lasting Moments can become a meaningful addition to your family care offerings.
          </p>

          <div className="flex flex-col items-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:partners@lastingmoments.com">
                Request Partnership Information
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <p className="text-sm text-primary-foreground/60">
              No obligation. We respond within one business day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTASection;
