import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Calculators - SIP, FD, Lumpsum, RD | Stockstrail",
  description: "Use Stockstrail calculators for SIP, lumpsum, FD, and RD investment planning.",
  keywords: "calculators, SIP calculator, FD calculator, Lumpsum calculator, RD calculator, EMI calculator, Tax calculator, Stockstrail",
  alternates: {
    canonical: "/calculators",
  }
};

export default function CalculatorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
