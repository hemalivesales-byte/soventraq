import React from 'react';
import PageLayout from '../components/PageLayout';
import ContactSection from '../sections/ContactSection';

const ContactHero: React.FC = () => (
  <section
    className="pt-[140px] pb-4 relative overflow-hidden"
    style={{ background: '#0a0a1a' }}
  >
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse at 50% 0%, rgba(0,240,255,0.05) 0%, transparent 65%)',
      }}
    />
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.02]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,240,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.6) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10 pb-8">
      <p className="caption-text mb-4">GET IN TOUCH</p>
      <h1 className="h2-section text-white max-w-[580px]">
        Let's Build Something <span className="text-cyan">Great Together</span>
      </h1>
    </div>
  </section>
);

const ContactPage: React.FC = () => (
  <PageLayout>
    <ContactHero />
    <ContactSection />
  </PageLayout>
);

export default ContactPage;
