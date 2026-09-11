'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface Result {
  label: string;
  value: string;
}

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  results: Result[];
  link: string;
  accent: string;
  icon: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 'fashion-ecommerce',
    title: 'Fashion E-Commerce',
    category: 'E-Commerce',
    description: 'Complete platform rebuild that increased revenue by 340%',
    results: [
      { label: 'Revenue', value: '+340%' },
      { label: 'Users', value: '2.8M/mo' },
      { label: 'Conversion', value: '+125%' },
    ],
    link: '/projects/fashion-ecommerce',
    accent: 'from-emerald-500 to-emerald-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
      </svg>
    ),
  },
  {
    id: 'ai-chatbot',
    title: 'AI Customer Support',
    category: 'AI & Automation',
    description: 'Smart chatbot that saved ₹45L annually',
    results: [
      { label: 'Response', value: '-75%' },
      { label: 'Satisfaction', value: '92%' },
      { label: 'Savings', value: '₹45L' },
    ],
    link: '/projects/ai-customer-support',
    accent: 'from-brand-500 to-brand-600',
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
  },
  {
    id: 'travel-platform',
    title: 'Travo Bharat',
    category: 'Travel Platform',
    description: 'Travel booking platform with 2.8M monthly users',
    results: [
      { label: 'Users', value: '2.8M/mo' },
      { label: 'Bookings', value: '+280%' },
      { label: 'Rating', value: '4.8/5' },
    ],
    link: '/projects/travo-bharat',
    accent: 'from-blue-500 to-blue-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </svg>
    ),
  },
  {
    id: 'healthcare',
    title: 'Healthcare Platform',
    category: 'Healthcare',
    description: 'Patient management system for modern clinics',
    results: [
      { label: 'Efficiency', value: '+85%' },
      { label: 'Patients', value: '50K+' },
      { label: 'Uptime', value: '99.9%' },
    ],
    link: '/projects/healthcare-platform',
    accent: 'from-pink-500 to-pink-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    id: 'real-estate',
    title: 'Real Estate Portal',
    category: 'Real Estate',
    description: 'Property listing platform with smart search',
    results: [
      { label: 'Listings', value: '100K+' },
      { label: 'Traffic', value: '+420%' },
      { label: 'Leads', value: '+200%' },
    ],
    link: '/projects/real-estate-portal',
    accent: 'from-violet-500 to-violet-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 'fintech',
    title: 'FinTech Dashboard',
    category: 'Finance',
    description: 'Analytics dashboard for financial advisors',
    results: [
      { label: 'Users', value: '15K+' },
      { label: 'Data Points', value: '50M+' },
      { label: 'Speed', value: '3x faster' },
    ],
    link: '/projects/fintech-dashboard',
    accent: 'from-indigo-500 to-indigo-600',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" x2="12" y1="20" y2="10" />
        <line x1="18" x2="18" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="16" />
        <line x1="3" x2="21" y1="20" y2="20" />
      </svg>
    ),
  },
];

export function ResultsWall() {
  return (
    <section className="section bg-warm-soft">
      <div className="container-x">
        <div className="section-heading section-heading-center">
          <span className="eyebrow eyebrow-center mb-5">Selected Work</span>
          <h2 className="text-balance">Projects We&apos;re Proud Of</h2>
          <p className="text-lg text-ink-600 mt-4 max-w-2xl mx-auto">
            Real businesses, real results. Here&apos;s what we&apos;ve built recently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={project.link}
                className="group relative block h-full bg-white rounded-2xl border border-line overflow-hidden transition-all duration-normal ease-out-soft hover:border-line-strong hover:shadow-lift hover:-translate-y-0.5"
              >
                {/* Top illustration band */}
                <div className={`relative h-40 bg-gradient-to-br ${project.accent} flex items-center justify-center overflow-hidden`}>
                  <div
                    className="absolute inset-0 opacity-30 mix-blend-overlay"
                    style={{
                      backgroundImage:
                        'radial-gradient(at 30% 30%, rgba(255,255,255,0.35) 0px, transparent 50%)',
                    }}
                    aria-hidden="true"
                  />
                  <div className="w-14 h-14 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-white transition-transform duration-slow ease-out-soft group-hover:scale-110">
                    <span className="w-7 h-7 block">
                      {project.icon}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="badge mb-4">{project.category}</span>
                  <h3 className="text-xl font-semibold text-ink-900 mb-2 tracking-tight transition-colors group-hover:text-brand-700">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ink-600 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-3 py-4 border-t border-line">
                    {project.results.map((result) => (
                      <div key={result.label} className="text-center">
                        <div className="text-lg font-bold text-ink-900 tracking-tight tabular-nums">
                          {result.value}
                        </div>
                        <div className="text-xs text-ink-500 mt-0.5">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                    <span>View case study</span>
                    <svg className="w-4 h-4 transition-transform duration-normal ease-out-soft group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(at 20% 30%, rgba(255,255,255,0.25) 0px, transparent 55%), radial-gradient(at 80% 70%, rgba(255,255,255,0.15) 0px, transparent 50%)',
            }}
            aria-hidden="true"
          />
          <div className="relative p-8 md:p-14 text-center">
            <h3 className="text-balance text-white mb-4">Want results like these?</h3>
            <p className="text-lg text-white/85 max-w-2xl mx-auto mb-8">
              Let&apos;s discuss your project and see how we can help you achieve similar growth.
            </p>
            <Link href="/contact" className="btn bg-white text-brand-700 hover:bg-brand-50 btn-lg shadow-lift">
              Start Your Project
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
