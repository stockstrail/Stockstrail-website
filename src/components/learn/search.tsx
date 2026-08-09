"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface SearchResult {
  type: "course" | "module";
  courseSlug: string;
  courseTitle: string;
  title: string;
  hint?: string;
}

export function SearchBar({ size = "lg", autoFocus = false }: { size?: "lg" | "md"; autoFocus?: boolean }) {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();

  // Fetch results from the API (debounced)
  const fetchResults = useCallback(async (query: string) => {
    if (!query.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/api/learning/search?q=${encodeURIComponent(query.trim())}`);
      const json = await res.json();
      setResults(json.results ?? []);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!q.trim()) {
      setResults([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    debounceRef.current = setTimeout(() => fetchResults(q), 300);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [q, fetchResults]);

  // Close on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const height = size === "lg" ? "h-14" : "h-11";
  const text = size === "lg" ? "text-base" : "text-sm";

  const go = (r: SearchResult) => {
    setOpen(false);
    setQ("");
    router.push(`/learning/courses/${r.courseSlug}`);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <div className={`flex items-center gap-3 rounded-full bg-white/5 border border-[color:var(--color-brand-border)] px-5 ${height} transition-colors focus-within:border-[color:var(--color-brand-green)]/60 focus-within:bg-white/10`}>
        {loading ? (
          <svg className="text-white/50 shrink-0 animate-spin" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/50 shrink-0">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" strokeLinecap="round" />
          </svg>
        )}
        <input
          type="text"
          value={q}
          autoFocus={autoFocus}
          onChange={(e) => { setQ(e.target.value); setOpen(true); setActive(0); }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") { e.preventDefault(); setActive((a) => Math.min(a + 1, results.length - 1)); }
            else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, 0)); }
            else if (e.key === "Enter" && results[active]) { e.preventDefault(); go(results[active]); }
            else if (e.key === "Escape") setOpen(false);
          }}
          placeholder="Search courses, topics, lessons…"
          aria-label="Search learning platform"
          className={`flex-1 bg-transparent outline-none placeholder:text-white/40 text-white ${text}`}
        />
        <kbd className="hidden sm:inline-flex text-[10px] font-medium text-white/50 border border-[color:var(--color-brand-border)] rounded px-1.5 py-0.5">↵</kbd>
      </div>
      {open && q && (
        <div className="absolute z-30 mt-2 left-0 right-0 rounded-2xl border border-[color:var(--color-brand-border)] bg-brand-surface shadow-2xl overflow-hidden animate-fade-up" style={{ animationDuration: '0.2s' }}>
          {results.length === 0 && !loading ? (
            <div className="p-6 text-sm text-white/60">No matches for "{q}". Try "mutual funds" or "SIP".</div>
          ) : (
            <ul className="py-2 max-h-[60vh] overflow-y-auto">
              {results.map((r, i) => (
                <li key={i}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(r)}
                    className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${active === i ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"}`}
                  >
                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg text-[10px] font-semibold uppercase tracking-wider border border-[color:var(--color-brand-border)] ${r.type === "course" ? "text-[color:var(--color-brand-green)]" : "text-white/70"}`}>
                      {r.type[0]}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block truncate text-sm text-white">{r.title}</span>
                      {r.hint && <span className="block truncate text-xs text-white/50">{r.hint}</span>}
                    </span>
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/40">
                      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="border-t border-[color:var(--color-brand-border)] px-4 py-2 text-[11px] text-white/40 flex items-center justify-between">
            <span>Tip: press ↑ ↓ to navigate, ↵ to open.</span>
            <Link href="/learning/courses" className="text-[color:var(--color-brand-green)] hover:underline">Browse all →</Link>
          </div>
        </div>
      )}
    </div>
  );
}
