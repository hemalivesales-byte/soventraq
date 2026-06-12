import React from 'react';
import GlassCard from '../components/GlassCard';
import { Search, Hammer, Zap, TrendingUp } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: Search, num: '01', name: 'Discover',
      desc: 'We deep-dive into your business, audience, and goals. We map your current systems, identify gaps, and define the exact growth strategy before a single line of code is written.',
      deliverable: 'Strategy Blueprint',
    },
    {
      icon: Hammer, num: '02', name: 'Build',
      desc: 'We design and engineer your platform — websites, CRM, dashboards, outreach systems. Clean code, mobile-first, built for speed and conversion from day one.',
      deliverable: 'Live Platform',
    },
    {
      icon: Zap, num: '03', name: 'Automate',
      desc: 'We wire up your automation layer — lead nurturing sequences, CRM triggers, follow-up workflows, and reporting pipelines. Your business starts running on autopilot.',
      deliverable: 'Automation System',
    },
    {
      icon: TrendingUp, num: '04', name: 'Grow',
      desc: 'With systems live and automated, we monitor, optimize, and scale. Real-time dashboards show exactly what\'s working — and we keep pushing the numbers up.',
      deliverable: 'Growth Report',
    },
  ];

  return (
    <section id="process" className="section-padding bg-[#03020f] relative">
      <div className="absolute top-0 left-0 w-[400px] h-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at left center, rgba(0,240,255,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="caption-text mb-6">OUR PROCESS</p>
          <h2 className="h2-section text-white max-w-[700px] mx-auto">
            From <span className="text-cyan">Strategy</span> to <span className="text-purple">Scale</span>
          </h2>
          <p className="body-large mt-6 max-w-[560px] mx-auto">
            A battle-tested methodology refined across 150+ projects. Transparent, collaborative, and obsessively focused on delivering business outcomes.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="flex items-stretch gap-0">
            {steps.map((step, i) => (
              <React.Fragment key={i}>
                <GlassCard className="p-7 flex-1 relative" hover>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan/15 to-purple/5 border border-cyan/20 flex items-center justify-center">
                      <step.icon className="w-4 h-4 text-cyan" />
                    </div>
                    <span className="caption-text text-white/20 text-[10px]">{step.num}</span>
                  </div>
                  <h4 className="h4-card text-white mb-3">{step.name}</h4>
                  <p className="text-white/45 text-sm leading-relaxed mb-5">{step.desc}</p>
                  <div className="pt-4 border-t border-white/[0.06]">
                    <span className="text-cyan/60 text-xs font-medium">{step.deliverable}</span>
                  </div>
                </GlassCard>
                {i < steps.length - 1 && (
                  <div className="w-8 shrink-0 flex items-center justify-center">
                    <div className="w-full h-[2px] bg-gradient-to-r from-cyan/20 to-purple/20 relative overflow-hidden">
                      <div
                        className="absolute top-0 left-0 w-3 h-full rounded-full bg-cyan/50"
                        style={{ animation: `timelineDot 2.5s ease-in-out infinite`, animationDelay: `${i * 0.5}s` }}
                      />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan/15 to-purple/5 border border-cyan/20 flex items-center justify-center">
                  <step.icon className="w-4 h-4 text-cyan" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-[2px] h-10 bg-gradient-to-b from-cyan/20 to-purple/20 my-1" />
                )}
              </div>
              <GlassCard className="p-6 flex-1">
                <span className="caption-text text-white/20 text-[10px] block mb-2">{step.num}</span>
                <h4 className="h4-card text-white mb-2">{step.name}</h4>
                <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes timelineDot {
          0% { transform: translateX(-12px); opacity: 1; }
          100% { transform: translateX(calc(100% + 12px)); opacity: 0.2; }
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
