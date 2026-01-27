const WhatIsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-8">
            What Is Lasting Moments?
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Lasting Moments is a secure video legacy service that allows individuals to record personal messages and schedule them to be delivered to loved ones at future life milestones — after death.
            </p>
            <p>
              Funeral homes offer Lasting Moments as an optional enhancement during at-need arrangements, preneed planning, or aftercare — without managing technology, storage, or delivery.
            </p>
          </div>
          
          {/* Clarification callout */}
          <div className="mt-10 bg-card rounded-2xl p-8 card-elevated">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-left">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-foreground font-semibold mb-2">
                  This is not general video storage.
                </p>
                <p className="text-muted-foreground">
                  It is a milestone-based delivery system with verified activation and controlled release.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;
