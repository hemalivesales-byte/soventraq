import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHeroVisual from '../components/PageHeroVisual';
import CTASection from '../sections/CTASection';
import PlatformDevSection from '../sections/PlatformDevSection';
import AutomationCRMSection from '../sections/AutomationCRMSection';
import WhatWeBuildSection from '../sections/WhatWeBuildSection';
import { Link } from 'react-router';
import { ArrowRight, Layers, Cpu, ShieldCheck, BarChart3 } from 'lucide-react';

/* ─── Page Hero ─── */
const PlatformHero: React.FC = () => (
  <section
    className="pt-[140px] pb-20 relative overflow-hidden"
    style={{ background: '#03020f' }}
  >
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse at 50% 0%, rgba(107,47,255,0.08) 0%, transparent 65%)',
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
    <PageHeroVisual variant="platform" />
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
      <p className="caption-text mb-5">OUR PLATFORM</p>
      <h1 className="h2-section text-white mb-6 max-w-[720px]">
        The Digital Infrastructure That{' '}
        <span style={{ color: '#6b2fff' }}>Powers Your Growth</span>
      </h1>
      <p className="body-large max-w-[580px] mb-10">
        Enterprise-grade technology built for businesses that demand reliability,
        speed, and scale — from the first integration to a fully automated
        revenue engine.
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 font-body font-semibold text-[13px] tracking-[0.03em] text-[#03020f] bg-gradient-to-r from-cyan to-[#00c8d6] rounded-lg px-6 py-3 hover:shadow-[0_4px_24px_rgba(0,240,255,0.35)] hover:-translate-y-0.5 transition-all duration-300 group"
      >
        Start Building
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  </section>
);

/* ─── Quick pillars strip ─── */
const pillars = [
  { icon: Layers, label: 'Modular Architecture', desc: 'Add capabilities without rebuilding from scratch.' },
  { icon: Cpu, label: 'AI-Assisted Automation', desc: 'Intelligent workflows that learn and improve over time.' },
  { icon: ShieldCheck, label: 'Enterprise Security', desc: 'SOC 2-ready infrastructure with end-to-end encryption.' },
  { icon: BarChart3, label: 'Real-Time Analytics', desc: 'Live dashboards connected to every data source.' },
];

const PillarStrip: React.FC = () => (
  <section className="py-16 bg-[#0a0a1a] border-y border-white/[0.04]">
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((p, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-3 px-2">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(107,47,255,0.12), rgba(0,240,255,0.06))',
                border: '1px solid rgba(107,47,255,0.2)',
              }}
            >
              <p.icon className="w-5 h-5" style={{ color: '#6b2fff' }} />
            </div>
            <h4 className="font-body font-semibold text-white text-[14px]">{p.label}</h4>
            <p className="text-white/35 text-[12px] leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PlatformPage: React.FC = () => (
  <PageLayout>
    <PlatformHero />
    <PillarStrip />
    <WhatWeBuildSection />
    <div className="section-divider" />
    <PlatformDevSection />
    <div className="section-divider" />
    <AutomationCRMSection />
    <CTASection />
  </PageLayout>
);

export default PlatformPage;
