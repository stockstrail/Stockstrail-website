"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import type { Course, Category } from "@/lib/learning/supabase-db";
import { CourseSidebar } from "@/components/learn/course-sidebar";
import { BlockRenderer, FAQAccordion, Quiz } from "@/components/learn/lesson-blocks";
import { CourseCard, CourseThumbnail } from "@/components/learn/cards";

interface Props {
  course: Course;
  category: Category | null;
  related: Course[];
}

export function CoursePageClient({ course, category, related }: Props) {
  const cat = category;

  const allLessons = useMemo(
    () => course.modules.flatMap((m) => m.lessons.map((l) => ({ moduleSlug: m.slug, lessonSlug: l.slug, moduleTitle: m.title, lesson: l }))),
    [course]
  );

  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [drawer, setDrawer] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  // We do not load progress from localStorage so it always starts at 0% when loaded

  const activeEntry = activeSlug ? (allLessons.find((e) => e.lessonSlug === activeSlug) ?? null) : null;
  const currentIdx = activeSlug ? allLessons.findIndex((e) => e.lessonSlug === activeSlug) : -1;
  const prev = currentIdx > 0 ? allLessons[currentIdx - 1] : null;
  const next = currentIdx >= 0 && currentIdx < allLessons.length - 1 ? allLessons[currentIdx + 1] : null;

  const select = (_ms: string, ls: string) => {
    if (ls === "overview") {
      setActiveSlug(null);
      setDrawer(false);
      // Smooth scroll directly to the top of the course content area
      if (typeof window !== "undefined") {
        setTimeout(() => {
          const element = document.getElementById("course-content-area");
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
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
    
    // Smooth scroll directly to the top of the course content area
    if (typeof window !== "undefined") {
      setTimeout(() => {
        const element = document.getElementById("course-content-area");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  };

  const handleRestart = () => {
    setCompletedLessons([]);
    const first = allLessons[0]?.lessonSlug;
    if (first) {
      setActiveSlug(first);
    }
  };

  const handleStartResume = () => {
    const firstUncompleted = allLessons.find((l) => !completedLessons.includes(l.lessonSlug));
    const targetSlug = firstUncompleted?.lessonSlug ?? allLessons[0]?.lessonSlug;
    if (targetSlug) {
      setActiveSlug(targetSlug);
      // Smooth scroll to the top of the content area below the hero section
      if (typeof window !== "undefined") {
        setTimeout(() => {
          const element = document.getElementById("course-content-area");
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 50);
      }
    }
  };

  const scrollToSection = (id: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <>
      {/* Course hero */}
      <section className="relative overflow-hidden border-b border-[color:var(--color-brand-border)]">
        <span className="glow-blob top-[-100px] left-[-80px] h-[380px] w-[380px]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-10 pb-12">
          <nav aria-label="Breadcrumb" className="text-xs text-white/50">
            <Link href="/learning" className="hover:text-white">Home</Link>
            <span className="mx-1">/</span>
            <Link href="/learning/courses" className="hover:text-white">Courses</Link>
            {cat && <>
              <span className="mx-1">/</span>
              <Link href={`/learning/categories/${cat.slug}`} className="hover:text-white">{cat.name}</Link>
            </>}
            <span className="mx-1">/</span>
            <span className="text-white/80">{course.title}</span>
          </nav>

          <div className="mt-6 flex flex-col lg:flex-row items-center gap-10 justify-between">
            <div className="w-[340px] shrink-0 rounded-2xl overflow-hidden border border-[color:var(--color-brand-border)]">
              <CourseThumbnail course={course} className="aspect-[16/10]" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-wider">
                <span className="text-[color:var(--color-brand-green)]">{cat?.name}</span>
                <span className="text-white/30">•</span>
                <span className="text-white/60">{course.difficulty}</span>
                <span className="text-white/30">•</span>
                <span className="text-white/60">{course.minutes} min read</span>
                <span className="text-white/30">•</span>
                <span className="text-white/60">{course.modules.length} modules</span>
              </div>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-white leading-tight" style={{ fontFamily: "var(--font-product-sans)" }}>
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
          </div>
        </div>
      </section>

      {/* Mobile drawer trigger - Hamburger on left side */}
      <div className="lg:hidden sticky top-20 z-20 w-full bg-[color:var(--color-brand-bg)]/95 backdrop-blur border-b border-[color:var(--color-brand-border)] px-4 py-3 flex items-center justify-between shadow-sm">
        <button
          type="button"
          onClick={() => setDrawer(true)}
          className="inline-flex items-center gap-2 text-white/80 hover:text-white bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs font-semibold active:scale-95 transition-all"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[color:var(--color-brand-green)]">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
          Syllabus
        </button>
        <span className="text-xs text-white/60 font-medium truncate max-w-[200px]">
          {activeSlug === "takeaways" && "Key Takeaways"}
          {activeSlug === "faqs" && "Frequently Asked Questions"}
          {activeSlug === "quiz" && "Knowledge Check"}
          {activeSlug === null && "Course Overview"}
          {!["takeaways", "faqs", "quiz", null].includes(activeSlug) && activeEntry && activeEntry.lesson.title}
        </span>
      </div>

      {/* Body: sidebar + content */}
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-10 lg:flex gap-10">
        <div className="hidden lg:block w-[300px] shrink-0">
          <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 custom-scrollbar">
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

        {drawer && (
          <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={() => setDrawer(false)}>
            <div className="absolute left-0 top-0 h-full w-[92%] max-w-sm bg-[color:var(--color-brand-bg)] border-r border-[color:var(--color-brand-border)] p-5 overflow-y-auto custom-scrollbar" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-white/70 font-medium">Course modules</span>
                <button type="button" aria-label="Close" onClick={() => setDrawer(false)} className="w-8 h-8 rounded-full border border-white/10 text-white/80 flex items-center justify-center">×</button>
              </div>
              <CourseSidebar 
                course={course} 
                activeLessonSlug={activeSlug} 
                completedLessons={completedLessons}
                onSelect={select} 
                onScrollTo={(id) => {
                  setDrawer(false);
                  scrollToSection(id);
                }}
                onRestart={handleRestart}
              />
            </div>
          </div>
        )}

        <article id="course-content-area" className="flex-1 min-w-0 scroll-mt-32">
          {activeSlug === null && (
            <div className="space-y-12 animate-fade-up">
              {/* Overview Details */}
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl text-white font-semibold" style={{ fontFamily: "var(--font-product-sans)" }}>About this Course</h2>
                <div className="text-white/70 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>{course.description}</p>
                </div>
              </div>

              {/* Course Curriculum / Syllabus */}
              <section className="space-y-4">
                <h2 className="text-2xl sm:text-3xl text-white font-semibold" style={{ fontFamily: "var(--font-product-sans)" }}>Course Curriculum</h2>
                <div className="space-y-3">
                  {course.modules.map((m, mi) => (
                    <div key={m.slug} className="rounded-xl border border-white/5 bg-white/[0.015] p-5">
                      <div className="flex items-center gap-2 text-xs font-semibold text-[color:var(--color-brand-green)] uppercase tracking-wider">
                        <span>Module {mi + 1}</span>
                      </div>
                      <h3 className="mt-1 text-base font-semibold text-white">{m.title}</h3>
                      <ul className="mt-3 divide-y divide-white/5">
                        {m.lessons.map((l) => {
                          const isCompleted = completedLessons.includes(l.slug);
                          return (
                            <li key={l.slug} className="py-2.5 flex items-center justify-between text-sm text-white/85">
                              <span className="flex items-center gap-2.5 min-w-0">
                                {isCompleted ? (
                                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[color:var(--color-brand-green)] shrink-0">
                                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                ) : (
                                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                                )}
                                <span className="truncate">{l.title}</span>
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

              {/* Start CTA */}
              <div className="rounded-2xl border border-[color:var(--color-brand-green)]/20 bg-white/[0.02] p-8 text-center space-y-4">
                <h3 className="text-lg font-semibold text-white">Ready to begin your journey?</h3>
                <p className="text-sm text-white/60 max-w-md mx-auto">Learn at your own pace with interactive quizzes and structured, bite-sized lessons.</p>
                <button
                  type="button"
                  onClick={handleStartResume}
                  className="rounded-full bg-[color:var(--color-brand-green)] text-[color:var(--color-brand-bg)] font-semibold text-sm px-8 py-3 hover:bg-white hover:shadow-[0_4px_15px_rgba(0,255,151,0.25)] transition-all active:scale-95"
                >
                  {completedLessons.length > 0 ? "Resume Learning" : "Start Learning"}
                </button>
              </div>
            </div>
          )}

          {activeSlug === "takeaways" && (
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-2xl sm:text-3xl text-white font-semibold" style={{ fontFamily: "var(--font-product-sans)" }}>Key Takeaways</h2>
              <p className="text-white/60 text-sm">Here are the essential key concepts and summaries for {course.title}.</p>
              <ul className="grid gap-4 sm:grid-cols-2">
                {course.keyTakeaways.map((k, i) => (
                  <li key={i} className="rounded-xl border border-white/5 bg-white/[0.02] p-5 flex gap-3 text-sm text-white/80 leading-relaxed">
                    <span className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[color:var(--color-brand-green)]/20 text-[color:var(--color-brand-green)] flex items-center justify-center text-xs font-bold">✓</span>
                    {k}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeSlug === "faqs" && (
            <div className="space-y-6 animate-fade-up">
              <h2 className="text-2xl sm:text-3xl text-white font-semibold" style={{ fontFamily: "var(--font-product-sans)" }}>Frequently Asked Questions</h2>
              <p className="text-white/60 text-sm">Got questions about {course.title}? Find the answers here.</p>
              <FAQAccordion items={course.faqs} />
            </div>
          )}

          {activeSlug === "quiz" && (
            <div className="space-y-6 animate-fade-up">
              <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--color-brand-green)] font-semibold">Knowledge Check</div>
              <h2 className="text-2xl sm:text-3xl text-white font-semibold" style={{ fontFamily: "var(--font-product-sans)" }}>Test what you've learned</h2>
              <p className="text-white/60 text-sm">Review your understanding of {course.title} by answering the questions below.</p>
              <Quiz questions={course.quiz} />
            </div>
          )}

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

              {/* Prev / Next */}
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

              {/* Related */}
              {related.length > 0 && (
                <section className="mt-20">
                  <h2 className="text-2xl sm:text-3xl text-white mb-6" style={{ fontFamily: "var(--font-product-sans)" }}>Continue learning</h2>
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
