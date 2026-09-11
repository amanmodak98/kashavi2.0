'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const services = [
  { name: 'Web Development', href: '/services/web-development' },
  { name: 'E-Commerce', href: '/services/ecommerce' },
  { name: 'Mobile Apps', href: '/services/mobile-apps' },
  { name: 'AI & Automation', href: '/services/ai-automation' },
];

const company = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
];

const socials = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.01-1.96-3.2.69-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.96 10.96 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.08 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z"/>
      </svg>
    ),
  },
];

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <footer className="relative bg-warm border-t border-line">
      <div className="container-x pt-20 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-12">
          {/* Brand + Newsletter */}
          <div className="lg:col-span-5 max-w-md">
            <Link href="/" className="inline-flex items-center gap-3 group mb-5">
              <Image
                src="/images/logo.png"
                alt="Kashavi Infotech"
                width={48}
                height={48}
                sizes="48px"
                className="logo-mark-sm w-12 h-12"
              />
              <span className="font-bold text-ink-900 text-[1.05rem] tracking-tight">
                Kashavi<span className="text-brand-600">Infotech</span>
              </span>
            </Link>

            <p className="text-ink-600 leading-relaxed mb-8">
              Building digital products that drive real business growth.
            </p>

            <div className="bg-white rounded-xl border border-line p-5 shadow-soft">
              <h4 className="font-semibold text-ink-900 text-sm mb-3">Get monthly insights</h4>
              {isSubmitted ? (
                <div className="flex items-center gap-2 text-success text-sm font-semibold" role="status">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>Subscribed — check your inbox.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <label htmlFor="footer-newsletter-email" className="sr-only">Email address</label>
                  <input
                    id="footer-newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="form-field flex-1"
                  />
                  <button type="submit" className="btn btn-primary btn-sm">
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-ink-900 text-sm mb-4">Services</h4>
              <ul className="space-y-3">
                {services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink-600 hover:text-brand-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-ink-900 text-sm mb-4">Company</h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-ink-600 hover:text-brand-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-semibold text-ink-900 text-sm mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-ink-600">
                <li>
                  <a href="mailto:info@kashaviinfotech.com" className="hover:text-brand-600 transition-colors break-words">
                    info@kashaviinfotech.com
                  </a>
                </li>
                <li>
                  <a href="tel:+917055070010" className="hover:text-brand-600 transition-colors">
                    +91 70550 70010
                  </a>
                </li>
                <li className="text-ink-500 text-xs leading-relaxed pt-1">
                  Bahadrabad, Haridwar<br />Uttarakhand, India
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-line flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-sm text-ink-500">
            © 2026 Kashavi Infotech. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-line text-ink-600 hover:text-brand-600 hover:border-brand-300 hover:bg-white transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6 text-xs text-ink-500">
            <Link href="/privacy" className="hover:text-brand-600 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-brand-600 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
