import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms and Conditions & Cancellation Policy | Stockstrail",
  description: "Read Stockstrail's Terms and Conditions and Cancellation Policy for all financial services including mutual funds, fixed deposits, insurance, loans, and demat accounts.",
  keywords: "terms and conditions, cancellation policy, stockstrail, financial services",
  alternates: {
    canonical: "https://www.stockstrail.in/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions & Cancellation Policy | Stockstrail",
    description: "Read Stockstrail's Terms and Conditions and Cancellation Policy for all financial services.",
    url: "https://www.stockstrail.in/terms-and-conditions",
    siteName: "Stockstrail",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-stockstrail.png",
        width: 1100,
        height: 630,
        alt: "Stockstrail Terms and Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions & Cancellation Policy | Stockstrail",
    description: "Read Stockstrail's Terms and Conditions and Cancellation Policy for all financial services.",
    images: ["/og-stockstrail.png"],
  },
};

export default function TermsAndConditionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
