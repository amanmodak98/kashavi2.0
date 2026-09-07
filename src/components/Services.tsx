'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.section-header-anim', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      gsap.from('.service-card', {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 18L22 12L16 6M8 6L2 12L8 18" />
        </svg>
      ),
      badge: 'Development',
      title: 'Website Development',
      description: 'Professional website development tailored for business growth.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance'],
      price: 'from ₹42,999',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
      badge: 'Development',
      title: 'E-commerce Development',
      description: 'Full-featured online stores built for conversion and growth.',
      features: null,
      price: null,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      ),
      badge: 'Marketing',
      title: 'SEO & Content Marketing',
      description: 'Increase your search rankings and organic traffic.',
      features: null,
      price: null,
      featured: true,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
      badge: 'Marketing',
      title: 'Performance Marketing',
      description: 'ROI-focused digital marketing campaigns.',
      features: null,
      price: null,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <circle cx="9" cy="10" r="1" fill="currentColor" />
          <circle cx="12" cy="10" r="1" fill="currentColor" />
          <circle cx="15" cy="10" r="1" fill="currentColor" />
        </svg>
      ),
      badge: 'AI & Automation',
      title: 'AI Automation',
      description: 'Automate repetitive business processes with AI.',
      features: ['Workflow Automation', 'Business Process Automation', 'AI Integrations'],
      price: 'from ₹67,999',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-white/[0.01]" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header-anim text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-semibold text-primary-light uppercase tracking-wider mb-6">
            What we do
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Full-stack marketing,<br />supercharged by AI
          </h2>
          <p className="text-xl text-gray-light">
            Search, social, creative, engineering and automation. The full stack, from one senior team.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card glass-card p-8 hover:scale-105 transition-all duration-500 group relative overflow-hidden ${
                service.featured ? 'md:col-span-2 lg:col-span-1 border-2 border-primary' : ''
              }`}
              data-tilt
            >
              {service.featured && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <div className="w-7 h-7">{service.icon}</div>
              </div>

              <div className="text-xs font-semibold text-primary-light uppercase tracking-wider mb-3">
                {service.badge}
              </div>

              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-light mb-4">{service.description}</p>

              {service.features && (
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-light flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex items-center justify-between mt-auto pt-4">
                {service.price && <span className="text-sm font-semibold text-gray">{service.price}</span>}
                <Link
                  href="/services"
                  className="text-primary-light font-semibold flex items-center gap-1 hover:gap-2 transition-all group/link"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="service-card glass-card p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 flex flex-col justify-center items-center text-center hover:scale-105 transition-all duration-500">
            <h3 className="text-2xl font-bold mb-4">Need something else?</h3>
            <p className="text-gray-light mb-6">
              Most of our work starts as a conversation, not a package. Tell us the outcome you need and we'll
              scope the shortest path to it.
            </p>
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              data-cursor-hover
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
