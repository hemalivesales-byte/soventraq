import React from 'react';
import Navigation from './sections/Navigation';
import HeroSection from './sections/HeroSection';
import TrustedBySection from './sections/TrustedBySection';
import AboutSection from './sections/AboutSection';
import JourneySection from './sections/JourneySection';
import WhatWeBuildSection from './sections/WhatWeBuildSection';
import ServicesSection from './sections/ServicesSection';
import KineticOrbSection from './sections/KineticOrbSection';
import DualWaveGallery from './sections/DualWaveGallery';
import PlatformDevSection from './sections/PlatformDevSection';
import MarketingSystemsSection from './sections/MarketingSystemsSection';
import AutomationCRMSection from './sections/AutomationCRMSection';
import AIPoweredSection from './sections/AIPoweredSection';
import WhyChooseSection from './sections/WhyChooseSection';
import ProcessSection from './sections/ProcessSection';
import PortfolioSection from './sections/PortfolioSection';
import ResultsSection from './sections/ResultsSection';
import CTASection from './sections/CTASection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

const SectionDivider: React.FC = () => (
  <div className="section-divider" />
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#03020f] text-white">
      <Navigation />
      <HeroSection />
      <TrustedBySection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <JourneySection />
      <SectionDivider />
      <WhatWeBuildSection />
      <SectionDivider />
      <ServicesSection />
      <KineticOrbSection />
      <DualWaveGallery />
      <SectionDivider />
      <PlatformDevSection />
      <SectionDivider />
      <MarketingSystemsSection />
      <SectionDivider />
      <AutomationCRMSection />
      <SectionDivider />
      <AIPoweredSection />
      <SectionDivider />
      <WhyChooseSection />
      <SectionDivider />
      <ProcessSection />
      <SectionDivider />
      <PortfolioSection />
      <SectionDivider />
      <ResultsSection />
      <CTASection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
