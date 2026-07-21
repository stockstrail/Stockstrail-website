import React from "react";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "@/components/learn/site-chrome";

export const metadata: Metadata = {
  icons: {
    icon: { url: "/favicon.svg?v=3", type: "image/svg+xml" },
    shortcut: "/favicon.svg?v=3",
    apple: "/favicon.svg?v=3",
  },
};

export default function LearningLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-stockstrail-bg flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
