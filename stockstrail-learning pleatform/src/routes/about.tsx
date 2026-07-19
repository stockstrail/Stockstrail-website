import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — StocksTrail Learning" },
      { name: "description", content: "StocksTrail Learning is a free financial education hub — structured courses on investing and personal finance for Indian investors." },
      { property: "og:title", content: "About — StocksTrail Learning" },
      { property: "og:description", content: "A free financial education hub by StocksTrail." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="relative overflow-hidden">
      <span className="glow-blob top-[-80px] left-1/2 -translate-x-1/2 h-[420px] w-[520px]" />
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 lg:px-12 py-16">
        <nav aria-label="Breadcrumb" className="text-xs text-white/50">
          <Link to="/" className="hover:text-white">Home</Link> <span className="mx-1">/</span> <span className="text-white/80">About</span>
        </nav>
        <h1 className="mt-4 text-4xl sm:text-5xl text-white" style={{ fontFamily: "var(--font-display)" }}>
          Financial education, <span className="gradient-text">without the noise.</span>
        </h1>
        <div className="mt-8 space-y-6 text-white/75 leading-relaxed">
          <p>StocksTrail Learning is the education arm of StocksTrail — a financial advisory built to help Indians make smarter money decisions.</p>
          <p>Blogs are great for browsing, but they scatter knowledge. This platform is different: every topic is organised into a structured course, with modules, real-world examples, tables, callouts and quizzes.</p>
          <p>Everything is <strong className="text-white">free</strong>. No signup. No paywall. No dashboards. Just open a course and read.</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            { t: "India-first", d: "Every rule, tax and example is written for Indian investors." },
            { t: "Distraction-free", d: "No pop-ups, no upsells. Reading, done well." },
            { t: "Structured", d: "Modules and lessons instead of scattered blogs." },
            { t: "Trustworthy", d: "Written by the StocksTrail team — SEBI-aware content." },
          ].map((v) => (
            <div key={v.t} className="card-surface rounded-2xl p-5">
              <div className="text-white font-semibold">{v.t}</div>
              <p className="mt-1 text-sm text-white/60">{v.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/courses" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-brand-green)] px-6 py-3 text-sm font-semibold text-[color:var(--color-brand-bg)]">
            Explore Courses →
          </Link>
        </div>
      </div>
    </section>
  );
}
