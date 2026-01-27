import { FileText } from "lucide-react";

const StaffResourcesSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Partner Materials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-8">
            Staff-Ready Resources
          </h2>
          
          <div className="bg-background rounded-2xl p-8 md:p-10 card-elevated">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-10 h-10 text-accent" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  One-Page Explainer
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Funeral homes receive a one-page explainer designed for arrangement conferences and preneed discussions, allowing counselors to explain Lasting Moments clearly in under two minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffResourcesSection;
