import Link from "next/link";
import type { Course, Category } from "@/lib/learning/courses";

export function CourseThumbnail({ course, className = "" }: { course: Course; className?: string }) {
  const [c1, c2] = course.thumbnailAccent;
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: `radial-gradient(120% 120% at 0% 0%, ${c1}55 0%, transparent 50%), linear-gradient(135deg, ${c2} 0%, #002424 100%)` }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.08) 0, transparent 40%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0, transparent 40%)" }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className="font-display text-6xl sm:text-7xl font-bold tracking-tight"
          style={{ background: `linear-gradient(135deg, ${c1}, #ffffff40)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: "var(--font-product-sans)" }}
        >
          {course.thumbnailGlyph}
        </span>
      </div>
      <div className="absolute top-3 left-3 flex gap-1.5">
        <span className="text-[10px] font-semibold uppercase tracking-wider text-white/90 bg-black/30 backdrop-blur px-2 py-0.5 rounded-full border border-white/10">
          {course.difficulty}
        </span>
      </div>
    </div>
  );
}

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/learning/courses/${course.slug}`}
      className="group card-surface rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-[color:var(--color-brand-green)]/50 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,255,151,0.25)]"
    >
      <CourseThumbnail course={course} className="aspect-[16/9]" />
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
          <span className="rounded-full bg-white/5 border border-[color:var(--color-brand-border)] px-2 py-0.5">{course.modules.length} modules</span>
          {course.hasImages && <span className="rounded-full bg-white/5 border border-[color:var(--color-brand-border)] px-2 py-0.5">Illustrated</span>}
          {course.hasQuiz && <span className="rounded-full bg-white/5 border border-[color:var(--color-brand-border)] px-2 py-0.5">Quiz</span>}
          {course.hasVideos && <span className="rounded-full bg-white/5 border border-[color:var(--color-brand-border)] px-2 py-0.5">Videos</span>}
        </div>
        <div className="mt-5 pt-4 border-t border-[color:var(--color-brand-border)] flex items-center justify-between">
          <span className="text-xs text-white/50">Updated {new Date(course.updatedAt).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}</span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-brand-green)]">
            Start learning
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export function CategoryCard({ category, count }: { category: Category; count: number }) {
  return (
    <Link
      href={`/learning/categories/${category.slug}`}
      className="group relative card-surface rounded-2xl p-5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-brand-green)]/50"
    >
      <div className={`pointer-events-none absolute -top-14 -right-10 h-40 w-40 rounded-full bg-gradient-to-br ${category.accent} blur-2xl opacity-70 group-hover:opacity-100 transition-opacity`} />
      <div className="relative">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-[color:var(--color-brand-border)] text-[color:var(--color-brand-green)] font-display font-bold text-sm tracking-wider">
          {category.icon}
        </div>
        <h3 className="mt-4 text-white font-semibold">{category.name}</h3>
        <p className="mt-1 text-sm text-white/60 line-clamp-2">{category.description}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-white/55">
          <span>{count} {count === 1 ? "course" : "courses"}</span>
          <span className="inline-flex items-center gap-1 text-[color:var(--color-brand-green)]">
            Explore
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
