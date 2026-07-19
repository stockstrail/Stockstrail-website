import { useEffect, useState } from "react";
import type { Course } from "@/lib/courses";

interface Props {
  course: Course;
  activeLessonSlug: string | null;
  onSelect: (moduleSlug: string, lessonSlug: string) => void;
}

export function CourseSidebar({ course, activeLessonSlug, onSelect }: Props) {
  // Track which modules are collapsed
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  // Auto-expand the module containing active lesson
  useEffect(() => {
    if (!activeLessonSlug) return;
    const mod = course.modules.find((m) => m.lessons.some((l) => l.slug === activeLessonSlug));
    if (mod) setCollapsed((c) => ({ ...c, [mod.slug]: false }));
  }, [activeLessonSlug, course]);

  const totalLessons = course.modules.reduce((n, m) => n + m.lessons.length, 0);
  const activeIndex = (() => {
    let idx = 0;
    for (const m of course.modules) {
      for (const l of m.lessons) {
        if (l.slug === activeLessonSlug) return idx;
        idx++;
      }
    }
    return -1;
  })();
  const progress = activeIndex >= 0 ? ((activeIndex + 1) / totalLessons) * 100 : 0;

  return (
    <aside className="w-full">
      <div className="rounded-2xl border border-[color:var(--color-brand-border)] bg-white/[0.02] p-5">
        <div className="text-[11px] uppercase tracking-wider text-[color:var(--color-brand-green)] font-semibold">
          {course.category.replace(/-/g, " ")}
        </div>
        <h2 className="mt-2 text-lg font-semibold text-white leading-snug">{course.title}</h2>
        <div className="mt-4">
          <div className="flex items-center justify-between text-[11px] text-white/55">
            <span>Reading progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="mt-1.5 h-1.5 rounded-full bg-white/5 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[color:var(--color-brand-green)] to-[color:var(--color-brand-green-accent)] transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            const first = course.modules[0]?.lessons[0];
            if (first) onSelect(course.modules[0].slug, first.slug);
          }}
          className="mt-5 w-full rounded-full bg-[color:var(--color-brand-green)] text-[color:var(--color-brand-bg)] font-semibold text-sm py-3 hover:bg-white transition-colors"
        >
          {activeLessonSlug ? "Restart Course" : "Start Course"}
        </button>
      </div>

      <nav className="mt-5 space-y-2" aria-label="Course modules">
        {course.modules.map((m, mi) => {
          const isCollapsed = collapsed[m.slug] ?? false;
          return (
            <div key={m.slug} className="rounded-xl border border-[color:var(--color-brand-border)] bg-white/[0.015] overflow-hidden">
              <button
                type="button"
                onClick={() => setCollapsed((c) => ({ ...c, [m.slug]: !isCollapsed }))}
                className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
              >
                <span className="flex items-center gap-3 min-w-0">
                  <span className="shrink-0 w-6 h-6 rounded-md bg-[color:var(--color-brand-green)]/15 text-[color:var(--color-brand-green)] text-xs font-semibold flex items-center justify-center">
                    {String(mi + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-white truncate">{m.title}</span>
                </span>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" className={`text-white/50 transition-transform ${isCollapsed ? "" : "rotate-180"}`}>
                  <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {!isCollapsed && (
                <ul className="pb-2">
                  {m.lessons.map((l) => {
                    const active = l.slug === activeLessonSlug;
                    return (
                      <li key={l.slug}>
                        <button
                          type="button"
                          onClick={() => onSelect(m.slug, l.slug)}
                          className={`w-full text-left flex items-center justify-between gap-3 pl-[52px] pr-4 py-2 text-sm transition-colors ${
                            active ? "text-[color:var(--color-brand-green)] bg-[color:var(--color-brand-green)]/[0.08] border-l-2 border-[color:var(--color-brand-green)]" : "text-white/70 hover:text-white border-l-2 border-transparent"
                          }`}
                        >
                          <span className="truncate">{l.title}</span>
                          <span className="shrink-0 text-[11px] text-white/40">{l.minutes}m</span>
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
    </aside>
  );
}
