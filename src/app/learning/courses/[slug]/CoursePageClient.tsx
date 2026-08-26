"use client";
import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import type { Course, Category } from "@/lib/learning/supabase-db";
import { CourseSidebar } from "@/components/learn/course-sidebar";
import { BlockRenderer, FAQAccordion, Quiz } from "@/components/learn/lesson-blocks";
import { CourseCardsGrid } from "@/components/learn/CourseCardsGrid";

interface Props {
  course: Course;
  category: Category | null;
  related: Course[];
  initialLessonSlug?: string | null;
}

export function CoursePageClient({ course, category, related, initialLessonSlug }: Props) {
  const cat = category;
  const searchParams = useSearchParams();

  const allLessons = useMemo(
    () => course.modules.flatMap((m) => m.lessons.map((l) => ({ moduleSlug: m.slug, lessonSlug: l.slug, moduleTitle: m.title, lesson: l }))),
    [course]
  );

  // If ?enroll=1 is present, auto-start the first lesson
  const enrollParam = searchParams.get("enroll") === "1";
  const firstLessonSlug = allLessons[0]?.lessonSlug ?? null;

  const [activeSlug, setActiveSlug] = useState<string | null>(
    initialLessonSlug || (enrollParam ? firstLessonSlug : null)
  );
  const [drawer, setDrawer] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  // If enroll param is present, immediately set to first lesson on mount
  useEffect(() => {
    if (enrollParam && firstLessonSlug && activeSlug === firstLessonSlug) {
      // Scroll to content area
      if (typeof window !== "undefined") {
        setTimeout(() => {
          const el = document.getElementById("course-content-area");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeEntry = activeSlug ? (allLessons.find((e) => e.lessonSlug === activeSlug) ?? null) : null;
  const currentIdx = activeSlug ? allLessons.findIndex((e) => e.lessonSlug === activeSlug) : -1;
  const prev = currentIdx > 0 ? allLessons[currentIdx - 1] : null;
  const next = currentIdx >= 0 && currentIdx < allLessons.length - 1 ? allLessons[currentIdx + 1] : null;

  const select = (_ms: string, ls: string) => {
    if (ls === "overview") {
      setActiveSlug(null);
      setDrawer(false);
      if (typeof window !== "undefined") {
        setTimeout(() => {
          const element = document.getElementById("course-content-area");
          if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
      return;
    }

    // Mark previous lesson as completed
    const isActiveLesson = activeSlug && !["takeaways", "faqs", "quiz"].includes(activeSlug);
    if (isActiveLesson && !completedLessons.includes(activeSlug!)) {
      setCompletedLessons((prevList) => [...prevList, activeSlug!]);
    }

    setActiveSlug(ls);
    setDrawer(false);

    if (typeof window !== "undefined") {
      setTimeout(() => {
        const element = document.getElementById("course-content-area");
        if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

  const handleRestart = () => {
    setCompletedLessons([]);
    const first = allLessons[0]?.lessonSlug;
    if (first) setActiveSlug(first);
  };

  const scrollToSection = (id: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const totalLessons = allLessons.length;
  const progress = totalLessons > 0 ? (completedLessons.length / totalLessons) * 100 : 0;

  return (
    <>
      {/* ── Compact top bar (breadcrumb + progress) ── */}
      <div className="sticky top-0 z-30 bg-[color:var(--color-brand-bg)]/95 backdrop-blur border-b border-[color:var(--color-brand-border)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 h-14 flex items-center justify-between gap-4">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/50 min-w-0">
            <Link href="/learning" className="hover:text-white shrink-0">Home</Link>
            <span>/</span>
            <Link href="/learning/courses" className="hover:text-white shrink-0">Courses</Link>
            {cat && (
              <>
                <span>/</span>
                <Link href={`/learning/categories/${cat.slug}`} className="hover:text-white shrink-0">{cat.name}</Link>
              </>
            )}
            <span>/</span>
            <span className="text-white/80 truncate">{course.title}</span>
          </nav>

          {/* Progress + Mobile menu */}
          <div className="flex items-center gap-3 shrink-0">

            {/* Mobile syllabus toggle */}
            <button
              type="button"
              onClick={() => setDrawer(true)}
              className="lg:hidden inline-flex items-center gap-1.5 text-white/70 hover:text-white bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs font-semibold active:scale-95 transition-all"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[color:var(--color-brand-green)]">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              </svg>
              Syllabus
            </button>
          </div>
        </div>
      </div>

      {/* ── Body: sidebar + content ── */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-10 lg:flex gap-10">
        {/* Desktop sidebar */}
        <div className="hidden lg:block shrink-0" style={{ width: "320px" }}>
          <div className="sticky top-16 max-h-[calc(100vh-80px)] overflow-y-auto pr-2 custom-scrollbar">
            <CourseSidebar
              course={course}
              activeLessonSlug={activeSlug}
              completedLessons={completedLessons}
              onSelect={select}
              onScrollTo={scrollToSection}
              onRestart={handleRestart}
            />
          </div>
        </div>

        {/* Mobile drawer */}
        {drawer && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={() => setDrawer(false)}>
            <div
              className="absolute left-0 top-0 h-full w-[92%] max-w-sm bg-[color:var(--color-brand-bg)] border-r border-[color:var(--color-brand-border)] p-5 overflow-y-auto custom-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-white/70 font-medium">Course syllabus</span>
                <button type="button" aria-label="Close" onClick={() => setDrawer(false)} className="w-8 h-8 rounded-full border border-white/10 text-white/80 flex items-center justify-center">×</button>
              </div>
              <CourseSidebar
                course={course}
                activeLessonSlug={activeSlug}
                completedLessons={completedLessons}
                onSelect={select}
                onScrollTo={(id) => { setDrawer(false); scrollToSection(id); }}
                onRestart={handleRestart}
              />
            </div>
          </div>
        )}

        {/* ── Main content area ── */}
        <article id="course-content-area" className="flex-1 min-w-0 scroll-mt-20">

          {/* OVERVIEW */}
          {activeSlug === null && (
            <div className="space-y-10 animate-fade-up">

              {/* Course header (compact — no big hero) */}
              <div className="rounded-2xl border border-[color:var(--color-brand-border)] bg-white/[0.015] p-6 sm:p-8 space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider">
                  <span className="text-[color:var(--color-brand-green)]">{cat?.name}</span>
                  <span className="text-white/25">•</span>
                  <span className="text-white/55">{course.difficulty}</span>
                  <span className="text-white/25">•</span>
                  <span className="text-white/55">{course.minutes} min read</span>
                  <span className="text-white/25">•</span>
                  <span className="text-white/55">{course.modules.length} modules</span>
                </div>
                <h1 className="text-3xl sm:text-4xl text-white leading-tight" style={{ fontFamily: "var(--font-product-sans)" }}>
                  {course.title}
                </h1>
                <p className="text-white/65 text-sm sm:text-base leading-relaxed max-w-2xl">{course.tagline}</p>
                <p className="text-white/45 text-sm leading-relaxed max-w-2xl">{course.description}</p>

              </div>

              {/* What You'll Learn */}
              {course.keyTakeaways.length > 0 && (
                <section className="space-y-4">
                  <SectionHeading>What You'll Learn</SectionHeading>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {course.keyTakeaways.map((k, i) => (
                      <div key={i} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.015] p-4 text-sm text-white/80 leading-relaxed">
                        <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[color:var(--color-brand-green)]/15 text-[color:var(--color-brand-green)] flex items-center justify-center text-xs font-bold">✓</span>
                        {k}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Course Curriculum */}
              <section className="space-y-4">
                <SectionHeading>Course Curriculum</SectionHeading>
                <div className="space-y-3">
                  {course.modules.map((m, mi) => (
                    <div key={m.slug} className="rounded-xl border border-white/5 bg-white/[0.015] p-5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[color:var(--color-brand-green)] uppercase tracking-wider">
                        <span>Module {mi + 1}</span>
                      </div>
                      <h3 className="mt-1 text-base font-semibold text-white">{m.title}</h3>
                      {m.summary && (
                        <p className="mt-1 text-sm text-white/55 leading-relaxed">{m.summary}</p>
                      )}
                      <ul className="mt-3 divide-y divide-white/5">
                        {m.lessons.map((l) => {
                          const isCompleted = completedLessons.includes(l.slug);
                          return (
                            <li
                              key={l.slug}
                              className="py-2.5 flex items-center justify-between text-sm text-white/85 cursor-pointer hover:text-white group"
                              onClick={() => select(m.slug, l.slug)}
                            >
                              <span className="flex items-center gap-2.5 min-w-0">
                                {isCompleted ? (
                                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[color:var(--color-brand-green)] shrink-0">
                                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                ) : (
                                  <span className="text-[#00ff97] text-base leading-none select-none shrink-0">•</span>
                                )}
                                <span className="truncate group-hover:text-[color:var(--color-brand-green)] transition-colors">{l.title}</span>
                              </span>
                              <span className="shrink-0 text-xs text-white/40">{l.minutes} mins</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Key Takeaways */}
              {course.keyTakeaways.length > 0 && (
                <section className="space-y-4">
                  <SectionHeading>Key Takeaways</SectionHeading>
                  <div className="rounded-2xl border border-[color:var(--color-brand-green)]/15 bg-[color:var(--color-brand-green)]/[0.025] p-6 space-y-3">
                    {course.keyTakeaways.map((k, i) => (
                      <p key={i} className="text-sm text-white/75 leading-relaxed flex items-start gap-3">
                        <span className="shrink-0 text-[color:var(--color-brand-green)] font-bold mt-0.5">→</span>
                        {k}
                      </p>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQs */}
              {course.faqs.length > 0 && (
                <section className="space-y-4">
                  <SectionHeading>Frequently Asked Questions</SectionHeading>
                  <FAQAccordion items={course.faqs} />
                </section>
              )}
            </div>
          )}



          {/* QUIZ tab */}
          {activeSlug === "quiz" && (
            <div className="space-y-6 animate-fade-up">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-brand-green)] font-semibold">Knowledge Check</div>
              <h2 className="text-2xl sm:text-3xl text-white font-semibold" style={{ fontFamily: "var(--font-product-sans)" }}>Test what you've learned</h2>
              <p className="text-white/60 text-sm">Review your understanding of {course.title} by answering the questions below.</p>
              <Quiz questions={course.quiz} />
            </div>
          )}

          {/* LESSON view */}
          {!["takeaways", "faqs", "quiz", null].includes(activeSlug) && activeEntry && (
            <>
              <header id="lesson-top" className="mb-6 animate-fade-up scroll-mt-32">
                <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-brand-green)] font-semibold">
                  Module · {activeEntry.moduleTitle}
                </div>
                <h2 className="mt-2 text-3xl sm:text-4xl text-white leading-tight" style={{ fontFamily: "var(--font-product-sans)" }}>
                  {activeEntry.lesson.title}
                </h2>
                <div className="mt-2 text-xs text-white/50">{activeEntry.lesson.minutes} min read</div>
              </header>
              <div className="prose-learn">
                {activeEntry.lesson.blocks.map((b, i) => <BlockRenderer key={i} block={b} />)}
              </div>

              {/* Prev / Next navigation */}
              <div className="mt-12 grid gap-3 sm:grid-cols-2">
                {prev ? (
                  <button type="button" onClick={() => select(prev.moduleSlug, prev.lessonSlug)} className="card-surface rounded-xl p-4 text-left hover:border-[color:var(--color-brand-green)]/50 transition-colors">
                    <div className="text-[11px] uppercase tracking-wider text-white/55">← Previous</div>
                    <div className="mt-1 text-white font-medium truncate">{prev.lesson.title}</div>
                  </button>
                ) : (
                  <button type="button" onClick={() => select("", "overview")} className="card-surface rounded-xl p-4 text-left hover:border-[color:var(--color-brand-green)]/50 transition-colors">
                    <div className="text-[11px] uppercase tracking-wider text-white/55">← Overview</div>
                    <div className="mt-1 text-white font-medium truncate">Return to Course Overview</div>
                  </button>
                )}
                {next ? (
                  <button type="button" onClick={() => select(next.moduleSlug, next.lessonSlug)} className="card-surface rounded-xl p-4 text-right hover:border-[color:var(--color-brand-green)]/50 transition-colors sm:ml-auto sm:col-start-2 w-full">
                    <div className="text-[11px] uppercase tracking-wider text-[color:var(--color-brand-green)]">Next →</div>
                    <div className="mt-1 text-white font-medium truncate">{next.lesson.title}</div>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      if (activeSlug && !completedLessons.includes(activeSlug)) {
                        setCompletedLessons((prevList) => [...prevList, activeSlug]);
                      }
                      setActiveSlug(null);
                    }}
                    className="card-surface rounded-xl p-4 text-right hover:border-[color:var(--color-brand-green)]/50 transition-colors sm:col-start-2 w-full text-[color:var(--color-brand-green)]"
                  >
                    <div className="text-[11px] uppercase tracking-wider text-[color:var(--color-brand-green)]">Finish Course ✓</div>
                    <div className="mt-1 text-white font-medium">Mark final lesson read & return to Overview</div>
                  </button>
                )}
              </div>

              {/* Related courses */}
              {related.length > 0 && (
                <section className="mt-20">
                  <h2 className="text-2xl sm:text-3xl text-white mb-6" style={{ fontFamily: "var(--font-product-sans)" }}>Continue learning</h2>
                  <CourseCardsGrid courses={related} />
                </section>
              )}
            </>
          )}
        </article>
      </section>
    </>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl sm:text-2xl text-white font-semibold" style={{ fontFamily: "var(--font-product-sans)" }}>
      {children}
    </h2>
  );
}
