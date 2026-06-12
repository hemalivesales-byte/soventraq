import React from 'react';
import StaggeredGrid from '../components/StaggeredGrid';
import GlassCard from '../components/GlassCard';
import { Brain, MessageSquare, LineChart, Sparkles, Cpu, Eye } from 'lucide-react';

const AIPoweredSection: React.FC = () => {
  const items = [
    {
      icon: Brain,
      title: 'Predictive Analytics',
      desc: 'Anticipate customer behavior, forecast revenue, and identify churn risks before they materialize. Our AI models analyze patterns across your data to surface actionable predictions.',
    },
    {
      icon: MessageSquare,
      title: 'Intelligent Conversations',
      desc: 'AI assistants that qualify leads, answer questions, book appointments, and route inquiries — available 24/7 with the context and personality of your best team member.',
    },
    {
      icon: LineChart,
      title: 'Smart Optimization',
      desc: 'Continuous A/B testing, content optimization, and performance tuning driven by machine learning. Your systems improve themselves while you sleep.',
    },
    {
      icon: Sparkles,
      title: 'Content Intelligence',
      desc: 'AI-powered content generation, SEO optimization, and personalization that delivers the right message to the right person at the right time.',
    },
    {
      icon: Cpu,
      title: 'Process Intelligence',
      desc: 'Identify bottlenecks, optimize workflows, and automate decision-making with AI that learns your business operations and suggests improvements.',
    },
    {
      icon: Eye,
      title: 'Anomaly Detection',
      desc: 'Real-time monitoring that spots unusual patterns, security threats, and performance issues before they impact your business or customers.',
    },
  ];

  return (
    <section className="section-padding bg-[#03020f] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.06) 0%, rgba(107,47,255,0.04) 50%, transparent 70%)' }} />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="caption-text mb-6">AI-POWERED AUTOMATION</p>
          <h2 className="h2-section text-white max-w-[700px] mx-auto">
            Intelligence That <span className="text-cyan">Works</span> for You
          </h2>
          <p className="body-large mt-6 max-w-[560px] mx-auto">
            Artificial intelligence isn't the future — it's the competitive advantage your business needs today. We integrate AI where it delivers real results.
          </p>
        </div>

        <StaggeredGrid columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" gap="gap-6">
          {items.map((item, i) => (
            <div key={i} className="staggered-item">
              <GlassCard className="p-8 h-full">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan/10 to-purple/5 border border-cyan/15 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-cyan" />
                </div>
                <h4 className="h4-card text-white mb-3">{item.title}</h4>
                <p className="body-text">{item.desc}</p>
              </GlassCard>
            </div>
          ))}
        </StaggeredGrid>
      </div>
    </section>
  );
};

export default AIPoweredSection;
