"use client";
import { useState } from "react";
import type { Course } from "@/lib/learning/supabase-db";
import { CourseOverviewDrawer } from "@/components/learn/CourseOverviewDrawer";

/** A single course card that opens the overview drawer on click */
function DrawerCourseCard({ course, onOpen }: { course: Course; onOpen: (c: Course) => void }) {
  const [c1] = course.thumbnailAccent;
  const imageSrc = course.coverImage;

  return (
    <button
      type="button"
      onClick={() => onOpen(course)}
      className="group card-surface rounded-2xl overflow-hidden flex flex-col transition-all duration-300 
                 hover:border-[color:var(--color-brand-green)]/50 hover:-translate-y-1 
                 hover:shadow-[0_20px_60px_-20px_rgba(0,255,151,0.25)] text-left w-full"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#001717] flex items-center justify-center">
        {imageSrc ? (
          <img src={imageSrc} alt={course.title} className="absolute inset-0 w-full h-full object-contain" />
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(120% 120% at 0% 0%, ${c1}55 0%, transparent 50%), linear-gradient(135deg, #002424 0%, #001010 100%)`,
              }}
            />
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0, transparent 40%)" }} />
            <span className="relative text-5xl font-bold text-white/20">
              {course.title.slice(0, 2).toUpperCase()}
            </span>
          </>
        )}
        {/* Difficulty badge */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-white/90 bg-black/30 backdrop-blur px-2 py-0.5 rounded-full border border-white/10">
            {course.difficulty}
          </span>
        </div>
        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-[color:var(--color-brand-green)]/0 group-hover:bg-[color:var(--color-brand-green)]/[0.04] transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
            Preview Course
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-[color:var(--color-brand-green)] font-semibold">
          <span>{course.category.replace(/-/g, " ")}</span>
          <span className="text-white/30">•</span>
          <span className="text-white/60">{course.minutes} min</span>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-white leading-snug group-hover:text-[color:var(--color-brand-green)] transition-colors">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-white/65 line-clamp-2">{course.tagline}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-[11px] text-white/60">
          <span className="rounded-full bg-white/5 border border-[color:var(--color-brand-border)] px-2 py-0.5">
            {course.modules.length} modules · {course.modules.reduce((n, m) => n + (m?.lessons?.length || 0), 0)} lessons
          </span>
          {course.hasImages && <span className="rounded-full bg-white/5 border border-[color:var(--color-brand-border)] px-2 py-0.5">Illustrated</span>}
          {course.hasQuiz && <span className="rounded-full bg-white/5 border border-[color:var(--color-brand-border)] px-2 py-0.5">Quiz</span>}
        </div>
        <div className="mt-5 pt-4 border-t border-[color:var(--color-brand-border)] flex items-center justify-between">
          <span className="text-xs text-white/50">
            Updated {new Date(course.updatedAt).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-brand-green)]">
            View details
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </button>
  );
}

/** Drop-in replacement for a grid of CourseCards — manages the overview drawer */
export function CourseCardsGrid({ courses, className = "" }: { courses: Course[]; className?: string }) {
  const [drawerCourse, setDrawerCourse] = useState<Course | null>(null);

  return (
    <>
      <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
        {courses.map((c) => (
          <DrawerCourseCard key={c.slug} course={c} onOpen={setDrawerCourse} />
        ))}
      </div>
      <CourseOverviewDrawer
        course={drawerCourse}
        onClose={() => setDrawerCourse(null)}
      />
    </>
  );
}
