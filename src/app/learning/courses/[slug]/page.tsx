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
  const pageUrl = `https://www.learning.stockstrail.in/courses/${slug}`;

  return {
    title: `${c.title} — Stockstrail Learning`,
    description: c.tagline || c.description,
    openGraph: {
      title: c.title,
      description: c.tagline || c.description,
      type: "article",
      url: pageUrl,
      siteName: "Stockstrail Learning",
      images: shareImage
        ? [{
            url: shareImage,
            width: 1200,
            height: 630,
            alt: c.title,
          }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.tagline || c.description,
      images: shareImage ? [shareImage] : undefined,
    },
    alternates: {
      canonical: pageUrl,
    },
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
