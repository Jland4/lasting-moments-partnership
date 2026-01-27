import { CheckCircle, XCircle } from "lucide-react";

const willDoItems = [
  "Introduce Lasting Moments using a one-page explainer",
  "Offer it as an optional legacy enhancement",
  "Direct families to record when they are ready",
];

const wontDoItems = [
  "Record videos",
  "Store files",
  "Manage delivery or verification",
  "Troubleshoot technology",
];

const StaffRolesSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Operational Clarity
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
            What Your Staff Does (and Doesn't Do)
          </h2>
          <p className="text-lg text-muted-foreground">
            Designed to fit naturally into your existing workflow with zero technical burden
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Your Staff Will */}
          <div className="bg-background rounded-2xl p-8 card-elevated">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">
                Your Staff Will
              </h3>
            </div>
            <ul className="space-y-4">
              {willDoItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Your Staff Will Not */}
          <div className="bg-background rounded-2xl p-8 card-elevated">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                <XCircle className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground">
                Your Staff Will Not
              </h3>
            </div>
            <ul className="space-y-4">
              {wontDoItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Reassurance callout */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-accent/5 border border-accent/20 rounded-xl px-6 py-4">
            <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-foreground font-medium">
              Zero operational risk. Zero technical management. Full family value.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaffRolesSection;
