/**
 * PageHeroVisual — lightweight CSS/SVG visual panels for inner page heroes.
 * No Three.js / canvas. Pure CSS animations + inline SVG only.
 * Hidden on mobile (lg:block), pointer-events-none so it never blocks UI.
 */
import React from 'react';

export type PageVisualVariant = 'services' | 'platform' | 'solutions' | 'about' | 'contact';

const C = '#00f0ff';   // cyan
const P = '#6b2fff';   // purple
const BG_CARD = 'linear-gradient(135deg,rgba(255,255,255,0.035) 0%,rgba(255,255,255,0.01) 100%)';
const BORDER = '1px solid rgba(255,255,255,0.07)';

/* ── tiny helpers ── */
const GlowOrb: React.FC<{
  x: string; y: string; size: number; color: string; opacity?: number; delay?: string;
}> = ({ x, y, size, color, opacity = 0.22, delay = '0s' }) => (
  <div
    className="pv-anim"
    style={{
      position: 'absolute', left: x, top: y,
      width: size, height: size,
      borderRadius: '50%',
      background: `radial-gradient(circle, ${color} 0%, transparent 65%)`,
      opacity,
      filter: 'blur(2px)',
      animation: `pv-breathe 5s ease-in-out infinite`,
      animationDelay: delay,
    }}
  />
);

const MiniCard: React.FC<{
  x: string; y: string; w: number; delay?: string; children: React.ReactNode;
}> = ({ x, y, w, delay = '0s', children }) => (
  <div
    className="pv-anim"
    style={{
      position: 'absolute', left: x, top: y, width: w,
      animation: `pv-float 7s ease-in-out infinite`,
      animationDelay: delay,
    }}
  >
    <div style={{
      background: BG_CARD,
      border: BORDER,
      borderRadius: 14,
      backdropFilter: 'blur(10px)',
      padding: '14px 16px',
    }}>
      {children}
    </div>
  </div>
);

/* ════════════════════════════════════════════
   SERVICES variant
   ════════════════════════════════════════════ */
const ServicesVisual: React.FC = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <GlowOrb x="10%" y="15%" size={180} color={C} opacity={0.18} />
    <GlowOrb x="55%" y="55%" size={140} color={P} opacity={0.15} delay="2s" />

    {/* Workflow connector SVG */}
    <svg
      className="pv-anim"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}
      viewBox="0 0 380 340" preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="sg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={C} stopOpacity="0.5" />
          <stop offset="100%" stopColor={P} stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path d="M80,80 C140,80 140,170 200,170 C260,170 260,260 320,260"
        fill="none" stroke="url(#sg1)" strokeWidth="1.5"
        strokeDasharray="8 5"
        style={{ animation: 'pv-dash 3s ease forwards', strokeDashoffset: 300 }} />
      <circle cx="80" cy="80" r="4" fill={C} opacity="0.7" />
      <circle cx="200" cy="170" r="4" fill={P} opacity="0.7">
        <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="320" cy="260" r="4" fill={C} opacity="0.7" />
    </svg>

    {/* Card 1 — Website Dev */}
    <MiniCard x="2%" y="8%" w={190} delay="0s">
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: `${C}18`, border: `1px solid ${C}28`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="2">
            <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, fontFamily: 'Inter', fontWeight: 600 }}>Website Dev</span>
      </div>
      <div style={{ height: 4, borderRadius: 3, background: 'rgba(255,255,255,0.05)', marginBottom: 5 }}>
        <div style={{ width: '78%', height: '100%', borderRadius: 3, background: `linear-gradient(90deg,${C},${C}80)` }} />
      </div>
      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', fontFamily: 'Inter' }}>78% conversion lift</span>
    </MiniCard>

    {/* Card 2 — CRM */}
    <MiniCard x="38%" y="30%" w={185} delay="1.2s">
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: `${P}18`, border: `1px solid ${P}28`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={P} strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, fontFamily: 'Inter', fontWeight: 600 }}>CRM System</span>
      </div>
      <div style={{ display: 'flex', gap: 4 }}>
        {[35, 52, 28, 61, 44].map((h, i) => (
          <div key={i} style={{ flex: 1, height: 24, borderRadius: 3, background: 'rgba(255,255,255,0.04)', display: 'flex', alignItems: 'flex-end' }}>
            <div style={{ width: '100%', height: `${h}%`, background: `${P}60`, borderRadius: 3 }} />
          </div>
        ))}
      </div>
    </MiniCard>

    {/* Card 3 — Automation */}
    <MiniCard x="8%" y="58%" w={178} delay="2.5s">
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: `${C}18`, border: `1px solid ${C}28`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
          </svg>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, fontFamily: 'Inter', fontWeight: 600 }}>Automation</span>
      </div>
      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
        {['Trigger', '→', 'Filter', '→', 'Send'].map((s, i) => (
          <span key={i} style={{ fontSize: 9, fontFamily: 'Inter', fontWeight: 600, letterSpacing: '0.05em', color: s === '→' ? `${C}50` : `rgba(255,255,255,0.45)`, padding: s === '→' ? 0 : '3px 6px', background: s === '→' ? 'transparent' : 'rgba(255,255,255,0.03)', borderRadius: 4, border: s === '→' ? 'none' : '1px solid rgba(255,255,255,0.06)' }}>
            {s}
          </span>
        ))}
      </div>
    </MiniCard>

    {/* Floating dots */}
    {[[68, 20], [25, 45], [72, 70], [45, 80]].map(([x, y], i) => (
      <div key={i} className="pv-anim" style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, width: 3, height: 3, borderRadius: '50%', background: i % 2 === 0 ? C : P, opacity: 0.4, animation: `pv-pulse-dot 3s ease-in-out infinite`, animationDelay: `${i * 0.7}s` }} />
    ))}
  </div>
);

/* ════════════════════════════════════════════
   PLATFORM variant
   ════════════════════════════════════════════ */
const PlatformVisual: React.FC = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <GlowOrb x="20%" y="20%" size={200} color={P} opacity={0.16} />
    <GlowOrb x="60%" y="60%" size={120} color={C} opacity={0.12} delay="1.5s" />

    {/* Node network SVG */}
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}
      viewBox="0 0 380 340" preserveAspectRatio="none">
      <defs>
        <linearGradient id="pg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={P} stopOpacity="0.5" />
          <stop offset="100%" stopColor={C} stopOpacity="0.2" />
        </linearGradient>
      </defs>
      {/* Lines from central dashboard to nodes */}
      <line x1="190" y1="170" x2="60" y2="80"  stroke="url(#pg1)" strokeWidth="1" strokeDasharray="5 4" />
      <line x1="190" y1="170" x2="320" y2="90" stroke="url(#pg1)" strokeWidth="1" strokeDasharray="5 4" />
      <line x1="190" y1="170" x2="60" y2="280" stroke="url(#pg1)" strokeWidth="1" strokeDasharray="5 4" />
      <line x1="190" y1="170" x2="330" y2="270" stroke="url(#pg1)" strokeWidth="1" strokeDasharray="5 4" />
      {/* Node circles */}
      {[[60,80],[320,90],[60,280],[330,270]].map(([cx,cy],i)=>(
        <g key={i}>
          <circle cx={cx} cy={cy} r={12} fill={`${P}15`} stroke={P} strokeWidth="1" strokeOpacity="0.4" />
          <circle cx={cx} cy={cy} r={4} fill={P} opacity="0.7">
            <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2+i*0.5}s`} repeatCount="indefinite" />
          </circle>
        </g>
      ))}
    </svg>

    {/* Main dashboard card */}
    <MiniCard x="18%" y="22%" w={222} delay="0s">
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 10 }}>
        {[C, P, 'rgba(255,255,255,0.2)'].map((c, i) => (
          <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: c, opacity: 0.7 }} />
        ))}
        <span style={{ marginLeft: 4, fontSize: 10, color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter', fontWeight: 600, letterSpacing: '0.08em' }}>LIVE DASHBOARD</span>
      </div>
      {/* Metric rows */}
      {[['Pipeline', '78%', C], ['Leads', '54%', P], ['Closed', '91%', C], ['Churn', '12%', P]].map(([label, val, col], i) => (
        <div key={i} style={{ marginBottom: 7 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
            <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter' }}>{label as string}</span>
            <span style={{ fontSize: 9, color: col as string, fontFamily: 'Inter', fontWeight: 600 }}>{val as string}</span>
          </div>
          <div style={{ height: 3, background: 'rgba(255,255,255,0.04)', borderRadius: 2 }}>
            <div style={{ width: val as string, height: '100%', borderRadius: 2, background: `linear-gradient(90deg,${col}90,${col}40)` }} />
          </div>
        </div>
      ))}
      {/* Mini chart */}
      <div style={{ marginTop: 10, display: 'flex', gap: 3, alignItems: 'flex-end', height: 28 }}>
        {[40,65,50,80,60,90,72].map((h,i) => (
          <div key={i} style={{ flex: 1, height: `${h}%`, background: `linear-gradient(180deg,${P}70,${P}20)`, borderRadius: '2px 2px 0 0' }} />
        ))}
      </div>
    </MiniCard>

    {/* Node labels */}
    {[
      ['2%',  '10%', 'CRM'],
      ['68%', '12%', 'API'],
      ['2%',  '70%', 'Mail'],
      ['70%', '68%', 'Ads'],
    ].map(([x, y, label], i) => (
      <div key={i} className="pv-anim" style={{ position: 'absolute', left: x, top: y, animation: `pv-float-r ${6+i}s ease-in-out infinite`, animationDelay: `${i*0.8}s` }}>
        <div style={{ padding: '4px 9px', borderRadius: 8, background: `${P}12`, border: `1px solid ${P}30`, fontSize: 9, color: P, fontFamily: 'Inter', fontWeight: 700, letterSpacing: '0.1em' }}>{label}</div>
      </div>
    ))}
  </div>
);

/* ════════════════════════════════════════════
   SOLUTIONS variant
   ════════════════════════════════════════════ */
const sectors = [
  { label: 'Real Estate', icon: '🏢', color: C, angle: -72 },
  { label: 'Travel',      icon: '✈',  color: P, angle: 0 },
  { label: 'Clinics',     icon: '🩺', color: C, angle: 72 },
  { label: 'B2B',         icon: '💼', color: P, angle: 144 },
  { label: 'SMB',         icon: '🏪', color: C, angle: 216 },
];

const SolutionsVisual: React.FC = () => {
  const cx = 190, cy = 170, r = 115;
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <GlowOrb x="30%" y="25%" size={160} color={C} opacity={0.14} />
      <GlowOrb x="45%" y="50%" size={120} color={P} opacity={0.14} delay="1.8s" />

      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', overflow: 'visible' }}
        viewBox="0 0 380 340" preserveAspectRatio="none">
        <defs>
          <linearGradient id="sol-g" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={C} stopOpacity="0.4" />
            <stop offset="100%" stopColor={P} stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {/* Center hub */}
        <circle cx={cx} cy={cy} r={28} fill={`${C}10`} stroke={C} strokeWidth="1.5" strokeOpacity="0.35" />
        <circle cx={cx} cy={cy} r={6} fill={C} opacity="0.8">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Spokes */}
        {sectors.map((s, i) => {
          const rad = (s.angle - 90) * Math.PI / 180;
          const nx = cx + Math.cos(rad) * r;
          const ny = cy + Math.sin(rad) * r;
          return (
            <g key={i}>
              <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="url(#sol-g)" strokeWidth="1" strokeDasharray="5 4" strokeOpacity="0.6">
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur={`${1.5+i*0.3}s`} fill="freeze" />
              </line>
              <circle cx={nx} cy={ny} r={18} fill={`${s.color}12`} stroke={s.color} strokeWidth="1" strokeOpacity="0.45" />
              <text x={nx} y={ny+1} textAnchor="middle" dominantBaseline="middle" fill={s.color} fontSize="10" fontFamily="Inter" fontWeight="700" opacity="0.9">
                {s.label.slice(0,2).toUpperCase()}
              </text>
            </g>
          );
        })}
        {/* Hub label */}
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fill={C} fontSize="8" fontFamily="Inter" fontWeight="700" letterSpacing="0.05em" opacity="0.6">HUB</text>
      </svg>

      {/* Sector name labels (CSS positioned) */}
      {sectors.map((s, i) => {
        const rad = (s.angle - 90) * Math.PI / 180;
        const lx = 50 + (Math.cos(rad) * r * 100) / 380;
        const ly = 50 + (Math.sin(rad) * r * 100) / 340;
        return (
          <div key={i} className="pv-anim" style={{
            position: 'absolute',
            left: `${lx + 4}%`, top: `${ly + 6}%`,
            animation: `pv-float ${6+i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}>
            <span style={{ fontSize: 9, color: `${s.color}80`, fontFamily: 'Inter', fontWeight: 600, letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
              {s.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

/* ════════════════════════════════════════════
   ABOUT variant
   ════════════════════════════════════════════ */
const milestones = [
  { year: '2018', label: 'Founded',        color: C },
  { year: '2020', label: 'First 50 Clients', color: P },
  { year: '2022', label: 'Platform Launch', color: C },
  { year: '2024', label: 'Global Scale',   color: P },
];

const AboutVisual: React.FC = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <GlowOrb x="20%" y="30%" size={160} color={P} opacity={0.14} delay="0s" />
    <GlowOrb x="55%" y="55%" size={100} color={C} opacity={0.1} delay="2s" />

    {/* Timeline */}
    <div className="pv-anim" style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 36,
      paddingLeft: 40,
      animation: 'pv-float 9s ease-in-out infinite',
    }}>
      {/* Vertical line */}
      <div style={{
        position: 'absolute', left: 7, top: 8, bottom: 8, width: 1.5,
        background: `linear-gradient(180deg, ${C}50, ${P}40, ${C}20)`,
      }} />

      {milestones.map((m, i) => (
        <div key={i} className="pv-anim" style={{ display: 'flex', alignItems: 'center', gap: 14, animation: `pv-float ${7+i}s ease-in-out infinite`, animationDelay: `${i*0.6}s` }}>
          {/* Dot */}
          <div style={{
            position: 'absolute', left: 0, width: 16, height: 16,
            borderRadius: '50%', background: `${m.color}18`,
            border: `1.5px solid ${m.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: m.color }}>
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite" />
            </div>
          </div>
          {/* Card */}
          <div style={{
            background: BG_CARD, border: BORDER, borderRadius: 12,
            backdropFilter: 'blur(10px)', padding: '10px 16px', minWidth: 160,
          }}>
            <div style={{ fontSize: 9, color: m.color, fontFamily: 'Inter', fontWeight: 700, letterSpacing: '0.1em', marginBottom: 3 }}>{m.year}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontFamily: 'Inter', fontWeight: 500 }}>{m.label}</div>
          </div>
        </div>
      ))}
    </div>

    {/* Floating badge */}
    <div className="pv-anim" style={{
      position: 'absolute', right: '5%', top: '15%',
      padding: '8px 14px', borderRadius: 24,
      background: `linear-gradient(135deg,${C}18,${P}10)`,
      border: `1px solid ${C}30`,
      animation: 'pv-float-r 6s ease-in-out infinite',
    }}>
      <span style={{ fontSize: 10, color: C, fontFamily: 'Inter', fontWeight: 700, letterSpacing: '0.06em' }}>100+ PROJECTS</span>
    </div>
  </div>
);

/* ════════════════════════════════════════════
   CONTACT variant
   ════════════════════════════════════════════ */
const messages = [
  { text: 'Hi! I\'d like to discuss a CRM project.', side: 'left',  color: C, delay: '0s' },
  { text: 'We\'ll respond within 24 hours! ✓',        side: 'right', color: P, delay: '0.8s' },
  { text: 'Can we schedule a free consultation?',     side: 'left',  color: C, delay: '1.6s' },
];

const ContactVisual: React.FC = () => (
  <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <GlowOrb x="15%" y="20%" size={150} color={C} opacity={0.16} />
    <GlowOrb x="50%" y="60%" size={110} color={P} opacity={0.12} delay="2s" />

    {/* Chat bubbles */}
    <div className="pv-anim" style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 240, animation: 'pv-float 8s ease-in-out infinite' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
        <div style={{ width: 32, height: 32, borderRadius: '50%', background: `linear-gradient(135deg,${C}30,${P}20)`, border: `1.5px solid ${C}40`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.7)', fontFamily: 'Inter', fontWeight: 600 }}>Soventraq Support</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <div className="pv-anim" style={{ width: 6, height: 6, borderRadius: '50%', background: '#00e676', animation: 'pv-blink 2s ease-in-out infinite' }} />
            <span style={{ fontSize: 9, color: '#00e676', fontFamily: 'Inter' }}>Online</span>
          </div>
        </div>
      </div>

      {messages.map((m, i) => (
        <div key={i} className="pv-anim" style={{
          display: 'flex',
          justifyContent: m.side === 'right' ? 'flex-end' : 'flex-start',
          animation: `pv-float ${6+i}s ease-in-out infinite`,
          animationDelay: m.delay,
        }}>
          <div style={{
            maxWidth: '82%', padding: '9px 12px', borderRadius: m.side === 'right' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
            background: m.side === 'right' ? `linear-gradient(135deg,${P}35,${P}20)` : 'rgba(255,255,255,0.04)',
            border: `1px solid ${m.side === 'right' ? P+'40' : 'rgba(255,255,255,0.07)'}`,
            fontSize: 11, color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter', lineHeight: 1.5,
            backdropFilter: 'blur(10px)',
          }}>
            {m.text}
          </div>
        </div>
      ))}

      {/* Typing indicator */}
      <div style={{ display: 'flex', gap: 4, padding: '8px 12px 8px 12px', borderRadius: 14, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', width: 'fit-content' }}>
        {[0, 0.3, 0.6].map((d, i) => (
          <div key={i} className="pv-anim" style={{ width: 5, height: 5, borderRadius: '50%', background: C, opacity: 0.5, animation: `pv-pulse-dot 1.2s ease-in-out infinite`, animationDelay: `${d}s` }} />
        ))}
      </div>
    </div>

    {/* Email card floating */}
    <div className="pv-anim" style={{
      position: 'absolute', right: '3%', top: '12%',
      background: BG_CARD, border: BORDER, borderRadius: 12,
      backdropFilter: 'blur(10px)', padding: '10px 14px',
      animation: 'pv-float-r 7s ease-in-out infinite',
      display: 'flex', alignItems: 'center', gap: 8,
    }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', fontFamily: 'Inter' }}>sonevtraq@gmail.com</span>
    </div>

    {/* Notification badge */}
    <div className="pv-anim" style={{
      position: 'absolute', right: '8%', bottom: '20%',
      padding: '6px 12px', borderRadius: 20,
      background: `${C}15`, border: `1px solid ${C}35`,
      animation: 'pv-float 5s ease-in-out infinite',
      animationDelay: '1s',
      display: 'flex', alignItems: 'center', gap: 6,
    }}>
      <div className="pv-anim" style={{ width: 6, height: 6, borderRadius: '50%', background: C, animation: 'pv-blink 1.5s ease-in-out infinite' }} />
      <span style={{ fontSize: 10, color: C, fontFamily: 'Inter', fontWeight: 600 }}>Reply in &lt;24h</span>
    </div>
  </div>
);

/* ════════════════════════════════════════════
   Main export
   ════════════════════════════════════════════ */
const VISUALS: Record<PageVisualVariant, React.FC> = {
  services:  ServicesVisual,
  platform:  PlatformVisual,
  solutions: SolutionsVisual,
  about:     AboutVisual,
  contact:   ContactVisual,
};

const PageHeroVisual: React.FC<{ variant: PageVisualVariant }> = ({ variant }) => {
  const Visual = VISUALS[variant];
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0, right: 0, bottom: 0,
        width: '48%',
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
      className="hidden lg:block"
    >
      {/* Right-side fade mask so visual doesn't bleed to edge */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, rgba(3,2,15,0.7) 0%, rgba(3,2,15,0.15) 40%, transparent 70%)',
        zIndex: 2,
      }} />
      <Visual />
    </div>
  );
};

export default PageHeroVisual;
