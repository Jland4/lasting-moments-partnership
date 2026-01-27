import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this appropriate to offer at-need?",
    answer: "Yes. Many families find comfort in recording messages for loved ones during the arrangement process. It's always presented as an option — never with pressure. Families choose when and if they're ready.",
  },
  {
    question: "How long are messages stored?",
    answer: "Messages are stored securely for the full duration of their intended delivery schedule — whether that's 5 years or 50 years. Our infrastructure is designed for long-term preservation and reliability.",
  },
  {
    question: "What happens if recipients change contact information?",
    answer: "Our system includes recipient verification and update processes. Before each scheduled delivery, we confirm recipient contact information to ensure messages reach the right person.",
  },
  {
    question: "How is privacy and security handled?",
    answer: "All messages are encrypted and stored securely. Only intended recipients can access their messages, and our verification process ensures proper delivery. We never share or access message content.",
  },
];

const PartnerFAQSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Quick answers to help you understand how Lasting Moments works
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 border-none card-elevated"
              >
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PartnerFAQSection;
