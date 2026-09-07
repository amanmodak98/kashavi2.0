'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { prefersReducedMotion } from '@/lib/animations';
import {
  contactTabs,
  contactMethods,
  processSteps,
  officeInfo,
  quickFAQs
} from './contactData';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('project');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectName: '',
    portfolio: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const activeTabData = contactTabs.find(tab => tab.id === activeTab)!;

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion()) {
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

        tl.fromTo('.hero-content',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        projectName: '',
        portfolio: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero + Form Combined Section */}
      <section ref={heroRef} className="pt-24 pb-12 px-6 lg:px-12 bg-gradient-to-br from-orange-50 via-orange-50 to-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[45%_55%] gap-12 items-start">
            {/* Left: Hero Content */}
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-stone-400" />
                <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
                  GET IN TOUCH
                </span>
              </div>

              <h1 className="hero-content text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight">
                Let's build something<br />
                <span className="text-orange-500">amazing together.</span>
              </h1>

              <p className="hero-content text-lg text-stone-600 leading-relaxed mb-8">
                Whether you have a detailed brief or just an idea, we're here to help.
                Reach out and let's chat.
              </p>

              {/* Quick Info Cards */}
              <div className="hero-content space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-200">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                    ⏱️
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">24-Hour Response</p>
                    <p className="text-sm text-stone-600">We reply within one business day</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-200">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Free Consultation</p>
                    <p className="text-sm text-stone-600">30-minute call, no obligation</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-200">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
                    🔒
                  </div>
                  <div>
                    <p className="font-semibold text-stone-900">Privacy First</p>
                    <p className="text-sm text-stone-600">Your info stays confidential</p>
                  </div>
                </div>
              </div>

              {/* Alternative Methods - Compact */}
              <div className="hero-content">
                <p className="text-sm font-semibold text-stone-700 mb-3">Or reach us directly:</p>
                <div className="space-y-2">
                  <a href="mailto:hello@kashaviinfotech.com" className="flex items-center gap-3 text-sm text-stone-600 hover:text-orange-500 transition-colors">
                    <span className="text-lg">📧</span>
                    <span>hello@kashaviinfotech.com</span>
                  </a>
                  <a href="https://calendly.com/kashavi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-stone-600 hover:text-orange-500 transition-colors">
                    <span className="text-lg">📞</span>
                    <span>Book a call on Calendly</span>
                  </a>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-stone-600 hover:text-orange-500 transition-colors">
                    <span className="text-lg">💬</span>
                    <span>WhatsApp us</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Tabbed Form */}
            <div>
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 p-2 bg-white rounded-2xl border-2 border-stone-200 shadow-sm">
                {contactTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setSubmitStatus('idle');
                    }}
                    className={`flex-1 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'bg-transparent text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Form Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-8 border-2 border-stone-200 shadow-lg"
                >
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-stone-900 mb-2">
                      {activeTabData.title}
                    </h2>
                    <p className="text-stone-600 text-sm">
                      {activeTabData.description}
                    </p>
                  </div>

                  {submitStatus === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="text-5xl mb-4">🎉</div>
                      <h3 className="text-xl font-bold text-stone-900 mb-2">Message sent!</h3>
                      <p className="text-stone-600 mb-6 text-sm leading-relaxed">
                        {activeTabData.successMessage}
                      </p>
                      <button
                        onClick={() => setSubmitStatus('idle')}
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all text-sm"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        {/* Name Field */}
                        {activeTabData.fields.includes('name') && (
                          <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-stone-700 mb-1.5">
                              Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-2.5 rounded-lg border-2 border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-sm"
                              placeholder="Your name"
                            />
                          </div>
                        )}

                        {/* Email Field */}
                        {activeTabData.fields.includes('email') && (
                          <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-1.5">
                              Email *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-2.5 rounded-lg border-2 border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-sm"
                              placeholder="your@email.com"
                            />
                          </div>
                        )}
                      </div>

                      {/* Project Name Field (Support) */}
                      {activeTabData.fields.includes('projectName') && (
                        <div>
                          <label htmlFor="projectName" className="block text-sm font-semibold text-stone-700 mb-1.5">
                            Project Name
                          </label>
                          <input
                            type="text"
                            id="projectName"
                            name="projectName"
                            value={formData.projectName}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border-2 border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-sm"
                            placeholder="Your project name"
                          />
                        </div>
                      )}

                      {/* Portfolio Field (Careers) */}
                      {activeTabData.fields.includes('portfolio') && (
                        <div>
                          <label htmlFor="portfolio" className="block text-sm font-semibold text-stone-700 mb-1.5">
                            Portfolio / LinkedIn
                          </label>
                          <input
                            type="url"
                            id="portfolio"
                            name="portfolio"
                            value={formData.portfolio}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border-2 border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-sm"
                            placeholder="https://..."
                          />
                        </div>
                      )}

                      {/* Subject Field (General) */}
                      {activeTabData.fields.includes('subject') && (
                        <div>
                          <label htmlFor="subject" className="block text-sm font-semibold text-stone-700 mb-1.5">
                            Subject
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-2.5 rounded-lg border-2 border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all text-sm"
                            placeholder="What's this about?"
                          />
                        </div>
                      )}

                      {/* Message Field */}
                      {activeTabData.fields.includes('message') && (
                        <div>
                          <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-1.5">
                            Message *
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full px-4 py-2.5 rounded-lg border-2 border-stone-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none text-sm"
                            placeholder={activeTabData.messagePlaceholder}
                          />
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 px-6 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 disabled:bg-stone-300 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.01]"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          activeTabData.submitText
                        )}
                      </button>

                      <p className="text-xs text-stone-500 text-center">
                        🔒 Your information is safe with us. We'll never spam you.
                      </p>
                    </form>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next + FAQ Combined */}
      <section className="py-12 px-6 lg:px-12 bg-stone-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Process Timeline */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">What Happens Next</h2>
              <div className="space-y-4">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="flex gap-4 items-start p-4 bg-white rounded-xl border border-stone-200 hover:border-orange-300 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-stone-900 mb-1">{step.title}</h3>
                      <p className="text-sm text-stone-600 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick FAQ + Office Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-6">Quick Questions</h2>
                <div className="space-y-3">
                  {quickFAQs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 border border-stone-200">
                      <p className="font-semibold text-stone-900 mb-1.5 text-sm">{faq.question}</p>
                      <p className="text-sm text-stone-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-6">Where We Are</h2>
                <div className="bg-white rounded-xl p-6 border border-stone-200 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-semibold text-stone-900 text-sm">Location</p>
                      <p className="text-sm text-stone-600">{officeInfo.location}</p>
                      <p className="text-xs text-stone-500">{officeInfo.regions}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🕐</span>
                    <div>
                      <p className="font-semibold text-stone-900 text-sm">Business Hours</p>
                      <p className="text-sm text-stone-600">{officeInfo.hours}</p>
                      <p className="text-sm text-stone-600">{officeInfo.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 px-6 lg:px-12 bg-gradient-to-br from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Still not sure? Let's talk it through.
          </h2>
          <p className="text-lg text-orange-50 mb-8">
            Book a free call with us. No pressure, just honest conversation about your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-orange-600 font-bold rounded-xl hover:bg-orange-50 transition-all shadow-lg hover:scale-105"
            >
              <span>View Our Work</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white border-2 border-white/20 font-bold rounded-xl hover:bg-orange-700 transition-all"
            >
              <span>Learn About Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
