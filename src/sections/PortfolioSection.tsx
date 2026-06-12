import React from 'react';
import StaggeredGrid from '../components/StaggeredGrid';
import GlassCard from '../components/GlassCard';
import { ArrowUpRight } from 'lucide-react';

const PortfolioSection: React.FC = () => {
  const projects = [
    {
      image: '/images/case-study-ecommerce.jpg',
      category: 'E-Commerce Platform',
      name: 'RetailRevamp',
      result: '340% increase in online sales within 6 months',
      tags: ['Platform', 'CRM', 'Automation'],
    },
    {
      image: '/images/case-study-saas.jpg',
      category: 'SaaS Dashboard',
      name: 'MetricFlow',
      result: '10,000+ new signups in 90 days after launch',
      tags: ['SaaS', 'Analytics', 'Growth'],
    },
    {
      image: '/images/case-study-leads.jpg',
      category: 'Lead Generation System',
      name: 'LeadForge',
      result: '50,000 qualified leads generated monthly at $2.40 CPL',
      tags: ['Funnels', 'Ads', 'CRM'],
    },
    {
      image: '/images/case-study-crm.jpg',
      category: 'CRM Integration',
      name: 'SyncHub',
      result: '60% reduction in manual data entry, $180K annual savings',
      tags: ['CRM', 'Integration', 'Automation'],
    },
  ];

  return (
    <section className="section-padding bg-surface-dark relative">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-20">
          <p className="caption-text mb-6">CASE STUDIES</p>
          <h2 className="h2-section text-white max-w-[700px] mx-auto">
            Results That <span className="text-cyan">Speak</span>
          </h2>
          <p className="body-large mt-6 max-w-[520px] mx-auto">
            Real outcomes from real partnerships. Every number represents a business transformation we helped engineer.
          </p>
        </div>

        <StaggeredGrid columns="grid-cols-1 md:grid-cols-2" gap="gap-8">
          {projects.map((project, i) => (
            <div key={i} className="staggered-item">
              <GlassCard className="overflow-hidden p-0 group" hover>
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/30 to-transparent" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-7">
                  <span className="caption-text text-cyan/70 text-[10px]">{project.category}</span>
                  <h4 className="h4-card text-white mt-2 mb-3">{project.name}</h4>
                  <p className="text-white/55 text-sm mb-4">{project.result}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[11px] font-medium text-white/35 bg-white/[0.04] border border-white/[0.06] px-3 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </StaggeredGrid>
      </div>
    </section>
  );
};

export default PortfolioSection;
