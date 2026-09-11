'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const featuredProjects = [
  {
    id: 1,
    title: 'Fashion E-Commerce',
    category: 'E-Commerce',
    description: 'Complete platform rebuild that increased revenue by 340% and attracted 2.8M monthly visitors.',
    results: [
      { label: 'Revenue', value: '+340%' },
      { label: 'Visitors', value: '2.8M/mo' },
      { label: 'Conversion', value: '+125%' }
    ],
    image: '/images/work/ecommerce-project.svg',
    link: '/projects/fashion-ecommerce',
    color: '#10B981'
  },
  {
    id: 2,
    title: 'AI Customer Support',
    category: 'AI & Automation',
    description: 'Custom AI chatbot that reduced response time by 75% and saved ₹45L annually.',
    results: [
      { label: 'Response Time', value: '-75%' },
      { label: 'Satisfaction', value: '92%' },
      { label: 'Savings', value: '₹45L' }
    ],
    image: '/images/work/ai-automation.svg',
    link: '/projects/ai-customer-support',
    color: '#F97316'
  },
  {
    id: 3,
    title: 'Healthcare Platform',
    category: 'Web Development',
    description: 'Complete UX redesign with WCAG compliance that boosted appointments by 220%.',
    results: [
      { label: 'Appointments', value: '+220%' },
      { label: 'Users', value: '50k+' },
      { label: 'Rating', value: '4.9/5' }
    ],
    image: '/images/work/healthcare-platform.svg',
    link: '/projects/healthcare-platform',
    color: '#3B82F6'
  }
];

export function FeaturedWork() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-stone-400" />
            <span className="text-xs font-medium uppercase tracking-wider text-stone-600">
              Our Work
            </span>
            <div className="w-8 h-[1px] bg-stone-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Projects we're proud of
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Real results for real businesses. Here's what we've built recently.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group bg-white rounded-2xl overflow-hidden border-2 border-stone-200 hover:border-orange-500 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-stone-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-lg text-white text-xs font-bold uppercase"
                  style={{ backgroundColor: project.color }}
                >
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-stone-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-3 mb-6">
                  {project.results.map((result, i) => (
                    <div key={i} className="text-center p-3 rounded-lg bg-stone-50">
                      <div className="text-xl font-black mb-1" style={{ color: project.color }}>
                        {result.value}
                      </div>
                      <div className="text-xs text-stone-600">{result.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href={project.link}
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                >
                  <span>View case study</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white font-bold text-lg rounded-xl hover:bg-orange-600 transition-all shadow-md hover:shadow-lg hover:scale-105"
          >
            <span>View All Projects</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
