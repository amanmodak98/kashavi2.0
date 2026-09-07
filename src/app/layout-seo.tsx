import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kashavi Infotech - AI-Powered Growth, Engineered for Scale',
  description: 'AI-powered digital marketing that turns attention into measurable growth.',
  keywords: 'web development, mobile app development, digital marketing, AI solutions, e-commerce development, India',
  authors: [{ name: 'Kashavi Infotech' }],
  openGraph: {
    title: 'Kashavi Infotech - AI-Powered Growth, Engineered for Scale',
    description: 'AI-powered digital marketing that turns attention into measurable growth.',
    url: 'https://kashaviinfotech.com',
    siteName: 'Kashavi Infotech',
    images: [
      {
        url: 'https://kashaviinfotech.com/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Kashavi Infotech - Digital Innovation Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kashavi Infotech - AI-Powered Growth, Engineered for Scale',
    description: 'AI-powered digital marketing that turns attention into measurable growth.',
    images: ['https://kashaviinfotech.com/images/og-default.jpg'],
    creator: '@kashaviinfotech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
  },
};

// Organization Schema (JSON-LD)
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Kashavi Infotech',
  url: 'https://kashaviinfotech.com',
  logo: 'https://kashaviinfotech.com/images/logo.png',
  description: 'Digital solutions that grow businesses. We build websites and apps that drive real results with beautiful design and solid code.',
  foundingDate: '2021',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'hello@kashaviinfotech.com',
  },
  sameAs: [
    'https://twitter.com/kashaviinfotech',
    'https://linkedin.com/company/kashavi',
    'https://instagram.com/kashavi',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
};

// Website Schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Kashavi Infotech',
  url: 'https://kashaviinfotech.com',
  description: 'Digital solutions that grow businesses',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://kashaviinfotech.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
