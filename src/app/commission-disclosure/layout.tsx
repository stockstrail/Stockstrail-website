import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Stockstrail Commission Disclosure | 100% Transparent Advisory",
  description: "Transparent disclosure of Stockstrail's Mutual Funds distribution and brokerage earnings. We believe in complete transparency with zero hidden fees.",
  keywords: "commission disclosure, stockstrail commission, mutual funds distribution, brokerage earnings",
  alternates: {
    canonical: "https://www.stockstrail.in/commission-disclosure",
  },
  openGraph: {
    title: "Stockstrail Commission Disclosure | 100% Transparent Advisory",
    description: "Transparent disclosure of Stockstrail's Mutual Funds distribution and brokerage earnings.",
    url: "https://www.stockstrail.in/commission-disclosure",
    siteName: "Stockstrail",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-stockstrail.png",
        width: 1100,
        height: 630,
        alt: "Stockstrail Commission Disclosure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stockstrail Commission Disclosure | 100% Transparent Advisory",
    description: "Transparent disclosure of Stockstrail's Mutual Funds distribution and brokerage earnings.",
    images: ["/og-stockstrail.png"],
  },
};

export default function CommissionDisclosureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
