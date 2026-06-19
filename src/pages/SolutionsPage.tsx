import React from 'react';
import type { LucideIcon } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import CTASection from '../sections/CTASection';
import PageHeroVisual from '../components/PageHeroVisual';
import { Building2, Plane, Stethoscope, Briefcase, Store, ArrowRight } from 'lucide-react';

interface Solution {
  icon: LucideIcon;
  industry: string;
  tagline: string;
  desc: string;
  challenges: string[];
  howWeHelp: string[];
  accent: string;
}

const solutions: Solution[] = [
  {
    icon: Building2,
    industry: 'Real Estate Offices',
    tagline: 'Turn Listings Into Leads. Automate Your Follow-Up Pipeline.',
    desc: 'Real estate moves fast. Buyers and sellers expect instant responses. We build the digital infrastructure that captures every lead, follows up automatically, and keeps your pipeline organized — so your agents focus on closing, not chasing.',
    challenges: [
      'Missing leads from website visitors',
      'Manual follow-up taking too much agent time',
      'No visibility into which properties convert',
      'Inconsistent social media presence',
    ],
    howWeHelp: [
      'High-converting property listing websites',
      'Automated lead capture and follow-up sequences',
      'CRM setup with pipeline tracking per agent',
      'Social media content system for listings',
      'Analytics dashboard for lead source tracking',
    ],
    accent: '#00f0ff',
  },
  {
    icon: Plane,
    industry: 'Hajj, Umrah & Travel Agencies',
    tagline: 'Fill Your Groups Faster. Manage Bookings Without the Chaos.',
    desc: 'Travel agencies deal with seasonal demand spikes, high-touch customers, and complex group management. We build systems that automate your booking inquiries, nurture prospects through the decision journey, and manage communications at scale.',
    challenges: [
      'Overwhelmed with WhatsApp and phone inquiries',
      'No system to track who is interested vs. confirmed',
      'Manual payment follow-up and reminder process',
      'Low online visibility during peak booking season',
    ],
    howWeHelp: [
      'Professional landing pages for each package',
      'Automated inquiry and booking follow-up flows',
      'CRM with group management and payment tracking',
      'WhatsApp automation for reminders and updates',
      'SEO and Google Ads setup for seasonal traffic',
    ],
    accent: '#6b2fff',
  },
  {
    icon: Stethoscope,
    industry: 'Clinics & Service Businesses',
    tagline: 'More Appointments. Less Administrative Burden.',
    desc: "Clinics and service businesses lose revenue through missed appointments, poor follow-up, and low online visibility. We build digital systems that attract local patients, automate appointment reminders, and manage your reputation — so your team focuses on delivering great service.",
    challenges: [
      'Low Google visibility and poor local SEO',
      'High no-show rates and missed appointment reminders',
      'No system to collect and manage patient reviews',
      'Manually tracking inquiries and callbacks',
    ],
    howWeHelp: [
      'Professional clinic website with booking integration',
      'Automated appointment reminders via SMS and email',
      'Review collection system for Google and social proof',
      'Local SEO and Google Business Profile optimization',
      'CRM for patient inquiries and follow-up tracking',
    ],
    accent: '#00f0ff',
  },
  {
    icon: Briefcase,
    industry: 'B2B Companies',
    tagline: 'Build a Predictable Outbound Pipeline. Close More Deals.',
    desc: 'B2B sales cycles are long and relationship-driven. We build the outbound systems, CRM infrastructure, and marketing automation that keeps your pipeline full, your prospects warm, and your sales team focused on the right opportunities.',
    challenges: [
      'Relying on referrals with no predictable new business',
      'Long sales cycles with poor follow-up consistency',
      'No data on which campaigns generate real revenue',
      'Sales team spending time on admin instead of selling',
    ],
    howWeHelp: [
      'B2B outreach system with personalized sequences',
      'CRM setup with deal stage automation and reminders',
      'LinkedIn content strategy and authority positioning',
      'Marketing automation for lead nurturing',
      'Revenue analytics dashboard for pipeline visibility',
    ],
    accent: '#6b2fff',
  },
  {
    icon: Store,
    industry: 'Small Businesses & Startups',
    tagline: 'Get Online. Get Leads. Grow Without Hiring a Team.',
    desc: 'Small businesses need to compete with limited resources. We build lean, powerful digital systems — a professional website, a smart CRM, and automated follow-ups — that let you compete with larger businesses without the overhead.',
    challenges: [
      'No professional online presence to build trust',
      'Limited budget — every dirham needs to work hard',
      'Owner is doing everything manually',
      'Hard to stand out in a competitive local market',
    ],
    howWeHelp: [
      'Affordable professional website with clear CTAs',
      'Simple CRM to track every lead and conversation',
      'Basic automation for follow-up and reminders',
      'Social media starter kit with branded templates',
      'Google My Business setup and local visibility',
    ],
    accent: '#00f0ff',
  },
];

const SolutionsHero: React.FC = () => (
  <section
    className="pt-[140px] pb-20 relative overflow-hidden"
    style={{ background: '#03020f' }}
  >
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse at 40% 0%, rgba(107,47,255,0.07) 0%, transparent 65%)',
      }}
    />
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.025]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,240,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.6) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />
    <PageHeroVisual variant="solutions" />
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative z-10">
      <p className="caption-text mb-5">SOLUTIONS BY INDUSTRY</p>
      <h1 className="h2-section text-white mb-6 max-w-[720px]">
        Built for <span className="text-cyan">Your Industry</span>,<br />
        Designed for <span className="text-purple" style={{ color: '#6b2fff' }}>Your Growth</span>
      </h1>
      <p className="body-large max-w-[560px]">
        Every industry has unique challenges. We build digital systems tailored to
        how your business actually works — not generic templates.
      </p>
    </div>
  </section>
);

const SolutionCard: React.FC<{ solution: Solution; index: number }> = ({ solution, index }) => {
  const isEven = index % 2 === 0;
  const SolutionIcon = solution.icon;

  return (
    <div
      className="rounded-[20px] p-[1px] mb-6"
      style={{
        background: `linear-gradient(135deg, ${solution.accent}25, rgba(107,47,255,0.1), transparent 60%)`,
      }}
    >
      <div
        className="rounded-[19px] p-8 lg:p-10"
        style={{
          background: 'linear-gradient(135deg, rgba(10,10,26,0.97) 0%, rgba(3,2,15,0.99) 100%)',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: overview */}
          <div className={isEven ? '' : 'lg:order-2'}>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${solution.accent}15, ${solution.accent}05)`,
                  border: `1px solid ${solution.accent}25`,
                }}
              >
                <SolutionIcon className="w-5 h-5" style={{ color: solution.accent }} />
              </div>
              <span className="caption-text text-[10px]" style={{ color: `${solution.accent}90` }}>
                {solution.industry.toUpperCase()}
              </span>
            </div>
            <h3 className="h3-subsection text-white mb-4 leading-snug">{solution.tagline}</h3>
            <p className="text-white/45 text-sm leading-relaxed mb-6">{solution.desc}</p>

            <div>
              <p className="caption-text text-white/30 text-[9px] mb-3">COMMON CHALLENGES</p>
              <ul className="space-y-2">
                {solution.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/40 text-sm">
                    <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: solution.accent }} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: how we help */}
          <div className={isEven ? '' : 'lg:order-1'}>
            <p className="caption-text text-[9px] mb-4" style={{ color: `${solution.accent}70` }}>
              HOW SOVENTRAQ HELPS
            </p>
            <ul className="space-y-3">
              {solution.howWeHelp.map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/[0.03]"
                  style={{ border: '1px solid rgba(255,255,255,0.04)' }}
                >
                  <ArrowRight
                    className="w-4 h-4 mt-0.5 shrink-0"
                    style={{ color: solution.accent }}
                  />
                  <span className="text-white/60 text-sm">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const SolutionsPage: React.FC = () => (
  <PageLayout>
    <SolutionsHero />
    <section className="section-padding bg-[#03020f] pt-0">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        {solutions.map((sol, i) => (
          <SolutionCard key={i} solution={sol} index={i} />
        ))}
      </div>
    </section>
    <CTASection />
  </PageLayout>
);

export default SolutionsPage;
