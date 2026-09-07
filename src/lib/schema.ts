// Additional Schema Generators for Enhanced SEO

// LocalBusiness Schema (for local SEO)
export function generateLocalBusinessSchema(config?: {
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  phone?: string;
  priceRange?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://kashaviinfotech.com/#localbusiness',
    name: 'Kashavi Infotech',
    image: 'https://kashaviinfotech.com/images/logo.png',
    url: 'https://kashaviinfotech.com',
    telephone: config?.phone || '+91-XXX-XXX-XXXX',
    priceRange: config?.priceRange || '$$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: config?.address || 'Your Street Address',
      addressLocality: config?.city || 'Your City',
      addressRegion: config?.state || 'Your State',
      postalCode: config?.postalCode || 'PIN Code',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 0, // Add your latitude
      longitude: 0, // Add your longitude
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
    },
    sameAs: [
      'https://twitter.com/kashaviinfotech',
      'https://linkedin.com/company/kashavi',
      'https://instagram.com/kashavi',
    ],
  };
}

// Service Schema
export function generateServiceSchema(service: {
  name: string;
  description: string;
  serviceType: string;
  price?: string;
  url?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.serviceType,
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Kashavi Infotech',
      url: 'https://kashaviinfotech.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.name,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
          },
        },
      ],
    },
    ...(service.url && { url: service.url }),
    ...(service.price && {
      offers: {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: 'USD',
      },
    }),
  };
}

// Review Schema
export function generateReviewSchema(review: {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Organization',
      name: 'Kashavi Infotech',
      url: 'https://kashaviinfotech.com',
    },
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
  };
}

// HowTo Schema (for process/guide content)
export function generateHowToSchema(howto: {
  name: string;
  description: string;
  totalTime?: string;
  steps: Array<{
    name: string;
    text: string;
    url?: string;
  }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howto.name,
    description: howto.description,
    ...(howto.totalTime && { totalTime: howto.totalTime }),
    step: howto.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
    })),
  };
}

// VideoObject Schema
export function generateVideoSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    ...(video.duration && { duration: video.duration }),
    ...(video.contentUrl && { contentUrl: video.contentUrl }),
    ...(video.embedUrl && { embedUrl: video.embedUrl }),
  };
}

// Product Schema (for service packages)
export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  price: string;
  currency?: string;
  availability?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: 'Kashavi Infotech',
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency || 'USD',
      availability: product.availability || 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Kashavi Infotech',
      },
    },
  };
}

// Person Schema (for team members/authors)
export function generatePersonSchema(person: {
  name: string;
  jobTitle: string;
  image?: string;
  description?: string;
  sameAs?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.jobTitle,
    ...(person.image && { image: person.image }),
    ...(person.description && { description: person.description }),
    worksFor: {
      '@type': 'Organization',
      name: 'Kashavi Infotech',
      url: 'https://kashaviinfotech.com',
    },
    ...(person.sameAs && { sameAs: person.sameAs }),
  };
}
