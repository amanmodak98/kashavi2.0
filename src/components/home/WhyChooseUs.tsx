'use client';

import { motion } from 'framer-motion';

const reasons = [
  {
    icon: '🤝',
    title: 'No Handoffs, Just Collaboration',
    description: 'Our designers and developers work together from day one. No "lost in translation" moments, no unexpected limitations. Just smooth execution.',
    example: 'On the Fashion E-Commerce project, our designer and dev sat together throughout discovery. Zero surprises.'
  },
  {
    icon: '⚡',
    title: "Quality Over Speed (But We're Fast)",
    description: "We'd rather take two extra days than ship something mediocre. That said, most projects launch in 2-6 weeks.",
    example: "We once delayed a launch by 3 days because animations weren't smooth enough. The client was okay with it. We weren't."
  },
  {
    icon: '📊',
    title: 'Results, Not Awards',
    description: "Pretty designs are pointless if they don't convert. We A/B test everything and optimize for your business goals.",
    example: "Cut a beautiful hero animation when data showed it hurt mobile conversions. Ego doesn't ship."
  },
  {
    icon: '🔍',
    title: 'Total Transparency',
    description: "You'll always know what we're building and why. No black boxes. Every client gets a code walkthrough.",
    example: 'We explain "why we structured it this way" not just "here\'s how to edit content." You truly own it.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-stone-400" />
            <span className="text-xs font-medium uppercase tracking-wider text-stone-500">
              Why Choose Us
            </span>
            <div className="w-8 h-[1px] bg-stone-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            What makes us different
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            We're not your typical agency. Here's what sets us apart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border-2 border-stone-200 hover:border-orange-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-stone-600 mb-4 leading-relaxed">
                {reason.description}
              </p>
              <div className="pl-4 border-l-4 border-orange-200">
                <p className="text-sm text-stone-500 italic">
                  "{reason.example}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
