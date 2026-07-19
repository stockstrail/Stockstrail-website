import type { Metadata } from "next";
import { getCategories, getCourses } from "@/lib/learning/supabase-db";
import CoursesPageClient from "./CoursesPageClient";

export const metadata: Metadata = {
  title: "All Courses — StocksTrail Learning",
  description: "Browse every finance course on StocksTrail Learning. Filter by difficulty, category and reading time.",
  openGraph: {
    title: "All Courses — StocksTrail Learning",
    description: "Browse every finance course on StocksTrail Learning.",
    url: "https://www.learning.stockstrail.in/courses",
  },
  alternates: {
    canonical: "https://www.learning.stockstrail.in/courses",
  }
};

export default async function CoursesPage() {
  const courses = await getCourses();
  const categories = await getCategories();
  
  return <CoursesPageClient initialCourses={courses} initialCategories={categories} />;
}
