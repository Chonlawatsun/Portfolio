// app/page.tsx
import ProfileSection from "./components/ProfileSection";

import CertificateCarousel from "./components/CertificateCarousel";
import PortfolioSection from "./components/PortfolioSection";
import Aboutme from "./components/Aboutme";

import FooterSection from "./components/FooterSection";


export default function Home() {
  return (
    <div className="container mx-auto px-4 space-y-8 sm:space-y-10 md:space-y-14">
      <ProfileSection />
      <Aboutme />
      <PortfolioSection />
      <CertificateCarousel />
 
      <FooterSection />
    </div>
  );
}
