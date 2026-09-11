'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const categories = [
  { name: 'All', slug: 'all', count: 24, color: 'brand' },
  { name: 'Web Development', slug: 'web-dev', count: 8, color: 'blue' },
  { name: 'AI & ML', slug: 'ai-ml', count: 6, color: 'purple' },
  { name: 'Mobile Apps', slug: 'mobile', count: 5, color: 'emerald' },
  { name: 'Marketing', slug: 'marketing', count: 5, color: 'pink' },
];

const featuredPost = {
  title: 'Building AI-Powered Applications: Complete Guide for 2026',
  excerpt: 'Learn how to integrate AI capabilities into your web and mobile applications. From OpenAI APIs to custom ML models.',
  category: 'AI & ML',
  author: { name: 'Kapil Kumar', initials: 'KK' },
  date: 'September 5, 2026',
  readTime: '12 min read',
  link: '/blog/ai-powered-applications',
  gradient: 'from-brand-500 to-brand-700',
  icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  ),
};

const posts = [
  {
    title: 'Next.js 16 Performance Tips',
    excerpt: 'Optimize your Next.js app with these proven techniques.',
    category: 'Web Development',
    author: { name: 'Aman Singh', initials: 'AS' },
    date: 'Sep 3, 2026',
    readTime: '8 min',
    gradient: 'from-blue-500 to-blue-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    link: '/blog/nextjs-performance',
  },
  {
    title: 'Mobile-First Design in 2026',
    excerpt: 'Why mobile-first is still the winning strategy.',
    category: 'Mobile Apps',
    author: { name: 'Priya Sharma', initials: 'PS' },
    date: 'Sep 1, 2026',
    readTime: '6 min',
    gradient: 'from-emerald-500 to-emerald-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <rect width="14" height="20" x="5" y="2" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    link: '/blog/mobile-first-design',
  },
  {
    title: 'SEO Strategies That Actually Work',
    excerpt: 'Data-backed SEO tactics for 2026 and beyond.',
    category: 'Marketing',
    author: { name: 'Rahul Verma', initials: 'RV' },
    date: 'Aug 30, 2026',
    readTime: '10 min',
    gradient: 'from-pink-500 to-pink-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <line x1="12" x2="12" y1="20" y2="10" />
        <line x1="18" x2="18" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="16" />
        <line x1="3" x2="21" y1="20" y2="20" />
      </svg>
    ),
    link: '/blog/seo-strategies',
  },
  {
    title: 'React Server Components Explained',
    excerpt: 'Understanding RSC and when to use them.',
    category: 'Web Development',
    author: { name: 'Kapil Kumar', initials: 'KK' },
    date: 'Aug 28, 2026',
    readTime: '7 min',
    gradient: 'from-blue-500 to-blue-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" x2="22" y1="12" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    link: '/blog/react-server-components',
  },
  {
    title: 'Building Custom AI Chatbots',
    excerpt: 'Step-by-step guide to creating intelligent chatbots.',
    category: 'AI & ML',
    author: { name: 'Aman Singh', initials: 'AS' },
    date: 'Aug 26, 2026',
    readTime: '15 min',
    gradient: 'from-brand-500 to-brand-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01" />
        <path d="M12 10h.01" />
        <path d="M16 10h.01" />
      </svg>
    ),
    link: '/blog/custom-ai-chatbots',
  },
  {
    title: 'TypeScript Best Practices 2026',
    excerpt: 'Write cleaner, safer TypeScript code.',
    category: 'Web Development',
    author: { name: 'Priya Sharma', initials: 'PS' },
    date: 'Aug 24, 2026',
    readTime: '9 min',
    gradient: 'from-blue-500 to-blue-700',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    link: '/blog/typescript-best-practices',
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="bg-canvas">
      {/* Hero */}
      <section className="relative overflow-hidden bg-warm">
        <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
        <div
          className="absolute -top-40 -right-32 w-[30rem] h-[30rem] bg-brand-200/40 rounded-full blur-3xl animate-drift"
          aria-hidden="true"
        />

        <div className="relative container-x pt-16 pb-12 md:pt-20 md:pb-16 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="eyebrow eyebrow-center mb-6">Insights & Tutorials</span>
            <h1 className="text-balance mb-5">
              Learn from Real-World<br />
              <span className="text-brand-600">Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-ink-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Practical guides, case studies, and insights from building 50+ digital products.
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => {
                const active = activeCategory === cat.slug;
                return (
                  <button
                    key={cat.slug}
                    type="button"
                    onClick={() => setActiveCategory(cat.slug)}
                    aria-pressed={active}
                    className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-normal ease-out-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                      active
                        ? 'bg-brand-600 text-white shadow-brand-soft'
                        : 'bg-white text-ink-700 border border-line hover:border-brand-300 hover:text-brand-700'
                    }`}
                  >
                    {cat.name}
                    <span className={`text-xs ml-1.5 ${active ? 'text-white/80' : 'text-ink-500'}`}>
                      ({cat.count})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="container-x section-sm">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link
            href={featuredPost.link}
            className="group block bg-white rounded-3xl border border-line overflow-hidden transition-all duration-normal ease-out-soft hover:shadow-lift hover:-translate-y-0.5"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className={`relative h-72 md:h-auto bg-gradient-to-br ${featuredPost.gradient} flex items-center justify-center`}>
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      'radial-gradient(at 30% 30%, rgba(255,255,255,0.35) 0px, transparent 50%)',
                  }}
                  aria-hidden="true"
                />
                <div className="relative text-white/90">{featuredPost.icon}</div>
                <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  Featured
                </span>
              </div>

              <div className="p-7 md:p-10 flex flex-col justify-center">
                <span className="badge mb-4 w-fit">{featuredPost.category}</span>
                <h2 className="text-2xl md:text-3xl font-bold text-ink-900 mb-3 tracking-tight transition-colors group-hover:text-brand-700">
                  {featuredPost.title}
                </h2>
                <p className="text-ink-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-sm text-ink-500">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white text-xs font-bold">
                      {featuredPost.author.initials}
                    </span>
                    <span className="font-medium text-ink-700">{featuredPost.author.name}</span>
                  </div>
                  <span aria-hidden="true">•</span>
                  <span>{featuredPost.date}</span>
                  <span aria-hidden="true">•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Blog grid */}
      <section className="container-x section-sm">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={post.link}
                className="group block h-full bg-white rounded-2xl border border-line overflow-hidden transition-all duration-normal ease-out-soft hover:border-line-strong hover:shadow-lift hover:-translate-y-0.5"
              >
                <div className={`relative h-44 bg-gradient-to-br ${post.gradient} flex items-center justify-center text-white/90`}>
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        'radial-gradient(at 30% 30%, rgba(255,255,255,0.35) 0px, transparent 50%)',
                    }}
                    aria-hidden="true"
                  />
                  <span className="relative">{post.icon}</span>
                </div>

                <div className="p-6">
                  <span className="badge mb-3">{post.category}</span>
                  <h3 className="text-lg font-semibold text-ink-900 mb-2 tracking-tight line-clamp-2 transition-colors group-hover:text-brand-700">
                    {post.title}
                  </h3>
                  <p className="text-sm text-ink-600 mb-4 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-line">
                    <div className="flex items-center gap-2">
                      <span className={`w-7 h-7 rounded-full bg-gradient-to-br ${post.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                        {post.author.initials}
                      </span>
                      <span className="text-xs font-medium text-ink-700">{post.author.name}</span>
                    </div>
                    <span className="text-xs text-ink-500">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="container-x section-sm">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-brand-600 to-brand-700 text-white">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(at 20% 30%, rgba(255,255,255,0.25) 0px, transparent 55%), radial-gradient(at 80% 70%, rgba(255,255,255,0.15) 0px, transparent 50%)',
            }}
            aria-hidden="true"
          />
          <div className="relative px-6 py-12 md:p-14 text-center">
            <h2 className="text-balance text-white mb-3">Never miss an update</h2>
            <p className="text-lg text-white/85 max-w-xl mx-auto mb-8 leading-relaxed">
              Join 2,000+ developers getting weekly insights on web dev, AI, and growth strategies.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <label htmlFor="blog-newsletter" className="sr-only">Email address</label>
              <input
                id="blog-newsletter"
                type="email"
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-3.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder:text-brand-100 focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
              />
              <button type="submit" className="btn bg-white text-brand-700 hover:bg-brand-50 btn-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
