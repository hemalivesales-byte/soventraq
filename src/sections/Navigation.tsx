import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home',      to: '/' },
  { label: 'Services',  to: '/services' },
  { label: 'Platform',  to: '/platform' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'About',     to: '/about' },
  { label: 'Contact',   to: '/contact' },
];

const Navigation: React.FC = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname }                = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (to: string) =>
    to === '/' ? pathname === '/' : pathname.startsWith(to);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[76px]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/images/soventraq-logo.png"
            alt="Soventraq"
            className="w-8 h-8 object-contain"
          />
          <span className="font-body font-bold text-[13px] tracking-[0.14em] text-white">
            SOVENTRAQ
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative font-body font-medium text-[13px] tracking-[0.04em] px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive(link.to)
                  ? 'text-cyan'
                  : 'text-white/50 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {link.label}
              {isActive(link.to) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className="font-body font-semibold text-[13px] tracking-[0.03em] text-[#03020f] bg-gradient-to-r from-cyan to-[#00c8d6] rounded-lg px-6 py-2.5 hover:shadow-[0_4px_24px_rgba(0,240,255,0.35)] hover:-translate-y-0.5 transition-all duration-300 inline-block"
          >
            Book a Free Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center text-white/60 hover:text-cyan transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="nav-glass border-t border-white/[0.04] px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body font-medium text-[14px] tracking-[0.04em] transition-all duration-300 py-3 px-4 rounded-lg ${
                isActive(link.to)
                  ? 'text-cyan bg-cyan/[0.04]'
                  : 'text-white/60 hover:text-cyan hover:bg-white/[0.03]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="font-body font-semibold text-[14px] text-[#03020f] bg-gradient-to-r from-cyan to-[#00c8d6] rounded-lg px-6 py-3.5 text-center mt-3 inline-block"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
