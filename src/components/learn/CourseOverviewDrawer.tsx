"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import type { Course } from "@/lib/learning/supabase-db";
import { FAQAccordion } from "@/components/learn/lesson-blocks";
import { CourseThumbnail } from "@/components/learn/cards";
import { fetchFullCourseAction } from "@/app/learning/actions";

// Header height in the learning site = h-20 = 80px
const HEADER_HEIGHT = 80;

interface Props {
  course: Course | null;
  onClose: () => void;
}

export function CourseOverviewDrawer({ course, onClose }: Props) {
  const router = useRouter();
  const drawerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /**
   * We keep the panel mounted in the DOM at all times (when a course is ever
   * set). We use two separate pieces of state:
   *   - displayCourse: the content shown (never clears until after exit anim)
   *   - open: whether the panel is visually slid in
   */
  const [displayCourse, setDisplayCourse] = useState<Course | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [expandedModules, setExpandedModules] = useState<Record<number, boolean>>({ 0: true });
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync course prop to displayCourse content
  useEffect(() => {
    if (course) {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
      
      // If course is lightweight (contains dummy array slots for cards), fetch full details
      const hasFullDetails = course.modules && course.modules.length > 0 && course.modules[0]?.lessons && course.modules[0].lessons[0]?.title !== undefined;

      if (!hasFullDetails) {
        setDisplayCourse(course);
        setLoading(true);
        fetchFullCourseAction(course.slug).then((fullCourse) => {
          if (fullCourse) {
            // Verify the drawer is still displaying the same course
            setDisplayCourse((current) => {
              if (current && current.slug === course.slug) {
                return fullCourse;
              }
              return current;
            });
          }
          setLoading(false);
        });
      } else {
        setDisplayCourse(course);
        setLoading(false);
      }
      
      setExpandedModules({ 0: true });
    } else {
      setOpen(false);
      // Clean up course content only after it has fully slid out
      closeTimerRef.current = setTimeout(() => {
        setDisplayCourse(null);
        setLoading(false);
      }, 750);
    }

    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, [course]);

  // Trigger slide-in animation once content is mounted in DOM
  useEffect(() => {
    if (displayCourse) {
      // Force a brief delay to ensure DOM has rendered the initial translate-x-full state
      const timer = setTimeout(() => {
        setOpen(true);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [displayCourse]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = course ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [course]);

  // Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const handleClose = () => {
    onClose(); // parent sets course → null → our useEffect above animates out
  };

  const handleEnroll = () => {
    if (!displayCourse) return;
    const slug = displayCourse.slug;
    handleClose();
    router.push(`/learning/courses/${slug}?enroll=1`);
  };

  const toggleModule = (idx: number) => {
    setExpandedModules((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Nothing ever in the DOM until a course is first shown
  if (!displayCourse || !mounted) return null;

  const totalLessons = displayCourse.modules.reduce((n, m) => n + m.lessons.length, 0);

  return createPortal(
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .course-drawer-panel {
              width: 100vw !important;
            }
            @media (min-width: 768px) {
              .course-drawer-panel {
                width: 45vw !important;
              }
            }
          `,
        }}
      />

      {/* ── Backdrop ── */}
      <div
        onClick={handleClose}
        aria-hidden="true"
        style={{
          transition: "opacity 500ms ease-in-out"
        }}
        className={`
          fixed inset-0 z-[60]
          bg-black/40
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* ── Drawer panel ── */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${displayCourse.title} — Course Overview`}
        style={{
          top: `${HEADER_HEIGHT}px`,
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="fixed right-0 z-[70] bg-[color:var(--color-brand-bg)] border-l border-t border-[color:var(--color-brand-border)] shadow-[-24px_0_80px_rgba(0,0,0,0.55)] rounded-tl-2xl flex flex-col course-drawer-panel"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-[color:var(--color-brand-border)] shrink-0">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--color-brand-green)] font-semibold">
            Course Overview
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleEnroll}
              className="rounded-full bg-[color:var(--color-brand-green)] text-[color:var(--color-brand-bg)] font-semibold text-xs px-4 py-2 hover:bg-white transition-all active:scale-[0.98] flex items-center gap-1.5"
            >
              <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
              Start Learning
            </button>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all"
            >
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          {/* Thumbnail */}
          <div className="relative w-full shrink-0 overflow-hidden" style={{ aspectRatio: "16/7" }}>
            <CourseThumbnail course={displayCourse} className="absolute inset-0 w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-brand-bg)] via-transparent to-transparent" />
          </div>

          <div className="px-5 pb-10">
            {/* Meta badges */}
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-wider mt-1">
              <span className="text-[color:var(--color-brand-green)]">{displayCourse.category.replace(/-/g, " ")}</span>
              <span className="text-white/25">•</span>
              <span className="rounded-full border border-[color:var(--color-brand-border)] text-white/60 px-2.5 py-0.5">{displayCourse.difficulty}</span>
              <span className="rounded-full border border-[color:var(--color-brand-border)] text-white/60 px-2.5 py-0.5">{displayCourse.minutes} min read</span>
              <span className="rounded-full border border-[color:var(--color-brand-border)] text-white/60 px-2.5 py-0.5">
                {loading ? (
                  <span className="inline-block w-20 h-3 bg-white/10 rounded animate-pulse align-middle" />
                ) : (
                  `${displayCourse.modules.length} modules · ${totalLessons} lessons`
                )}
              </span>
            </div>

            {/* Title & description */}
            <h2
              className="mt-3 text-2xl text-white font-normal leading-tight"
              style={{ fontFamily: "var(--font-product-sans)" }}
            >
              {displayCourse.title}
            </h2>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">{displayCourse.tagline}</p>
            <p className="mt-3 text-sm text-white/50 leading-relaxed">{displayCourse.description}</p>

            {/* Feature tags */}
            <div className="mt-4 flex flex-wrap gap-2 text-[10px]">
              {displayCourse.hasImages && <FeatureBadge>📷 Illustrated</FeatureBadge>}
              {displayCourse.hasVideos && <FeatureBadge>🎬 Video</FeatureBadge>}
              {displayCourse.hasQuiz && <FeatureBadge>🏆 Quiz included</FeatureBadge>}
              <FeatureBadge>📖 Reading-based</FeatureBadge>
              <FeatureBadge>✅ Free forever</FeatureBadge>
            </div>

            {loading ? (
              <div className="space-y-6 pt-6">
                {/* Skeleton for What You'll Learn */}
                <div className="border-t border-white/5 pt-6 space-y-3">
                  <div className="h-3 bg-white/10 rounded w-28 animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-white/5 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-white/5 rounded w-5/6 animate-pulse"></div>
                    <div className="h-4 bg-white/5 rounded w-4/5 animate-pulse"></div>
                  </div>
                </div>

                {/* Skeleton for Modules */}
                <div className="border-t border-white/5 pt-6 space-y-3">
                  <div className="h-3 bg-white/10 rounded w-32 animate-pulse"></div>
                  <div className="space-y-2.5">
                    <div className="h-11 bg-white/5 rounded-xl animate-pulse"></div>
                    <div className="h-11 bg-white/5 rounded-xl animate-pulse"></div>
                    <div className="h-11 bg-white/5 rounded-xl animate-pulse"></div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="mt-6 border-t border-white/5" />

                {/* What You'll Learn */}
                {displayCourse.keyTakeaways.length > 0 && (
                  <section className="mt-6 space-y-3">
                    <SectionLabel>What You'll Learn</SectionLabel>
                    <ul className="grid gap-2.5">
                      {displayCourse.keyTakeaways.map((k, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-white/80 leading-relaxed">
                          <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-[color:var(--color-brand-green)]/15 text-[color:var(--color-brand-green)] flex items-center justify-center text-xs font-bold">✓</span>
                          <span>{k}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                <div className="mt-6 border-t border-white/5" />

                {/* Modules */}
                {displayCourse.modules.length > 0 && (
                  <section className="mt-6 space-y-3">
                    <SectionLabel>Course Modules</SectionLabel>
                    <div className="space-y-2">
                      {displayCourse.modules.map((mod, mi) => {
                        const isExpanded = expandedModules[mi] ?? false;
                        return (
                          <div key={mod.slug} className="rounded-xl border border-white/[0.07] bg-white/[0.018] overflow-hidden">
                            <button
                              type="button"
                              onClick={() => toggleModule(mi)}
                              className="w-full flex items-center gap-3 px-4 py-3 text-left group"
                            >
                              <span className="shrink-0 w-6 h-6 rounded-md text-[10px] font-bold bg-white/[0.06] text-white/70 group-hover:bg-[color:var(--color-brand-green)]/20 group-hover:text-[color:var(--color-brand-green)] flex items-center justify-center transition-colors">
                                {String(mi + 1).padStart(2, "0")}
                              </span>
                              <span className="flex-1 text-sm font-medium text-white truncate">{mod.title}</span>
                              <span className="shrink-0 text-[10px] text-white/40 mr-2">{mod.lessons.length} lessons</span>
                              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2"
                                className={`shrink-0 text-white/40 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}>
                                <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>
                            {isExpanded && (
                              <ul className="pb-2 px-4 space-y-0.5">
                                {mod.lessons.map((lesson) => (
                                  <li key={lesson.slug} className="flex items-center justify-between gap-2 py-2 text-xs text-white/65 border-t border-white/[0.04] first:border-0 hover:text-white group/item">
                                    <span className="flex items-center gap-2.5 min-w-0">
                                      <span className="text-[#00ff97] text-sm leading-none select-none shrink-0">•</span>
                                      <span className="truncate">{lesson.title}</span>
                                    </span>
                                    <span className="shrink-0 text-white/35">{lesson.minutes}m</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </section>
                )}

                <div className="mt-6 border-t border-white/5" />

                {/* Key Takeaways */}
                {displayCourse.keyTakeaways.length > 0 && (
                  <section className="mt-6 space-y-3">
                    <SectionLabel>Key Takeaways</SectionLabel>
                    <div className="rounded-2xl border border-[color:var(--color-brand-green)]/15 bg-[color:var(--color-brand-green)]/[0.03] p-4 space-y-3">
                      {displayCourse.keyTakeaways.map((k, i) => (
                        <p key={i} className="text-sm text-white/75 leading-relaxed flex items-start gap-2.5">
                          <span className="shrink-0 text-[color:var(--color-brand-green)] mt-0.5">→</span>
                          {k}
                        </p>
                      ))}
                    </div>
                  </section>
                )}

                {/* FAQs */}
                {displayCourse.faqs.length > 0 && (
                  <section className="mt-6 space-y-3">
                    <SectionLabel>Frequently Asked Questions</SectionLabel>
                    <FAQAccordion items={displayCourse.faqs} />
                  </section>
                )}
              </>
            )}
          </div>
        </div>

      </div>
    </>,
    document.body
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="text-[11px] uppercase tracking-[0.18em] text-white/45 font-semibold">{children}</div>;
}

function FeatureBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[color:var(--color-brand-border)] bg-white/[0.03] text-white/65 px-3 py-1">
      {children}
    </span>
  );
}
