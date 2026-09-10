import type { Metadata } from 'next';
import ServicesPageContent from '@/components/services/ServicesPageContent';

export const metadata: Metadata = {
  title: 'Services - Mutual Funds, Insurance, Fixed Deposits & Loans | Stockstrail',
  description:
    'Explore our comprehensive financial services including Mutual Funds, Fixed Deposits, Insurance, and Loans. Expert guidance tailored to your needs.',
  keywords:
    'mutual funds services, fixed deposit, insurance plans, loans, financial services, SIP, investment services',
  alternates: {
    canonical: 'https://www.stockstrail.in/services',
  },
  openGraph: {
    title: 'Services - Mutual Funds, Insurance, Fixed Deposits & Loans | Stockstrail',
    description:
      'Explore our comprehensive financial services including Mutual Funds, Fixed Deposits, Insurance, and Loans. Expert guidance tailored to your needs.',
    url: 'https://www.stockstrail.in/services',
    siteName: 'Stockstrail',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services - Mutual Funds, Insurance, Fixed Deposits & Loans | Stockstrail',
    description:
      'Explore our comprehensive financial services including Mutual Funds, Fixed Deposits, Insurance, and Loans.',
  },
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  '@id': 'https://www.stockstrail.in/services#service',
  name: 'Stockstrail Financial Services',
  description:
    'Comprehensive financial services including Mutual Funds distribution, Fixed Deposits, Term & Health Insurance, and Loans.',
  url: 'https://www.stockstrail.in/services',
  provider: {
    '@type': 'FinancialService',
    name: 'Stockstrail',
    url: 'https://www.stockstrail.in',
  },
  areaServed: 'IN',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Financial Advisory & Distribution Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mutual Funds Advisory & Distribution',
          url: 'https://www.stockstrail.in/services/mutual-funds',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Fixed Deposits (FD)',
          url: 'https://www.stockstrail.in/services/fixed-deposit',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Life & Health Insurance',
          url: 'https://www.stockstrail.in/services/insurance',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Loan Against Mutual Funds (LAMF) & Loans',
          url: 'https://www.stockstrail.in/services/loan',
        },
      },
    ],
  },
};

import { redirect, RedirectType } from 'next/navigation';

const SERVICE_PARAM_MAP: Record<string, string> = {
  'mutual-funds': '/services/mutual-funds',
  mutualfunds: '/services/mutual-funds',
  mf: '/services/mutual-funds',
  sip: '/services/mutual-funds',
  'fixed-deposit': '/services/fixed-deposit',
  fixeddeposit: '/services/fixed-deposit',
  fd: '/services/fixed-deposit',
  insurance: '/services/insurance',
  ins: '/services/insurance',
  loan: '/services/loan',
  loans: '/services/loan',
  lamf: '/services/loan',
  'open-demat': '/services/open-demat',
  demat: '/services/open-demat',
  'financial-protection': '/services/financial-protection',
  protection: '/services/financial-protection',
};

interface ServicesPageProps {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ServicesPage({ searchParams }: ServicesPageProps) {
  const resolvedParams = searchParams ? await searchParams : {};
  const query = (
    (typeof resolvedParams.service === 'string' ? resolvedParams.service : '') ||
    (typeof resolvedParams.tab === 'string' ? resolvedParams.tab : '') ||
    (typeof resolvedParams.type === 'string' ? resolvedParams.type : '') ||
    (typeof resolvedParams.s === 'string' ? resolvedParams.s : '')
  ).toLowerCase().trim();

  if (query && SERVICE_PARAM_MAP[query]) {
    redirect(SERVICE_PARAM_MAP[query], RedirectType.replace);
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema).replace(/</g, '\\u003c'),
        }}
      />
      <ServicesPageContent />
    </>
  );
}
