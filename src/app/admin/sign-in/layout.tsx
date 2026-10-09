import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Sign In | Stockstrail",
  description: "Stockstrail administration login.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.stockstrail.in/admin/sign-in",
  },
};

export default function AdminSignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
