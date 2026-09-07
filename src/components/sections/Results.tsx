'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Metric {
  value: string;
  target: number;
  suffix: string;
  label: string;
}

export function Results() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLSpanElement>(null);
  const retentionRef = useRef<HTMLSpanElement>(null);
  const yearsRef = useRef<HTMLSpanElement>(null);

  const metrics: Metric[] = [
    { value: '120+', target: 120, suffix: '+', label: 'Projects / Deliverables' },
    { value: '98%', target: 98, suffix: '%', label: 'Client Retention' },
    { value: '3+', target: 3, suffix: '+', label: 'Years Building Digital' },
    { value: '24/7', target: 24, suffix: '/7', label: 'Digital Infrastructure' },
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
        ['.res-eyebrow', '.res-headline'],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power3.out',
          clearProps: 'transform',
        }
      );

      tl.fromTo(
        '.metric-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: 'power2.out',
          clearProps: 'transform',
        },
        '-=0.5'
      );

      // Animated counters
      if (projectsRef.current) {
        gsap.to({ val: 0 }, {
          val: 120,
          duration: 1.5,
          delay: 0.3,
          onUpdate: function () {
            if (projectsRef.current) {
              projectsRef.current.textContent = Math.floor(this.targets()[0].val).toString();
            }
          },
        });
      }

      if (retentionRef.current) {
        gsap.to({ val: 0 }, {
          val: 98,
          duration: 1.5,
          delay: 0.4,
          onUpdate: function () {
            if (retentionRef.current) {
              retentionRef.current.textContent = Math.floor(this.targets()[0].val).toString();
            }
          },
        });
      }

      if (yearsRef.current) {
        gsap.to({ val: 0 }, {
          val: 3,
          duration: 1.5,
          delay: 0.5,
          onUpdate: function () {
            if (yearsRef.current) {
              yearsRef.current.textContent = Math.floor(this.targets()[0].val).toString();
            }
          },
        });
      }

      tl.fromTo(
        '.res-tags',
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
          clearProps: 'transform',
        },
        '-=0.8'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-neutral-50 py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center">
          <div className="res-eyebrow flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-neutral-400" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500">
              MEASURABLE OUTCOMES
            </span>
            <div className="w-12 h-[1px] bg-neutral-400" />
          </div>

          <h2 className="res-headline text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 leading-tight max-w-5xl mx-auto">
            Good design looks better.{' '}
            <span className="text-primary">Great systems perform better.</span>
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="metric-item text-center md:border-r border-neutral-200 last:border-r-0">
            <div className="text-5xl md:text-6xl font-black text-neutral-900 mb-4">
              <span ref={projectsRef}>0</span>+
            </div>
            <p className="text-sm text-neutral-600">Projects / Deliverables</p>
          </div>

          <div className="metric-item text-center md:border-r border-neutral-200 last:border-r-0">
            <div className="text-5xl md:text-6xl font-black text-neutral-900 mb-4">
              <span ref={retentionRef}>0</span>%
            </div>
            <p className="text-sm text-neutral-600">Client Retention</p>
          </div>

          <div className="metric-item text-center md:border-r border-neutral-200 last:border-r-0">
            <div className="text-5xl md:text-6xl font-black text-neutral-900 mb-4">
              <span ref={yearsRef}>0</span>+
            </div>
            <p className="text-sm text-neutral-600">Years Building Digital</p>
          </div>

          <div className="metric-item text-center">
            <div className="text-5xl md:text-6xl font-black text-neutral-900 mb-4">24/7</div>
            <p className="text-sm text-neutral-600">Digital Infrastructure</p>
          </div>
        </div>

        {/* Tags */}
        <div className="res-tags flex items-center justify-center gap-3 text-xs font-mono text-neutral-500">
          <span>DESIGN</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span>TECHNOLOGY</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span>MARKETING</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-primary">DATA</span>
        </div>
      </div>
    </section>
  );
}
