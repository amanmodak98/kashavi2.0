'use client';

import Link from 'next/link';

export function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 leading-tight">
          Ready to grow your business?
        </h2>
        <p className="text-xl md:text-2xl text-stone-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          Let's chat about your project. Book a free 30-minute call—no obligation, just honest advice.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-white font-bold text-lg rounded-xl hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Start Your Project</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-stone-900 border-2 border-stone-200 font-bold text-lg rounded-xl hover:border-orange-500 hover:shadow-lg transition-all duration-300"
          >
            <span>View Pricing</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-stone-200 max-w-2xl mx-auto">
          <p className="text-stone-600 leading-relaxed">
            <strong className="text-stone-900">Not ready yet?</strong> That's okay!
            Check out our <Link href="/projects" className="text-orange-500 hover:text-orange-600 font-semibold">portfolio</Link> or
            read more <Link href="/about" className="text-orange-500 hover:text-orange-600 font-semibold">about us</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
