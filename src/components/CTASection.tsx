import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 hero-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary-foreground mb-6">
            Partner With Lasting Moments
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
            Offer families a way to hear their loved one's voice—at the moments that matter most.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:partners@lastingmoments.com">
                Request Partnership Information
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="mailto:demo@lastingmoments.com">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Demo
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/50">
            We respond to all inquiries within one business day
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
