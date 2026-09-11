'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { generateServiceSchema } from '@/lib/schema';

const serviceSchema = generateServiceSchema({
  name: 'Website Development',
  description: 'Custom website development built for performance, conversions, and scalability. From landing pages to complex web applications.',
  serviceType: 'WebDesign',
  price: '42999-Custom',
  url: '/services/web-development'
});

export default function WebDevelopmentPage() {
  return (
    <>
      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
        {/* Hero */}
        <section className="pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-blue-400" />
              <span className="text-xs font-medium uppercase tracking-wider text-blue-600">
                Web Development
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-6 leading-tight">
              Professional websites<br />
              that <span className="text-blue-600">drive growth</span>
            </h1>

            <p className="text-xl text-stone-600 leading-relaxed mb-8 max-w-3xl">
              Custom website development built for performance, conversions, and scalability. From landing pages to complex web applications, we create digital experiences that help your business grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:scale-105"
              >
                <span>Get Free Quote</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-stone-900 border-2 border-stone-200 font-bold text-lg rounded-xl hover:border-blue-600 transition-all"
              >
                <span>View Examples</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
              What's Included
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '📱', title: 'Responsive Design', desc: 'Mobile-first approach that looks perfect on every device' },
                { icon: '⚡', title: 'Fast Loading', desc: '90+ PageSpeed score with optimized performance' },
                { icon: '🔍', title: 'SEO Optimized', desc: 'Built-in SEO foundation for better rankings' },
                { icon: '🔒', title: 'Secure & Reliable', desc: 'Industry-standard security and reliable hosting' },
                { icon: '📝', title: 'Easy Content Management', desc: 'Update your site easily with intuitive CMS' },
                { icon: '📊', title: 'Analytics Integration', desc: 'Track visitors and conversions from day one' }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-6 rounded-xl border-2 border-stone-200 hover:border-blue-600 transition-colors"
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
              Transparent Pricing
            </h2>
            <p className="text-lg text-stone-600 mb-12 text-center">
              Choose a package that fits your needs
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter */}
              <div className="bg-white rounded-2xl p-8 border-2 border-stone-200 hover:border-blue-600 transition-all">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">₹42,999</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">5-page website</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">Mobile responsive</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">Basic SEO</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">Contact form</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">1 revision round</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 px-6 bg-stone-100 text-stone-900 font-bold rounded-xl hover:bg-stone-200 transition-all"
                >
                  Get Started
                </Link>
              </div>

              {/* Professional */}
              <div className="bg-white rounded-2xl p-8 border-2 border-blue-600 hover:shadow-xl transition-all relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-xs font-bold uppercase rounded-full">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">₹89,999</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">10-page website</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">Custom design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">Advanced SEO</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">CMS integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">3 revision rounds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">Analytics setup</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 px-6 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                >
                  Get Started
                </Link>
              </div>

              {/* Enterprise */}
              <div className="bg-white rounded-2xl p-8 border-2 border-stone-200 hover:border-blue-600 transition-all">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">Unlimited pages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">Custom features</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">Ongoing maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">Dedicated manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-stone-700">SLA guarantee</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="block w-full text-center py-3 px-6 bg-stone-100 text-stone-900 font-bold rounded-xl hover:bg-stone-200 transition-all"
                >
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
              Our Process
            </h2>

            <div className="space-y-6">
              {[
                { num: '01', title: 'Discovery', desc: 'Understand your business, audience, and goals' },
                { num: '02', title: 'Design', desc: 'Create wireframes and visual designs for approval' },
                { num: '03', title: 'Development', desc: 'Build your website with clean, maintainable code' },
                { num: '04', title: 'Launch', desc: 'Deploy, test, and hand over with training' }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-6 items-start p-6 bg-blue-50 rounded-xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
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
              Modern tech stack for future-proof solutions
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'].map((tech, i) => (
                <div key={i} className="px-6 py-3 bg-white border-2 border-stone-200 rounded-xl font-semibold text-stone-800">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to build your website?
            </h2>
            <p className="text-xl text-blue-50 mb-10">
              Get a free consultation and custom quote for your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:scale-105"
              >
                <span>Get Free Quote</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-700 text-white border-2 border-white/20 font-bold text-lg rounded-xl hover:bg-blue-800 transition-all"
              >
                <span>View Our Work</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
