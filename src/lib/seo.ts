import type { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  noindex?: boolean;
}

export function generateMetadata(config: SEOConfig): Metadata {
  const baseUrl = 'https://kashaviinfotech.com';
  const {
    title,
    description,
    keywords = [],
    canonical,
    ogImage = '/images/og-default.jpg',
    ogType = 'website',
    twitterCard = 'summary_large_image',
    noindex = false,
  } = config;

  const fullTitle = title.includes('Kashavi') ? title : `${title} | Kashavi Infotech`;
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : undefined;
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'Kashavi Infotech' }],
    creator: 'Kashavi Infotech',
    publisher: 'Kashavi Infotech',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    ...(canonicalUrl && {
      alternates: {
        canonical: canonicalUrl,
      },
    }),
    ...(noindex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url: canonicalUrl,
      siteName: 'Kashavi Infotech',
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: twitterCard,
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: '@kashaviinfotech',
    },
  };
}

// Structured data helpers
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kashavi Infotech',
    url: 'https://kashaviinfotech.com',
    logo: 'https://kashaviinfotech.com/images/logo.png',
    description: 'Digital innovation studio specializing in web development, mobile apps, AI solutions, and digital marketing.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@kashaviinfotech.com',
      contactType: 'Customer Service',
    },
    sameAs: [
      'https://twitter.com/kashaviinfotech',
      'https://linkedin.com/company/kashaviinfotech',
      'https://github.com/kashaviinfotech',
    ],
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Kashavi Infotech',
    url: 'https://kashaviinfotech.com',
    description: 'Digital innovation studio specializing in web development, mobile apps, AI solutions, and digital marketing.',
    publisher: {
      '@type': 'Organization',
      name: 'Kashavi Infotech',
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://kashaviinfotech.com${item.url}`,
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kashavi Infotech',
      logo: {
        '@type': 'ImageObject',
        url: 'https://kashaviinfotech.com/images/logo.png',
      },
    },
  };
}
