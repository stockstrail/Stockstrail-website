import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q")?.trim().toLowerCase() ?? "";
  if (!q || q.length < 1) {
    return NextResponse.json({ results: [] });
  }

  const supabase = await createClient();

  // Search published courses
  const { data: courses } = await supabase
    .from("learning_courses")
    .select("slug, title, short_description")
    .eq("publish", true)
    .or(`title.ilike.%${q}%,short_description.ilike.%${q}%`)
    .order("display_order", { ascending: true })
    .limit(5);

  // Search published modules
  const { data: modules } = await supabase
    .from("learning_modules")
    .select("slug, title, summary, course_id, learning_courses!inner(slug, title, publish)")
    .eq("publish", true)
    .eq("learning_courses.publish", true)
    .or(`title.ilike.%${q}%,summary.ilike.%${q}%`)
    .limit(5);

  const results: {
    type: "course" | "module";
    courseSlug: string;
    courseTitle: string;
    title: string;
    hint?: string;
  }[] = [];

  for (const c of courses ?? []) {
    results.push({
      type: "course",
      courseSlug: c.slug,
      courseTitle: c.title,
      title: c.title,
      hint: c.short_description ?? undefined,
    });
  }

  for (const m of modules ?? []) {
    const course = (m as any).learning_courses;
    if (!course) continue;
    results.push({
      type: "module",
      courseSlug: course.slug,
      courseTitle: course.title,
      title: m.title,
      hint: `Module · ${course.title}`,
    });
  }

  // Deduplicate by courseSlug+title and cap at 8
  const seen = new Set<string>();
  const deduped = results.filter((r) => {
    const key = `${r.type}:${r.courseSlug}:${r.title}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 8);

  return NextResponse.json({ results: deduped });
}
