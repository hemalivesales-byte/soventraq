import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import { Mail, MessageCircle, MapPin, ArrowRight, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

type Status = 'idle' | 'sending' | 'success' | 'error';

const EMPTY_FORM: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
};

const SERVICE_OPTIONS = [
  'Website & Landing Page Development',
  'CRM & Lead Management Systems',
  'Marketing Automation',
  'B2B Outreach Systems',
  'Social Media Content System',
  'Analytics & Reporting Dashboards',
  'Brand Growth Strategy',
  'Not sure yet — let\'s talk',
];

const inputClass =
  'w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder:text-white/25 focus:border-cyan/50 focus:ring-[3px] focus:ring-cyan/[0.08] outline-none transition-all duration-300 text-sm';

const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg('Please fill in your name, email, and message.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm(EMPTY_FORM);
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding bg-surface-dark relative">
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,240,255,0.05) 0%, transparent 70%)' }}
      />

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
              <a
                href="mailto:sonevtraq@gmail.com"
                className="flex items-center gap-4 text-white/50 hover:text-cyan transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan/5 border border-cyan/10 flex items-center justify-center group-hover:bg-cyan/10 group-hover:border-cyan/25 transition-all">
                  <Mail className="w-5 h-5 text-cyan/70" />
                </div>
                <div>
                  <span className="text-white/30 text-xs block mb-0.5">Email</span>
                  <span className="font-body">sonevtraq@gmail.com</span>
                </div>
              </a>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/50 hover:text-cyan transition-all duration-300 group"
              >
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
              {status === 'success' ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/15 to-purple/5 border border-cyan/20 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-7 h-7 text-cyan" />
                  </div>
                  <h3 className="h4-card text-white mb-2">Message Sent Successfully</h3>
                  <p className="text-white/50 mb-8">
                    Our team will review your inquiry and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-cyan/70 hover:text-cyan text-sm font-semibold transition-colors duration-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/40 text-xs mb-2 block">
                        Name <span className="text-cyan/60">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={set('name')}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-white/40 text-xs mb-2 block">
                        Email <span className="text-cyan/60">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={form.email}
                        onChange={set('email')}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Phone + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/40 text-xs mb-2 block">Phone</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={set('phone')}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-white/40 text-xs mb-2 block">Company</label>
                      <input
                        type="text"
                        placeholder="Your company name"
                        value={form.company}
                        onChange={set('company')}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="text-white/40 text-xs mb-2 block">Service Interested In</label>
                    <select
                      value={form.service}
                      onChange={set('service')}
                      className={`${inputClass} appearance-none`}
                      style={{ background: 'rgba(255,255,255,0.03)' }}
                    >
                      <option value="" style={{ background: '#0a0a1a' }}>Select a service…</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} style={{ background: '#0a0a1a' }}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-white/40 text-xs mb-2 block">
                      Tell us about your project <span className="text-cyan/60">*</span>
                    </label>
                    <textarea
                      placeholder="What are you looking to build? What's your timeline?"
                      value={form.message}
                      onChange={set('message')}
                      rows={4}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Error banner */}
                  {status === 'error' && (
                    <div className="flex items-start gap-3 rounded-xl px-4 py-3 bg-red-500/8 border border-red-500/20">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      <p className="text-red-400 text-sm">{errorMsg}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full cta-button cta-filled py-4 justify-center group disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
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
