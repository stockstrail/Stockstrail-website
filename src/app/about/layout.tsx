import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Stockstrail - Honest Financial Planning & Investment Guidance',
  description: 'Learn about Stockstrail\'s mission to provide honest, jargon-free financial planning, mutual funds, and insurance guidance across India.',
  keywords: 'About Stockstrail, Honest Financial Planning, Investment Guidance',
  alternates: {
    canonical: 'https://stockstrail.in/about',
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
