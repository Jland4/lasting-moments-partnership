import { motion } from "framer-motion";
import { TrendingUp, Target, Users, Award, Settings } from "lucide-react";

const benefits = [
  {
    title: "New Revenue Without New Overhead",
    description:
      "Lasting Moments is offered as a premium enhancement with flexible profit-sharing models and no upfront costs. There is no inventory, no technical management, and no additional staffing required.",
  },
  {
    title: "Exclusive Differentiation in Your Market",
    description:
      "Lasting Moments is not a commoditized product. Funeral homes that partner gain a unique offering that competitors do not have—creating clear separation in a crowded marketplace.",
  },
  {
    title: "High-Perceived Value for Families",
    description:
      "Families choose Lasting Moments because of meaning, not pressure. This leads to strong acceptance without uncomfortable pricing conversations.",
  },
  {
    title: "Long-Term Brand Impact",
    description:
      "Families remember—and talk about—experiences that matter. Lasting Moments creates powerful word-of-mouth and reinforces your firm as thoughtful, innovative, and family-centered long after services conclude.",
  },
  {
    title: "Designed for Trust-Based Conversations",
    description:
      "The service fits naturally into at-need, preneed, and aftercare discussions without disrupting your firm's culture or values.",
  },
];

const pillars = [
  {
    icon: TrendingUp,
    label: "Revenue Growth",
    phrase: "Premium enhancement with no overhead",
  },
  {
    icon: Target,
    label: "Market Differentiation",
    phrase: "Exclusive offering competitors lack",
  },
  {
    icon: Users,
    label: "Family Impact",
    phrase: "Meaningful experiences that generate referrals",
  },
  {
    icon: Award,
    label: "Brand Reputation",
    phrase: "Positioned as thoughtful and innovative",
  },
  {
    icon: Settings,
    label: "Operational Simplicity",
    phrase: "No added workload for staff",
  },
];

const WhyPartnerSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Partnership Value
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
              Why Funeral Homes Choose to Partner with Lasting Moments
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Partnering with Lasting Moments allows funeral homes to offer a truly
              differentiated legacy service—one that delivers meaningful value to
              families while strengthening the firm's long-term brand, reputation,
              and revenue.
            </p>
          </div>

          {/* Benefit Blocks */}
          <div className="space-y-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-6 card-elevated border border-border/50"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Visual Pillar Graphic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 md:p-10"
          >
            <h3 className="text-center text-lg font-semibold text-foreground mb-8">
              Value Across Multiple Dimensions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <pillar.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    {pillar.label}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-snug">
                    {pillar.phrase}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Closing Line */}
          <p className="text-center text-muted-foreground mt-10 text-lg leading-relaxed max-w-2xl mx-auto">
            Lasting Moments is designed to create meaningful impact for families
            while delivering sustainable value for the funeral homes who choose to
            partner.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerSection;
