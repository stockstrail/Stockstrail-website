import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Your Profile | Stockstrail",
  description: "Complete your Stockstrail profile to save your risk assessment and get a personalised financial plan.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.stockstrail.in/complete-profile",
  },
};

export default function CompleteProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
