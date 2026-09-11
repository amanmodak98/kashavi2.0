'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { generateServiceSchema } from '@/lib/schema';

const serviceSchema = generateServiceSchema({
  name: 'Mobile App Development',
  description: 'Native and cross-platform mobile apps for iOS and Android. User-friendly, performant apps that your customers will love.',
  serviceType: 'SoftwareApplication',
  price: '89999-Custom',
  url: '/services/mobile-apps'
});

export default function MobileAppsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
        {/* Hero */}
        <section className="pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-purple-400" />
              <span className="text-xs font-medium uppercase tracking-wider text-purple-600">
                Mobile App Development
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-6 leading-tight">
              Mobile apps that users<br />
              <span className="text-purple-600">love & use daily</span>
            </h1>

            <p className="text-xl text-stone-600 leading-relaxed mb-8 max-w-3xl">
              Native and cross-platform mobile apps for iOS and Android. We build user-friendly, performant apps that solve real problems and delight your customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 text-white font-bold text-lg rounded-xl hover:bg-purple-700 transition-all shadow-lg hover:scale-105"
              >
                <span>Build Your App</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-stone-900 border-2 border-stone-200 font-bold text-lg rounded-xl hover:border-purple-600 transition-all"
              >
                <span>View Examples</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
              Complete Mobile Solution
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '📱', title: 'iOS & Android', desc: 'Native apps for both platforms or cross-platform with React Native' },
                { icon: '⚡', title: 'Fast Performance', desc: 'Optimized for speed and smooth user experience' },
                { icon: '🎨', title: 'Beautiful UI', desc: 'Modern designs that follow platform guidelines' },
                { icon: '🔔', title: 'Push Notifications', desc: 'Keep users engaged with timely notifications' },
                { icon: '🔐', title: 'Secure Auth', desc: 'User authentication and data security built-in' },
                { icon: '📊', title: 'Analytics', desc: 'Track usage and user behavior from day one' }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-6 rounded-xl border-2 border-stone-200 hover:border-purple-600 transition-colors"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-stone-900 mb-2">{feature.title}</h3>
                  <p className="text-stone-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 text-center">
              Mobile App Packages
            </h2>
            <p className="text-lg text-stone-600 mb-12 text-center">
              From MVP to enterprise-grade apps
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-stone-200 hover:border-purple-600 transition-all">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">MVP</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">₹89,999</div>
                <ul className="space-y-3 mb-8">
                  {['Single platform', 'Core features only', '5-7 screens', 'Basic backend', 'App store submission', '30 days support'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-stone-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full text-center py-3 px-6 bg-stone-100 text-stone-900 font-bold rounded-xl hover:bg-stone-200 transition-all">
                  Get Started
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-purple-600 hover:shadow-xl transition-all relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1.5 bg-purple-600 text-white text-xs font-bold uppercase rounded-full">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">₹2,49,999</div>
                <ul className="space-y-3 mb-8">
                  {['iOS & Android', 'Full feature set', 'Custom design', 'Robust backend', 'Push notifications', '90 days support'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-stone-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full text-center py-3 px-6 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-all shadow-md">
                  Get Started
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-stone-200 hover:border-purple-600 transition-all">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">Custom</div>
                <ul className="space-y-3 mb-8">
                  {['Complex features', 'Advanced security', 'API integrations', 'Admin dashboard', 'Scalable architecture', 'Ongoing maintenance'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-stone-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full text-center py-3 px-6 bg-stone-100 text-stone-900 font-bold rounded-xl hover:bg-stone-200 transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
              Development Process
            </h2>

            <div className="space-y-6">
              {[
                { num: '01', title: 'Discovery & Design', desc: 'Define features, create wireframes, design UI/UX' },
                { num: '02', title: 'Development', desc: 'Build frontend and backend with regular updates' },
                { num: '03', title: 'Testing', desc: 'QA testing on real devices, fix bugs' },
                { num: '04', title: 'Launch & Support', desc: 'App store submission and post-launch support' }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-6 items-start p-6 bg-purple-50 rounded-xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center text-xl font-bold">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2">{step.title}</h3>
                    <p className="text-stone-600">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 text-center">
              Technologies We Use
            </h2>
            <p className="text-lg text-stone-600 mb-12 text-center">
              Native and cross-platform solutions
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              {['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase'].map((tech, i) => (
                <div key={i} className="px-6 py-3 bg-white border-2 border-stone-200 rounded-xl font-semibold text-stone-800">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-purple-600 to-purple-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to build your mobile app?
            </h2>
            <p className="text-xl text-purple-50 mb-10">
              Get a free consultation and custom quote for your app idea
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-xl hover:bg-purple-50 transition-all shadow-lg hover:scale-105"
            >
              <span>Build Your App</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
