"use client";

import React, { useState, useEffect, useRef } from "react";
import { ListFilter, ChevronDown, ChevronRight, Hash, ArrowUpRight } from "lucide-react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function ArticleTableOfContents({
  content,
  className = "",
}: {
  content: string;
  className?: string;
}) {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isOpen, setIsOpen] = useState(true);
  const activeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    // 1. Initial parse from content
    const items: TOCItem[] = [];
    const lines = content.split("\n");

    lines.forEach((line) => {
      const match = line.match(/^(#{2,3})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const rawText = match[2].trim().replace(/[*_`~[\]]/g, "");
        const id = slugify(rawText);
        if (rawText.length > 1) {
          items.push({ id, text: rawText, level });
        }
      }
    });

    // 2. Also inspect live DOM to ensure all rendered headings are captured and have matching IDs
    const syncWithDom = () => {
      const domHeadings = document.querySelectorAll<HTMLElement>(
        ".blog-content h2, .blog-content h3"
      );

      if (domHeadings.length > 0) {
        const domItems: TOCItem[] = [];
        domHeadings.forEach((el, index) => {
          const text = el.innerText.trim();
          let id = el.id;
          if (!id) {
            id = slugify(text) || `section-${index}`;
            el.id = id;
          }
          // Add scroll margin so sticky headers don't overlap when jumped to
          el.style.scrollMarginTop = "100px";

          const level = el.tagName.toLowerCase() === "h2" ? 2 : 3;
          if (text) {
            domItems.push({ id, text, level });
          }
        });
        setHeadings(domItems);
      } else {
        setHeadings(items);
      }
    };

    syncWithDom();
    const timer = setTimeout(syncWithDom, 300);

    // 3. Robust IntersectionObserver for active scroll tracking
    const observerCallback: IntersectionObserverCallback = (entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        // Pick the top visible heading
        const topVisible = visibleEntries[0];
        setActiveId(topVisible.target.id);
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-90px 0px -70% 0px",
      threshold: 0,
    });

    const domElements = document.querySelectorAll(".blog-content h2, .blog-content h3");
    domElements.forEach((el) => observer.observe(el));

    // Fallback scroll listener for smooth scroll transitions
    const handleScroll = () => {
      const headingElements = Array.from(
        document.querySelectorAll<HTMLElement>(".blog-content h2, .blog-content h3")
      );
      if (headingElements.length === 0) return;

      const scrollPos = window.scrollY + 120;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i];
        if (el.offsetTop <= scrollPos) {
          setActiveId(el.id);
          return;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [content]);

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      setActiveId(id);
      const topOffset = el.getBoundingClientRect().top + window.scrollY - 95;
      window.scrollTo({
        top: Math.max(0, topOffset),
        behavior: "smooth",
      });
      // Update browser hash without hard jump
      if (history.pushState) {
        history.pushState(null, "", `#${id}`);
      }
    }
  };

  if (headings.length < 2) return null;

  return (
    <div className={`overflow-hidden rounded-2xl border-2 border-[#00ff97]/30 bg-[#031d1a]/95 backdrop-blur-xl p-5 shadow-2xl transition-all duration-300 ${className}`}>
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#00ff97]/20 border border-[#00ff97]/40 flex items-center justify-center text-[#00ff97]">
            <ListFilter className="w-3.5 h-3.5" />
          </div>
          <span className="text-xs font-bold font-product-sans uppercase tracking-wider text-[#00ff97]">
            Table of Contents
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-mono font-bold text-white/50 bg-white/5 px-2 py-0.5 rounded-full">
            {headings.length} Topics
          </span>
          <span className="p-1 rounded-lg bg-white/5 text-white/60 group-hover:text-white group-hover:bg-white/10 transition-colors">
            {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </span>
        </div>
      </button>

      {/* Topics list */}
      {isOpen && (
        <nav className="mt-4 space-y-1 pt-3 border-t border-white/10 max-h-80 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-[#00ff97]/30">
          {headings.map((item, idx) => {
            const isActive = activeId === item.id;
            return (
              <button
                key={`${item.id}-${idx}`}
                ref={isActive ? activeRef : null}
                onClick={() => scrollToHeading(item.id)}
                className={`w-full text-left text-xs py-2 px-3 rounded-xl transition-all duration-200 flex items-start gap-2.5 group cursor-pointer ${
                  item.level === 3 ? "pl-6 text-[11px]" : ""
                } ${
                  isActive
                    ? "bg-[#00ff97] text-[#012928] font-bold shadow-[0_0_20px_rgba(0,255,151,0.35)] scale-[1.01]"
                    : "text-slate-300 hover:text-white hover:bg-white/10 font-work-sans"
                }`}
              >
                <span
                  className={`shrink-0 text-[10px] font-mono mt-0.5 font-bold ${
                    isActive ? "text-[#012928]" : "text-[#00ff97]/70 group-hover:text-[#00ff97]"
                  }`}
                >
                  {item.level === 2 ? `0${idx + 1}` : "•"}
                </span>
                <span className="line-clamp-2 leading-relaxed flex-1">{item.text}</span>
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}
