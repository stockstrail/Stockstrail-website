import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms and Conditions & Cancellation Policy | Stockstrail",
  description: "Read Stockstrail's Terms and Conditions and Cancellation Policy for all financial services including mutual funds, fixed deposits, insurance, loans, and demat accounts.",
  keywords: "terms and conditions, cancellation policy, stockstrail, financial services",
  alternates: {
    canonical: "/terms-and-conditions",
  }
};

export default function TermsAndConditionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
