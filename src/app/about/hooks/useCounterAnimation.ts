import { useEffect, useRef, useState } from 'react';

export function useCounterAnimation(
  targetValue: number,
  duration: number = 2000,
  prefix: string = '',
  suffix: string = ''
) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const startValue = 0;

          const animate = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = startValue + (targetValue - startValue) * easeProgress;

            setCount(Math.floor(current));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(targetValue);
            }
          };

          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [targetValue, duration, hasAnimated]);

  const displayValue = `${prefix}${count.toLocaleString()}${suffix}`;

  return { displayValue, ref: elementRef };
}
