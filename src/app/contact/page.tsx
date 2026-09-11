'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  contactTabs,
  processSteps,
  officeInfo,
  quickFAQs,
} from './contactData';

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('project');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectName: '',
    portfolio: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const activeTabData = contactTabs.find((tab) => tab.id === activeTab)!;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        projectName: '',
        portfolio: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-canvas">
      {/* Hero + Form */}
      <section className="relative overflow-hidden bg-warm">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />

        <div className="relative container-x pt-16 pb-24 md:pt-20 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left content */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="eyebrow mb-5">Get In Touch</span>
              <h1 className="text-balance mb-5">
                Let&apos;s build something{' '}
                <span className="text-brand-600">amazing together.</span>
              </h1>
              <p className="text-lg text-ink-600 leading-relaxed mb-10">
                Whether you have a detailed brief or just an idea, we&apos;re here to help.
                Reach out and let&apos;s chat.
              </p>

              {/* Quick info */}
              <div className="space-y-3 mb-10">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    ),
                    title: '24-Hour Response',
                    sub: 'We reply within one business day',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="6" />
                        <circle cx="12" cy="12" r="2" />
                      </svg>
                    ),
                    title: 'Free Consultation',
                    sub: '30-minute call, no obligation',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <rect width="18" height="11" x="3" y="11" rx="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    ),
                    title: 'Privacy First',
                    sub: 'Your info stays confidential',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 p-4 bg-white rounded-xl border border-line"
                  >
                    <span className="flex-shrink-0 w-11 h-11 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-semibold text-ink-900 text-sm">{item.title}</p>
                      <p className="text-sm text-ink-600">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct channels */}
              <div>
                <p className="text-label text-ink-500 mb-3">Or reach us directly</p>
                <div className="space-y-2.5 text-sm text-ink-700">
                  <a
                    href="mailto:hello@kashaviinfotech.com"
                    className="flex items-center gap-3 hover:text-brand-700 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-lg bg-white border border-line flex items-center justify-center text-ink-600">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-10 5L2 7" />
                      </svg>
                    </span>
                    <span className="font-medium">hello@kashaviinfotech.com</span>
                  </a>
                  <a
                    href="https://calendly.com/kashavi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-brand-700 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-lg bg-white border border-line flex items-center justify-center text-ink-600">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <span className="font-medium">Book a call on Calendly</span>
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-brand-700 transition-colors"
                  >
                    <span className="w-8 h-8 rounded-lg bg-white border border-line flex items-center justify-center text-ink-600">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12a11.94 11.94 0 0 0 1.7 6.13L0 24l5.99-1.57A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 21.82a9.83 9.83 0 0 1-5.02-1.37l-.36-.21-3.56.93.95-3.47-.23-.36A9.86 9.86 0 1 1 12 21.82zm5.46-7.43c-.3-.15-1.78-.88-2.05-.98s-.48-.15-.68.15-.78.98-.96 1.18-.35.22-.65.07a8.06 8.06 0 0 1-2.37-1.46 8.93 8.93 0 0 1-1.64-2.05c-.17-.3 0-.46.13-.61.13-.13.3-.35.45-.52s.2-.3.3-.5.05-.37-.02-.52-.68-1.64-.93-2.24-.5-.5-.68-.5h-.58a1.12 1.12 0 0 0-.81.38 3.4 3.4 0 0 0-1.06 2.55c0 1.5 1.09 2.96 1.24 3.16s2.13 3.25 5.16 4.56a17.42 17.42 0 0 0 1.71.63 4.13 4.13 0 0 0 1.89.12 3.1 3.1 0 0 0 2.03-1.44 2.51 2.51 0 0 0 .18-1.44c-.07-.13-.27-.2-.57-.35z"/>
                      </svg>
                    </span>
                    <span className="font-medium">WhatsApp us</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-line shadow-card p-2">
                <div className="flex flex-wrap gap-1 p-1.5 bg-ink-100 rounded-2xl mb-6" role="tablist">
                  {contactTabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={activeTab === tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setSubmitStatus('idle');
                      }}
                      className={`flex-1 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-normal ease-out-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                        activeTab === tab.id
                          ? 'bg-white text-ink-900 shadow-soft'
                          : 'text-ink-600 hover:text-ink-900'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="p-6 md:p-8"
                  >
                    <div className="mb-6">
                      <h2 className="text-xl md:text-2xl font-semibold text-ink-900 tracking-tight mb-2">
                        {activeTabData.title}
                      </h2>
                      <p className="text-ink-600 text-sm">
                        {activeTabData.description}
                      </p>
                    </div>

                    {submitStatus === 'success' ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-10"
                        role="status"
                      >
                        <div className="inline-flex w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 items-center justify-center mb-4">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-ink-900 mb-2">Message sent!</h3>
                        <p className="text-ink-600 mb-6 text-sm leading-relaxed max-w-md mx-auto">
                          {activeTabData.successMessage}
                        </p>
                        <button
                          type="button"
                          onClick={() => setSubmitStatus('idle')}
                          className="btn btn-secondary btn-sm"
                        >
                          Send Another Message
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          {activeTabData.fields.includes('name') && (
                            <div>
                              <label htmlFor="name" className="form-label">Name *</label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="form-field"
                                placeholder="Your name"
                              />
                            </div>
                          )}
                          {activeTabData.fields.includes('email') && (
                            <div>
                              <label htmlFor="email" className="form-label">Email *</label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="form-field"
                                placeholder="your@email.com"
                              />
                            </div>
                          )}
                        </div>

                        {activeTabData.fields.includes('projectName') && (
                          <div>
                            <label htmlFor="projectName" className="form-label">Project Name</label>
                            <input
                              type="text"
                              id="projectName"
                              name="projectName"
                              value={formData.projectName}
                              onChange={handleChange}
                              className="form-field"
                              placeholder="Your project name"
                            />
                          </div>
                        )}

                        {activeTabData.fields.includes('portfolio') && (
                          <div>
                            <label htmlFor="portfolio" className="form-label">Portfolio / LinkedIn</label>
                            <input
                              type="url"
                              id="portfolio"
                              name="portfolio"
                              value={formData.portfolio}
                              onChange={handleChange}
                              className="form-field"
                              placeholder="https://..."
                            />
                          </div>
                        )}

                        {activeTabData.fields.includes('subject') && (
                          <div>
                            <label htmlFor="subject" className="form-label">Subject</label>
                            <input
                              type="text"
                              id="subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              className="form-field"
                              placeholder="What's this about?"
                            />
                          </div>
                        )}

                        {activeTabData.fields.includes('message') && (
                          <div>
                            <label htmlFor="message" className="form-label">Message *</label>
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              rows={5}
                              className="form-field resize-none"
                              placeholder={activeTabData.messagePlaceholder}
                            />
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn btn-primary btn-lg w-full"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="4" />
                                <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              {activeTabData.submitText}
                              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                              </svg>
                            </>
                          )}
                        </button>

                        <p className="text-xs text-ink-500 text-center">
                          🔒 Your information is safe with us. We&apos;ll never spam you.
                        </p>
                      </form>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process + FAQ + Office */}
      <section className="section bg-surface">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Process */}
            <div>
              <div className="section-heading">
                <span className="eyebrow mb-5">What Happens Next</span>
                <h2 className="text-balance">From first hello to launch day</h2>
              </div>

              <ol className="space-y-3">
                {processSteps.map((step) => (
                  <li
                    key={step.number}
                    className="flex gap-4 items-start p-5 bg-white rounded-2xl border border-line"
                  >
                    <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center font-bold text-sm border border-brand-100">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-semibold text-ink-900 mb-1">{step.title}</h3>
                      <p className="text-sm text-ink-600 leading-relaxed">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* FAQ + Office */}
            <div className="space-y-12">
              <div>
                <div className="section-heading">
                  <span className="eyebrow mb-5">Quick Answers</span>
                  <h2 className="text-balance">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-3">
                  {quickFAQs.map((faq) => (
                    <div key={faq.question} className="p-5 bg-white rounded-2xl border border-line">
                      <p className="font-semibold text-ink-900 mb-1.5">{faq.question}</p>
                      <p className="text-sm text-ink-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="section-heading">
                  <span className="eyebrow mb-5">Office</span>
                  <h2 className="text-balance">Where We Are</h2>
                </div>
                <div className="p-6 bg-white rounded-2xl border border-line space-y-5">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-semibold text-ink-900 mb-1">Location</p>
                      <p className="text-sm text-ink-600">{officeInfo.location}</p>
                      <p className="text-xs text-ink-500 mt-1">{officeInfo.regions}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-semibold text-ink-900 mb-1">Business Hours</p>
                      <p className="text-sm text-ink-600">{officeInfo.hours}</p>
                      <p className="text-sm text-ink-600">{officeInfo.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <h2 className="text-balance text-white mb-4">
              Still not sure? Let&apos;s talk it through.
            </h2>
            <p className="text-lg text-white/85 mb-8 leading-relaxed">
              Book a free call with us. No pressure, just honest conversation about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/projects" className="btn bg-white text-brand-700 hover:bg-brand-50 btn-lg shadow-lift">
                View Our Work
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <Link href="/about" className="btn btn-lg border-2 border-white/30 bg-transparent text-white hover:bg-white/10">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
