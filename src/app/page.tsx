import React, { Suspense } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import BelowFoldSections from '@/components/home/BelowFoldSections';
import ClientOverlays from '@/components/home/ClientOverlays';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stockstrail - Official Website | Financial Planning & Mutual Fund SIP in India',
  description:
    'Stockstrail (AMFI ARN-284122) guides families and salaried professionals on mutual fund SIPs, term & health insurance, FDs and loans. Book a free strategy call.',
  keywords: [
    'Stockstrail',
    'Stocks Trail',
    'Stockstrail financial planning',
    'Mutual Funds SIP India',
    'Vikrant Bhardwaj',
    'AMFI ARN 284122',
    'Term Insurance',
    'Wealth Management India',
  ],
  alternates: {
    canonical: 'https://www.stockstrail.in',
  },
  openGraph: {
    title: 'Stockstrail | Financial Planning & Mutual Fund SIP in India',
    description:
      'Stockstrail (AMFI ARN-284122) guides families and salaried professionals on mutual fund SIPs, term & health insurance, FDs and loans. Book a free strategy call.',
    url: 'https://www.stockstrail.in',
    siteName: 'Stockstrail',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-stockstrail.png',
        width: 1200,
        height: 630,
        alt: 'Stockstrail | Financial Planning & Mutual Fund SIP in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stockstrail | Financial Planning & Mutual Fund SIP in India',
    description:
      'Stockstrail (AMFI ARN-284122) guides families and salaried professionals on mutual fund SIPs, term & health insurance, FDs and loans. Book a free strategy call.',
    images: ['/og-stockstrail.png'],
  },
};

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col w-full overflow-hidden">
        <HeroSection />
        <BelowFoldSections />
        <Suspense fallback={null}>
          <ClientOverlays />
        </Suspense>
      </div>
    </Layout>
  );
}
