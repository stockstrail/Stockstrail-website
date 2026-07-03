import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Talk to a Stockstrail Financial Advisor - Free Consultation',
  description: 'Schedule a free, zero-pressure consultation with a certified Stockstrail financial advisor today. We help with Mutual Funds, Insurance, and Loans.',
  keywords: 'Talk to a Stockstrail Financial Advisor, Free Consultation, Contact Stockstrail',
  alternates: {
    canonical: 'https://stockstrail.in/contact',
  }
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
