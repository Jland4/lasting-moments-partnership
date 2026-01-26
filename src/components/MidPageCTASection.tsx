import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MidPageCTASection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
            Ready to Learn More?
          </h3>
          <p className="text-muted-foreground mb-8">
            See how Lasting Moments can work for your funeral home
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="cta" size="lg" asChild>
              <a href="#contact">
                Request Partnership Information
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            No obligation. We respond within one business day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MidPageCTASection;
