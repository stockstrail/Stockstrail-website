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

export default function ServicesPage() {
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
