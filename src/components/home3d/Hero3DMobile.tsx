'use client';

import Link from 'next/link';

export function Hero3DMobile() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-stone-950 via-stone-900 to-stone-950 overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(249, 115, 22, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(249, 115, 22, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-20 relative z-10 w-full">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
            Digital solutions<br />
            that <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">actually work</span>
          </h1>

          <p className="text-xl text-stone-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            We build websites and apps that grow your business. Beautiful design, solid code, real results.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-10 max-w-md mx-auto">
            <div>
              <div className="text-3xl font-black text-orange-500 mb-1">50+</div>
              <div className="text-xs text-stone-600">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-black text-orange-500 mb-1">98%</div>
              <div className="text-xs text-stone-600">Happy</div>
            </div>
            <div>
              <div className="text-3xl font-black text-orange-500 mb-1">2-3wk</div>
              <div className="text-xs text-stone-600">Delivery</div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-4 max-w-md mx-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white font-bold text-lg rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/50"
            >
              <span>Start Your Project</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 font-bold text-lg rounded-xl hover:bg-white/20 transition-all"
            >
              <span>View Our Work</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
