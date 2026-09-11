'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { generateServiceSchema } from '@/lib/schema';

const serviceSchema = generateServiceSchema({
  name: 'E-Commerce Development',
  description: 'Full-featured e-commerce solutions built for conversions. Custom online stores with secure payments, inventory management, and seamless shopping experience.',
  serviceType: 'EcommercePlatform',
  price: '67999-Custom',
  url: '/services/ecommerce'
});

export default function EcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
        {/* Hero */}
        <section className="pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-emerald-400" />
              <span className="text-xs font-medium uppercase tracking-wider text-emerald-600">
                E-Commerce Development
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-6 leading-tight">
              Online stores that<br />
              <span className="text-emerald-600">convert & scale</span>
            </h1>

            <p className="text-xl text-stone-600 leading-relaxed mb-8 max-w-3xl">
              Full-featured e-commerce solutions built for conversions. From small shops to enterprise platforms, we create online stores that turn browsers into buyers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold text-lg rounded-xl hover:bg-emerald-700 transition-all shadow-lg hover:scale-105"
              >
                <span>Start Your Store</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects/fashion-ecommerce"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-stone-900 border-2 border-stone-200 font-bold text-lg rounded-xl hover:border-emerald-600 transition-all"
              >
                <span>View Case Study</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
              Everything You Need to Sell Online
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🛒', title: 'Product Management', desc: 'Easy catalog management with variants, images, and inventory' },
                { icon: '💳', title: 'Secure Payments', desc: 'Multiple payment gateways with PCI compliance' },
                { icon: '📦', title: 'Order Management', desc: 'Complete order tracking and fulfillment system' },
                { icon: '👤', title: 'Customer Accounts', desc: 'User registration, wishlists, and order history' },
                { icon: '📱', title: 'Mobile Commerce', desc: 'Perfect shopping experience on all devices' },
                { icon: '📊', title: 'Analytics & Reports', desc: 'Sales tracking, customer insights, and business intelligence' }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-6 rounded-xl border-2 border-stone-200 hover:border-emerald-600 transition-colors"
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
              E-Commerce Packages
            </h2>
            <p className="text-lg text-stone-600 mb-12 text-center">
              Choose the right package for your business
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-stone-200 hover:border-emerald-600 transition-all">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Starter Store</h3>
                <div className="text-4xl font-bold text-emerald-600 mb-4">₹67,999</div>
                <ul className="space-y-3 mb-8">
                  {['Up to 50 products', 'Payment gateway', 'Order management', 'Mobile responsive', 'Basic SEO', 'SSL certificate'].map((item, i) => (
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

              <div className="bg-white rounded-2xl p-8 border-2 border-emerald-600 hover:shadow-xl transition-all relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1.5 bg-emerald-600 text-white text-xs font-bold uppercase rounded-full">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Professional</h3>
                <div className="text-4xl font-bold text-emerald-600 mb-4">₹1,49,999</div>
                <ul className="space-y-3 mb-8">
                  {['Up to 500 products', 'Multiple payments', 'Customer accounts', 'Advanced SEO', 'Email marketing', 'Analytics dashboard'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-stone-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full text-center py-3 px-6 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-all shadow-md">
                  Get Started
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-stone-200 hover:border-emerald-600 transition-all">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-emerald-600 mb-4">Custom</div>
                <ul className="space-y-3 mb-8">
                  {['Unlimited products', 'Custom features', 'Multi-vendor', 'API integrations', 'Priority support', 'Dedicated manager'].map((item, i) => (
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

        {/* Case Study */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                    Fashion E-Commerce Success Story
                  </h2>
                  <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                    Complete platform rebuild that increased revenue by 340% and attracted 2.8M monthly visitors.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-black text-emerald-600 mb-1">+340%</div>
                      <div className="text-sm text-stone-600">Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-emerald-600 mb-1">2.8M</div>
                      <div className="text-sm text-stone-600">Visitors/mo</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-black text-emerald-600 mb-1">+125%</div>
                      <div className="text-sm text-stone-600">Conversion</div>
                    </div>
                  </div>
                  <Link
                    href="/projects/fashion-ecommerce"
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700"
                  >
                    <span>Read Full Case Study</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="aspect-square bg-gradient-to-br from-emerald-300 to-emerald-500 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-emerald-600 to-emerald-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to launch your online store?
            </h2>
            <p className="text-xl text-emerald-50 mb-10">
              Get a free consultation and custom quote for your e-commerce project
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-emerald-600 font-bold text-lg rounded-xl hover:bg-emerald-50 transition-all shadow-lg hover:scale-105"
            >
              <span>Start Your Store</span>
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
