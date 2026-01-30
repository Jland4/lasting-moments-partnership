import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Essentials",
    price: "$299",
    description: "Perfect for a focused legacy",
    features: ["Recording session", "Up to 3 milestone deliveries", "Secure scheduling"],
  },
  {
    name: "Legacy",
    price: "$599",
    description: "Our most popular choice",
    featured: true,
    features: [
      "Up to 10 milestone deliveries",
      "Priority scheduling support",
    ],
  },
  {
    name: "Legacy Vault",
    price: "$999",
    description: "Complete family coverage",
    features: [
      "Multiple sessions",
      "Up to 25 milestone deliveries",
      "Premium support",
    ],
  },
];

const FamiliesPricingSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              Choose your legacy package
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, one-time pricing. No hidden fees. Optional monthly plans available.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative rounded-2xl p-8 ${
                  pkg.featured
                    ? "bg-primary text-primary-foreground ring-2 ring-accent shadow-xl"
                    : "bg-card card-elevated"
                }`}
              >
                {pkg.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    Most Popular
                  </span>
                )}

                <h3
                  className={`text-xl font-serif font-semibold mb-2 ${
                    pkg.featured ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {pkg.name}
                </h3>

                <p
                  className={`text-sm mb-6 ${
                    pkg.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {pkg.description}
                </p>

                <div
                  className={`text-4xl font-bold mb-8 ${
                    pkg.featured ? "text-primary-foreground" : "text-foreground"
                  }`}
                >
                  {pkg.price}
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          pkg.featured ? "bg-accent/20" : "bg-accent/10"
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            pkg.featured ? "text-accent" : "text-accent"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-sm ${
                          pkg.featured ? "text-primary-foreground/90" : "text-muted-foreground"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={pkg.featured ? "hero" : "ctaSecondary"}
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">Learn More</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Footer note */}
          <p className="text-center text-sm text-muted-foreground mt-12">
            Optional monthly legacy maintenance plans available.{" "}
            <Link
              to="/pricing"
              className="text-accent hover:underline font-medium"
            >
              View all options →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FamiliesPricingSection;
