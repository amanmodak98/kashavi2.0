'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.trust-item', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const categories = [
    'E-commerce & D2C',
    'SaaS & Technology',
    'Healthcare & Clinics',
    'Manufacturing & B2B',
    'Education & Edtech',
    'Real Estate & Local',
  ];

  return (
    <section ref={sectionRef} className="py-8 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-gray-light text-sm uppercase tracking-wider mb-8">
          Trusted by teams across
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <div
              key={category}
              className="trust-item px-6 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-sm font-medium hover:bg-white/[0.06] hover:border-primary transition-all duration-300 cursor-default"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
