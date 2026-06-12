import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'filled' | 'outlined';
  href?: string;
  onClick?: () => void;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  children,
  variant = 'filled',
  href,
  onClick,
  className = '',
}) => {
  const baseClasses = 'cta-button';
  const variantClasses = variant === 'filled' ? 'cta-filled' : 'cta-outlined';

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`}>
      {children}
    </button>
  );
};

export default CTAButton;
