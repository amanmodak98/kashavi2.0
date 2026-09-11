'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    icon: '🎨',
    title: 'Web Design & Development',
    description: 'Beautiful, responsive websites built with modern tech. From landing pages to full web applications.',
    features: ['Responsive Design', 'Modern Tech Stack', 'SEO Optimized']
  },
  {
    icon: '🛒',
    title: 'E-Commerce Solutions',
    description: 'Complete online stores that convert visitors into customers. Payment integration, inventory management, and more.',
    features: ['Payment Integration', 'Inventory System', 'Customer Portal']
  },
  {
    icon: '🤖',
    title: 'AI & Automation',
    description: 'Smart chatbots, workflow automation, and AI-powered features that save time and reduce costs.',
    features: ['AI Chatbots', 'Workflow Automation', 'Data Analysis']
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile apps for iOS and Android. User-friendly and performant.',
    features: ['iOS & Android', 'Cross-Platform', 'Native Performance']
  }
];

export function Services() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-stone-400" />
            <span className="text-xs font-medium uppercase tracking-wider text-stone-600">
              What We Do
            </span>
            <div className="w-8 h-[1px] bg-stone-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Services that drive growth
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            From idea to launch, we handle everything your business needs to succeed online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 border-2 border-stone-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                {service.title}
              </h3>
              <p className="text-stone-600 mb-4 leading-relaxed text-sm">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                    <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-600 transition-colors"
          >
            <span>View all services</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
