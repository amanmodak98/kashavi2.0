import Link from 'next/link';

const models = [
  {
    id: 'dedicated',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Dedicated Team',
    best: 'For ongoing product development',
    includes: ['Embedded engineers (2–6 people)', 'Monthly billing', 'Direct Slack with your team', 'Weekly demos and roadmap reviews'],
    pricing: 'From $8K/mo',
    popular: false,
  },
  {
    id: 'fixed',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" x2="15" y1="13" y2="13" />
        <line x1="9" x2="15" y1="17" y2="17" />
      </svg>
    ),
    title: 'Fixed-Scope Project',
    best: 'For MVPs and one-off builds',
    includes: ['Defined deliverable + timeline', '50% upfront, 50% on launch', 'Source code and IP assigned to you', '30–90 day support included'],
    pricing: 'From $2.5K',
    popular: true,
  },
  {
    id: 'retainer',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    ),
    title: 'AI-Augmented Retainer',
    best: 'For continuous iteration at scale',
    includes: ['Hours bank (rolls over monthly)', 'AI productivity passed to you', 'Mixed design + dev + AI capacity', 'Best cost-per-sprint in the market'],
    pricing: 'From $3K/mo',
    popular: false,
  },
];

export function EngagementModels() {
  return (
    <section className="section bg-warm-soft">
      <div className="container-x">
        <div className="section-heading section-heading-center">
          <span className="eyebrow eyebrow-center mb-5">How We Engage</span>
          <h2 className="text-balance">Three ways to work with us</h2>
          <p className="text-lg text-ink-600 mt-4 max-w-2xl mx-auto">
            Pick the model that fits your stage. Mix them as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {models.map((m) => (
            <article
              key={m.id}
              className="engage-card"
              data-popular={m.popular ? 'true' : 'false'}
            >
              {m.popular && (
                <span className="badge self-start">Most Popular</span>
              )}
              <span className="inline-flex w-12 h-12 rounded-xl bg-brand-50 text-brand-600 items-center justify-center">
                {m.icon}
              </span>
              <h3 className="text-xl font-semibold text-ink-900 tracking-tight">
                {m.title}
              </h3>
              <p className="text-sm text-brand-700 font-medium">{m.best}</p>

              <ul className="space-y-2 mt-1">
                {m.includes.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-sm text-ink-700">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-line">
                <p className="text-xs text-ink-500 uppercase tracking-wider font-semibold mb-1">
                  Starts at
                </p>
                <p className="text-2xl font-bold text-ink-900 tabular-nums tracking-tight">
                  {m.pricing}
                </p>
              </div>

              <Link
                href="/contact"
                className={`btn btn-sm w-full mt-2 ${m.popular ? 'btn-primary' : 'btn-secondary'}`}
              >
                Discuss this model
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
