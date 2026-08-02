import { cache } from "react";
import { createClient } from "@/lib/supabase/server";

import type { Course, Category, FAQ, QuizQuestion } from "@/lib/learning/courses";
export type { Course, Category, FAQ, QuizQuestion };

export async function getCategories(): Promise<Category[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("learning_categories")
    .select("*")
    .eq("publish", true)
    .order("display_order", { ascending: true });

  return (data ?? []).map((cat) => ({
    slug: cat.slug,
    name: cat.name,
    description: cat.description || cat.short_description || "",
    icon: cat.icon || "",
    accent: "from-emerald-400/40 to-emerald-700/10",
    thumbnail: cat.thumbnail || undefined,
  }));
}

export const getCategoryBySlug = cache(async (slug: string): Promise<Category | null> => {
  const supabase = await createClient();
  const { data } = await supabase
    .from("learning_categories")
    .select("*")
    .eq("slug", slug)
    .eq("publish", true)
    .single();

  if (!data) return null;

  return {
    slug: data.slug,
    name: data.name,
    description: data.description || data.short_description || "",
    icon: data.icon || "",
    accent: "from-emerald-400/40 to-emerald-700/10",
    thumbnail: data.thumbnail || undefined,
    coverImage: data.cover_image || undefined,
    ogImage: data.og_image || undefined,
  };
});

async function fetchModulesAndLessonsMapping(supabase: any): Promise<Record<string, any[]>> {
  const [{ data: dbModules }, { data: dbContents }] = await Promise.all([
    supabase
      .from("learning_modules")
      .select("id, course_id, slug, title")
      .eq("publish", true),
    supabase
      .from("learning_module_content")
      .select("module_id, markdown_content")
  ]);

  const contentByModuleId: Record<string, string> = {};
  (dbContents ?? []).forEach((c: any) => {
    contentByModuleId[c.module_id] = c.markdown_content ?? "";
  });

  const courseModulesMap: Record<string, any[]> = {};
  (dbModules ?? []).forEach((m: any) => {
    if (!m.course_id) return;
    if (!courseModulesMap[m.course_id]) {
      courseModulesMap[m.course_id] = [];
    }

    let lessonsCount = 0;
    const rawContent = contentByModuleId[m.id] || "";
    try {
      const parsed = JSON.parse(rawContent);
      if (Array.isArray(parsed) && parsed.length > 0 && "title" in parsed[0]) {
        lessonsCount = parsed.length;
      }
    } catch {}
    if (lessonsCount === 0) {
      lessonsCount = 1;
    }

    courseModulesMap[m.course_id].push({
      slug: m.slug,
      title: m.title,
      lessons: new Array(lessonsCount),
    });
  });

  return courseModulesMap;
}

export async function getCourses(): Promise<Course[]> {
  const supabase = await createClient();
  const { data: dbCourses } = await supabase
    .from("learning_courses")
    .select("*")
    .eq("publish", true)
    .order("display_order", { ascending: true });

  // Build category slug map
  const catIds = [...new Set((dbCourses ?? []).map((c: any) => c.category_id).filter(Boolean))];
  let catSlugMap: Record<string, string> = {};
  if (catIds.length > 0) {
    const { data: cats } = await supabase.from("learning_categories").select("id, slug").in("id", catIds);
    (cats ?? []).forEach((cat: any) => { catSlugMap[cat.id] = cat.slug; });
  }

  const courseModulesMap = await fetchModulesAndLessonsMapping(supabase);

  return (dbCourses ?? []).map((c: any) => ({
    slug: c.slug,
    title: c.title,
    tagline: c.short_description || "",
    description: c.description || "",
    category: catSlugMap[c.category_id] || "",
    difficulty: c.difficulty,
    minutes: c.reading_time || 0,
    hasImages: !!c.cover_image,
    hasVideos: false,
    hasQuiz: true,
    updatedAt: c.updated_at,
    popularity: 100 - c.display_order * 5,
    thumbnailAccent: ["#059669", "#064e3b"],
    thumbnailGlyph: "📖",
    modules: courseModulesMap[c.id] || [],
    faqs: [],
    quiz: [],
    related: [],
    keyTakeaways: c.key_takeaways || [],
    coverImage: c.cover_image || undefined,
  }));
}

export async function getCoursesByCategory(categorySlug: string): Promise<Course[]> {
  const supabase = await createClient();
  // Fetch category ID first
  const { data: cat } = await supabase
    .from("learning_categories")
    .select("id, slug")
    .eq("slug", categorySlug)
    .single();

  if (!cat) return [];

  const { data: dbCourses } = await supabase
    .from("learning_courses")
    .select("*")
    .eq("category_id", cat.id)
    .eq("publish", true)
    .order("display_order", { ascending: true });

  const courseModulesMap = await fetchModulesAndLessonsMapping(supabase);

  return (dbCourses ?? []).map((c: any) => ({
    slug: c.slug,
    title: c.title,
    tagline: c.short_description || "",
    description: c.description || "",
    category: (cat as any).slug || "",
    difficulty: c.difficulty,
    minutes: c.reading_time || 0,
    hasImages: !!c.cover_image,
    hasVideos: false,
    hasQuiz: true,
    updatedAt: c.updated_at,
    popularity: 100 - c.display_order * 5,
    thumbnailAccent: ["#059669", "#064e3b"],
    thumbnailGlyph: "📖",
    modules: courseModulesMap[c.id] || [],
    faqs: [],
    quiz: [],
    related: [],
    keyTakeaways: c.key_takeaways || [],
    coverImage: c.cover_image || undefined,
  }));
}


export const getCourseBySlug = cache(async (slug: string): Promise<Course | null> => {
  const supabase = await createClient();

  // Fetch course without embedding to avoid PostgREST FK ambiguity
  const { data: course } = await supabase
    .from("learning_courses")
    .select("*")
    .eq("slug", slug)
    .eq("publish", true)
    .single();

  if (!course) return null;

  // Fetch modules, quiz, faqs, and category in PARALLEL
  const [{ data: modules }, { data: quiz }, { data: faqs }, { data: catData }] = await Promise.all([
    supabase
      .from("learning_modules")
      .select("id, title, slug, summary, reading_time, module_order, publish, free_preview, icon")
      .eq("course_id", course.id)
      .eq("publish", true)
      .order("module_order", { ascending: true }),
    supabase
      .from("learning_quiz_questions")
      .select("*")
      .eq("course_id", course.id)
      .order("display_order", { ascending: true }),
    supabase
      .from("learning_course_faqs")
      .select("*")
      .eq("course_id", course.id)
      .order("display_order", { ascending: true }),
    course.category_id
      ? supabase.from("learning_categories").select("id, name, slug").eq("id", course.category_id).single()
      : Promise.resolve({ data: null }),
  ]);

  // Fetch module content separately
  const moduleIds = (modules ?? []).map((m: any) => m.id);
  const { data: moduleContents } = moduleIds.length > 0
    ? await supabase
        .from("learning_module_content")
        .select("module_id, markdown_content")
        .in("module_id", moduleIds)
    : { data: [] };
  const contentByModuleId: Record<string, string> = {};
  (moduleContents ?? []).forEach((mc: any) => {
    contentByModuleId[mc.module_id] = mc.markdown_content ?? "";
  });

  return {
    slug: course.slug,
    title: course.title,
    tagline: course.short_description || "",
    description: course.description || "",
    category: (catData as any)?.slug || "",
    difficulty: course.difficulty,
    minutes: course.reading_time || 0,
    hasImages: !!course.cover_image,
    hasVideos: false,
    hasQuiz: (quiz ?? []).length > 0,
    updatedAt: course.updated_at,
    popularity: 100 - course.display_order * 5,
    thumbnailAccent: ["#059669", "#064e3b"],
    thumbnailGlyph: (catData as any)?.name?.slice(0, 3)?.toUpperCase() || "📖",
    modules: (modules ?? []).map((m: any) => {
      const rawContent: string = contentByModuleId[m.id] || "";
      // Try to parse sub-topics JSON format (from the admin multi-subtopic editor)
      let lessons: { slug: string; title: string; minutes: number; blocks: { type: "markdown"; text: string }[] }[] = [];
      try {
        const parsed = JSON.parse(rawContent);
        if (Array.isArray(parsed) && parsed.length > 0 && "title" in parsed[0]) {
          lessons = parsed.map((sub: any, si: number) => ({
            slug: `${m.slug}-${si + 1}`,
            title: sub.title ?? `Part ${si + 1}`,
            minutes: Math.max(1, Math.round((sub.markdown_content?.length ?? 0) / 800)),
            blocks: [{ type: "markdown" as const, text: sub.markdown_content ?? "" }],
          }));
        }
      } catch {}
      // Legacy: plain markdown → single lesson
      if (lessons.length === 0) {
        lessons = [{
          slug: m.slug,
          title: m.title,
          minutes: m.reading_time || 5,
          blocks: [{ type: "markdown" as const, text: rawContent }],
        }];
      }
      return {
        slug: m.slug,
        title: m.title,
        summary: m.summary || "",
        lessons,
      };
    }),
    faqs: (faqs ?? []).map((f) => ({
      q: f.question,
      a: f.answer,
    })),
    quiz: (quiz ?? []).map((q) => ({
      q: q.question,
      options: q.options || [],
      answerIndex: q.correct_answer_index ?? 0,
      explanation: q.explanation || "",
    })),
    related: [],
    keyTakeaways: course.key_takeaways || [],
    coverImage: course.cover_image || undefined,
    ogImage: course.og_image || undefined,
  };
});


export async function getRelatedCourses(course: Course): Promise<Course[]> {
  const supabase = await createClient();

  // Find the category ID by slug
  const { data: cat } = await supabase
    .from("learning_categories")
    .select("id, slug")
    .eq("slug", course.category)
    .single();

  if (!cat) return [];

  // Fetch courses in same category without embedding
  const { data: dbCourses } = await supabase
    .from("learning_courses")
    .select("*")
    .eq("category_id", cat.id)
    .eq("publish", true)
    .neq("slug", course.slug)
    .limit(2);

  const courseModulesMap = await fetchModulesAndLessonsMapping(supabase);

  return (dbCourses ?? []).map((c: any) => ({
    slug: c.slug,
    title: c.title,
    tagline: c.short_description || "",
    description: c.description || "",
    category: (cat as any).slug || "",
    difficulty: c.difficulty,
    minutes: c.reading_time || 0,
    hasImages: !!c.cover_image,
    hasVideos: false,
    hasQuiz: true,
    updatedAt: c.updated_at,
    popularity: 100 - c.display_order * 5,
    thumbnailAccent: ["#059669", "#064e3b"],
    thumbnailGlyph: "📖",
    modules: courseModulesMap[c.id] || [],
    faqs: [],
    quiz: [],
    related: [],
    keyTakeaways: c.key_takeaways || [],
    coverImage: c.cover_image || undefined,
  }));
}
