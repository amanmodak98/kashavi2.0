import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Animation Utilities for Kashavi Infotech
 * Reusable GSAP animation patterns with stable final states
 */

// Common animation configuration - OPTIMIZED FOR SPEED
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,    // Reduced from 0.4
    normal: 0.5,  // Reduced from 0.8
    slow: 0.8,    // Reduced from 1.2
  },
  ease: {
    default: 'power3.out',
    smooth: 'power2.out',
    bounce: 'back.out(1.2)',
  },
  stagger: {
    fast: 0.03,   // Reduced from 0.05
    normal: 0.06, // Reduced from 0.1
    slow: 0.12,   // Reduced from 0.2
  },
};

/**
 * Scroll reveal animation with stable final state
 */
export const scrollReveal = (
  selector: string,
  options?: {
    trigger?: string | Element | null;
    start?: string;
    stagger?: number;
    duration?: number;
    y?: number;
    ease?: string;
  }
) => {
  const defaults = {
    start: 'top 70%',
    stagger: ANIMATION_CONFIG.stagger.normal,
    duration: ANIMATION_CONFIG.duration.normal,
    y: 30,  // Reduced from 40
    ease: ANIMATION_CONFIG.ease.default,
  };

  const config = { ...defaults, ...options };

  return gsap.fromTo(
    selector,
    { opacity: 0, y: config.y },
    {
      opacity: 1,
      y: 0,
      duration: config.duration,
      stagger: config.stagger,
      ease: config.ease,
      scrollTrigger: {
        trigger: config.trigger || selector,
        start: config.start,
        once: true,
      },
      clearProps: 'transform',
    }
  );
};

/**
 * Fade in animation
 */
export const fadeIn = (
  selector: string,
  options?: {
    duration?: number;
    stagger?: number;
    delay?: number;
  }
) => {
  return gsap.fromTo(
    selector,
    { opacity: 0 },
    {
      opacity: 1,
      duration: options?.duration || ANIMATION_CONFIG.duration.normal,
      stagger: options?.stagger || 0,
      delay: options?.delay || 0,
      clearProps: 'opacity',
    }
  );
};

/**
 * Scale in animation with bounce
 */
export const scaleIn = (
  selector: string,
  options?: {
    trigger?: string | Element | null;
    start?: string;
    stagger?: number;
    duration?: number;
  }
) => {
  const defaults = {
    start: 'top 70%',
    stagger: ANIMATION_CONFIG.stagger.normal,
    duration: ANIMATION_CONFIG.duration.normal,
  };

  const config = { ...defaults, ...options };

  return gsap.fromTo(
    selector,
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration: config.duration,
      stagger: config.stagger,
      ease: ANIMATION_CONFIG.ease.bounce,
      scrollTrigger: config.trigger
        ? {
            trigger: config.trigger,
            start: config.start,
            once: true,
          }
        : undefined,
      clearProps: 'transform',
    }
  );
};

/**
 * Slide in from left animation
 */
export const slideInLeft = (
  selector: string,
  options?: {
    trigger?: string | Element | null;
    start?: string;
    stagger?: number;
    distance?: number;
  }
) => {
  const defaults = {
    start: 'top 70%',
    stagger: ANIMATION_CONFIG.stagger.normal,
    distance: -50,
  };

  const config = { ...defaults, ...options };

  return gsap.fromTo(
    selector,
    { opacity: 0, x: config.distance },
    {
      opacity: 1,
      x: 0,
      duration: ANIMATION_CONFIG.duration.normal,
      stagger: config.stagger,
      ease: ANIMATION_CONFIG.ease.smooth,
      scrollTrigger: config.trigger
        ? {
            trigger: config.trigger,
            start: config.start,
            once: true,
          }
        : undefined,
      clearProps: 'transform',
    }
  );
};

/**
 * Counter animation (number counting up)
 */
export const animateCounter = (
  element: HTMLElement | null,
  target: number,
  options?: {
    duration?: number;
    delay?: number;
    decimals?: number;
    suffix?: string;
  }
) => {
  if (!element) return;

  const defaults = {
    duration: 1.5,  // Reduced from 2
    delay: 0,
    decimals: 0,
    suffix: '',
  };

  const config = { ...defaults, ...options };

  gsap.to({ val: 0 }, {
    val: target,
    duration: config.duration,
    delay: config.delay,
    ease: 'power2.out',
    onUpdate: function () {
      const value = this.targets()[0].val;
      element.textContent = value.toFixed(config.decimals) + config.suffix;
    },
  });
};

/**
 * Staggered fade-in for lists/grids
 */
export const staggerFadeIn = (
  selector: string,
  options?: {
    trigger?: string | Element | null;
    start?: string;
    stagger?: number;
  }
) => {
  const defaults = {
    start: 'top 70%',
    stagger: ANIMATION_CONFIG.stagger.normal,
  };

  const config = { ...defaults, ...options };

  return gsap.fromTo(
    selector,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: ANIMATION_CONFIG.duration.fast,
      stagger: config.stagger,
      ease: ANIMATION_CONFIG.ease.smooth,
      scrollTrigger: config.trigger
        ? {
            trigger: config.trigger,
            start: config.start,
            once: true,
          }
        : undefined,
      clearProps: 'transform',
    }
  );
};

/**
 * Line drawing animation
 */
export const drawLine = (
  selector: string,
  options?: {
    duration?: number;
    stagger?: number;
    delay?: number;
  }
) => {
  return gsap.fromTo(
    selector,
    { strokeDashoffset: 500 },
    {
      strokeDashoffset: 0,
      duration: options?.duration || 1.5,
      stagger: options?.stagger || 0.1,
      delay: options?.delay || 0,
      ease: 'power2.inOut',
    }
  );
};

/**
 * Parallax scroll effect
 */
export const parallaxScroll = (
  selector: string,
  options: {
    trigger: string | Element;
    yPercent?: number;
    scale?: number;
    scrub?: number | boolean;
  }
) => {
  return gsap.to(selector, {
    yPercent: options.yPercent || -20,
    scale: options.scale || 1,
    ease: 'none',
    scrollTrigger: {
      trigger: options.trigger,
      start: 'top top',
      end: 'bottom top',
      scrub: options.scrub !== undefined ? options.scrub : 1,
    },
  });
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Safe animation wrapper that respects reduced motion
 */
export const safeAnimate = (
  animationFn: () => gsap.core.Tween | gsap.core.Timeline,
  fallback?: () => void
) => {
  if (prefersReducedMotion()) {
    if (fallback) fallback();
    return null;
  }
  return animationFn();
};

/**
 * Create a timeline with ScrollTrigger
 */
export const createScrollTimeline = (options: {
  trigger: string | Element;
  start?: string;
  end?: string;
  scrub?: number | boolean;
  once?: boolean;
}) => {
  return gsap.timeline({
    scrollTrigger: {
      trigger: options.trigger,
      start: options.start || 'top 60%',
      end: options.end,
      scrub: options.scrub,
      once: options.once !== undefined ? options.once : true,
    },
  });
};

/**
 * Batch reveal for performance with large lists
 */
export const batchReveal = (
  selector: string,
  options?: {
    interval?: number;
    batchMax?: number;
  }
) => {
  return ScrollTrigger.batch(selector, {
    interval: options?.interval || 0.1,
    batchMax: options?.batchMax || 3,
    onEnter: (batch) => {
      gsap.fromTo(
        batch,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: ANIMATION_CONFIG.duration.fast,
          stagger: ANIMATION_CONFIG.stagger.fast,
          ease: ANIMATION_CONFIG.ease.smooth,
          clearProps: 'transform',
        }
      );
    },
  });
};
