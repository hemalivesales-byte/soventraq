import React from 'react';
import PageLayout from '../components/PageLayout';
import CTASection from '../sections/CTASection';
import PageHeroVisual from '../components/PageHeroVisual';
import {
  Globe, Users, Zap, Send, BarChart3, TrendingUp, Share2,
  CheckCircle,
} from 'lucide-react';

const SectionDivider: React.FC = () => (
  <div className="section-divider" />
);

/* ─── Page Hero ─── */
const ServicesHero: React.FC = () => (
  <section
    className="pt-[140px] pb-20 relative overflow-hidden"
    style={{ background: '#03020f' }}
  >
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse at 60% 0%, rgba(0,240,255,0.06) 0%, transparent 65%)',
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
    <PageHeroVisual variant="services" />
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
      <p className="caption-text mb-5">OUR SERVICES</p>
      <h1 className="h2-section text-white mb-6 max-w-[700px]">
        Everything You Need to{' '}
        <span className="text-cyan">Build, Automate & Scale</span>
      </h1>
      <p className="body-large max-w-[560px]">
        A complete suite of digital growth services — from the first landing page
        to a fully automated sales and marketing system.
      </p>
    </div>
  </section>
);

/* ─── Full Services Grid ─── */
const services = [
  {
    icon: Globe,
    name: 'Website & Landing Page Development',
    desc: 'High-converting, lightning-fast websites and landing pages built to turn visitors into customers. Mobile-first, SEO-optimized, and engineered for performance from day one.',
    features: ['Custom Design', 'SEO-Optimized', 'Mobile-First', 'Fast Loading', 'CMS Integration'],
    accent: '#00f0ff',
  },
  {
    icon: Users,
    name: 'CRM & Lead Management Systems',
    desc: 'Custom CRM setups that bring order to your entire sales pipeline — from first contact to closed deal. Never lose a lead, miss a follow-up, or lose track of your pipeline again.',
    features: ['Pipeline Tracking', 'Lead Scoring', 'Follow-up Automation', 'Reporting Dashboards', 'Team Access'],
    accent: '#6b2fff',
  },
  {
    icon: Zap,
    name: 'Marketing Automation',
    desc: 'Smart workflows that nurture prospects, trigger follow-ups, send personalized emails, and update your CRM — 24 hours a day, 7 days a week, without human intervention.',
    features: ['Email Sequences', 'Behavioral Triggers', 'Lead Nurturing', 'CRM Sync', 'A/B Testing'],
    accent: '#00f0ff',
  },
  {
    icon: Send,
    name: 'B2B Outreach Systems',
    desc: 'Systematic outbound engines that identify decision-makers, craft personalized messages, and follow up automatically. Build a predictable and scalable pipeline every single month.',
    features: ['Prospect Identification', 'Personalized Sequences', 'Reply Tracking', 'CRM Integration', 'Performance Reporting'],
    accent: '#6b2fff',
  },
  {
    icon: Share2,
    name: 'Social Media Content System',
    desc: 'A consistent, branded content presence across your key platforms — created, scheduled, and managed to build authority and drive organic leads without draining your time.',
    features: ['Content Strategy', 'Branded Templates', 'Scheduling System', 'Engagement Tracking', 'Monthly Reports'],
    accent: '#00f0ff',
  },
  {
    icon: BarChart3,
    name: 'Analytics & Reporting Dashboards',
    desc: 'Real-time visibility into every metric that matters. Custom dashboards that connect all your data sources and turn raw numbers into clear decisions that drive growth.',
    features: ['Custom KPIs', 'Live Dashboards', 'Multi-Source Data', 'Automated Reports', 'Goal Tracking'],
    accent: '#6b2fff',
  },
  {
    icon: TrendingUp,
    name: 'Brand Growth Strategy',
    desc: 'Cohesive brand identity combined with a data-driven growth roadmap. We position your business as the authority in your market with a strategy built for long-term scale.',
    features: ['Brand Identity', 'Market Positioning', 'Growth Roadmap', 'Competitor Analysis', 'Content Strategy'],
    accent: '#00f0ff',
  },
];

const ServicesGrid: React.FC = () => (
  <section className="section-padding bg-[#03020f] relative">
    <div className="max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((svc, i) => (
          <div
            key={i}
            className={`group rounded-[20px] p-[1px] transition-all duration-500 hover:-translate-y-1 ${
              i === services.length - 1 && services.length % 2 !== 0
                ? 'lg:col-span-2 lg:max-w-[50%] lg:mx-auto w-full'
                : ''
            }`}
            style={{
              background: `linear-gradient(135deg, ${svc.accent}30, rgba(107,47,255,0.12), transparent 60%)`,
            }}
          >
            <div
              className="h-full rounded-[19px] p-8"
              style={{
                background:
                  'linear-gradient(135deg, rgba(10,10,26,0.97) 0%, rgba(3,2,15,0.99) 100%)',
              }}
            >
              {/* Icon + title */}
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${svc.accent}15, ${svc.accent}05)`,
                    border: `1px solid ${svc.accent}25`,
                  }}
                >
                  <svc.icon className="w-5 h-5" style={{ color: svc.accent }} />
                </div>
                <h3 className="h4-card text-white group-hover:text-cyan transition-colors duration-300 leading-snug">
                  {svc.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-white/45 text-sm leading-relaxed mb-6">{svc.desc}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {svc.features.map((f, j) => (
                  <span
                    key={j}
                    className="flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full"
                    style={{
                      color: `${svc.accent}80`,
                      background: `${svc.accent}06`,
                      border: `1px solid ${svc.accent}15`,
                    }}
                  >
                    <CheckCircle className="w-2.5 h-2.5" />
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Process strip ─── */
const steps = ['Discover', 'Build', 'Automate', 'Grow'];

const HowWeWorkStrip: React.FC = () => (
  <section className="py-20 bg-[#0a0a1a] relative overflow-hidden">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse at 50% 50%, rgba(0,240,255,0.03) 0%, transparent 70%)',
      }}
    />
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 justify-between">
        <div className="text-center lg:text-left">
          <p className="caption-text mb-2">HOW WE WORK</p>
          <h3 className="h3-subsection text-white">
            Four Steps to <span className="text-cyan">Growth</span>
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-0">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center px-6">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-2 text-sm font-bold"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,240,255,0.12), rgba(107,47,255,0.08))',
                    border: '1px solid rgba(0,240,255,0.2)',
                    color: '#00f0ff',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <span className="text-white/70 text-sm font-medium">{step}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:flex items-center pb-5">
                  <div className="w-8 h-[1px] bg-gradient-to-r from-cyan/20 to-purple/20" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ServicesPage: React.FC = () => (
  <PageLayout>
    <ServicesHero />
    <ServicesGrid />
    <SectionDivider />
    <HowWeWorkStrip />
    <CTASection />
  </PageLayout>
);

export default ServicesPage;
