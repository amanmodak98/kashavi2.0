# Typography Utility System

A comprehensive typography and spacing system for consistent design across the application.

## Quick Start

```tsx
import { display, heading, body, section, container, patterns, cn } from '@/lib/typography';

// Use predefined scales
<h1 className={heading.h1}>Section Title</h1>
<p className={body.large}>Introduction text</p>

// Combine with cn helper
<div className={cn(section.default, container.wide)}>
  {/* content */}
</div>

// Use patterns for common layouts
<div className={patterns.sectionHeader.headline}>
  Growth Architecture
</div>
<p className={patterns.sectionHeader.subtitle}>
  Supporting text goes here
</p>
```

## Typography Scales

### Display (Hero & CTA)

Use for the most prominent text on the page:

```tsx
import { display } from '@/lib/typography';

// Hero headline (36px → 48px → 60px → 72px)
<h1 className={display.hero}>Transform Your Business</h1>

// Large display (36px → 48px → 60px)
<h1 className={display.large}>Major Statement</h1>

// Medium display (36px → 48px)
<h1 className={display.medium}>Bold Message</h1>
```

**When to use:**
- Hero sections
- Final CTA sections
- Major statements that need maximum impact

### Headings (H1-H4)

Semantic heading hierarchy:

```tsx
import { heading } from '@/lib/typography';

// H1 - Section headlines (30px → 36px → 48px)
<h1 className={heading.h1}>Our Capabilities</h1>

// H2 - Sub-sections (20px → 24px → 30px)
<h2 className={heading.h2}>Digital Transformation</h2>

// H3 - Card titles (18px → 20px)
<h3 className={heading.h3}>Custom Software Development</h3>

// H4 - Minor headings (16px → 18px)
<h4 className={heading.h4}>Key Features</h4>
```

**When to use:**
- H1: Main section headlines
- H2: Sub-section titles, major content blocks
- H3: Card titles, list items, features
- H4: Minor headings, labels

### Body Text

Content and descriptions:

```tsx
import { body } from '@/lib/typography';

// Large (18px) - Introductions, important descriptions
<p className={body.large}>
  We build scalable solutions that drive real business growth.
</p>

// Default (16px) - Standard reading content
<p className={body.default}>
  Our team of experts specializes in modern web technologies.
</p>

// Medium weight variant
<p className={body.medium}>
  Emphasized body text with medium weight.
</p>

// Small (14px) - Secondary information
<p className={body.small}>Additional details</p>
```

**When to use:**
- Large: Section introductions, lead paragraphs
- Default: Main body content, descriptions
- Small: Secondary information, fine print

### Supporting Text

Labels, captions, and metadata:

```tsx
import { supporting } from '@/lib/typography';

// Label (12px) - Badges, tags, categories
<span className={supporting.label}>New Feature</span>

// Caption (14px) - Image captions, metadata
<span className={supporting.caption}>Published on Sep 7, 2026</span>

// Tiny (12px) - Minimal supporting text
<span className={supporting.tiny}>Additional info</span>
```

### Metrics

Large numbers and statistics:

```tsx
import { metric } from '@/lib/typography';

// Large (48px → 60px)
<div className={metric.large}>500+</div>

// Medium (36px → 48px)
<div className={metric.medium}>99%</div>

// Small (30px → 36px)
<div className={metric.small}>24/7</div>
```

## Spacing System

### Section Padding

Vertical spacing between major sections:

```tsx
import { section } from '@/lib/typography';

// Default (64px → 80px → 96px)
<section className={section.default}>
  {/* Most sections use this */}
</section>

// Large (80px → 96px → 112px)
<section className={section.large}>
  {/* More prominent sections */}
</section>

// Hero (96px → 112px → 128px)
<section className={section.hero}>
  {/* Hero and CTA sections only */}
</section>

// Compact (48px → 64px → 80px)
<section className={section.compact}>
  {/* Tighter sections */}
</section>
```

### Content Spacing

Gaps between elements:

```tsx
import { spacing } from '@/lib/typography';

// Vertical stack
<div className={spacing.stack.lg}>
  <div>Item 1</div>
  <div>Item 2</div>
</div>

// Flex/grid gap
<div className={cn('grid grid-cols-3', spacing.gap.md)}>
  {/* items */}
</div>

// Margin bottom
<h2 className={spacing.mb.lg}>Headline</h2>
```

## Containers

Max-width utilities for different content types:

```tsx
import { container } from '@/lib/typography';

// Default (max-w-7xl)
<div className={container.default}>Standard content</div>

// Wide (max-w-[1400px])
<div className={container.wide}>Full-width sections</div>

// Narrow (max-w-4xl)
<div className={container.narrow}>Forms, focused content</div>

// Prose (max-w-3xl)
<div className={container.prose}>Article content</div>
```

## Patterns

Pre-built combinations for common use cases:

### Section Header

```tsx
import { patterns } from '@/lib/typography';

<div>
  <h2 className={patterns.sectionHeader.headline}>
    Our Process
  </h2>
  <p className={patterns.sectionHeader.subtitle}>
    A proven approach to delivering results
  </p>
</div>
```

### Card

```tsx
<div>
  <h3 className={patterns.card.title}>Card Title</h3>
  <p className={patterns.card.description}>Card description text</p>
</div>
```

### Stat/Metric

```tsx
<div>
  <div className={patterns.stat.value}>500+</div>
  <div className={patterns.stat.label}>Projects Delivered</div>
</div>
```

### Quote/Testimonial

```tsx
<blockquote>
  <p className={patterns.quote.text}>
    "An exceptional partner in our digital transformation."
  </p>
  <div className={patterns.quote.author}>John Smith</div>
  <div className={patterns.quote.role}>CEO, TechCorp</div>
</blockquote>
```

### Feature/Service

```tsx
<div>
  <span className={patterns.feature.label}>Core Service</span>
  <h3 className={patterns.feature.title}>Custom Development</h3>
  <p className={patterns.feature.description}>
    Tailored solutions for your unique needs
  </p>
</div>
```

## Text Colors

Semantic color utilities:

```tsx
import { textColor } from '@/lib/typography';

<p className={textColor.primary}>Primary text (high contrast)</p>
<p className={textColor.secondary}>Secondary text (medium contrast)</p>
<p className={textColor.tertiary}>Tertiary text (low contrast)</p>
<p className={textColor.accent}>Accent text (brand color)</p>
<p className={textColor.muted}>Muted text (very low contrast)</p>
<p className={textColor.inverse}>Inverse text (for dark backgrounds)</p>
```

## Helper Functions

### cn() - Class Name Combiner

Safely combines multiple class strings:

```tsx
import { cn } from '@/lib/typography';

<div className={cn(
  heading.h1,
  textColor.primary,
  'mb-8',
  isActive && 'text-primary',
  !isVisible && 'opacity-0'
)}>
  Headline
</div>
```

## Complete Example

```tsx
import { 
  display, 
  heading, 
  body, 
  section, 
  container, 
  patterns,
  spacing,
  cn 
} from '@/lib/typography';

export default function ExampleSection() {
  return (
    <section className={cn(section.default, 'bg-white')}>
      <div className={container.default}>
        {/* Section header */}
        <div className={cn('text-center', spacing.mb['2xl'])}>
          <h2 className={patterns.sectionHeader.headline}>
            Our Services
          </h2>
          <p className={patterns.sectionHeader.subtitle}>
            Comprehensive solutions for modern businesses
          </p>
        </div>

        {/* Cards grid */}
        <div className={cn(
          'grid grid-cols-1 md:grid-cols-3',
          spacing.gap.lg
        )}>
          {services.map((service) => (
            <div key={service.id} className="p-6">
              <span className={patterns.feature.label}>
                {service.category}
              </span>
              <h3 className={patterns.feature.title}>
                {service.title}
              </h3>
              <p className={patterns.feature.description}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

## Migration Guide

### Before (Old Approach)

```tsx
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
  Headline
</h1>
```

### After (Typography System)

```tsx
import { heading } from '@/lib/typography';

<h1 className={heading.h1}>
  Headline
</h1>
```

## Benefits

✅ **Consistency** - Standardized sizes and spacing across all components
✅ **Maintainability** - Update once, apply everywhere
✅ **Type Safety** - TypeScript types for all utilities
✅ **Developer Experience** - Autocomplete and documentation
✅ **Performance** - No runtime overhead, pure class strings
✅ **Responsive** - Built-in responsive breakpoints
✅ **Accessibility** - Proper semantic hierarchy and readable sizes

## Best Practices

1. **Use semantic headings** - Match visual hierarchy with HTML semantics
2. **Prefer patterns over custom combinations** - Use pre-built patterns when available
3. **Combine utilities with cn()** - Safely merge class strings with conditionals
4. **Follow the scale** - Stick to defined sizes instead of arbitrary values
5. **Test responsiveness** - Verify typography scales appropriately on all devices

## TypeScript Support

```tsx
import type { 
  DisplaySize, 
  HeadingLevel, 
  BodySize, 
  SectionSpacing,
  ContainerSize 
} from '@/lib/typography';

// Type-safe component props
interface HeadingProps {
  level: HeadingLevel;
  children: React.ReactNode;
}

function Heading({ level, children }: HeadingProps) {
  return <h1 className={heading[level]}>{children}</h1>;
}
```
