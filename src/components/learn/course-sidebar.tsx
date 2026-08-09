import { useEffect, useState } from "react";
import type { Course } from "@/lib/learning/courses";

interface Props {
  course: Course;
  activeLessonSlug: string | null;
  completedLessons: string[];
  onSelect: (moduleSlug: string, lessonSlug: string) => void;
  onScrollTo: (sectionId: string) => void;
  onRestart: () => void;
}

export function CourseSidebar({ course, activeLessonSlug, completedLessons, onSelect, onRestart }: Props) {
  // Track which modules are collapsed
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  // Auto-expand the module containing active lesson
  useEffect(() => {
    if (!activeLessonSlug) return;
    const mod = course.modules.find((m) => m.lessons.some((l) => l.slug === activeLessonSlug));
    if (mod) setCollapsed((c) => ({ ...c, [mod.slug]: false }));
  }, [activeLessonSlug, course]);

  const totalLessons = course.modules.reduce((n, m) => n + m.lessons.length, 0);
  const progress = totalLessons > 0 ? (completedLessons.length / totalLessons) * 100 : 0;

  return (
    <aside className="w-full space-y-5">
      {/* Course Info Card */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-5 backdrop-blur-md shadow-sm">
        <div className="text-[11px] uppercase tracking-wider text-[color:var(--color-brand-green)] font-semibold">
          {course.category.replace(/-/g, " ")}
        </div>
        <h2 className="mt-2 text-lg font-semibold text-white leading-snug">{course.title}</h2>
      </div>

      {/* Navigation */}
      <div className="space-y-2">
        <div className="text-[11px] uppercase tracking-wider text-white/40 font-semibold px-2">NAVIGATION</div>
        <div className="space-y-1">
          <button
            type="button"
            onClick={() => onSelect("", "overview")}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-left rounded-xl border transition-all ${
              activeLessonSlug === null
                ? "text-[color:var(--color-brand-green)] bg-[color:var(--color-brand-green)]/[0.08] font-semibold border-[color:var(--color-brand-green)]/30"
                : "text-white/75 hover:text-white hover:bg-white/[0.015] border-white/5 bg-white/[0.01]"
            }`}
          >
            <span className="text-sm">Course Overview</span>
          </button>

          {course.hasQuiz && (
            <button
              type="button"
              onClick={() => onSelect("", "quiz")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-left rounded-xl border transition-all ${
                activeLessonSlug === "quiz"
                  ? "text-[color:var(--color-brand-green)] bg-[color:var(--color-brand-green)]/[0.08] font-semibold border-[color:var(--color-brand-green)]/30"
                  : "text-white/75 hover:text-white hover:bg-white/[0.015] border-white/5 bg-white/[0.01]"
              }`}
            >
              <span className="text-sm">Knowledge Check</span>
            </button>
          )}
        </div>
      </div>

      {/* Modules List */}
      <div className="space-y-2">
        <div className="text-[11px] uppercase tracking-wider text-white/40 font-semibold px-2">COURSE MODULES</div>
        <nav className="space-y-2" aria-label="Course modules">
          {course.modules.map((m, mi) => {
            const isCollapsed = collapsed[m.slug] ?? false;
            
            // Check if active lesson belongs to this module
            const hasActiveLesson = m.lessons.some((l) => l.slug === activeLessonSlug);
            
            return (
              <div 
                key={m.slug} 
                className={`rounded-xl border transition-all duration-300 ${
                  hasActiveLesson 
                    ? "border-[color:var(--color-brand-green)]/30 bg-white/[0.025]" 
                    : "border-white/5 bg-white/[0.015] hover:border-white/10"
                } overflow-hidden`}
              >
                <button
                  type="button"
                  onClick={() => setCollapsed((c) => ({ ...c, [m.slug]: !isCollapsed }))}
                  className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left group"
                >
                  <span className="flex items-center gap-3 min-w-0">
                    <span className={`shrink-0 w-6 h-6 rounded-md text-xs font-semibold flex items-center justify-center transition-colors ${
                      hasActiveLesson 
                        ? "bg-[color:var(--color-brand-green)] text-[color:var(--color-brand-bg)]" 
                        : "bg-white/5 text-white/70 group-hover:text-white group-hover:bg-white/10"
                    }`}>
                      {String(mi + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium text-white truncate">{m.title}</span>
                      {m.summary && (
                        <span className="block text-[11px] text-white/45 leading-tight mt-0.5 line-clamp-2">{m.summary}</span>
                      )}
                    </span>
                  </span>
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" className={`text-white/50 transition-transform ${isCollapsed ? "" : "rotate-180"}`}>
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {!isCollapsed && (
                  <ul className="pb-2">
                    {m.lessons.map((l) => {
                      const isActive = l.slug === activeLessonSlug;
                      const isCompleted = completedLessons.includes(l.slug);
                      
                      return (
                        <li key={l.slug}>
                          <button
                            type="button"
                            onClick={() => onSelect(m.slug, l.slug)}
                            className={`w-full text-left flex items-center justify-between gap-3 pl-12 pr-4 py-2.5 text-sm transition-all border-l-2 ${
                              isActive 
                                ? "text-[color:var(--color-brand-green)] bg-[color:var(--color-brand-green)]/[0.08] border-[color:var(--color-brand-green)] font-medium" 
                                : "text-white/70 hover:text-white hover:bg-white/[0.01] border-transparent"
                            }`}
                          >
                            <span className="flex items-center gap-2 min-w-0">
                              {isCompleted ? (
                                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[color:var(--color-brand-green)] shrink-0">
                                  <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              ) : isActive ? (
                                <span className="relative flex h-2 w-2 shrink-0">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[color:var(--color-brand-green)] opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[color:var(--color-brand-green)]"></span>
                                </span>
                              ) : (
                                <span className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                              )}
                              <span className="truncate">{l.title}</span>
                            </span>
                            <span className="shrink-0 text-[10px] text-white/40">{l.minutes}m</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
