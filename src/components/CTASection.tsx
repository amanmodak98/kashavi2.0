'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16" aria-labelledby="cta-heading">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="cta-content glass-card p-12 md:p-16 text-center bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 hover:scale-105 transition-all duration-700">
          <span className="inline-block px-4 py-2 bg-primary/20 border border-primary/40 rounded-full text-sm font-semibold text-primary-light uppercase tracking-wider mb-6" role="status">
            Free strategy call
          </span>

          <h2 id="cta-heading" className="text-4xl md:text-6xl font-black mb-6">
            Ready to grow what matters?
          </h2>

          <p className="text-xl text-gray-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a free strategy call and get a custom growth roadmap for your business. No fluff, just a
            plan built around your numbers.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-accent rounded-xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1 group"
            data-cursor-hover
            aria-label="Book your free strategy call"
          >
            <span>Book Your Strategy Call</span>
            <svg
              className="w-6 h-6 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <p className="text-sm text-gray-light mt-6">
            Replies within one business day · No commitment
          </p>
        </div>
      </div>
    </section>
  );
}
