'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { scrollReveal, staggerFadeIn, prefersReducedMotion } from '@/lib/animations';

gsap.registerPlugin(ScrollTrigger);

interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  pricing: {
    starter: { price: string; features: string[] };
    professional: { price: string; features: string[] };
    enterprise: { price: string; features: string[] };
  };
  technologies: string[];
  processSteps: { title: string; description: string }[];
  themeColor: string;
}

const servicesData: ServiceDetail[] = [
  {
    id: 'web-development',
    title: 'Website Development',
    tagline: 'Professional websites that drive growth',
    description: 'Custom website development built for performance, conversions, and scalability. From landing pages to complex web applications, we create digital experiences that help your business grow.',
    features: [
      'Responsive design (mobile-first)',
      'SEO optimization built-in',
      'Fast loading (90+ PageSpeed)',
      'Secure & reliable hosting',
      'Content management system',
      'Analytics integration'
    ],
    deliverables: [
      'Fully responsive website',
      'Source code & documentation',
      'CMS training session',
      '30 days post-launch support',
      'SEO foundation setup',
      'Performance optimization'
    ],
    timeline: '4-8 weeks',
    pricing: {
      starter: {
        price: '₹42,999',
        features: ['5-page website', 'Mobile responsive', 'Basic SEO', 'Contact form', '1 revision round']
      },
      professional: {
        price: '₹89,999',
        features: ['10-page website', 'Custom design', 'Advanced SEO', 'CMS integration', '3 revision rounds', 'Analytics setup']
      },
      enterprise: {
        price: 'Custom',
        features: ['Unlimited pages', 'Custom features', 'Priority support', 'Ongoing maintenance', 'Dedicated manager', 'SLA guarantee']
      }
    },
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    processSteps: [
      { title: 'Discovery', description: 'Understand your business, audience, and goals' },
      { title: 'Design', description: 'Create wireframes and visual designs for approval' },
      { title: 'Development', description: 'Build your website with clean, maintainable code' },
      { title: 'Launch', description: 'Deploy, test, and hand over with training' }
    ],
    themeColor: '#3B82F6'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Development',
    tagline: 'Online stores that convert browsers into buyers',
    description: 'Full-featured e-commerce solutions built for conversions. Whether you need a Shopify store or custom platform, we build online shopping experiences that drive revenue.',
    features: [
      'Product catalog management',
      'Secure payment gateway',
      'Inventory tracking',
      'Order management system',
      'Customer accounts',
      'Mobile shopping experience'
    ],
    deliverables: [
      'Complete online store',
      'Payment gateway setup',
      'Product import/migration',
      'Admin training',
      '60 days support',
      'Marketing integrations'
    ],
    timeline: '6-10 weeks',
    pricing: {
      starter: {
        price: '₹67,999',
        features: ['Up to 50 products', 'Shopify/WooCommerce', 'Payment gateway', 'Basic design', '2 revision rounds']
      },
      professional: {
        price: '₹1,49,999',
        features: ['Up to 200 products', 'Custom design', 'Advanced features', 'Marketing tools', 'Analytics', '4 revision rounds']
      },
      enterprise: {
        price: 'Custom',
        features: ['Unlimited products', 'Custom platform', 'Multi-vendor', 'API integrations', 'Dedicated support', 'SLA guarantee']
      }
    },
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'Next.js', 'PostgreSQL'],
    processSteps: [
      { title: 'Planning', description: 'Define product structure and shopping flow' },
      { title: 'Design', description: 'Create conversion-optimized store design' },
      { title: 'Build', description: 'Develop store with all features and integrations' },
      { title: 'Launch', description: 'Go live with full testing and training' }
    ],
    themeColor: '#10B981'
  },
  {
    id: 'seo-marketing',
    title: 'SEO & Digital Marketing',
    tagline: 'Get found by customers who are ready to buy',
    description: 'Strategic SEO and digital marketing that drives qualified traffic and measurable ROI. We help businesses rank higher, attract more visitors, and convert them into customers.',
    features: [
      'Keyword research & strategy',
      'On-page SEO optimization',
      'Technical SEO audit & fixes',
      'Content creation',
      'Link building campaigns',
      'Monthly performance reports'
    ],
    deliverables: [
      'SEO audit report',
      'Keyword strategy document',
      'Optimized content',
      'Backlink campaign',
      'Monthly analytics reports',
      'Ongoing optimization'
    ],
    timeline: '3-6 months (ongoing)',
    pricing: {
      starter: {
        price: '₹25,000/mo',
        features: ['10 keywords', 'On-page SEO', 'Monthly report', '2 blog posts', 'Basic analytics']
      },
      professional: {
        price: '₹50,000/mo',
        features: ['25 keywords', 'Technical SEO', 'Link building', '4 blog posts', 'Advanced tracking', 'Competitor analysis']
      },
      enterprise: {
        price: 'Custom',
        features: ['Unlimited keywords', 'Full-service SEO', 'Content team', 'PR outreach', 'Dedicated manager', 'Weekly reports']
      }
    },
    technologies: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Google Search Console', 'Screaming Frog'],
    processSteps: [
      { title: 'Audit', description: 'Analyze current SEO performance and opportunities' },
      { title: 'Strategy', description: 'Build keyword and content strategy' },
      { title: 'Execute', description: 'Optimize site and create content' },
      { title: 'Monitor', description: 'Track rankings and refine approach' }
    ],
    themeColor: '#8B5CF6'
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    tagline: 'Automate repetitive work and scale faster',
    description: 'Custom AI solutions and business automation that save time and reduce costs. From chatbots to workflow automation, we help businesses work smarter with artificial intelligence.',
    features: [
      'AI chatbot development',
      'WhatsApp integration',
      'Workflow automation',
      'Data processing',
      'Custom AI models',
      'System integrations'
    ],
    deliverables: [
      'Trained AI system',
      'Integration & deployment',
      'Documentation',
      'Training session',
      '90 days support',
      'Performance monitoring'
    ],
    timeline: '4-12 weeks',
    pricing: {
      starter: {
        price: '₹49,999',
        features: ['Basic chatbot', 'Rule-based logic', 'Web integration', '100 conversations/mo', 'Email support']
      },
      professional: {
        price: '₹1,24,999',
        features: ['AI chatbot', 'Natural language', 'Multi-platform', '1000 conversations/mo', 'Custom training', 'Priority support']
      },
      enterprise: {
        price: 'Custom',
        features: ['Custom AI solution', 'Advanced ML models', 'Unlimited usage', 'API access', 'Dedicated team', 'SLA guarantee']
      }
    },
    technologies: ['OpenAI', 'LangChain', 'Python', 'TensorFlow', 'WhatsApp API'],
    processSteps: [
      { title: 'Discovery', description: 'Identify automation opportunities' },
      { title: 'Design', description: 'Map workflows and conversation flows' },
      { title: 'Train', description: 'Build and train AI models' },
      { title: 'Deploy', description: 'Launch and monitor performance' }
    ],
    themeColor: '#F97316'
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    tagline: 'Native-quality apps for iOS and Android',
    description: 'Cross-platform mobile applications that deliver native performance. One codebase for iOS and Android, with all the features your users expect.',
    features: [
      'iOS & Android apps',
      'Native performance',
      'Offline functionality',
      'Push notifications',
      'App Store deployment',
      'Backend integration'
    ],
    deliverables: [
      'iOS & Android apps',
      'Source code',
      'Backend APIs',
      'App Store submission',
      '60 days support',
      'User documentation'
    ],
    timeline: '8-16 weeks',
    pricing: {
      starter: {
        price: '₹1,49,999',
        features: ['Basic app features', 'Standard UI', 'iOS & Android', 'Basic backend', '2 revision rounds']
      },
      professional: {
        price: '₹2,99,999',
        features: ['Advanced features', 'Custom design', 'Push notifications', 'Analytics', 'Admin panel', '4 revision rounds']
      },
      enterprise: {
        price: 'Custom',
        features: ['Complex features', 'Custom backend', 'Real-time features', 'Multiple integrations', 'Dedicated team', 'SLA guarantee']
      }
    },
    technologies: ['React Native', 'Flutter', 'Firebase', 'Node.js', 'AWS'],
    processSteps: [
      { title: 'Planning', description: 'Define features and user flows' },
      { title: 'Design', description: 'Create UI/UX for mobile experience' },
      { title: 'Development', description: 'Build app and backend systems' },
      { title: 'Launch', description: 'Deploy to App Store and Play Store' }
    ],
    themeColor: '#EC4899'
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    tagline: 'Tailored solutions for unique business needs',
    description: 'Custom software applications built specifically for your business processes. From CRM systems to internal tools, we create software that gives you competitive advantage.',
    features: [
      'Requirements analysis',
      'Custom architecture',
      'Database design',
      'User management',
      'Reporting & analytics',
      'Third-party integrations'
    ],
    deliverables: [
      'Custom software solution',
      'Source code & docs',
      'User training',
      'Deployment support',
      '90 days warranty',
      'Maintenance plan'
    ],
    timeline: '12-24 weeks',
    pricing: {
      starter: {
        price: '₹2,49,999',
        features: ['Basic features', 'Up to 3 user roles', 'Standard database', 'Web-based', 'Basic support']
      },
      professional: {
        price: '₹4,99,999',
        features: ['Advanced features', 'Custom workflows', 'API integrations', 'Reporting', 'Mobile access', 'Priority support']
      },
      enterprise: {
        price: 'Custom',
        features: ['Enterprise scale', 'Complex integrations', 'Advanced security', 'Custom infrastructure', 'Dedicated team', 'SLA guarantee']
      }
    },
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    processSteps: [
      { title: 'Analysis', description: 'Document requirements and workflows' },
      { title: 'Architecture', description: 'Design system architecture' },
      { title: 'Development', description: 'Build in sprints with regular demos' },
      { title: 'Deployment', description: 'Launch with training and handover' }
    ],
    themeColor: '#6366F1'
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'professional' | 'enterprise'>('professional');
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesGridRef = useRef<HTMLDivElement>(null);

  // Animation setup with proper utilities
  useEffect(() => {
    if (!heroRef.current || !servicesGridRef.current) return;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion()) {
        // Hero animation using utility
        scrollReveal('.hero-content', {
          trigger: heroRef.current,
          start: 'top 80%',
          duration: 0.8,
          stagger: 0.1
        });

        // Service cards stagger animation
        staggerFadeIn('.service-card', {
          trigger: servicesGridRef.current,
          start: 'top 75%',
          stagger: 0.12
        });
      }
    }, [heroRef, servicesGridRef]);

    return () => ctx.revert();
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedService]);

  return (
    <section className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div ref={heroRef} className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="hero-content text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-neutral-600" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                SERVICES
              </span>
              <div className="w-12 h-[1px] bg-neutral-600" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Digital solutions built to
              <br />
              <span className="text-primary">move your business forward.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto mb-8">
              From websites to custom software, we deliver solutions that drive growth.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 md:py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
              Click any service to explore details
            </h2>
            <p className="text-lg text-neutral-600">
              Pricing, timelines, deliverables, and what to expect
            </p>
          </div>

          <div ref={servicesGridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <button
                key={service.id}
                onClick={() => {
                  setSelectedService(service);
                  setSelectedPlan('professional');
                }}
                className="service-card bg-white border-2 border-neutral-200 rounded-2xl p-8 text-left hover:border-primary hover:shadow-2xl transition-all duration-300 group min-h-[340px] flex flex-col"
                style={{
                  ['--service-color' as string]: service.themeColor
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: `${service.themeColor}15` }}
                >
                  <div
                    className="w-7 h-7 rounded-lg"
                    style={{ backgroundColor: service.themeColor }}
                  />
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-base text-neutral-600 mb-4 font-medium">
                  {service.tagline}
                </p>
                <p className="text-sm text-neutral-600 mb-6 leading-relaxed flex-1">
                  {service.description.substring(0, 120)}...
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-neutral-700">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Timeline: {service.timeline}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-700">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>From {service.pricing.starter.price}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  <span>View Full Details</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-20 md:py-24 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Book a free consultation and we'll help you figure out the right solution for your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-semibold text-lg rounded-xl hover:bg-orange-600 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <span>Book Free Consultation</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Enhanced Service Detail Modal with Animation */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white rounded-3xl w-full max-w-6xl shadow-2xl max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with gradient */}
              <div
                className="px-8 pt-8 pb-6 relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${selectedService.themeColor}15 0%, ${selectedService.themeColor}05 100%)`
                }}
              >
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110 z-10"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="pr-16">
                  <div
                    className="inline-block w-16 h-16 rounded-2xl mb-4"
                    style={{ backgroundColor: `${selectedService.themeColor}20` }}
                  >
                    <div
                      className="w-full h-full rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${selectedService.themeColor}40` }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg"
                        style={{ backgroundColor: selectedService.themeColor }}
                      />
                    </div>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-3 leading-tight">
                    {selectedService.title}
                  </h2>
                  <p className="text-xl md:text-2xl text-neutral-600 font-medium">
                    {selectedService.tagline}
                  </p>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto px-8 py-8">
                {/* Description */}
                <div className="mb-10">
                  <p className="text-lg text-neutral-700 leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">What's Included</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedService.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors"
                      >
                        <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: selectedService.themeColor }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-neutral-700 text-base font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="mb-10 rounded-2xl p-6 border-2" style={{
                  borderColor: `${selectedService.themeColor}30`,
                  backgroundColor: `${selectedService.themeColor}08`
                }}>
                  <div className="flex items-center gap-4 mb-3">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: selectedService.themeColor }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-xl font-bold text-neutral-900">Typical Timeline</h3>
                  </div>
                  <p className="text-3xl font-black" style={{ color: selectedService.themeColor }}>{selectedService.timeline}</p>
                </div>

                {/* Pricing */}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">Pricing Plans</h3>

                  {/* Plan Selector */}
                  <div className="flex gap-2 mb-6 bg-neutral-100 p-1.5 rounded-xl">
                    {(['starter', 'professional', 'enterprise'] as const).map((plan) => (
                      <button
                        key={plan}
                        onClick={() => setSelectedPlan(plan)}
                        className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all capitalize ${
                          selectedPlan === plan
                            ? 'bg-white text-neutral-900 shadow-md'
                            : 'text-neutral-600 hover:text-neutral-900'
                        }`}
                      >
                        {plan}
                      </button>
                    ))}
                  </div>

                  {/* Plan Details */}
                  <motion.div
                    key={selectedPlan}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-2xl p-8 border-2"
                    style={{
                      background: `linear-gradient(135deg, ${selectedService.themeColor}08 0%, ${selectedService.themeColor}03 100%)`,
                      borderColor: `${selectedService.themeColor}30`
                    }}
                  >
                    <div className="text-5xl font-black text-neutral-900 mb-6">
                      {selectedService.pricing[selectedPlan].price}
                    </div>
                    <ul className="space-y-4">
                      {selectedService.pricing[selectedPlan].features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: selectedService.themeColor }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-neutral-700 text-base font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Process */}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">Our Process</h3>
                  <div className="relative">
                    {/* Timeline line */}
                    <div
                      className="absolute left-6 top-6 bottom-6 w-1 rounded-full hidden md:block"
                      style={{ backgroundColor: `${selectedService.themeColor}20` }}
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      {selectedService.processSteps.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          className="flex gap-4 relative p-4 rounded-xl hover:bg-neutral-50 transition-colors"
                        >
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0 relative z-10 shadow-md text-white"
                            style={{ backgroundColor: selectedService.themeColor }}
                          >
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-neutral-900 mb-2 text-lg">{step.title}</h4>
                            <p className="text-sm text-neutral-600 leading-relaxed">{step.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedService.technologies.map((tech, index) => {
                      const techSlugMap: Record<string, string> = {
                        'Next.js': 'nextdotjs',
                        'React': 'react',
                        'TypeScript': 'typescript',
                        'Tailwind CSS': 'tailwindcss',
                        'Node.js': 'nodedotjs',
                        'Shopify': 'shopify',
                        'WooCommerce': 'woocommerce',
                        'Stripe': 'stripe',
                        'PostgreSQL': 'postgresql',
                        'Google Analytics': 'googleanalytics',
                        'SEMrush': 'semrush',
                        'Ahrefs': 'ahrefs',
                        'Google Search Console': 'google',
                        'OpenAI': 'openai',
                        'LangChain': 'chainlink',
                        'Python': 'python',
                        'TensorFlow': 'tensorflow',
                        'WhatsApp API': 'whatsapp',
                        'React Native': 'react',
                        'Flutter': 'flutter',
                        'Firebase': 'firebase',
                        'AWS': 'amazonaws',
                        'Redis': 'redis',
                        'Docker': 'docker'
                      };

                      const slug = techSlugMap[tech] || tech.toLowerCase().replace(/\s+/g, '').replace('.', '');

                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05, duration: 0.2 }}
                          className="flex items-center gap-2 px-4 py-2.5 bg-neutral-100 rounded-lg hover:bg-neutral-200 transition-all hover:scale-105"
                        >
                          <img
                            src={`https://cdn.simpleicons.org/${slug}/000000`}
                            alt=""
                            className="w-5 h-5"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.style.display = 'none';
                            }}
                          />
                          <span className="font-medium text-neutral-700">{tech}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-neutral-900 mb-6">What You'll Receive</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {selectedService.deliverables.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-neutral-50 transition-colors"
                      >
                        <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: selectedService.themeColor }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-neutral-700 text-base font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="px-8 py-6 border-t border-neutral-200 bg-neutral-50">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="flex-1 py-4 text-center font-bold text-lg rounded-xl transition-all hover:scale-105 text-white shadow-lg"
                    style={{ backgroundColor: selectedService.themeColor }}
                  >
                    Get Started
                  </Link>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 py-4 bg-white text-neutral-900 text-center font-bold text-lg rounded-xl hover:bg-neutral-100 transition-colors border-2 border-neutral-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
