'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { heading, body, supporting, textColor, section, cn } from '@/lib/typography';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote:
        'Kashavi helped us turn our digital presence into something that actually works for the business. The results speak for themselves.',
      name: 'Rajesh Kumar',
      role: 'CEO',
      company: 'TechVenture India',
    },
    {
      quote:
        'Working with Kashavi was a game-changer. They understood our business goals and delivered a system that drives real growth.',
      name: 'Priya Sharma',
      role: 'Marketing Director',
      company: 'GrowthLabs',
    },
    {
      quote:
        'The team at Kashavi built us a platform that scales. Their technical expertise and business focus made all the difference.',
      name: 'Amit Patel',
      role: 'Founder',
      company: 'StartupHub',
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
        ['.test-eyebrow', '.test-headline'],
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
        '.testimonial-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          clearProps: 'transform',
        },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className={cn('relative bg-neutral-50', section.default)}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center">
          <div className="test-eyebrow flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-neutral-400" />
            <span className={cn(supporting.label, textColor.tertiary)}>
              CLIENT VOICES
            </span>
            <div className="w-12 h-[1px] bg-neutral-400" />
          </div>

          <h2 className={cn('test-headline', heading.h1, textColor.primary, 'leading-tight max-w-5xl mx-auto')}>
            Don't take our word for it.
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="testimonial-card relative bg-white border-2 border-neutral-200 rounded-2xl p-12 md:p-16">
            {/* Quote */}
            <div className="text-6xl text-primary mb-8 leading-none" aria-hidden="true">"</div>
            <blockquote className={cn(heading.h2, textColor.primary, 'font-medium italic mb-12')}>
              {testimonials[activeIndex].quote}
            </blockquote>

            {/* Author */}
            <div>
              <div className={cn(body.large, 'font-bold', textColor.primary, 'mb-1')}>
                {testimonials[activeIndex].name}
              </div>
              <div className={cn(supporting.caption, textColor.secondary)}>
                {testimonials[activeIndex].role} · {testimonials[activeIndex].company}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 border-2 border-neutral-300 rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-8 bg-primary' : 'bg-neutral-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 border-2 border-neutral-300 rounded-full flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
