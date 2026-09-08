"use client";

import React, { useState } from "react";
import { Search, Sparkles, Filter } from "lucide-react";

interface BlogCategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function BlogCategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: BlogCategoryFilterProps) {
  return (
    <div className="my-10 space-y-5">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 font-work-sans ${
                  isActive
                    ? "bg-[#00ff97] text-black shadow-[0_0_20px_rgba(0,255,151,0.35)] scale-105"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search insights..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-black/40 border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-emerald-400 transition-colors"
          />
        </div>
      </div>
    </div>
  );
}
