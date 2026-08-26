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

export default function ServicesPage() {
  return <ServicesPageContent />;
}
