'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "The team took time to understand our needs before recommending a package. No upselling, just genuine help.",
    author: 'Sarah Mitchell',
    role: 'CEO, Fashion E-Commerce',
    rating: 5
  },
  {
    quote: "We saw a 340% increase in revenue within 6 months of launch. The platform they built is rock solid.",
    author: 'Raj Patel',
    role: 'Founder, Online Retail',
    rating: 5
  },
  {
    quote: "Best part? They explain everything in plain English. No jargon, no confusion. Just clear communication.",
    author: 'Emily Chen',
    role: 'Marketing Director',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-orange-300" />
            <span className="text-xs font-medium uppercase tracking-wider text-orange-100">
              Client Love
            </span>
            <div className="w-8 h-[1px] bg-orange-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What our clients say
          </h2>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what people think.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-stone-700 mb-6 leading-relaxed text-lg italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-stone-900">{testimonial.author}</p>
                <p className="text-sm text-stone-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
