import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { generateOrganizationSchema, generateWebsiteSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kashaviinfotech.com'),
  title: {
    default: "Kashavi Infotech - AI-Powered Growth, Engineered for Scale",
    template: "%s | Kashavi Infotech"
  },
  description: "AI-powered digital marketing that turns attention into measurable growth. Strategy, creative, engineering and automation under one roof.",
  keywords: ["web development", "mobile apps", "AI chatbots", "digital marketing", "SEO", "e-commerce", "custom CRM", "UI/UX design"],
  authors: [{ name: "Kashavi Infotech" }],
  creator: "Kashavi Infotech",
  publisher: "Kashavi Infotech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kashaviinfotech.com",
    siteName: "Kashavi Infotech",
    title: "Kashavi Infotech - AI-Powered Growth, Engineered for Scale",
    description: "AI-powered digital marketing that turns attention into measurable growth. Strategy, creative, engineering and automation under one roof.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Kashavi Infotech - Digital Innovation Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashavi Infotech - AI-Powered Growth, Engineered for Scale",
    description: "AI-powered digital marketing that turns attention into measurable growth.",
    images: ["/images/og-default.jpg"],
    creator: "@kashaviinfotech",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-canvas text-ink-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-toast focus:rounded-md focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-brand-lift"
        >
          Skip to content
        </a>
        <CustomCursor />
        <Navbar />
        <SmoothScroll>
          <div id="main" className="pt-[calc(4rem+var(--announce-h,0px)+1rem)] lg:pt-[calc(5rem+var(--announce-h,0px)+0.5rem)]">
            {children}
          </div>
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
