'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export function FeaturedCase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.case-header', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      gsap.from('.case-featured', {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.case-featured',
          start: 'top 75%',
        },
      });

      gsap.from('.case-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.case-grid',
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="case-header text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-success/10 border border-success/30 rounded-full text-sm font-semibold text-success uppercase tracking-wider mb-6">
            Proof, not promises
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-6">Results we've delivered</h2>
          <p className="text-xl text-gray-light">
            Real campaigns, real numbers. Here's what growth looks like with Kashavi.
          </p>
        </div>

        {/* Featured Case Study */}
        <div className="case-featured glass-card p-8 md:p-12 mb-8 hover:scale-[1.02] transition-all duration-700">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
              E-commerce · Beauty
            </span>
            <span className="text-gray-light text-sm">Over 5 months</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-black text-gradient mb-4">3.8× blended ROAS</h3>
          <p className="text-xl md:text-2xl font-bold mb-4">
            Cutting cost per order by 46% for a D2C skincare brand
          </p>
          <p className="text-gray-light mb-8 leading-relaxed max-w-3xl">
            Meta spend had doubled year on year while orders stayed flat. Rebuilding tracking and treating
            creative as the primary lever brought cost per order back under target.
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Cost per order', before: '₹1,420', after: '₹770', change: '-46%', positive: false },
              { label: 'Blended ROAS', before: '1.9×', after: '3.8×', change: '+100%', positive: true },
              { label: 'Monthly orders', before: '620', after: '1,480', change: '+139%', positive: true },
            ].map((metric, index) => (
              <div key={index} className="bg-white/[0.02] p-6 rounded-2xl border border-white/10">
                <div className="text-sm text-gray-light mb-3">{metric.label}</div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-gray">{metric.before}</span>
                  <span className="text-gray-light">→</span>
                  <span className="text-2xl font-bold">{metric.after}</span>
                </div>
                <div
                  className={`text-sm font-semibold ${
                    metric.positive ? 'text-success' : 'text-accent'
                  }`}
                >
                  {metric.change}
                </div>
              </div>
            ))}
          </div>

          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1"
          >
            <span>Read the full story</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Other Case Studies */}
        <div className="case-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="case-card glass-card p-8 hover:scale-105 transition-all duration-500" data-tilt>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
              SaaS · B2B
            </span>
            <h4 className="text-2xl font-bold mb-3">41% of demos from organic</h4>
            <p className="text-gray-light mb-6">
              From zero organic pipeline to 41% of new demos for a B2B SaaS
            </p>
            <Link
              href="/case-studies"
              className="text-primary-light font-semibold flex items-center gap-1 hover:gap-2 transition-all group"
            >
              Read the story
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="case-card glass-card p-8 hover:scale-105 transition-all duration-500" data-tilt>
            <span className="inline-block px-3 py-1 bg-success/10 text-success text-xs font-semibold rounded-full mb-4">
              Healthcare · Multi-location
            </span>
            <h4 className="text-2xl font-bold mb-3">38% fewer no-shows</h4>
            <p className="text-gray-light mb-6">
              Cutting no-shows by 38% across a multi-location clinic group
            </p>
            <Link
              href="/case-studies"
              className="text-primary-light font-semibold flex items-center gap-1 hover:gap-2 transition-all group"
            >
              Read the story
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
