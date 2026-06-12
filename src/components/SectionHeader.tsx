import React from 'react';

interface SectionHeaderProps {
  overline: string;
  headline: string;
  subheadline?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  overline,
  headline,
  subheadline,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <p className="caption-text text-cyan mb-4">{overline}</p>
      <h2 className="h2-section text-white mb-6">{headline}</h2>
      {subheadline && (
        <p className={`body-large text-white/60 ${centered ? 'mx-auto max-w-[600px]' : 'max-w-[600px]'}`}>
          {subheadline}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
