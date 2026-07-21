import type { Metadata } from "next";
import Link from "next/link";
import { getCategories, getCourses } from "@/lib/learning/supabase-db";
import { CategoryCard } from "@/components/learn/cards";
import { CourseCardsGrid } from "@/components/learn/CourseCardsGrid";
import { SearchBar } from "@/components/learn/search";

export const metadata: Metadata = {
  title: "Stockstrail Learning — Free Investing & Personal Finance Courses for India",
  description: "Free structured courses on mutual funds, SIP, insurance, tax saving, stock market, and retirement planning — built for Indian investors. No login, no ads, SEBI-aware content.",
  keywords: "mutual fund course India, SIP investing guide, ELSS tax saving, financial literacy India, free investing course, personal finance India, SEBI AMFI, retirement planning India",
  openGraph: {
    title: "Stockstrail Learning — Free Investing & Personal Finance Courses for India",
    description: "Free structured courses on mutual funds, SIP, insurance, tax saving, stock market, and retirement planning — built for Indian investors.",
    url: "https://www.learning.stockstrail.in",
  },
  alternates: {
    canonical: "https://www.learning.stockstrail.in",
  }
};

export default async function HomePage() {
  const categories = await getCategories();
  const courses = await getCourses();
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
            The financial knowledge hub by Stockstrail
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

      {/* INDIA FINANCIAL LITERACY STATS STRIP */}
      <section className="border-y border-white/5 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-10">
          <p className="text-center text-[11px] uppercase tracking-[0.2em] text-white/40 mb-8">Why financial education matters in India</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
            {[
              { k: "27%", v: "of Indians have a mutual fund SIP — most don't fully understand it", accent: true },
              { k: "₹60L Cr+", v: "AUM managed by Indian mutual funds across 4.4 crore folios" },
              { k: "78%", v: "of retail investors have never taken a structured finance course" },
              { k: "3×", v: "wealth difference between informed and uninformed long-term investors" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className={`text-2xl sm:text-3xl font-semibold ${s.accent ? "text-[color:var(--color-brand-green)]" : "text-white"}`} style={{ fontFamily: "var(--font-product-sans)" }}>{s.k}</div>
                <div className="mt-2 text-xs text-white/50 leading-relaxed">{s.v}</div>
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
        <CourseCardsGrid courses={featured} />
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
            <CategoryCard key={c.slug} category={c} count={courses.filter(x => x.category === c.slug).length} />
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20 border-t border-white/5">
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

      {/* LEARNING ROADMAP */}
      <section className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20 border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-brand-green)] font-semibold">Structured Learning Path</div>
          <h2 className="mt-2 text-3xl sm:text-4xl text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
            Your roadmap from zero to confident
          </h2>
          <p className="mt-3 text-white/60">
            Not sure where to start? Follow this recommended order to build a complete financial foundation.
          </p>
        </div>
        <div className="relative">
          <div className="hidden sm:block absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden />
          <div className="grid gap-6 sm:grid-cols-4">
            {[
              { step: "1", label: "Beginner", title: "Build the Base", desc: "Emergency fund → Term Insurance → Health Insurance. Secure before you grow.", link: "/learning/courses/financial-planning-basics", tag: "Start here" },
              { step: "2", label: "Foundation", title: "Start Investing", desc: "Mutual Funds → SIP Mastery → how NAV, expense ratios, and compounding work.", link: "/learning/courses/mutual-funds", tag: "Most popular" },
              { step: "3", label: "Intermediate", title: "Grow & Save Tax", desc: "ELSS, PPF, NPS under Section 80C. Reduce your tax bill while growing wealth.", link: "/learning/courses/tax-saving-investments", tag: "High impact" },
              { step: "4", label: "Advanced", title: "Plan for the Future", desc: "Retirement corpus sizing, goal-based portfolios, SWP withdrawals.", link: "/learning/courses/retirement-planning-101", tag: "Long term" },
            ].map((r, i) => (
              <Link key={i} href={r.link} className="group relative card-surface rounded-2xl p-6 hover:border-[color:var(--color-brand-green)]/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full border border-[color:var(--color-brand-green)]/40 bg-[color:var(--color-brand-green)]/10 flex items-center justify-center text-xs font-bold text-[color:var(--color-brand-green)]">{r.step}</span>
                  <span className="text-[10px] uppercase tracking-wider text-[color:var(--color-brand-green)] font-semibold">{r.tag}</span>
                </div>
                <div className="text-[11px] uppercase tracking-wider text-white/40 mb-1">{r.label}</div>
                <h3 className="text-base font-semibold text-white mb-2">{r.title}</h3>
                <p className="text-xs text-white/55 leading-relaxed">{r.desc}</p>
                <div className="mt-4 text-[color:var(--color-brand-green)] text-xs font-medium group-hover:underline">Start this path →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR TOPICS TAG CLOUD */}
      <section className="relative mx-auto max-w-5xl px-5 sm:px-8 py-12 border-t border-white/5 text-center">
        <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-brand-green)] font-semibold mb-4">Popular Topics</div>
        <h2 className="text-2xl sm:text-3xl text-white mb-8" style={{ fontFamily: "var(--font-product-sans)" }}>
          Jump straight to what you need
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: "Mutual Funds", href: "/learning/courses/mutual-funds" },
            { label: "SIP Investing", href: "/learning/courses/sip-mastery" },
            { label: "Term Insurance", href: "/learning/courses/insurance-fundamentals" },
            { label: "ELSS & 80C", href: "/learning/courses/tax-saving-investments" },
            { label: "Stock Market", href: "/learning/courses/stock-market-basics" },
            { label: "Demat Account", href: "/learning/courses/demat-accounts-guide" },
            { label: "Retirement Planning", href: "/learning/courses/retirement-planning-101" },
            { label: "Fixed Deposits", href: "/learning/courses/fixed-deposits-explained" },
            { label: "Budgeting", href: "/learning/courses/personal-finance-foundations" },
            { label: "Goal-Based Investing", href: "/learning/courses/goal-based-investing" },
            { label: "Financial Planning", href: "/learning/courses/financial-planning-basics" },
            { label: "NPS & PPF", href: "/learning/courses/tax-saving-investments" },
          ].map((t) => (
            <Link
              key={t.label}
              href={t.href}
              className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2 text-sm text-white/75 hover:border-[color:var(--color-brand-green)]/50 hover:text-white hover:bg-white/[0.04] transition-all"
            >
              {t.label}
            </Link>
          ))}
        </div>
      </section>

      {/* THREE PILLARS OF FINANCIAL INDEPENDENCE */}
      <section className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20 border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-brand-green)] font-semibold">Deep Dives</div>
          <h2 className="mt-2 text-3xl sm:text-4xl text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
            The three pillars of financial independence
          </h2>
          <p className="mt-3 text-white/60 text-sm">
            Every lasting financial plan rests on the same three foundations. Our courses cover all of them — in the right order.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="card-surface rounded-2xl p-7 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[color:var(--color-brand-green)]/10 border border-[color:var(--color-brand-green)]/20 flex items-center justify-center text-lg">📈</div>
            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
              Compounding &amp; Wealth Creation
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              The most powerful force in personal finance is time. A ₹5,000 monthly SIP started at age 25, invested in a diversified <strong>Nifty 50 index fund</strong>, grows to over ₹2.6 crore by retirement — assuming a modest 12% CAGR. The same SIP started at 35 would produce less than half that amount.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Our courses on <strong>Mutual Funds</strong>, <strong>SIP Mastery</strong>, and <strong>Goal-Based Investing</strong> teach you how to harness compounding systematically — through equity funds, index funds, and step-up SIPs — without requiring any prior knowledge of finance or markets.
            </p>
            <Link href="/learning/courses/mutual-funds" className="inline-flex items-center gap-1 text-sm text-[color:var(--color-brand-green)] font-medium hover:underline">
              Learn Mutual Funds →
            </Link>
          </div>
          <div className="card-surface rounded-2xl p-7 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center text-lg">🛡️</div>
            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
              Protection &amp; Risk Management
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              A single medical emergency or an untimely death can erase years of careful investing. Before you place your first SIP, you need two protections in place: a <strong>pure term insurance plan</strong> (cover of at least 10–15× your annual income) and a <strong>comprehensive health insurance policy</strong>.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Beyond insurance, an <strong>Emergency Fund</strong> — typically 6× your monthly expenses parked in a liquid mutual fund — acts as your financial airbag. Our <strong>Insurance Fundamentals</strong> and <strong>Financial Planning Basics</strong> courses explain how to build this safety net before you focus on growth.
            </p>
            <Link href="/learning/courses/insurance-fundamentals" className="inline-flex items-center gap-1 text-sm text-[color:var(--color-brand-green)] font-medium hover:underline">
              Learn Insurance →
            </Link>
          </div>
          <div className="card-surface rounded-2xl p-7 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-lg">🧾</div>
            <h3 className="text-lg font-semibold text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
              Tax Efficiency &amp; Retirement
            </h3>
            <p className="text-sm text-white/60 leading-relaxed">
              Paying more tax than you legally owe is the most common wealth leak in India. <strong>Section 80C</strong> alone allows a ₹1.5 lakh deduction — that's up to ₹46,800 saved per year for someone in the 30% bracket. Instruments like <strong>ELSS</strong>, <strong>PPF</strong>, and <strong>NPS</strong> make tax planning a wealth-building strategy in itself.
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              Long-term, a <strong>Systematic Withdrawal Plan (SWP)</strong> from an equity fund can replace the need for a pension — delivering monthly income with lower tax incidence than a traditional FD.
            </p>
            <Link href="/learning/courses/tax-saving-investments" className="inline-flex items-center gap-1 text-sm text-[color:var(--color-brand-green)] font-medium hover:underline">
              Learn Tax Saving →
            </Link>
          </div>
        </div>
      </section>

      {/* EDITORIAL ARTICLE — INDIA CONTEXT */}
      <section className="relative mx-auto max-w-4xl px-5 sm:px-8 py-16 sm:py-20 border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-brand-green)] font-semibold">Editorial</div>
          <h2 className="mt-2 text-3xl sm:text-4xl text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
            Why financial literacy is India&apos;s biggest investment opportunity
          </h2>
        </div>
        <div className="space-y-5 text-sm text-white/65 leading-[1.9]">
          <p>
            India has one of the world&apos;s youngest and fastest-growing middle classes, yet financial literacy remains critically low. According to SEBI&apos;s own investor surveys, a majority of retail participants cannot correctly explain the difference between a <strong>debt fund</strong> and an <strong>equity fund</strong>, let alone compare expense ratios across Direct and Regular plans. This knowledge gap costs Indian households hundreds of thousands of crores in sub-optimal returns every year.
          </p>
          <p>
            The consequences are visible everywhere: people chase <em>last year&apos;s top-performing fund</em> (which statistically underperforms next year), invest in traditional endowment plans that return just 3–5% CAGR (barely beating inflation), leave substantial <strong>Section 80C deductions</strong> unclaimed, and — most expensively — stay entirely out of the market due to fear of loss, missing decades of compounding.
          </p>
          <p>
            Stockstrail Learning was built specifically for this gap. Every course is written for the Indian context: INR examples, SEBI regulations, AMFI-registered fund categories, NSE/BSE market structure, and Indian tax law (Section 80C, 80D, LTCG, STCG). If a lesson discusses a <strong>Systematic Investment Plan</strong>, the numbers are in rupees, the funds are from Indian AMCs, and the tax impact follows Indian law.
          </p>
          <p>
            More importantly, our courses are structured — not scattered. A beginner does not need 50 blog posts about different funds. They need a clear path: understand what a mutual fund is → learn how SIPs reduce timing risk → pick the right fund category for the goal → understand the tax implications → automate and let compounding do its work. That complete pathway exists here, free of charge, without registration.
          </p>
          <p>
            This is financial education designed to be used, not just read. Each module ends with a <strong>Knowledge Check</strong> quiz, a set of <strong>Key Takeaways</strong> you can reference later, and a curated list of related courses to follow. For personalised guidance beyond self-learning, the main Stockstrail platform connects you with an <strong>AMFI-registered, SEBI-certified advisor</strong> who can turn your knowledge into an actual portfolio.
          </p>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="relative mx-auto max-w-5xl px-5 sm:px-8 py-10 border-t border-white/5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: "✓", title: "SEBI-aware content", desc: "Aligned with SEBI investor education guidelines" },
            { icon: "⊘", title: "Zero ads or bias", desc: "No product pitches. No affiliate links." },
            { icon: "🔒", title: "No login required", desc: "Start learning instantly, no account needed" },
            { icon: "🇮🇳", title: "India-first", desc: "INR examples, Indian funds, Indian tax laws" },
          ].map((b, i) => (
            <div key={i} className="card-surface rounded-2xl p-5 flex flex-col gap-2">
              <div className="text-xl">{b.icon}</div>
              <h3 className="text-sm font-semibold text-white">{b.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{b.desc}</p>
            </div>
          ))}
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
        <div className="space-y-3">
          {[
            {
              q: "What is Stockstrail Learning, and who is it for?",
              a: "Stockstrail Learning is a dedicated, distraction-free educational platform designed for Indian retail investors, beginner savers, and intermediate wealth builders. It provides structured, SEBI-aware courses to help you master mutual funds, SIPs, insurance, retirement, and tax planning without jargon or product pitches."
            },
            {
              q: "Is this learning platform free, and do I need to create an account?",
              a: "Yes, Stockstrail Learning is 100% free and always will be. We believe financial literacy should be accessible to everyone. There are no paywalls, no login requirements, no ads, and no sign-ups. You can start reading any course instantly."
            },
            {
              q: "How do structured courses differ from scattered financial blogs?",
              a: "Most financial advice online is scattered across isolated articles or videos, making it hard to build a coherent system. Stockstrail Learning uses structured, progressive modules. Each course acts as a step-by-step pathway from basic definitions to advanced, goal-based execution — with quizzes and key takeaways at each stage."
            },
            {
              q: "Which course should I start with if I'm a complete beginner?",
              a: "Start with Financial Planning Basics to understand the hierarchy of needs — emergency fund, insurance, then investments. Then take the Mutual Funds course followed by SIP Mastery. This three-course sequence gives you a complete foundation for independent investing."
            },
            {
              q: "Do the courses cover Indian-specific regulations and tax laws?",
              a: "Yes, absolutely. Every lesson uses INR amounts, SEBI and AMFI terminology, Indian fund categories (ELSS, ULIP, NPS, PPF), and Indian tax law (Section 80C, 80D, LTCG, STCG). There are no generic global examples — this content is built specifically for Indian investors."
            },
            {
              q: "Who writes and curates the course content?",
              a: "Our courses are curated by financial professionals with years of advisory experience, aligned with SEBI investor education guidelines and AMFI-registered standards. All content is fact-checked and updated regularly to reflect the latest tax rules and SEBI regulations."
            },
            {
              q: "What is the difference between a Direct and Regular mutual fund plan?",
              a: "In a Regular plan, a distributor earns a commission from the AMC, which raises the expense ratio — typically by 0.5% to 1% annually. In a Direct plan, you invest without an intermediary, paying a lower expense ratio. Over 20+ years, this difference can amount to 10–20% of your final corpus. Our Mutual Funds course covers this in detail."
            },
            {
              q: "How does Stockstrail Learning connect to the main Stockstrail website?",
              a: "Stockstrail Learning serves as the educational subdomain of stockstrail.in. Once you build your knowledge foundation here, you can use the main website's tools — such as the free online Risk Profile Assessment, consultation booking, or direct advisory from an AMFI-registered, SEBI-certified advisor for personalised investment guidance."
            },
            {
              q: "Can I learn about insurance on this platform?",
              a: "Yes. Our Insurance Fundamentals course explains the difference between term insurance and endowment/ULIP plans, how to calculate the right cover (typically 10–15× annual income), and why you should never mix insurance and investment in a single product. It is one of the most important courses for new earners."
            },
            {
              q: "How is progress tracked across courses?",
              a: "Each course tracks your progress within a session. You can move through modules and lessons at your own pace using the sidebar navigation. Key Takeaways, the Knowledge Check quiz, and FAQ sections are accessible from the sidebar at any point during the course."
            },
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
