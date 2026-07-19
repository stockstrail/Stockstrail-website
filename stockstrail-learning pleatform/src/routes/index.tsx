import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, courses, coursesByCategory } from "@/lib/courses";
import { CourseCard, CategoryCard } from "@/components/learn/cards";
import { SearchBar } from "@/components/learn/search";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StocksTrail Learning — Master Investing & Personal Finance" },
      { name: "description", content: "Learn investing the right way. Structured courses on mutual funds, SIPs, insurance, tax and personal finance — free and distraction-free." },
      { property: "og:title", content: "StocksTrail Learning — Master Investing & Personal Finance" },
      { property: "og:description", content: "Learn investing the right way. Structured courses on mutual funds, SIPs, insurance, tax and personal finance." },
      { property: "og:url", content: "/" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = [...courses].sort((a, b) => b.popularity - a.popularity).slice(0, 6);
  const topCats = categories.slice(0, 8);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <span className="glow-blob top-[-80px] left-[-120px] h-[420px] w-[420px] animate-float" />
        <span className="glow-blob bottom-[-160px] right-[-120px] h-[520px] w-[520px] animate-float-slow" style={{ background: "rgba(0, 216, 115, 0.12)" }} />
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
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-normal leading-[1.05] tracking-tight text-white" style={{ fontFamily: "var(--font-display)" }}>
            Learn investing
            <br />
            <span className="gradient-text">the right way.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
            Master mutual funds, SIPs, insurance, stocks and personal finance through structured, distraction-free courses —
            built for Indian investors, from beginner to intermediate.
          </p>

          <div className="mx-auto mt-10 max-w-2xl">
            <SearchBar size="lg" />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-green)] px-6 py-3 text-sm font-semibold text-[color:var(--color-brand-bg)] hover:bg-white transition-colors"
            >
              Explore Courses
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
            <Link
              to="/categories"
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
                <div className="text-2xl sm:text-3xl font-semibold text-white" style={{ fontFamily: "var(--font-display)" }}>{s.k}</div>
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
            <h2 className="mt-2 text-3xl sm:text-4xl text-white" style={{ fontFamily: "var(--font-display)" }}>
              Start with the essentials
            </h2>
            <p className="mt-2 max-w-xl text-white/60 text-sm sm:text-base">
              Hand-picked courses that give you the strongest foundation, whether you're just starting or already investing.
            </p>
          </div>
          <Link to="/courses" className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-brand-green)] hover:underline">
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
            <h2 className="mt-2 text-3xl sm:text-4xl text-white" style={{ fontFamily: "var(--font-display)" }}>
              What do you want to learn today?
            </h2>
          </div>
          <Link to="/categories" className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-brand-green)] hover:underline">
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
          <h2 className="mt-2 text-3xl sm:text-4xl text-white" style={{ fontFamily: "var(--font-display)" }}>
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
              <div className="text-[color:var(--color-brand-green)] font-display text-2xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>{s.n}</div>
              <h3 className="mt-3 text-white text-lg font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-[color:var(--color-brand-border)] p-10 sm:p-16 text-center" style={{ background: "linear-gradient(135deg, rgba(0,255,151,0.08), rgba(0,125,66,0.02))" }}>
          <span className="glow-blob top-[-80px] right-[-80px] h-[300px] w-[300px]" />
          <h2 className="relative text-3xl sm:text-4xl text-white" style={{ fontFamily: "var(--font-display)" }}>
            Ready to invest with clarity?
          </h2>
          <p className="relative mt-3 text-white/70 max-w-xl mx-auto">
            Start with our most popular course and build a portfolio you actually understand.
          </p>
          <div className="relative mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/courses/$slug" params={{ slug: "mutual-funds" }} className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-green)] px-6 py-3 text-sm font-semibold text-[color:var(--color-brand-bg)] hover:bg-white transition-colors">
              Start with Mutual Funds
            </Link>
            <Link to="/courses" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--color-brand-border)] px-6 py-3 text-sm font-medium text-white hover:border-white/40 transition-colors">
              Browse all courses
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
