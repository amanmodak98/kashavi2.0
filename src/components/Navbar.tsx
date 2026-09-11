'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const ANNOUNCE_KEY = 'kashavi_announce_v1';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [announceVisible, setAnnounceVisible] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Hydrate announcement visibility from localStorage
  useEffect(() => {
    try {
      const dismissed = window.localStorage.getItem(ANNOUNCE_KEY);
      if (!dismissed) setAnnounceVisible(true);
    } catch {
      setAnnounceVisible(true);
    }
  }, []);

  // Scroll state for header (floating pill vs solid)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (dialogRef.current?.open) dialogRef.current.close();
  }, [pathname]);

  const dismissAnnounce = () => {
    setAnnounceVisible(false);
    try {
      window.localStorage.setItem(ANNOUNCE_KEY, '1');
    } catch {
      /* private mode / SSR — ignore */
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Magnetic CTA handler
  const handleCtaMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    e.currentTarget.style.setProperty('--mx', `${x * 0.18}px`);
    e.currentTarget.style.setProperty('--my', `${y * 0.18}px`);
  };
  const handleCtaMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.setProperty('--mx', '0px');
    e.currentTarget.style.setProperty('--my', '0px');
  };

  return (
    <>
      {/* Announcement bar — fixed at top, sets --announce-h on :root for navbar offset */}
      {announceVisible && (
        <>
          <style>{`:root { --announce-h: 36px; }`}</style>
          <div
            className="announce-bar"
            role="region"
            aria-label="Site announcement"
          >
            <div className="container-x flex items-center justify-center gap-3 py-2">
              <span className="inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-soft" aria-hidden="true" />
              <p className="text-white/90 text-center">
                <strong className="font-semibold text-white">Now booking Q4 projects</strong>
                <span className="hidden sm:inline"> · 2-6 week delivery · 50+ clients served</span>
              </p>
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-1 font-semibold text-white/95 hover:text-white underline-offset-4 hover:underline"
              >
                Book a call
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <button
                type="button"
                onClick={dismissAnnounce}
                aria-label="Dismiss announcement"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 inline-flex items-center justify-center rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
      {!announceVisible && (
        <style>{`:root { --announce-h: 0px; }`}</style>
      )}

      {/* Desktop: floating pill island */}
      <header
        className={`hidden lg:block nav-floating ${isScrolled ? 'is-scrolled' : ''}`}
        style={{ paddingInline: isScrolled ? '0.5rem' : '1rem' }}
      >
        <div className="flex items-center justify-between h-20 gap-6 px-4">
          <Link
            href="/"
            className="group flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            aria-label="Kashavi Infotech — Home"
          >
            <Image
              src="/images/logo.png"
              alt="Kashavi Infotech"
              width={56}
              height={56}
              sizes="56px"
              className="logo-mark w-14 h-14"
              priority
            />
            <span className="font-bold text-ink-900 text-[1.0625rem] tracking-tight whitespace-nowrap">
              Kashavi<span className="text-brand-600">Infotech</span>
            </span>
          </Link>

          <nav aria-label="Primary">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? 'page' : undefined}
                      className={`relative inline-flex items-center px-3 py-2 text-[0.9375rem] font-medium rounded-md transition-colors duration-normal ease-out-soft ${
                        active
                          ? 'text-brand-700'
                          : 'text-ink-600 hover:text-ink-900'
                      }`}
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500 origin-left transition-transform duration-normal ease-out-soft ${
                          active ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+917055070010"
              className="hidden xl:inline-flex items-center gap-1.5 text-sm font-medium text-ink-600 hover:text-brand-700 transition-colors"
              aria-label="Call us at +91 70550 70010"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 70550 70010
            </a>

            <Link
              href="/contact"
              className="btn btn-primary btn-sm magnetic"
              aria-label="Get started with Kashavi Infotech"
              onMouseMove={handleCtaMouseMove}
              onMouseLeave={handleCtaMouseLeave}
            >
              Get Started
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile / tablet: solid edge-to-edge bar */}
      <header
        className={`lg:hidden nav-mobile ${isScrolled ? 'is-scrolled' : ''}`}
      >
        <div className="container-x flex items-center justify-between h-20">
          <Link
            href="/"
            className="group flex items-center gap-2.5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            aria-label="Kashavi Infotech — Home"
          >
            <Image
              src="/images/logo.png"
              alt="Kashavi Infotech"
              width={48}
              height={48}
              sizes="48px"
              className="logo-mark-sm w-12 h-12"
              priority
            />
            <span className="font-bold text-ink-900 text-[1rem] tracking-tight whitespace-nowrap">
              Kashavi<span className="text-brand-600">Infotech</span>
            </span>
          </Link>

          <button
            ref={hamburgerRef}
            type="button"
            onClick={() => dialogRef.current?.showModal()}
            className="inline-flex items-center justify-center w-11 h-11 rounded-md text-ink-900 hover:bg-ink-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            aria-label="Open menu"
          >
            <span className="sr-only">Toggle menu</span>
            <span className="relative w-5 h-4 inline-block">
              <span className="absolute left-0 top-0 w-full h-0.5 bg-current rounded-full" />
              <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-current rounded-full" />
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current rounded-full" />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu — native dialog */}
      <dialog
        ref={dialogRef}
        className="lg:hidden fixed inset-0 w-full h-full max-w-none max-h-none m-0 p-0 bg-transparent backdrop:bg-ink-900/80 backdrop:backdrop-blur-xl"
        aria-label="Mobile navigation"
      >
        <div className="w-full h-full bg-ink-900 text-white flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-5 h-20 border-b border-white/10">
            <Link
              href="/"
              onClick={() => dialogRef.current?.close()}
              className="flex items-center gap-2.5"
              aria-label="Kashavi Infotech — Home"
            >
              <Image
                src="/images/logo.png"
                alt="Kashavi Infotech"
                width={48}
                height={48}
                sizes="48px"
                className="logo-mark-sm w-12 h-12"
              />
              <span className="font-bold text-white text-[1rem] tracking-tight">
                Kashavi<span className="text-brand-400">Infotech</span>
              </span>
            </Link>
            <button
              type="button"
              onClick={() => {
                dialogRef.current?.close();
                hamburgerRef.current?.focus();
              }}
              className="inline-flex items-center justify-center w-11 h-11 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile primary" className="flex-1 px-5 py-8">
            <ul className="flex flex-col gap-1 max-w-md mx-auto w-full">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => dialogRef.current?.close()}
                      aria-current={active ? 'page' : undefined}
                      className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-lg font-semibold transition-colors ${
                        active
                          ? 'text-brand-400 bg-white/5'
                          : 'text-white hover:bg-white/5 hover:text-brand-400'
                      }`}
                    >
                      {link.label}
                      {active && (
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="px-5 pb-8 pt-4 border-t border-white/10 max-w-md mx-auto w-full">
            <Link
              href="/contact"
              onClick={() => dialogRef.current?.close()}
              className="btn btn-primary btn-lg w-full"
            >
              Get Started
              <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+917055070010"
              className="mt-3 inline-flex items-center justify-center gap-2 w-full text-sm text-white/70 hover:text-white py-2"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 70550 70010
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
