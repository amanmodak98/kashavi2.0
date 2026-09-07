'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AIShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ai-header', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      gsap.from('.ai-card', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.ai-grid',
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const aiServices = [
    {
      icon: '🤖',
      title: 'AI Chatbots',
      description: 'Intelligent chatbots that automate customer support and lead generation.',
      features: '24/7 Customer Support · Lead Qualification · CRM Integration',
    },
    {
      icon: '✍️',
      title: 'AI Content Engine',
      description: 'Generate blogs, social media posts, emails, and marketing content instantly.',
      features: 'Blog Writing · SEO Content · Email Generation',
    },
    {
      icon: '🎤',
      title: 'AI Voice Agents',
      description: 'AI-powered voice assistants for customer support and sales.',
      features: 'Voice Calling · Appointment Booking · Call Automation',
    },
    {
      icon: '⚡',
      title: 'AI Workflow Automation',
      description: 'Automate repetitive business processes using AI.',
      features: 'CRM Automation · Email Automation · Lead Routing',
    },
    {
      icon: '📄',
      title: 'AI Document Processing',
      description: 'Extract and analyze information from documents automatically.',
      features: 'OCR · Invoice Processing · PDF Extraction',
    },
    {
      icon: '📊',
      title: 'Predictive Analytics',
      description: 'Forecast business trends using machine learning.',
      features: 'Sales Forecasting · Customer Insights · Machine Learning',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden" id="ai-solutions">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="ai-header text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-semibold text-accent-light uppercase tracking-wider mb-6">
            AI
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Intelligent systems that<br />work while you sleep
          </h2>
          <p className="text-xl text-gray-light">
            Agents, automation and predictive intelligence built into every stage of your funnel.
          </p>
        </div>

        {/* AI Grid */}
        <div className="ai-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiServices.map((service, index) => (
            <div
              key={index}
              className="ai-card glass-card p-8 hover:scale-105 transition-all duration-500 group cursor-default"
              data-tilt
            >
              <div className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-gradient transition-all">
                {service.title}
              </h3>
              <p className="text-gray-light mb-4 leading-relaxed">{service.description}</p>
              <div className="text-sm text-primary-light font-medium">{service.features}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
