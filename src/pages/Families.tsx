import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FamiliesHeroSection from "@/components/families/FamiliesHeroSection";
import FamiliesHowItWorksSection from "@/components/families/FamiliesHowItWorksSection";
import FamiliesExamplesSection from "@/components/families/FamiliesExamplesSection";
import FamiliesPricingSection from "@/components/families/FamiliesPricingSection";
import FamiliesPrivacySection from "@/components/families/FamiliesPrivacySection";

const Families = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <FamiliesHeroSection />
        <FamiliesHowItWorksSection />
        <FamiliesExamplesSection />
        <FamiliesPricingSection />
        <FamiliesPrivacySection />
      </main>
      <Footer />
    </div>
  );
};

export default Families;
