'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const trustPillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
      </svg>
    ),
    title: 'Fast Delivery',
    value: '2-6 weeks',
    description: 'From kickoff to launch. No endless delays.',
    accent: 'bg-blue-50 text-blue-700',
    valueColor: 'text-blue-700',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    ),
    title: 'Quality First',
    value: '95%',
    description: 'Client retention rate. They come back.',
    accent: 'bg-emerald-50 text-emerald-700',
    valueColor: 'text-emerald-700',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <line x1="12" x2="12" y1="2" y2="22" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Transparent',
    value: 'Fixed',
    description: 'Pricing you see upfront. No surprises.',
    accent: 'bg-brand-50 text-brand-700',
    valueColor: 'text-brand-700',
  },
];

export function TrustBuilder() {
  return (
    <section className="section bg-surface">
      <div className="container-x">
        <div className="section-heading section-heading-center">
          <span className="eyebrow eyebrow-center mb-5">Why Us</span>
          <h2 className="text-balance">Why Choose Kashavi</h2>
          <p className="text-lg text-ink-600 mt-4 max-w-2xl mx-auto">
            We don&apos;t just build products. We build partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {trustPillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white rounded-2xl border border-line p-8 transition-all duration-normal ease-out-soft hover:border-line-strong hover:shadow-lift hover:-translate-y-0.5"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${pillar.accent} mb-6 transition-transform duration-normal ease-out-soft group-hover:scale-110`}>
                {pillar.icon}
              </div>

              <h3 className="text-lg font-semibold text-ink-900 mb-2 tracking-tight">
                {pillar.title}
              </h3>

              <div className={`text-4xl font-bold tracking-tight ${pillar.valueColor} mb-4 tabular-nums`}>
                {pillar.value}
              </div>

              <p className="text-ink-600 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/pricing" className="btn btn-dark">
            View Pricing
            <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
