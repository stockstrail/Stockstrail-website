"use client";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import type { CourseFormData } from "@/lib/learning/admin-types";

interface Step2Props { form: CourseFormData; setForm: (f: CourseFormData) => void; }

const ic = "bg-white/5 border-white/10 text-white placeholder:text-white/40";
const lc = "text-white/70 text-sm";

function TagList({ label, values, onChange }: { label: string; values: string[]; onChange: (v: string[]) => void }) {
  const add = () => onChange([...values, ""]);
  const update = (i: number, v: string) => { const arr = [...values]; arr[i] = v; onChange(arr); };
  const remove = (i: number) => onChange(values.filter((_, idx) => idx !== i));
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label className={lc}>{label}</Label>
        <Button type="button" size="sm" variant="ghost" onClick={add} className="text-stockstrail-green-light hover:bg-white/5 text-xs h-7">
          <Plus className="w-3 h-3 mr-1" /> Add
        </Button>
      </div>
      <div className="space-y-2">
        {values.map((v, i) => (
          <div key={i} className="flex gap-2">
            <Input value={v} onChange={e => update(i, e.target.value)} className={`${ic} flex-1`} placeholder={`Item ${i + 1}`} />
            <Button type="button" size="sm" variant="ghost" onClick={() => remove(i)} className="text-red-400 hover:bg-red-500/10 h-9 w-9 p-0">
              <X className="w-4 h-4" />
            </Button>
          </div>
        ))}
        {values.length === 0 && <p className="text-white/30 text-xs">No items yet. Click Add to start.</p>}
      </div>
    </div>
  );
}

export function Step2_LearningInfo({ form, setForm }: Step2Props) {
  const set = (key: keyof CourseFormData, val: unknown) => setForm({ ...form, [key]: val });

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label className={lc}>Prerequisites</Label>
        <Textarea rows={3} value={form.prerequisites ?? ""} onChange={e => set("prerequisites", e.target.value)} className={`${ic} resize-none`} placeholder="What should the learner already know before starting this course?" />
      </div>
      <div className="space-y-2">
        <Label className={lc}>Course Objectives</Label>
        <Textarea rows={3} value={form.objectives ?? ""} onChange={e => set("objectives", e.target.value)} className={`${ic} resize-none`} placeholder="What is this course trying to accomplish?" />
      </div>
      <div className="space-y-2">
        <Label className={lc}>Learning Outcomes</Label>
        <Textarea rows={3} value={form.learning_outcomes ?? ""} onChange={e => set("learning_outcomes", e.target.value)} className={`${ic} resize-none`} placeholder="What will the learner be able to do after completing this course?" />
      </div>
      <div className="space-y-2">
        <Label className={lc}>Target Audience — Who is this for?</Label>
        <Textarea rows={3} value={form.target_audience ?? ""} onChange={e => set("target_audience", e.target.value)} className={`${ic} resize-none`} placeholder="New investors, salaried employees planning for retirement, etc." />
      </div>
      <div className="space-y-2">
        <Label className={lc}>Course Highlights</Label>
        <Textarea rows={3} value={form.highlights ?? ""} onChange={e => set("highlights", e.target.value)} className={`${ic} resize-none`} placeholder="Key selling points or standout features of this course" />
      </div>
      <TagList
        label="Key Takeaways (shown at end of course)"
        values={form.key_takeaways ?? []}
        onChange={v => set("key_takeaways", v)}
      />
    </div>
  );
}
