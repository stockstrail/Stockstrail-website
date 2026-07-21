"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/categories", label: "Categories" },
  { to: "/about", label: "About" },
];

export function LearnLogo({ className = "" }: { className?: string }) {
  return (
    <Link 
      href="/learning" 
      className={`flex items-center gap-2.5 hover:opacity-90 hover:scale-[1.03] transition-all duration-300 group ${className}`} 
      aria-label="Stockstrail Learning home"
    >
      <svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 transition-transform group-hover:rotate-6 duration-300" aria-hidden="true">
        <rect x="3.74" y="16.02" width="20.89" height="3.72" fill="url(#g)" />
        <path d="M1.15 18.55C0.92 18.32 0.92 17.94 1.15 17.71L15.59 3.52c0.5-0.49 1.3-0.48 1.8 0.01l1.28 1.28c0.5 0.5 0.5 1.31 0 1.83L6.53 18.58c-1.49 1.47-3.89 1.46-5.38-0.03Z" fill="#00D873" />
        <path d="M20.5 0.96c0.42-0.1 0.79 0.28 0.69 0.69l-1.48 6.35c-0.1 0.44-0.65 0.6-0.97 0.28L13.87 3.41c-0.32-0.32-0.16-0.87 0.28-0.97l6.35-1.48Z" fill="#00D873" />
        <path d="M30.52 17.06c0.14 0.15 0.14 0.38 0 0.53L15.74 32.11c-0.4 0.4-1.04 0.39-1.44 0l-1.65-1.65c-0.4-0.4-0.4-1.05 0.01-1.45L24.83 17.04c1.58-1.55 4.12-1.54 5.69 0.02Z" fill="#00D873" />
        <path d="M11.02 34.5c-0.42 0.1-0.79-0.28-0.69-0.69l1.48-6.35c0.1-0.44 0.65-0.6 0.97-0.28l4.87 4.87c0.32 0.32 0.16 0.87-0.28 0.97l-6.35 1.48Z" fill="#00D873" />
        <defs>
          <linearGradient id="g" x1="-8.87" y1="14.3" x2="25.17" y2="20.39" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00D873" />
            <stop offset="1" stopColor="#00D873" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex items-baseline">
        <span className="text-white font-display text-[22px] sm:text-[26px] font-bold" style={{ fontFamily: "var(--font-product-sans)" }}>Stocks</span>
        <span className="text-white font-display text-[22px] sm:text-[26px] font-normal" style={{ fontFamily: "var(--font-product-sans)" }}>trail</span>
        <span className="ml-2 text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-brand-green)] font-semibold">Learning</span>
      </div>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#012928]/80 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <LearnLogo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center bg-white/5 backdrop-blur-[37.5px] px-6 py-2 rounded-full space-x-6 hover:bg-white/10 transition-all duration-300 border border-white/[0.03]">
            {NAV.map((n) => {
              const href = n.to === "/" ? "/learning" : `/learning${n.to}`;
              const isActive = n.to === "/" ? pathname === "/learning" : pathname.startsWith(href);
              return (
                <Link
                  key={n.to}
                  href={href}
                  className={`font-display text-[13px] font-medium transition-all duration-300 ${
                    isActive ? "text-[#00ff97] font-semibold" : "text-white/80 hover:text-[#00ff97]"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-3">
          <Link
            href="https://www.stockstrail.in"
            className="group hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 bg-white border border-[#012928] rounded-full text-[#012928] font-semibold text-xs hover:bg-white/95 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_-5px_rgba(0,255,151,0.25)] transition-all duration-300"
          >
            <div className="w-2 h-2 bg-[#00d873] rounded-full group-hover:animate-pulse shrink-0"></div>
            Back to Stockstrail
          </Link>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-[color:var(--color-brand-border)] text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-[color:var(--color-brand-border)] px-5 py-3 bg-[color:var(--color-brand-bg)]">
          <nav className="flex flex-col">
            {NAV.map((n) => {
              const href = n.to === "/" ? "/learning" : `/learning${n.to}`;
              return (
                <Link
                  key={n.to}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-sm font-medium text-white/85 hover:text-[color:var(--color-brand-green)]"
                >
                  {n.label}
                </Link>
              );
            })}
            <Link href="https://www.stockstrail.in" className="py-2.5 text-sm text-white/70" onClick={() => setOpen(false)}>Back to Stockstrail →</Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[color:var(--color-brand-border)] bg-[#001c1c]/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <LearnLogo />
          <p className="mt-4 max-w-md text-sm text-white/70 leading-relaxed">
            A premium financial education hub by Stockstrail. Structured courses on investing, personal finance and wealth
            creation — built for Indian investors.
          </p>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-3">Learn</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/learning/courses" className="hover:text-[color:var(--color-brand-green)]">All Courses</Link></li>
            <li><Link href="/learning/categories" className="hover:text-[color:var(--color-brand-green)]">Categories</Link></li>
            <li><Link href="/learning/about" className="hover:text-[color:var(--color-brand-green)]">About</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold mb-3">Stockstrail</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="https://www.stockstrail.in" className="hover:text-[color:var(--color-brand-green)]">Main site</Link></li>
            <li><Link href="https://www.stockstrail.in/services" className="hover:text-[color:var(--color-brand-green)]">Services</Link></li>
            <li><Link href="https://www.stockstrail.in/contact" className="hover:text-[color:var(--color-brand-green)]">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[color:var(--color-brand-border)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-6 text-xs text-white/50 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Stockstrail Learning. Educational content only — not investment advice.</p>
          <p>Made with care in India.</p>
        </div>
      </div>
    </footer>
  );
}
