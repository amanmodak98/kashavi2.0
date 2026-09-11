'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { prefersReducedMotion } from '@/lib/animations';
import { useCounterAnimation } from './hooks/useCounterAnimation';
import {
  founderStory,
  problemCards,
  values,
  metrics,
  team,
  successStories,
  process,
  founders,
  whyWeBuilt
} from './aboutData';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [expandedValue, setExpandedValue] = useState<string | null>(null);

  // Hero animations
  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion()) {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Word-by-word headline animation
        tl.fromTo('.hero-word',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }
        );

        tl.fromTo('.hero-subheading',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3'
        );

        tl.fromTo('.hero-meta',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.3'
        );

        // Scroll-triggered sections
        gsap.utils.toArray('.fade-up-section').forEach((section: any) => {
          gsap.fromTo(section,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                once: true
              }
            }
          );
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-32 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-neutral-600" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                ABOUT US
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              {["Building", "digital", "solutions", "that", "actually", "move", "businesses", "forward."].map((word, i) => (
                <span key={i} className="hero-word inline-block mr-3">{word}</span>
              ))}
            </h1>

            <p className="hero-subheading text-lg md:text-xl text-neutral-300 leading-relaxed mb-8 max-w-3xl">
              Founded in 2021, Kashavi Infotech helps businesses scale through thoughtful design and bulletproof code.
            </p>

            <div className="hero-meta flex flex-wrap items-center gap-6 text-neutral-400 text-sm font-medium">
              <div className="flex items-center gap-2">
                <span>📍</span>
                <span>Remote-first</span>
              </div>
              <div className="flex items-center gap-2">
                <span>👥</span>
                <span>15+ Team Members</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🏭</span>
                <span>6 Industries</span>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Orb */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-orange-600 blur-3xl animate-pulse" />
        </div>
      </section>

      {/* Meet the Founders */}
      <section className="fade-up-section py-24 md:py-32">
        <div className="container-x">
          <div className="text-center mb-16">
            <span className="eyebrow eyebrow-center mb-5">The Founders</span>
            <h2 className="text-balance">Two people, one standard.</h2>
            <p className="text-lg text-ink-600 mt-4 max-w-2xl mx-auto">
              Anurag owns delivery and engineering. Kapil owns strategy and growth. Every build at Kashavi has both reviewing it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {founders.map((founder) => (
              <article
                key={founder.id}
                className="bg-white rounded-3xl border border-line p-7 md:p-9 transition-all duration-normal ease-out-soft hover:shadow-lift hover:-translate-y-0.5"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className={`founder-initial bg-gradient-to-br ${founder.accent}`}>
                    {founder.initials}
                  </div>
                  <div>
                    <span className="text-label text-brand-700 uppercase tracking-wider">
                      {founder.role}
                    </span>
                    <h3 className="text-2xl font-bold text-ink-900 tracking-tight mt-1">
                      {founder.name}
                    </h3>
                  </div>
                </div>

                <p className="text-base font-semibold text-ink-900 mb-4 italic">
                  &ldquo;{founder.headline}&rdquo;
                </p>

                <div className="space-y-4">
                  {founder.paragraphs.map((paragraph, i) => (
                    <p key={i} className="text-sm text-ink-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="pt-5 mt-6 border-t border-line">
                  <p className="text-sm font-semibold text-ink-900">
                    — {founder.signature}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Shared "Why we built Kashavi" manifesto */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <span className="eyebrow eyebrow-center mb-5">Why We Built Kashavi</span>
            <p className="text-lg md:text-xl text-ink-700 leading-relaxed">
              {whyWeBuilt}
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="fade-up-section py-24 md:py-32 bg-neutral-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 mb-4">
              The Problem
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problemCards.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group bg-white rounded-2xl p-8 border-2 border-neutral-200 hover:border-primary hover:shadow-2xl transition-all duration-400 cursor-default"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="fade-up-section py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 mb-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <motion.div
                key={value.id}
                className="bg-white rounded-2xl p-8 border-2 border-neutral-200 hover:border-neutral-900 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setExpandedValue(expandedValue === value.id ? null : value.id)}
                whileHover={{ y: -4 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {value.name}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {value.description}
                </p>

                {expandedValue === value.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pt-4 border-t border-neutral-200"
                  >
                    <p className="text-sm font-semibold text-neutral-900 mb-2">Real Example:</p>
                    <p className="text-sm text-neutral-600 leading-relaxed italic">
                      "{value.example}"
                    </p>
                  </motion.div>
                )}

                <button className="mt-4 text-sm font-semibold text-primary hover:text-orange-600 transition-colors">
                  {expandedValue === value.id ? "Show less" : "Show example →"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="fade-up-section py-24 md:py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {metrics.map((metric, index) => (
              <MetricCounter key={index} {...metric} />
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="fade-up-section py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 mb-4">
              Meet The Team
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <motion.div
                key={member.id}
                className="group bg-white rounded-2xl overflow-hidden border-2 border-neutral-200 hover:border-primary hover:shadow-2xl transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                <div className={`aspect-square flex items-center justify-center bg-gradient-to-br ${member.accent}`}>
                  <span className="w-32 h-32 rounded-full bg-white/15 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center text-4xl font-black text-white">
                    {member.initials}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="fade-up-section py-24 md:py-32 bg-neutral-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 mb-4">
              Transforming Businesses
            </h2>
          </div>

          <div className="space-y-16">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center bg-white rounded-2xl p-8 md:p-12 border-2 border-neutral-200 hover:border-primary hover:shadow-xl transition-all duration-300`}
              >
                <div className="flex-1 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-black text-neutral-900">
                    {story.client}
                  </h3>

                  <div>
                    <p className="text-sm font-bold text-neutral-500 uppercase tracking-wide mb-2">Challenge</p>
                    <p className="text-neutral-700">{story.challenge}</p>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-neutral-500 uppercase tracking-wide mb-2">Solution</p>
                    <p className="text-neutral-700">{story.solution}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {story.results.map((result, i) => (
                      <div key={i} className="text-center p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                        <div className="text-2xl font-black text-primary mb-1">{result.value}</div>
                        <div className="text-xs text-neutral-600 font-medium">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={story.link}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-orange-600 transition-colors"
                  >
                    <span>View Full Case Study</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                <div className="flex-1 w-full">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary/10 to-orange-600/10 border-2 border-neutral-200 flex items-center justify-center">
                    <p className="text-neutral-400 font-medium">Project Visual</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="fade-up-section py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 mb-4">
              How It Actually Works
            </h2>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex gap-6 items-start group"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-black group-hover:scale-110 transition-transform">
                  {step.number}
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="text-2xl font-black text-neutral-900">{step.title}</h3>
                    <span className="text-sm font-semibold text-neutral-500">{step.duration}</span>
                  </div>
                  <p className="text-neutral-700 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to build something great?
          </h2>
          <p className="text-xl md:text-2xl text-neutral-300 mb-12 leading-relaxed">
            Whether you have a clear vision or just an idea, let's talk about how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-orange-600 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <span>Start a Project</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 font-bold text-lg rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              <span>View Our Work</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function MetricCounter({ value, prefix = '', suffix = '', label }: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  const { displayValue, ref } = useCounterAnimation(value, 2000, prefix, suffix);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2">
        {displayValue}
      </div>
      <div className="text-sm md:text-base text-neutral-400 font-medium uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}
