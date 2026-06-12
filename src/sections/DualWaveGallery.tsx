import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const DualWaveGallery: React.FC = () => {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const row1Items = [
    'Digital Platforms', 'Marketing Systems', 'Automation', 'CRM Solutions',
    'Lead Generation', 'Growth Analytics', 'AI Integration', 'Cloud Architecture',
  ];
  const row2Items = [
    'React & Next.js', 'Node.js & Python', 'AWS & Azure', 'Salesforce',
    'HubSpot', 'Zapier', 'Google Analytics', 'Figma & Adobe',
  ];

  useEffect(() => {
    const row1 = row1Ref.current;
    const row2 = row2Ref.current;
    if (!row1 || !row2) return;

    const items1 = row1.querySelectorAll('.wave-item');
    const items2 = row2.querySelectorAll('.wave-item');
    const totalWidth1 = row1.scrollWidth / 2;
    const totalWidth2 = row2.scrollWidth / 2;

    // Row 1 - scrolls left
    const tl1 = gsap.to(row1, {
      x: -totalWidth1,
      duration: 40,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x: number) => parseFloat(String(x)) % totalWidth1),
      },
    });

    // Row 1 wave
    const wave1 = gsap.to(items1, {
      y: (index: number) => Math.sin(0.1 * index) * 30,
      duration: 1,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: { each: 0.1, from: 'start' },
    });

    // Row 2 - scrolls right
    const tl2 = gsap.fromTo(row2,
      { x: -totalWidth2 },
      {
        x: 0,
        duration: 30,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x: number) => {
            const val = parseFloat(String(x));
            return ((val % totalWidth2) + totalWidth2) % totalWidth2 - totalWidth2;
          }),
        },
      }
    );

    // Row 2 wave
    const wave2 = gsap.to(items2, {
      y: (index: number) => Math.sin(0.08 * index) * 40,
      duration: 1.2,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true,
      stagger: { each: 0.1, from: 'start' },
    });

    return () => {
      tl1.kill();
      wave1.kill();
      tl2.kill();
      wave2.kill();
    };
  }, []);

  const renderRow = (items: string[]) => (
    <>
      {[...items, ...items].map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="wave-item inline-block font-display font-bold px-10 text-white/[0.08] hover:text-cyan transition-colors duration-300 cursor-default select-none"
          style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            whiteSpace: 'nowrap',
          }}
        >
          {item}
        </span>
      ))}
    </>
  );

  return (
    <section className="py-16 bg-[#03020f] overflow-hidden">
      <div ref={row1Ref} className="flex whitespace-nowrap mb-4 py-5">
        {renderRow(row1Items)}
      </div>
      <div ref={row2Ref} className="flex whitespace-nowrap py-5">
        {renderRow(row2Items)}
      </div>
    </section>
  );
};

export default DualWaveGallery;
