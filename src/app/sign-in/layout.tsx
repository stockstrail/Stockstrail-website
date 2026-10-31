import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Stockstrail",
  description: "Sign in to your Stockstrail account to view your risk profile and investment history.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://stockstrail.in/sign-in",
  },
};

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
