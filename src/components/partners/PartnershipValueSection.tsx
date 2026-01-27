const PartnershipValueSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Partnership Value
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              Designed to Create Value Without Price Pressure
            </h2>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-10 card-elevated text-center">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Lasting Moments is structured as a high-perceived-value enhancement that families choose because of meaning — not obligation.
              </p>
              <p>
                Partnership models are designed to fit naturally within existing pricing conversations, with flexible revenue sharing and no upfront costs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipValueSection;
