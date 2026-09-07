'use client';

import Link from 'next/link';
import Image from 'next/image';

export function FooterSection() {
  return (
    <footer className="relative bg-neutral-900 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Top Statement */}
        <div className="mb-16 text-center">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight max-w-4xl mx-auto">
            Digital products. Intelligent systems.{' '}
            <span className="text-primary">Sustainable growth.</span>
          </p>
        </div>

        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-16 border-b border-neutral-800">
          {/* Explore */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500 mb-6">
              EXPLORE
            </h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'Work', 'About', 'Pricing', 'Blog', 'Contact'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-base font-medium text-neutral-400 hover:text-white transition-colors leading-relaxed tracking-wide"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500 mb-6">
              SERVICES
            </h3>
            <ul className="space-y-3">
              {[
                'Web Development',
                'Software',
                'AI & Automation',
                'Digital Marketing',
                'SEO',
                'UI/UX',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-base font-medium text-neutral-400 hover:text-white transition-colors leading-relaxed tracking-wide"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500 mb-6">
              CONNECT
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@kashavi.com"
                  className="text-base font-medium text-neutral-400 hover:text-white transition-colors leading-relaxed tracking-wide"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-neutral-400 hover:text-white transition-colors leading-relaxed tracking-wide"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-neutral-400 hover:text-white transition-colors leading-relaxed tracking-wide"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-neutral-400 hover:text-white transition-colors leading-relaxed tracking-wide"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-neutral-500 mb-6">
              CONTACT
            </h3>
            <div className="space-y-4">
              <div>
                <div className="text-lg font-bold text-white mb-2 tracking-tight">Kashavi Infotech</div>
                <p className="text-base text-neutral-400 leading-relaxed">
                  Let's build something meaningful.
                </p>
              </div>
              <div className="space-y-2 text-sm leading-relaxed">
                <a
                  href="mailto:info@kashavi.com"
                  className="block text-neutral-400 hover:text-white transition-colors tracking-wide"
                >
                  info@kashavi.com
                </a>
                <a
                  href="tel:+91"
                  className="block text-neutral-400 hover:text-white transition-colors tracking-wide"
                >
                  +91 XXX XXX XXXX
                </a>
                <p className="text-neutral-400 tracking-wide">Haridwar, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <div>© 2026 Kashavi Infotech. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
