"use client";
import { useState, useEffect, useMemo } from "react";
import { createClient } from "@/lib/supabase/client";
import { Plus, Search, Edit2, Trash2, Eye, Copy, ArrowUpDown, Globe, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { StatusBadge } from "./shared/StatusBadge";
import { ConfirmDialog } from "./shared/ConfirmDialog";
import { CourseWizard } from "./CourseWizard";
import { formatDate } from "@/lib/utils";
import type { LearningCourse, LearningCategory } from "@/lib/learning/admin-types";

function getInitials(title: string): string {
  const words = title.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

type SortKey = "title" | "display_order" | "updated_at" | "reading_time" | "difficulty";
type SortDir = "asc" | "desc";

export function AdminLearningCourses() {
  const [courses, setCourses] = useState<LearningCourse[]>([]);
  const [categories, setCategories] = useState<LearningCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "published" | "draft">("all");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterDifficulty, setFilterDifficulty] = useState("all");
  const [sortKey, setSortKey] = useState<SortKey>("display_order");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [wizardOpen, setWizardOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<LearningCourse | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<LearningCourse | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [bulkOp, setBulkOp] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const supabase = createClient();
      // Fetch courses and categories separately to avoid PostgREST embedding ambiguity
      const [{ data: coursesData, error: coursesError }, { data: catsData, error: catsError }] = await Promise.all([
        supabase.from("learning_courses").select("*").order("display_order"),
        supabase.from("learning_categories").select("*").order("name"),
      ]);
      if (coursesError) {
        console.error("Courses fetch error - code:", coursesError.code, "msg:", coursesError.message);
        throw coursesError;
      }
      if (catsError) {
        console.error("Categories fetch error - code:", catsError.code, "msg:", catsError.message);
        throw catsError;
      }
      // Build a lookup map of categories
      const catMap: Record<string, any> = {};
      (catsData ?? []).forEach((cat: any) => { catMap[cat.id] = cat; });
      // Fetch module counts separately
      const { data: modulesData } = await supabase
        .from("learning_modules")
        .select("course_id");
      const moduleCountMap: Record<string, number> = {};
      (modulesData ?? []).forEach((m: any) => {
        if (m.course_id) moduleCountMap[m.course_id] = (moduleCountMap[m.course_id] ?? 0) + 1;
      });
      setCourses((coursesData ?? []).map((c: any) => ({
        ...c,
        category: catMap[c.category_id] ?? null,
        module_count: moduleCountMap[c.id] ?? 0,
      })));
      setCategories(catsData ?? []);
    } catch (e: any) { console.error("Error fetching courses data:", e?.message ?? e); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchData(); }, []);

  const filtered = useMemo(() => {
    let list = [...courses];
    if (search) list = list.filter(c => c.title.toLowerCase().includes(search.toLowerCase()) || c.slug.toLowerCase().includes(search.toLowerCase()));
    if (filterStatus === "published") list = list.filter(c => c.publish);
    if (filterStatus === "draft") list = list.filter(c => !c.publish);
    if (filterCategory !== "all") list = list.filter(c => c.category_id === filterCategory);
    if (filterDifficulty !== "all") list = list.filter(c => c.difficulty === filterDifficulty);
    list.sort((a, b) => {
      const av = a[sortKey as keyof LearningCourse] ?? 0;
      const bv = b[sortKey as keyof LearningCourse] ?? 0;
      const cmp = av < bv ? -1 : av > bv ? 1 : 0;
      return sortDir === "asc" ? cmp : -cmp;
    });
    return list;
  }, [courses, search, filterStatus, filterCategory, filterDifficulty, sortKey, sortDir]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("asc"); }
  };

  const toggleSelect = (id: string) =>
    setSelected(prev => { const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s; });
  const toggleSelectAll = () =>
    setSelected(selected.size === filtered.length ? new Set() : new Set(filtered.map(c => c.id)));

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    const supabase = createClient();
    await supabase.from("learning_courses").delete().eq("id", deleteTarget.id);
    setDeleteTarget(null);
    setDeleting(false);
    fetchData();
  };

  const handleDuplicate = async (c: LearningCourse) => {
    const supabase = createClient();
    const { id, created_at, updated_at, category, module_count, ...rest } = c;
    await supabase.from("learning_courses").insert({ ...rest, title: `${rest.title} (Copy)`, slug: `${rest.slug}-copy-${Date.now()}`, publish: false });
    fetchData();
  };

  const handleBulkPublish = async (pub: boolean) => {
    if (selected.size === 0) return;
    setBulkOp(pub ? "publishing" : "unpublishing");
    const supabase = createClient();
    await supabase.from("learning_courses").update({ publish: pub }).in("id", [...selected]);
    setSelected(new Set()); setBulkOp(null); fetchData();
  };

  const handleBulkDelete = async () => {
    if (selected.size === 0) return;
    if (!confirm(`Delete ${selected.size} courses?`)) return;
    setBulkOp("deleting");
    const supabase = createClient();
    await supabase.from("learning_courses").delete().in("id", [...selected]);
    setSelected(new Set()); setBulkOp(null); fetchData();
  };

  const handleExport = () => {
    const json = JSON.stringify(filtered.map(({ id, title, slug, difficulty, publish, module_count }) => ({ id, title, slug, difficulty, publish, module_count })), null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "courses.json"; a.click();
    URL.revokeObjectURL(url);
  };

  const thCls = "text-left py-3 px-3 text-white/60 font-medium text-xs uppercase tracking-wider whitespace-nowrap";
  const tdCls = "py-3 px-3 text-sm";
  const diffColorMap: Record<string, "beginner" | "intermediate" | "advanced"> = { Beginner: "beginner", Intermediate: "intermediate", Advanced: "advanced" };

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#072923] via-[#031815] to-[#010d0c] opacity-90" />
      <div className="max-w-7xl mx-auto space-y-8">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <header className="space-y-1">
            <h1 className="font-product-sans text-4xl sm:text-5xl font-normal text-white">
              Learning <span className="gradient-text">Courses</span>
            </h1>
            <p className="text-white/60 text-lg">Create and manage all learning courses</p>
          </header>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={handleExport} className="border border-white/20 text-white hover:border-white/40">
              <Download className="w-4 h-4 mr-2" /> Export JSON
            </Button>
            <Button onClick={() => { setEditTarget(null); setWizardOpen(true); }}
              className="bg-gradient-to-r from-emerald-400 to-stockstrail-green-light hover:from-emerald-300 hover:to-stockstrail-green text-[#031815] font-semibold shadow-[0_0_20px_rgba(0,255,151,0.25)] hover:shadow-[0_0_30px_rgba(0,255,151,0.5)] transition-all rounded-xl px-6">
              <Plus className="w-5 h-5 mr-2" /> Add Course
            </Button>
          </div>
        </div>

        {/* Filters */}
        <Card className="bg-white/5 border-white/10">
          <CardContent className="pt-5">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="relative flex-1 min-w-[200px]">
                <Input placeholder="Search courses..." value={search} onChange={e => setSearch(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/50 pr-10" />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              </div>
              <div className="flex gap-2">
                {(["all", "published", "draft"] as const).map(s => (
                  <button key={s} onClick={() => setFilterStatus(s)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize border transition-colors ${filterStatus === s ? "border-stockstrail-green-light text-stockstrail-green-light bg-stockstrail-green-light/10" : "border-white/10 text-white/60 hover:border-white/30"}`}>
                    {s}
                  </button>
                ))}
              </div>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-44 bg-white/5 border-white/10 text-white text-sm h-9">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent className="bg-[#031815] border-white/10">
                  <SelectItem value="all" className="text-white">All Categories</SelectItem>
                  {categories.map(c => <SelectItem key={c.id} value={c.id} className="text-white">{c.name}</SelectItem>)}
                </SelectContent>
              </Select>
              <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
                <SelectTrigger className="w-36 bg-white/5 border-white/10 text-white text-sm h-9">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent className="bg-[#031815] border-white/10">
                  <SelectItem value="all" className="text-white">All Levels</SelectItem>
                  {["Beginner", "Intermediate", "Advanced"].map(d => <SelectItem key={d} value={d} className="text-white">{d}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {selected.size > 0 && (
          <div className="flex items-center gap-3 p-4 rounded-xl border border-white/10 bg-white/5">
            <span className="text-white/70 text-sm">{selected.size} selected</span>
            <div className="flex gap-2 ml-auto">
              <Button size="sm" variant="ghost" onClick={() => handleBulkPublish(true)} disabled={!!bulkOp} className="text-green-400 hover:bg-green-500/10 border border-green-500/30">
                <Globe className="w-3 h-3 mr-1" /> Publish All
              </Button>
              <Button size="sm" variant="ghost" onClick={() => handleBulkPublish(false)} disabled={!!bulkOp} className="text-yellow-400 hover:bg-yellow-500/10 border border-yellow-500/30">
                Unpublish All
              </Button>
              <Button size="sm" variant="ghost" onClick={handleBulkDelete} disabled={!!bulkOp} className="text-red-400 hover:bg-red-500/10 border border-red-500/30">
                <Trash2 className="w-3 h-3 mr-1" /> Delete All
              </Button>
            </div>
          </div>
        )}

        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white text-xl flex items-center gap-2">
              <Filter className="w-5 h-5 text-stockstrail-green-light" /> All Courses
            </CardTitle>
            <CardDescription className="text-white/60">{filtered.length} course{filtered.length !== 1 ? "s" : ""}</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-16 text-white/50">Loading courses...</div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-16 text-white/50">No courses found. Create your first course!</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className={thCls} style={{ width: 40 }}>
                        <input type="checkbox" checked={selected.size === filtered.length && filtered.length > 0} onChange={toggleSelectAll}
                          className="w-4 h-4 rounded border-white/30 bg-white/5 accent-stockstrail-green-light" />
                      </th>
                      <th className={thCls}>Thumb</th>
                      <th className={`${thCls} cursor-pointer`} onClick={() => toggleSort("title")}>
                        <span className="flex items-center gap-1">Title <ArrowUpDown className="w-3 h-3" /></span>
                      </th>
                      <th className={thCls}>Category</th>
                      <th className={`${thCls} cursor-pointer`} onClick={() => toggleSort("difficulty")}>
                        <span className="flex items-center gap-1">Level <ArrowUpDown className="w-3 h-3" /></span>
                      </th>
                      <th className={thCls}>Modules</th>
                      <th className={`${thCls} cursor-pointer`} onClick={() => toggleSort("reading_time")}>
                        <span className="flex items-center gap-1">Time <ArrowUpDown className="w-3 h-3" /></span>
                      </th>
                      <th className={thCls}>Status</th>
                      <th className={`${thCls} cursor-pointer`} onClick={() => toggleSort("updated_at")}>
                        <span className="flex items-center gap-1">Updated <ArrowUpDown className="w-3 h-3" /></span>
                      </th>
                      <th className={`${thCls} text-right`}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map(c => (
                      <tr key={c.id} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${selected.has(c.id) ? "bg-white/[0.03]" : ""}`}>
                        <td className={tdCls}>
                          <input type="checkbox" checked={selected.has(c.id)} onChange={() => toggleSelect(c.id)}
                            className="w-4 h-4 rounded border-white/30 bg-white/5 accent-stockstrail-green-light" />
                        </td>
                        <td className={tdCls}>
                          {c.cover_image ? (
                            <div className="w-16 h-10 rounded-lg border border-white/10 bg-white/5 overflow-hidden flex items-center justify-center">
                              <img src={c.cover_image} alt={c.title} className="w-full h-full object-contain" />
                            </div>
                          ) : (
                            <div className="w-16 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-[10px] font-bold tracking-wider text-stockstrail-green-light">
                              {getInitials(c.title)}
                            </div>
                          )}
                        </td>
                        <td className={`${tdCls} max-w-[200px]`}>
                          <p className="text-white font-medium truncate">{c.title}</p>
                          <p className="text-white/40 font-mono text-[10px] truncate">{c.slug}</p>
                        </td>
                        <td className={`${tdCls} text-white/50 text-xs`}>
                          {(c.category as any)?.name ?? <span className="text-white/20">—</span>}
                        </td>
                        <td className={tdCls}>
                          <StatusBadge type={diffColorMap[c.difficulty] ?? "beginner"} label={c.difficulty} />
                        </td>
                        <td className={`${tdCls} text-white/70 text-center`}>{c.module_count ?? 0}</td>
                        <td className={`${tdCls} text-white/50 text-xs`}>{c.reading_time > 0 ? `${c.reading_time}m` : "—"}</td>
                        <td className={tdCls}>
                          <StatusBadge type={c.publish ? "published" : "draft"} />
                        </td>
                        <td className={`${tdCls} text-white/40 text-xs`}>{formatDate(c.updated_at)}</td>
                        <td className={tdCls}>
                          <div className="flex items-center justify-end gap-1">
                            <Button variant="ghost" size="sm" onClick={() => window.open(`https://www.learning.stockstrail.in/courses/${c.slug}`, "_blank")}
                              className="text-white/50 hover:text-stockstrail-green-light hover:bg-white/10 h-8 w-8 p-0">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => { setEditTarget(c); setWizardOpen(true); }}
                              className="text-white/50 hover:text-stockstrail-green-light hover:bg-white/10 h-8 w-8 p-0">
                              <Edit2 className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleDuplicate(c)}
                              className="text-white/50 hover:text-white hover:bg-white/10 h-8 w-8 p-0">
                              <Copy className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => setDeleteTarget(c)}
                              className="text-red-400 hover:text-red-300 hover:bg-red-500/10 h-8 w-8 p-0">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <CourseWizard
        open={wizardOpen}
        onOpenChange={setWizardOpen}
        course={editTarget}
        categories={categories}
        onSave={fetchData}
      />

      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={o => !o && setDeleteTarget(null)}
        title="Delete Course"
        description={`Delete "${deleteTarget?.title}"? All modules, content, and quiz questions will also be deleted.`}
        confirmLabel="Delete Course"
        loading={deleting}
        onConfirm={handleDelete}
      />
    </section>
  );
}
