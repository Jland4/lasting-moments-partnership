import { Shield, Heart, Clock, Lock } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Professional Dignity",
    description: "Every interaction reflects the values of funeral service professionals.",
  },
  {
    icon: Heart,
    title: "Funeral Service Values",
    description: "Built with deep respect for the traditions and ethics of the industry.",
  },
  {
    icon: Clock,
    title: "Long-Term Reliability",
    description: "Designed to deliver messages decades into the future with certainty.",
  },
  {
    icon: Lock,
    title: "Respect for Families",
    description: "Privacy and security are fundamental to everything we do.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-24 warm-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
            Built for Trust & Industry Alignment
          </h2>
          <p className="text-lg text-muted-foreground">
            Our platform reflects the values that matter most to funeral professionals and the families they serve
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-card rounded-xl p-6 text-center card-elevated"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <value.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
