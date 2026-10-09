import type { Metadata } from "next";
import { getCategories, getCourses } from "@/lib/learning/supabase-db";
import CoursesPageClient from "./CoursesPageClient";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'All Free Finance Courses in India | Stockstrail Learning',
  description:
    'Browse all 12 free finance courses: mutual funds, SIP, insurance, tax saving, retirement and more. Filter by difficulty, category and reading time.',
  openGraph: {
    title: 'All Free Finance Courses in India | Stockstrail Learning',
    description:
      'Browse all 12 free finance courses: mutual funds, SIP, insurance, tax saving, retirement and more. Filter by difficulty, category and reading time.',
    url: "https://learning.stockstrail.in/courses",
    siteName: "Stockstrail Learning",
    images: [
      {
        url: "/og-stockstrail.png",
        width: 1200,
        height: 630,
        alt: 'All Free Finance Courses in India | Stockstrail Learning',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'All Free Finance Courses in India | Stockstrail Learning',
    description:
      'Browse all 12 free finance courses: mutual funds, SIP, insurance, tax saving, retirement and more. Filter by difficulty, category and reading time.',
    images: ["/og-stockstrail.png"],
  },
  alternates: {
    canonical: "https://learning.stockstrail.in/courses",
  }
};

export default async function CoursesPage() {
  const courses = await getCourses();
  const categories = await getCategories();
  
  return <CoursesPageClient initialCourses={courses} initialCategories={categories} />;
}
