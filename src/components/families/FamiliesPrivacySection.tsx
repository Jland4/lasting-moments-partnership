import { Shield, Clock, Lock } from "lucide-react";

const FamiliesPrivacySection = () => {
  return (
    <section className="py-24 warm-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Your Peace of Mind
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
            Private. Secure. Delivered as Intended.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            Messages are securely protected and delivered only at the moments you choose. Loved ones receive them when they matter most — no sooner, no later.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 card-elevated text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Lock className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Encrypted & Protected
              </h3>
              <p className="text-sm text-muted-foreground">
                Your messages are securely encrypted from recording to delivery.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 card-elevated text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Timed Delivery
              </h3>
              <p className="text-sm text-muted-foreground">
                Messages arrive exactly when you intended — at life's milestones.
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 card-elevated text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Shield className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Private Access
              </h3>
              <p className="text-sm text-muted-foreground">
                Only your intended recipients can access their messages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamiliesPrivacySection;
