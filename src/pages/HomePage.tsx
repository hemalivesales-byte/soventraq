import React, { lazy, Suspense } from 'react';
import PageLayout from '../components/PageLayout';
import TrustedBySection from '../sections/TrustedBySection';
import WhatWeBuildSection from '../sections/WhatWeBuildSection';
import WhyChooseSection from '../sections/WhyChooseSection';
import ProcessSection from '../sections/ProcessSection';
import ResultsSection from '../sections/ResultsSection';
import CTASection from '../sections/CTASection';

// Lazy-load the heavy 3D hero (Three.js bundle) so it doesn't block initial render
const HeroSection = lazy(() => import('../sections/HeroSection'));

const SectionDivider: React.FC = () => (
  <div className="section-divider" />
);

const HeroFallback: React.FC = () => (
  <div
    className="w-full min-h-screen flex items-center justify-center"
    style={{ background: '#03020f' }}
  >
    <div className="flex flex-col items-center gap-4">
      <div
        className="w-10 h-10 rounded-full border-2 border-transparent animate-spin"
        style={{ borderTopColor: '#00f0ff' }}
      />
      <span className="caption-text text-white/30">Loading</span>
    </div>
  </div>
);

const HomePage: React.FC = () => (
  <PageLayout>
    <Suspense fallback={<HeroFallback />}>
      <HeroSection />
    </Suspense>
    <TrustedBySection />
    <SectionDivider />
    <WhatWeBuildSection />
    <SectionDivider />
    <WhyChooseSection />
    <SectionDivider />
    <ProcessSection />
    <SectionDivider />
    <ResultsSection />
    <CTASection />
  </PageLayout>
);

export default HomePage;
