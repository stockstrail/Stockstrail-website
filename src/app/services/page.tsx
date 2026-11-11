import type { Metadata } from 'next';
import ServicesPageContent from '@/components/services/ServicesPageContent';

export const metadata: Metadata = {
  title: 'Mutual Funds, Insurance, FD & Loan Services | Stockstrail',
  description:
    "Explore Stockstrail's services: mutual fund SIPs, term & health insurance, fixed deposits, loan against mutual funds and Demat accounts. AMFI ARN-284122.",
  keywords:
    'mutual funds services, fixed deposit, insurance plans, loans, financial services, SIP, investment services',
  alternates: {
    canonical: 'https://www.stockstrail.in/services',
  },
  openGraph: {
    title: 'Mutual Funds, Insurance, FD & Loan Services | Stockstrail',
    description:
      "Explore Stockstrail's services: mutual fund SIPs, term & health insurance, fixed deposits, loan against mutual funds and Demat accounts. AMFI ARN-284122.",
    url: 'https://www.stockstrail.in/services',
    siteName: 'Stockstrail',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-stockstrail.png',
        width: 1200,
        height: 630,
        alt: 'Mutual Funds, Insurance, FD & Loan Services | Stockstrail',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mutual Funds, Insurance, FD & Loan Services | Stockstrail',
    description:
      "Explore Stockstrail's services: mutual fund SIPs, term & health insurance, fixed deposits, loan against mutual funds and Demat accounts. AMFI ARN-284122.",
    images: ['/og-stockstrail.png'],
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
