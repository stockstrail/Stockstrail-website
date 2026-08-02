import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Stockstrail — Financial Guidance & Advisory",
  description: "Get in touch with Stockstrail. We welcome your inquiries regarding financial planning, mutual funds, insurance, and investment guidance.",
  keywords: "contact stockstrail, stockstrail contact number, stockstrail email, financial planner contact",
  alternates: {
    canonical: "https://www.stockstrail.in/contact",
  },
  openGraph: {
    title: "Contact Us | Stockstrail — Financial Guidance & Advisory",
    description: "Get in touch with Stockstrail for expert financial planning and investment guidance.",
    url: "https://www.stockstrail.in/contact",
    siteName: "Stockstrail",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
