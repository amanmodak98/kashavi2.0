'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Technology() {
  const sectionRef = useRef<HTMLElement>(null);

  const techCategories = [
    {
      title: 'FRONTEND',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'BACKEND',
      technologies: ['Node.js', 'Python', 'APIs', 'Databases'],
    },
    {
      title: 'AI',
      technologies: ['LLMs', 'AI Agents', 'Automation', 'Machine Learning'],
    },
    {
      title: 'CLOUD',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Monitoring'],
    },
    {
      title: 'GROWTH',
      technologies: ['SEO', 'Analytics', 'Marketing', 'CRM'],
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
        ['.tech-eyebrow', '.tech-headline', '.tech-supporting'],
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
        '.tech-category',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.2)',
          clearProps: 'transform',
        },
        '-=0.4'
      );

      tl.fromTo(
        '.tech-statement',
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

  return (
    <section ref={sectionRef} className="relative bg-neutral-900 py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center">
          <div className="tech-eyebrow flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-neutral-600" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-500">
              TECHNOLOGY & AI
            </span>
            <div className="w-12 h-[1px] bg-neutral-600" />
          </div>

          <h2 className="tech-headline text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-[-0.02em] text-white leading-[1.1] max-w-5xl mx-auto mb-8">
            Built with modern technology.{' '}
            <span className="text-primary">Designed around your business.</span>
          </h2>

          <p className="tech-supporting text-lg md:text-xl lg:text-[22px] text-neutral-300 max-w-4xl mx-auto leading-[1.6]">
            We use proven technologies to build systems that work.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="tech-category bg-neutral-800/50 border border-neutral-700 rounded-2xl p-6 hover:border-primary hover:bg-neutral-800 transition-all duration-300"
            >
              <h3 className="text-[13px] font-mono uppercase tracking-[0.15em] text-primary mb-5 font-semibold">
                {category.title}
              </h3>
              <div className="space-y-2.5">
                {category.technologies.map((tech, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-1 h-1 bg-neutral-600 rounded-full" />
                    <span className="text-[15px] text-neutral-200 leading-[1.5]">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Closing Statement */}
        <div className="tech-statement text-center">
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-[1.3] max-w-3xl mx-auto">
            Technology is the infrastructure.{' '}
            <span className="text-primary">Your business is the destination.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
