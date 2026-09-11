'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface Metric {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

const metrics: Metric[] = [
  { label: 'Revenue Growth', value: '340', prefix: '+', suffix: '%' },
  { label: 'Monthly Users',  value: '2.8', suffix: 'M' },
  { label: 'Annual Savings', value: '45',  prefix: '₹', suffix: 'L' },
  { label: 'Client Retention', value: '95', suffix: '%' },
];

function AnimatedNumber({
  value,
  prefix = '',
  suffix = '',
  duration = 1800,
}: {
  value: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!isInView) return;
    const target = parseFloat(value);
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };

    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value, duration]);

  const formatted = count.toFixed(value.includes('.') ? 1 : 0);
  return (
    <span ref={ref}>
      {prefix}{formatted}{suffix}
    </span>
  );
}

export function MetricsBar() {
  return (
    <section className="relative overflow-hidden bg-dark-warm text-white">
      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(at 25% 30%, rgba(75, 163, 255, 0.22) 0px, transparent 55%), radial-gradient(at 75% 75%, rgba(14, 165, 233, 0.12) 0px, transparent 55%)',
        }}
        aria-hidden="true"
      />

      <div className="relative container-x section">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="eyebrow !text-brand-300 mb-5">
            <span className="!bg-brand-400/60" style={{ ['--tw-bg-opacity' as string]: '1' }} />
            Real Outcomes
          </span>
          <h2 className="text-white text-balance mb-4">
            Real Results from Real Clients
          </h2>
          <p className="text-lg text-white/70">
            Numbers that matter, measured and delivered.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-ink-900 p-6 md:p-10 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-3 tabular-nums">
                <AnimatedNumber
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
              </div>
              <div className="text-sm text-white/60 font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-white/40 text-xs mt-8">
          * Actual results from recent client projects
        </p>
      </div>
    </section>
  );
}
