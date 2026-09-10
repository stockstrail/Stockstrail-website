import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Risk Profile Assessment - Discover Your Investment Comfort | Stockstrail',
  description:
    'Take our free 2-minute SEBI-aligned 11-question risk profiling quiz. Calculate your risk tolerance score and get personalized asset allocation recommendations.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function CheckRiskProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
