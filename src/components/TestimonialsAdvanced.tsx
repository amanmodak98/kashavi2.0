'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { heading, body, supporting, textColor, section, cn } from '@/lib/typography';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'TechVista Inc.',
    image: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    text: 'Kashavi transformed our digital presence completely. The team delivered a stunning website that increased our conversions by 180%. Their attention to detail and innovative approach is unmatched.',
    color: 'from-orange-400 to-pink-500',
  },
  {
    id: 2,
    name: 'James Rodriguez',
    role: 'Founder',
    company: 'StartUp Labs',
    image: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    text: 'Working with Kashavi was a game-changer. They built our MVP in record time without compromising quality. The AI integration they implemented has saved us countless hours.',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Marketing Director',
    company: 'GrowthHub',
    image: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    text: 'The mobile app they developed exceeded all expectations. Smooth, fast, and beautifully designed. Our user engagement increased by 250% within the first month.',
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 4,
    name: 'Michael Park',
    role: 'CTO',
    company: 'DataFlow Solutions',
    image: 'https://i.pravatar.cc/150?img=8',
    rating: 5,
    text: 'Exceptional technical expertise combined with creative solutions. They scaled our infrastructure to handle 10x traffic with zero downtime. Highly recommended!',
    color: 'from-green-400 to-teal-500',
  },
];

export function TestimonialsAdvanced() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating testimonial cards animation
      gsap.to('.testimonial-float', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.5,
      });

      // 3D rotation on scroll
      gsap.to('.testimonial-3d-wrapper', {
        rotationY: 15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section ref={sectionRef} className={cn('relative overflow-hidden', section.default)} aria-labelledby="testimonials-heading">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/50 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className={cn(supporting.label, 'inline-block px-5 py-2 bg-success/10 border border-success/30 rounded-full text-success mb-6')}>
            Client Love
          </span>
          <h2 id="testimonials-heading" className={cn(heading.h1, textColor.primary, 'mb-4 md:mb-6 px-4')}>
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className={cn(body.large, textColor.secondary, 'max-w-3xl mx-auto px-4')}>
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* 3D Testimonial Display */}
        <div className="testimonial-3d-wrapper perspective-1500 preserve-3d mb-8 md:mb-12" role="region" aria-label="Testimonials" aria-live="polite">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start lg:items-center">
            {/* Main Active Testimonial */}
            <div className="testimonial-float relative z-20 mb-8 lg:mb-0">
              <div
                className={`glass-card p-6 sm:p-8 md:p-10 relative overflow-hidden hover:scale-[1.02] transition-transform duration-500`}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[activeIndex].color} opacity-10`} aria-hidden="true" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="text-5xl md:text-6xl text-primary/20 mb-4 md:mb-6" aria-hidden="true">"</div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4 md:mb-6" role="img" aria-label={`${testimonials[activeIndex].rating} out of 5 stars`}>
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-base md:text-lg lg:text-xl text-neutral-700 leading-relaxed mb-6 md:mb-8 italic">
                    {testimonials[activeIndex].text}
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="relative flex-shrink-0">
                      <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[activeIndex].color} rounded-full blur-md`} aria-hidden="true" />
                      <img
                        src={testimonials[activeIndex].image}
                        alt=""
                        className="relative w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-4 border-white"
                      />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-base md:text-lg text-neutral-900">{testimonials[activeIndex].name}</h4>
                      <p className="text-xs md:text-sm text-neutral-600 truncate">
                        {testimonials[activeIndex].role} at {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Grid with 3D hover */}
            <nav className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6" aria-label="Select testimonial">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`testimonial-float glass-card p-4 md:p-6 text-left transition-all duration-500 hover:scale-[1.03] preserve-3d ${
                    activeIndex === index
                      ? 'ring-2 ring-primary shadow-xl scale-[1.03]'
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  aria-label={`View testimonial from ${testimonial.name}, ${testimonial.role} at ${testimonial.company}`}
                  aria-pressed={activeIndex === index}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={testimonial.image}
                      alt=""
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <h5 className="font-bold text-xs md:text-sm truncate">{testimonial.name}</h5>
                      <p className="text-xs text-neutral-600 truncate">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-neutral-700 line-clamp-2">{testimonial.text}</p>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Navigation Dots */}
        <nav className="flex justify-center gap-2 md:gap-3 mt-8 md:mt-12 mb-12 md:mb-16" aria-label="Testimonial navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`transition-all duration-300 ${
                activeIndex === index
                  ? 'w-10 md:w-12 h-3 bg-primary rounded-full'
                  : 'w-3 h-3 bg-neutral-300 rounded-full hover:bg-primary/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={activeIndex === index ? 'true' : 'false'}
            />
          ))}
        </nav>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-4">
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '120+', label: 'Happy Clients' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '500+', label: 'Projects Delivered' },
          ].map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="text-3xl md:text-4xl font-black text-gradient mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-neutral-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
