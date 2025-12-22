"use client";

import dynamic from "next/dynamic";
import React from "react";

const Snowfall = dynamic(() => import("@/components/home/Snowfall"), {
  ssr: false,
  loading: () => null,
});

export default function SnowfallWrapper() {
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    // Only mount on large screens (lg = 1024px in Tailwind)
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  if (!isDesktop) return null;

  return (
    <div className="hidden lg:block">
      <Snowfall />
    </div>
  );
}
