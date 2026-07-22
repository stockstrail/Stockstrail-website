import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Calculators - SIP, FD, Lumpsum, RD | Stockstrail",
  description: "Use Stockstrail calculators for SIP, lumpsum, FD, and RD investment planning.",
  keywords: "calculators, SIP calculator, FD calculator, Lumpsum calculator, RD calculator, EMI calculator, Tax calculator, Stockstrail",
  alternates: {
    canonical: "https://www.stockstrail.in/calculators",
  },
  openGraph: {
    title: "Calculators - SIP, FD, Lumpsum, RD | Stockstrail",
    description: "Use Stockstrail calculators for SIP, lumpsum, FD, and RD investment planning.",
    url: "https://www.stockstrail.in/calculators",
    siteName: "Stockstrail",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-stockstrail.png",
        width: 1100,
        height: 630,
        alt: "Stockstrail Calculators",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculators - SIP, FD, Lumpsum, RD | Stockstrail",
    description: "Use Stockstrail calculators for SIP, lumpsum, FD, and RD investment planning.",
    images: ["/og-stockstrail.png"],
  },
};

export default function CalculatorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
