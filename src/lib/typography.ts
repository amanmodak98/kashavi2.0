/**
 * Typography Utility System
 *
 * Centralized typography scales and utilities for consistent text styling
 * across the application. Based on the Typography Optimization Plan.
 */

// ============================================================================
// Typography Scale Constants
// ============================================================================

/**
 * Display typography - For hero sections and major CTAs
 * Largest, most impactful text on the page
 */
export const display = {
  // Mobile: 36px, Tablet: 48px, Desktop: 60px, XL: 72px
  hero: 'text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter',

  // Mobile: 36px, Tablet: 48px, Desktop: 60px
  large: 'text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter',

  // Mobile: 36px, Desktop: 48px
  medium: 'text-4xl lg:text-5xl font-black tracking-tighter',
} as const;

/**
 * Heading hierarchy - Section headlines and sub-headers
 * Primary content structure
 */
export const heading = {
  // H1 - Main section headlines
  // Mobile: 30px, Tablet: 36px, Desktop: 48px
  h1: 'text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',

  // H2 - Sub-section headlines and major content blocks
  // Mobile: 20px, Tablet: 24px, Desktop: 30px
  h2: 'text-xl md:text-2xl lg:text-3xl font-bold tracking-tight',

  // H3 - Card titles, list items, smaller sections
  // Mobile: 18px, Desktop: 20px
  h3: 'text-lg md:text-xl font-semibold tracking-tight',

  // H4 - Minor headings
  // Mobile: 16px, Desktop: 18px
  h4: 'text-base md:text-lg font-semibold',
} as const;

/**
 * Body text - Reading content and descriptions
 */
export const body = {
  // Large body text - Introductions, important descriptions
  // 18px on mobile and desktop
  large: 'text-lg font-normal leading-relaxed',

  // Default body text - Standard reading content
  // 16px
  default: 'text-base font-normal leading-relaxed',

  // Medium weight variant
  medium: 'text-base font-medium leading-relaxed',

  // Small body text
  // 14px
  small: 'text-sm font-normal leading-normal',
} as const;

/**
 * Supporting text - Labels, captions, metadata
 */
export const supporting = {
  // Labels and badges
  label: 'text-xs font-semibold uppercase tracking-wider',

  // Captions and metadata
  caption: 'text-sm font-medium',

  // Tiny text
  tiny: 'text-xs font-normal',
} as const;

/**
 * Metric and stat text - Large numbers and data displays
 */
export const metric = {
  // Large metrics (dashboard, hero stats)
  // Mobile: 48px, Desktop: 60px
  large: 'text-5xl md:text-6xl font-black tracking-tight',

  // Medium metrics
  // Mobile: 36px, Desktop: 48px
  medium: 'text-4xl md:text-5xl font-black tracking-tight',

  // Small metrics (cards, inline stats)
  // Mobile: 30px, Desktop: 36px
  small: 'text-3xl md:text-4xl font-bold tracking-tight',
} as const;

// ============================================================================
// Spacing Scale Constants
// ============================================================================

/**
 * Section padding utilities - Vertical spacing between major sections
 */
export const section = {
  // Default section spacing
  // Mobile: 64px, Tablet: 80px, Desktop: 96px
  default: 'py-16 md:py-20 lg:py-24',

  // Large section spacing
  // Mobile: 80px, Tablet: 96px, Desktop: 112px
  large: 'py-20 md:py-24 lg:py-28',

  // Hero/CTA section spacing
  // Mobile: 96px, Tablet: 112px, Desktop: 128px
  hero: 'py-24 md:py-28 lg:py-32',

  // Compact section spacing
  // Mobile: 48px, Tablet: 64px, Desktop: 80px
  compact: 'py-12 md:py-16 lg:py-20',
} as const;

/**
 * Content spacing - Gaps between content elements
 */
export const spacing = {
  // Vertical spacing between content blocks
  stack: {
    xs: 'space-y-2',    // 8px
    sm: 'space-y-4',    // 16px
    md: 'space-y-6',    // 24px
    lg: 'space-y-8',    // 32px
    xl: 'space-y-12',   // 48px
    '2xl': 'space-y-16', // 64px
  },

  // Gap utilities for flex/grid
  gap: {
    xs: 'gap-2',     // 8px
    sm: 'gap-4',     // 16px
    md: 'gap-6',     // 24px
    lg: 'gap-8',     // 32px
    xl: 'gap-12',    // 48px
    '2xl': 'gap-16', // 64px
  },

  // Margin bottom utilities
  mb: {
    xs: 'mb-2',     // 8px
    sm: 'mb-4',     // 16px
    md: 'mb-6',     // 24px
    lg: 'mb-8',     // 32px
    xl: 'mb-12',    // 48px
    '2xl': 'mb-16', // 64px
  },
} as const;

// ============================================================================
// Container Utilities
// ============================================================================

/**
 * Container max-widths for different content types
 */
export const container = {
  // Standard content container
  default: 'max-w-7xl mx-auto px-6 lg:px-8',

  // Wide container for full-width sections
  wide: 'max-w-[1400px] mx-auto px-6 lg:px-8',

  // Narrow container for focused content (articles, forms)
  narrow: 'max-w-4xl mx-auto px-6 lg:px-8',

  // Text-focused container (optimal reading width)
  prose: 'max-w-3xl mx-auto px-6 lg:px-8',
} as const;

// ============================================================================
// Text Color Utilities
// ============================================================================

/**
 * Semantic text colors
 */
export const textColor = {
  primary: 'text-neutral-900 dark:text-neutral-50',
  secondary: 'text-neutral-600 dark:text-neutral-400',
  tertiary: 'text-neutral-500 dark:text-neutral-500',
  accent: 'text-primary',
  muted: 'text-neutral-400 dark:text-neutral-600',
  inverse: 'text-white dark:text-neutral-900',
} as const;

// ============================================================================
// Composite Utilities
// ============================================================================

/**
 * Common text patterns used throughout the site
 */
export const patterns = {
  // Section header pattern (headline + optional subtitle)
  sectionHeader: {
    headline: `${heading.h1} ${textColor.primary}`,
    subtitle: `${body.large} ${textColor.secondary} mt-4`,
  },

  // Card pattern
  card: {
    title: `${heading.h3} ${textColor.primary}`,
    description: `${body.default} ${textColor.secondary} mt-2`,
  },

  // Stat/metric pattern
  stat: {
    value: `${metric.medium} ${textColor.primary}`,
    label: `${supporting.label} ${textColor.secondary} mt-1`,
  },

  // Quote/testimonial pattern
  quote: {
    text: `${heading.h2} ${textColor.primary} font-medium italic`,
    author: `${body.large} ${textColor.secondary} mt-4`,
    role: `${supporting.caption} ${textColor.tertiary}`,
  },

  // Feature/service item pattern
  feature: {
    title: `${heading.h3} ${textColor.primary}`,
    description: `${body.default} ${textColor.secondary} mt-2`,
    label: `${supporting.label} ${textColor.accent}`,
  },
} as const;

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Combines multiple className strings, filtering out falsy values
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Typography system with responsive variants
 */
export const typography = {
  display,
  heading,
  body,
  supporting,
  metric,
  patterns,
} as const;

/**
 * Layout system
 */
export const layout = {
  section,
  spacing,
  container,
} as const;

/**
 * Complete utility system export
 */
export const typo = {
  ...typography,
  ...layout,
  textColor,
  cn,
} as const;

// ============================================================================
// Type Exports
// ============================================================================

export type TypographyScale = keyof typeof typography;
export type DisplaySize = keyof typeof display;
export type HeadingLevel = keyof typeof heading;
export type BodySize = keyof typeof body;
export type SectionSpacing = keyof typeof section;
export type ContainerSize = keyof typeof container;
