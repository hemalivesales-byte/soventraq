import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import { Mail, MessageCircle, MapPin, Send, ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-surface-dark relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.05) 0%, transparent 70%)' }} />

      <div className="max-w-[1280px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <p className="caption-text mb-6">GET IN TOUCH</p>
            <h2 className="h2-section text-white mb-6">
              Let's Start a<br /><span className="text-cyan">Conversation</span>
            </h2>
            <p className="body-large mb-12">
              Have a project in mind? We'd love to hear about it. Share your vision and we'll respond within 24 hours with a strategic roadmap.
            </p>
            <div className="space-y-6">
              <a href="mailto:hello@soventraq.com" className="flex items-center gap-4 text-white/50 hover:text-cyan transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-cyan/5 border border-cyan/10 flex items-center justify-center group-hover:bg-cyan/10 group-hover:border-cyan/25 transition-all">
                  <Mail className="w-5 h-5 text-cyan/70" />
                </div>
                <div>
                  <span className="text-white/30 text-xs block mb-0.5">Email</span>
                  <span className="font-body">hello@soventraq.com</span>
                </div>
              </a>
              <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/50 hover:text-cyan transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-cyan/5 border border-cyan/10 flex items-center justify-center group-hover:bg-cyan/10 group-hover:border-cyan/25 transition-all">
                  <MessageCircle className="w-5 h-5 text-cyan/70" />
                </div>
                <div>
                  <span className="text-white/30 text-xs block mb-0.5">WhatsApp</span>
                  <span className="font-body">+1 (555) 123-4567</span>
                </div>
              </a>
              <div className="flex items-center gap-4 text-white/50">
                <div className="w-11 h-11 rounded-xl bg-cyan/5 border border-cyan/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cyan/70" />
                </div>
                <div>
                  <span className="text-white/30 text-xs block mb-0.5">Location</span>
                  <span className="font-body">Global — Remote First</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <GlassCard className="p-8 lg:p-10" hover={false}>
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/15 to-purple/5 border border-cyan/20 flex items-center justify-center mx-auto mb-5">
                    <Send className="w-7 h-7 text-cyan" />
                  </div>
                  <h3 className="h4-card text-white mb-2">Message Sent Successfully</h3>
                  <p className="text-white/50">Our team will review your inquiry and respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/40 text-xs mb-2 block">Name</label>
                      <input type="text" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder:text-white/25 focus:border-cyan/50 focus:ring-[3px] focus:ring-cyan/8 outline-none transition-all duration-300 text-sm" />
                    </div>
                    <div>
                      <label className="text-white/40 text-xs mb-2 block">Email</label>
                      <input type="email" placeholder="you@company.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder:text-white/25 focus:border-cyan/50 focus:ring-[3px] focus:ring-cyan/8 outline-none transition-all duration-300 text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="text-white/40 text-xs mb-2 block">Company</label>
                    <input type="text" placeholder="Your company name" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder:text-white/25 focus:border-cyan/50 focus:ring-[3px] focus:ring-cyan/8 outline-none transition-all duration-300 text-sm" />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs mb-2 block">Tell us about your project</label>
                    <textarea placeholder="What are you looking to build? What's your timeline?" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required rows={4}
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder:text-white/25 focus:border-cyan/50 focus:ring-[3px] focus:ring-cyan/8 outline-none transition-all duration-300 resize-none text-sm" />
                  </div>
                  <button type="submit" className="w-full cta-button cta-filled py-4 justify-center group">
                    Send Message
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
