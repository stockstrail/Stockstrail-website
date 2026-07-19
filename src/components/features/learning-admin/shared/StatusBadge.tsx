import React from "react";

interface StatusBadgeProps {
  type: "published" | "draft" | "featured" | "homepage" | "beginner" | "intermediate" | "advanced";
  label?: string;
}

const variants: Record<string, string> = {
  published: "bg-green-500/20 text-green-400 border-green-500/40",
  draft: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40",
  featured: "bg-blue-500/20 text-blue-400 border-blue-500/40",
  homepage: "bg-purple-500/20 text-purple-400 border-purple-500/40",
  beginner: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
  intermediate: "bg-orange-500/20 text-orange-400 border-orange-500/40",
  advanced: "bg-red-500/20 text-red-400 border-red-500/40",
};

const defaultLabels: Record<string, string> = {
  published: "Published",
  draft: "Draft",
  featured: "Featured",
  homepage: "Homepage",
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export function StatusBadge({ type, label }: StatusBadgeProps) {
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium border ${variants[type]}`}>
      {label ?? defaultLabels[type]}
    </span>
  );
}
