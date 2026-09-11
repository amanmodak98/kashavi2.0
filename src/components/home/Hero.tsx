'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { prefersReducedMotion } from '@/lib/animations';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion()) {
        const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

        tl.fromTo('.hero-content',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="hero-content flex items-center gap-3 mb-6">
              <div className="w-8 h-[1px] bg-stone-400" />
              <span className="text-xs font-medium uppercase tracking-wider text-stone-600">
                Digital Solutions That Deliver
              </span>
            </div>

            <h1 className="hero-content text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-6 leading-[1.1] tracking-tight">
              We build websites<br />
              that <span className="text-orange-500">grow businesses</span>
            </h1>

            <p className="hero-content text-xl md:text-2xl text-stone-600 mb-8 leading-relaxed max-w-2xl">
              Beautiful design meets bulletproof code. Get a website that looks amazing and drives real results.
            </p>

            {/* Quick Stats */}
            <div className="hero-content grid grid-cols-3 gap-6 mb-10 max-w-xl">
              <div>
                <div className="text-3xl font-black text-orange-500 mb-1">50+</div>
                <div className="text-sm text-stone-600">Projects</div>
              </div>
              <div>
                <div className="text-3xl font-black text-orange-500 mb-1">98%</div>
                <div className="text-sm text-stone-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-black text-orange-500 mb-1">2-3wk</div>
                <div className="text-sm text-stone-600">Delivery</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="hero-content flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white font-bold text-lg rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span>Start Your Project</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-stone-900 border-2 border-stone-200 font-bold text-lg rounded-xl hover:border-orange-500 hover:shadow-lg transition-all duration-300"
              >
                <span>View Our Work</span>
              </Link>
            </div>

            {/* Trust Signal */}
            <p className="hero-content mt-8 text-sm text-stone-600">
              ⭐ Rated 4.9/5 by our clients • Trusted by 50+ businesses
            </p>
          </div>

          {/* Right: Visual */}
          <div className="hero-content hidden lg:block">
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl p-8 border-2 border-stone-200 shadow-2xl">
                <div className="space-y-4">
                  <div className="h-4 bg-orange-100 rounded w-3/4"></div>
                  <div className="h-4 bg-orange-100 rounded w-full"></div>
                  <div className="h-4 bg-orange-100 rounded w-5/6"></div>
                  <div className="h-32 bg-gradient-to-br from-orange-200 to-orange-300 rounded-lg mt-6"></div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="h-20 bg-orange-100 rounded"></div>
                    <div className="h-20 bg-orange-100 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-orange-300 rounded-full blur-2xl opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
