'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function WhyKashavi() {
  const sectionRef = useRef<HTMLElement>(null);

  const principles = [
    {
      number: '01',
      title: 'BUSINESS FIRST',
      description: 'We start with your business objective—not the technology.',
    },
    {
      number: '02',
      title: 'ENGINEERED TO PERFORM',
      description: 'Fast, scalable and reliable digital experiences.',
    },
    {
      number: '03',
      title: 'DESIGN WITH PURPOSE',
      description: 'Every interface has a job.',
    },
    {
      number: '04',
      title: 'AI WHERE IT MATTERS',
      description: 'Automation and intelligence where they create genuine leverage.',
    },
    {
      number: '05',
      title: 'BUILT FOR THE LONG TERM',
      description: "We don't disappear after launch.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          once: true,
        },
      });

      tl.fromTo(
        ['.why-eyebrow', '.why-headline'],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          clearProps: 'transform',
        }
      );

      tl.fromTo(
        '.principle-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'transform',
        },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div className="why-eyebrow flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-neutral-400" />
            <span className="text-[11px] md:text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
              WHY KASHAVI
            </span>
          </div>

          <h2 className="why-headline text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] max-w-5xl">
            One partner.{' '}
            <span className="text-primary">A complete digital ecosystem.</span>
          </h2>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-6xl">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="principle-card group bg-neutral-50 border-2 border-neutral-200 rounded-2xl p-8 hover:border-primary hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-extrabold text-primary mb-6 opacity-15 group-hover:opacity-100 transition-opacity">
                {principle.number}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3 tracking-tight leading-tight">
                {principle.title}
              </h3>
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
