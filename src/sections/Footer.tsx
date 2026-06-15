import React from 'react';
import { Link } from 'react-router';
import { Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  const serviceLinks = [
    { label: 'Website Development',    to: '/services' },
    { label: 'CRM Systems',            to: '/services' },
    { label: 'Marketing Automation',   to: '/services' },
    { label: 'B2B Outreach',           to: '/services' },
    { label: 'Analytics Dashboards',   to: '/services' },
  ];

  const companyLinks = [
    { label: 'About',        to: '/about' },
    { label: 'Solutions',    to: '/solutions' },
    { label: 'Contact',      to: '/contact' },
  ];

  return (
    <footer className="bg-[#03020f] pt-24 pb-10 border-t border-white/[0.05]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">

          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-6 w-fit">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan/15 to-purple/10 border border-cyan/20 flex items-center justify-center">
                <span className="font-body font-bold text-cyan text-sm">S</span>
              </div>
              <span className="font-body font-bold text-[14px] tracking-[0.12em] text-white">
                SOVENTRAQ
              </span>
            </Link>
            <p className="text-white/35 text-sm leading-relaxed max-w-[320px] mb-8">
              Digital platforms and marketing systems for businesses that refuse to settle for average. We engineer growth.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-white/30 hover:text-cyan hover:border-cyan/25 hover:bg-cyan/5 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h5 className="caption-text text-white/60 text-[10px] mb-6">SERVICES</h5>
            <ul className="space-y-3.5">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-white/35 hover:text-cyan text-sm transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h5 className="caption-text text-white/60 text-[10px] mb-6">COMPANY</h5>
            <ul className="space-y-3.5">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-white/35 hover:text-cyan text-sm transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2">
            <h5 className="caption-text text-white/60 text-[10px] mb-6">CONNECT</h5>
            <ul className="space-y-3.5">
              <li>
                <a href="mailto:hello@soventraq.com" className="text-white/35 hover:text-cyan text-sm transition-colors duration-300">
                  hello@soventraq.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="text-white/35 hover:text-cyan text-sm transition-colors duration-300">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-white/35 hover:text-cyan text-sm transition-colors duration-300">
                  Schedule a Call
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="caption-text text-white/15 text-[10px]">
            2025 SOVENTRAQ. ALL RIGHTS RESERVED.
          </span>
          <div className="flex gap-8">
            <a href="#" className="caption-text text-white/15 hover:text-white/35 text-[10px] transition-colors">PRIVACY POLICY</a>
            <a href="#" className="caption-text text-white/15 hover:text-white/35 text-[10px] transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
