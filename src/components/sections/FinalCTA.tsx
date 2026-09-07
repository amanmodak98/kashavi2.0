'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export function FinalCTA() {
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
        ['.cta-eyebrow', '.cta-headline', '.cta-supporting', '.cta-buttons', '.cta-tags'],
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-20 md:py-24 lg:py-28 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black text-white/[0.02] leading-none pointer-events-none select-none whitespace-nowrap">
        BUILD
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative text-center">
        {/* Eyebrow */}
        <div className="cta-eyebrow flex items-center justify-center gap-4 mb-6 md:mb-8">
          <div className="w-12 md:w-16 h-[1px] bg-neutral-600" />
          <span className="text-[11px] md:text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 font-medium">
            LET'S BUILD
          </span>
          <div className="w-12 md:w-16 h-[1px] bg-neutral-600" />
        </div>

        {/* Headline */}
        <h2 className="cta-headline text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-black tracking-[-0.02em] text-white leading-[1.05] mb-6 md:mb-8 max-w-6xl mx-auto antialiased">
          Ready to build
          <br />
          <span className="text-primary">what comes next?</span>
        </h2>

        {/* Supporting */}
        <p className="cta-supporting text-base md:text-lg lg:text-xl text-neutral-400 max-w-2xl lg:max-w-3xl mx-auto leading-[1.7] md:leading-[1.75] mb-10 md:mb-12 font-light">
          Tell us where your business is today, where you want it to go, and we'll help you
          figure out what needs to be built.
        </p>

        {/* Buttons */}
        <div className="cta-buttons flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-6 mb-12 md:mb-16">
          <Link
            href="/contact"
            className="group px-8 md:px-10 py-4 md:py-5 bg-primary text-white font-semibold text-base md:text-lg rounded-xl hover:bg-orange-600 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 flex items-center gap-3 tracking-[-0.01em]"
          >
            <span>Start a Project</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          <Link
            href="/contact"
            className="group px-8 md:px-10 py-4 md:py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-semibold text-base md:text-lg rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center gap-3 tracking-[-0.01em]"
          >
            <span>Talk to Our Team</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Tags */}
        <div className="cta-tags flex flex-wrap items-center justify-center gap-3 md:gap-4 text-[11px] md:text-xs font-mono text-neutral-500 tracking-[0.1em] uppercase font-medium">
          <span>WEB</span>
          <span>·</span>
          <span>SOFTWARE</span>
          <span>·</span>
          <span>AI</span>
          <span>·</span>
          <span>MARKETING</span>
          <span>·</span>
          <span className="text-primary">GROWTH</span>
        </div>
      </div>
    </section>
  );
}
