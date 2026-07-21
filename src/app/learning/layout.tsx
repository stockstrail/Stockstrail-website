import React from "react";
import { SiteHeader, SiteFooter } from "@/components/learn/site-chrome";

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
