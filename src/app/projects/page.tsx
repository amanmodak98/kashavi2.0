'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import Link from 'next/link';
import { scrollReveal, prefersReducedMotion } from '@/lib/animations';
import { projects, categoryColors } from './projectsData';
import { BrowserMockup } from './components/BrowserMockup';

const PROJECTS_PER_PAGE = 5;

const categories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'web', label: 'Web Development', count: projects.filter(p => p.category === 'web').length },
  { id: 'ecommerce', label: 'E-Commerce', count: projects.filter(p => p.category === 'ecommerce').length },
  { id: 'ai', label: 'AI & Automation', count: projects.filter(p => p.category === 'ai').length },
  { id: 'hospitality', label: 'Hospitality', count: projects.filter(p => p.category === 'hospitality').length },
  { id: 'media', label: 'Media', count: projects.filter(p => p.category === 'media').length },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [currentPage, setCurrentPage] = useState(1);
  const heroRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Filter projects
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === selectedCategory));
    }
    setCurrentPage(1);
  }, [selectedCategory]);

  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  // Hero animations
  useEffect(() => {
    if (!heroRef.current || !filterRef.current) return;

    const ctx = gsap.context(() => {
      if (!prefersReducedMotion()) {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo('.hero-content',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }
        );

        scrollReveal('.filter-bar', {
          trigger: filterRef.current,
          start: 'top 85%',
          duration: 0.6
        });
      }
    }, [heroRef, filterRef]);

    return () => ctx.revert();
  }, []);

  // Scroll to top on page change
  useEffect(() => {
    if (projectsRef.current) {
      window.scrollTo({ top: projectsRef.current.offsetTop - 100, behavior: 'smooth' });
    }
  }, [currentPage]);

  return (
    <section className="min-h-screen bg-neutral-50">
      {/* Hero */}
      <div ref={heroRef} className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
          <div className="hero-content max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-neutral-600" />
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                OUR WORK
              </span>
            </div>

            <h1 className="hero-content text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              Work that moves
              <br />
              <span className="text-primary">businesses forward.</span>
            </h1>

            <p className="hero-content text-lg md:text-xl text-neutral-300 leading-relaxed max-w-3xl mb-8">
              From startups to established brands, we build digital solutions that deliver real results.
            </p>

            <div className="hero-content flex flex-wrap items-center gap-8 text-neutral-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm font-semibold">{projects.length} Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm font-semibold">6 Industries</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-sm font-semibold">98% Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div ref={filterRef} className="sticky top-20 z-30 bg-white border-b border-neutral-200 py-6 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="filter-bar flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-neutral-900 text-white shadow-lg scale-105'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:scale-105'
                }`}
              >
                {category.label}
                <span className="ml-2 opacity-70 font-medium">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Zigzag Layout */}
      <div ref={projectsRef} className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${currentPage}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-32 lg:space-y-48"
            >
              {currentProjects.map((project, index) => {
                const isEven = index % 2 === 0;
                const color = categoryColors[project.category];

                return (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 60, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      delay: index * 0.1,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}
                  >
                    {/* Text Content */}
                    <div className="flex-1 space-y-8">
                      {/* Category Badge */}
                      <div>
                        <div
                          className="inline-block px-4 py-2 rounded-lg mb-6"
                          style={{ backgroundColor: color }}
                        >
                          <span className="text-white text-xs font-bold uppercase tracking-wider">
                            {project.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 mb-4 leading-tight tracking-tight">
                          {project.title}
                        </h2>

                        {/* Tagline */}
                        <p className="text-xl md:text-2xl text-neutral-600 font-medium leading-relaxed">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-lg md:text-xl text-neutral-700 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Results Metrics */}
                      <div className="grid grid-cols-3 gap-4">
                        {project.results.map((result, i) => (
                          <div
                            key={i}
                            className="p-6 rounded-xl border-2 text-center transition-all duration-300 hover:scale-105"
                            style={{
                              backgroundColor: `${color}0D`,
                              borderColor: `${color}33`
                            }}
                          >
                            <div
                              className="text-3xl md:text-4xl font-black mb-2"
                              style={{ color }}
                            >
                              {result.value}
                            </div>
                            <div className="text-xs md:text-sm text-neutral-600 font-medium">
                              {result.metric}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-white border border-neutral-200 text-neutral-700 rounded-lg text-sm font-medium hover:border-neutral-300 hover:shadow-sm transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4">
                        <Link
                          href={`/projects/${project.caseStudySlug}`}
                          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 hover:bg-neutral-800 hover:shadow-2xl hover:scale-105"
                        >
                          {/* Shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                          <span className="relative z-10">Read Case Study</span>

                          <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>

                      {/* Year Badge (mobile only) */}
                      <div className="lg:hidden">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-full font-bold text-sm">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span>{project.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="flex-1 w-full relative">
                      <BrowserMockup
                        image={project.image}
                        title={project.title}
                        liveUrl={project.liveUrl}
                        category={project.category}
                        categoryColor={color}
                      />

                      {/* Year Badge (desktop only) */}
                      <div className="hidden lg:block absolute -top-6 -right-6 w-20 h-20 bg-neutral-900 text-white rounded-full flex items-center justify-center font-black text-lg shadow-2xl z-10">
                        {project.year}
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-32 flex items-center justify-center gap-3">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-12 h-12 rounded-xl bg-neutral-100 hover:bg-neutral-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-105 flex items-center justify-center font-bold text-neutral-700"
              >
                ←
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-12 h-12 rounded-xl font-bold transition-all ${
                    currentPage === page
                      ? 'bg-neutral-900 text-white shadow-lg scale-110'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 hover:scale-105'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-12 h-12 rounded-xl bg-neutral-100 hover:bg-neutral-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-105 flex items-center justify-center font-bold text-neutral-700"
              >
                →
              </button>
            </div>
          )}

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl font-bold text-neutral-400">No projects found in this category</p>
            </div>
          )}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to start your project?
          </h2>
          <p className="text-xl md:text-2xl text-neutral-300 mb-12 leading-relaxed">
            Let's build something amazing together. Get in touch and we'll turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-bold text-lg rounded-xl hover:bg-orange-600 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <span>Start Your Project</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 font-bold text-lg rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              <span>View Our Services</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
