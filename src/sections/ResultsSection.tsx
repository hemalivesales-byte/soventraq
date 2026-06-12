import React, { useRef, useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { Clock, MessageCircle, BarChart2 } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: 3,
    suffix: 'x',
    label: 'Faster Lead Handling',
    desc: 'Automated routing and instant follow-up sequences cut response time from days to minutes.',
    color: '#00f0ff',
  },
  {
    icon: MessageCircle,
    value: 87,
    suffix: '%',
    label: 'Better Follow-Up Rate',
    desc: 'Automated sequences ensure every lead gets the right message at the right time — without manual effort.',
    color: '#6b2fff',
  },
  {
    icon: BarChart2,
    value: 4,
    suffix: 'x',
    label: 'More Organized Pipeline',
    desc: 'CRM systems with clear stages, auto-tagging, and priority scoring give your team total pipeline clarity.',
    color: '#00f0ff',
  },
];

const ResultsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#03020f] relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,240,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.6) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(107,47,255,0.07) 0%, transparent 65%)' }} />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="text-center mb-20">
          <p className="caption-text mb-6">REAL RESULTS</p>
          <h2 className="h2-section text-white max-w-[680px] mx-auto">
            Systems That <span className="text-cyan">Deliver</span> Measurable<br />Business Outcomes
          </h2>
          <p className="body-large mt-6 max-w-[520px] mx-auto">
            Not vanity metrics. Real improvements to the numbers that actually drive your business forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i}
              className="group relative rounded-[20px] p-[1px] transition-all duration-500 hover:-translate-y-2"
              style={{ background: `linear-gradient(135deg, ${stat.color}30, rgba(107,47,255,0.1), transparent 60%)` }}
            >
              <div className="h-full rounded-[19px] p-8 text-center relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(10,10,26,0.98) 0%, rgba(3,2,15,0.99) 100%)' }}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[19px]"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${stat.color}06, transparent 70%)` }} />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl mx-auto mb-6 flex items-center justify-center transition-transform duration-400 group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}15, ${stat.color}05)`,
                    border: `1px solid ${stat.color}25`,
                  }}
                >
                  <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>

                {/* Animated counter */}
                <div className="mb-3">
                  <span className="stat-number text-[clamp(52px,5vw,72px)]">
                    {triggered ? (
                      <CountUp end={stat.value} duration={2.5} delay={i * 0.2} suffix={stat.suffix} />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </span>
                </div>

                <h4 className="h4-card text-white mb-3">{stat.label}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{stat.desc}</p>

                {/* Bottom border glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${stat.color}50, transparent)` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
