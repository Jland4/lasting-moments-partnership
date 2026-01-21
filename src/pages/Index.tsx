import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatIsSection from "@/components/WhatIsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyPartnerSection from "@/components/WhyPartnerSection";
import UseCasesSection from "@/components/UseCasesSection";
import PartnershipSection from "@/components/PartnershipSection";
import ResourcesSection from "@/components/ResourcesSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhatIsSection />
        <HowItWorksSection />
        <WhyPartnerSection />
        <UseCasesSection />
        <PartnershipSection />
        <ResourcesSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
