import { Video, Users, CalendarCheck, ShieldCheck, Gift } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Video,
    title: "Record Your Messages",
    description: "Share your heart in simple guided recording sessions.",
  },
  {
    number: "02",
    icon: Users,
    title: "Choose Recipients",
    description: "Select the loved ones who will receive each message.",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Select Milestone Deliveries",
    description: "Pick the life moments when your message will arrive.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Verified Activation Process",
    description: "Secure verification ensures proper timing and release.",
  },
  {
    number: "05",
    icon: Gift,
    title: "Milestone Delivery",
    description: "Your loved ones receive your video at the perfect moment.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
            How Lasting Moments Works
          </h2>
          <p className="text-lg text-muted-foreground">
            A straightforward five-step journey from recording to delivery
          </p>
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
                  <div className="bg-background rounded-2xl p-6 card-elevated text-center h-full">
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
      </div>
    </section>
  );
};

export default HowItWorksSection;
