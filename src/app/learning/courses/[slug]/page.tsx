import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourseBySlug, getCategoryBySlug, getRelatedCourses } from "@/lib/learning/supabase-db";
import { CoursePageClient } from "./CoursePageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = await getCourseBySlug(slug);
  if (!c) {
    return {
      title: "Course not found — StocksTrail Learning",
    };
  }
  return {
    title: `${c.title} — StocksTrail Learning`,
    description: c.description,
    openGraph: {
      title: c.title,
      description: c.description,
      type: "article",
      url: `/learning/courses/${slug}`,
    },
    alternates: {
      canonical: `/learning/courses/${slug}`,
    }
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) {
    notFound();
  }

  const category = await getCategoryBySlug(course.category);
  const related = await getRelatedCourses(course);

  // Schema markup injected inside the page
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": "StocksTrail Learning",
      "sameAs": "https://stockstrail.in"
    },
    "educationalLevel": course.difficulty,
    "timeRequired": `PT${course.minutes}M`,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": `PT${course.minutes}M`
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": course.faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CoursePageClient course={course} category={category} related={related} />
    </>
  );
}
