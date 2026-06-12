import React from 'react';
import StaggeredGrid from '../components/StaggeredGrid';
import { Globe, Users, Zap, Send, BarChart3, TrendingUp } from 'lucide-react';

const services = [
  {
    num: '01',
    icon: Globe,
    name: 'Website & Landing Page Development',
    desc: 'High-converting, lightning-fast websites and landing pages engineered to turn visitors into customers. Built for performance, optimized for every device.',
    tags: ['Responsive', 'SEO-Ready', 'Conversion-Optimized'],
    gradient: 'from-cyan/10 to-blue-deep/10',
    borderColor: 'rgba(0,240,255,0.2)',
  },
  {
    num: '02',
    icon: Users,
    name: 'CRM & Lead Management Systems',
    desc: 'Custom CRM setups that organize your entire sales pipeline — from first contact to closed deal. Never lose a lead again.',
    tags: ['Pipeline Tracking', 'Lead Scoring', 'Sales Reporting'],
    gradient: 'from-purple/10 to-cyan/5',
    borderColor: 'rgba(107,47,255,0.25)',
  },
  {
    num: '03',
    icon: Zap,
    name: 'Marketing Automation',
    desc: 'Smart workflows that nurture prospects, follow up automatically, and close deals while you sleep. Personalized at scale.',
    tags: ['Email Sequences', 'Triggered Workflows', 'Lead Nurturing'],
    gradient: 'from-cyan/8 to-purple/8',
    borderColor: 'rgba(0,240,255,0.18)',
  },
  {
    num: '04',
    icon: Send,
    name: 'B2B Outreach Systems',
    desc: 'Systematic outbound engines that identify, qualify, and connect you with decision-makers. Predictable pipeline, every month.',
    tags: ['Cold Outreach', 'Sequence Automation', 'Reply Tracking'],
    gradient: 'from-purple/10 to-blue-deep/8',
    borderColor: 'rgba(107,47,255,0.2)',
  },
  {
    num: '05',
    icon: BarChart3,
    name: 'Analytics & Reporting Dashboards',
    desc: 'Real-time visibility into every metric that matters. Custom dashboards that turn raw data into decisions that drive growth.',
    tags: ['Custom KPIs', 'Live Dashboards', 'Data Pipelines'],
    gradient: 'from-cyan/10 to-purple/5',
    borderColor: 'rgba(0,240,255,0.2)',
  },
  {
    num: '06',
    icon: TrendingUp,
    name: 'Brand Growth Strategy',
    desc: 'Cohesive brand identity combined with a data-driven growth roadmap. Position your business as the authority in your market.',
    tags: ['Brand Identity', 'Growth Roadmap', 'Market Positioning'],
    gradient: 'from-purple/8 to-cyan/8',
    borderColor: 'rgba(107,47,255,0.18)',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-[#03020f] relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.04) 0%, transparent 70%)' }} />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(107,47,255,0.04) 0%, transparent 70%)' }} />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="caption-text mb-6">OUR SERVICES</p>
          <h2 className="h2-section text-white max-w-[720px] mx-auto">
            Everything to <span className="text-cyan">Build, Automate & Scale</span>
          </h2>
          <p className="body-large mt-6 max-w-[560px] mx-auto">
            A complete suite of digital growth systems — from the first click to a fully automated sales machine.
          </p>
        </div>

        <StaggeredGrid columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" gap="gap-6" staggerDelay={0.08} duration={1.3}>
          {services.map((service, i) => (
            <div key={i} className="staggered-item">
              <div className="group relative h-full rounded-[20px] p-[1px] transition-all duration-500 hover:-translate-y-2"
                style={{ background: `linear-gradient(135deg, ${service.borderColor}, rgba(107,47,255,0.1), transparent 60%)` }}
              >
                <div className={`h-full rounded-[19px] bg-gradient-to-br ${service.gradient} backdrop-blur-xl relative overflow-hidden p-7`}
                  style={{ background: 'linear-gradient(135deg, rgba(10,10,26,0.95) 0%, rgba(3,2,15,0.98) 100%)' }}
                >
                  {/* Corner glow on hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at top right, rgba(0,240,255,0.07) 0%, transparent 70%)' }} />

                  {/* Number */}
                  <span className="caption-text text-white/10 group-hover:text-cyan/30 transition-colors duration-300 block mb-5 text-[10px]">
                    {service.num}
                  </span>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl mb-5 flex items-center justify-center transition-all duration-400 group-hover:scale-110"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,240,255,0.12), rgba(107,47,255,0.06))',
                      border: '1px solid rgba(0,240,255,0.15)',
                      boxShadow: '0 0 0 rgba(0,240,255,0)',
                    }}
                  >
                    <service.icon className="w-5 h-5 text-cyan" />
                  </div>

                  {/* Title */}
                  <h4 className="h4-card text-white mb-3 group-hover:text-cyan transition-colors duration-300 leading-snug">
                    {service.name}
                  </h4>

                  {/* Description */}
                  <p className="text-white/40 text-sm leading-relaxed mb-5">{service.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full transition-all duration-300"
                        style={{
                          color: 'rgba(0,240,255,0.5)',
                          background: 'rgba(0,240,255,0.04)',
                          border: '1px solid rgba(0,240,255,0.1)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </StaggeredGrid>
      </div>
    </section>
  );
};

export default ServicesSection;
