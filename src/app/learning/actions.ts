"use server";

import { getCourseBySlug } from "@/lib/learning/supabase-db";

/** Server Action to fetch complete course data (with modules, lessons, faqs, quiz) */
export async function fetchFullCourseAction(slug: string) {
  try {
    return await getCourseBySlug(slug);
  } catch (err) {
    console.error("Failed to fetch full course details:", err);
    return null;
  }
}
