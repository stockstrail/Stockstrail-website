"use client";
import { useState, useEffect, useMemo } from "react";
import { createClient } from "@/lib/supabase/client";
import { Plus, Search, Edit2, Trash2, Eye, Copy, ArrowUpDown, Globe, Star, Home, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { StatusBadge } from "./shared/StatusBadge";
import { ConfirmDialog } from "./shared/ConfirmDialog";
import { CategoryFormModal } from "./CategoryFormModal";
import { formatDate } from "@/lib/utils";
import type { LearningCategory } from "@/lib/learning/admin-types";

function getInitials(title: string): string {
  const words = title.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "";
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

type SortKey = "name" | "display_order" | "updated_at" | "course_count";
type SortDir = "asc" | "desc";

export function AdminLearningCategories() {
  const [categories, setCategories] = useState<LearningCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "published" | "draft">("all");
  const [filterFeatured, setFilterFeatured] = useState(false);
  const [sortKey, setSortKey] = useState<SortKey>("display_order");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [formOpen, setFormOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<LearningCategory | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<LearningCategory | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [bulkOp, setBulkOp] = useState<string | null>(null);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("learning_categories")
        .select("*, learning_courses(count)")
        .order("display_order", { ascending: true });
      if (error) throw error;
      const mapped = (data ?? []).map((c: any) => ({
        ...c,
        course_count: c.learning_courses?.[0]?.count ?? 0,
      }));
      setCategories(mapped);
    } catch (e) {
      console.error("Error fetching categories:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchCategories(); }, []);

  const filtered = useMemo(() => {
    let list = [...categories];
    if (search) list = list.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.slug.toLowerCase().includes(search.toLowerCase()));
    if (filterStatus === "published") list = list.filter(c => c.publish);
    if (filterStatus === "draft") list = list.filter(c => !c.publish);
    if (filterFeatured) list = list.filter(c => c.featured);
    list.sort((a, b) => {
      const av = a[sortKey as keyof LearningCategory] ?? 0;
      const bv = b[sortKey as keyof LearningCategory] ?? 0;
      const cmp = av < bv ? -1 : av > bv ? 1 : 0;
      return sortDir === "asc" ? cmp : -cmp;
    });
    return list;
  }, [categories, search, filterStatus, filterFeatured, sortKey, sortDir]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortKey(key); setSortDir("asc"); }
  };

  const toggleSelect = (id: string) => {
    setSelected(prev => { const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s; });
  };
  const toggleSelectAll = () => {
    setSelected(selected.size === filtered.length ? new Set() : new Set(filtered.map(c => c.id)));
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      const supabase = createClient();
      await supabase.from("learning_categories").delete().eq("id", deleteTarget.id);
      setDeleteTarget(null);
      fetchCategories();
    } catch (e) { console.error(e); }
    finally { setDeleting(false); }
  };

  const handleDuplicate = async (cat: LearningCategory) => {
    const supabase = createClient();
    const { id, created_at, updated_at, course_count, ...rest } = cat;
    await supabase.from("learning_categories").insert({
      ...rest,
      name: `${rest.name} (Copy)`,
      slug: `${rest.slug}-copy-${Date.now()}`,
      publish: false,
    });
    fetchCategories();
  };

  const handleBulkPublish = async (pub: boolean) => {
    if (selected.size === 0) return;
    setBulkOp(pub ? "publishing" : "unpublishing");
    const supabase = createClient();
    await supabase.from("learning_categories").update({ publish: pub }).in("id", [...selected]);
    setSelected(new Set());
    setBulkOp(null);
    fetchCategories();
  };

  const handleBulkDelete = async () => {
    if (selected.size === 0) return;
    if (!confirm(`Delete ${selected.size} categories? This cannot be undone.`)) return;
    setBulkOp("deleting");
    const supabase = createClient();
    await supabase.from("learning_categories").delete().in("id", [...selected]);
    setSelected(new Set());
    setBulkOp(null);
    fetchCategories();
  };

  const thCls = "text-left py-3 px-3 text-white/60 font-medium text-xs uppercase tracking-wider whitespace-nowrap";
  const tdCls = "py-3 px-3 text-sm";

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#072923] via-[#031815] to-[#010d0c] opacity-90" />
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <header className="space-y-1">
            <h1 className="font-product-sans text-4xl sm:text-5xl font-normal text-white">
              Learning <span className="gradient-text">Categories</span>
            </h1>
            <p className="text-white/60 text-lg">Organise your learning content into categories</p>
          </header>
          <Button onClick={() => { setEditTarget(null); setFormOpen(true); }}
            className="bg-gradient-to-r from-emerald-400 to-stockstrail-green-light hover:from-emerald-300 hover:to-stockstrail-green text-[#031815] font-semibold shadow-[0_0_20px_rgba(0,255,151,0.25)] hover:shadow-[0_0_30px_rgba(0,255,151,0.5)] transition-all rounded-xl px-6">
            <Plus className="w-5 h-5 mr-2" /> Add Category
          </Button>
        </div>

        {/* Filters */}
        <Card className="bg-white/5 border-white/10">
          <CardContent className="pt-5">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="relative flex-1 min-w-[200px]">
                <Input placeholder="Search categories..." value={search} onChange={e => setSearch(e.target.value)}
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
              <button onClick={() => setFilterFeatured(f => !f)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${filterFeatured ? "border-blue-400 text-blue-400 bg-blue-500/10" : "border-white/10 text-white/60 hover:border-white/30"}`}>
                <Star className="w-3 h-3" /> Featured
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Bulk Actions */}
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

        {/* Table */}
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white text-xl flex items-center gap-2">
              <Filter className="w-5 h-5 text-stockstrail-green-light" /> All Categories
            </CardTitle>
            <CardDescription className="text-white/60">{filtered.length} categor{filtered.length !== 1 ? "ies" : "y"}</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-16 text-white/50">Loading categories...</div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-16 text-white/50">No categories found. Create your first one!</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className={thCls} style={{ width: 40 }}>
                        <input type="checkbox" checked={selected.size === filtered.length && filtered.length > 0} onChange={toggleSelectAll}
                          className="w-4 h-4 rounded border-white/30 bg-white/5 accent-stockstrail-green-light" />
                      </th>
                      <th className={thCls}>Image</th>
                      <th className={`${thCls} cursor-pointer`} onClick={() => toggleSort("name")}>
                        <span className="flex items-center gap-1">Name <ArrowUpDown className="w-3 h-3" /></span>
                      </th>
                      <th className={thCls}>Slug</th>
                      <th className={`${thCls} cursor-pointer`} onClick={() => toggleSort("course_count")}>
                        <span className="flex items-center gap-1">Courses <ArrowUpDown className="w-3 h-3" /></span>
                      </th>
                      <th className={`${thCls} cursor-pointer`} onClick={() => toggleSort("display_order")}>
                        <span className="flex items-center gap-1">Order <ArrowUpDown className="w-3 h-3" /></span>
                      </th>
                      <th className={thCls}>Status</th>
                      <th className={thCls}>Flags</th>
                      <th className={`${thCls} cursor-pointer`} onClick={() => toggleSort("updated_at")}>
                        <span className="flex items-center gap-1">Updated <ArrowUpDown className="w-3 h-3" /></span>
                      </th>
                      <th className={`${thCls} text-right`}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map(cat => (
                      <tr key={cat.id} className={`border-b border-white/5 hover:bg-white/5 transition-colors ${selected.has(cat.id) ? "bg-white/[0.03]" : ""}`}>
                        <td className={tdCls}>
                          <input type="checkbox" checked={selected.has(cat.id)} onChange={() => toggleSelect(cat.id)}
                            className="w-4 h-4 rounded border-white/30 bg-white/5 accent-stockstrail-green-light" />
                        </td>
                        <td className={tdCls}>
                          {cat.thumbnail ? (
                            <img src={cat.thumbnail} alt={cat.name} className="w-10 h-10 rounded-lg object-cover border border-white/10" />
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-xs font-semibold tracking-wider text-stockstrail-green-light">
                              {cat.icon || getInitials(cat.name)}
                            </div>
                          )}
                        </td>
                        <td className={`${tdCls} text-white font-medium max-w-[180px]`}>
                          <p className="truncate">{cat.name}</p>
                          {cat.short_description && <p className="text-white/40 text-xs truncate">{cat.short_description}</p>}
                        </td>
                        <td className={`${tdCls} text-white/50 font-mono text-xs`}>{cat.slug}</td>
                        <td className={`${tdCls} text-white/70 text-center`}>{cat.course_count ?? 0}</td>
                        <td className={`${tdCls} text-white/70 text-center`}>{cat.display_order}</td>
                        <td className={tdCls}>
                          <StatusBadge type={cat.publish ? "published" : "draft"} />
                        </td>
                        <td className={tdCls}>
                          <div className="flex gap-1">
                            {cat.featured && <StatusBadge type="featured" label="★" />}
                            {cat.show_on_homepage && <StatusBadge type="homepage" label="HP" />}
                          </div>
                        </td>
                        <td className={`${tdCls} text-white/40 text-xs`}>{formatDate(cat.updated_at)}</td>
                        <td className={tdCls}>
                          <div className="flex items-center justify-end gap-1">
                            <Button variant="ghost" size="sm" onClick={() => window.open(`https://learning.stockstrail.in/categories/${cat.slug}`, "_blank")}
                              className="text-white/50 hover:text-stockstrail-green-light hover:bg-white/10 h-8 w-8 p-0" title="Preview">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => { setEditTarget(cat); setFormOpen(true); }}
                              className="text-white/50 hover:text-stockstrail-green-light hover:bg-white/10 h-8 w-8 p-0" title="Edit">
                              <Edit2 className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => handleDuplicate(cat)}
                              className="text-white/50 hover:text-white hover:bg-white/10 h-8 w-8 p-0" title="Duplicate">
                              <Copy className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm" onClick={() => setDeleteTarget(cat)}
                              className="text-red-400 hover:text-red-300 hover:bg-red-500/10 h-8 w-8 p-0" title="Delete">
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

      <CategoryFormModal
        open={formOpen}
        onOpenChange={setFormOpen}
        category={editTarget}
        onSave={fetchCategories}
      />

      <ConfirmDialog
        open={!!deleteTarget}
        onOpenChange={o => !o && setDeleteTarget(null)}
        title="Delete Category"
        description={`Are you sure you want to delete "${deleteTarget?.name}"? All courses in this category will lose their category association.`}
        confirmLabel="Delete Category"
        loading={deleting}
        onConfirm={handleDelete}
      />
    </section>
  );
}
