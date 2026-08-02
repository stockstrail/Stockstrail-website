import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourseBySlug, getCategoryBySlug, getRelatedCourses } from "@/lib/learning/supabase-db";
import { CoursePageClient } from "./CoursePageClient";

// Always fetch fresh content from Supabase on every request
export const dynamic = "force-dynamic";
export const revalidate = 0;


interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = await getCourseBySlug(slug);
  if (!c) {
    return {
      title: "Course not found — Stockstrail Learning",
    };
  }
  const shareImage = c.ogImage || c.coverImage;

  return {
    title: `${c.title} — Stockstrail Learning`,
    description: c.description,
    openGraph: {
      title: c.title,
      description: c.description,
      type: "article",
      url: `https://www.learning.stockstrail.in/courses/${slug}`,
      siteName: "Stockstrail Learning",
      images: shareImage ? [{ url: shareImage, alt: c.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.description,
      images: shareImage ? [shareImage] : undefined,
    },
    alternates: {
      canonical: `https://www.learning.stockstrail.in/courses/${slug}`,
    }
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) {
    notFound();
  }

  const [category, related] = await Promise.all([
    course.category ? getCategoryBySlug(course.category) : Promise.resolve(null),
    getRelatedCourses(course),
  ]);

  // Schema markup injected inside the page
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": "Stockstrail Learning",
      "sameAs": "https://www.stockstrail.in"
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
