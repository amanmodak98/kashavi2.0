'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  services: string[];
}

export function Capabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories: ServiceCategory[] = [
    {
      id: 'digital-products',
      number: '01',
      title: 'DIGITAL PRODUCTS',
      services: [
        'Website Development',
        'Web Applications',
        'E-commerce',
        'Custom Software',
        'UI/UX Design',
        'Mobile Applications',
      ],
    },
    {
      id: 'growth',
      number: '02',
      title: 'GROWTH',
      services: [
        'Digital Marketing',
        'SEO',
        'Performance Marketing',
        'Social Media',
        'Content Strategy',
        'Lead Generation',
      ],
    },
    {
      id: 'intelligence',
      number: '03',
      title: 'INTELLIGENCE',
      services: [
        'AI Solutions',
        'Business Automation',
        'Chatbots',
        'Analytics',
        'CRM Integration',
        'Workflow Automation',
      ],
    },
    {
      id: 'infrastructure',
      number: '04',
      title: 'INFRASTRUCTURE',
      services: [
        'Cloud Solutions',
        'APIs & Integrations',
        'Hosting',
        'Maintenance',
        'Security',
        'Technical Support',
      ],
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
        ['.cap-eyebrow', '.cap-headline'],
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
        '.category-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: 'power2.out',
          clearProps: 'transform',
        },
        '-=0.5'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleCategory = (id: string) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <section ref={sectionRef} className="relative bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div className="cap-eyebrow flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-neutral-400" />
            <span className="text-label-lg font-mono uppercase text-neutral-500">
              CAPABILITIES
            </span>
          </div>

          <h2 className="cap-headline text-h1 lg:text-h1-lg text-neutral-900 max-w-5xl">
            Everything your business needs to move forward digitally.
          </h2>
        </div>

        {/* Categories */}
        <div className="space-y-4 max-w-5xl">
          {categories.map((category) => (
            <div key={category.id} className="category-item">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full text-left border-b-2 border-neutral-200 hover:border-neutral-300 transition-colors duration-300"
              >
                <div className="flex items-center justify-between py-8 group">
                  <div className="flex items-center gap-8">
                    <span className="text-small font-mono text-neutral-400">
                      {category.number}
                    </span>
                    <h3 className="text-h3 lg:text-h3-lg text-neutral-900 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <div
                    className={`text-4xl font-light text-primary transition-transform duration-300 ${
                      expandedCategory === category.id ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </div>
                </div>
              </button>

              {/* Expandable content */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedCategory === category.id
                    ? 'max-h-[500px] opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="py-8 pl-20 grid md:grid-cols-2 gap-4">
                  {category.services.map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-neutral-700 hover:text-primary transition-colors"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-body">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
