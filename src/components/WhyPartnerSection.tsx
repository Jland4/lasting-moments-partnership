import { Heart, Home, Sparkles, TrendingUp, Shield, Users } from "lucide-react";

const familyBenefits = [
  {
    icon: Heart,
    title: "Continued Connection",
    description: "Families maintain a meaningful bond after loss",
  },
  {
    icon: Sparkles,
    title: "Comfort at Milestones",
    description: "Presence felt during life's biggest moments",
  },
  {
    icon: Users,
    title: "Deeply Personal",
    description: "Each message is uniquely crafted for its recipient",
  },
  {
    icon: Shield,
    title: "Sense of Presence",
    description: "A lasting connection that endures through time",
  },
];

const businessBenefits = [
  {
    icon: TrendingUp,
    title: "Meaningful Differentiation",
    description: "Stand out with a unique, high-value offering",
  },
  {
    icon: Sparkles,
    title: "Optional Enhancement",
    description: "Flexible addition without pressure",
  },
  {
    icon: Home,
    title: "No Inventory Required",
    description: "Zero logistics or storage concerns",
  },
  {
    icon: Heart,
    title: "Trust & Referrals",
    description: "Strengthen relationships with families",
  },
];

const WhyPartnerSection = () => {
  return (
    <section id="why-partner" className="py-24 warm-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Partnership Benefits
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
            Why Funeral Homes Partner With Lasting Moments
          </h2>
          <p className="text-lg text-muted-foreground">
            An extension of professional care—creating value for families and your business
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* For Families */}
          <div className="bg-card rounded-2xl p-8 card-elevated">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-foreground">
                For Families
              </h3>
            </div>

            <div className="space-y-4">
              {familyBenefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Funeral Homes */}
          <div className="bg-card rounded-2xl p-8 card-elevated">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Home className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-foreground">
                For Funeral Homes
              </h3>
            </div>

            <div className="space-y-4">
              {businessBenefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4 p-4 rounded-xl bg-background/50 hover:bg-background transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Integration callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 flex-wrap justify-center bg-card rounded-2xl px-8 py-6 card-elevated">
            <p className="text-foreground font-medium">
              Seamless fit with your existing services:
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent">Preneed</span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent">At-Need</span>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent">Aftercare</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;
