import React from 'react';

const TrustedBySection: React.FC = () => {
  const clients = [
    { name: 'TECHCORP', abbr: 'TC' },
    { name: 'NEXGEN', abbr: 'NX' },
    { name: 'GLOBALFIN', abbr: 'GF' },
    { name: 'MEDIVATE', abbr: 'MV' },
    { name: 'BUILDIFY', abbr: 'BF' },
    { name: 'AURASYS', abbr: 'AS' },
  ];

  return (
    <section className="bg-[#03020f] py-14 border-b border-white/[0.04]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <p className="caption-text text-white/25 text-center mb-10 tracking-[0.2em]">
          TRUSTED BY INDUSTRY LEADERS
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 lg:gap-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center gap-2.5 text-white/15 hover:text-white/30 transition-colors duration-400 group cursor-default"
            >
              <div className="w-7 h-7 rounded-md bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-cyan/20 transition-colors">
                <span className="font-body font-bold text-[9px] tracking-wider">{client.abbr}</span>
              </div>
              <span className="font-body font-semibold text-[14px] tracking-[0.12em]">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
