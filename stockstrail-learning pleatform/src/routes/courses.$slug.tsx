import { useMemo, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getCourseBySlug, getRelatedCourses, getCategoryBySlug } from "@/lib/courses";
import type { Course } from "@/lib/courses";
import { CourseSidebar } from "@/components/learn/course-sidebar";
import { BlockRenderer, FAQAccordion, Quiz } from "@/components/learn/lesson-blocks";
import { CourseCard, CourseThumbnail } from "@/components/learn/cards";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }): { course: Course } => {
    const course = getCourseBySlug(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Course not found — StocksTrail Learning" }, { name: "robots", content: "noindex" }] };
    }
    const c = loaderData.course;
    return {
      meta: [
        { title: `${c.title} — StocksTrail Learning` },
        { name: "description", content: c.description },
        { property: "og:title", content: c.title },
        { property: "og:description", content: c.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/courses/${params.slug}` },
        { name: "twitter:title", content: c.title },
        { name: "twitter:description", content: c.description },
      ],
      links: [{ rel: "canonical", href: `/courses/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            name: c.title,
            description: c.description,
            provider: { "@type": "Organization", name: "StocksTrail Learning", sameAs: "https://stockstrail.in" },
            educationalLevel: c.difficulty,
            timeRequired: `PT${c.minutes}M`,
            hasCourseInstance: {
              "@type": "CourseInstance",
              courseMode: "online",
              courseWorkload: `PT${c.minutes}M`,
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: c.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  component: CoursePage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-3xl text-white" style={{ fontFamily: "var(--font-display)" }}>Course not found</h1>
      <p className="mt-2 text-white/60">Try browsing all courses.</p>
      <Link to="/courses" className="mt-6 inline-flex rounded-full bg-[color:var(--color-brand-green)] px-5 py-2.5 text-sm font-semibold text-[color:var(--color-brand-bg)]">Browse courses</Link>
    </div>
  ),
});

function CoursePage() {
  const { course } = Route.useLoaderData() as { course: Course };
  const cat = getCategoryBySlug(course.category);
  const related = getRelatedCourses(course);

  const allLessons = useMemo(
    () => course.modules.flatMap((m) => m.lessons.map((l) => ({ moduleSlug: m.slug, lessonSlug: l.slug, moduleTitle: m.title, lesson: l }))),
    [course]
  );

  const [activeSlug, setActiveSlug] = useState<string>(allLessons[0]?.lessonSlug ?? "");
  const [drawer, setDrawer] = useState(false);

  const activeEntry = allLessons.find((e) => e.lessonSlug === activeSlug) ?? allLessons[0];
  const currentIdx = allLessons.findIndex((e) => e.lessonSlug === activeSlug);
  const prev = currentIdx > 0 ? allLessons[currentIdx - 1] : null;
  const next = currentIdx < allLessons.length - 1 ? allLessons[currentIdx + 1] : null;

  const select = (_ms: string, ls: string) => {
    setActiveSlug(ls);
    setDrawer(false);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Course hero */}
      <section className="relative overflow-hidden border-b border-[color:var(--color-brand-border)]">
        <span className="glow-blob top-[-100px] left-[-80px] h-[380px] w-[380px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-10 pb-12">
          <nav aria-label="Breadcrumb" className="text-xs text-white/50">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-1">/</span>
            <Link to="/courses" className="hover:text-white">Courses</Link>
            {cat && <>
              <span className="mx-1">/</span>
              <Link to="/categories/$slug" params={{ slug: cat.slug }} className="hover:text-white">{cat.name}</Link>
            </>}
            <span className="mx-1">/</span>
            <span className="text-white/80">{course.title}</span>
          </nav>

          <div className="mt-6 grid lg:grid-cols-[1fr,360px] gap-10 items-start">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider">
                <span className="text-[color:var(--color-brand-green)]">{cat?.name}</span>
                <span className="text-white/30">•</span>
                <span className="text-white/60">{course.difficulty}</span>
                <span className="text-white/30">•</span>
                <span className="text-white/60">{course.minutes} min read</span>
                <span className="text-white/30">•</span>
                <span className="text-white/60">{course.modules.length} modules</span>
              </div>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                {course.title}
              </h1>
              <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">{course.tagline}</p>
              <p className="mt-4 text-white/55 text-sm max-w-2xl">{course.description}</p>
              <div className="mt-6 flex flex-wrap gap-2 text-[11px]">
                {course.hasImages && <Tag>Illustrated</Tag>}
                {course.hasVideos && <Tag>Video</Tag>}
                {course.hasQuiz && <Tag>Quiz</Tag>}
                <Tag>Reading-based</Tag>
                <Tag>Updated {new Date(course.updatedAt).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}</Tag>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-[color:var(--color-brand-border)]">
              <CourseThumbnail course={course} className="aspect-[16/10]" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile drawer trigger */}
      <button
        type="button"
        onClick={() => setDrawer(true)}
        className="lg:hidden sticky top-16 z-20 w-full bg-[color:var(--color-brand-bg)]/95 backdrop-blur border-b border-[color:var(--color-brand-border)] px-5 py-3 text-left text-sm text-white/80 flex items-center justify-between"
      >
        <span className="truncate"><span className="text-white/50">Module:</span> {activeEntry?.moduleTitle}</span>
        <span className="inline-flex items-center gap-1 text-[color:var(--color-brand-green)] text-xs font-semibold">Modules
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" /></svg>
        </span>
      </button>

      {/* Body: sidebar + content */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-10 grid lg:grid-cols-[300px,1fr] gap-10">
        <div className="hidden lg:block">
          <div className="sticky top-24">
            <CourseSidebar course={course} activeLessonSlug={activeSlug} onSelect={select} />
          </div>
        </div>

        {drawer && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={() => setDrawer(false)}>
            <div className="absolute right-0 top-0 h-full w-[92%] max-w-sm bg-[color:var(--color-brand-bg)] border-l border-[color:var(--color-brand-border)] p-5 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-white/70 font-medium">Course modules</span>
                <button type="button" aria-label="Close" onClick={() => setDrawer(false)} className="w-9 h-9 rounded-full border border-[color:var(--color-brand-border)] text-white/80 flex items-center justify-center">×</button>
              </div>
              <CourseSidebar course={course} activeLessonSlug={activeSlug} onSelect={select} />
            </div>
          </div>
        )}

        <article className="min-w-0">
          {activeEntry && (
            <>
              <header className="mb-6 animate-fade-up">
                <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-brand-green)] font-semibold">
                  Module · {activeEntry.moduleTitle}
                </div>
                <h2 className="mt-2 text-3xl sm:text-4xl text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                  {activeEntry.lesson.title}
                </h2>
                <div className="mt-2 text-xs text-white/50">{activeEntry.lesson.minutes} min read</div>
              </header>
              <div className="prose-learn">
                {activeEntry.lesson.blocks.map((b, i) => <BlockRenderer key={i} block={b} />)}
              </div>

              {/* Prev / Next */}
              <div className="mt-12 grid gap-3 sm:grid-cols-2">
                {prev ? (
                  <button type="button" onClick={() => select(prev.moduleSlug, prev.lessonSlug)} className="card-surface rounded-xl p-4 text-left hover:border-[color:var(--color-brand-green)]/50 transition-colors">
                    <div className="text-[11px] uppercase tracking-wider text-white/50">← Previous</div>
                    <div className="mt-1 text-white font-medium truncate">{prev.lesson.title}</div>
                  </button>
                ) : <div />}
                {next ? (
                  <button type="button" onClick={() => select(next.moduleSlug, next.lessonSlug)} className="card-surface rounded-xl p-4 text-right hover:border-[color:var(--color-brand-green)]/50 transition-colors sm:ml-auto sm:col-start-2 w-full">
                    <div className="text-[11px] uppercase tracking-wider text-[color:var(--color-brand-green)]">Next →</div>
                    <div className="mt-1 text-white font-medium truncate">{next.lesson.title}</div>
                  </button>
                ) : (
                  <div className="card-surface rounded-xl p-4 text-right sm:col-start-2">
                    <div className="text-[11px] uppercase tracking-wider text-[color:var(--color-brand-green)]">You've reached the end</div>
                    <div className="mt-1 text-white font-medium">Try the quiz below</div>
                  </div>
                )}
              </div>

              {/* Key takeaways */}
              <section className="mt-16">
                <h2 className="text-2xl sm:text-3xl text-white" style={{ fontFamily: "var(--font-display)" }}>Key Takeaways</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {course.keyTakeaways.map((k, i) => (
                    <li key={i} className="rounded-xl border border-[color:var(--color-brand-border)] bg-white/[0.02] p-4 flex gap-3 text-sm text-white/80">
                      <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[color:var(--color-brand-green)]/20 text-[color:var(--color-brand-green)] flex items-center justify-center text-[11px] font-bold">✓</span>
                      {k}
                    </li>
                  ))}
                </ul>
              </section>

              {/* FAQs */}
              <section className="mt-16">
                <h2 className="text-2xl sm:text-3xl text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>FAQs</h2>
                <FAQAccordion items={course.faqs} />
              </section>

              {/* Quiz */}
              {course.hasQuiz && (
                <section className="mt-16">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-brand-green)] font-semibold">Knowledge Check</div>
                  <h2 className="mt-2 text-2xl sm:text-3xl text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>Test what you've learned</h2>
                  <Quiz questions={course.quiz} />
                </section>
              )}

              {/* Related */}
              {related.length > 0 && (
                <section className="mt-20">
                  <h2 className="text-2xl sm:text-3xl text-white mb-6" style={{ fontFamily: "var(--font-display)" }}>Continue learning</h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {related.map((r) => <CourseCard key={r.slug} course={r} />)}
                  </div>
                </section>
              )}
            </>
          )}
        </article>
      </section>
    </>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-[color:var(--color-brand-border)] bg-white/[0.03] px-3 py-1 text-white/70">{children}</span>;
}
