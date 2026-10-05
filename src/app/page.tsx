import React, { Suspense } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import BelowFoldSections from '@/components/home/BelowFoldSections';
import ClientOverlays from '@/components/home/ClientOverlays';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stockstrail | Financial Planning & Investment Platform India',
  description: 'Stockstrail (AMFI ARN-284122) is India\'s trusted financial planning and investment platform. Expert advisory on Mutual Funds SIP, Term Insurance, Fixed Deposits, and Loans.',
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
    title: 'Stockstrail | Financial Planning & Investment Platform India',
    description: 'Personalized, honest, and expert financial planning and mutual funds distribution in India by Stockstrail (ARN-284122).',
    url: 'https://www.stockstrail.in',
    siteName: 'Stockstrail',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-stockstrail.png',
        width: 1100,
        height: 630,
        alt: 'Stockstrail - Financial Planning & Investment Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stockstrail | Financial Planning & Investment Platform India',
    description: 'Expert financial planning and mutual funds guidance in India by Stockstrail.',
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
