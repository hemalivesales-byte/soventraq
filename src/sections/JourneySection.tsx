import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Compass, Layers, Cpu, Users, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const JourneySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  const steps = [
    { icon: Lightbulb, label: 'Idea', desc: 'Your vision for growth', color: '#00f0ff' },
    { icon: Compass, label: 'Strategy', desc: 'Data-driven roadmap', color: '#00d4e0' },
    { icon: Layers, label: 'Platform', desc: 'Custom-built system', color: '#00a8c8' },
    { icon: Cpu, label: 'Automation', desc: 'Smart workflows', color: '#6b5fff' },
    { icon: Users, label: 'Leads', desc: 'Qualified prospects', color: '#8b4fff' },
    { icon: TrendingUp, label: 'Growth', desc: 'Measurable results', color: '#6b2fff' },
  ];

  useGSAP(() => {
    if (!stepsRef.current) return;
    const items = stepsRef.current.querySelectorAll('.journey-step');
    const lines = stepsRef.current.querySelectorAll('.journey-connector');

    gsap.fromTo(
      items,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      lines,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.6,
        ease: 'power2.out',
        stagger: 0.15,
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-padding bg-[#03020f] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="caption-text mb-5">THE SOVENTRAQ WAY</p>
          <h2 className="h2-section text-white max-w-[700px] mx-auto leading-tight">
            From <span className="text-cyan">Idea</span> to <span className="text-purple">Growth</span>
          </h2>
          <p className="body-large text-white/50 mt-5 max-w-[520px] mx-auto">
            Every successful digital transformation follows a path. Here is how we guide your business from concept to measurable growth.
          </p>
        </div>

        {/* Journey Steps */}
        <div ref={stepsRef} className="relative">
          {/* Desktop: horizontal flow */}
          <div className="hidden lg:flex items-start justify-center gap-0">
            {steps.map((step, i) => (
              <React.Fragment key={i}>
                <div className="journey-step flex flex-col items-center text-center" style={{ width: '160px' }}>
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}15, ${step.color}08)`,
                      border: `1px solid ${step.color}30`,
                      boxShadow: `0 0 30px ${step.color}15`,
                    }}
                  >
                    <step.icon className="w-7 h-7" style={{ color: step.color }} />
                  </div>
                  <h4 className="h4-card text-white mb-1.5">{step.label}</h4>
                  <p className="text-white/40 text-sm">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="journey-connector flex items-center pt-8" style={{ width: '60px' }}>
                    <div className="w-full h-[2px] relative overflow-hidden"
                      style={{ background: `linear-gradient(90deg, ${steps[i].color}40, ${steps[i + 1].color}40)` }}>
                      <div className="absolute top-0 left-0 w-4 h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${steps[i].color}, ${steps[i + 1].color})`,
                          filter: 'blur(1px)',
                          animation: `journeyPulse 2.5s ease-in-out infinite`,
                          animationDelay: `${i * 0.4}s`,
                        }} />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile: vertical flow */}
          <div className="lg:hidden flex flex-col items-center gap-6">
            {steps.map((step, i) => (
              <React.Fragment key={i}>
                <div className="journey-step flex items-center gap-5 w-full max-w-[320px]">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}15, ${step.color}08)`,
                      border: `1px solid ${step.color}30`,
                      boxShadow: `0 0 20px ${step.color}15`,
                    }}
                  >
                    <step.icon className="w-6 h-6" style={{ color: step.color }} />
                  </div>
                  <div>
                    <h4 className="h4-card text-white">{step.label}</h4>
                    <p className="text-white/40 text-sm">{step.desc}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="journey-connector w-[2px] h-6 origin-top"
                    style={{ background: `linear-gradient(180deg, ${steps[i].color}40, ${steps[i + 1].color}40)` }} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes journeyPulse {
          0% { transform: translateX(-16px); opacity: 1; }
          100% { transform: translateX(calc(100% + 16px)); opacity: 0.3; }
        }
      `}</style>
    </section>
  );
};

export default JourneySection;
