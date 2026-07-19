"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Check } from "lucide-react";
import type { LearningCourse } from "@/lib/learning/admin-types";

interface Step5Props {
  courseId: string | null;
  currentSlug?: string;
}

export function Step5_Related({ courseId, currentSlug }: Step5Props) {
  const [allCourses, setAllCourses] = useState<LearningCourse[]>([]);
  const [related, setRelated] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAll = async () => {
      const supabase = createClient();
      const { data } = await supabase.from("learning_courses").select("*").order("title");
      setAllCourses((data ?? []).filter((c: any) => c.slug !== currentSlug));
    };
    fetchAll();
  }, [currentSlug]);

  const toggle = (id: string) => {
    setRelated(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  if (!courseId) return <div className="text-center py-20 text-white/40 text-sm">Save the course first to set related courses.</div>;

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-white font-medium">Related Courses</h3>
        <p className="text-white/50 text-xs mt-0.5">Select courses that learners should explore next. These appear at the end of this course.</p>
      </div>

      {loading && <div className="text-center py-10 text-white/40">Loading...</div>}

      <div className="grid gap-3 sm:grid-cols-2">
        {allCourses.map(c => (
          <button key={c.id} onClick={() => toggle(c.id)}
            className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${related.includes(c.id)
              ? "border-stockstrail-green-light bg-stockstrail-green-light/10"
              : "border-white/10 bg-white/[0.02] hover:border-white/30"}`}>
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${related.includes(c.id) ? "border-stockstrail-green-light bg-stockstrail-green-light" : "border-white/30"}`}>
              {related.includes(c.id) && <Check className="w-3 h-3 text-[#031815]" />}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{c.title}</p>
              <p className="text-white/40 text-xs">{c.difficulty}</p>
            </div>
          </button>
        ))}
        {allCourses.length === 0 && (
          <p className="text-white/30 text-sm col-span-2">No other courses found. Create more courses to link them here.</p>
        )}
      </div>

      {related.length > 0 && (
        <p className="text-stockstrail-green-light text-xs">{related.length} course{related.length > 1 ? "s" : ""} selected as related content.</p>
      )}
    </div>
  );
}
