"use client";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Save } from "lucide-react";
import { ImageUploader } from "./shared/ImageUploader";
import type { LearningCategory, CategoryFormData, EMPTY_CATEGORY } from "@/lib/learning/admin-types";
import { EMPTY_CATEGORY as EC } from "@/lib/learning/admin-types";

type Tab = "general" | "media" | "settings" | "seo";

interface CategoryFormModalProps {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  category: LearningCategory | null;
  onSave: () => void;
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export function CategoryFormModal({ open, onOpenChange, category, onSave }: CategoryFormModalProps) {
  const [tab, setTab] = useState<Tab>("general");
  const [form, setForm] = useState<CategoryFormData>(EC);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [slugManual, setSlugManual] = useState(false);

  useEffect(() => {
    if (open) {
      setTab("general");
      setError(null);
      setSlugManual(false);
      if (category) {
        const { id, created_at, updated_at, course_count, ...rest } = category;
        setForm(rest as CategoryFormData);
        setSlugManual(true);
      } else {
        setForm(EC);
      }
    }
  }, [open, category]);

  const set = (key: keyof CategoryFormData, val: unknown) =>
    setForm(prev => ({ ...prev, [key]: val }));

  const handleNameChange = (name: string) => {
    set("name", name);
    if (!slugManual) set("slug", slugify(name));
  };

  const handleSubmit = async () => {
    if (!form.name.trim()) { setError("Name is required"); return; }
    if (!form.slug.trim()) { setError("Slug is required"); return; }
    setSaving(true);
    setError(null);
    try {
      const supabase = createClient();
      const payload = { ...form, updated_at: new Date().toISOString() };
      if (category) {
        const { error: e } = await supabase.from("learning_categories").update(payload).eq("id", category.id);
        if (e) throw e;
      } else {
        const { error: e } = await supabase.from("learning_categories").insert(payload);
        if (e) throw e;
      }
      onSave();
      onOpenChange(false);
    } catch (e: any) {
      setError(e.message ?? "Save failed");
    } finally {
      setSaving(false);
    }
  };

  const tabs: { id: Tab; label: string }[] = [
    { id: "general", label: "General" },
    { id: "media", label: "Media" },
    { id: "settings", label: "Settings" },
    { id: "seo", label: "SEO" },
  ];

  const inputCls = "bg-white/5 border-white/10 text-white placeholder:text-white/40";
  const labelCls = "text-white/70 text-sm";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#031815] border-white/10 text-white max-w-2xl max-h-[90vh] overflow-hidden flex flex-col p-0">
        <DialogHeader className="p-6 pb-0 shrink-0">
          <DialogTitle className="text-xl font-product-sans text-white">
            {category ? "Edit Category" : "Create Category"}
          </DialogTitle>
        </DialogHeader>

        {/* Tab Bar */}
        <div className="flex border-b border-white/10 px-6 shrink-0">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${tab === t.id
                ? "text-stockstrail-green-light border-stockstrail-green-light"
                : "text-white/50 border-transparent hover:text-white"}`}
            >{t.label}</button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">

          {/* GENERAL */}
          {tab === "general" && (
            <>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className={labelCls}>Category Name *</Label>
                  <Input value={form.name} onChange={e => handleNameChange(e.target.value)} className={inputCls} placeholder="e.g. Mutual Funds" />
                </div>
                <div className="space-y-2">
                  <Label className={labelCls}>Slug *</Label>
                  <Input value={form.slug} onChange={e => { setSlugManual(true); set("slug", e.target.value); }} className={inputCls} placeholder="e.g. mutual-funds" />
                </div>
              </div>
              <div className="space-y-2">
                <Label className={labelCls}>Short Description</Label>
                <Input value={form.short_description ?? ""} onChange={e => set("short_description", e.target.value)} className={inputCls} placeholder="One-line summary" />
              </div>
              <div className="space-y-2">
                <Label className={labelCls}>Full Description</Label>
                <Textarea rows={5} value={form.description ?? ""} onChange={e => set("description", e.target.value)} className={`${inputCls} resize-none`} placeholder="Detailed description of this category..." />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className={labelCls}>Icon (emoji or URL)</Label>
                  <Input value={form.icon ?? ""} onChange={e => set("icon", e.target.value)} className={inputCls} placeholder="📈 or https://..." />
                </div>
                <div className="space-y-2">
                  <Label className={labelCls}>Display Order</Label>
                  <Input type="number" value={form.display_order} onChange={e => set("display_order", parseInt(e.target.value) || 0)} className={inputCls} />
                </div>
              </div>
            </>
          )}

          {/* MEDIA */}
          {tab === "media" && (
            <div className="grid gap-8 md:grid-cols-2">
              <ImageUploader
                label="Cover Image"
                value={form.cover_image}
                onChange={url => set("cover_image", url)}
                storagePath="categories/covers"
              />
              <ImageUploader
                label="Thumbnail"
                value={form.thumbnail}
                onChange={url => set("thumbnail", url)}
                storagePath="categories/thumbnails"
              />
            </div>
          )}

          {/* SETTINGS */}
          {tab === "settings" && (
            <div className="space-y-4">
              {(["publish", "show_on_homepage", "featured"] as const).map(key => (
                <label key={key} className="flex items-center justify-between p-4 rounded-xl border border-white/10 bg-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                  <div>
                    <p className="text-white font-medium capitalize">{key.replace(/_/g, " ")}</p>
                    <p className="text-white/50 text-sm mt-0.5">
                      {key === "publish" ? "Make this category publicly visible" :
                        key === "show_on_homepage" ? "Show in homepage category sections" :
                          "Mark as featured category"}
                    </p>
                  </div>
                  <div className={`w-11 h-6 rounded-full border-2 transition-colors relative ${form[key] ? "bg-stockstrail-green-light border-stockstrail-green-light" : "bg-white/10 border-white/20"}`}
                    onClick={() => set(key, !form[key])}>
                    <span className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${form[key] ? "translate-x-5" : "translate-x-0"}`} />
                  </div>
                </label>
              ))}
            </div>
          )}

          {/* SEO */}
          {tab === "seo" && (
            <div className="space-y-5">
              <div className="space-y-2">
                <Label className={labelCls}>SEO Title <span className="text-white/30 text-xs">({(form.seo_title ?? "").length}/60)</span></Label>
                <Input maxLength={60} value={form.seo_title ?? ""} onChange={e => set("seo_title", e.target.value)} className={inputCls} placeholder="Category page title for Google..." />
              </div>
              <div className="space-y-2">
                <Label className={labelCls}>Meta Description <span className="text-white/30 text-xs">({(form.seo_description ?? "").length}/160)</span></Label>
                <Textarea rows={3} maxLength={160} value={form.seo_description ?? ""} onChange={e => set("seo_description", e.target.value)} className={`${inputCls} resize-none`} />
              </div>
              <div className="space-y-2">
                <Label className={labelCls}>Keywords</Label>
                <Input value={form.seo_keywords ?? ""} onChange={e => set("seo_keywords", e.target.value)} className={inputCls} placeholder="mutual funds, SIP, investing..." />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className={labelCls}>Canonical URL</Label>
                  <Input value={form.canonical_url ?? ""} onChange={e => set("canonical_url", e.target.value)} className={inputCls} placeholder="https://..." />
                </div>
                <div className="space-y-2">
                  <Label className={labelCls}>Robots</Label>
                  <Input value={form.robots ?? "index,follow"} onChange={e => set("robots", e.target.value)} className={inputCls} />
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className={labelCls}>OG Title</Label>
                  <Input value={form.og_title ?? ""} onChange={e => set("og_title", e.target.value)} className={inputCls} />
                </div>
                <div className="space-y-2">
                  <Label className={labelCls}>OG Description</Label>
                  <Input value={form.og_description ?? ""} onChange={e => set("og_description", e.target.value)} className={inputCls} />
                </div>
              </div>
              <ImageUploader label="OG Image" value={form.og_image} onChange={url => set("og_image", url)} storagePath="categories/og" />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 pt-4 border-t border-white/10 shrink-0 flex items-center justify-between gap-4">
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <div className="flex gap-3 ml-auto">
            <Button variant="ghost" onClick={() => onOpenChange(false)} className="border border-white/20 text-white hover:border-white/40" disabled={saving}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} disabled={saving}
              className="bg-gradient-to-r from-emerald-400 to-stockstrail-green-light hover:from-emerald-300 hover:to-stockstrail-green text-[#031815] font-semibold shadow-[0_0_20px_rgba(0,255,151,0.25)] transition-all rounded-xl">
              {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
              {category ? "Save Changes" : "Create Category"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
