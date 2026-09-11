'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  pricingTiers,
  retainers,
  addOns,
  faqs,
  comparisonFeatures,
} from './pricingData';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

const CheckIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const MinusIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 12h12" />
  </svg>
);

export default function PricingPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-canvas">
        {/* Hero */}
        <section className="relative overflow-hidden bg-warm">
          <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
          <div
            className="absolute -top-40 -left-32 w-[28rem] h-[28rem] bg-brand-200/40 rounded-full blur-3xl animate-drift"
            aria-hidden="true"
          />

          <div className="relative container-x pt-16 pb-16 md:pt-20 md:pb-20 text-center">
            <div className="max-w-3xl mx-auto">
              <span className="eyebrow eyebrow-center mb-6">Pricing</span>
              <h1 className="text-balance mb-5">
                Transparent pricing,<br />no surprises.
              </h1>
              <p className="text-lg md:text-xl text-ink-600 leading-relaxed max-w-2xl mx-auto mb-6">
                Choose a package that fits your needs, or let&apos;s build something custom.
                No hidden fees, no complicated contracts.
              </p>
              <p className="text-sm text-ink-600 font-medium inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-line">
                <span aria-hidden="true">💼</span>
                Join 50+ businesses who trust us with their digital presence
              </p>
            </div>
          </div>
        </section>

        {/* Tiers */}
        <section className="section bg-surface">
          <div className="container-x">
            <div className="grid md:grid-cols-3 gap-6 items-stretch">
              {pricingTiers.map((tier, index) => (
                <motion.article
                  key={tier.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative bg-white rounded-2xl border p-7 md:p-8 flex flex-col transition-all duration-normal ease-out-soft hover:shadow-lift ${
                    tier.popular
                      ? 'border-brand-500 shadow-brand-soft md:-translate-y-3'
                      : 'border-line hover:border-line-strong'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-block px-3.5 py-1.5 bg-brand-600 text-white text-xs font-semibold tracking-wider rounded-full uppercase">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-ink-900 mb-2 tracking-tight">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-ink-600 mb-5">{tier.tagline}</p>

                    <div className="mb-1">
                      <span className="text-3xl md:text-4xl font-bold text-ink-900 tracking-tight tabular-nums">
                        {tier.priceRange}
                      </span>
                    </div>
                    <p className="text-sm text-ink-500">{tier.period}</p>
                  </div>

                  <p className="text-ink-600 mb-6 leading-relaxed text-sm">{tier.description}</p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span className="text-emerald-500 flex-shrink-0 mt-0.5">
                          <CheckIcon className="w-4 h-4" />
                        </span>
                        <span className="text-sm text-ink-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`btn w-full ${tier.popular ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    {tier.cta}
                    <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>

                  <p className="text-xs text-ink-500 text-center mt-4">
                    <span aria-hidden="true">⏱️</span> Timeline: {tier.timeline}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="section bg-warm-soft">
          <div className="container-narrow">
            <div className="section-heading section-heading-center">
              <span className="eyebrow eyebrow-center mb-5">Compare</span>
              <h2 className="text-balance">Compare packages</h2>
              <p className="text-lg text-ink-600 mt-4">
                See what&apos;s included in each tier
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-line overflow-hidden">
              {/* Header */}
              <div className="hidden sm:grid grid-cols-4 gap-4 px-6 py-4 bg-ink-100 border-b border-line text-sm font-semibold text-ink-700">
                <div>Feature</div>
                <div className="text-center">Starter</div>
                <div className="text-center">Growth</div>
                <div className="text-center">Enterprise</div>
              </div>

              <div className="divide-y divide-line">
                {comparisonFeatures.map((category) => (
                  <div key={category.category}>
                    <div className="px-6 py-3 bg-brand-50 border-y border-line">
                      <h3 className="font-semibold text-brand-800 text-sm tracking-wide uppercase">
                        {category.category}
                      </h3>
                    </div>
                    {category.features.map((feature, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-4 px-6 py-3.5 hover:bg-ink-100/50 transition-colors text-sm"
                      >
                        <div className="font-medium text-ink-700">{feature.name}</div>
                        <div className="text-center">
                          {typeof feature.starter === 'boolean' ? (
                            feature.starter ? (
                              <span className="inline-flex w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 items-center justify-center">
                                <CheckIcon className="w-3.5 h-3.5" />
                              </span>
                            ) : (
                              <span className="inline-flex w-6 h-6 rounded-full bg-ink-100 text-ink-400 items-center justify-center">
                                <MinusIcon className="w-3.5 h-3.5" />
                              </span>
                            )
                          ) : (
                            <span className="text-ink-700">{feature.starter}</span>
                          )}
                        </div>
                        <div className="text-center">
                          {typeof feature.growth === 'boolean' ? (
                            feature.growth ? (
                              <span className="inline-flex w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 items-center justify-center">
                                <CheckIcon className="w-3.5 h-3.5" />
                              </span>
                            ) : (
                              <span className="inline-flex w-6 h-6 rounded-full bg-ink-100 text-ink-400 items-center justify-center">
                                <MinusIcon className="w-3.5 h-3.5" />
                              </span>
                            )
                          ) : (
                            <span className="text-ink-700 font-medium">{feature.growth}</span>
                          )}
                        </div>
                        <div className="text-center">
                          {typeof feature.enterprise === 'boolean' ? (
                            feature.enterprise ? (
                              <span className="inline-flex w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 items-center justify-center">
                                <CheckIcon className="w-3.5 h-3.5" />
                              </span>
                            ) : (
                              <span className="inline-flex w-6 h-6 rounded-full bg-ink-100 text-ink-400 items-center justify-center">
                                <MinusIcon className="w-3.5 h-3.5" />
                              </span>
                            )
                          ) : (
                            <span className="text-ink-700">{feature.enterprise}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Retainers */}
        <section className="section bg-surface">
          <div className="container-x">
            <div className="section-heading section-heading-center">
              <span className="eyebrow eyebrow-center mb-5">Retainers</span>
              <h2 className="text-balance">Ongoing support & maintenance</h2>
              <p className="text-lg text-ink-600 mt-4">
                Keep your site running smoothly with monthly retainers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {retainers.map((retainer) => (
                <motion.div
                  key={retainer.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`bg-white rounded-2xl border p-7 transition-all duration-normal ease-out-soft hover:shadow-soft ${
                    retainer.popular
                      ? 'border-brand-500 shadow-brand-soft'
                      : 'border-line hover:border-line-strong'
                  }`}
                >
                  {retainer.popular && (
                    <span className="badge mb-4">Popular Choice</span>
                  )}
                  <h3 className="text-lg font-semibold text-ink-900 mb-3 tracking-tight">
                    {retainer.name}
                  </h3>
                  <div className="mb-4 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-ink-900 tracking-tight tabular-nums">
                      {retainer.price}
                    </span>
                    <span className="text-ink-500 text-sm">{retainer.period}</span>
                  </div>
                  <p className="text-ink-600 mb-6 text-sm leading-relaxed">{retainer.description}</p>
                  <ul className="space-y-2.5">
                    {retainer.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span className="text-emerald-500 flex-shrink-0 mt-0.5">
                          <CheckIcon className="w-4 h-4" />
                        </span>
                        <span className="text-sm text-ink-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="section bg-warm-soft">
          <div className="container-narrow">
            <div className="section-heading section-heading-center">
              <span className="eyebrow eyebrow-center mb-5">Add-ons</span>
              <h2 className="text-balance">Enhance your project</h2>
              <p className="text-lg text-ink-600 mt-4">
                À la carte services to extend your capabilities
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-line divide-y divide-line">
              {addOns.map((addon) => (
                <div
                  key={addon.name}
                  className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-brand-50/30 transition-colors"
                >
                  <span className="font-medium text-ink-900">{addon.name}</span>
                  <span className="text-sm text-ink-600 tabular-nums font-medium">{addon.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment & Terms */}
        <section className="section bg-surface">
          <div className="container-x">
            <div className="section-heading section-heading-center">
              <span className="eyebrow eyebrow-center mb-5">Payment</span>
              <h2 className="text-balance">Flexible payment options</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                  ),
                  title: 'How Payment Works',
                  items: ['50% upfront to start', '50% on final delivery', 'Milestone-based for large projects', 'Monthly billing for retainers', 'Major cards accepted'],
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="9" x2="15" y1="13" y2="13" />
                      <line x1="9" x2="15" y1="17" y2="17" />
                    </svg>
                  ),
                  title: 'Our Guarantee',
                  items: ['Money-back guarantee*', 'No hidden fees', 'Clear contracts', 'Cancel anytime (retainers)', 'Full ownership of code'],
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  title: 'Typical Timeline',
                  items: ['Starter: 2-3 weeks', 'Growth: 4-6 weeks', 'Enterprise: Custom', 'We never rush quality'],
                },
              ].map((card) => (
                <div key={card.title} className="bg-white rounded-2xl border border-line p-7">
                  <span className="inline-flex w-12 h-12 rounded-xl bg-brand-50 text-brand-700 items-center justify-center mb-5">
                    {card.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-ink-900 mb-3">{card.title}</h3>
                  <ul className="space-y-2 text-sm text-ink-600">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-brand-500 mt-1.5 w-1 h-1 rounded-full bg-brand-500 flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section bg-warm-soft">
          <div className="container-narrow">
            <div className="section-heading section-heading-center">
              <span className="eyebrow eyebrow-center mb-5">FAQ</span>
              <h2 className="text-balance">Common questions</h2>
              <p className="text-lg text-ink-600 mt-4">
                Everything you need to know about our pricing
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-line overflow-hidden transition-colors hover:border-brand-300"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                    aria-expanded={expandedFAQ === index}
                    aria-controls={`faq-${index}`}
                  >
                    <span className="font-semibold text-ink-900">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-ink-500 flex-shrink-0 transition-transform duration-normal ease-out-soft ${
                        expandedFAQ === index ? 'rotate-180' : ''
                      }`}
                      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  {expandedFAQ === index && (
                    <motion.div
                      id={`faq-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-ink-600 leading-relaxed text-sm">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(at 20% 30%, rgba(255,255,255,0.25) 0px, transparent 55%), radial-gradient(at 80% 70%, rgba(255,255,255,0.15) 0px, transparent 50%)',
            }}
            aria-hidden="true"
          />
          <div className="relative container-x section">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-balance text-white mb-4">Ready to get started?</h2>
              <p className="text-lg text-white/85 mb-8 leading-relaxed">
                Book a free 30-minute consultation. No pressure, just honest advice about what&apos;s right for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
                <Link href="/contact" className="btn bg-white text-brand-700 hover:bg-brand-50 btn-lg shadow-lift">
                  Book Free Consultation
                  <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/projects" className="btn btn-lg border-2 border-white/30 bg-transparent text-white hover:bg-white/10">
                  View Our Work
                </Link>
              </div>

              <div className="pt-8 border-t border-white/20">
                <p className="text-white/85 italic leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
                  &ldquo;The team took time to understand our needs before recommending a package. No upselling, just genuine help.&rdquo;
                  <br />
                  <span className="text-white/70 text-sm font-medium not-italic mt-2 inline-block">— Sarah M., Fashion E-Commerce Client</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
