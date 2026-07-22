import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Stockstrail — Founder, Certifications & Our Approach',
  description: 'Learn about Stockstrail\'s mission to provide honest, jargon-free financial planning, mutual funds, and insurance guidance across India.',
  keywords: 'About Stockstrail, Honest Financial Planning, Investment Guidance',
  alternates: {
    canonical: 'https://www.stockstrail.in/about',
  },
  openGraph: {
    title: 'About Us | Stockstrail — Founder, Certifications & Our Approach',
    description: 'Learn about Stockstrail\'s mission to provide honest, jargon-free financial planning, mutual funds, and insurance guidance across India.',
    url: 'https://www.stockstrail.in/about',
    siteName: 'Stockstrail',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-stockstrail.png',
        width: 1100,
        height: 630,
        alt: 'About Stockstrail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Stockstrail — Founder, Certifications & Our Approach',
    description: 'Learn about Stockstrail\'s mission to provide honest, jargon-free financial planning.',
    images: ['/og-stockstrail.png'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
