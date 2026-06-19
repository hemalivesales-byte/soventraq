import React, { lazy, Suspense } from 'react';
import { Link } from 'react-router';
import PageLayout from '../components/PageLayout';
import CTASection from '../sections/CTASection';
import {
  Globe, Users, Zap,
  Target, BarChart3, Palette,
  Search, Hammer, TrendingUp,
  ArrowRight, Server, Plug, Cpu,
} from 'lucide-react';

// Only the 3D hero is lazy-loaded (Three.js is ~1.1 MB)
const HeroSection = lazy(() => import('../sections/HeroSection'));

/* ─── Loading fallback while hero canvas boots ─── */
const HeroFallback: React.FC = () => (
  <div
    className="w-full min-h-screen flex items-center justify-center"
    style={{ background: '#03020f' }}
  >
    <div
      className="w-10 h-10 rounded-full border-2 border-transparent animate-spin"
      style={{ borderTopColor: '#00f0ff' }}
    />
  </div>
);

/* ════════════════════════════════════════════════
   SERVICES PREVIEW — 3 cards + "View All" link
   ════════════════════════════════════════════════ */
const serviceHighlights = [
  {
    icon: Globe,
    title: 'Website & Landing Page Development',
    desc: 'High-converting websites engineered for speed, SEO, and sales.',
    accent: '#00f0ff',
  },
  {
    icon: Users,
    title: 'CRM & Lead Management Systems',
    desc: 'Organize your entire pipeline and never lose a lead again.',
    accent: '#6b2fff',
  },
  {
    icon: Zap,
    title: 'Marketing Automation',
    desc: 'Smart workflows that nurture, follow up, and close — 24/7.',
    accent: '#00f0ff',
  },
];

const ServicesPreview: React.FC = () => (
  <section className="section-padding bg-[#03020f] relative overflow-hidden">
    <div
      className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.04) 0%, transparent 70%)' }}
    />
    <div className="max-w-[1280px] mx-auto relative z-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <p className="caption-text mb-3">WHAT WE DO</p>
          <h2 className="h2-section text-white">
            Core <span className="text-cyan">Services</span>
          </h2>
        </div>
        <Link
          to="/services"
          className="flex items-center gap-2 text-cyan/70 hover:text-cyan text-sm font-semibold tracking-wide transition-colors duration-300 group shrink-0"
        >
          View All Services
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {serviceHighlights.map((svc, i) => (
          <div
            key={i}
            className="group rounded-[18px] p-[1px] transition-all duration-400 hover:-translate-y-2"
            style={{
              background: `linear-gradient(135deg, ${svc.accent}28, rgba(107,47,255,0.1), transparent 60%)`,
            }}
          >
            <div
              className="h-full rounded-[17px] p-7"
              style={{ background: 'linear-gradient(135deg, rgba(10,10,26,0.97), rgba(3,2,15,0.99))' }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${svc.accent}15, ${svc.accent}05)`,
                  border: `1px solid ${svc.accent}22`,
                }}
              >
                <svc.icon className="w-5 h-5" style={{ color: svc.accent }} />
              </div>
              <h3 className="h4-card text-white mb-2 group-hover:text-cyan transition-colors duration-300 leading-snug">
                {svc.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{svc.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ════════════════════════════════════════════════
   WHY CHOOSE — 4 compact items, no GSAP, no imports
   ════════════════════════════════════════════════ */
const whyItems = [
  { icon: Target,   title: 'Built for Conversion',    desc: 'Every page and workflow is engineered to turn visitors into revenue.', accent: '#00f0ff' },
  { icon: Zap,  title: 'Automated Workflows',      desc: 'Systems that handle follow-up, scoring, and CRM updates — around the clock.', accent: '#6b2fff' },
  { icon: BarChart3, title: 'Scalable Systems',        desc: 'Architecture that handles 10× growth without rebuilding from scratch.', accent: '#00f0ff' },
  { icon: Palette,  title: 'Clean Professional Design', desc: 'Premium, pixel-perfect design that signals authority on first impression.', accent: '#6b2fff' },
];

const WhyChoosePreview: React.FC = () => (
  <section className="section-padding bg-[#0a0a1a] relative">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(107,47,255,0.04) 0%, transparent 70%)' }}
    />
    <div className="max-w-[1280px] mx-auto relative z-10">
      <div className="text-center mb-14">
        <p className="caption-text mb-4">WHY SOVENTRAQ</p>
        <h2 className="h2-section text-white max-w-[600px] mx-auto">
          Every System <span className="text-cyan">Built for Growth</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {whyItems.map((item, i) => (
          <div
            key={i}
            className="group rounded-[18px] p-[1px] transition-all duration-400 hover:-translate-y-1"
            style={{
              background: `linear-gradient(135deg, ${item.accent}22, transparent 60%)`,
            }}
          >
            <div
              className="h-full rounded-[17px] p-6"
              style={{ background: 'linear-gradient(135deg, rgba(10,10,26,0.97), rgba(3,2,15,0.99))' }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `linear-gradient(135deg, ${item.accent}15, ${item.accent}05)`,
                  border: `1px solid ${item.accent}20`,
                }}
              >
                <item.icon className="w-4 h-4" style={{ color: item.accent }} />
              </div>
              <h4 className="font-body font-semibold text-white text-[15px] mb-2 group-hover:text-cyan transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-white/38 text-[13px] leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ════════════════════════════════════════════════
   PROCESS STRIP — 4 steps, horizontal, minimal
   ════════════════════════════════════════════════ */
const processSteps = [
  { icon: Search,    num: '01', label: 'Discover',  desc: 'Map your business, goals & gaps' },
  { icon: Hammer,    num: '02', label: 'Build',     desc: 'Design & engineer your platform' },
  { icon: Zap,   num: '03', label: 'Automate',  desc: 'Wire up workflows & sequences' },
  { icon: TrendingUp, num: '04', label: 'Grow',     desc: 'Monitor, optimize & scale' },
];

const ProcessPreview: React.FC = () => (
  <section className="section-padding bg-[#03020f] relative">
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.025]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,240,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.6) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />
    <div className="max-w-[1280px] mx-auto relative z-10">
      <div className="text-center mb-14">
        <p className="caption-text mb-4">HOW WE WORK</p>
        <h2 className="h2-section text-white max-w-[560px] mx-auto">
          From <span className="text-cyan">Strategy</span> to{' '}
          <span style={{ color: '#6b2fff' }}>Scale</span>
        </h2>
      </div>

      {/* Steps grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 relative">
        {/* Connector line — desktop only */}
        <div
          className="hidden lg:block absolute top-[28px] left-[calc(12.5%+8px)] right-[calc(12.5%+8px)] h-[1px] z-0"
          style={{ background: 'linear-gradient(90deg, rgba(0,240,255,0.2), rgba(107,47,255,0.2))' }}
        />

        {processSteps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center relative z-10 px-4">
            {/* Icon circle */}
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-5 shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(0,240,255,0.12), rgba(107,47,255,0.08))',
                border: '1px solid rgba(0,240,255,0.2)',
                boxShadow: '0 0 20px rgba(0,240,255,0.06)',
              }}
            >
              <step.icon className="w-5 h-5 text-cyan" />
            </div>
            <span className="caption-text text-white/20 text-[9px] mb-1">{step.num}</span>
            <h4 className="font-body font-semibold text-white text-[15px] mb-1">{step.label}</h4>
            <p className="text-white/35 text-[12px] leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ════════════════════════════════════════════════
   PLATFORM PREVIEW — compact 3-card teaser
   ════════════════════════════════════════════════ */
const platformHighlights = [
  { icon: Server, title: 'Enterprise Architecture', desc: '99.9% uptime SLA with auto-scaling cloud infrastructure built for mission-critical operations.', accent: '#6b2fff' },
  { icon: Plug,   title: 'Custom Integrations',     desc: 'Connect Salesforce, HubSpot, Zapier, Stripe, and 200+ tools into a unified business hub.', accent: '#00f0ff' },
  { icon: Cpu,    title: 'AI-Assisted Automation',  desc: 'Intelligent workflows that learn, adapt, and continuously improve your operations 24/7.', accent: '#6b2fff' },
];

const PlatformPreview: React.FC = () => (
  <section className="section-padding bg-[#0a0a1a] relative overflow-hidden">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(107,47,255,0.05) 0%, transparent 70%)' }}
    />
    <div className="max-w-[1280px] mx-auto relative z-10">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
        <div>
          <p className="caption-text mb-3">OUR PLATFORM</p>
          <h2 className="h2-section text-white">
            Built for <span style={{ color: '#6b2fff' }}>Scale</span>
          </h2>
        </div>
        <Link
          to="/platform"
          className="flex items-center gap-2 text-sm font-semibold tracking-wide transition-colors duration-300 group shrink-0"
          style={{ color: 'rgba(107,47,255,0.7)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#6b2fff')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(107,47,255,0.7)')}
        >
          Explore Platform
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {platformHighlights.map((item, i) => (
          <div
            key={i}
            className="group rounded-[18px] p-[1px] transition-all duration-400 hover:-translate-y-2"
            style={{
              background: `linear-gradient(135deg, ${item.accent}28, rgba(0,240,255,0.08), transparent 60%)`,
            }}
          >
            <div
              className="h-full rounded-[17px] p-7"
              style={{ background: 'linear-gradient(135deg, rgba(10,10,26,0.97), rgba(3,2,15,0.99))' }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${item.accent}15, ${item.accent}05)`,
                  border: `1px solid ${item.accent}22`,
                }}
              >
                <item.icon className="w-5 h-5" style={{ color: item.accent }} />
              </div>
              <h3 className="h4-card text-white mb-2 leading-snug" style={{ transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = item.accent)}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
              >
                {item.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ════════════════════════════════════════════════
   HOME PAGE — final composition
   ════════════════════════════════════════════════ */
const HomePage: React.FC = () => (
  <PageLayout>
    <Suspense fallback={<HeroFallback />}>
      <HeroSection />
    </Suspense>

    <div className="section-divider" />
    <ServicesPreview />

    <div className="section-divider" />
    <WhyChoosePreview />

    <div className="section-divider" />
    <ProcessPreview />

    <div className="section-divider" />
    <PlatformPreview />

    <CTASection />
  </PageLayout>
);

export default HomePage;
