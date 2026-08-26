import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "BSE Holiday List 2026 | Stockstrail",
  description: "Complete list of official BSE trading holidays for 2026 including national, festival, and weekend holidays across Equity, Equity Derivatives, SLB, Commodity Derivatives, and EGR segments.",
  keywords: "bse holidays 2026, bse holiday list, bombay stock exchange holidays, stock market holidays india, trading holidays 2026",
  alternates: {
    canonical: "https://www.stockstrail.in/bse-holidays",
  },
  openGraph: {
    title: "BSE Holiday List 2026 | Stockstrail",
    description: "Complete list of official BSE trading holidays for 2026 including national, festival, and weekend holidays across all trading segments.",
    url: "https://www.stockstrail.in/bse-holidays",
    siteName: "Stockstrail",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-stockstrail.png",
        width: 1100,
        height: 630,
        alt: "BSE Holidays 2026 Stockstrail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BSE Holiday List 2026 | Stockstrail",
    description: "Complete list of official BSE trading holidays for 2026 across all segments.",
    images: ["/og-stockstrail.png"],
  },
};

export default function BseHolidaysLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
