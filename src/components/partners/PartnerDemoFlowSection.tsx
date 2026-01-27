import { MessageSquare, FileText, Video, ShieldCheck, Gift } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Introduce",
    description: "A funeral home introduces Lasting Moments as an optional legacy enhancement.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Inform",
    description: "Interested families receive a simple explainer and decide in their own time.",
  },
  {
    number: "03",
    icon: Video,
    title: "Record",
    description: "Families record messages privately, outside the arrangement conference.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Secure",
    description: "Lasting Moments securely manages storage, verification, and delivery.",
  },
  {
    number: "05",
    icon: Gift,
    title: "Deliver",
    description: "Messages are delivered to loved ones at the selected milestones.",
  },
];

const PartnerDemoFlowSection = () => {
  return (
    <section className="py-24 warm-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
            What a Partnership Looks Like in Practice
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line - hidden on mobile */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Card */}
                  <div className="bg-card rounded-2xl p-6 card-elevated text-center h-full">
                    {/* Step number */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                        {step.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mt-4 mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-accent" />
                    </div>

                    {/* Content */}
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow - between cards on desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-4 z-10">
                      <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Supporting line */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-card rounded-xl px-6 py-4 card-elevated">
            <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-foreground font-medium">
              Your staff remains focused on care and service — not technology.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerDemoFlowSection;
