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
    <Link href="/learning" className={`flex items-center gap-2.5 ${className}`} aria-label="Stockstrail Learning home">
      <svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" aria-hidden="true">
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#012928]/80 backdrop-blur-none sm:backdrop-blur-[100px] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <LearnLogo className="hover:opacity-80 hover:scale-105 transition-all duration-300 group" />

        {/* Desktop Navigation Capsule */}
        <nav className="hidden lg:flex items-center">
          <div className="flex items-center bg-white/5 backdrop-blur-[37.5px] px-14 py-4 rounded-[45px] space-x-16 hover:bg-white/10 transition-all duration-300">
            {NAV.map((n) => {
              const href = n.to === "/" ? "/learning" : `/learning${n.to}`;
              const isActive = n.to === "/" ? pathname === "/learning" : pathname.startsWith(href);
              return (
                <Link
                  key={n.to}
                  href={href}
                  className={`font-work-sans font-medium transition-all duration-300 ${
                    isActive ? "text-[#00ff97]" : "text-white hover:text-[#00ff97]"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Action Button */}
        <div className="flex items-center gap-2">
          <Link
            href="https://www.stockstrail.in"
            className="hidden sm:inline-flex items-center gap-4 px-6 py-4 bg-white border-2 border-[#012928] rounded-full text-[#012928] hover:bg-white/90 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-semibold group"
          >
            <svg className="w-4 h-4 shrink-0 overflow-visible" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="7" fill="#00ff97" opacity="0.6" className="animate-ping origin-center" />
              <circle cx="8" cy="8" r="5" fill="#00d873" />
            </svg>
            Back to Stockstrail
          </Link>
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-[color:var(--color-brand-border)] text-white hover:bg-white/10 transition-colors"
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
        <div className="lg:hidden border-t border-white/10 px-5 py-4 bg-[#012928]">
          <nav className="flex flex-col space-y-3">
            {NAV.map((n) => {
              const href = n.to === "/" ? "/learning" : `/learning${n.to}`;
              return (
                <Link
                  key={n.to}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm font-medium text-white/85 hover:text-[#00ff97] transition-colors"
                >
                  {n.label}
                </Link>
              );
            })}
            <Link
              href="https://www.stockstrail.in"
              className="inline-flex items-center gap-4 px-6 py-4 bg-white border-2 border-[#012928] rounded-full text-[#012928] hover:bg-white/90 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 font-semibold group w-fit mt-3"
              onClick={() => setOpen(false)}
            >
              <svg className="w-4 h-4 shrink-0 overflow-visible" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="7" fill="#00ff97" opacity="0.6" className="animate-ping origin-center" />
                <circle cx="8" cy="8" r="5" fill="#00d873" />
              </svg>
              Back to Stockstrail
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#00D873] to-transparent" />

      {/* Subtle glow behind footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00D873]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative bg-[#001c1c]/60 backdrop-blur-sm">
        {/* CTA Banner */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-14 pb-10">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 sm:p-10 group hover:border-[#00D873]/30 transition-colors duration-500">
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent pointer-events-none" />
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-product-sans)" }}>
                  Ready to master your finances?
                </h3>
                <p className="text-white/60 text-sm sm:text-base max-w-md">
                  Explore free, structured courses on investing, personal finance, and wealth creation — built for Indian investors.
                </p>
              </div>
              <Link
                href="/learning/courses"
                className="shrink-0 inline-flex items-center gap-3 px-7 py-3.5 bg-[#00D873] text-[#012928] rounded-full font-semibold hover:shadow-[0_0_24px_rgba(0,216,115,0.35)] hover:scale-105 transition-all duration-300"
              >
                Browse Courses
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Main grid */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-12 grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <LearnLogo />
            <p className="mt-5 text-sm text-white/55 leading-relaxed max-w-xs">
              A premium financial education hub by Stockstrail. Structured courses on investing, personal finance, and wealth creation — built for Indian investors.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4 mt-6">
              {[
                { label: "Facebook", href: "https://www.facebook.com/people/Stockstrail-Stockstrail/100089234534696/", icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/> },
                { label: "LinkedIn", href: "https://www.linkedin.com/company/stockstrail/", icon: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></> },
                { label: "Instagram", href: "https://instagram.com/stockstrail/", icon: <><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></> },
                { label: "Telegram", href: "https://t.me/stockstrail", icon: <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/> },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-[#00D873] hover:border-[#00D873]/40 hover:bg-[#00D873]/10 hover:scale-110 transition-all duration-300"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
                </a>
              ))}
            </div>
          </div>

          {/* Learn links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#00D873]/80 font-semibold mb-5">Learn</h4>
            <ul className="space-y-3">
              {[
                { label: "All Courses", href: "/learning/courses" },
                { label: "Categories", href: "/learning/categories" },
                { label: "About Learning", href: "/learning/about" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-300">
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#00D873] group-hover:shadow-[0_0_6px_rgba(0,216,115,0.5)] transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Stockstrail links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#00D873]/80 font-semibold mb-5">Stockstrail</h4>
            <ul className="space-y-3">
              {[
                { label: "Main Website", href: "https://www.stockstrail.in" },
                { label: "Services", href: "https://www.stockstrail.in/services" },
                { label: "Mutual Funds", href: "https://www.stockstrail.in/mutual-funds" },
                { label: "Let's Talk", href: "https://www.stockstrail.in/lets-talk" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-300">
                    <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#00D873] group-hover:shadow-[0_0_6px_rgba(0,216,115,0.5)] transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#00D873]/80 font-semibold mb-5">Get in Touch</h4>
            <div className="space-y-4">
              <a href="tel:+919736304663" className="group flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300">
                <span className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-[#00D873]/40 group-hover:bg-[#00D873]/10 transition-all duration-300 shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-[#00D873] transition-colors"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.91 11a16 16 0 0 0 6 6l1.36-1.36a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                +91 97363-04663
              </a>
              <a href="mailto:connect@stockstrail.in" className="group flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300">
                <span className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center group-hover:border-[#00D873]/40 group-hover:bg-[#00D873]/10 transition-all duration-300 shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-[#00D873] transition-colors"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </span>
                connect@stockstrail.in
              </a>
              <div className="group flex items-start gap-3 text-sm text-white/60">
                <span className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/40"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <span className="leading-relaxed">
                  Mata, Chintapurni Rd, near Punjab &amp; Sind Bank,<br />
                  Moien, Chintpurni,<br />
                  Himachal Pradesh 177110
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["AMFI Registered", "SEBI Certified", "NISM V-A", "200+ Clients"].map((badge) => (
              <span key={badge} className="px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-wider text-[#00D873]/70 border border-[#00D873]/15 rounded-full bg-[#00D873]/[0.04]">
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/35">
              © {currentYear} Stockstrail Learning. Educational content only — not investment advice.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-white/35">
              <span>Made with</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#00D873" className="opacity-60"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
