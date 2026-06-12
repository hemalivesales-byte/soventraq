import React from 'react';
import StaggeredGrid from '../components/StaggeredGrid';
import GlassCard from '../components/GlassCard';
import { BarChart3, Users, Workflow, Filter, Globe, TrendingUp } from 'lucide-react';

const WhatWeBuildSection: React.FC = () => {
  const items = [
    {
      icon: BarChart3,
      title: 'Marketing Dashboards',
      desc: 'Real-time analytics that turn data into actionable intelligence. Monitor every KPI, track campaign performance, and make decisions backed by live insights.',
    },
    {
      icon: Users,
      title: 'CRM Systems',
      desc: 'Customer relationship platforms engineered for your exact sales process. Track pipelines, automate follow-ups, and never lose a lead again.',
    },
    {
      icon: Workflow,
      title: 'Automation Workflows',
      desc: 'Intelligent process automation that eliminates repetitive work. Your team focuses on strategy while systems handle execution 24/7.',
    },
    {
      icon: Filter,
      title: 'Lead Generation Funnels',
      desc: 'High-converting funnels engineered to capture, qualify, and convert visitors into paying customers — at scale.',
    },
    {
      icon: Globe,
      title: 'Website Platforms',
      desc: 'Performance-driven web platforms built with modern architecture. Fast, secure, SEO-optimized, and designed to convert.',
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Growth',
      desc: 'AI-powered growth analytics that uncover hidden opportunities, predict trends, and optimize every touchpoint for maximum ROI.',
    },
  ];

  return (
    <section id="platform" className="section-padding bg-surface-dark relative">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="caption-text mb-6">WHAT WE BUILD</p>
          <h2 className="h2-section text-white max-w-[700px] mx-auto">
            Technology That <span className="text-cyan">Drives Results</span>
          </h2>
          <p className="body-large mt-6 max-w-[560px] mx-auto">
            Every system we build is designed with one purpose: to help your business grow faster, operate smarter, and outperform the competition.
          </p>
        </div>

        <StaggeredGrid columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" gap="gap-6">
          {items.map((item, i) => (
            <div key={i} className="staggered-item">
              <GlassCard className="p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/10 to-purple/5 border border-cyan/15 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-cyan" />
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

export default WhatWeBuildSection;
