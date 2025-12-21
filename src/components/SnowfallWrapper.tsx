"use client";

import dynamic from "next/dynamic";

const Snowfall = dynamic(() => import("@/components/home/Snowfall"), {
  ssr: false,
  loading: () => null,
});

export default function SnowfallWrapper() {
  return <Snowfall />;
}
