import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Stockstrail Commission Disclosure",
  description: "Transparent disclosure of Stockstrail's Mutual Funds distribution and brokerage earnings. We believe in complete transparency with zero hidden fees.",
  keywords: "commission disclosure, stockstrail commission, mutual funds distribution, brokerage earnings",
  alternates: {
    canonical: "/commission-disclosure",
  }
};

export default function CommissionDisclosureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
