import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Let's Talk - Connect With Stockstrail Financial Experts",
  description: "Have questions or need assistance? Reach out to Stockstrail's financial experts today for guidance on mutual funds, insurance, and more.",
  keywords: "contact stockstrail, let's talk, financial experts, mutual funds advice, insurance guidance",
  alternates: {
    canonical: "/lets-talk",
  }
};

export default function LetsTalkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
