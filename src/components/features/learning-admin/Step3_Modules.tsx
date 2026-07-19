"use client";
import { useState, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";
import { DragDropContext, Droppable, Draggable, DropResult } from "@hello-pangea/dnd";
import { createClient } from "@/lib/supabase/client";
import { Plus, GripVertical, ChevronDown, ChevronUp, Trash2, Loader2, Save, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { LearningModule } from "@/lib/learning/admin-types";

const MDEditor = dynamic(() => import("@uiw/react-md-editor").then(m => m.default), {
  ssr: false,
  loading: () => <div className="h-64 bg-white/5 rounded-xl animate-pulse" />,
});

interface Step3Props { courseId: string | null; }

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

// Each sub-topic inside a module
interface SubTopic {
  id: string; // local UUID
  title: string;
  markdown_content: string;
}

type ModuleState = LearningModule & {
  sub_topics: SubTopic[];
  dirty: boolean;
  saving: boolean;
  // legacy single content (kept for backward compat during save)
  markdown_content: string;
};

const ic = "bg-white/5 border-white/10 text-white placeholder:text-white/40";
const lc = "text-white/70 text-sm";

function genId() { return Math.random().toString(36).slice(2) + Date.now().toString(36); }

function parseSubTopics(raw: string | null | undefined): SubTopic[] {
  if (!raw) return [{ id: genId(), title: "Introduction", markdown_content: "" }];
  // Try to parse as JSON array of sub_topics
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0 && "title" in parsed[0]) {
      return parsed.map((t: any) => ({ id: t.id ?? genId(), title: t.title ?? "", markdown_content: t.markdown_content ?? "" }));
    }
  } catch {}
  // Legacy: plain markdown string → convert to single sub-topic
  return [{ id: genId(), title: "Content", markdown_content: raw }];
}

function serializeSubTopics(subTopics: SubTopic[]): string {
  return JSON.stringify(subTopics.map(({ id, title, markdown_content }) => ({ id, title, markdown_content })));
}

export function Step3_Modules({ courseId }: Step3Props) {
  const [modules, setModules] = useState<ModuleState[]>([]);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [activeSubTopic, setActiveSubTopic] = useState<Record<string, string>>({}); // moduleId -> subTopicId

  const fetchModules = useCallback(async () => {
    if (!courseId) return;
    setLoading(true);
    try {
      const supabase = createClient();
      const { data } = await supabase
        .from("learning_modules")
        .select("*, learning_module_content(markdown_content)")
        .eq("course_id", courseId)
        .order("module_order", { ascending: true });
      const mapped: ModuleState[] = (data ?? []).map((m: any) => {
        const rawContent = m.learning_module_content?.[0]?.markdown_content ?? "";
        const sub_topics = parseSubTopics(rawContent);
        return {
          ...m,
          sub_topics,
          markdown_content: rawContent,
          dirty: false,
          saving: false,
        };
      });
      setModules(mapped);
      // Set first sub-topic as active for each module
      const initialActive: Record<string, string> = {};
      mapped.forEach(m => { if (m.sub_topics.length > 0) initialActive[m.id] = m.sub_topics[0].id; });
      setActiveSubTopic(initialActive);
    } finally { setLoading(false); }
  }, [courseId]);

  useEffect(() => { fetchModules(); }, [fetchModules]);

  const addModule = async () => {
    if (!courseId) return;
    const supabase = createClient();
    const order = modules.length;
    const { data, error } = await supabase.from("learning_modules").insert({
      course_id: courseId,
      title: `Module ${order + 1}`,
      slug: `module-${order + 1}-${Date.now()}`,
      module_order: order,
      reading_time: 5,
      publish: true,
      free_preview: false,
    }).select().single();
    if (!error && data) {
      const firstSubTopic: SubTopic = { id: genId(), title: "Introduction", markdown_content: "" };
      await supabase.from("learning_module_content").insert({
        module_id: data.id,
        markdown_content: serializeSubTopics([firstSubTopic]),
      });
      const newMod: ModuleState = {
        ...data,
        sub_topics: [firstSubTopic],
        markdown_content: "",
        dirty: false,
        saving: false,
      };
      setModules(prev => [...prev, newMod]);
      setExpanded(prev => new Set([...prev, data.id]));
      setActiveSubTopic(prev => ({ ...prev, [data.id]: firstSubTopic.id }));
    }
  };

  const updateLocal = (id: string, updates: Partial<ModuleState>) =>
    setModules(prev => prev.map(m => m.id === id ? { ...m, ...updates, dirty: true } : m));

  // Add a new sub-topic to a module
  const addSubTopic = (moduleId: string) => {
    setModules(prev => prev.map(m => {
      if (m.id !== moduleId) return m;
      const newSub: SubTopic = { id: genId(), title: `Sub-topic ${m.sub_topics.length + 1}`, markdown_content: "" };
      const updated = { ...m, sub_topics: [...m.sub_topics, newSub], dirty: true };
      setActiveSubTopic(ap => ({ ...ap, [moduleId]: newSub.id }));
      return updated;
    }));
  };

  // Update a sub-topic field
  const updateSubTopic = (moduleId: string, subId: string, updates: Partial<SubTopic>) => {
    setModules(prev => prev.map(m => {
      if (m.id !== moduleId) return m;
      return {
        ...m,
        dirty: true,
        sub_topics: m.sub_topics.map(s => s.id === subId ? { ...s, ...updates } : s),
      };
    }));
  };

  // Delete a sub-topic
  const deleteSubTopic = (moduleId: string, subId: string) => {
    setModules(prev => prev.map(m => {
      if (m.id !== moduleId) return m;
      const remaining = m.sub_topics.filter(s => s.id !== subId);
      if (remaining.length === 0) return m; // never allow 0 sub-topics
      const updated = { ...m, sub_topics: remaining, dirty: true };
      setActiveSubTopic(ap => {
        const current = ap[moduleId];
        if (current === subId) return { ...ap, [moduleId]: remaining[0].id };
        return ap;
      });
      return updated;
    }));
  };

  // Reorder sub-topics via drag
  const onSubTopicDragEnd = (moduleId: string, result: DropResult) => {
    if (!result.destination) return;
    setModules(prev => prev.map(m => {
      if (m.id !== moduleId) return m;
      const reordered = Array.from(m.sub_topics);
      const [moved] = reordered.splice(result.source.index, 1);
      reordered.splice(result.destination!.index, 0, moved);
      return { ...m, sub_topics: reordered, dirty: true };
    }));
  };

  const saveModule = async (mod: ModuleState) => {
    const supabase = createClient();
    setModules(prev => prev.map(m => m.id === mod.id ? { ...m, saving: true } : m));
    await supabase.from("learning_modules").update({
      title: mod.title, slug: mod.slug, summary: mod.summary,
      reading_time: mod.reading_time, module_order: mod.module_order,
      publish: mod.publish, free_preview: mod.free_preview, icon: mod.icon,
      updated_at: new Date().toISOString(),
    }).eq("id", mod.id);
    // Save sub-topics as serialized JSON in markdown_content
    const serialized = serializeSubTopics(mod.sub_topics);
    const { data: existing } = await supabase.from("learning_module_content").select("id").eq("module_id", mod.id).single();
    if (existing) {
      await supabase.from("learning_module_content").update({ markdown_content: serialized, updated_at: new Date().toISOString() }).eq("module_id", mod.id);
    } else {
      await supabase.from("learning_module_content").insert({ module_id: mod.id, markdown_content: serialized });
    }
    setModules(prev => prev.map(m => m.id === mod.id ? { ...m, dirty: false, saving: false } : m));
  };

  const deleteModule = async (id: string) => {
    if (!confirm("Delete this module and all its content?")) return;
    const supabase = createClient();
    await supabase.from("learning_modules").delete().eq("id", id);
    setModules(prev => prev.filter(m => m.id !== id));
  };

  const onDragEnd = async (result: DropResult) => {
    if (!result.destination) return;
    const reordered = Array.from(modules);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    const updated = reordered.map((m, i) => ({ ...m, module_order: i }));
    setModules(updated);
    const supabase = createClient();
    await Promise.all(updated.map(m => supabase.from("learning_modules").update({ module_order: m.module_order }).eq("id", m.id)));
  };

  const toggleExpand = (id: string) =>
    setExpanded(prev => { const s = new Set(prev); s.has(id) ? s.delete(id) : s.add(id); return s; });

  if (!courseId) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <p className="text-white/50 text-sm">Save the course in Step 1 first to start adding modules.</p>
        <p className="text-white/30 text-xs mt-2">Modules require a saved course to attach to.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white font-medium">Course Modules</h3>
          <p className="text-white/50 text-xs mt-0.5">Drag to reorder modules. Each module can have multiple sub-topics.</p>
        </div>
        <Button onClick={addModule} className="bg-gradient-to-r from-emerald-400 to-stockstrail-green-light text-[#031815] font-semibold rounded-xl text-sm">
          <Plus className="w-4 h-4 mr-1" /> Add Module
        </Button>
      </div>

      {loading && <div className="text-center py-10 text-white/40">Loading modules...</div>}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="modules">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-3">
              {modules.map((mod, index) => (
                <Draggable key={mod.id} draggableId={mod.id} index={index}>
                  {(dp, snapshot) => (
                    <div ref={dp.innerRef} {...dp.draggableProps}
                      className={`rounded-xl border transition-colors ${snapshot.isDragging ? "border-stockstrail-green-light/50 bg-[#072923]" : "border-white/10 bg-white/[0.03]"}`}>
                      {/* Module Header */}
                      <div className="flex items-center gap-3 p-4">
                        <div {...dp.dragHandleProps} className="text-white/30 hover:text-white/60 cursor-grab active:cursor-grabbing">
                          <GripVertical className="w-5 h-5" />
                        </div>
                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/60 font-mono shrink-0">{index + 1}</span>
                        <input
                          className="flex-1 bg-transparent text-white font-medium outline-none placeholder:text-white/30 text-sm"
                          value={mod.title}
                          onChange={e => updateLocal(mod.id, { title: e.target.value, slug: slugify(e.target.value) })}
                          placeholder="Module title..."
                        />
                        <span className="text-white/30 text-xs shrink-0">{mod.sub_topics.length} sub-topic{mod.sub_topics.length !== 1 ? "s" : ""}</span>
                        <div className="flex items-center gap-2 shrink-0">
                          {mod.dirty && (
                            <Button size="sm" variant="ghost" onClick={() => saveModule(mod)} disabled={mod.saving}
                              className="text-stockstrail-green-light hover:bg-white/5 text-xs h-7 px-2">
                              {mod.saving ? <Loader2 className="w-3 h-3 animate-spin" /> : <Save className="w-3 h-3 mr-1" />}
                              {mod.saving ? "" : "Save"}
                            </Button>
                          )}
                          <button onClick={() => deleteModule(mod.id)} className="text-red-400 hover:text-red-300 p-1">
                            <Trash2 className="w-4 h-4" />
                          </button>
                          <button onClick={() => toggleExpand(mod.id)} className="text-white/40 hover:text-white p-1">
                            {expanded.has(mod.id) ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {/* Expanded Content */}
                      {expanded.has(mod.id) && (
                        <div className="border-t border-white/10 p-4 space-y-4">
                          {/* Module meta fields */}
                          <div className="grid gap-4 md:grid-cols-3">
                            <div className="space-y-1">
                              <Label className={lc}>Slug</Label>
                              <Input value={mod.slug} onChange={e => updateLocal(mod.id, { slug: e.target.value })} className={`${ic} text-xs`} />
                            </div>
                            <div className="space-y-1">
                              <Label className={lc}>Reading Time (min)</Label>
                              <Input type="number" value={mod.reading_time} onChange={e => updateLocal(mod.id, { reading_time: parseInt(e.target.value) || 0 })} className={`${ic} text-xs`} />
                            </div>
                            <div className="space-y-1">
                              <Label className={lc}>Icon</Label>
                              <Input value={mod.icon ?? ""} onChange={e => updateLocal(mod.id, { icon: e.target.value })} className={`${ic} text-xs`} placeholder="📚 or URL" />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <Label className={lc}>Summary</Label>
                            <Textarea rows={2} value={mod.summary ?? ""} onChange={e => updateLocal(mod.id, { summary: e.target.value })} className={`${ic} resize-none text-sm`} placeholder="Brief module summary..." />
                          </div>
                          <div className="flex gap-4">
                            {(["publish", "free_preview"] as const).map(key => (
                              <label key={key} className="flex items-center gap-2 cursor-pointer">
                                <div className={`w-9 h-5 rounded-full border-2 relative transition-colors ${mod[key] ? "bg-stockstrail-green-light border-stockstrail-green-light" : "bg-white/10 border-white/20"}`}
                                  onClick={() => updateLocal(mod.id, { [key]: !mod[key] })}>
                                  <span className={`absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-white transition-transform ${mod[key] ? "translate-x-4" : "translate-x-0"}`} />
                                </div>
                                <span className="text-white/60 text-xs capitalize">{key.replace("_", " ")}</span>
                              </label>
                            ))}
                          </div>

                          {/* ── Sub-topics section ── */}
                          <div className="space-y-3 pt-2">
                            <div className="flex items-center justify-between">
                              <Label className="text-white/80 text-sm font-medium">Sub-topics</Label>
                              <Button size="sm" variant="ghost"
                                onClick={() => addSubTopic(mod.id)}
                                className="text-stockstrail-green-light hover:bg-white/5 border border-stockstrail-green-light/30 rounded-lg text-xs h-7 px-3">
                                <Plus className="w-3 h-3 mr-1" /> Add Sub-topic
                              </Button>
                            </div>

                            {/* Sub-topic tabs */}
                            <DragDropContext onDragEnd={(r) => onSubTopicDragEnd(mod.id, r)}>
                              <div className="flex flex-col gap-3">
                                {/* Tab list */}
                                <Droppable droppableId={`subtopics-${mod.id}`} direction="horizontal">
                                  {(sp) => (
                                    <div {...sp.droppableProps} ref={sp.innerRef}
                                      className="flex flex-wrap gap-2 min-h-[36px]">
                                      {mod.sub_topics.map((sub, si) => (
                                        <Draggable key={sub.id} draggableId={sub.id} index={si}>
                                          {(sdp, ss) => (
                                            <div
                                              ref={sdp.innerRef} {...sdp.draggableProps}
                                              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-all
                                                ${activeSubTopic[mod.id] === sub.id
                                                  ? "bg-stockstrail-green-light/20 border-stockstrail-green-light/50 text-stockstrail-green-light"
                                                  : "bg-white/5 border-white/10 text-white/50 hover:border-white/30 hover:text-white/80"}
                                                ${ss.isDragging ? "opacity-75 scale-95" : ""}`}
                                              onClick={() => setActiveSubTopic(ap => ({ ...ap, [mod.id]: sub.id }))}
                                            >
                                              <span {...sdp.dragHandleProps} className="cursor-grab" onClick={e => e.stopPropagation()}>
                                                <GripVertical className="w-3 h-3 opacity-50" />
                                              </span>
                                              <FileText className="w-3 h-3" />
                                              <span className="max-w-[120px] truncate">{sub.title || `Sub-topic ${si + 1}`}</span>
                                              {mod.sub_topics.length > 1 && (
                                                <button
                                                  onClick={e => { e.stopPropagation(); deleteSubTopic(mod.id, sub.id); }}
                                                  className="ml-1 text-red-400/70 hover:text-red-300 rounded"
                                                >×</button>
                                              )}
                                            </div>
                                          )}
                                        </Draggable>
                                      ))}
                                      {sp.placeholder}
                                    </div>
                                  )}
                                </Droppable>

                                {/* Active sub-topic editor */}
                                {mod.sub_topics.map(sub => (
                                  activeSubTopic[mod.id] === sub.id && (
                                    <div key={sub.id} className="space-y-3 rounded-xl border border-white/10 bg-white/[0.02] p-4">
                                      <div className="space-y-1">
                                        <Label className={lc}>Sub-topic Title</Label>
                                        <Input
                                          value={sub.title}
                                          onChange={e => updateSubTopic(mod.id, sub.id, { title: e.target.value })}
                                          className={`${ic} text-sm`}
                                          placeholder="e.g. What is inflation?"
                                        />
                                      </div>
                                      <div className="space-y-2">
                                        <Label className={lc}>Content (Markdown)</Label>
                                        <div data-color-mode="dark" className="rounded-xl overflow-hidden">
                                          <MDEditor
                                            value={sub.markdown_content}
                                            onChange={v => updateSubTopic(mod.id, sub.id, { markdown_content: v ?? "" })}
                                            height={380}
                                            preview="live"
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  )
                                ))}
                              </div>
                            </DragDropContext>
                          </div>

                          <div className="flex justify-end pt-2">
                            <Button onClick={() => saveModule(mod)} disabled={mod.saving}
                              className="bg-gradient-to-r from-emerald-400 to-stockstrail-green-light text-[#031815] font-semibold rounded-xl text-sm">
                              {mod.saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
                              Save Module
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {modules.length === 0 && !loading && (
        <div className="text-center py-12 border border-dashed border-white/10 rounded-xl">
          <p className="text-white/40 text-sm">No modules yet. Click "Add Module" to create the first one.</p>
        </div>
      )}
    </div>
  );
}
