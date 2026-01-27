import { Routes, Route, Navigate } from "react-router-dom";

import Index from "@/pages/Index";
import Partners from "@/pages/Partners";
import Families from "@/pages/Families";

import ArrangementRoomExplainer from "@/pages/resources/ArrangementRoomExplainer";
import PreneedCounselorScript from "@/pages/resources/PreneedCounselorScript";
import PartnershipEconomics from "@/pages/partners/PartnershipEconomics";
import FamilyExperienceOverview from "@/pages/demo/FamilyExperienceOverview";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/families" element={<Families />} />

      <Route path="/resources/arrangement-room-explainer" element={<ArrangementRoomExplainer />} />
      <Route path="/resources/preneed-counselor-script" element={<PreneedCounselorScript />} />
      <Route path="/partners/economics" element={<PartnershipEconomics />} />
      <Route path="/demo/family-experience-overview" element={<FamilyExperienceOverview />} />

      <Route path="/resources" element={<Navigate to="/resources/arrangement-room-explainer" replace />} />
      <Route path="/demo" element={<Navigate to="/demo/family-experience-overview" replace />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
