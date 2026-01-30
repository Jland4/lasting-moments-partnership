import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnersHeroSection from "@/components/partners/PartnersHeroSection";
import WhatIsSection from "@/components/partners/WhatIsSection";
import StaffRolesSection from "@/components/partners/StaffRolesSection";
import WhyPartnerSection from "@/components/partners/WhyPartnerSection";
import PartnershipValueSection from "@/components/partners/PartnershipValueSection";
import PartnerDemoFlowSection from "@/components/partners/PartnerDemoFlowSection";
import StaffResourcesSection from "@/components/partners/StaffResourcesSection";
import PartnerFAQSection from "@/components/partners/PartnerFAQSection";
import PartnerCTASection from "@/components/partners/PartnerCTASection";

const Partners = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PartnersHeroSection />
        <WhatIsSection />
        <StaffRolesSection />
        <WhyPartnerSection />
        <PartnershipValueSection />
        <PartnerDemoFlowSection />
        <StaffResourcesSection />
        <PartnerFAQSection />
        <PartnerCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
