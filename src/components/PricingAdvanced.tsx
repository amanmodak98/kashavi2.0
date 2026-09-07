'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pricingPlans = [
  {
    name: 'Starter',
    price: '₹15,000',
    period: '/month',
    description: 'Perfect for small businesses and startups getting started',
    features: [
      { text: '1 Website/Landing Page', included: true },
      { text: 'Responsive Design', included: true },
      { text: 'Basic SEO Setup', included: true },
      { text: 'Contact Form Integration', included: true },
      { text: 'Monthly Reports', included: true },
      { text: 'Email Support', included: true },
      { text: 'Advanced Analytics', included: false },
      { text: 'Custom Integrations', included: false },
      { text: 'Priority Support', included: false },
    ],
    color: 'from-blue-400 to-cyan-500',
    popular: false,
  },
  {
    name: 'Growth',
    price: '₹45,000',
    period: '/month',
    description: 'Everything you need to scale your business rapidly',
    features: [
      { text: 'Up to 3 Websites/Apps', included: true },
      { text: 'Advanced UI/UX Design', included: true },
      { text: 'Complete SEO Package', included: true },
      { text: 'Payment Gateway Integration', included: true },
      { text: 'Weekly Performance Reports', included: true },
      { text: 'Email & Chat Support', included: true },
      { text: 'Advanced Analytics Dashboard', included: true },
      { text: 'API Integrations', included: true },
      { text: 'Priority Support', included: false },
    ],
    color: 'from-orange-400 to-pink-500',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '₹90,000',
    period: '/month',
    description: 'For organizations that need unlimited power and control',
    features: [
      { text: 'Unlimited Projects', included: true },
      { text: 'Custom Design System', included: true },
      { text: 'Enterprise SEO & Marketing', included: true },
      { text: 'Advanced Security Features', included: true },
      { text: 'Real-time Performance Monitoring', included: true },
      { text: '24/7 Dedicated Support', included: true },
      { text: 'AI & ML Integration', included: true },
      { text: 'Custom API Development', included: true },
      { text: 'Dedicated Account Manager', included: true },
    ],
    color: 'from-purple-400 to-pink-500',
    popular: false,
  },
];

export function PricingAdvanced() {
  const sectionRef = useRef<HTMLElement>(null);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation with final visible state
      gsap.fromTo('.pricing-header',
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

      // 3D card entrance with proper final state
      gsap.fromTo('.pricing-card',
        {
          opacity: 0,
          y: 150,
          rotationX: -45,
          transformOrigin: '50% 100%',
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.pricing-grid',
            start: 'top 75%',
            once: true,
          },
          clearProps: 'transform',
        }
      );

      // Floating animation - starts after cards are visible
      gsap.to('.pricing-card', {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    gsap.to(card, {
      rotationX: -rotateX,
      rotationY: rotateY,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 1500,
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-pink-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="pricing-header text-center mb-12">
          <span className="inline-block px-5 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-bold text-primary uppercase tracking-wider mb-6">
            Pricing Plans
          </span>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Choose Your <span className="text-gradient">Growth Plan</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-10">
            Transparent pricing with no hidden fees. Scale up or down as your business grows.
          </p>

          {/* Billing Toggle with 3D effect */}
          <div className="inline-flex items-center gap-4 glass-card p-2">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105'
                  : 'text-neutral-600 hover:text-primary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105'
                  : 'text-neutral-600 hover:text-primary'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-success text-white text-xs font-bold rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards with 3D effect */}
        <div className="pricing-grid grid md:grid-cols-3 gap-6 md:gap-8 perspective-1500 items-stretch">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="pricing-card preserve-3d relative cursor-pointer h-full"
              style={{ transformStyle: 'preserve-3d' }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => setHoveredCard(index)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-white text-sm font-bold rounded-full shadow-lg whitespace-nowrap">
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`glass-card p-8 h-full relative overflow-hidden group flex flex-col ${
                  plan.popular ? 'border-2 border-primary' : ''
                } ${plan.popular ? 'pt-10' : ''}`}
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold mb-2 text-neutral-900 group-hover:text-primary transition-colors">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-6">{plan.description}</p>

                  {/* Price with animated counting effect */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-black text-gradient">
                        {billingCycle === 'yearly'
                          ? `₹${Math.round(parseInt(plan.price.replace(/[₹,]/g, '')) * 0.83).toLocaleString('en-IN')}`
                          : plan.price}
                      </span>
                      <span className="text-neutral-600 font-medium">{plan.period}</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-success mt-2">Save ₹{Math.round(parseInt(plan.price.replace(/[₹,]/g, '')) * 0.17 * 12).toLocaleString('en-IN')}/year</p>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div
                          className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                            feature.included
                              ? 'bg-success/10 text-success'
                              : 'bg-neutral-200 text-neutral-400'
                          }`}
                        >
                          {feature.included ? (
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </div>
                        <span
                          className={`text-sm ${
                            feature.included ? 'text-neutral-700' : 'text-neutral-400'
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                        : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Plan CTA */}
        <div className="mt-12 text-center">
          <div className="glass-card p-10 max-w-3xl mx-auto hover:scale-105 transition-transform duration-500">
            <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-neutral-600 mb-6">
              We build tailored solutions for enterprises with unique requirements. Let's discuss your needs.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold hover:shadow-xl transition-all duration-300">
              Contact Sales Team
            </button>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: '💳', title: 'Flexible Payment', text: 'Monthly or yearly billing' },
            { icon: '🔒', title: 'Money-Back Guarantee', text: '30-day refund policy' },
            { icon: '📞', title: 'Expert Support', text: '24/7 dedicated assistance' },
          ].map((item, index) => (
            <div key={index} className="text-center glass-card p-6 hover:scale-105 transition-transform cursor-default">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-neutral-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
