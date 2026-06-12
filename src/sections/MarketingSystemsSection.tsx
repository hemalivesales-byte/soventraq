import React from 'react';
import StaggeredGrid from '../components/StaggeredGrid';
import GlassCard from '../components/GlassCard';

const MarketingSystemsSection: React.FC = () => {
  const phases = [
    {
      num: '01', name: 'Attract',
      desc: 'Multi-channel traffic systems combining SEO, paid media, content marketing, and social to drive qualified visitors to your digital properties.',
      metrics: 'Avg. 340% traffic increase',
    },
    {
      num: '02', name: 'Convert',
      desc: 'Conversion-optimized landing pages, lead magnets, and capture systems that turn visitors into known prospects with high-intent signals.',
      metrics: 'Up to 12% conversion rate',
    },
    {
      num: '03', name: 'Nurture',
      desc: 'Automated email sequences, retargeting campaigns, and CRM workflows that build trust and move prospects closer to purchase decisions.',
      metrics: '3x faster sales cycles',
    },
    {
      num: '04', name: 'Retain',
      desc: 'Customer success systems, loyalty programs, and feedback loops that maximize lifetime value and turn customers into advocates.',
      metrics: '40% higher LTV',
    },
  ];

  return (
    <section id="solutions" className="section-padding bg-[#03020f] relative">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(107,47,255,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="caption-text mb-6">MARKETING SYSTEMS</p>
          <h2 className="h2-section text-white max-w-[700px] mx-auto">
            Attract. <span className="text-cyan">Convert</span>. <span className="text-purple">Retain</span>.
          </h2>
          <p className="body-large mt-6 max-w-[560px] mx-auto">
            Full-funnel marketing systems that don't just generate traffic — they create a predictable pipeline of qualified leads and loyal customers.
          </p>
        </div>

        <StaggeredGrid columns="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" gap="gap-6">
          {phases.map((phase, i) => (
            <div key={i} className="staggered-item">
              <GlassCard className="p-8 relative overflow-hidden h-full">
                <span className="absolute -top-4 -right-4 text-[100px] font-display font-bold text-white/[0.03] select-none leading-none">
                  {phase.num}
                </span>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan/10 to-purple/5 border border-cyan/15 flex items-center justify-center mb-5">
                    <span className="text-cyan font-bold text-sm">{phase.num}</span>
                  </div>
                  <h4 className="h4-card text-white mb-3">{phase.name}</h4>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{phase.desc}</p>
                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="caption-text text-cyan/70 text-[10px]">{phase.metrics}</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </StaggeredGrid>
      </div>
    </section>
  );
};

export default MarketingSystemsSection;
