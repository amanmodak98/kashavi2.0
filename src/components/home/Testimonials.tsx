import { testimonials } from '@/data/testimonials';

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          fill={i < rating ? '#f59e0b' : '#e7e5e4'}
          className="w-4 h-4"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function accentGradient(initials: string) {
  // Deterministic gradient per initials pair
  const palettes: [string, string][] = [
    ['from-brand-500', 'to-brand-700'],
    ['from-emerald-500', 'to-teal-600'],
    ['from-violet-500', 'to-purple-600'],
    ['from-amber-500', 'to-orange-500'],
    ['from-rose-500', 'to-pink-600'],
    ['from-sky-500', 'to-cyan-600'],
  ];
  const idx = initials.charCodeAt(0) % palettes.length;
  return palettes[idx];
}

export function Testimonials() {
  return (
    <section className="section bg-warm-soft">
      <div className="container-x">
        <div className="section-heading section-heading-center">
          <span className="eyebrow eyebrow-center mb-5">Client Stories</span>
          <h2 className="text-balance">Trusted by teams shipping every day</h2>
          <p className="text-lg text-ink-600 mt-4 max-w-2xl mx-auto">
            Real outcomes, named partners, no marketing fluff. Average rating 4.9/5 across 50+ engagements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t) => {
            const [a, b] = accentGradient(t.initials);
            return (
              <article key={t.id} className="testimonial-card">
                <div className="flex items-start justify-between gap-3">
                  <StarRow rating={t.rating} />
                  <span className="badge">{t.industry}</span>
                </div>

                <blockquote className="text-ink-700">{t.quote}</blockquote>

                <div className="mt-auto pt-4 border-t border-line flex items-center gap-3">
                  <span className={`founder-initial founder-initial-sm bg-gradient-to-br ${a} ${b}`}>
                    {t.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-ink-900 text-sm truncate">
                      {t.name}
                    </p>
                    <p className="text-xs text-ink-500 truncate">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
