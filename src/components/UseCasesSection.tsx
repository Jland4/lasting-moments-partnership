import { FileText, Calendar, Heart, MessageCircle } from "lucide-react";

const useCases = [
  {
    icon: Calendar,
    title: "At-Need Arrangements",
    description: "Offer during arrangement conferences as a meaningful way to preserve a loved one's voice for future milestones.",
  },
  {
    icon: FileText,
    title: "Preneed Enhancement",
    description: "Include as a premium value addition to preneed packages, giving clients peace of mind for their legacy.",
  },
  {
    icon: Heart,
    title: "Aftercare Programs",
    description: "Extend care beyond the service with remembrance programs that keep families connected.",
  },
  {
    icon: MessageCircle,
    title: "Respectful Presentation",
    description: "Always presented thoughtfully, without pressure—letting families choose what's right for them.",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Integration
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
            How Funeral Homes Use Lasting Moments
          </h2>
          <p className="text-lg text-muted-foreground">
            Flexible integration into your existing service offerings
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.title}
              className="bg-background rounded-2xl p-8 card-elevated group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <useCase.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No tech management callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-muted/50 rounded-full px-6 py-3">
            <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-foreground font-medium">
              No technical management required by staff
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
