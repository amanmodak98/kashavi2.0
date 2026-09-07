'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState<number>(-1);

  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'DISCOVER',
      description: 'Understand the business, audience and opportunity.',
    },
    {
      number: '02',
      title: 'DEFINE',
      description: 'Turn objectives into a clear digital strategy.',
    },
    {
      number: '03',
      title: 'DESIGN',
      description: 'Create experiences people understand and remember.',
    },
    {
      number: '04',
      title: 'BUILD',
      description: 'Engineer fast, scalable and reliable technology.',
    },
    {
      number: '05',
      title: 'LAUNCH',
      description: 'Put the system into the real world.',
    },
    {
      number: '06',
      title: 'GROW',
      description: 'Measure, optimize and continuously improve.',
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header entrance animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          once: true,
        },
      });

      tl.fromTo(
        ['.proc-eyebrow', '.proc-headline'],
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

      // Initial step reveal (subtle)
      tl.fromTo(
        '.process-step',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.08,
          ease: 'power2.out',
          clearProps: 'transform',
        },
        '-=0.5'
      );

      // Scroll-triggered step activation with proper triggers
      steps.forEach((_, index) => {
        const trigger = `.step-${index}`;

        gsap.to({}, {
          scrollTrigger: {
            trigger: trigger,
            start: 'top 65%',
            end: 'bottom 35%',
            onEnter: () => setActiveStep(index),
            onEnterBack: () => setActiveStep(index),
            onLeave: () => {
              if (index < steps.length - 1) {
                setActiveStep(index + 1);
              }
            },
            onLeaveBack: () => {
              if (index > 0) {
                setActiveStep(index - 1);
              } else {
                setActiveStep(-1);
              }
            },
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-neutral-50 py-16 md:py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div className="proc-eyebrow flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-neutral-400" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-500">
              OUR APPROACH
            </span>
          </div>

          <h2 className="proc-headline text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 leading-tight max-w-5xl">
            Strategy before screens.{' '}
            <span className="text-primary">Systems before shortcuts.</span>
          </h2>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute left-20 top-0 bottom-0 w-[2px] bg-neutral-200">
            <div
              className="absolute top-0 w-full bg-primary transition-all duration-500"
              style={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`process-step step-${index} relative lg:pl-40`}
              >
                <div className="flex items-start gap-6 lg:gap-8">
                  {/* Number indicator */}
                  <div
                    className={`hidden lg:flex absolute left-[60px] -translate-x-1/2 w-10 h-10 rounded-full border-2 items-center justify-center font-mono text-sm font-bold transition-all duration-300 ${
                      activeStep >= index
                        ? 'bg-primary border-primary text-white'
                        : 'bg-white border-neutral-300 text-neutral-400'
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 transition-all duration-300 ${
                      activeStep === index
                        ? 'opacity-100'
                        : activeStep > index
                        ? 'opacity-80'
                        : 'opacity-50'
                    }`}
                  >
                    <div className={`bg-white border-2 rounded-2xl p-8 transition-all duration-300 ${
                      activeStep === index
                        ? 'border-primary shadow-xl'
                        : 'border-neutral-200 hover:border-primary hover:shadow-xl'
                    }`}>
                      <div className="flex items-center gap-4 mb-4 lg:hidden">
                        <span className="text-sm font-mono text-primary font-bold">
                          {step.number}
                        </span>
                        <div className="flex-1 h-[1px] bg-neutral-200" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-neutral-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
