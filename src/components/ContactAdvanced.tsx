'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ContactAdvanced() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section reveal with final visible state
      gsap.fromTo('.contact-header',
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true,
          },
          clearProps: 'transform',
        }
      );

      // Staggered form fields - ensure final visible state
      gsap.fromTo('.form-field',
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 75%',
            once: true,
          },
          clearProps: 'transform',
        }
      );

      // Contact cards 3D entrance with final visible state
      gsap.fromTo('.contact-card',
        {
          y: 80,
          opacity: 0,
          rotationX: -30,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.contact-cards',
            start: 'top 80%',
            once: true,
          },
          clearProps: 'transform',
        }
      );

      // Floating animation for decorative elements
      gsap.to('.contact-float', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Mouse tracking for interactive background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);

    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden" aria-labelledby="contact-heading">
      {/* Interactive Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-orange-400/20 to-pink-500/20 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
          }}
        />
        <div
          className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl transition-all duration-500"
          style={{
            right: `${mousePosition.x * 0.01}px`,
            bottom: `${mousePosition.y * 0.01}px`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="contact-header text-center mb-12">
          <span className="inline-block px-5 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-bold text-primary uppercase tracking-wider mb-6">
            Get In Touch
          </span>
          <h2 id="contact-heading" className="text-5xl md:text-6xl font-black mb-6">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Fill out the form below or reach out directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <div className="contact-form bg-white/80 backdrop-blur-xl border-2 border-orange-200 shadow-2xl rounded-2xl p-6 md:p-8 lg:p-10 relative">
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6" aria-label="Contact form">
              {/* Name Field */}
              <div className="form-field relative">
                <label htmlFor="contact-name" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  aria-required="true"
                  className={`w-full px-4 py-3 bg-white/90 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                    focusedField === 'name'
                      ? 'border-primary shadow-lg shadow-primary/20'
                      : 'border-neutral-300 hover:border-primary/50'
                  }`}
                  placeholder="John Doe"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="form-field">
                  <label htmlFor="contact-email" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    aria-required="true"
                    className={`w-full px-4 py-3 bg-white/90 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                      focusedField === 'email'
                        ? 'border-primary shadow-lg shadow-primary/20'
                        : 'border-neutral-300 hover:border-primary/50'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="contact-phone" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-white/90 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                      focusedField === 'phone'
                        ? 'border-primary shadow-lg shadow-primary/20'
                        : 'border-neutral-300 hover:border-primary/50'
                    }`}
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              {/* Service & Budget */}
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="form-field">
                  <label htmlFor="contact-service" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField(null)}
                    required
                    aria-required="true"
                    className={`w-full px-4 py-3 bg-white/90 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                      focusedField === 'service'
                        ? 'border-primary shadow-lg shadow-primary/20'
                        : 'border-neutral-300 hover:border-primary/50'
                    }`}
                  >
                    <option value="">Select a service</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="ai">AI Solutions</option>
                    <option value="design">UI/UX Design</option>
                    <option value="ecommerce">E-Commerce</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="contact-budget" className="block text-sm font-semibold text-neutral-700 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="contact-budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('budget')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-white/90 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                      focusedField === 'budget'
                        ? 'border-primary shadow-lg shadow-primary/20'
                        : 'border-neutral-300 hover:border-primary/50'
                    }`}
                  >
                    <option value="">Select budget</option>
                    <option value="10-25">₹10,000 - ₹25,000</option>
                    <option value="25-50">₹25,000 - ₹50,000</option>
                    <option value="50-100">₹50,000 - ₹1,00,000</option>
                    <option value="100+">₹1,00,000+</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="form-field">
                <label htmlFor="contact-message" className="block text-sm font-semibold text-neutral-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  aria-required="true"
                  rows={5}
                  className={`w-full px-4 py-3 bg-white/90 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none ${
                    focusedField === 'message'
                      ? 'border-primary shadow-lg shadow-primary/20'
                      : 'border-neutral-300 hover:border-primary/50'
                  }`}
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white font-bold text-lg rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                aria-label="Send message"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {!isSubmitting && (
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl text-green-800 text-center">
                  ✓ Thank you! We'll get back to you within 24 hours.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl text-red-800 text-center">
                  ✗ {errorMessage || 'Failed to send message. Please try again.'}
                </div>
              )}

              <p className="text-center text-sm text-neutral-600">
                We'll respond within 24 hours · No spam, ever
              </p>
            </form>
          </div>

          {/* Contact Information Cards */}
          <div className="space-y-4 md:space-y-6" role="complementary" aria-label="Contact information">
            <div className="contact-cards space-y-4 md:space-y-6">
              {/* Email Card */}
              <a
                href="mailto:info@kashaviinfotech.com"
                className="contact-card bg-white/80 backdrop-blur-xl border-2 border-orange-200/50 shadow-xl rounded-2xl p-6 hover:shadow-2xl hover:border-orange-300 transition-all duration-300 group cursor-pointer block"
                aria-label="Send us an email at info@kashaviinfotech.com"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center text-white text-xl md:text-2xl group-hover:scale-110 transition-transform flex-shrink-0" aria-hidden="true">
                    ✉️
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Email Us</h3>
                    <p className="text-sm text-neutral-600 mb-2">Drop us a line anytime</p>
                    <span className="text-primary font-semibold hover:underline break-words">
                      info@kashaviinfotech.com
                    </span>
                  </div>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+917055070010"
                className="contact-card bg-white/80 backdrop-blur-xl border-2 border-orange-200/50 shadow-xl rounded-2xl p-6 hover:shadow-2xl hover:border-orange-300 transition-all duration-300 group cursor-pointer block"
                aria-label="Call us at +91 70550 70010"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-xl md:text-2xl group-hover:scale-110 transition-transform flex-shrink-0" aria-hidden="true">
                    📞
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Call Us</h3>
                    <p className="text-sm text-neutral-600 mb-2">Mon-Sat, 10am-7pm IST</p>
                    <span className="text-primary font-semibold hover:underline">
                      +91 70550 70010
                    </span>
                  </div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href="https://wa.me/917055070010"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card bg-white/80 backdrop-blur-xl border-2 border-orange-200/50 shadow-xl rounded-2xl p-6 hover:shadow-2xl hover:border-orange-300 transition-all duration-300 group cursor-pointer block"
                aria-label="Chat with us on WhatsApp"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-400 to-teal-500 rounded-2xl flex items-center justify-center text-white text-xl md:text-2xl group-hover:scale-110 transition-transform flex-shrink-0" aria-hidden="true">
                    💬
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">WhatsApp</h3>
                    <p className="text-sm text-neutral-600 mb-2">Quick responses guaranteed</p>
                    <span className="text-primary font-semibold hover:underline">
                      Chat with us
                    </span>
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="contact-card bg-white/80 backdrop-blur-xl border-2 border-orange-200/50 shadow-xl rounded-2xl p-6 hover:shadow-2xl hover:border-orange-300 transition-all duration-300 group cursor-pointer" role="region" aria-label="Our location">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-white text-xl md:text-2xl group-hover:scale-110 transition-transform flex-shrink-0" aria-hidden="true">
                    📍
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Visit Us</h3>
                    <p className="text-sm text-neutral-600 mb-2">Bahadrabad, Haridwar</p>
                    <p className="text-primary font-semibold">
                      Uttarakhand, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Stats */}
            <div className="contact-float bg-white/80 backdrop-blur-xl border-2 border-orange-200/50 shadow-xl rounded-2xl p-6 md:p-8" role="region" aria-labelledby="why-choose-us">
              <h3 id="why-choose-us" className="font-bold text-lg mb-4 md:mb-6 text-center">Why Choose Us?</h3>
              <div className="grid grid-cols-2 gap-4 md:gap-6" role="list" aria-label="Company statistics">
                {[
                  { value: '<24h', label: 'Response Time' },
                  { value: '100%', label: 'Client Satisfaction' },
                  { value: '500+', label: 'Projects Done' },
                  { value: '24/7', label: 'Support' },
                ].map((stat, index) => (
                  <div key={index} className="text-center" role="listitem">
                    <div className="text-2xl md:text-3xl font-black text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-neutral-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
