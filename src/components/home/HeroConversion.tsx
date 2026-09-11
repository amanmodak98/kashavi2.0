'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const STATS = [
  { value: '+340%', label: 'Revenue',     icon: 'M13 2 3 14h9l-1 8 10-12h-9z' },
  { value: '50+',   label: 'Projects',    icon: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z' },
  { value: '98%',   label: 'Retention',   icon: 'M20 6 9 17l-5-5' },
  { value: '30+',   label: 'Specialists', icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' },
  { value: '<2hr', label: 'Reply',       icon: 'M12 8V4l4 4-4 4 M12 16v4l-4-4 4-4' },
  { value: '2-6wk', label: 'Delivery',    icon: 'M21 12a9 9 0 1 1-6.219-8.56' },
];

const MEDIA_PARTNERS = ['YourStory', 'Inc42', 'Economic Times', 'TechCrunch', 'Forbes India'];

const SERVICES = [
  {
    href: '/services/web-development',
    label: 'Web Dev',
    color: 'text-blue-700 bg-blue-50',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    href: '/services/mobile-apps',
    label: 'Mobile Apps',
    color: 'text-violet-700 bg-violet-50',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
        <rect width="14" height="20" x="5" y="2" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    href: '/services/ecommerce',
    label: 'E-Commerce',
    color: 'text-emerald-700 bg-emerald-50',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
      </svg>
    ),
  },
  {
    href: '/services/ai-automation',
    label: 'AI & Automation',
    color: 'text-brand-700 bg-brand-50',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    ),
  },
];

const FLOAT_TAGS = [
  { label: 'Next.js',      color: '#1e88e5', pos: 'lg:top-4 lg:left-[-2rem] top-2 left-2' },
  { label: 'AI Chatbots',  color: '#10b981', pos: 'lg:top-1/3 lg:right-[-2rem] right-2 top-1/3', delay: 'is-delayed' },
  { label: 'Shopify Plus', color: '#8b5cf6', pos: 'lg:bottom-12 lg:left-[-1rem] bottom-4 left-4', delay: 'is-delayed-2' },
];

export function HeroConversion() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  // Reveal on view via IntersectionObserver (CSS animations do the rest)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-in');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-in');
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Hero scroll progress bar
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      if (total <= 0) {
        setProgress(rect.bottom <= window.innerHeight ? 100 : 0);
        return;
      }
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(Math.round((scrolled / total) * 100));
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-warm"
      aria-labelledby="hero-headline"
    >
      {/* Decorative background layers */}
      <div className="absolute inset-0 bg-grid opacity-[0.4]" aria-hidden="true" />
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-brand-200/40 rounded-full blur-3xl animate-drift" aria-hidden="true" />
      <div className="absolute top-1/3 -right-40 w-[36rem] h-[36rem] bg-gradient-to-br from-brand-600/15 to-brand-800/10 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-40 right-1/4 w-[28rem] h-[28rem] bg-brand-300/30 rounded-full blur-3xl animate-drift" style={{ animationDelay: '5s' }} aria-hidden="true" />

      <div className="relative container-x pt-12 pb-24 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* ============ LEFT COLUMN ============ */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Eyebrow pill */}
            <div className="reveal" style={{ ['--delay' as string]: '0ms' }}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-brand-200 text-xs font-semibold uppercase tracking-wider text-brand-700">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-soft" aria-hidden="true" />
                AI-Powered Digital Agency
              </span>
            </div>

            {/* H1 with word-rotate */}
            <h1
              id="hero-headline"
              className="reveal-up mt-6 text-balance text-ink-900"
              style={{ ['--delay' as string]: '80ms' }}
            >
              We helped 50+ businesses{' '}
              <span className="hl-draw">grow</span>
              <span className="word-rotate" aria-hidden="true">
                <span className="rot-slot">launch</span>
                <span className="rot-slot-anim">build</span>
                <span className="rot-slot-anim">launch</span>
                <span className="rot-slot-anim">scale</span>
              </span>
              <span className="sr-only">grow with</span>{' '}
              with <span className="text-brand-600">digital products</span>
            </h1>

            {/* Sub-headline */}
            <p
              className="reveal-up mt-6 text-lg md:text-xl text-ink-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              style={{ ['--delay' as string]: '160ms' }}
            >
              Results-focused development. Fast delivery. Transparent pricing.
            </p>

            {/* Service categories strip */}
            <div
              className="reveal-up mt-6 flex flex-wrap gap-2 justify-center lg:justify-start"
              style={{ ['--delay' as string]: '210ms' }}
            >
              {SERVICES.map((svc) => (
                <Link key={svc.href} href={svc.href} className="svc-chip">
                  <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${svc.color}`}>
                    {svc.icon}
                  </span>
                  {svc.label}
                </Link>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="reveal-up mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              style={{ ['--delay' as string]: '280ms' }}
            >
              <Link href="/contact" className="btn btn-primary btn-lg">
                Start Your Project
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-3 py-2 text-base font-semibold text-ink-700 hover:text-brand-700 transition-colors group"
              >
                View Our Work
                <svg
                  className="w-4 h-4 transition-transform duration-normal ease-out-soft group-hover:translate-x-1"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Media partner strip */}
            <div
              className="reveal-up media-partner-row mt-8 justify-center lg:justify-start"
              style={{ ['--delay' as string]: '320ms' }}
            >
              <span className="label">Featured in</span>
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 list-none" aria-label="Media coverage">
                {MEDIA_PARTNERS.map((m) => (
                  <li key={m} className="text-sm font-semibold text-ink-500">{m}</li>
                ))}
              </ul>
            </div>

            {/* Stats row */}
            <dl
              className="reveal-up mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3"
              style={{ ['--delay' as string]: '360ms' }}
            >
              {STATS.map((stat) => (
                <div key={stat.label} className="stat-tile">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </dl>
          </div>

          {/* ============ RIGHT COLUMN ============ */}
          <div
            className="lg:col-span-5 reveal-up"
            style={{ ['--delay' as string]: '300ms' }}
          >
            <div className="relative max-w-md mx-auto lg:max-w-none lg:ml-auto">
              {/* Soft halo */}
              <div
                className="absolute -inset-8 bg-gradient-to-br from-brand-500/20 via-brand-300/15 to-transparent rounded-[2rem] blur-2xl"
                aria-hidden="true"
              />

              {/* Floating tags — decorative, hidden under lg */}
              {FLOAT_TAGS.map((tag, i) => (
                <div
                  key={tag.label}
                  className={`float-tag ${tag.delay ?? ''} ${tag.pos} hidden lg:inline-flex`}
                  aria-hidden="true"
                  style={{ zIndex: 2 }}
                >
                  <span className="dot" style={{ backgroundColor: tag.color }} />
                  {tag.label}
                </div>
              ))}

              {/* Result card */}
              <article className="result-card relative bg-white rounded-2xl border border-line shadow-card overflow-hidden">
                <header className="flex items-center justify-between px-5 pt-5 pb-3 border-b border-line">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white shadow-brand-soft flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-ink-500 uppercase tracking-wider">Live · Latest build</p>
                      <h2 className="font-semibold text-ink-900 truncate">Travo Bharat</h2>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse-soft" aria-hidden="true" />
                    Live
                  </span>
                </header>

                <div className="grid grid-cols-3 divide-x divide-line">
                  {[
                    { label: 'Revenue', value: '+340%' },
                    { label: 'Users', value: '2.8M/mo' },
                    { label: 'Saved', value: '₹45L' },
                  ].map((stat) => (
                    <div key={stat.label} className="px-4 py-5 text-center">
                      <div className="text-xl md:text-2xl font-bold text-ink-900 stat-pulse tracking-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs text-ink-500 mt-0.5 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="px-5 pb-5">
                  <div className="flex items-center justify-between text-xs text-ink-500 mb-2">
                    <span className="font-medium">Project milestone</span>
                    <span className="stat-pulse font-semibold text-brand-700">88%</span>
                  </div>
                  <div className="relative h-2 rounded-full bg-ink-100 overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-500 to-brand-700 rounded-full transition-[width] duration-1000 ease-out-soft"
                      style={{ width: '0%' }}
                      ref={(node) => {
                        if (node) {
                          const section = sectionRef.current;
                          if (!section) return;
                          const trigger = () => {
                            if (section.classList.contains('is-in')) node.style.width = '88%';
                          };
                          if (section.classList.contains('is-in')) trigger();
                          else {
                            const obs = new MutationObserver(trigger);
                            obs.observe(section, { attributes: true, attributeFilter: ['class'] });
                            return () => obs.disconnect();
                          }
                        }
                      }}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 px-5 py-3 bg-ink-100/50 border-t border-line">
                  <div className="flex -space-x-1.5">
                    {['bg-brand-500', 'bg-emerald-500', 'bg-amber-500'].map((c, i) => (
                      <span key={i} aria-hidden="true" className={`w-6 h-6 rounded-full ${c} border-2 border-white`} />
                    ))}
                  </div>
                  <p className="text-xs text-ink-600">
                    <span className="font-semibold text-ink-900">3 specialists</span> working on this build
                  </p>
                  <span className="ml-auto text-xs text-brand-700 font-semibold">50+ shipped</span>
                </div>
              </article>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="reveal mt-16 hidden lg:flex justify-center" style={{ ['--delay' as string]: '500ms' }}>
          <div className="flex flex-col items-center gap-2 text-ink-400">
            <span className="text-label">See our results</span>
            <svg className="w-4 h-4 animate-float-soft" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll progress */}
      <div
        className="scroll-progress"
        style={{ ['--progress' as string]: `${progress}%` } as React.CSSProperties}
        aria-hidden="true"
      />
    </section>
  );
}
