'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface System {
  id: string;
  number: string;
  title: string;
  description: string;
  services: string[];
  position: { x: number; y: number };
}

export function GrowthArchitecture() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSystem, setActiveSystem] = useState<string | null>(null);

  const systems: System[] = [
    {
      id: 'attract',
      number: '01',
      title: 'ATTRACT',
      description: 'Discovery layer',
      services: ['SEO', 'ADS', 'CONTENT'],
      position: { x: 20, y: 15 },
    },
    {
      id: 'experience',
      number: '02',
      title: 'EXPERIENCE',
      description: 'Interface layer',
      services: ['WEB', 'UI/UX', 'BRAND'],
      position: { x: 75, y: 25 },
    },
    {
      id: 'convert',
      number: '03',
      title: 'CONVERT',
      description: 'Conversion layer',
      services: ['FUNNELS', 'CRM', 'OPTIMIZATION'],
      position: { x: 25, y: 55 },
    },
    {
      id: 'intelligence',
      number: '04',
      title: 'INTELLIGENCE',
      description: 'Processing layer',
      services: ['AI', 'AUTOMATION', 'ANALYTICS'],
      position: { x: 70, y: 70 },
    },
    {
      id: 'scale',
      number: '05',
      title: 'SCALE',
      description: 'Infrastructure layer',
      services: ['SOFTWARE', 'CLOUD', 'INFRASTRUCTURE'],
      position: { x: 45, y: 85 },
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

      // Background word appears
      tl.fromTo(
        '.bg-word',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' }
      );

      // Eyebrow and headline
      tl.fromTo(
        ['.arch-eyebrow', '.arch-headline', '.arch-supporting'],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          clearProps: 'transform',
        },
        '-=1.5'
      );

      // Grid lines draw
      tl.fromTo(
        '.grid-line',
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 1.5,
          stagger: 0.1,
          ease: 'power2.inOut',
        },
        '-=0.5'
      );

      // Core assembles
      tl.fromTo(
        '.core-layer',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform',
        },
        '-=1'
      );

      // Systems connect
      tl.fromTo(
        '.system-node',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'back.out(1.5)',
          clearProps: 'transform',
        },
        '-=0.5'
      );

      // Connection paths draw
      tl.fromTo(
        '.connection-path',
        { strokeDashoffset: 500 },
        {
          strokeDashoffset: 0,
          duration: 2,
          stagger: 0.2,
          ease: 'power2.inOut',
        },
        '-=0.5'
      );

      // Data particles activate - only if they exist
      const dataParticles = document.querySelectorAll('.data-particle');
      if (dataParticles.length > 0) {
        tl.to('.data-particle', {
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
        });
      }

      // Final statement
      tl.fromTo(
        '.final-statement',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
          clearProps: 'transform',
        },
        '-=0.5'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#fafaf8] py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Massive background typography */}
      <div className="bg-word absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black text-neutral-900/[0.02] leading-none pointer-events-none select-none whitespace-nowrap tracking-tighter" style={{ fontSize: 'clamp(12rem, 20vw + 5rem, 35rem)' }}>
        GROWTH
      </div>

      {/* Subtle technical grid */}
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

      {/* Technical annotations */}
      <div className="absolute top-12 left-8 text-[0.625rem] font-mono text-neutral-400 tracking-wider leading-tight">
        SYSTEM 02 / ARCHITECTURE
      </div>
      <div className="absolute top-12 right-8 text-[0.625rem] font-mono text-neutral-400 tracking-wider leading-tight">
        KASHAVI / DIGITAL INFRASTRUCTURE
      </div>
      <div className="absolute bottom-12 left-8 text-[0.625rem] font-mono text-neutral-400 tracking-wider leading-tight">
        STATUS: ACTIVE
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="mb-16 md:mb-24 max-w-6xl">
          {/* Eyebrow */}
          <div className="arch-eyebrow flex items-center gap-4 mb-8">
            <div className="w-16 h-[1px] bg-neutral-400" />
            <span className="text-[0.625rem] font-mono uppercase tracking-[0.2em] text-neutral-500 leading-tight">
              02 / DIGITAL GROWTH ARCHITECTURE
            </span>
          </div>

          {/* Headline */}
          <h2 className="arch-headline mb-8">
            <span className="block font-black tracking-tight text-neutral-900 leading-[0.95] mb-4" style={{ fontSize: 'clamp(2.25rem, 5vw + 1rem, 5rem)' }}>
              Everything
            </span>
            <span className="block font-black tracking-tight text-neutral-900 leading-[0.95] mb-6" style={{ fontSize: 'clamp(2.25rem, 5vw + 1rem, 5rem)' }}>
              connected.
            </span>
            <div className="flex items-center gap-6">
              <span className="block font-black tracking-tight text-primary leading-[0.95]" style={{ fontSize: 'clamp(2.25rem, 5vw + 1rem, 5rem)' }}>
                Growth
              </span>
              <div className="flex-1 h-[2px] bg-gradient-to-r from-primary via-primary/50 to-transparent max-w-md" />
            </div>
            <span className="block font-black tracking-tight text-primary leading-[0.95]" style={{ fontSize: 'clamp(2.25rem, 5vw + 1rem, 5rem)' }}>
              accelerated.
            </span>
          </h2>

          {/* Supporting copy */}
          <p className="arch-supporting text-neutral-600 max-w-4xl leading-relaxed" style={{ fontSize: 'clamp(1rem, 1vw + 0.75rem, 1.25rem)' }}>
            We connect strategy, technology, design, marketing and intelligence into one digital
            ecosystem built around how your business actually grows.
          </p>
        </div>

        {/* Digital Architecture System */}
        <div className="relative min-h-[800px] md:min-h-[1000px] my-20">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 1000"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Structural grid lines */}
            <line className="grid-line" x1="0" y1="200" x2="1200" y2="200" stroke="#e5e5e5" strokeWidth="1" />
            <line className="grid-line" x1="0" y1="400" x2="1200" y2="400" stroke="#e5e5e5" strokeWidth="1" />
            <line className="grid-line" x1="0" y1="600" x2="1200" y2="600" stroke="#e5e5e5" strokeWidth="1" />
            <line className="grid-line" x1="0" y1="800" x2="1200" y2="800" stroke="#e5e5e5" strokeWidth="1" />
            <line className="grid-line" x1="300" y1="0" x2="300" y2="1000" stroke="#e5e5e5" strokeWidth="1" />
            <line className="grid-line" x1="600" y1="0" x2="600" y2="1000" stroke="#e5e5e5" strokeWidth="1" />
            <line className="grid-line" x1="900" y1="0" x2="900" y2="1000" stroke="#e5e5e5" strokeWidth="1" />

            {/* Connection paths */}
            {systems.map((system, index) => {
              const startX = 600;
              const startY = 500;
              const endX = (system.position.x / 100) * 1200;
              const endY = (system.position.y / 100) * 1000;

              return (
                <g key={`connection-${system.id}`}>
                  {/* Main path */}
                  <path
                    className="connection-path"
                    d={`M ${startX} ${startY} L ${endX} ${endY}`}
                    stroke={activeSystem === system.id ? '#f97316' : '#d4d4d4'}
                    strokeWidth={activeSystem === system.id ? '2' : '1'}
                    strokeDasharray="8 8"
                    strokeDashoffset="500"
                    style={{ transition: 'stroke 0.3s ease, stroke-width 0.3s ease' }}
                  />

                  {/* Data particle */}
                  {activeSystem === system.id && (
                    <circle
                      className="data-particle"
                      cx={startX + (endX - startX) * 0.5}
                      cy={startY + (endY - startY) * 0.5}
                      r="4"
                      fill="#f97316"
                      opacity="0"
                    >
                      <animate
                        attributeName="cx"
                        from={startX}
                        to={endX}
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="cy"
                        from={startY}
                        to={endY}
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Central Kashavi Core */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              {/* Core structure */}
              <div className="core-layer relative w-[180px] h-[180px] bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 rounded-lg shadow-2xl border border-neutral-700">
                {/* Inner layers */}
                <div className="core-layer absolute inset-4 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-md border border-neutral-700/50" />
                <div className="core-layer absolute inset-8 bg-gradient-to-br from-orange-900/20 to-transparent rounded-sm" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <div className="text-[0.625rem] font-mono uppercase tracking-[0.15em] text-orange-400 mb-2 leading-tight">
                    KASHAVI
                  </div>
                  <div className="text-lg font-black text-white leading-tight mb-1">
                    GROWTH
                    <br />
                    ENGINE
                  </div>
                  <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent my-2" />
                  <div className="text-[0.5rem] font-mono text-neutral-500 uppercase tracking-wider leading-tight">
                    SYSTEM ACTIVE
                  </div>
                </div>

                {/* Corner accents */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-2 h-2 border-primary ${
                      i === 0
                        ? 'top-0 left-0 border-t border-l'
                        : i === 1
                        ? 'top-0 right-0 border-t border-r'
                        : i === 2
                        ? 'bottom-0 left-0 border-b border-l'
                        : 'bottom-0 right-0 border-b border-r'
                    }`}
                  />
                ))}
              </div>

              {/* Technical label */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[0.5rem] font-mono text-neutral-400 whitespace-nowrap leading-tight">
                NODE 00 / CORE
              </div>
            </div>
          </div>

          {/* System Nodes */}
          {systems.map((system) => (
            <div
              key={system.id}
              className="system-node absolute"
              style={{
                left: `${system.position.x}%`,
                top: `${system.position.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
              onMouseEnter={() => setActiveSystem(system.id)}
              onMouseLeave={() => setActiveSystem(null)}
            >
              <div
                className={`relative bg-white/90 backdrop-blur-sm border rounded-lg p-5 min-w-[220px] transition-all duration-300 cursor-pointer ${
                  activeSystem === system.id
                    ? 'border-primary shadow-2xl shadow-primary/20 scale-105 z-20'
                    : 'border-neutral-300 hover:border-neutral-400 hover:shadow-xl'
                }`}
              >
                {/* Node number */}
                <div className="text-[0.625rem] font-mono text-neutral-400 mb-3 leading-tight">NODE {system.number}</div>

                {/* Title */}
                <h3 className="font-black text-neutral-900 mb-1 tracking-tight leading-tight" style={{ fontSize: 'clamp(1.125rem, 1vw + 0.75rem, 1.5rem)' }}>
                  {system.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-600 mb-4 leading-relaxed">{system.description}</p>

                {/* Services */}
                <div className="flex flex-wrap gap-2">
                  {system.services.map((service, i) => (
                    <span
                      key={i}
                      className="text-[0.625rem] font-mono uppercase tracking-wider px-2 py-1 bg-neutral-100 text-neutral-700 rounded leading-tight"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Active indicator */}
                {activeSystem === system.id && (
                  <>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-ping" />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Final Statements */}
        <div className="mt-32 grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <div className="final-statement">
            <div className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-2 leading-tight">
              STRATEGY
            </div>
            <div className="font-black text-neutral-900 leading-tight" style={{ fontSize: 'clamp(1.5rem, 2vw + 0.75rem, 2rem)' }}>ONE SYSTEM</div>
          </div>
          <div className="final-statement">
            <div className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-2 leading-tight">
              TECHNOLOGY
            </div>
            <div className="font-black text-neutral-900 leading-tight" style={{ fontSize: 'clamp(1.5rem, 2vw + 0.75rem, 2rem)' }}>ONE ECOSYSTEM</div>
          </div>
          <div className="final-statement">
            <div className="text-sm font-mono uppercase tracking-wider text-neutral-400 mb-2 leading-tight">
              GROWTH
            </div>
            <div className="font-black text-primary leading-tight" style={{ fontSize: 'clamp(1.5rem, 2vw + 0.75rem, 2rem)' }}>ONE DIRECTION</div>
          </div>
        </div>

        {/* Bottom flow */}
        <div className="mt-16 flex items-center justify-center gap-3 text-xs font-mono text-neutral-400 leading-tight">
          <span>STRATEGY</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
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
          <span className="text-primary">INTELLIGENCE</span>
        </div>
      </div>
    </section>
  );
}
