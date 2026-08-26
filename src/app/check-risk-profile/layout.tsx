import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Check Risk Profile | Stockstrail',
  description: 'Stockstrail investor risk profiling tool.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckRiskProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
