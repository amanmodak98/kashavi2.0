'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    shortDesc: 'Modern, fast & scalable',
    longDesc: 'Build lightning-fast websites with cutting-edge technologies. React, Next.js, and headless CMS integration.',
    features: ['Responsive Design', 'SEO Optimized', 'Performance First', 'CMS Integration'],
    color: 'from-orange-400 to-pink-500',
  },
  {
    icon: '📱',
    title: 'Mobile Apps',
    shortDesc: 'Native iOS & Android',
    longDesc: 'Cross-platform mobile applications with native performance. React Native and Flutter expertise.',
    features: ['Cross-Platform', 'Native Feel', 'Offline Support', 'Push Notifications'],
    color: 'from-blue-400 to-cyan-500',
  },
  {
    icon: '🤖',
    title: 'AI Solutions',
    shortDesc: 'Intelligent automation',
    longDesc: 'Leverage AI and machine learning to automate processes and gain insights from your data.',
    features: ['ChatGPT Integration', 'ML Models', 'Automation', 'Data Analysis'],
    color: 'from-purple-400 to-pink-500',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    shortDesc: 'Beautiful & functional',
    longDesc: 'Create stunning user experiences that convert. From wireframes to high-fidelity prototypes.',
    features: ['User Research', 'Prototyping', 'Design Systems', 'A/B Testing'],
    color: 'from-green-400 to-teal-500',
  },
  {
    icon: '🛒',
    title: 'E-Commerce',
    shortDesc: 'Sell online effortlessly',
    longDesc: 'Full-featured e-commerce platforms with payment processing, inventory, and order management.',
    features: ['Payment Gateway', 'Inventory', 'Analytics', 'Marketing Tools'],
    color: 'from-yellow-400 to-orange-500',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    shortDesc: 'Deploy with confidence',
    longDesc: 'Scalable cloud infrastructure on AWS, Azure, or GCP with CI/CD pipelines and monitoring.',
    features: ['Docker/K8s', 'CI/CD', 'Monitoring', 'Auto-Scaling'],
    color: 'from-indigo-400 to-blue-500',
  },
];

export function ServicesAdvanced() {
  const sectionRef = useRef<HTMLElement>(null);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header animation with final visible state
      gsap.fromTo('.services-header',
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true,
          },
          clearProps: 'transform',
        }
      );

      // Staggered card entrance with 3D effect - ensure final state is visible
      gsap.fromTo('.service-card-wrapper',
        {
          opacity: 0,
          y: 100,
          rotationX: -30,
          transformOrigin: '50% 100%',
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: {
            each: 0.15,
            from: 'start',
          },
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
            once: true,
          },
          clearProps: 'transform',
        }
      );

      // Parallax effect for background elements
      gsap.to('.service-bg-shape', {
        y: -100,
        rotation: 360,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardFlip = (index: number) => {
    setFlippedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    gsap.to(card, {
      rotationX: rotateX,
      rotationY: rotateY,
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotationX: 0,
      rotationY: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <section ref={sectionRef} className="relative py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="service-bg-shape absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-orange-400/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="service-bg-shape absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="services-header text-center mb-12">
          <span className="inline-block px-5 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-bold text-primary uppercase tracking-wider mb-6">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Services That <span className="text-gradient">Drive Results</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto px-4">
            From concept to deployment, we deliver end-to-end solutions tailored to your business needs.
          </p>
        </div>

        {/* Services Grid with 3D Cards */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card-wrapper preserve-3d cursor-pointer relative ${
                flippedCards.includes(index) ? 'z-50' : 'z-10'
              }`}
              onClick={() => handleCardFlip(index)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              style={{ perspective: '1500px' }}
            >
              <div
                className={`relative h-[400px] md:h-[420px] transition-transform duration-700 preserve-3d ${
                  flippedCards.includes(index) ? 'rotate-y-180' : ''
                }`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of Card */}
                <div
                  className="absolute inset-0 backface-hidden glass-card p-6 md:p-8 group hover:shadow-2xl transition-shadow"
                  style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                >
                  {/* Icon with animated gradient background */}
                  <div className="relative mb-4 md:mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity`} />
                    <div className="relative text-5xl md:text-6xl p-4 md:p-6 bg-white rounded-2xl inline-block group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-neutral-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-primary font-semibold mb-3 md:mb-4 text-sm">
                    {service.shortDesc}
                  </p>
                  <p className="text-sm md:text-base text-neutral-600 mb-4 md:mb-6 leading-relaxed">
                    {service.longDesc}
                  </p>

                  {/* Click to flip indicator */}
                  <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 flex items-center justify-center gap-2 text-xs md:text-sm text-neutral-500 group-hover:text-primary transition-colors">
                    <span>Click to see features</span>
                    <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className={`absolute inset-0 backface-hidden glass-card p-6 md:p-8 bg-gradient-to-br ${service.color}`}
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg) translateZ(0)',
                  }}
                >
                  <div className="h-full flex flex-col justify-between text-white">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Key Features</h3>
                      <ul className="space-y-3 md:space-y-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 group/item">
                            <div className="mt-1 w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-white/30 transition-colors">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-base md:text-lg font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button className="mt-6 w-full py-3 md:py-4 bg-white text-neutral-900 rounded-xl font-bold hover:bg-opacity-90 transition-all hover:scale-105">
                      Get Started
                    </button>

                    {/* Click to flip back indicator */}
                    <div className="mt-3 md:mt-4 text-center text-xs md:text-sm text-white/70">
                      Click to flip back
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-neutral-600 mb-6 text-lg">
            Don't see what you're looking for? We do custom development too.
          </p>
          <button className="px-8 py-4 glass-card font-bold text-lg text-neutral-700 hover:text-primary transition-all duration-300 hover:scale-105">
            Discuss Your Project →
          </button>
        </div>
      </div>

      <style jsx>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .service-card-wrapper {
          transition: z-index 0s;
        }
        .service-card-wrapper.z-50 {
          z-index: 50;
        }
        .service-card-wrapper.z-10 {
          z-index: 10;
        }
      `}</style>
    </section>
  );
}
