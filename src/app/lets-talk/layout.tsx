import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Let's Talk - Connect With Stockstrail Financial Experts",
  description: "Have questions or need assistance? Reach out to Stockstrail's financial experts today for guidance on mutual funds, insurance, and more.",
  keywords: "contact stockstrail, let's talk, financial experts, mutual funds advice, insurance guidance",
  alternates: {
    canonical: "https://www.stockstrail.in/lets-talk",
  },
  openGraph: {
    title: "Let's Talk - Connect With Stockstrail Financial Experts",
    description: "Reach out to Stockstrail's financial experts today for guidance on mutual funds, insurance, and more.",
    url: "https://www.stockstrail.in/lets-talk",
    siteName: "Stockstrail",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-stockstrail.png",
        width: 1100,
        height: 630,
        alt: "Let's Talk Stockstrail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Let's Talk - Connect With Stockstrail Financial Experts",
    description: "Reach out to Stockstrail's financial experts today.",
    images: ["/og-stockstrail.png"],
  },
};

export default function LetsTalkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
