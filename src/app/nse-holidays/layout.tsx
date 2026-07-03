import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NSE Holiday List 2026 | Stockstrail",
  description: "Official NSE trading holidays for the year 2026 including national, regional holidays and weekends.",
  keywords: "nse holidays 2026, nse holiday list, national stock exchange holidays, stock market holidays india, trading holidays 2026",
  alternates: {
    canonical: "/nse-holidays",
  }
};

export default function NseHolidaysLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
