'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.process-header', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      gsap.from('.process-step', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.process-timeline',
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'Deep dive into your business, audience, and competitive landscape to identify growth levers.',
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Build a roadmap tied to revenue targets, not vanity metrics.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Craft experiences that convert. Interfaces and campaigns built around user behavior.',
    },
    {
      number: '04',
      title: 'Development',
      description: 'Campaigns, content, and automations built and shipped fast.',
    },
    {
      number: '05',
      title: 'Testing',
      description: 'A/B tests, experiments and iteration based on what the data tells us.',
    },
    {
      number: '06',
      title: 'Deployment',
      description: 'Launch with monitoring and fallback plans in place.',
    },
    {
      number: '07',
      title: 'Support',
      description: 'Ongoing optimization and support to compound results over time.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="process-header text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-semibold text-primary-light uppercase tracking-wider mb-6">
            How we work
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            A process engineered for<br />compounding growth
          </h2>
          <p className="text-xl text-gray-light">
            Deliberate stages. Hover any step to see how we move from insight to impact.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="process-timeline grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`process-step glass-card p-6 cursor-pointer transition-all duration-500 ${
                activeStep === index + 1
                  ? 'scale-105 border-2 border-primary bg-primary/5'
                  : 'hover:scale-105 hover:border-primary/50'
              }`}
              onMouseEnter={() => setActiveStep(index + 1)}
              data-tilt
            >
              <div
                className={`text-6xl font-black mb-4 transition-all duration-300 ${
                  activeStep === index + 1 ? 'text-gradient scale-110' : 'text-white/20'
                }`}
              >
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-gray-light leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
