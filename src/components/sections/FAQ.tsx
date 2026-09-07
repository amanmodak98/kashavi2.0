'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  number: string;
  question: string;
  answer: string;
}

export function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      number: '01',
      question: 'What kind of businesses do you work with?',
      answer:
        'We work with ambitious businesses across all industries, from startups to established enterprises. Our ideal clients are those who see digital as a growth lever, not just a cost center.',
    },
    {
      number: '02',
      question: 'Do you build websites from scratch?',
      answer:
        'Yes. We build custom websites, web applications, and digital products from the ground up. We also redesign and optimize existing platforms when that makes more sense.',
    },
    {
      number: '03',
      question: 'Can you handle both development and marketing?',
      answer:
        'Absolutely. We connect development, design, and marketing into one ecosystem. This integration is what makes our approach different and effective.',
    },
    {
      number: '04',
      question: 'Do you provide ongoing support?',
      answer:
        'Yes. We offer maintenance, hosting, updates, and continuous optimization. We do not disappear after launch. We build for the long term.',
    },
    {
      number: '05',
      question: 'Can you build custom software or AI solutions?',
      answer:
        'Yes. We build custom software, AI automation, intelligent workflows, and business systems. If it requires engineering and creates leverage, we can build it.',
    },
    {
      number: '06',
      question: 'How long does a typical project take?',
      answer:
        'It depends on the scope. A website can take 4-8 weeks. A full digital ecosystem with software and marketing takes 3-6 months. We move fast without cutting corners.',
    },
    {
      number: '07',
      question: 'What does a project cost?',
      answer:
        'Projects range from ₹2L for a premium website to ₹10L+ for complete digital systems. We provide detailed proposals after understanding your goals.',
    },
    {
      number: '08',
      question: 'How do we get started?',
      answer:
        'Book a call or send us a message. We will discuss your business, goals, and what you are trying to achieve. If it is a good fit, we will map out a clear plan forward.',
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
        ['.faq-eyebrow', '.faq-headline'],
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
        '.faq-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          clearProps: 'transform',
        },
        '-=0.4'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="relative bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-20 lg:mb-24">
          <div className="faq-eyebrow flex items-center gap-4 mb-6 md:mb-8">
            <div className="w-12 h-[1px] bg-neutral-400" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500">
              QUESTIONS
            </span>
          </div>

          <h2 className="faq-headline text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.1] max-w-5xl">
            Before we start.
          </h2>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item border-b border-neutral-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left py-7 md:py-8 flex items-start justify-between gap-6 group"
              >
                <div className="flex items-start gap-6 md:gap-8 flex-1">
                  <span className="text-xs md:text-sm font-mono text-neutral-400 mt-1 tabular-nums">{faq.number}</span>
                  <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 group-hover:text-primary transition-colors leading-tight">
                    {faq.question}
                  </h3>
                </div>
                <div
                  className={`text-3xl font-light text-primary transition-transform duration-300 flex-shrink-0 ${
                    expandedIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedIndex === index ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="pb-8 pl-10 md:pl-16 pr-12 text-base md:text-lg text-neutral-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
