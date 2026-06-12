import React from 'react';
import GlassCard from '../components/GlassCard';
import { Zap, Target, GitBranch, Repeat, Clock, TrendingUp } from 'lucide-react';

const AutomationCRMSection: React.FC = () => {
  const capabilities = [
    { icon: Zap, title: 'Workflow Automation', desc: 'Trigger complex multi-step actions across your entire tech stack without writing a single line of code.' },
    { icon: Target, title: 'Lead Scoring', desc: 'AI-powered lead qualification that ranks prospects by conversion probability so your team focuses on the right opportunities.' },
    { icon: GitBranch, title: 'Pipeline Management', desc: 'Visual deal pipelines with automated stage transitions, reminders, and follow-up sequences.' },
    { icon: Repeat, title: 'Task Automation', desc: 'Eliminate data entry, scheduling, and reporting busywork. Your team focuses on selling, systems handle everything else.' },
    { icon: Clock, title: 'Smart Scheduling', desc: 'Automated appointment booking, reminder sequences, and rescheduling that reduces no-shows by 60%.' },
    { icon: TrendingUp, title: 'Revenue Tracking', desc: 'Real-time revenue attribution connecting every marketing dollar to closed deals and customer lifetime value.' },
  ];

  return (
    <section className="section-padding bg-surface-dark relative">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-20">
          <p className="caption-text mb-6">AUTOMATION & CRM</p>
          <h2 className="h2-section text-white max-w-[700px] mx-auto">
            Work Smarter. <span className="text-cyan">Grow Faster</span>.
          </h2>
          <p className="body-large mt-6 max-w-[560px] mx-auto">
            Automate the repetitive. Streamline the complex. Free your team to focus on what humans do best — strategy, relationships, and creative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Capabilities grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <GlassCard key={i} className="p-6" hover>
                <cap.icon className="w-7 h-7 text-cyan mb-4" />
                <h4 className="text-white font-semibold text-[15px] mb-2">{cap.title}</h4>
                <p className="text-white/45 text-sm leading-relaxed">{cap.desc}</p>
              </GlassCard>
            ))}
          </div>

          {/* CRM Pipeline Visual */}
          <div className="flex flex-col justify-center">
            <GlassCard className="p-8" glowBorder>
              <h4 className="h4-card text-white mb-6">Your Sales Pipeline</h4>
              <div className="space-y-3">
                {[
                  { stage: 'New Lead', count: 248, color: '#00f0ff', width: '100%' },
                  { stage: 'Contacted', count: 186, color: '#00c8d6', width: '85%' },
                  { stage: 'Qualified', count: 124, color: '#6b5fff', width: '65%' },
                  { stage: 'Proposal', count: 72, color: '#8b4fff', width: '45%' },
                  { stage: 'Negotiation', count: 38, color: '#7b3fff', width: '30%' },
                  { stage: 'Closed Won', count: 24, color: '#6b2fff', width: '20%' },
                ].map((s, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-white/50 text-xs w-[90px] shrink-0 text-right">{s.stage}</span>
                    <div className="flex-1 h-8 rounded-lg bg-white/[0.03] border border-white/[0.05] relative overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full rounded-lg transition-all duration-1000"
                        style={{
                          width: s.width,
                          background: `linear-gradient(90deg, ${s.color}30, ${s.color}15)`,
                          borderRight: `2px solid ${s.color}60`,
                        }}
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 text-xs font-medium">{s.count}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/[0.06] flex justify-between items-center">
                <span className="text-white/40 text-sm">Pipeline Value</span>
                <span className="text-cyan font-bold text-lg">$2.4M</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomationCRMSection;
