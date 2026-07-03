import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "BSE Holiday List 2026 | Stockstrail",
  description: "Complete list of official BSE trading holidays for 2026 including national, festival, and weekend holidays across Equity, Equity Derivatives, SLB, Commodity Derivatives, and EGR segments.",
  keywords: "bse holidays 2026, bse holiday list, bombay stock exchange holidays, stock market holidays india, trading holidays 2026",
  alternates: {
    canonical: "/bse-holidays",
  }
};

export default function BseHolidaysLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
