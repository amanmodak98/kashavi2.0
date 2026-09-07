'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { prefersReducedMotion } from '@/lib/animations';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  industry: string;
  services: string[];
  description: string;
  image: string;
  link: string;
}

export function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      title: 'Global E-Commerce Transformation',
      industry: 'Retail & Fashion',
      services: ['WEB DESIGN', 'DEVELOPMENT', 'SEO'],
      description:
        'Complete digital transformation for a fashion retailer, resulting in 340% increase in online revenue and 2.8M+ monthly visitors through strategic SEO and conversion optimization.',
      image: '/images/work/ecommerce-project.svg',
      link: '/projects/ecommerce-transformation',
    },
    {
      title: 'AI-Powered Marketing Automation',
      industry: 'SaaS & Technology',
      services: ['AI CHATBOT', 'AUTOMATION', 'CRM'],
      description:
        'Intelligent marketing system that automated lead qualification and nurturing, reducing cost per acquisition by 67% while increasing conversion rates by 124%.',
      image: '/images/work/ai-automation.svg',
      link: '/projects/ai-marketing-automation',
    },
    {
      title: 'Healthcare Platform Redesign',
      industry: 'Healthcare & Wellness',
      services: ['UI/UX', 'MOBILE APP', 'ACCESSIBILITY'],
      description:
        'Patient-first digital experience with WCAG 2.1 AAA compliance, increasing patient engagement by 215% and reducing support calls by 58%.',
      image: '/images/work/healthcare-platform.svg',
      link: '/projects/healthcare-platform',
    },
    {
      title: 'Real Estate Lead Generation System',
      industry: 'Real Estate',
      services: ['PAID ADS', 'LANDING PAGES', 'ANALYTICS'],
      description:
        'Multi-channel paid advertising strategy with optimized landing pages that generated 1,200+ qualified leads per month at 40% lower cost per lead.',
      image: '/images/work/real-estate-leads.svg',
      link: '/projects/real-estate-leads',
    },
  ];

  useEffect(() => {
    const shouldAnimate = !prefersReducedMotion();

    const ctx = gsap.context(() => {
      if (shouldAnimate) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            once: true,
          },
        });

        tl.fromTo(
          ['.work-eyebrow', '.work-headline'],
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
          '.project-card',
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: 'power2.out',
            clearProps: 'transform',
          },
          '-=0.5'
        );
      } else {
        // Set final states immediately for reduced motion
        gsap.set(['.work-eyebrow', '.work-headline', '.project-card'], { opacity: 1, y: 0 });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div className="work-eyebrow flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-neutral-400" />
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-500">
              SELECTED WORK
            </span>
          </div>

          <h2 className="work-headline text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight text-neutral-900 leading-[1.1] max-w-5xl">
            Work built to move businesses forward.
          </h2>
        </div>

        {/* Projects */}
        <div className="space-y-20 md:space-y-32">
          {projects.map((project, index) => {
            // Break zigzag pattern after 2 consecutive alternating layouts
            // Use different layout for projects 3-4
            if (index < 2) {
              // First 2 projects: alternating zigzag
              return (
                <div
                  key={index}
                  className={`project-card grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100 group ${
                      index % 2 === 1 ? 'lg:col-start-2' : ''
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.services.map((service, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono uppercase tracking-[0.15em] px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-neutral-900 mb-4 leading-[1.2]">
                      {project.title}
                    </h3>

                    <p className="text-sm font-mono uppercase tracking-[0.15em] text-neutral-500 mb-6">
                      {project.industry}
                    </p>

                    <p className="text-base md:text-lg text-neutral-600 leading-[1.7] mb-8 max-w-xl">
                      {project.description}
                    </p>

                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-2 text-base text-neutral-900 font-semibold hover:text-primary transition-colors group"
                    >
                      <span>View Case Study</span>
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            } else {
              // Projects 3-4: vertical stack layout (breaks the zigzag pattern)
              return (
                <div key={index} className="project-card max-w-5xl mx-auto">
                  <div className="bg-neutral-50 rounded-3xl overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100 group">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 1200px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-12">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.services.map((service, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-mono uppercase tracking-[0.15em] px-3 py-1 bg-white text-neutral-700 rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>

                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-neutral-900 mb-4 leading-[1.2]">
                        {project.title}
                      </h3>

                      <p className="text-sm font-mono uppercase tracking-[0.15em] text-neutral-500 mb-6">
                        {project.industry}
                      </p>

                      <p className="text-base md:text-lg text-neutral-600 leading-[1.7] mb-8">
                        {project.description}
                      </p>

                      <Link
                        href={project.link}
                        className="inline-flex items-center gap-2 text-base text-neutral-900 font-semibold hover:text-primary transition-colors group"
                      >
                        <span>View Case Study</span>
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
