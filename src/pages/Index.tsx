import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhatIsLastingMomentsSection from "@/components/WhatIsLastingMomentsSection";
import WhatIsSection from "@/components/WhatIsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import StaffRolesSection from "@/components/StaffRolesSection";
import WhyPartnerSection from "@/components/WhyPartnerSection";
import MidPageCTASection from "@/components/MidPageCTASection";
import UseCasesSection from "@/components/UseCasesSection";
import FamilyUseCaseSection from "@/components/FamilyUseCaseSection";
import PartnershipSection from "@/components/PartnershipSection";
import ResourcesSection from "@/components/ResourcesSection";
import FAQSection from "@/components/FAQSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhatIsLastingMomentsSection />
        <WhatIsSection />
        <HowItWorksSection />
        <StaffRolesSection />
        <WhyPartnerSection />
        <MidPageCTASection />
        <UseCasesSection />
        <FamilyUseCaseSection />
        <PartnershipSection />
        <ResourcesSection />
        <FAQSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
