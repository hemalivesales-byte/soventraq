import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface StaggeredGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: string;
  gap?: string;
  staggerDelay?: number;
  duration?: number;
}

const StaggeredGrid: React.FC<StaggeredGridProps> = ({
  children,
  className = '',
  columns = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  gap = 'gap-6',
  staggerDelay = 0.08,
  duration = 1.6,
}) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!gridRef.current) return;
    const items = gridRef.current.querySelectorAll('.staggered-item');
    if (items.length === 0) return;

    gsap.fromTo(
      items,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration,
        ease: 'elastic.out(1.1, 0.4)',
        stagger: { each: staggerDelay, from: 'start' },
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, { scope: gridRef });

  return (
    <div ref={gridRef} className={`grid ${columns} ${gap} ${className}`}>
      {children}
    </div>
  );
};

export default StaggeredGrid;
