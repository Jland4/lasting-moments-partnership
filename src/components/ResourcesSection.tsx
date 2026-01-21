import { FileText, MessageSquare, DollarSign, PlayCircle, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    icon: FileText,
    title: "Arrangement Room Explainer",
    description: "One-page resource designed for use during arrangement conferences. Helps counselors explain Lasting Moments clearly in under two minutes using plain, compassionate language.",
    tag: "Family-Facing",
    action: "View Resource",
  },
  {
    icon: MessageSquare,
    title: "Preneed Counselor Script",
    description: "Professional, conversational script for preneed discussions. Frames Lasting Moments as a legacy enhancement that fits naturally with trust-based conversations.",
    tag: "Staff Resource",
    action: "View Script",
  },
  {
    icon: DollarSign,
    title: "Partnership Economics",
    description: "Overview of how funeral homes generate revenue, where it fits in current offerings, and why it delivers high perceived family value.",
    tag: "Business",
    action: "Request Access",
  },
  {
    icon: PlayCircle,
    title: "Family Experience Overview",
    description: "Simple visual walkthrough of the family experience—from recording to milestone selection to delivery concept.",
    tag: "Demo",
    action: "View Walkthrough",
  },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Partner Resources
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
            Enablement Tools for Partners
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional resources to help your team present Lasting Moments with confidence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="bg-background rounded-2xl p-8 card-elevated group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <resource.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                  {resource.tag}
                </span>
              </div>

              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {resource.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {resource.description}
              </p>

              <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:text-accent">
                {resource.action}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>

        {/* Partner note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            These resources are designed for funeral home partners. Some materials may require partnership verification to access.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
