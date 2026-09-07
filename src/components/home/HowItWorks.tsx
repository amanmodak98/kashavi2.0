'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We start with a 30-minute call to understand your business, goals, and challenges. No sales pitch, just questions.',
    duration: '30 min'
  },
  {
    number: '02',
    title: 'Proposal & Planning',
    description: "You'll get a detailed proposal with timeline, pricing, and deliverables. If you approve, we kick off.",
    duration: '1-2 days'
  },
  {
    number: '03',
    title: 'Design & Build',
    description: "We design and develop in parallel. You'll see progress daily and can give feedback throughout.",
    duration: '2-6 weeks'
  },
  {
    number: '04',
    title: 'Launch & Support',
    description: 'We test, polish, and launch. Then provide 30-60 days support to ensure everything runs smoothly.',
    duration: '1 week + support'
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-stone-400" />
            <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
              Our Process
            </span>
            <div className="w-8 h-[1px] bg-stone-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            How we work together
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Simple, transparent, and collaborative. Here's what to expect.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex gap-6 items-start p-6 bg-gradient-to-r from-orange-50 to-white rounded-2xl border-2 border-stone-200 hover:border-orange-500 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center font-black text-xl">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="text-2xl font-bold text-stone-900">{step.title}</h3>
                  <span className="text-sm font-semibold text-orange-500">{step.duration}</span>
                </div>
                <p className="text-stone-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-stone-600 mb-6">
            <strong className="text-stone-900">Timeline:</strong> Most projects launch in 2-6 weeks
          </p>
        </div>
      </div>
    </section>
  );
}
