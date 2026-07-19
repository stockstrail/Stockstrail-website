"use client";
import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { Plus, Trash2, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { LearningQuizQuestion, QuizQuestionFormData } from "@/lib/learning/admin-types";

interface Step4Props { courseId: string | null; }

const ic = "bg-white/5 border-white/10 text-white placeholder:text-white/40";
const lc = "text-white/70 text-sm";
const Q_TYPES = [
  { value: "mcq", label: "Multiple Choice (MCQ)" },
  { value: "true_false", label: "True / False" },
  { value: "fill_blank", label: "Fill in the Blank" },
  { value: "scenario", label: "Scenario-Based" },
];

function emptyQuestion(courseId: string, order: number): QuizQuestionFormData {
  return { course_id: courseId, question: "", question_type: "mcq", options: ["", "", "", ""], correct_answer_index: 0, correct_answer_text: null, explanation: "", display_order: order };
}

export function Step4_Quiz({ courseId }: Step4Props) {
  const [questions, setQuestions] = useState<(LearningQuizQuestion & { saving?: boolean; expanded?: boolean })[]>([]);
  const [loading, setLoading] = useState(false);

  const fetch = useCallback(async () => {
    if (!courseId) return;
    setLoading(true);
    const supabase = createClient();
    const { data } = await supabase.from("learning_quiz_questions").select("*").eq("course_id", courseId).order("display_order");
    setQuestions((data ?? []).map((q: LearningQuizQuestion) => ({ ...q, expanded: false })));
    setLoading(false);
  }, [courseId]);

  useEffect(() => { fetch(); }, [fetch]);

  const addQuestion = async () => {
    if (!courseId) return;
    const supabase = createClient();
    const empty = emptyQuestion(courseId, questions.length);
    const { data, error } = await supabase.from("learning_quiz_questions").insert(empty).select().single();
    if (!error && data) setQuestions(prev => [...prev, { ...data, expanded: true }]);
  };

  const updateQ = (id: string, updates: Partial<LearningQuizQuestion>) =>
    setQuestions(prev => prev.map(q => q.id === id ? { ...q, ...updates } : q));

  const saveQuestion = async (q: LearningQuizQuestion) => {
    setQuestions(prev => prev.map(x => x.id === q.id ? { ...x, saving: true } : x));
    const supabase = createClient();
    await supabase.from("learning_quiz_questions").update({
      question: q.question, question_type: q.question_type, options: q.options,
      correct_answer_index: q.correct_answer_index, correct_answer_text: q.correct_answer_text,
      explanation: q.explanation, display_order: q.display_order,
    }).eq("id", q.id);
    setQuestions(prev => prev.map(x => x.id === q.id ? { ...x, saving: false } : x));
  };

  const deleteQuestion = async (id: string) => {
    if (!confirm("Delete this question?")) return;
    const supabase = createClient();
    await supabase.from("learning_quiz_questions").delete().eq("id", id);
    setQuestions(prev => prev.filter(q => q.id !== id));
  };

  const toggle = (id: string) => setQuestions(prev => prev.map(q => q.id === id ? { ...q, expanded: !q.expanded } : q));

  if (!courseId) return <div className="text-center py-20 text-white/40 text-sm">Save the course first to add quiz questions.</div>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white font-medium">Quiz Questions</h3>
          <p className="text-white/50 text-xs mt-0.5">Add questions to test learner knowledge at the end of this course.</p>
        </div>
        <Button onClick={addQuestion} className="bg-gradient-to-r from-emerald-400 to-stockstrail-green-light text-[#031815] font-semibold rounded-xl text-sm">
          <Plus className="w-4 h-4 mr-1" /> Add Question
        </Button>
      </div>
      {loading && <div className="text-center py-10 text-white/40">Loading questions...</div>}
      <div className="space-y-3">
        {questions.map((q, i) => (
          <div key={q.id} className="border border-white/10 rounded-xl bg-white/[0.03]">
            <div className="flex items-center gap-3 p-4">
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/60 font-mono shrink-0">Q{i + 1}</span>
              <p className="flex-1 text-white text-sm truncate">{q.question || <span className="text-white/30">Empty question...</span>}</p>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/50 uppercase">{q.question_type}</span>
                <Button size="sm" variant="ghost" onClick={() => saveQuestion(q)} disabled={q.saving}
                  className="text-stockstrail-green-light hover:bg-white/5 text-xs h-7 px-2">
                  {q.saving ? <Loader2 className="w-3 h-3 animate-spin" /> : "Save"}
                </Button>
                <button onClick={() => deleteQuestion(q.id)} className="text-red-400 hover:text-red-300 p-1">
                  <Trash2 className="w-4 h-4" />
                </button>
                <button onClick={() => toggle(q.id)} className="text-white/40 hover:text-white p-1">
                  {q.expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
            </div>
            {q.expanded && (
              <div className="border-t border-white/10 p-4 space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label className={lc}>Question Type</Label>
                    <Select value={q.question_type} onValueChange={v => updateQ(q.id, { question_type: v as any })}>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-[#031815] border-white/10">
                        {Q_TYPES.map(t => <SelectItem key={t.value} value={t.value} className="text-white">{t.label}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className={lc}>Display Order</Label>
                    <Input type="number" value={q.display_order} onChange={e => updateQ(q.id, { display_order: parseInt(e.target.value) || 0 })} className={ic} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className={lc}>Question *</Label>
                  <Textarea rows={2} value={q.question} onChange={e => updateQ(q.id, { question: e.target.value })} className={`${ic} resize-none`} placeholder="Type the question here..." />
                </div>
                {q.question_type === "mcq" && (
                  <div className="space-y-2">
                    <Label className={lc}>Answer Options</Label>
                    {(q.options ?? ["", "", "", ""]).map((opt, oi) => (
                      <div key={oi} className="flex gap-2 items-center">
                        <input type="radio" name={`correct-${q.id}`} checked={q.correct_answer_index === oi}
                          onChange={() => updateQ(q.id, { correct_answer_index: oi })}
                          className="accent-stockstrail-green-light" title="Mark as correct" />
                        <Input value={opt} onChange={e => {
                          const opts = [...(q.options ?? [])]; opts[oi] = e.target.value;
                          updateQ(q.id, { options: opts });
                        }} className={`${ic} flex-1 text-sm`} placeholder={`Option ${oi + 1}`} />
                      </div>
                    ))}
                    <p className="text-white/30 text-xs">Select the radio button next to the correct answer.</p>
                  </div>
                )}
                {q.question_type === "true_false" && (
                  <div className="space-y-2">
                    <Label className={lc}>Correct Answer</Label>
                    <div className="flex gap-3">
                      {["True", "False"].map((opt, oi) => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                          <input type="radio" name={`tf-${q.id}`} checked={q.correct_answer_index === oi}
                            onChange={() => updateQ(q.id, { correct_answer_index: oi, options: ["True", "False"] })}
                            className="accent-stockstrail-green-light" />
                          <span className="text-white/70 text-sm">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
                {(q.question_type === "fill_blank" || q.question_type === "scenario") && (
                  <div className="space-y-2">
                    <Label className={lc}>Correct Answer (text)</Label>
                    <Input value={q.correct_answer_text ?? ""} onChange={e => updateQ(q.id, { correct_answer_text: e.target.value })} className={ic} placeholder="Expected answer..." />
                  </div>
                )}
                <div className="space-y-2">
                  <Label className={lc}>Explanation (shown after answering)</Label>
                  <Textarea rows={2} value={q.explanation ?? ""} onChange={e => updateQ(q.id, { explanation: e.target.value })} className={`${ic} resize-none text-sm`} placeholder="Explain why this is the correct answer..." />
                </div>
              </div>
            )}
          </div>
        ))}
        {questions.length === 0 && !loading && (
          <div className="text-center py-12 border border-dashed border-white/10 rounded-xl">
            <p className="text-white/40 text-sm">No questions yet. Click "Add Question" to start building the quiz.</p>
          </div>
        )}
      </div>
    </div>
  );
}
