import Link from 'next/link';

const industries = [
  {
    id: 'fintech',
    name: 'FinTech & Finance',
    stat: '12+ dashboards shipped',
    example: 'FinPilot — Real-time analytics for advisors',
    span: 'lg',
    color: 'from-blue-500 to-blue-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <line x1="12" x2="12" y1="20" y2="10" />
        <line x1="18" x2="18" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="16" />
        <line x1="3" x2="21" y1="20" y2="20" />
      </svg>
    ),
  },
  {
    id: 'healthtech',
    name: 'Healthcare',
    stat: 'WCAG AA by default',
    example: 'Curebook patient portal',
    color: 'from-rose-500 to-pink-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    id: 'travel',
    name: 'Travel & Hospitality',
    stat: '3.4x direct bookings',
    example: 'Travo Bharat · Nimbus Retreats',
    color: 'from-emerald-500 to-teal-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </svg>
    ),
  },
  {
    id: 'ecom',
    name: 'E-Commerce & D2C',
    stat: '+220% online orders',
    example: 'Bindas Cafe · FableFit',
    color: 'from-amber-500 to-orange-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
      </svg>
    ),
  },
  {
    id: 'edtech',
    name: 'EdTech & Media',
    stat: '3x editorial output',
    example: 'Bharat Bulletin CMS rebuild',
    color: 'from-violet-500 to-purple-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    id: 'realestate',
    name: 'Real Estate',
    stat: '+200% qualified leads',
    example: 'Nivaara Realty CRM',
    color: 'from-indigo-500 to-slate-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export function Industries() {
  const [featured, ...rest] = industries;

  return (
    <section className="section bg-surface">
      <div className="container-x">
        <div className="section-heading section-heading-center">
          <span className="eyebrow eyebrow-center mb-5">Industries</span>
          <h2 className="text-balance">Built for the verticals we know best</h2>
          <p className="text-lg text-ink-600 mt-4 max-w-2xl mx-auto">
            Six sectors we have shipped repeatedly. Patterns, edge cases, and integration partners we have already vetted.
          </p>
        </div>

        <div className="bento-grid mt-12 max-w-6xl mx-auto">
          {/* Featured (large) card */}
          <Link
            href="/projects"
            className={`group bento-lg relative overflow-hidden rounded-2xl bg-gradient-to-br ${featured.color} text-white p-7 md:p-9 flex flex-col justify-between transition-transform duration-normal ease-out-soft hover:-translate-y-0.5`}
          >
            <div>
              <span className="inline-flex w-12 h-12 rounded-xl bg-white/15 backdrop-blur-sm items-center justify-center mb-5">
                <span className="text-white w-6 h-6 block">{featured.icon}</span>
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-2">
                {featured.name}
              </h3>
              <p className="text-3xl md:text-4xl font-black tracking-tight mb-3 tabular-nums">
                {featured.stat}
              </p>
              <p className="text-white/85 leading-relaxed max-w-md">
                From real-time analytics dashboards for financial advisors to portfolio tracking apps, we ship FinTech products that pass compliance and convert.
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold mt-6">
              <span>Explore FinTech case studies</span>
              <svg className="w-4 h-4 transition-transform duration-normal ease-out-soft group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Smaller cards */}
          {rest.map((ind) => (
            <Link
              key={ind.id}
              href="/projects"
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${ind.color} text-white p-6 flex flex-col justify-between transition-transform duration-normal ease-out-soft hover:-translate-y-0.5 min-h-[180px]`}
            >
              <span className="inline-flex w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm items-center justify-center">
                <span className="text-white w-5 h-5 block">{ind.icon}</span>
              </span>
              <div>
                <h3 className="text-lg font-bold tracking-tight mb-1">
                  {ind.name}
                </h3>
                <p className="text-xl font-black tabular-nums tracking-tight mb-1">
                  {ind.stat}
                </p>
                <p className="text-xs text-white/85 leading-snug">
                  {ind.example}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-ink-500">
            Plus manufacturing, logistics, professional services and SaaS. <Link href="/services" className="text-brand-700 font-semibold hover:underline">See all services →</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
