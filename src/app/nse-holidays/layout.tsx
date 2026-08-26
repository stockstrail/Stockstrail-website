import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NSE Holiday List 2026 | Stockstrail",
  description: "Official NSE trading holidays for the year 2026 including national, regional holidays and weekends.",
  keywords: "nse holidays 2026, nse holiday list, national stock exchange holidays, stock market holidays india, trading holidays 2026",
  alternates: {
    canonical: "https://www.stockstrail.in/nse-holidays",
  },
  openGraph: {
    title: "NSE Holiday List 2026 | Stockstrail",
    description: "Official NSE trading holidays for the year 2026 including national, regional holidays and weekends.",
    url: "https://www.stockstrail.in/nse-holidays",
    siteName: "Stockstrail",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-stockstrail.png",
        width: 1100,
        height: 630,
        alt: "NSE Holidays 2026 Stockstrail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NSE Holiday List 2026 | Stockstrail",
    description: "Official NSE trading holidays for the year 2026 including national, regional holidays and weekends.",
    images: ["/og-stockstrail.png"],
  },
};

export default function NseHolidaysLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
