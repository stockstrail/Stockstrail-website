import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Talk to a Stockstrail Financial Advisor - Free Consultation',
  description: 'Schedule a free, zero-pressure consultation with a certified Stockstrail financial advisor today. We help with Mutual Funds, Insurance, and Loans.',
  keywords: 'Talk to a Stockstrail Financial Advisor, Free Consultation, Contact Stockstrail',
  alternates: {
    canonical: 'https://www.stockstrail.in/contact',
  },
  openGraph: {
    title: 'Talk to a Stockstrail Financial Advisor - Free Consultation',
    description: 'Schedule a free, zero-pressure consultation with a certified Stockstrail financial advisor today.',
    url: 'https://www.stockstrail.in/contact',
    siteName: 'Stockstrail',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-stockstrail.png',
        width: 1100,
        height: 630,
        alt: 'Contact Stockstrail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talk to a Stockstrail Financial Advisor',
    description: 'Schedule a free consultation with a certified Stockstrail financial advisor.',
    images: ['/og-stockstrail.png'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
