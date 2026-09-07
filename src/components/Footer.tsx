'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-dark-800/50 border-t border-orange-100/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image src="/images/logo.png" alt="Kashavi Infotech" fill className="object-contain" />
              </div>
              <span className="text-xl font-bold">
                Kashavi<span className="text-gradient">Infotech</span>
              </span>
            </Link>

            <p className="text-gray-light mb-8 leading-relaxed max-w-md">
              AI-powered digital marketing that turns attention into measurable growth. Strategy, creative,
              engineering and automation under one roof.
            </p>

            <div className="mb-6">
              <h4 className="font-bold mb-3">Join the newsletter</h4>
              <p className="text-sm text-gray-light mb-4">
                One practical growth idea a month. No spam, unsubscribe anytime.
              </p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-gray focus:outline-none focus:border-primary transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-xl text-white font-semibold hover:opacity-90 transition-all"
                >
                  →
                </button>
              </form>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {[
                'All Services',
                'Website Development',
                'SEO & Content',
                'Performance Marketing',
                'AI Chatbots',
                'Pricing',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-gray-light hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '/about' },
                { label: 'Case Studies', href: '/case-studies' },
                { label: 'Reviews', href: '/reviews' },
                { label: 'Blog', href: '/blog' },
                { label: 'FAQ', href: '/contact#faq' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-light hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-bold mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:info@kashaviinfotech.com"
                  className="text-gray-light hover:text-white transition-colors"
                >
                  info@kashaviinfotech.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+917055070010"
                  className="text-gray-light hover:text-white transition-colors"
                >
                  +91 70550 70010
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917055070010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-light hover:text-white transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li className="text-gray-light pt-4">
                Bahadrabad, Haridwar<br />
                Uttarakhand, India<br />
                Mon-Sat, 10am-7pm IST
              </li>
              <li className="text-gray-light text-xs pt-2">
                Enquiries answered within one business day.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-light">
            <p>© 2026 Kashavi Infotech. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
            </div>
            <p className="text-xs">Crafted with precision in India.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
