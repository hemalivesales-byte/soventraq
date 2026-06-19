import React from 'react';
import PageLayout from '../components/PageLayout';
import AboutSection from '../sections/AboutSection';
import JourneySection from '../sections/JourneySection';
import PortfolioSection from '../sections/PortfolioSection';
import CTASection from '../sections/CTASection';
import PageHeroVisual from '../components/PageHeroVisual';

const SectionDivider: React.FC = () => (
  <div className="section-divider" />
);

const AboutHero: React.FC = () => (
  <section
    className="pt-[140px] pb-20 relative overflow-hidden"
    style={{ background: '#03020f' }}
  >
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse at 50% 0%, rgba(107,47,255,0.07) 0%, transparent 65%)',
      }}
    />
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.025]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(107,47,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(107,47,255,0.6) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />
    <PageHeroVisual variant="about" />
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
      <p className="caption-text mb-5">OUR STORY</p>
      <h1 className="h2-section text-white mb-6 max-w-[640px]">
        Built by Builders.<br />
        <span style={{ color: '#6b2fff' }}>Driven by Growth.</span>
      </h1>
      <p className="body-large max-w-[520px]">
        Soventraq was founded with one conviction: businesses deserve digital systems
        that actually generate revenue — not just look good on a screen.
      </p>
    </div>
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
