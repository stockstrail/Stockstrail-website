import type { Metadata } from "next";
import Link from "next/link";
import { categories, courses, coursesByCategory } from "@/lib/learning/courses";
import { CourseCard, CategoryCard } from "@/components/learn/cards";
import { SearchBar } from "@/components/learn/search";

export const metadata: Metadata = {
  title: "StocksTrail Learning — Master Investing & Personal Finance",
  description: "Learn investing the right way. Structured courses on mutual funds, SIPs, insurance, tax and personal finance — free and distraction-free.",
  openGraph: {
    title: "StocksTrail Learning — Master Investing & Personal Finance",
    description: "Learn investing the right way. Structured courses on mutual funds, SIPs, insurance, tax and personal finance.",
    url: "/learning",
  },
  alternates: {
    canonical: "/learning",
  }
};

export default function HomePage() {
  const featured = [...courses].sort((a, b) => b.popularity - a.popularity).slice(0, 6);
  const topCats = categories.slice(0, 8);

  return (
    <>
      {/* HERO */}
      <section className="relative z-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <span className="glow-blob top-[-80px] left-[-120px] h-[420px] w-[420px] animate-float" />
          <span className="glow-blob bottom-[-160px] right-[-120px] h-[520px] w-[520px] animate-float-slow" style={{ background: "rgba(0, 216, 115, 0.12)" }} />
        </div>
        {/* Subtle grid backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 pt-16 sm:pt-24 pb-16 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-brand-border)] bg-white/[0.03] px-4 py-1.5 text-xs text-white/75">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-brand-green)] animate-pulse-glow" />
            The financial knowledge hub by StocksTrail
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
            Learn investing
            <br />
            <span className="gradient-text">the right way.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
            Master mutual funds, SIPs, insurance, stocks and personal finance through structured, distraction-free courses —
            built for Indian investors, from beginner to intermediate.
          </p>

          <div className="mx-auto mt-10 max-w-2xl relative z-30">
            <SearchBar size="lg" />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/learning/courses"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-green)] px-6 py-3 text-sm font-semibold text-[color:var(--color-brand-bg)] hover:bg-white transition-colors"
            >
              Explore Courses
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link
              href="/learning/categories"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-brand-border)] bg-white/[0.03] px-6 py-3 text-sm font-medium text-white hover:border-white/40 transition-colors"
            >
              Browse Categories
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 max-w-3xl mx-auto">
            {[
              { k: `${courses.length}+`, v: "Structured courses" },
              { k: `${categories.length}+`, v: "Finance topics" },
              { k: "Free", v: "Always, no login" },
              { k: "SEBI-aware", v: "India-first content" },
            ].map((s) => (
              <div key={s.v} className="text-center">
                <div className="text-2xl sm:text-3xl font-semibold text-white" style={{ fontFamily: "var(--font-product-sans)" }}>{s.k}</div>
                <div className="mt-1 text-xs text-white/55">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-brand-green)] font-semibold">Featured Courses</div>
            <h2 className="mt-2 text-3xl sm:text-4xl text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
              Start with the essentials
            </h2>
            <p className="mt-2 max-w-xl text-white/60 text-sm sm:text-base">
              Hand-picked courses that give you the strongest foundation, whether you're just starting or already investing.
            </p>
          </div>
          <Link href="/learning/courses" className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-brand-green)] hover:underline">
            View all courses →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((c) => <CourseCard key={c.slug} course={c} />)}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-brand-green)] font-semibold">Browse by Category</div>
            <h2 className="mt-2 text-3xl sm:text-4xl text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
              What do you want to learn today?
            </h2>
          </div>
          <Link href="/learning/categories" className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-brand-green)] hover:underline">
            All categories →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {topCats.map((c) => (
            <CategoryCard key={c.slug} category={c} count={coursesByCategory(c.slug).length} />
          ))}
        </div>
      </section>

    {/* HOW IT WORKS */}
      <section className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-brand-green)] font-semibold">A calmer way to learn</div>
          <h2 className="mt-2 text-3xl sm:text-4xl text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
            No signup. No noise. Just clarity.
          </h2>
          <p className="mt-3 text-white/60">Open any course, read at your own pace, take the quiz. That's it.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { n: "01", t: "Pick a topic", d: "Choose from mutual funds, SIP, insurance, tax and more." },
            { n: "02", t: "Read a module", d: "Bite-sized lessons with real Indian examples, tables and callouts." },
            { n: "03", t: "Test yourself", d: "Every course ends with a quiz and key takeaways — instantly." },
          ].map((s) => (
            <div key={s.n} className="card-surface rounded-2xl p-6">
              <div className="text-[color:var(--color-brand-green)] font-display text-2xl font-semibold" style={{ fontFamily: "var(--font-product-sans)" }}>{s.n}</div>
              <h3 className="mt-3 text-white text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO ARTICLE SECTION */}
      <section className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20 border-t border-white/5">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
              1. Compounding &amp; Wealth Creation
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Achieving long-term financial independence requires understanding the power of compounding. Retail investors in India can build wealth systematically through <strong>Mutual Funds</strong> and <strong>Systematic Investment Plans (SIP)</strong>. Our courses simplify concepts like equity funds, debt funds, hybrid asset allocations, and the mechanics of compounding to help you invest with confidence.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
              2. Protection &amp; Risk Management
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              No financial plan is complete without a strong shield. Before focusing on wealth accumulation, securing your downside is paramount. Learn how to size your <strong>Emergency Fund</strong>, manage your <strong>Credit Score</strong>, avoid debt traps, and choose the right <strong>Term Insurance</strong> and <strong>Health Insurance</strong> policies to safeguard your family's future against unexpected life events.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
              3. Retirement &amp; Tax Efficiency
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Smart investing is about maximizing post-tax returns. We offer detailed guides on <strong>Tax Saving Investments</strong> (such as ELSS, PPF, and NPS under Section 80C) and low-risk guaranteed instruments like <strong>Fixed Deposits (FD)</strong> and corporate bonds. Plan your retirement using <strong>Systematic Withdrawal Plans (SWP)</strong> for steady, tax-efficient passive income streams.
            </p>
          </div>
        </div>
      </section>

      {/* SEO FAQ SECTION */}
      <section className="relative mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-20 border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-brand-green)] font-semibold">FAQs</div>
          <h2 className="mt-2 text-3xl sm:text-4xl text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-white/60">Everything you need to know about our structured financial knowledge hub.</p>
        </div>
        <div className="space-y-4">
          {[
            {
              q: "What is StocksTrail Learning, and who is it for?",
              a: "StocksTrail Learning is a dedicated, distraction-free educational platform designed for Indian retail investors, beginner savers, and intermediate wealth builders. It provides structured, SEBI-aware courses to help you master mutual funds, SIPs, insurance, retirement, and tax planning without jargon or product pitches."
            },
            {
              q: "Is this learning platform free, and do I need to create an account?",
              a: "Yes, StocksTrail Learning is 100% free and always will be. We believe financial literacy should be accessible to everyone. There are no paywalls, no login requirements, no ads, and no sign-ups. You can start reading any course instantly."
            },
            {
              q: "How do structured courses differ from scattered financial blogs?",
              a: "Most financial advice online is scattered across isolated articles or videos, making it hard to build a coherent system. StocksTrail Learning uses structured, progressive modules. Each course acts as a step-by-step pathway from basic definitions to advanced, goal-based execution."
            },
            {
              q: "Who writes and curates the course content?",
              a: "Our courses are curated by financial professionals with years of advisory experience. They align with SEBI investor guidelines and AMFI-registered standards, ensuring the information is accurate, up-to-date, and focused entirely on the investor's financial security."
            },
            {
              q: "How does this connect to the main StocksTrail website?",
              a: "StocksTrail Learning serves as the educational subdomain of stockstrail.in. Once you build your foundation here, you can use the main website's tools—such as our online Risk Profile Assessment, Fixed Deposit planners, or schedule a direct consultation for personalized investment guidance."
            }
          ].map((faq, index) => (
            <details key={index} className="group border border-white/5 bg-white/[0.015] rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-4 p-5 text-left text-white font-medium cursor-pointer hover:bg-white/[0.02] transition-colors select-none">
                <span className="text-sm sm:text-base">{faq.q}</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/40 transition-transform group-open:rotate-180 shrink-0">
                  <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/60 leading-relaxed border-t border-white/5">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-brand-border)] p-10 sm:p-16 text-center" style={{ background: "linear-gradient(135deg, rgba(0,255,151,0.08), rgba(0,125,66,0.02))" }}>
          <span className="glow-blob top-[-80px] right-[-80px] h-[300px] w-[300px]" />
          <h2 className="relative text-3xl sm:text-4xl text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
            Ready to invest with clarity?
          </h2>
          <p className="relative mt-3 text-white/70 max-w-xl mx-auto">
            Start with our most popular course and build a portfolio you actually understand.
          </p>
          <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/learning/courses/mutual-funds" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-green)] px-6 py-3 text-sm font-semibold text-[color:var(--color-brand-bg)] hover:bg-white transition-colors">
              Start with Mutual Funds
            </Link>
            <Link href="/learning/courses" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-brand-border)] px-6 py-3 text-sm font-medium text-white hover:border-white/40 transition-colors">
              Browse all courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
