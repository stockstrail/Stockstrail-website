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

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
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
  };
}

export async function getCourses(): Promise<Course[]> {
  const supabase = await createClient();
  const { data: dbCourses } = await supabase
    .from("learning_courses")
    .select("*, learning_categories(slug)")
    .eq("publish", true)
    .order("display_order", { ascending: true });

  return (dbCourses ?? []).map((c: any) => ({
    slug: c.slug,
    title: c.title,
    tagline: c.short_description || "",
    description: c.description || "",
    category: c.learning_categories?.slug || "",
    difficulty: c.difficulty,
    minutes: c.reading_time || 0,
    hasImages: !!c.cover_image,
    hasVideos: false,
    hasQuiz: true,
    updatedAt: c.updated_at,
    popularity: 100 - c.display_order * 5,
    thumbnailAccent: ["#059669", "#064e3b"],
    thumbnailGlyph: "📖",
    modules: [],
    faqs: [],
    quiz: [],
    related: [],
    keyTakeaways: c.key_takeaways || [],
    coverImage: c.cover_image || undefined,
    thumbnail: c.thumbnail || undefined,
  }));
}

export async function getCoursesByCategory(categorySlug: string): Promise<Course[]> {
  const supabase = await createClient();
  // Fetch category ID first
  const { data: cat } = await supabase
    .from("learning_categories")
    .select("id")
    .eq("slug", categorySlug)
    .single();

  if (!cat) return [];

  const { data: dbCourses } = await supabase
    .from("learning_courses")
    .select("*, learning_categories(slug)")
    .eq("category_id", cat.id)
    .eq("publish", true)
    .order("display_order", { ascending: true });

  return (dbCourses ?? []).map((c: any) => ({
    slug: c.slug,
    title: c.title,
    tagline: c.short_description || "",
    description: c.description || "",
    category: c.learning_categories?.slug || "",
    difficulty: c.difficulty,
    minutes: c.reading_time || 0,
    hasImages: !!c.cover_image,
    hasVideos: false,
    hasQuiz: true,
    updatedAt: c.updated_at,
    popularity: 100 - c.display_order * 5,
    thumbnailAccent: ["#059669", "#064e3b"],
    thumbnailGlyph: "📖",
    modules: [],
    faqs: [],
    quiz: [],
    related: [],
    keyTakeaways: c.key_takeaways || [],
    coverImage: c.cover_image || undefined,
    thumbnail: c.thumbnail || undefined,
  }));
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  const supabase = await createClient();

  const { data: course } = await supabase
    .from("learning_courses")
    .select("*, learning_categories(id, name, slug)")
    .eq("slug", slug)
    .eq("publish", true)
    .single();

  if (!course) return null;

  const [{ data: modules }, { data: quiz }, { data: faqs }] = await Promise.all([
    supabase
      .from("learning_modules")
      .select("*, learning_module_content(markdown_content)")
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
  ]);

  return {
    slug: course.slug,
    title: course.title,
    tagline: course.short_description || "",
    description: course.description || "",
    category: course.learning_categories?.slug || "",
    difficulty: course.difficulty,
    minutes: course.reading_time || 0,
    hasImages: !!course.cover_image,
    hasVideos: false,
    hasQuiz: (quiz ?? []).length > 0,
    updatedAt: course.updated_at,
    popularity: 100 - course.display_order * 5,
    thumbnailAccent: ["#059669", "#064e3b"],
    thumbnailGlyph: course.learning_categories?.name?.slice(0, 3)?.toUpperCase() || "📖",
    modules: (modules ?? []).map((m: any) => ({
      slug: m.slug,
      title: m.title,
      summary: m.summary || "",
      lessons: [
        {
          slug: m.slug,
          title: m.title,
          minutes: m.reading_time || 5,
          blocks: [
            {
              type: "markdown",
              text: m.learning_module_content?.[0]?.markdown_content || "",
            },
          ],
        },
      ],
    })),
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
    thumbnail: course.thumbnail || undefined,
  };
}

export async function getRelatedCourses(course: Course): Promise<Course[]> {
  const supabase = await createClient();
  const { data: cat } = await supabase
    .from("learning_categories")
    .select("id")
    .eq("slug", course.category)
    .single();

  if (!cat) return [];

  const { data: dbCourses } = await supabase
    .from("learning_courses")
    .select("*, learning_categories(slug)")
    .eq("category_id", cat.id)
    .eq("publish", true)
    .neq("slug", course.slug)
    .limit(2);

  return (dbCourses ?? []).map((c: any) => ({
    slug: c.slug,
    title: c.title,
    tagline: c.short_description || "",
    description: c.description || "",
    category: c.learning_categories?.slug || "",
    difficulty: c.difficulty,
    minutes: c.reading_time || 0,
    hasImages: !!c.cover_image,
    hasVideos: false,
    hasQuiz: true,
    updatedAt: c.updated_at,
    popularity: 100 - c.display_order * 5,
    thumbnailAccent: ["#059669", "#064e3b"],
    thumbnailGlyph: "📖",
    modules: [],
    faqs: [],
    quiz: [],
    related: [],
    keyTakeaways: c.key_takeaways || [],
    coverImage: c.cover_image || undefined,
    thumbnail: c.thumbnail || undefined,
  }));
}
