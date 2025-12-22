"use client";

import dynamic from "next/dynamic";
import React from "react";

const Snowfall = dynamic(() => import("@/components/home/Snowfall"), {
  ssr: false,
  loading: () => null,
});

export default function SnowfallWrapper() {
  return <Snowfall />;
}
