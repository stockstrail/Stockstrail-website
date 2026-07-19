import type { Metadata } from "next";
import CoursesPageClient from "./CoursesPageClient";

export const metadata: Metadata = {
  title: "All Courses — StocksTrail Learning",
  description: "Browse every finance course on StocksTrail Learning. Filter by difficulty, category and reading time.",
  openGraph: {
    title: "All Courses — StocksTrail Learning",
    description: "Browse every finance course on StocksTrail Learning.",
    url: "/learning/courses",
  },
  alternates: {
    canonical: "/learning/courses",
  }
};

export default function CoursesPage() {
  return <CoursesPageClient />;
}
