'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We start with a 30-minute call to understand your business, goals, and challenges. No sales pitch, just questions.',
    duration: '30 min',
  },
  {
    number: '02',
    title: 'Proposal & Planning',
    description: "You'll get a detailed proposal with timeline, pricing, and deliverables. If you approve, we kick off.",
    duration: '1-2 days',
  },
  {
    number: '03',
    title: 'Design & Build',
    description: "We design and develop in parallel. You'll see progress daily and can give feedback throughout.",
    duration: '2-6 weeks',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'We test, polish, and launch. Then provide 30-60 days support to ensure everything runs smoothly.',
    duration: '1 week + support',
  },
];

export function HowItWorks() {
  return (
    <section className="section bg-warm-soft">
      <div className="container-narrow">
        <div className="section-heading section-heading-center">
          <span className="eyebrow eyebrow-center mb-5">Our Process</span>
          <h2 className="text-balance">How we work together</h2>
          <p className="text-lg text-ink-600 mt-4 max-w-2xl mx-auto">
            Simple, transparent, and collaborative. Here&apos;s what to expect.
          </p>
        </div>

        <ol className="space-y-4">
          {steps.map((step, index) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex gap-5 md:gap-7 items-start p-6 md:p-7 bg-white rounded-2xl border border-line transition-all duration-normal ease-out-soft hover:border-line-strong hover:shadow-soft"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold text-base md:text-lg border border-brand-100 transition-colors duration-normal ease-out-soft group-hover:bg-brand-600 group-hover:text-white group-hover:border-brand-600">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="text-lg md:text-xl font-semibold text-ink-900 tracking-tight">
                    {step.title}
                  </h3>
                  <span className="text-label text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full">
                    {step.duration}
                  </span>
                </div>
                <p className="text-ink-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <p className="text-ink-600">
            <strong className="text-ink-900 font-semibold">Timeline:</strong> Most projects launch in 2-6 weeks
          </p>
        </div>
      </div>
    </section>
  );
}
