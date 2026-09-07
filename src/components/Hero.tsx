'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { prefersReducedMotion } from '@/lib/animations';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Check motion preference once on mount
  const shouldAnimate = !prefersReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (shouldAnimate) {
        // Fade in animations
        gsap.from('.fade-in-up', {
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.3,
        });

        // Floating shapes animation
        gsap.to('.floating-shape', {
          y: 'random(-50, 50)',
          x: 'random(-50, 50)',
          duration: 'random(15, 20)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: {
            each: 2,
            from: 'random',
          },
        });

        // Stats counter animation
        if (statsRef.current) {
          const statValues = statsRef.current.querySelectorAll('[data-counter]');
          statValues.forEach((stat) => {
            const target = parseInt(stat.getAttribute('data-counter') || '0');
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target,
              duration: 2,
              ease: 'power1.inOut',
              scrollTrigger: {
                trigger: stat,
                start: 'top 80%',
              },
              onUpdate: function () {
                // Use RAF to batch DOM updates and avoid layout thrashing
                requestAnimationFrame(() => {
                  stat.textContent = Math.ceil(obj.val).toString();
                });
              },
            });
          });
        }

        // Dashboard parallax
        gsap.to('.dashboard-preview', {
          y: 100,
          scrollTrigger: {
            trigger: '.dashboard-preview',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      } else {
        // Set final states immediately for reduced motion users
        gsap.set('.fade-in-up', { opacity: 1, y: 0 });

        // Set counter values immediately
        if (statsRef.current) {
          const statValues = statsRef.current.querySelectorAll('[data-counter]');
          statValues.forEach((stat) => {
            const target = parseInt(stat.getAttribute('data-counter') || '0');
            stat.textContent = target.toString();
          });
        }
      }
    }, heroRef);

    return () => ctx.revert();
  }, [shouldAnimate]);

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-16" aria-label="Hero section">
      {/* Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="gradient-mesh absolute inset-0" />

        {/* Floating Shapes */}
        <div className="absolute inset-0">
          <div className="floating-shape absolute top-[10%] left-[10%] w-64 md:w-96 h-64 md:h-96 rounded-full bg-primary/20 blur-[100px]" />
          <div className="floating-shape absolute top-[50%] right-[10%] w-80 md:w-[500px] h-80 md:h-[500px] rounded-full bg-accent/15 blur-[120px]" />
          <div className="floating-shape absolute bottom-[10%] left-[50%] w-60 md:w-80 h-60 md:h-80 rounded-full bg-success/10 blur-[80px]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        {/* Hero Content */}
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="fade-in-up inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full mb-8 hover:bg-white/10 transition-all duration-300 cursor-default">
            <span className="text-2xl">✨</span>
            <span className="text-sm font-medium">AI-powered growth, engineered for scale</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="fade-in-up block">Scale your business with</span>
            <span className="fade-in-up block text-gradient mt-2">AI-powered digital marketing</span>
          </h1>

          {/* Subtitle */}
          <p className="fade-in-up text-lg md:text-xl text-gray-light mb-8 max-w-3xl mx-auto leading-relaxed">
            Kashavi turns attention into measurable growth. SEO, paid ads, social, automation, and AI chatbots
            engineered into one compounding engine for your brand.
          </p>

          {/* Service Tags */}
          <div className="fade-in-up flex flex-wrap justify-center gap-3 mb-10">
            {['SEO', 'Paid Ads', 'Social Media', 'Automation', 'AI Chatbots', 'Brand Strategy'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-sm font-medium text-primary-light hover:bg-primary/20 hover:border-primary transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-xl text-white font-semibold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
              data-cursor-hover
              aria-label="Start your business growth journey"
            >
              <span>Start Your Growth</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              data-cursor-hover
              aria-label="View our case studies and client success stories"
            >
              View Case Studies
            </Link>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="fade-in-up grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto" role="list" aria-label="Company statistics">
            {[
              { label: 'Projects delivered', value: 500, suffix: '+' },
              { label: 'Happy clients', value: 120, suffix: '+' },
              { label: 'Client retention', value: 98, suffix: '%' },
            ].map((stat, index) => (
              <div
                key={index}
                className="group glass-card p-8 hover:scale-105 transition-all duration-500 cursor-default perspective-1000"
                data-tilt
                role="listitem"
              >
                <div className="text-sm text-gray-light mb-2 uppercase tracking-wide" id={`stat-label-${index}`}>{stat.label}</div>
                <div className="flex items-baseline justify-center gap-1" aria-labelledby={`stat-label-${index}`}>
                  <span className="text-5xl font-black text-gradient" data-counter={stat.value} aria-label={`${stat.value}${stat.suffix}`}>
                    0
                  </span>
                  <span className="text-3xl font-bold text-primary" aria-hidden="true">{stat.suffix}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="dashboard-preview mt-20 perspective-1500" role="region" aria-label="Dashboard preview">
          <div className="glass-card max-w-4xl mx-auto p-8 hover:scale-105 transition-all duration-700 preserve-3d">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold">Growth Dashboard</h3>
              <span className="px-3 py-1 bg-success text-white text-xs font-semibold rounded-full animate-pulse-slow" role="status" aria-live="polite">
                Live
              </span>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6 mb-6">
              {[
                { value: '4.2k', label: 'Users', trend: '↑ 24%' },
                { value: '7.9%', label: 'Conv.', trend: '↑ 1.2%' },
                { value: '₹1.6Cr', label: 'MRR', trend: '↑ 18%' },
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-light mb-1">{metric.label}</div>
                  <div className="text-xs text-success font-semibold">{metric.trend}</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="h-20 bg-white/5 rounded-xl p-4">
              <svg viewBox="0 0 400 60" className="w-full h-full">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgb(99, 102, 241)" />
                    <stop offset="100%" stopColor="rgb(236, 72, 153)" />
                  </linearGradient>
                </defs>
                <polyline
                  points="0,50 40,45 80,38 120,42 160,30 200,25 240,28 280,18 320,22 360,12 400,10"
                  fill="none"
                  stroke="url(#chartGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-light text-sm animate-bounce-slow" aria-label="Scroll indicator">
          <div className="w-6 h-10 border-2 border-gray-light rounded-full flex items-start justify-center p-2" aria-hidden="true">
            <div className="w-1 h-2 bg-gray-light rounded-full animate-scroll-down" />
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
