import { Rocket, Settings, Home, Palette, Headphones } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Simple Onboarding",
    description: "Get started quickly with minimal setup and training requirements.",
  },
  {
    icon: Settings,
    title: "Flexible Options",
    description: "Partnership structures designed to fit your business model.",
  },
  {
    icon: Home,
    title: "Independent-Friendly",
    description: "Tailored solutions for independent funeral homes of all sizes.",
  },
  {
    icon: Palette,
    title: "Co-Branded or White-Label",
    description: "Present Lasting Moments in a way that aligns with your brand.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Dedicated partner support included with every partnership.",
  },
];

const PartnershipSection = () => {
  return (
    <section id="partnership" className="py-24 warm-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Partnership Model
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
            A Partnership, Not a Vendor Relationship
          </h2>
          <p className="text-lg text-muted-foreground">
            We're committed to making Lasting Moments work for your funeral home
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card rounded-xl p-6 card-elevated text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/5 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
