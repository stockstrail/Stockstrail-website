"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ImageUploader } from "./shared/ImageUploader";
import type { CourseFormData } from "@/lib/learning/admin-types";
import type { LearningCategory } from "@/lib/learning/admin-types";

interface Step1Props {
  form: CourseFormData;
  setForm: (f: CourseFormData) => void;
  categories: LearningCategory[];
  slugManual: boolean;
  setSlugManual: (v: boolean) => void;
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const ic = "bg-white/5 border-white/10 text-white placeholder:text-white/40";
const lc = "text-white/70 text-sm";

export function Step1_BasicInfo({ form, setForm, categories, slugManual, setSlugManual }: Step1Props) {
  const set = (key: keyof CourseFormData, val: unknown) => setForm({ ...form, [key]: val });

  const handleTitle = (title: string) => {
    setForm({ ...form, title, slug: slugManual ? form.slug : slugify(title) });
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label className={lc}>Course Title *</Label>
          <Input value={form.title} onChange={e => handleTitle(e.target.value)} className={ic} placeholder="e.g. Mutual Funds for Beginners" />
        </div>
        <div className="space-y-2">
          <Label className={lc}>Slug *</Label>
          <Input value={form.slug} onChange={e => { setSlugManual(true); set("slug", e.target.value); }} className={ic} placeholder="mutual-funds-for-beginners" />
        </div>
      </div>

      <div className="space-y-2">
        <Label className={lc}>Short Description</Label>
        <Input value={form.short_description ?? ""} onChange={e => set("short_description", e.target.value)} className={ic} placeholder="One-line summary shown in course cards" />
      </div>

      <div className="space-y-2">
        <Label className={lc}>Full Description</Label>
        <Textarea rows={4} value={form.description ?? ""} onChange={e => set("description", e.target.value)} className={`${ic} resize-none`} placeholder="Detailed overview of this course..." />
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div className="space-y-2">
          <Label className={lc}>Category</Label>
          <Select value={form.category_id || "none"} onValueChange={v => set("category_id", v === "none" ? null : v)}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent className="bg-[#031815] border-white/10">
              <SelectItem value="none" className="text-white/60">No category</SelectItem>
              {categories.map(c => (
                <SelectItem key={c.id} value={c.id} className="text-white">{c.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className={lc}>Difficulty</Label>
          <Select value={form.difficulty} onValueChange={v => set("difficulty", v)}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#031815] border-white/10">
              {["Beginner", "Intermediate", "Advanced"].map(d => (
                <SelectItem key={d} value={d} className="text-white">{d}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className={lc}>Language</Label>
          <Select value={form.language} onValueChange={v => set("language", v)}>
            <SelectTrigger className="bg-white/5 border-white/10 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-[#031815] border-white/10">
              {["English", "Hindi", "Hinglish"].map(l => (
                <SelectItem key={l} value={l} className="text-white">{l}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-4">
        <div className="space-y-2">
          <Label className={lc}>Reading Time (min)</Label>
          <Input type="number" value={form.reading_time} onChange={e => set("reading_time", parseInt(e.target.value) || 0)} className={ic} />
        </div>
        <div className="space-y-2">
          <Label className={lc}>Completion Time (min)</Label>
          <Input type="number" value={form.completion_time} onChange={e => set("completion_time", parseInt(e.target.value) || 0)} className={ic} />
        </div>
        <div className="space-y-2">
          <Label className={lc}>Display Order</Label>
          <Input type="number" value={form.display_order} onChange={e => set("display_order", parseInt(e.target.value) || 0)} className={ic} />
        </div>
        <div className="space-y-2">
          <Label className={lc}>Version</Label>
          <Input value={form.version} onChange={e => set("version", e.target.value)} className={ic} placeholder="1.0" />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label className={lc}>Author</Label>
          <Input value={form.author} onChange={e => set("author", e.target.value)} className={ic} />
        </div>
        <div className="space-y-2">
          <Label className={lc}>Tags (comma-separated)</Label>
          <Input value={(form.tags ?? []).join(", ")} onChange={e => set("tags", e.target.value.split(",").map(t => t.trim()).filter(Boolean))} className={ic} placeholder="investing, SIP, mutual funds" />
        </div>
      </div>

      <ImageUploader label="Course Cover Image" value={form.cover_image} onChange={url => set("cover_image", url)} storagePath="courses/covers" />

      <div className="space-y-3">
        {(["publish", "show_on_homepage", "featured"] as const).map(key => (
          <label key={key} className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
            <div>
              <p className="text-white font-medium capitalize">{key.replace(/_/g, " ")}</p>
              <p className="text-white/50 text-xs mt-0.5">
                {key === "publish" ? "Make this course publicly visible" :
                  key === "show_on_homepage" ? "Show in homepage sections" :
                    "Mark as featured course"}
              </p>
            </div>
            <div className={`w-11 h-6 rounded-full border-2 transition-colors relative ${form[key] ? "bg-stockstrail-green-light border-stockstrail-green-light" : "bg-white/10 border-white/20"}`}
              onClick={() => set(key, !form[key])}>
              <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${form[key] ? "translate-x-5" : "translate-x-0"}`} />
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
