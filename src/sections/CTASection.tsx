import React from 'react';
import CTAButton from '../components/CTAButton';

const CTASection: React.FC = () => {
  return (
    <section className="py-44 bg-[#03020f] relative overflow-hidden">
      {/* Multi-layer glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px]"
          style={{ background: 'radial-gradient(ellipse, rgba(0,240,255,0.1) 0%, transparent 60%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px]"
          style={{ background: 'radial-gradient(ellipse, rgba(107,47,255,0.06) 0%, transparent 50%)' }}
        />
      </div>

      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <p className="caption-text mb-8 text-cyan/60">READY TO BUILD YOUR GROWTH SYSTEM?</p>
        <h2 className="h2-section text-white mb-7 leading-tight">
          Ready to Build Your<br />
          <span className="text-cyan">Growth System?</span>
        </h2>
        <p className="body-large max-w-[540px] mx-auto mb-12">
          Every day without the right digital systems is a day of missed leads and lost revenue. Let's build yours — together.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <CTAButton variant="filled" href="/contact">
            Start Your Project
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </CTAButton>
          <CTAButton variant="outlined" href="/contact">
            Book a Free Consultation
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
