'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Problem() {
  const sectionRef = useRef<HTMLElement>(null);

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
        ['.prob-eyebrow', '.prob-headline'],
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
        '.problem-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          clearProps: 'transform',
        },
        '-=0.4'
      );

      tl.fromTo(
        '.prob-transition',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'transform',
        },
        '-=0.3'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const problems = [
    {
      title: 'SCATTERED',
      description: 'Different tools, platforms and vendors working independently.',
    },
    {
      title: 'INVISIBLE',
      description: 'Great businesses struggling to be discovered by the right customers.',
    },
    {
      title: 'MANUAL',
      description: 'Repetitive operations consuming time that should be spent growing the business.',
    },
  ];

  return (
    <section ref={sectionRef} className="relative bg-neutral-900 py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div className="prob-eyebrow flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-neutral-600" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500">
              THE PROBLEM
            </span>
          </div>

          <h2 className="prob-headline text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight max-w-5xl">
            Your business doesn't need more digital noise.
          </h2>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-20">
          {problems.map((problem, index) => (
            <div key={index} className="problem-card">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
                {problem.title}
              </h3>
              <p className="text-lg text-neutral-400 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Transition Statement */}
        <div className="prob-transition text-center max-w-4xl mx-auto">
          <div className="w-24 h-[2px] bg-primary mx-auto mb-8" />
          <p className="text-xl md:text-2xl font-bold text-white leading-tight">
            We turn disconnected digital activity into one connected growth system.
          </p>
        </div>
      </div>
    </section>
  );
}
