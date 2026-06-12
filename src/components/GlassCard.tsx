import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glowBorder?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hover = true,
  glowBorder = false,
}) => {
  return (
    <div
      className={`
        bg-surface-glass border border-white/[0.08] rounded-2xl backdrop-blur-[10px]
        ${hover ? 'transition-all duration-300 hover:-translate-y-1 hover:border-cyan-glow hover:shadow-glow-lg' : ''}
        ${glowBorder ? 'relative overflow-hidden' : ''}
        ${className}
      `}
    >
      {glowBorder && (
        <div
          className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(0,240,255,0.15), rgba(107,47,255,0.15))',
            padding: '1px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />
      )}
      {children}
    </div>
  );
};

export default GlassCard;
