'use client';

import { useState } from 'react';
import { faqs } from '@/data/faqs';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null);

  return (
    <section className="section bg-surface" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-narrow">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left column: heading */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <span className="eyebrow mb-5">Frequently Asked</span>
              <h2 id="faq-heading" className="text-balance">The questions clients ask us most</h2>
              <p className="text-ink-600 mt-5 leading-relaxed">
                From pricing and timelines to IP, NDAs and timezone overlap — answers to the things that usually come up before a first call.
              </p>
              <p className="text-sm text-ink-500 mt-6">
                Can't find what you're looking for? <a href="/contact" className="text-brand-700 font-semibold hover:underline">Send us a message →</a>
              </p>
            </div>
          </div>

          {/* Right column: accordion */}
          <div className="lg:col-span-7">
            <ul className="space-y-3">
              {faqs.map((f) => {
                const open = openId === f.id;
                return (
                  <li key={f.id} className="faq-item" data-open={open ? 'true' : 'false'}>
                    <button
                      type="button"
                      onClick={() => setOpenId(open ? null : f.id)}
                      className="faq-trigger"
                      aria-expanded={open}
                      aria-controls={`faq-${f.id}`}
                    >
                      <span className="text-base">{f.question}</span>
                      <svg className="w-5 h-5 text-ink-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    {open && (
                      <div id={`faq-${f.id}`} className="px-5 pb-5 -mt-1">
                        <p className="text-ink-700 leading-relaxed text-sm">
                          {f.answer}
                        </p>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
