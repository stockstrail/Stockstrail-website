"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2, ChevronLeft, ChevronRight, Check } from "lucide-react";
import type { LearningCourse, LearningCategory, CourseFormData } from "@/lib/learning/admin-types";
import { EMPTY_COURSE } from "@/lib/learning/admin-types";
import { Step1_BasicInfo } from "./Step1_BasicInfo";
import { Step2_LearningInfo } from "./Step2_LearningInfo";
import { Step3_Modules } from "./Step3_Modules";
import { Step4_Quiz } from "./Step4_Quiz";
import { Step5_Related } from "./Step5_Related";
import { Step6_SEO } from "./Step6_SEO";

interface CourseWizardProps {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  course: LearningCourse | null;
  categories: LearningCategory[];
  onSave: () => void;
}

const STEPS = [
  { id: 1, label: "Basic Info" },
  { id: 2, label: "Learning" },
  { id: 3, label: "Modules" },
  { id: 4, label: "Quiz" },
  { id: 5, label: "Related" },
  { id: 6, label: "SEO" },
];

export function CourseWizard({ open, onOpenChange, course, categories, onSave }: CourseWizardProps) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<CourseFormData>(EMPTY_COURSE);
  const [savedCourseId, setSavedCourseId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [slugManual, setSlugManual] = useState(false);

  useEffect(() => {
    if (open) {
      setStep(1);
      setError(null);
      setSlugManual(false);
      if (course) {
        const { id, created_at, updated_at, category, module_count, ...rest } = course;
        setForm(rest as CourseFormData);
        setSavedCourseId(id);
        setSlugManual(true);
      } else {
        setForm(EMPTY_COURSE);
        setSavedCourseId(null);
      }
    }
  }, [open, course]);

  const saveCourseRecord = async (): Promise<boolean> => {
    if (!form.title.trim() || !form.slug.trim()) {
      setError("Title and slug are required.");
      return false;
    }
    setSaving(true);
    setError(null);
    try {
      const supabase = createClient();
      const payload = { ...form, updated_at: new Date().toISOString() };
      if (savedCourseId) {
        const { error: e } = await supabase.from("learning_courses").update(payload).eq("id", savedCourseId);
        if (e) throw e;
      } else {
        const { data, error: e } = await supabase.from("learning_courses").insert(payload).select().single();
        if (e) throw e;
        setSavedCourseId(data.id);
      }
      return true;
    } catch (e: any) {
      setError(e.message ?? "Save failed");
      return false;
    } finally {
      setSaving(false);
    }
  };

  const handleNext = async () => {
    if (step === 1 || step === 2 || step === 6) {
      const ok = await saveCourseRecord();
      if (!ok) return;
    }
    if (step < STEPS.length) setStep(s => s + 1);
  };

  const handlePrev = () => { if (step > 1) setStep(s => s - 1); };

  const handleFinish = async () => {
    const ok = await saveCourseRecord();
    if (ok) {
      onSave();
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#031815] border-white/10 text-white max-w-4xl w-full max-h-[95vh] overflow-hidden flex flex-col p-0">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-0 shrink-0">
          <DialogTitle className="font-product-sans text-2xl text-white">{course ? "Edit Course" : "Create Course"}</DialogTitle>
        </div>

        {/* Step Indicator */}
        <div className="px-6 pt-4 shrink-0">
          <div className="flex items-center gap-1">
            {STEPS.map((s, i) => (
              <div key={s.id} className="flex items-center gap-1 flex-1 last:flex-none">
                <button
                  onClick={() => { if (s.id <= step || savedCourseId) setStep(s.id); }}
                  className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap
                    ${step === s.id ? "bg-stockstrail-green-light text-[#031815]" :
                      s.id < step ? "bg-white/10 text-white/70" : "text-white/30"}`}
                >
                  {s.id < step ? <Check className="w-3 h-3 shrink-0" /> : <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px] shrink-0">{s.id}</span>}
                  <span className="hidden sm:inline">{s.label}</span>
                </button>
                {i < STEPS.length - 1 && <div className={`h-px flex-1 ${s.id < step ? "bg-stockstrail-green-light/50" : "bg-white/10"}`} />}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {error && <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">{error}</div>}

          {step === 1 && <Step1_BasicInfo form={form} setForm={setForm} categories={categories} slugManual={slugManual} setSlugManual={setSlugManual} />}
          {step === 2 && <Step2_LearningInfo form={form} setForm={setForm} />}
          {step === 3 && <Step3_Modules courseId={savedCourseId} />}
          {step === 4 && <Step4_Quiz courseId={savedCourseId} />}
          {step === 5 && <Step5_Related courseId={savedCourseId} currentSlug={form.slug} />}
          {step === 6 && <Step6_SEO form={form} setForm={setForm} />}
        </div>

        {/* Footer */}
        <div className="p-6 pt-4 border-t border-white/10 shrink-0 flex items-center justify-between">
          <Button variant="ghost" onClick={handlePrev} disabled={step === 1 || saving}
            className="border border-white/20 text-white hover:border-white/40">
            <ChevronLeft className="w-4 h-4 mr-1" /> Previous
          </Button>

          <div className="flex gap-3">
            {step < STEPS.length ? (
              <Button onClick={handleNext} disabled={saving}
                className="bg-gradient-to-r from-emerald-400 to-stockstrail-green-light text-[#031815] font-semibold rounded-xl">
                {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                {step <= 2 ? "Save & Next" : "Next"}
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            ) : (
              <Button onClick={handleFinish} disabled={saving}
                className="bg-gradient-to-r from-emerald-400 to-stockstrail-green-light text-[#031815] font-semibold rounded-xl px-6">
                {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Check className="w-4 h-4 mr-2" />}
                {saving ? "Saving..." : "Finish & Publish"}
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
