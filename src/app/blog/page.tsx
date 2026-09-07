'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { heading, body, section, container, textColor, cn } from '@/lib/typography';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { name: 'All', slug: 'all', count: 24 },
  { name: 'Web Development', slug: 'web-dev', count: 8 },
  { name: 'AI & Machine Learning', slug: 'ai-ml', count: 6 },
  { name: 'Mobile Apps', slug: 'mobile', count: 5 },
  { name: 'Digital Marketing', slug: 'marketing', count: 5 },
];

const featuredPost = {
  title: 'Building AI-Powered Applications: A Complete Guide for 2024',
  excerpt: 'Learn how to integrate AI capabilities into your web and mobile applications. From OpenAI APIs to custom ML models, we cover everything you need to know.',
  category: 'AI & Machine Learning',
  author: 'Aman Kashyap',
  date: 'September 5, 2024',
  readTime: '12 min read',
  image: '🤖',
  slug: 'building-ai-powered-applications-2024',
  featured: true,
};

const posts = [
  {
    title: 'Next.js 14: What\'s New and Why It Matters',
    excerpt: 'Explore the latest features in Next.js 14, including Server Actions, Partial Prerendering, and improved performance.',
    category: 'Web Development',
    author: 'Dev Team',
    date: 'September 1, 2024',
    readTime: '8 min read',
    image: '⚡',
    slug: 'nextjs-14-whats-new',
  },
  {
    title: 'Optimizing React Performance: Advanced Techniques',
    excerpt: 'Deep dive into React optimization strategies that can dramatically improve your app\'s speed and user experience.',
    category: 'Web Development',
    author: 'Dev Team',
    date: 'August 28, 2024',
    readTime: '10 min read',
    image: '⚛️',
    slug: 'optimizing-react-performance',
  },
  {
    title: 'ChatGPT for Business: Real-World Use Cases',
    excerpt: 'Discover how businesses are leveraging ChatGPT to automate customer service, generate content, and boost productivity.',
    category: 'AI & Machine Learning',
    author: 'Aman Kashyap',
    date: 'August 25, 2024',
    readTime: '7 min read',
    image: '💬',
    slug: 'chatgpt-business-use-cases',
  },
  {
    title: 'Mobile-First Design: Best Practices for 2024',
    excerpt: 'Why mobile-first design is critical and how to implement it effectively in your next project.',
    category: 'Mobile Apps',
    author: 'Design Team',
    date: 'August 22, 2024',
    readTime: '6 min read',
    image: '📱',
    slug: 'mobile-first-design-best-practices',
  },
  {
    title: 'SEO in 2024: What Actually Works',
    excerpt: 'Cut through the noise with proven SEO strategies that drive real traffic and conversions in today\'s landscape.',
    category: 'Digital Marketing',
    author: 'Growth Team',
    date: 'August 18, 2024',
    readTime: '9 min read',
    image: '🔍',
    slug: 'seo-2024-what-works',
  },
  {
    title: 'Building Scalable APIs with Node.js',
    excerpt: 'Learn architecture patterns and best practices for creating robust, scalable REST and GraphQL APIs.',
    category: 'Web Development',
    author: 'Dev Team',
    date: 'August 15, 2024',
    readTime: '11 min read',
    image: '🔧',
    slug: 'building-scalable-apis-nodejs',
  },
  {
    title: 'Flutter vs React Native: 2024 Comparison',
    excerpt: 'An honest comparison of the two leading cross-platform frameworks to help you choose the right one.',
    category: 'Mobile Apps',
    author: 'Dev Team',
    date: 'August 12, 2024',
    readTime: '8 min read',
    image: '📲',
    slug: 'flutter-vs-react-native-2024',
  },
  {
    title: 'Content Marketing That Converts',
    excerpt: 'How to create content that not only attracts visitors but turns them into paying customers.',
    category: 'Digital Marketing',
    author: 'Growth Team',
    date: 'August 8, 2024',
    readTime: '7 min read',
    image: '📝',
    slug: 'content-marketing-that-converts',
  },
  {
    title: 'Machine Learning for Beginners: Getting Started',
    excerpt: 'Your first steps into machine learning: essential concepts, tools, and resources to begin your journey.',
    category: 'AI & Machine Learning',
    author: 'Dev Team',
    date: 'August 5, 2024',
    readTime: '10 min read',
    image: '🧠',
    slug: 'machine-learning-beginners-guide',
  },
];

export default function BlogPage() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content', {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
      });

      gsap.from('.category-pill', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.categories-section',
          start: 'top 85%'
        }
      });

      gsap.from('.featured-post', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.featured-post',
          start: 'top 80%'
        }
      });

      gsap.from('.blog-card', {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.blog-grid',
          start: 'top 75%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen">
      {/* Hero Section */}
      <div className={cn(section.hero, 'bg-gradient-to-br from-orange-50 via-white to-blue-50')}>
        <div className={container.default}>
          <div className="hero-content text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-semibold text-primary uppercase tracking-wider mb-6">
              Our Blog
            </span>
            <h1 className={cn(heading.h1, textColor.primary, 'mb-6 text-5xl md:text-7xl font-black')}>
              Insights, Tutorials &
              <span className="block text-primary">Industry Trends</span>
            </h1>
            <p className={cn(body.large, textColor.secondary)}>
              Expert advice on web development, mobile apps, AI, and digital growth. Stay ahead with actionable insights from our team.
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className={cn('categories-section', section.compact, 'bg-white border-b border-neutral-200')}>
        <div className={container.default}>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className={cn(
                  'category-pill px-6 py-3 rounded-full font-semibold transition-all duration-300',
                  category.slug === 'all'
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                )}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      <div className={cn(section.large, 'bg-gradient-to-b from-white to-neutral-50')}>
        <div className={container.default}>
          <div className="text-center mb-12">
            <h2 className={cn(heading.h2, textColor.primary)}>
              Featured <span className="text-primary">Article</span>
            </h2>
          </div>

          <div className="featured-post glass-card p-8 md:p-12 group hover:shadow-2xl transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                  {featuredPost.category}
                </div>
                <h3 className={cn(heading.h1, textColor.primary, 'mb-4 text-3xl md:text-4xl group-hover:text-primary transition-colors')}>
                  {featuredPost.title}
                </h3>
                <p className={cn(body.large, textColor.secondary, 'mb-6')}>
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-neutral-600 mb-6">
                  <span className="font-semibold">{featuredPost.author}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300"
                >
                  <span>Read Article</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="order-1 md:order-2 text-center">
                <div className="text-9xl md:text-[12rem] group-hover:scale-110 transition-transform duration-500">
                  {featuredPost.image}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className={cn(section.large, 'bg-white')}>
        <div className={container.default}>
          <div className="text-center mb-16">
            <h2 className={cn(heading.h1, textColor.primary, 'mb-4')}>
              Recent <span className="text-primary">Articles</span>
            </h2>
            <p className={cn(body.large, textColor.secondary, 'max-w-2xl mx-auto')}>
              Fresh insights and tutorials from our team of experts.
            </p>
          </div>

          <div className="blog-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="blog-card glass-card p-6 group hover:shadow-xl transition-all duration-300"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {post.image}
                </div>
                <div className="inline-block px-3 py-1 bg-orange-100 text-primary text-xs font-semibold rounded-full mb-3">
                  {post.category}
                </div>
                <h3 className={cn(heading.h3, textColor.primary, 'mb-3 group-hover:text-primary transition-colors')}>
                  {post.title}
                </h3>
                <p className={cn(body.default, textColor.secondary, 'mb-4')}>
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-neutral-500 mb-4">
                  <span className="font-semibold">{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-500">{post.readTime}</span>
                  <svg className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-neutral-100 text-neutral-900 rounded-xl font-semibold hover:bg-neutral-200 transition-all duration-300">
              Load More Articles
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className={cn(section.large, 'bg-gradient-to-br from-primary via-accent to-primary')}>
        <div className={container.narrow}>
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Never Miss an Update
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Get the latest articles, tutorials, and industry insights delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-neutral-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm mt-4 opacity-70">
              Join 2,000+ subscribers. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Topics Cloud */}
      <div className={cn(section.default, 'bg-white')}>
        <div className={container.default}>
          <div className="text-center mb-12">
            <h2 className={cn(heading.h2, textColor.primary, 'mb-4')}>
              Explore by <span className="text-primary">Topic</span>
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React', 'Next.js', 'TypeScript', 'Node.js', 'AI & ML',
              'Mobile Development', 'SEO', 'Performance', 'Security',
              'UI/UX Design', 'API Design', 'Cloud Computing', 'DevOps',
              'Growth Hacking', 'Content Strategy', 'E-commerce'
            ].map((topic, index) => (
              <button
                key={index}
                className="px-5 py-2.5 bg-neutral-100 text-neutral-700 rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
