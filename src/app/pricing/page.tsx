'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { prefersReducedMotion } from '@/lib/animations';
import {
  pricingTiers,
  retainers,
  addOns,
  faqs,
  comparisonFeatures
} from './pricingData';

gsap.registerPlugin(ScrollTrigger);

export default function PricingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion()) {
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

        tl.fromTo('.hero-content',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }
        );

        gsap.utils.toArray('.fade-up-section').forEach((section: any) => {
          gsap.fromTo(section,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 70%',
                once: true
              }
            }
          );
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-stone-400" />
            <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
              PRICING
            </span>
            <div className="w-12 h-[1px] bg-stone-400" />
          </div>

          <h1 className="hero-content text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight">
            Transparent pricing,<br />no surprises.
          </h1>

          <p className="hero-content text-lg md:text-xl text-stone-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Choose a package that fits your needs, or let's build something custom.
            No hidden fees, no complicated contracts.
          </p>

          <p className="hero-content text-sm text-stone-500 font-medium">
            💼 Join 50+ businesses who trust us with their digital presence
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="fade-up-section py-16 md:py-20 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 ${
                  tier.popular
                    ? 'border-orange-500 shadow-xl shadow-orange-100 md:-translate-y-4'
                    : 'border-stone-200 hover:border-orange-300 hover:shadow-lg'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block px-4 py-1.5 bg-orange-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">{tier.name}</h3>
                  <p className="text-sm text-stone-600 mb-4">{tier.tagline}</p>

                  <div className="mb-2">
                    <span className="text-4xl font-bold text-stone-900">{tier.priceRange}</span>
                  </div>
                  <p className="text-sm text-stone-500">{tier.period}</p>
                </div>

                <p className="text-stone-600 mb-6 leading-relaxed">{tier.description}</p>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-stone-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                    tier.popular
                      ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-md hover:shadow-lg hover:scale-105'
                      : 'bg-stone-100 text-stone-900 hover:bg-stone-200'
                  }`}
                >
                  {tier.cta}
                </Link>

                <p className="text-xs text-stone-500 text-center mt-4">
                  ⏱️ Timeline: {tier.timeline}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="fade-up-section py-16 md:py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Compare Packages
            </h2>
            <p className="text-lg text-stone-600">
              See what's included in each tier
            </p>
          </div>

          <div className="space-y-8">
            {comparisonFeatures.map((category) => (
              <div key={category.category}>
                <h3 className="text-lg font-bold text-stone-900 mb-4 pb-2 border-b-2 border-orange-200">
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.features.map((feature, i) => (
                    <div key={i} className="grid grid-cols-4 gap-4 items-center py-3 hover:bg-orange-50 rounded-lg px-4 transition-colors">
                      <div className="col-span-1 text-sm font-medium text-stone-700">
                        {feature.name}
                      </div>
                      <div className="text-center">
                        {typeof feature.starter === 'boolean' ? (
                          feature.starter ? (
                            <svg className="w-5 h-5 text-emerald-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-stone-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )
                        ) : (
                          <span className="text-sm text-stone-600">{feature.starter}</span>
                        )}
                      </div>
                      <div className="text-center">
                        {typeof feature.growth === 'boolean' ? (
                          feature.growth ? (
                            <svg className="w-5 h-5 text-emerald-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-stone-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )
                        ) : (
                          <span className="text-sm text-stone-600 font-medium">{feature.growth}</span>
                        )}
                      </div>
                      <div className="text-center">
                        {typeof feature.enterprise === 'boolean' ? (
                          feature.enterprise ? (
                            <svg className="w-5 h-5 text-emerald-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-stone-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )
                        ) : (
                          <span className="text-sm text-stone-600">{feature.enterprise}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Retainers */}
      <section className="fade-up-section py-16 md:py-20 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Ongoing Support & Maintenance
            </h2>
            <p className="text-lg text-stone-600">
              Keep your site running smoothly with monthly retainers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {retainers.map((retainer) => (
              <motion.div
                key={retainer.id}
                whileHover={{ y: -4 }}
                className={`bg-white rounded-2xl p-8 border-2 transition-all duration-300 ${
                  retainer.popular
                    ? 'border-orange-500 shadow-lg'
                    : 'border-stone-200 hover:border-orange-300 hover:shadow-md'
                }`}
              >
                {retainer.popular && (
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-4">
                    Popular Choice
                  </span>
                )}
                <h3 className="text-xl font-bold text-stone-900 mb-2">{retainer.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-stone-900">{retainer.price}</span>
                  <span className="text-stone-500 ml-2">{retainer.period}</span>
                </div>
                <p className="text-stone-600 mb-6">{retainer.description}</p>
                <ul className="space-y-2">
                  {retainer.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-stone-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="fade-up-section py-16 md:py-20 px-6 lg:px-12 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Enhance Your Project
            </h2>
            <p className="text-lg text-stone-600">
              À la carte services to extend your capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {addOns.map((addon, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white rounded-lg border border-stone-200 hover:border-orange-300 transition-colors">
                <span className="font-medium text-stone-900">{addon.name}</span>
                <span className="text-sm text-stone-600">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Terms */}
      <section className="fade-up-section py-16 md:py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Flexible Payment Options
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-stone-200 hover:border-orange-300 transition-colors">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">How Payment Works</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>• 50% upfront to start</li>
                <li>• 50% on final delivery</li>
                <li>• Milestone-based for large projects</li>
                <li>• Monthly billing for retainers</li>
                <li>• Major cards accepted</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-stone-200 hover:border-orange-300 transition-colors">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Our Guarantee</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>• Money-back guarantee*</li>
                <li>• No hidden fees</li>
                <li>• Clear contracts</li>
                <li>• Cancel anytime (retainers)</li>
                <li>• Full ownership of code</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-stone-200 hover:border-orange-300 transition-colors">
              <div className="text-4xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Typical Timeline</h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>• Starter: 2-3 weeks</li>
                <li>• Growth: 4-6 weeks</li>
                <li>• Enterprise: Custom</li>
                <li>• We'll never rush quality</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="fade-up-section py-16 md:py-20 px-6 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-stone-600">
              Everything you need to know about our pricing
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-stone-50 rounded-xl overflow-hidden border border-stone-200 hover:border-orange-300 transition-colors"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-stone-900 pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-stone-500 flex-shrink-0 transition-transform duration-300 ${
                      expandedFAQ === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {expandedFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 px-6 lg:px-12 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to get started?
          </h2>
          <p className="text-xl text-orange-50 mb-10 leading-relaxed max-w-2xl mx-auto">
            Book a free 30-minute consultation. No pressure, just honest advice about what's right for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold text-lg rounded-xl hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <span>Book Free Consultation</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white border-2 border-white/20 font-bold text-lg rounded-xl hover:bg-orange-700 transition-all duration-300"
            >
              <span>View Our Work</span>
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-orange-400">
            <p className="text-orange-50 italic leading-relaxed max-w-2xl mx-auto">
              💬 "The team took time to understand our needs before recommending a package. No upselling, just genuine help."
              <br />
              <span className="text-sm font-medium">— Sarah M., Fashion E-Commerce Client</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
