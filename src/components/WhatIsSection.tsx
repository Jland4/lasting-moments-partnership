import { Heart, GraduationCap, Cake, Baby, CalendarHeart, Sparkles } from "lucide-react";

const milestones = [
  { icon: GraduationCap, label: "Graduation" },
  { icon: Heart, label: "Wedding Day" },
  { icon: Cake, label: "Birthdays" },
  { icon: CalendarHeart, label: "Anniversaries" },
  { icon: Baby, label: "Birth of First Child" },
  { icon: Sparkles, label: "Custom Milestones" },
];

const WhatIsSection = () => {
  return (
    <section className="py-24 warm-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
            Your Voice, Delivered at Life's Biggest Milestones
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Lasting Moments helps families record heartfelt video messages and schedule them for future delivery after death at meaningful life moments.
          </p>
        </div>

        {/* Milestone Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {milestones.map((milestone, index) => (
            <div
              key={milestone.label}
              className="bg-card rounded-xl p-6 text-center card-elevated group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <milestone.icon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground">{milestone.label}</span>
            </div>
          ))}
        </div>

        {/* Key differentiator */}
        <div className="bg-card rounded-2xl p-8 md:p-12 card-elevated max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              This is Not Just Storage
            </span>
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
              A Secure Milestone Delivery System
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/5 flex items-center justify-center">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Verified Activation</h4>
              <p className="text-sm text-muted-foreground">
                Secure verification ensures proper timing and release after death
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/5 flex items-center justify-center">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Controlled Release</h4>
              <p className="text-sm text-muted-foreground">
                Messages delivered intentionally at the right moment
              </p>
            </div>

            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/5 flex items-center justify-center">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Private Delivery</h4>
              <p className="text-sm text-muted-foreground">
                Each message reaches only its intended recipient
              </p>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-lg text-foreground font-medium italic">
              "Messages are delivered exactly when they are meant to be received—even decades into the future."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
