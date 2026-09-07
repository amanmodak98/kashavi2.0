'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Image from 'next/image';
import { prefersReducedMotion } from '@/lib/animations';

gsap.registerPlugin(ScrollTrigger);

export function HeroNew() {
  const heroRef = useRef<HTMLElement>(null);
  const revenueRef = useRef<HTMLSpanElement>(null);
  const projectsRef = useRef<HTMLSpanElement>(null);
  const retentionRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Respect user's motion preferences - call once and store result
    const shouldAnimate = !prefersReducedMotion();

    const ctx = gsap.context(() => {
      if (shouldAnimate) {
        // Orchestrated entrance sequence
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // 1. Eyebrow reveal
        tl.fromTo(
          '.hero-eyebrow',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 }
        );

        // 2. Headline reveal line by line
        tl.fromTo(
          ['.headline-1', '.headline-2', '.headline-3', '.headline-4'],
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, clearProps: 'transform' },
          '-=0.4'
        );

        // 3. Supporting copy
        tl.fromTo(
          '.hero-description',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, clearProps: 'transform' },
          '-=0.5'
        );

        // 4. CTA buttons
        tl.fromTo(
          '.hero-cta',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, clearProps: 'transform' },
          '-=0.4'
        );

        // 5. Right-side workstation scales in - check if exists
        const growthCenter = document.querySelector('.growth-center');
        if (growthCenter) {
          tl.fromTo(
            '.growth-center',
            { opacity: 0, scale: 0.95, y: 30 },
            { opacity: 1, scale: 1, y: 0, duration: 0.7, clearProps: 'transform' },
            '-=0.7'
          );
        }

        // 6. Floating system nodes activate - check if exists
        const systemNodes = document.querySelectorAll('.system-node');
        if (systemNodes.length > 0) {
          tl.fromTo(
            '.system-node',
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.4, stagger: 0.06, clearProps: 'transform' },
            '-=0.5'
          );
        }

        // 7. Bottom metrics reveal
        tl.fromTo(
          '.metric-item',
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.06, clearProps: 'transform' },
          '-=0.4'
        );

        // Animated counters
        if (revenueRef.current) {
          gsap.to(revenueRef.current, {
            textContent: '24.58',
            duration: 1.5,
            delay: 0.8,
            snap: { textContent: 0.01 },
            onUpdate: function() {
              if (revenueRef.current) {
                revenueRef.current.textContent = '₹' + parseFloat(this.targets()[0].textContent).toFixed(2) + 'L';
              }
            },
          });
        }

        if (projectsRef.current) {
          gsap.to({ val: 0 }, {
            val: 120,
            duration: 1.5,
            delay: 1,
            onUpdate: function() {
              if (projectsRef.current) {
                projectsRef.current.textContent = Math.floor(this.targets()[0].val) + '+';
              }
            },
          });
        }

        if (retentionRef.current) {
          gsap.to({ val: 0 }, {
            val: 98,
            duration: 1.5,
            delay: 1.1,
            onUpdate: function() {
              if (retentionRef.current) {
                retentionRef.current.textContent = Math.floor(this.targets()[0].val) + '%';
              }
            },
          });
        }

        // Subtle parallax on scroll - check if exists
        if (growthCenter) {
          gsap.to('.growth-center', {
            y: 80,
            scale: 1.02,
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          });
        }

        gsap.to('.hero-headline', {
          y: 40,
          opacity: 0.9,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      } else {
        // Set final states immediately for reduced motion users
        gsap.set(['.hero-eyebrow', '.headline-1', '.headline-2', '.headline-3', '.headline-4', '.hero-description', '.hero-cta', '.growth-center', '.system-node', '.metric-item'], { opacity: 1, y: 0, scale: 1 });

        // Set counter values immediately
        if (revenueRef.current) revenueRef.current.textContent = '₹24.58L';
        if (projectsRef.current) projectsRef.current.textContent = '120+';
        if (retentionRef.current) retentionRef.current.textContent = '98%';
      }
    }, heroRef);

    // Mouse parallax for depth - only if animations are enabled, with RAF throttling
    let ticking = false;
    let lastX = 0;
    let lastY = 0;

    const updateParallax = () => {
      const growthCenter = document.querySelector('.growth-center');
      const systemNodes = document.querySelectorAll('.system-node');

      if (growthCenter) {
        gsap.to('.growth-center', {
          x: lastX * 0.5,
          y: lastY * 0.5,
          rotationY: lastX * 0.3,
          rotationX: -lastY * 0.3,
          duration: 0.8,
          ease: 'power2.out',
        });
      }

      if (systemNodes.length > 0) {
        gsap.to('.system-node', {
          x: lastX * 1.2,
          y: lastY * 1.2,
          duration: 0.6,
          ease: 'power2.out',
        });
      }

      ticking = false;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (shouldAnimate && !ticking) {
        lastX = (e.clientX / window.innerWidth - 0.5) * 20;
        lastY = (e.clientY / window.innerHeight - 0.5) * 20;

        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    if (shouldAnimate) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative bg-[#fafaf9] min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[90vh] pt-32 pb-20 overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(to right, #000 0.5px, transparent 0.5px), linear-gradient(to bottom, #000 0.5px, transparent 0.5px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Large background typography anchor */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 text-[20rem] font-black text-neutral-900/[0.015] leading-none pointer-events-none select-none">
        GROWTH
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-[48%_52%] gap-16 lg:gap-20 items-center">
          {/* Left Column - Editorial Content */}
          <div className="relative z-10">
            {/* Eyebrow */}
            <div className="hero-eyebrow flex items-center gap-4 mb-8 opacity-0">
              <div className="w-12 h-[1px] bg-neutral-400" />
              <span className="text-[0.6875rem] font-mono uppercase tracking-[0.15em] text-neutral-500 leading-none">
                DIGITAL GROWTH SYSTEMS
              </span>
              <div className="w-2 h-2 bg-primary rounded-full" />
            </div>

            {/* Main Headline - Editorial */}
            <div className="hero-headline mb-10">
              <h1 className="space-y-2">
                <div className="headline-1 opacity-0">
                  <span className="block text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.9] font-black tracking-[-0.025em] text-neutral-900">
                    We Build
                  </span>
                </div>
                <div className="headline-2 opacity-0">
                  <span className="block text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.9] font-black tracking-[-0.025em] text-neutral-900">
                    Digital Systems
                  </span>
                </div>
                <div className="headline-3 opacity-0">
                  <span className="block text-[clamp(1.75rem,5vw,4rem)] leading-[1] font-light italic text-neutral-600">
                    That Create
                  </span>
                </div>
                <div className="headline-4 opacity-0">
                  <span className="block text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.9] font-black tracking-[-0.025em] text-primary">
                    Growth.
                  </span>
                </div>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="hero-description text-[1.125rem] md:text-[1.25rem] leading-[1.6] text-neutral-600 max-w-[560px] mb-12 opacity-0">
              We design websites, software, AI systems and digital marketing engines that help ambitious
              businesses attract customers, operate smarter and grow faster.
            </p>

            {/* CTA System */}
            <div className="hero-cta space-y-6 opacity-0">
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  href="/contact"
                  className="group relative px-10 py-5 bg-neutral-900 text-white font-semibold text-[1.0625rem] overflow-hidden inline-flex items-center gap-3"
                >
                  <span className="relative z-10">Start a Project</span>
                  <svg
                    className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-400" />
                </Link>

                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 text-neutral-900 font-semibold text-[1.0625rem]"
                >
                  <span>Explore Our Work</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Availability Signal */}
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[0.6875rem] font-mono uppercase tracking-[0.12em] text-neutral-500">
                  AVAILABLE FOR SELECT PROJECTS
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Digital Growth Command Center */}
          <div className="relative lg:ml-auto perspective-1000">
            {/* Main Workstation Visual */}
            <div className="growth-center relative opacity-0" style={{ transformStyle: 'preserve-3d' }}>
              <div className="relative">
                {/* Monitor/Dashboard Container */}
                <div className="relative rounded-2xl overflow-hidden border border-neutral-200/80 bg-white shadow-2xl shadow-neutral-900/20">
                  <Image
                    src="/images/hero-right.png"
                    alt="Kashavi Digital Growth Command Center"
                    width={700}
                    height={525}
                    className="w-full h-auto"
                    priority
                  />

                  {/* Analytics Overlay */}
                  <div className="absolute top-6 right-6 bg-neutral-900/95 backdrop-blur-sm border border-neutral-700 rounded-lg p-4 min-w-[180px]">
                    <div className="text-[0.625rem] font-mono uppercase tracking-[0.1em] text-neutral-400 mb-2 leading-none">
                      REVENUE
                    </div>
                    <div className="text-[2.25rem] font-bold text-white mb-1 leading-none">
                      <span ref={revenueRef}>₹0.00L</span>
                    </div>
                    <div className="flex items-center gap-2 text-green-400 text-[0.875rem] font-semibold">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                      <span>+38.6%</span>
                    </div>
                  </div>

                  {/* Brand Label */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-lg px-4 py-2">
                    <div className="text-[0.6875rem] font-bold text-neutral-900 tracking-wide leading-none">KASHAVI INFOTECH</div>
                  </div>
                </div>

                {/* Floating System Nodes */}
                {[
                  { label: 'WEB', position: 'top-8 -left-12', color: 'bg-blue-500' },
                  { label: 'ADS', position: 'top-20 -right-16', color: 'bg-green-500' },
                  { label: 'AI', position: 'bottom-32 -left-16', color: 'bg-purple-500' },
                  { label: 'CRM', position: 'bottom-20 -right-12', color: 'bg-orange-500' },
                  { label: 'SEO', position: 'top-1/2 -left-20', color: 'bg-pink-500' },
                  { label: 'DATA', position: 'top-1/3 -right-20', color: 'bg-cyan-500' },
                ].map((node, i) => (
                  <div
                    key={i}
                    className={`system-node absolute ${node.position} hidden lg:block opacity-0`}
                  >
                    <div className="bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-lg px-3 py-2 shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 ${node.color} rounded-full`} />
                        <span className="text-[0.625rem] font-mono font-semibold text-neutral-700 tracking-wide leading-none">
                          {node.label}
                        </span>
                      </div>
                    </div>
                    {/* Connection line to center */}
                    <svg
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20"
                      width="100"
                      height="100"
                    >
                      <line x1="50" y1="50" x2="80" y2="50" stroke="#f97316" strokeWidth="1" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Strip */}
        <div className="mt-24 pt-8 border-t border-neutral-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="metric-item opacity-0">
              <div className="text-[2.5rem] font-bold text-neutral-900 mb-2 leading-none tracking-tight">
                <span ref={projectsRef}>0+</span>
              </div>
              <div className="text-[0.875rem] text-neutral-600 leading-snug">Projects Delivered</div>
            </div>
            <div className="metric-item opacity-0 md:border-l border-neutral-200 md:pl-8">
              <div className="text-[2.5rem] font-bold text-neutral-900 mb-2 leading-none tracking-tight">
                <span ref={retentionRef}>0%</span>
              </div>
              <div className="text-[0.875rem] text-neutral-600 leading-snug">Client Retention</div>
            </div>
            <div className="metric-item opacity-0 md:border-l border-neutral-200 md:pl-8">
              <div className="text-[2.5rem] font-bold text-neutral-900 mb-2 leading-none tracking-tight">3+</div>
              <div className="text-[0.875rem] text-neutral-600 leading-snug">Years Building</div>
            </div>
            <div className="metric-item opacity-0 md:border-l border-neutral-200 md:pl-8">
              <div className="text-[2.5rem] font-bold text-neutral-900 mb-2 leading-none tracking-tight">24/7</div>
              <div className="text-[0.875rem] text-neutral-600 leading-snug">Digital Infrastructure</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
