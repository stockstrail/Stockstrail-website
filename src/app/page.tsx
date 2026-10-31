import React, { Suspense } from 'react';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ConsultationHeroSection from '@/components/home/ConsultationHeroSection';
import BelowFoldSections from '@/components/home/BelowFoldSections';
import ClientOverlays from '@/components/home/ClientOverlays';
import JsonLd from '@/components/common/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stockstrail | Financial Planning & Investment Services',
  description:
    'Stockstrail provides financial planning and investment services. Explore our services and connect with our team.',
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
    canonical: 'https://stockstrail.in/',
    languages: {
      'en-IN': 'https://stockstrail.in/',
    },
  },
  openGraph: {
    title: 'Stockstrail | Financial Planning & Investment Services',
    description:
      'Stockstrail provides financial planning and investment services. Explore our services and connect with our team.',
    url: 'https://stockstrail.in/',
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
    title: 'Stockstrail | Financial Planning & Investment Services',
    description:
      'Stockstrail provides financial planning and investment services. Explore our services and connect with our team.',
    images: ['/og-stockstrail.png'],
  },
};

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://stockstrail.in/#website',
  name: 'Stockstrail',
  alternateName: [
    'Stockstrail',
    'STOCKSTRAIL',
    'stockstrail',
    'Stocks Trail',
    'StocksTrail',
    'Stockstrail.in',
    'www.stockstrail.in',
    'Stockstrail Financial',
    'Stockstrail Financial Services',
    'Stockstrail India',
    'Stockstrail Official Website'
  ],
  url: 'https://stockstrail.in/',
  inLanguage: 'en-IN',
  publisher: {
    '@id': 'https://stockstrail.in/#organization',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://learning.stockstrail.in/categories?search={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function Home() {
  return (
    <Layout>
      <JsonLd data={webSiteSchema} />
      <div className="flex flex-col w-full overflow-hidden">
        <HeroSection />
        <ConsultationHeroSection />
        <BelowFoldSections />
        <Suspense fallback={null}>
          <ClientOverlays />
        </Suspense>
      </div>
    </Layout>
  );
}

