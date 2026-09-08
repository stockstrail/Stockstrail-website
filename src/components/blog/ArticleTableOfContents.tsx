"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ChevronDown, ChevronRight, Compass, Sparkles, BookOpen, CheckCircle2 } from "lucide-react";
import { slugify } from "@/lib/slugify";

export { slugify };

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

function parseInitialHeadings(rawMarkdown: string): TOCItem[] {
  if (!rawMarkdown) return [];
  const lines = rawMarkdown.split("\n");
  const items: TOCItem[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    // Match ## or ### or ####
    const match = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (match) {
      const level = match[1].length;
      const rawText = match[2].replace(/[*_`#]/g, "").trim();
      const cleanText = rawText.replace(/^[0-9]+[.\s)]+/, "").trim();
      if (cleanText.length > 2 && !cleanText.toLowerCase().includes("author") && !cleanText.toLowerCase().includes("table of contents")) {
        const id = slugify(cleanText) || slugify(rawText);
        items.push({
          id,
          text: cleanText,
          level: level >= 3 ? 3 : 2,
        });
      }
    }
  }

  // Fallback 1: If no markdown headings found, check for HTML <h1> / <h2> / <h3>
  if (items.length === 0) {
    const htmlRegex = /<h([1-4])[^>]*>(.*?)<\/h\1>/gi;
    let htmlMatch;
    while ((htmlMatch = htmlRegex.exec(rawMarkdown)) !== null) {
      const level = parseInt(htmlMatch[1], 10);
      const rawText = htmlMatch[2].replace(/<[^>]+>/g, "").replace(/[*_`#]/g, "").trim();
      const cleanText = rawText.replace(/^[0-9]+[.\s)]+/, "").trim();
      if (cleanText.length > 2) {
        const id = slugify(cleanText) || slugify(rawText);
        items.push({
          id,
          text: cleanText,
          level: level >= 3 ? 3 : 2,
        });
      }
    }
  }

  // Fallback 2: Standalone question or bold title lines
  if (items.length === 0) {
    for (const line of lines) {
      const trimmed = line.trim();
      if (
        trimmed.length > 10 &&
        trimmed.length < 90 &&
        !trimmed.startsWith("http") &&
        !trimmed.startsWith("{") &&
        !trimmed.startsWith("@") &&
        (trimmed.endsWith("?") || (trimmed.startsWith("**") && trimmed.endsWith("**")) || /^[A-Z][A-Za-z0-9\s—:,-]+$/.test(trimmed))
      ) {
        const cleanText = trimmed.replace(/[*_`#]/g, "").replace(/^[0-9]+[.\s)]+/, "").trim();
        if (cleanText.length > 3) {
          items.push({
            id: slugify(cleanText),
            text: cleanText,
            level: 2,
          });
        }
      }
    }
  }

  return items;
}

export default function ArticleTableOfContents({
  content,
  className = "",
}: {
  content: string;
  className?: string;
}) {
  const initialItems = useMemo(() => parseInitialHeadings(content), [content]);
  const [headings, setHeadings] = useState<TOCItem[]>(initialItems);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(true);
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    // DOM Scanner: scans live DOM headings to guarantee exact IDs and bindings
    const scanAndBindDOM = () => {
      const articleEl = document.querySelector(".blog-content");
      if (!articleEl) return;

      const domHeadings = articleEl.querySelectorAll<HTMLElement>("h1, h2, h3, h4");
      const discoveredItems: TOCItem[] = [];

      domHeadings.forEach((el, index) => {
        const rawText = el.textContent?.trim() || "";
        if (!rawText || rawText.length < 2) return;

        // Strip any accidental markdown or hashes from text
        const cleanText = rawText
          .replace(/^[#\s*_-]+/, "")
          .replace(/^[0-9]+[.\s)]+/, "")
          .replace(/[*_`]/g, "")
          .trim();

        // Assign guaranteed ID to DOM element
        let id = el.id;
        if (!id) {
          id = slugify(cleanText) || slugify(rawText) || `section-${index + 1}`;
          el.id = id;
        }

        // Set data attribute for fallback lookup
        el.setAttribute("data-toc-id", id);
        el.style.scrollMarginTop = "110px";

        const tagName = el.tagName.toLowerCase();
        const level = tagName === "h3" || tagName === "h4" ? 3 : 2;

        discoveredItems.push({
          id,
          text: cleanText,
          level,
        });
      });

      if (discoveredItems.length > 0) {
        setHeadings(discoveredItems);
      }
    };

    // Run scan multiple times to accommodate dynamic hydration and image loading
    scanAndBindDOM();
    const timer1 = setTimeout(scanAndBindDOM, 100);
    const timer2 = setTimeout(scanAndBindDOM, 500);
    const timer3 = setTimeout(scanAndBindDOM, 1200);

    // Real-time Active Scroll Observer
    const handleScroll = () => {
      const articleEl = document.querySelector(".blog-content");
      if (!articleEl) return;

      const domHeadings = Array.from(
        articleEl.querySelectorAll<HTMLElement>("h1, h2, h3, h4")
      );

      if (domHeadings.length === 0) return;

      const scrollPosition = window.scrollY + 140;

      for (let i = domHeadings.length - 1; i >= 0; i--) {
        const el = domHeadings[i];
        if (el.offsetTop <= scrollPosition) {
          setActiveId(el.id || el.getAttribute("data-toc-id") || "");
          const currentIdx = i + 1;
          setReadProgress(Math.round((currentIdx / domHeadings.length) * 100));
          return;
        }
      }

      if (window.scrollY < domHeadings[0].offsetTop) {
        setActiveId(domHeadings[0].id || domHeadings[0].getAttribute("data-toc-id") || "");
        setReadProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [content]);

  const handleJumpToSection = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();

    // 1. Try finding element by ID
    let targetElement = document.getElementById(targetId);

    // 2. Fallback: Try data attribute
    if (!targetElement) {
      targetElement = document.querySelector(`[data-toc-id="${targetId}"]`) as HTMLElement;
    }

    // 3. Fallback: Search all headings inside blog content
    if (!targetElement) {
      const articleEl = document.querySelector(".blog-content");
      if (articleEl) {
        const allHeadings = articleEl.querySelectorAll<HTMLElement>("h1, h2, h3, h4");
        for (const h of Array.from(allHeadings)) {
          const text = h.textContent?.trim() || "";
          if (slugify(text) === targetId || text.toLowerCase().includes(targetId.replace(/-/g, " "))) {
            targetElement = h;
            targetElement.id = targetId;
            targetElement.setAttribute("data-toc-id", targetId);
            break;
          }
        }
      }
    }

    if (targetElement) {
      setActiveId(targetId);

      // Calculate exact scroll target with fixed navbar offset (100px)
      const rect = targetElement.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const targetY = Math.max(0, rect.top + scrollTop - 100);

      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });

      // Update URL hash smoothly without jumping
      if (window.history && window.history.pushState) {
        window.history.pushState(null, "", `#${targetId}`);
      }
    }
  };

  if (!headings || headings.length === 0) return null;

  return (
    <div
      className={`overflow-hidden rounded-3xl border-2 border-[#00ff97]/50 bg-gradient-to-br from-[#021f1a] via-[#043329] to-[#011614] p-5 sm:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.6)] relative group ${className}`}
    >
      {/* Radiant ambient glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-[#00ff97]/20 blur-3xl rounded-full pointer-events-none" />

      {/* Header Bar */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#00ff97] text-[#012928] flex items-center justify-center shadow-[0_0_20px_rgba(0,255,151,0.6)] font-extrabold">
            <Compass className="w-5 h-5 stroke-[2.5]" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold font-product-sans uppercase tracking-wider text-white flex items-center gap-1.5">
              <span>Table of Contents</span>
              <Sparkles className="w-3.5 h-3.5 text-[#00ff97]" />
            </div>
            <div className="text-[11px] text-[#00ff97] font-mono font-medium flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff97] animate-pulse" />
              <span>{headings.length} Key Topics</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {readProgress > 0 && (
            <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#00ff97]/20 border border-[#00ff97]/50 text-[#00ff97] shadow-sm">
              {readProgress}% Done
            </span>
          )}
          <span className="p-1.5 rounded-xl bg-white/10 text-white group-hover:bg-[#00ff97] group-hover:text-black transition-all duration-300">
            {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </span>
        </div>
      </button>

      {/* Topics Navigation List */}
      {isOpen && (
        <div className="mt-4 pt-3 border-t border-white/10">
          <nav className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1.5 scrollbar-thin scrollbar-thumb-[#00ff97]/40 scrollbar-track-transparent">
            {headings.map((item, idx) => {
              const isActive = activeId === item.id;
              const formattedIndex = idx + 1 < 10 ? `0${idx + 1}` : `${idx + 1}`;

              return (
                <a
                  key={`${item.id}-${idx}`}
                  href={`#${item.id}`}
                  onClick={(e) => handleJumpToSection(e, item.id)}
                  className={`w-full text-left text-xs py-2.5 px-3 rounded-xl transition-all duration-300 flex items-start gap-2.5 group cursor-pointer block relative ${
                    item.level === 3 ? "pl-7 text-[11px]" : ""
                  } ${
                    isActive
                      ? "bg-[#00ff97] text-[#012928] font-bold shadow-[0_0_20px_rgba(0,255,151,0.5)] scale-[1.02] translate-x-1"
                      : "text-slate-200 hover:text-white hover:bg-white/10 hover:translate-x-1 font-work-sans"
                  }`}
                >
                  <span
                    className={`shrink-0 text-[10px] font-mono mt-0.5 font-bold ${
                      isActive
                        ? "text-[#012928]"
                        : "text-[#00ff97] group-hover:scale-110 transition-transform"
                    }`}
                  >
                    {item.level === 2 ? formattedIndex : "↳"}
                  </span>
                  <span className="line-clamp-2 leading-relaxed flex-1">
                    {item.text}
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}

