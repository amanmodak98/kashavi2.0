'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const services = [
  {
    id: 'web-development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Website Development',
    tagline: 'Professional websites that drive growth',
    description: 'Custom website development built for performance, conversions, and scalability. From landing pages to complex web applications.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'CMS Integration'],
    startingPrice: '₹42,999',
    accent: 'bg-blue-50 text-blue-700',
    link: '/services/web-development',
    deliverables: ['Custom Design', '5-15 Pages', 'Mobile Responsive', 'Basic SEO', '30-day Support'],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    timeline: '2-4 weeks',
  },
  {
    id: 'ecommerce',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
      </svg>
    ),
    title: 'E-Commerce Development',
    tagline: 'Online stores that convert',
    description: 'Full-featured e-commerce solutions with secure payments, inventory management, and seamless shopping experience.',
    features: ['Payment Gateway', 'Order Management', 'Customer Accounts', 'Mobile Commerce'],
    startingPrice: '₹67,999',
    accent: 'bg-emerald-50 text-emerald-700',
    link: '/services/ecommerce',
    deliverables: ['Product Catalog', 'Shopping Cart', 'Payment Integration', 'Admin Dashboard', '60-day Support'],
    technologies: ['Shopify', 'WooCommerce', 'React', 'Node.js'],
    timeline: '3-6 weeks',
  },
  {
    id: 'mobile-apps',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: 'Mobile App Development',
    tagline: 'Apps users love',
    description: 'Native and cross-platform mobile apps for iOS and Android. User-friendly, performant apps that solve real problems.',
    features: ['iOS & Android', 'Push Notifications', 'Offline Support', 'App Store Launch'],
    startingPrice: '₹89,999',
    accent: 'bg-violet-50 text-violet-700',
    link: '/services/mobile-apps',
    deliverables: ['iOS & Android Apps', 'Backend API', 'Admin Panel', 'App Store Submission', '90-day Support'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    timeline: '6-10 weeks',
  },
  {
    id: 'ai-automation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    ),
    title: 'AI & Automation',
    tagline: 'Save time with intelligent automation',
    description: 'Smart chatbots, workflow automation, and AI-powered features that reduce costs and improve efficiency.',
    features: ['AI Chatbots', 'Workflow Automation', 'Data Analysis', '24/7 Support'],
    startingPrice: '₹59,999',
    accent: 'bg-brand-50 text-brand-700',
    link: '/services/ai-automation',
    deliverables: ['Custom AI Model', 'Integration Setup', 'Training Data', 'Analytics Dashboard', '60-day Support'],
    technologies: ['OpenAI', 'Python', 'TensorFlow', 'LangChain'],
    timeline: '3-5 weeks',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We understand your goals, audience, and requirements through detailed consultation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Design',
    description: 'Create wireframes and designs that align with your brand and user experience goals.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Development',
    description: 'Build your product with clean code, best practices, and regular progress updates.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Deploy to production with testing, training, and ongoing support included.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

const whyChooseUs = [
  {
    title: 'Fast Delivery',
    description: 'Most projects completed in 2-6 weeks',
    stat: '2-6 weeks',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M13 2 3 14h9l-1 8 10-12h-9z" />
      </svg>
    ),
  },
  {
    title: 'Quality Code',
    description: 'Clean, maintainable, and scalable',
    stat: '95% retention',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: 'Full Support',
    description: '30-90 days post-launch support',
    stat: '24/7 available',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <div className="bg-canvas">
      {/* Hero */}
      <section className="relative overflow-hidden bg-warm">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
        <div
          className="absolute -top-40 -right-32 w-[30rem] h-[30rem] bg-brand-200/40 rounded-full blur-3xl animate-drift"
          aria-hidden="true"
        />

        <div className="relative container-x pt-16 pb-20 md:pt-20 md:pb-24 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="eyebrow eyebrow-center mb-6">Our Services</span>
            <h1 className="text-balance mb-6">
              Digital solutions for<br />
              <span className="text-brand-600">every business need</span>
            </h1>
            <p className="text-lg md:text-xl text-ink-600 leading-relaxed max-w-2xl mx-auto mb-10">
              From websites to mobile apps, e-commerce to AI automation—we build digital products that help your business grow.
            </p>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-ink-700">
              {['50+ Projects Delivered', '95% Client Retention', '2-6 Week Delivery'].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-500" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section bg-surface">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group bg-white rounded-2xl border border-line overflow-hidden transition-all duration-normal ease-out-soft hover:border-line-strong hover:shadow-lift hover:-translate-y-0.5"
              >
                <div className="p-7 md:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <span className={`inline-flex w-12 h-12 rounded-xl ${service.accent} items-center justify-center transition-transform duration-normal ease-out-soft group-hover:scale-110`}>
                      <span className="w-6 h-6 block">{service.icon}</span>
                    </span>
                    <span className={`badge ${service.accent}`}>
                      From {service.startingPrice}
                    </span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-semibold text-ink-900 tracking-tight mb-2">
                    {service.title}
                  </h2>
                  <p className="text-sm font-semibold text-brand-700 mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-ink-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                        <span className="text-ink-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable details */}
                  <button
                    type="button"
                    onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                    className="w-full text-left pt-4 border-t border-line"
                    aria-expanded={selectedService === service.id}
                    aria-controls={`service-${service.id}-details`}
                  >
                    <div className="flex items-center justify-between py-2">
                      <span className="text-sm font-semibold text-ink-900">View details</span>
                      <svg
                        className={`w-5 h-5 text-ink-500 transition-transform duration-normal ease-out-soft ${
                          selectedService === service.id ? 'rotate-180' : ''
                        }`}
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </button>

                  {selectedService === service.id && (
                    <motion.div
                      id={`service-${service.id}-details`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="pt-5 space-y-5"
                    >
                      <div>
                        <h4 className="font-semibold text-ink-900 mb-2 text-sm">What&apos;s Included</h4>
                        <ul className="space-y-1.5">
                          {service.deliverables.map((item) => (
                            <li key={item} className="text-sm text-ink-600 flex items-center gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-ink-900 mb-2 text-sm">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-ink-100 text-ink-700 text-xs rounded-full font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-ink-100 rounded-xl">
                        <span className="text-sm font-semibold text-ink-700">Timeline</span>
                        <span className="text-sm font-bold text-brand-700">{service.timeline}</span>
                      </div>
                    </motion.div>
                  )}

                  {/* CTA */}
                  <Link href={service.link} className="btn btn-primary btn-sm mt-6 w-full">
                    Learn More
                    <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-warm-soft">
        <div className="container-narrow">
          <div className="section-heading section-heading-center">
            <span className="eyebrow eyebrow-center mb-5">How We Work</span>
            <h2 className="text-balance">Our proven 4-step process</h2>
            <p className="text-lg text-ink-600 mt-4">
              Quality delivery, every time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 bg-white rounded-2xl border border-line"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex w-12 h-12 rounded-xl bg-brand-50 text-brand-600 items-center justify-center">
                    {step.icon}
                  </span>
                  <span className="text-label text-ink-400">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-ink-900 mb-2 tracking-tight">{step.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section bg-surface">
        <div className="container-x">
          <div className="section-heading section-heading-center">
            <span className="eyebrow eyebrow-center mb-5">Why Us</span>
            <h2 className="text-balance">Why Choose Kashavi</h2>
            <p className="text-lg text-ink-600 mt-4">
              We don&apos;t just build products. We build partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="text-center p-8 bg-white rounded-2xl border border-line transition-all duration-normal ease-out-soft hover:border-line-strong hover:shadow-soft"
              >
                <span className="inline-flex w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 items-center justify-center mb-5">
                  {item.icon}
                </span>
                <div className="text-3xl font-bold text-brand-700 mb-3 tracking-tight tabular-nums">{item.stat}</div>
                <h3 className="text-lg font-semibold text-ink-900 mb-2">{item.title}</h3>
                <p className="text-sm text-ink-600 leading-relaxed">{item.description}</p>
              </motion.div>
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
            <h2 className="text-balance text-white mb-4">Ready to start your project?</h2>
            <p className="text-lg text-white/85 mb-8 leading-relaxed">
              Get a free consultation and custom quote for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn bg-white text-brand-700 hover:bg-brand-50 btn-lg shadow-lift">
                Get Free Quote
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <Link href="/pricing" className="btn btn-lg border-2 border-white/30 bg-transparent text-white hover:bg-white/10">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
