import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Open Demat Account - Start Stock Market Investing | Stockstrail",
  description: "Open a free Demat account with Stockstrail. Trade stocks, mutual funds, IPOs, and more with India's top brokers. Zero account opening charges, seamless KYC, and expert guidance.",
  keywords: "demat account, open demat, stock trading, share market, IPO, equity investment, stockstrail, online trading",
  alternates: {
    canonical: "/open-demat",
  }
};

export default function OpenDematLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
