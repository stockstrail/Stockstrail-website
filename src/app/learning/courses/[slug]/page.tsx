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

import { LEARNING_COURSE_METADATA } from "@/lib/seo/blueprint-meta";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const c = await getCourseBySlug(slug);
  const meta = slug ? LEARNING_COURSE_METADATA[slug] : undefined;

  if (!c && !meta) {
    return {};
  }

  const title = meta?.title || (c ? `${c.title} | Stockstrail` : "Course | Stockstrail");
  const description = meta?.description || c?.tagline || c?.description || "Free finance course by Stockstrail Learning.";
  const shareImage = c?.ogImage || c?.coverImage;
  const pageUrl = `https://learning.stockstrail.in/courses/${slug}`;

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
        ? [{
            url: shareImage,
            width: 1200,
            height: 630,
            alt: title,
          }]
        : [{
            url: "/og-stockstrail.png",
            width: 1200,
            height: 630,
            alt: title,
          }],
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
    "description": course.tagline || course.description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Stockstrail Learning",
      "url": "https://learning.stockstrail.in"
    },
    "educationalLevel": course.difficulty,
    "inLanguage": "en-IN",
    "isAccessibleForFree": true,
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
      ...(category
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: category.name,
              item: `https://learning.stockstrail.in/categories/${category.slug}`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: course.title,
              item: `https://learning.stockstrail.in/courses/${slug}`,
            },
          ]
        : [
            {
              "@type": "ListItem",
              position: 2,
              name: course.title,
              item: `https://learning.stockstrail.in/courses/${slug}`,
            },
          ]),
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CoursePageClient course={course} category={category} related={related} />
    </>
  );
}
