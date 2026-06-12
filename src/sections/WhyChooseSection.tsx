import React from 'react';
import StaggeredGrid from '../components/StaggeredGrid';
import GlassCard from '../components/GlassCard';
import { Target, Zap, BarChart3, Palette } from 'lucide-react';

const WhyChooseSection: React.FC = () => {
  const benefits = [
    {
      icon: Target,
      title: 'Built for Conversion',
      desc: 'Every page, funnel, and workflow we build is obsessively engineered to convert visitors into leads and leads into revenue. No fluff — only results.',
      metric: 'Up to 340% ROI',
      accent: '#00f0ff',
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      desc: 'Set it and scale it. Our automation systems handle follow-ups, lead scoring, email sequences, and CRM updates — 24/7 without lifting a finger.',
      metric: '20+ hrs saved/week',
      accent: '#00f0ff',
    },
    {
      icon: BarChart3,
      title: 'Scalable Systems',
      desc: 'We architect for growth. Our platforms handle 10x the load without rebuilding. Add users, channels, and markets as your business expands.',
      metric: '10x scalability',
      accent: '#6b2fff',
    },
    {
      icon: Palette,
      title: 'Clean Professional Design',
      desc: "Your brand is your first impression. We deliver premium, pixel-perfect design that instantly signals authority — because how you look matters as much as what you do.",
      metric: '2x brand recall',
      accent: '#6b2fff',
    },
  ];

  return (
    <section className="section-padding bg-surface-dark relative">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-20">
          <p className="caption-text mb-6">WHY CHOOSE SOVENTRAQ</p>
          <h2 className="h2-section text-white max-w-[700px] mx-auto">
            Every Solution Is <span className="text-cyan">Built for Growth</span>
          </h2>
          <p className="body-large mt-6 max-w-[560px] mx-auto">
            We don't deliver projects — we deliver measurable business outcomes. Every system, every workflow, every line of code is engineered to drive results.
          </p>
        </div>

        <StaggeredGrid columns="grid-cols-1 md:grid-cols-2" gap="gap-6" staggerDelay={0.1}>
          {benefits.map((item, i) => (
            <div key={i} className="staggered-item">
              <GlassCard className="p-8 h-full relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${item.accent}10 0%, transparent 70%)` }} />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${item.accent}15, ${item.accent}05)`,
                        border: `1px solid ${item.accent}20`,
                      }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: item.accent }} />
                    </div>
                    <span className="caption-text text-[9px] px-2.5 py-1 rounded-full"
                      style={{
                        color: `${item.accent}90`,
                        background: `${item.accent}08`,
                        border: `1px solid ${item.accent}15`,
                      }}
                    >
                      {item.metric}
                    </span>
                  </div>
                  <h4 className="h4-card text-white mb-3 group-hover:text-cyan transition-colors duration-300">{item.title}</h4>
                  <p className="body-text">{item.desc}</p>
                </div>
              </GlassCard>
            </div>
          ))}
        </StaggeredGrid>
      </div>
    </section>
  );
};

export default WhyChooseSection;
