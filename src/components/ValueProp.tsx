'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ValueProp() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.value-text', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      gsap.from('.value-stat', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.value-stats',
          start: 'top 75%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stats = [
    { number: '40+', label: 'In-House Experts' },
    { number: '30+', label: 'Industries Served' },
    { number: '24h', label: 'Avg. Response Time' },
    { number: '7 days', label: 'Typical Onboarding' },
  ];

  return (
    <section ref={sectionRef} className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="value-text text-2xl md:text-3xl text-gray-light leading-relaxed">
            We stay small and senior on purpose. The same people who scope your work
            are the ones who deliver it, and you get an answer the same day.
          </p>
        </div>

        <div className="value-stats grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="value-stat glass-card p-8 text-center hover:scale-110 transition-all duration-500 cursor-default group"
              data-tilt
            >
              <div className="text-4xl md:text-5xl font-black text-gradient mb-3 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-sm text-gray-light leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
