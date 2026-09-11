import { awards, publications } from '@/data/press';

function AwardIcon({ name }: { name: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, viewBox: '0 0 24 24', className: 'w-5 h-5' };
  switch (name) {
    case 'trophy':
      return (
        <svg {...common}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
      );
    case 'star':
      return (
        <svg {...common}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
      );
    case 'medal':
      return (
        <svg {...common}><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" /><path d="M11 12 5.12 2.2" /><path d="m13 12 5.88-9.8" /><path d="M8 7h8" /><circle cx="12" cy="17" r="5" /><path d="M12 18v-2h-.5" /></svg>
      );
    case 'crown':
      return (
        <svg {...common}><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" /><path d="M5 21h14" /></svg>
      );
    case 'shield':
      return (
        <svg {...common}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
      );
    case 'gem':
    default:
      return (
        <svg {...common}><path d="M6 3h12l4 6-10 13L2 9z" /><path d="M11 3 8 9l4 13 4-13-3-6" /><path d="M2 9h20" /></svg>
      );
  }
}

export function Awards() {
  return (
    <section
      className="relative bg-dark-warm text-white py-20 md:py-24 overflow-hidden"
      aria-label="Awards and press"
    >
      {/* Subtle accent layer */}
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(at 25% 30%, rgba(126, 193, 255, 0.12) 0px, transparent 55%), radial-gradient(at 75% 75%, rgba(14, 165, 233, 0.10) 0px, transparent 55%)',
        }}
        aria-hidden="true"
      />

      <div className="relative container-x">
        <div className="section-heading section-heading-center">
          <span className="eyebrow eyebrow-center !text-brand-300 mb-5">Recognition</span>
          <h2 className="text-white text-balance">Awards, partnerships, and the press</h2>
          <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
            Independent reviews, platform partnerships and the publications that have featured our work.
          </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-14">
          {awards.map((a) => (
            <li key={a.id} className="award-badge">
              <span className="award-icon">
                <AwardIcon name={a.icon} />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                  {a.org} · {a.year}
                </p>
                <p className="text-sm font-semibold leading-tight mt-0.5">
                  {a.name}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <p className="text-center text-label text-white/60 mb-5">Featured in</p>
          <div className="marquee-mask overflow-hidden">
            <ul className="marquee-track px-6 list-none" aria-hidden="true">
              {[...publications, ...publications, ...publications].map((p, i) => (
                <li
                  key={`${p.id}-${i}`}
                  className="wordmark wordmark-dark"
                >
                  {p.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
