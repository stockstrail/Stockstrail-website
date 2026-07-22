import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Services - Mutual Funds, Insurance, Loans | Stockstrail",
  description: "Explore Stockstrail's range of financial services including Mutual Funds, Insurance, Loans, and Fixed Deposits. Achieve your financial goals with us.",
  keywords: "financial services, mutual funds, insurance, loans, fixed deposits, demat account, Stockstrail services",
  alternates: {
    canonical: "https://www.stockstrail.in/services",
  },
  openGraph: {
    title: "Our Services - Mutual Funds, Insurance, Loans | Stockstrail",
    description: "Explore Stockstrail's range of financial services including Mutual Funds, Insurance, Loans, and Fixed Deposits.",
    url: "https://www.stockstrail.in/services",
    siteName: "Stockstrail",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-stockstrail.png",
        width: 1100,
        height: 630,
        alt: "Stockstrail Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services - Mutual Funds, Insurance, Loans | Stockstrail",
    description: "Explore Stockstrail's range of financial services.",
    images: ["/og-stockstrail.png"],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
