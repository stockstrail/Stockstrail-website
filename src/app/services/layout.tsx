import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Services - Mutual Funds, Insurance, Loans | Stockstrail",
  description: "Explore Stockstrail's range of financial services including Mutual Funds, Insurance, Loans, and Fixed Deposits. Achieve your financial goals with us.",
  keywords: "financial services, mutual funds, insurance, loans, fixed deposits, demat account, Stockstrail services",
  alternates: {
    canonical: "/services",
  }
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
