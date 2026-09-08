"use client";

import React, { useState, useEffect } from "react";
import { ListFilter, ChevronDown, ChevronRight, Hash } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface ArticleTableOfContentsProps {
  content: string;
  className?: string;
}

export default function ArticleTableOfContents({ content, className = "" }: ArticleTableOfContentsProps) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Parse markdown headings (# and ## and ###)
    const lines = content.split("\n");
    const items: TOCItem[] = [];

    lines.forEach((line) => {
      const match = line.match(/^(#{2,3})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const rawText = match[2].trim().replace(/[*_`]/g, "");
        const id = rawText
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");

        if (rawText.length > 2) {
          items.push({ id, text: rawText, level });
        }
      }
    });

    setHeadings(items);

    // Scrollspy observer
    const handleScroll = () => {
      const headingElements = items
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      const scrollPos = window.scrollY + 140;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i];
        if (el.offsetTop <= scrollPos) {
          setActiveId(el.id);
          return;
        }
      }
      if (headingElements.length > 0 && window.scrollY < headingElements[0].offsetTop) {
        setActiveId("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [content]);

  if (headings.length < 2) return null;

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <div className={`overflow-hidden rounded-2xl border border-emerald-500/25 bg-[#031d1a]/80 backdrop-blur-md p-5 shadow-xl ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left text-white group"
      >
        <div className="flex items-center gap-2">
          <ListFilter className="w-4 h-4 text-[#00ff97]" />
          <span className="text-sm font-bold font-product-sans uppercase tracking-wider text-emerald-300">
            Table of Contents
          </span>
        </div>
        <span className="p-1 rounded bg-white/5 text-white/50 group-hover:text-white transition-colors">
          {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </span>
      </button>

      {isOpen && (
        <nav className="mt-4 space-y-1.5 pt-3 border-t border-white/10 max-h-72 overflow-y-auto pr-1">
          {headings.map((item, idx) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={idx}
                onClick={() => scrollToHeading(item.id)}
                className={`w-full text-left text-xs py-1.5 px-2.5 rounded-lg transition-all duration-200 flex items-start gap-2 ${
                  item.level === 3 ? "pl-5" : ""
                } ${
                  isActive
                    ? "bg-emerald-500/20 text-[#00ff97] font-semibold border-l-2 border-[#00ff97]"
                    : "text-slate-300 hover:text-white hover:bg-white/5 font-work-sans"
                }`}
              >
                <Hash className={`w-3 h-3 shrink-0 mt-0.5 ${isActive ? "text-[#00ff97]" : "text-white/30"}`} />
                <span className="line-clamp-1">{item.text}</span>
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}
