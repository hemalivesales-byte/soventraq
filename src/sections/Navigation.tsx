import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.6);

      // Track active section
      const sections = ['platform', 'services', 'solutions', 'process', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Platform', href: '#platform' },
    { label: 'Services', href: '#services' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'nav-glass'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[76px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/images/soventraq-logo.png"
            alt="Soventraq"
            className="w-8 h-8 object-contain"
          />
          <span className="font-body font-bold text-[13px] tracking-[0.14em] text-white">
            SOVENTRAQ
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative font-body font-medium text-[13px] tracking-[0.04em] px-4 py-2 rounded-lg transition-all duration-300 ${
                activeSection === link.href.slice(1)
                  ? 'text-cyan'
                  : 'text-white/50 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan" />
              )}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="font-body font-semibold text-[13px] tracking-[0.03em] text-[#03020f] bg-gradient-to-r from-cyan to-[#00c8d6] rounded-lg px-6 py-2.5 hover:shadow-[0_4px_24px_rgba(0,240,255,0.35)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Start Your Project
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center text-white/60 hover:text-cyan transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="nav-glass border-t border-white/[0.04] px-6 py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body font-medium text-[14px] tracking-[0.04em] text-white/60 hover:text-cyan hover:bg-white/[0.03] transition-all duration-300 py-3 px-4 rounded-lg"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-body font-semibold text-[14px] text-[#03020f] bg-gradient-to-r from-cyan to-[#00c8d6] rounded-lg px-6 py-3.5 text-center mt-3"
            onClick={() => setMobileOpen(false)}
          >
            Start Your Project
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
