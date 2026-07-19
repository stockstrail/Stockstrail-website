"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { categories, courses } from "@/lib/learning/courses";
import { CourseCard } from "@/components/learn/cards";
import { SearchBar } from "@/components/learn/search";

type Sort = "popular" | "newest" | "shortest" | "beginner";
type Level = "all" | "Beginner" | "Intermediate" | "Advanced";

export default function CoursesPageClient() {
  const [sort, setSort] = useState<Sort>("popular");
  const [level, setLevel] = useState<Level>("all");
  const [cat, setCat] = useState<string>("all");
  const [maxTime, setMaxTime] = useState<number>(120);

  const filtered = useMemo(() => {
    let list = [...courses];
    if (level !== "all") list = list.filter((c) => c.difficulty === level);
    if (cat !== "all") list = list.filter((c) => c.category === cat);
    list = list.filter((c) => c.minutes <= maxTime);
    switch (sort) {
      case "popular": list.sort((a, b) => b.popularity - a.popularity); break;
      case "newest": list.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt)); break;
      case "shortest": list.sort((a, b) => a.minutes - b.minutes); break;
      case "beginner": list.sort((a, b) => (a.difficulty === "Beginner" ? -1 : 1)); break;
    }
    return list;
  }, [sort, level, cat, maxTime]);

  return (
    <>
      <section className="relative z-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <span className="glow-blob top-[-100px] right-[-100px] h-[420px] w-[420px]" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 pt-14 pb-8">
          <nav aria-label="Breadcrumb" className="text-xs text-white/50">
            <Link href="/learning" className="hover:text-white">Home</Link> <span className="mx-1">/</span> <span className="text-white/80">Courses</span>
          </nav>
          <h1 className="mt-4 text-4xl sm:text-5xl text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
            All Courses
          </h1>
          <p className="mt-3 max-w-2xl text-white/65">
            Every course is free, structured and India-first. Pick a topic — open a course — start reading. That's it.
          </p>
          <div className="mt-8 max-w-2xl relative z-30">
            <SearchBar size="lg" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pb-20">
        {/* Filters */}
        <div className="card-surface rounded-2xl p-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Filter label="Sort by" value={sort} onChange={(v) => setSort(v as Sort)} options={[
            { v: "popular", l: "Most popular" },
            { v: "newest", l: "Newest" },
            { v: "shortest", l: "Shortest read" },
            { v: "beginner", l: "Beginner friendly" },
          ]} />
          <Filter label="Difficulty" value={level} onChange={(v) => setLevel(v as Level)} options={[
            { v: "all", l: "All levels" },
            { v: "Beginner", l: "Beginner" },
            { v: "Intermediate", l: "Intermediate" },
            { v: "Advanced", l: "Advanced" },
          ]} />
          <Filter label="Category" value={cat} onChange={setCat} options={[{ v: "all", l: "All categories" }, ...categories.map((c) => ({ v: c.slug, l: c.name }))]} />
          <div>
            <label className="block text-[11px] uppercase tracking-wider text-white/55 font-semibold mb-1.5">Max reading time</label>
            <input type="range" min={15} max={120} step={5} value={maxTime} onChange={(e) => setMaxTime(Number(e.target.value))} className="w-full accent-[color:var(--color-brand-green)]" />
            <div className="text-xs text-white/60 mt-1">Up to {maxTime} minutes</div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between text-sm text-white/60">
          <span>{filtered.length} {filtered.length === 1 ? "course" : "courses"}</span>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-[color:var(--color-brand-border)] p-10 text-center text-white/60">
            No courses match those filters. Try relaxing the difficulty or category.
          </div>
        ) : (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => <CourseCard key={c.slug} course={c} />)}
          </div>
        )}
      </section>
    </>
  );
}

function Filter({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: { v: string; l: string }[] }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-wider text-white/55 font-semibold mb-1.5">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg bg-white/[0.04] border border-[color:var(--color-brand-border)] text-white text-sm px-3 py-2.5 focus:outline-none focus:border-[color:var(--color-brand-green)]/60"
      >
        {options.map((o) => <option key={o.v} value={o.v} className="bg-[color:var(--color-brand-bg)]">{o.l}</option>)}
      </select>
    </div>
  );
}
