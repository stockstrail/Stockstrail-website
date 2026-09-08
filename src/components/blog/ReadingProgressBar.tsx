"use client";

import { useEffect, useState } from "react";

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        setProgress(0);
        return;
      }
      const currentScroll = window.scrollY;
      const scrollPercentage = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
      setProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] bg-white/5 z-50 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-emerald-500 via-stockstrail-green to-[#00ff97] transition-[width] duration-150 ease-out shadow-[0_0_12px_#00ff97]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
