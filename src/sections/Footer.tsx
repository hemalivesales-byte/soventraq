import React from 'react';
import { Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#03020f] pt-24 pb-10 border-t border-white/[0.05]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan/15 to-purple/10 border border-cyan/20 flex items-center justify-center">
                <span className="font-body font-bold text-cyan text-sm">S</span>
              </div>
              <span className="font-body font-bold text-[14px] tracking-[0.12em] text-white">
                SOVENTRAQ
              </span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-[320px] mb-8">
              Digital solutions and marketing technology for businesses that refuse to settle for average. We engineer growth.
            </p>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#"
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
              {['Platform Development', 'CRM Systems', 'Marketing Automation', 'AI Solutions', 'Analytics'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-white/35 hover:text-cyan text-sm transition-colors duration-300 flex items-center gap-1 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h5 className="caption-text text-white/60 text-[10px] mb-6">COMPANY</h5>
            <ul className="space-y-3.5">
              {['About', 'Case Studies', 'Process', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-white/35 hover:text-cyan text-sm transition-colors duration-300 flex items-center gap-1 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2">
            <h5 className="caption-text text-white/60 text-[10px] mb-6">CONNECT</h5>
            <ul className="space-y-3.5">
              {['hello@soventraq.com', '+1 (555) 123-4567', 'Schedule a Call'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/35 hover:text-cyan text-sm transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
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
