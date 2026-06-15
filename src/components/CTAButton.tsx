import React from 'react';
import { Link } from 'react-router';

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
  const combined = `${baseClasses} ${variantClasses} ${className}`;

  // Internal route (starts with /) — use React Router Link for SPA navigation
  if (href?.startsWith('/')) {
    return (
      <Link to={href} className={combined}>
        {children}
      </Link>
    );
  }

  // External or anchor link
  if (href) {
    return (
      <a href={href} className={combined}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combined}>
      {children}
    </button>
  );
};

export default CTAButton;
