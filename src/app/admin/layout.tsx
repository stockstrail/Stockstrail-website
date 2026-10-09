import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | Stockstrail",
  description: "Admin panel for managing risk profiles.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.stockstrail.in/admin/dashboard",
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
