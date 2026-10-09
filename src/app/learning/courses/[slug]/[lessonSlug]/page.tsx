import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourseBySlug, getCategoryBySlug, getRelatedCourses } from "@/lib/learning/supabase-db";
import { CoursePageClient } from "../CoursePageClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface Props {
  params: Promise<{ slug: string; lessonSlug: string }>;
}

import { LEARNING_LESSON_METADATA } from "@/lib/seo/blueprint-meta";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, lessonSlug } = await params;
  const key = `${slug}/${lessonSlug}`;
  const meta = LEARNING_LESSON_METADATA[key];

  const c = await getCourseBySlug(slug);
  if (!c && !meta) {
    return {};
  }

  const lesson = c?.modules
    .flatMap((m) => m.lessons)
    .find((l) => l.slug === lessonSlug);

  const fallbackTitle = lesson ? `${lesson.title} — ${c?.title || "Course"} | Stockstrail` : `${c?.title || "Lesson"} | Stockstrail`;
  const firstBlock = lesson?.blocks.find((b) => "text" in b && typeof (b as { text?: unknown }).text === "string") as { text: string } | undefined;
  const fallbackDesc = firstBlock?.text ? firstBlock.text.slice(0, 160) : c?.tagline || c?.description || "Free finance lesson by Stockstrail Learning.";

  const title = meta?.title || fallbackTitle;
  const description = meta?.description || fallbackDesc;
  const pageUrl = `https://learning.stockstrail.in/courses/${slug}/${lessonSlug}`;
  const shareImage = c?.ogImage || c?.coverImage;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: pageUrl,
      siteName: "Stockstrail Learning",
      images: shareImage
        ? [
            {
              url: shareImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ]
        : [
            {
              url: "/og-stockstrail.png",
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: shareImage ? [shareImage] : ["/og-stockstrail.png"],
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default async function CourseLessonPage({ params }: Props) {
  const { slug, lessonSlug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) {
    notFound();
  }

  const lesson = course.modules
    .flatMap((m) => m.lessons)
    .find((l) => l.slug === lessonSlug);

  if (!lesson) {
    notFound();
  }

  const [category, related] = await Promise.all([
    course.category ? getCategoryBySlug(course.category) : Promise.resolve(null),
    getRelatedCourses(course),
  ]);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Learning Home",
        item: "https://learning.stockstrail.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: course.title,
        item: `https://learning.stockstrail.in/courses/${slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: lesson.title,
        item: `https://learning.stockstrail.in/courses/${slug}/${lessonSlug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CoursePageClient
        course={course}
        category={category}
        related={related}
        initialLessonSlug={lessonSlug}
      />
    </>
  );
}
