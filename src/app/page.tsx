import React, { Suspense } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import BelowFoldSections from '@/components/home/BelowFoldSections';
import ClientOverlays from '@/components/home/ClientOverlays';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stockstrail - Personalized Financial Planning & Investment Guidance in India',
  description: 'Stockstrail provides honest, personalized financial planning, Mutual Funds SIP advisory, Fixed Deposits, Term Insurance, and Loans in India (AMFI ARN-284122).',
  keywords: 'Stockstrail, Personalized Financial Planning, Investment Guidance in India, Mutual Funds SIP, Lumpsum Investment, Fixed Deposit Rates, Term Insurance Plans, Health Insurance, Loan Against Mutual Funds, LAMF, Open Demat Account, AMFI ARN 284122',
  alternates: {
    canonical: 'https://www.stockstrail.in',
  },
  openGraph: {
    title: 'Stockstrail - Financial Planning & Investment Guidance in India',
    description: 'At Stockstrail, we provide honest, jargon-free financial planning and investment guidance. Explore Mutual Funds SIP, FD, Insurance, and Loans across India.',
    url: 'https://www.stockstrail.in',
    siteName: 'Stockstrail',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-stockstrail.png',
        width: 1100,
        height: 630,
        alt: 'Stockstrail Financial Planning & Investment Guidance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stockstrail - Financial Planning & Investment Guidance in India',
    description: 'At Stockstrail, we provide honest, jargon-free financial planning and investment guidance.',
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
