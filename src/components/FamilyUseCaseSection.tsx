import { Heart, GraduationCap, Baby } from "lucide-react";

const FamilyUseCaseSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Real-World Example
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              How Families Use Lasting Moments
            </h2>
          </div>

          <div className="bg-background rounded-2xl p-8 md:p-12 card-elevated">
            <div className="flex flex-col md:flex-row items-start gap-8">
              {/* Quote/Example */}
              <div className="flex-1">
                <p className="text-xl md:text-2xl text-foreground leading-relaxed font-serif italic">
                  "A father records a message for his daughter's wedding day, her college graduation, and the birth of her first child. Each message is delivered privately, years apart, exactly when intended."
                </p>
              </div>

              {/* Visual representation */}
              <div className="flex md:flex-col gap-4 md:gap-6">
                <div className="flex items-center gap-3 bg-muted/50 rounded-lg px-4 py-3">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  <span className="text-sm text-muted-foreground">Graduation</span>
                </div>
                <div className="flex items-center gap-3 bg-muted/50 rounded-lg px-4 py-3">
                  <Heart className="w-5 h-5 text-accent" />
                  <span className="text-sm text-muted-foreground">Wedding Day</span>
                </div>
                <div className="flex items-center gap-3 bg-muted/50 rounded-lg px-4 py-3">
                  <Baby className="w-5 h-5 text-accent" />
                  <span className="text-sm text-muted-foreground">First Child</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-center text-muted-foreground">
                This is what families remember. This is what sets your care apart.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyUseCaseSection;
