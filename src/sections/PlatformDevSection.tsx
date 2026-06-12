import React from 'react';
import GlassCard from '../components/GlassCard';
import { Server, Plug, Code, Shield, Zap, Database } from 'lucide-react';

const PlatformDevSection: React.FC = () => {
  return (
    <section className="section-padding bg-surface-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,240,255,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="caption-text mb-6">PLATFORM DEVELOPMENT</p>
          <h2 className="h2-section text-white max-w-[700px] mx-auto">
            Built for <span className="text-cyan">Scale</span>. Engineered for <span className="text-purple">Performance</span>.
          </h2>
          <p className="body-large mt-6 max-w-[560px] mx-auto">
            Enterprise-grade architecture that grows with your business. Every line of code is written with scalability, security, and speed in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Main feature card */}
          <div className="lg:col-span-3">
            <GlassCard className="p-10 lg:p-12 h-full" glowBorder>
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan/15 to-purple/5 border border-cyan/20 flex items-center justify-center">
                  <Server className="w-6 h-6 text-cyan" />
                </div>
                <div>
                  <h3 className="h3-subsection text-white">Enterprise-Grade Architecture</h3>
                  <p className="body-text mt-2">Microservices-ready infrastructure designed for mission-critical operations.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Shield, title: '99.9% Uptime SLA', desc: 'Enterprise reliability with redundant infrastructure' },
                  { icon: Zap, title: 'Auto-Scaling', desc: 'Cloud deployment that scales automatically with demand' },
                  { icon: Database, title: 'Real-Time Processing', desc: 'Sub-second data processing for live dashboards' },
                  { icon: Code, title: 'API-First Design', desc: 'Every feature accessible via RESTful and GraphQL APIs' },
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <feat.icon className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-white font-semibold text-sm">{feat.title}</h5>
                      <p className="text-white/40 text-xs mt-1">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Side cards */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <GlassCard className="p-8 flex-1">
              <Plug className="w-8 h-8 text-cyan mb-4" />
              <h4 className="h4-card text-white mb-2">Custom Integrations</h4>
              <p className="body-text">
                Seamlessly connect Salesforce, HubSpot, Zapier, Stripe, and 200+ tools. Your platform becomes the central nervous system of your business.
              </p>
            </GlassCard>
            <GlassCard className="p-8 flex-1">
              <Code className="w-8 h-8 text-purple mb-4" />
              <h4 className="h4-card text-white mb-2">Modern Tech Stack</h4>
              <p className="body-text">
                React, Next.js, Node.js, Python, PostgreSQL, Redis, AWS — we use battle-tested technologies that power the world's most successful companies.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformDevSection;
