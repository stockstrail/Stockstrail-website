"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ImageUploader } from "./shared/ImageUploader";
import type { CourseFormData } from "@/lib/learning/admin-types";

interface Step6Props { form: CourseFormData; setForm: (f: CourseFormData) => void; }

const ic = "bg-white/5 border-white/10 text-white placeholder:text-white/40";
const lc = "text-white/70 text-sm";

function CharCount({ val, max }: { val: string; max: number }) {
  const len = val.length;
  const color = len > max ? "text-red-400" : len > max * 0.85 ? "text-yellow-400" : "text-white/30";
  return <span className={`text-xs ${color}`}>{len}/{max}</span>;
}

function SerpPreview({ title, description, slug }: { title: string; description: string; slug: string }) {
  return (
    <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-1">
      <p className="text-[11px] text-white/30 uppercase tracking-wider mb-2">Live SERP Preview</p>
      <p className="text-xs text-white/40">https://www.learning.stockstrail.in/courses/{slug || "your-course-slug"}</p>
      <p className={`text-base font-medium ${title ? "text-blue-400" : "text-blue-400/40"} leading-snug`}>
        {title || "Your SEO Title will appear here"}
      </p>
      <p className={`text-sm leading-relaxed ${description ? "text-white/60" : "text-white/20"}`}>
        {description || "Your meta description will appear here. Write a compelling summary that gets people to click through to this course."}
      </p>
    </div>
  );
}

export function Step6_SEO({ form, setForm }: Step6Props) {
  const set = (key: keyof CourseFormData, val: unknown) => setForm({ ...form, [key]: val });
  const setOgImage = (url: string | null) => setForm({ ...form, og_image: url, twitter_image: url });

  return (
    <div className="space-y-6">
      <SerpPreview title={form.seo_title ?? ""} description={form.seo_description ?? ""} slug={form.slug} />

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label className={lc}>SEO Title</Label>
          <CharCount val={form.seo_title ?? ""} max={60} />
        </div>
        <Input maxLength={70} value={form.seo_title ?? ""} onChange={e => set("seo_title", e.target.value)} className={ic} placeholder="Course page title for Google (50–60 chars)" />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label className={lc}>Meta Description</Label>
          <CharCount val={form.seo_description ?? ""} max={160} />
        </div>
        <Textarea rows={3} maxLength={180} value={form.seo_description ?? ""} onChange={e => set("seo_description", e.target.value)} className={`${ic} resize-none`} placeholder="Compelling summary for search results (120–160 chars)" />
      </div>

      <div className="space-y-2">
        <Label className={lc}>Keywords</Label>
        <Input value={form.seo_keywords ?? ""} onChange={e => set("seo_keywords", e.target.value)} className={ic} placeholder="mutual funds, SIP calculator, beginner investing..." />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label className={lc}>Canonical URL</Label>
          <Input value={form.canonical_url ?? ""} onChange={e => set("canonical_url", e.target.value)} className={ic} placeholder="https://www.learning.stockstrail.in/courses/..." />
        </div>
        <div className="space-y-2">
          <Label className={lc}>Robots</Label>
          <Input value={form.robots ?? "index,follow"} onChange={e => set("robots", e.target.value)} className={ic} />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label className={lc}>OG Title</Label>
          <Input value={form.og_title ?? ""} onChange={e => set("og_title", e.target.value)} className={ic} placeholder="Title for social sharing" />
        </div>
        <div className="space-y-2">
          <Label className={lc}>OG Description</Label>
          <Input value={form.og_description ?? ""} onChange={e => set("og_description", e.target.value)} className={ic} placeholder="Description for social sharing" />
        </div>
      </div>

      <ImageUploader label="OG / Twitter Card Image (1200×630 recommended)" value={form.og_image} onChange={setOgImage} storagePath="courses/og" />

      <div className="space-y-2">
        <Label className={lc}>Schema Type</Label>
        <Input value={form.schema_type ?? "Course"} onChange={e => set("schema_type", e.target.value)} className={ic} />
      </div>
    </div>
  );
}
