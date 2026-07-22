import React, { Suspense } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection'; // Static import for LCP optimization
import BelowFoldSections from '@/components/home/BelowFoldSections';
import { WelcomeModal } from '@/components/home/WelcomeModal';
import { AuthCallbackHandler } from '@/components/home/AuthCallbackHandler';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financial Planning & Investment Guidance | Stockstrail',
  description: 'At Stockstrail, we provide honest, jargon-free financial planning and investment guidance. Explore Mutual Funds, FD, Insurance, and Loans across India.',
  keywords: 'Financial Planning, Investment Guidance, Mutual Funds, Loans, FD, Insurance, Open Demat Account',
  alternates: {
    canonical: 'https://www.stockstrail.in',
  },
  openGraph: {
    title: 'Financial Planning & Investment Guidance | Stockstrail',
    description: 'At Stockstrail, we provide honest, jargon-free financial planning and investment guidance. Explore Mutual Funds, FD, Insurance, and Loans across India.',
    url: 'https://www.stockstrail.in',
    siteName: 'Stockstrail',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-stockstrail.png',
        width: 1100,
        height: 630,
        alt: 'Stockstrail Financial Planning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Financial Planning & Investment Guidance | Stockstrail',
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
          <AuthCallbackHandler />
        </Suspense>
        <WelcomeModal />
      </div>
    </Layout>
  );
}
