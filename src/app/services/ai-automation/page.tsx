'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { generateServiceSchema } from '@/lib/schema';

const serviceSchema = generateServiceSchema({
  name: 'AI & Automation',
  description: 'Smart chatbots, workflow automation, and AI-powered features that save time and reduce costs. Transform your business with intelligent automation.',
  serviceType: 'ProfessionalService',
  price: '59999-Custom',
  url: '/services/ai-automation'
});

export default function AIAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-50">
        {/* Hero */}
        <section className="pt-32 pb-20 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-orange-400" />
              <span className="text-xs font-medium uppercase tracking-wider text-orange-600">
                AI & Automation
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-6 leading-tight">
              Automate tasks,<br />
              <span className="text-orange-600">save time & money</span>
            </h1>

            <p className="text-xl text-stone-600 leading-relaxed mb-8 max-w-3xl">
              Smart chatbots, workflow automation, and AI-powered features that save time and reduce costs. Let AI handle repetitive tasks while you focus on growing your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 text-white font-bold text-lg rounded-xl hover:bg-orange-700 transition-all shadow-lg hover:scale-105"
              >
                <span>Start Automating</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/projects/ai-customer-support"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-stone-900 border-2 border-stone-200 font-bold text-lg rounded-xl hover:border-orange-600 transition-all"
              >
                <span>View Case Study</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
              AI Solutions We Build
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: '🤖', title: 'AI Chatbots', desc: '24/7 customer support that handles queries instantly' },
                { icon: '⚙️', title: 'Workflow Automation', desc: 'Automate repetitive tasks and reduce manual work' },
                { icon: '📧', title: 'Email Automation', desc: 'Smart email sequences that nurture leads' },
                { icon: '📊', title: 'Data Analysis', desc: 'AI-powered insights from your business data' },
                { icon: '🎯', title: 'Lead Scoring', desc: 'Automatically prioritize your best prospects' },
                { icon: '💬', title: 'Voice Assistants', desc: 'Voice-enabled AI for hands-free operations' }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="p-6 rounded-xl border-2 border-stone-200 hover:border-orange-600 transition-colors"
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
              AI Automation Packages
            </h2>
            <p className="text-lg text-stone-600 mb-12 text-center">
              From simple chatbots to complex AI systems
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border-2 border-stone-200 hover:border-orange-600 transition-all">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Basic Chatbot</h3>
                <div className="text-4xl font-bold text-orange-600 mb-4">₹59,999</div>
                <ul className="space-y-3 mb-8">
                  {['FAQ chatbot', 'Website integration', 'Basic training', 'Email notifications', '30 days support', 'Analytics dashboard'].map((item, i) => (
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

              <div className="bg-white rounded-2xl p-8 border-2 border-orange-600 hover:shadow-xl transition-all relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1.5 bg-orange-600 text-white text-xs font-bold uppercase rounded-full">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Smart Assistant</h3>
                <div className="text-4xl font-bold text-orange-600 mb-4">₹1,29,999</div>
                <ul className="space-y-3 mb-8">
                  {['Advanced AI chatbot', 'Multi-channel support', 'CRM integration', 'Lead qualification', '90 days support', 'Monthly optimization'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-stone-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="block w-full text-center py-3 px-6 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-all shadow-md">
                  Get Started
                </Link>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-stone-200 hover:border-orange-600 transition-all">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Enterprise AI</h3>
                <div className="text-4xl font-bold text-orange-600 mb-4">Custom</div>
                <ul className="space-y-3 mb-8">
                  {['Custom AI models', 'Complex workflows', 'API integrations', 'Team training', 'Priority support', 'Dedicated AI engineer'].map((item, i) => (
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

        {/* ROI Section */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6 text-center">
                Real Results from AI Automation
              </h2>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-black text-orange-600 mb-2">75%</div>
                  <div className="text-stone-600">Faster Response Time</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-orange-600 mb-2">₹45L</div>
                  <div className="text-stone-600">Annual Savings</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-orange-600 mb-2">24/7</div>
                  <div className="text-stone-600">Availability</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-orange-600 mb-2">92%</div>
                  <div className="text-stone-600">Customer Satisfaction</div>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/projects/ai-customer-support"
                  className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700"
                >
                  <span>Read Full Case Study</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">
              How We Implement AI
            </h2>

            <div className="space-y-6">
              {[
                { num: '01', title: 'Analyze', desc: 'Identify repetitive tasks and automation opportunities' },
                { num: '02', title: 'Design', desc: 'Create AI workflows and chatbot conversations' },
                { num: '03', title: 'Build', desc: 'Develop and train AI models with your data' },
                { num: '04', title: 'Deploy & Optimize', desc: 'Launch and continuously improve performance' }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-6 items-start p-6 bg-orange-50 rounded-xl"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center text-xl font-bold">
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
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 text-center">
              AI Technologies We Use
            </h2>
            <p className="text-lg text-stone-600 mb-12 text-center">
              Cutting-edge AI platforms and frameworks
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              {['OpenAI', 'LangChain', 'Python', 'TensorFlow', 'Dialogflow'].map((tech, i) => (
                <div key={i} className="px-6 py-3 bg-white border-2 border-stone-200 rounded-xl font-semibold text-stone-800">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-orange-600 to-orange-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to automate your business?
            </h2>
            <p className="text-xl text-orange-50 mb-10">
              Get a free consultation and discover how AI can save you time and money
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-orange-600 font-bold text-lg rounded-xl hover:bg-orange-50 transition-all shadow-lg hover:scale-105"
            >
              <span>Start Automating</span>
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
