import React from 'react';
import PageLayout from '../components/PageLayout';
import AboutSection from '../sections/AboutSection';
import JourneySection from '../sections/JourneySection';
import PortfolioSection from '../sections/PortfolioSection';
import CTASection from '../sections/CTASection';

const SectionDivider: React.FC = () => (
  <div className="section-divider" />
);

const AboutHero: React.FC = () => (
  <section
    className="pt-[140px] pb-4 relative overflow-hidden"
    style={{ background: '#03020f' }}
  >
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse at 50% 0%, rgba(107,47,255,0.06) 0%, transparent 65%)',
      }}
    />
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.025]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,240,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.6) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />
  </section>
);

const AboutPage: React.FC = () => (
  <PageLayout>
    <AboutHero />
    <AboutSection />
    <SectionDivider />
    <JourneySection />
    <SectionDivider />
    <PortfolioSection />
    <CTASection />
  </PageLayout>
);

export default AboutPage;
