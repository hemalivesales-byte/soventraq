import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;
    const cards = sectionRef.current.querySelectorAll('.stat-card');
    gsap.fromTo(
      cards,
      { scale: 0, opacity: 0 },
      {
        scale: 1, opacity: 1,
        duration: 1.6,
        ease: 'elastic.out(1.1, 0.4)',
        stagger: { each: 0.1, from: 'start' },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="about" className="section-padding bg-[#03020f] relative">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(107,47,255,0.06) 0%, transparent 70%)' }} />

      <div className="max-w-[900px] mx-auto text-center relative z-10" ref={sectionRef}>
        <p className="caption-text mb-6">ABOUT SOVENTRAQ</p>
        <h2 className="h2-section text-white mb-8">
          We Don't Build Websites.<br />
          We Build <span className="text-cyan">Digital Growth Engines</span>.
        </h2>
        <div className="space-y-5 mb-20 max-w-[700px] mx-auto">
          <p className="body-large">
            Soventraq is a digital solutions company that partners with ambitious businesses to design, build, and scale powerful digital ecosystems. From enterprise platforms to automated marketing systems, we engineer technology that drives revenue.
          </p>
          <p className="body-large">
            Our team combines deep technical expertise with strategic marketing intelligence. The result? Systems that don't just look impressive — they perform, convert, and scale with your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { value: '150+', label: 'Platforms Delivered', suffix: '' },
            { value: '50M+', label: 'Leads Generated', suffix: '' },
            { value: '98%', label: 'Client Retention Rate', suffix: '' },
          ].map((stat, i) => (
            <div
              key={i}
              className="stat-card glass-card p-10 text-center group"
            >
              <div className="stat-number group-hover:scale-105 transition-transform duration-500">
                {stat.value}
              </div>
              <div className="caption-text text-white/30 mt-3 tracking-[0.12em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
