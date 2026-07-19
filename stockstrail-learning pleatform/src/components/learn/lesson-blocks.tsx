import { useState } from "react";
import type { LessonBlock, QuizQuestion, FAQ } from "@/lib/courses";

const CALLOUT_STYLE: Record<string, { border: string; bg: string; label: string; icon: string }> = {
  tip: { border: "border-[color:var(--color-brand-green)]/40", bg: "bg-[color:var(--color-brand-green)]/[0.06]", label: "Tip", icon: "★" },
  warning: { border: "border-amber-400/40", bg: "bg-amber-400/[0.06]", label: "Warning", icon: "!" },
  note: { border: "border-sky-400/40", bg: "bg-sky-400/[0.06]", label: "Note", icon: "i" },
  mistake: { border: "border-rose-400/40", bg: "bg-rose-400/[0.06]", label: "Common mistake", icon: "×" },
};

export function BlockRenderer({ block }: { block: LessonBlock }) {
  switch (block.type) {
    case "p":
      return <p>{block.text}</p>;
    case "h3":
      return <h3>{block.text}</h3>;
    case "list":
      return <ul>{block.items.map((it, i) => <li key={i}>{it}</li>)}</ul>;
    case "ordered":
      return <ol>{block.items.map((it, i) => <li key={i}>{it}</li>)}</ol>;
    case "callout": {
      const s = CALLOUT_STYLE[block.variant];
      return (
        <div className={`not-prose my-6 rounded-xl border ${s.border} ${s.bg} p-5 flex gap-4`}>
          <div className="shrink-0 w-8 h-8 rounded-lg bg-white/5 border border-[color:var(--color-brand-border)] flex items-center justify-center text-sm font-bold text-white">{s.icon}</div>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-white/60 font-semibold">{s.label}</div>
            <div className="mt-1 text-white font-semibold">{block.title}</div>
            <p className="mt-1 text-sm text-white/75 leading-relaxed">{block.text}</p>
          </div>
        </div>
      );
    }
    case "definition":
      return (
        <div className="not-prose my-6 rounded-xl border border-[color:var(--color-brand-border)] bg-white/[0.03] p-5">
          <div className="text-[11px] uppercase tracking-wider text-[color:var(--color-brand-green)] font-semibold">Definition</div>
          <div className="mt-1 text-white font-semibold text-lg">{block.term}</div>
          <p className="mt-1 text-white/75 text-sm leading-relaxed">{block.text}</p>
        </div>
      );
    case "table":
      return (
        <div className="my-6 overflow-x-auto rounded-xl border border-[color:var(--color-brand-border)]">
          <table>
            <thead><tr>{block.headers.map((h, i) => <th key={i}>{h}</th>)}</tr></thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri}>{row.map((cell, ci) => <td key={ci}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "formula":
      return (
        <div className="not-prose my-6 rounded-xl border border-[color:var(--color-brand-green)]/30 p-5" style={{ background: "linear-gradient(135deg, rgba(0,255,151,0.06), rgba(0,125,66,0.02))" }}>
          <div className="text-[11px] uppercase tracking-wider text-[color:var(--color-brand-green)] font-semibold">{block.title}</div>
          <div className="mt-2 font-display font-semibold text-white text-lg sm:text-xl" style={{ fontFamily: "var(--font-display)" }}>
            {block.formula}
          </div>
          {block.text && <p className="mt-2 text-sm text-white/70 leading-relaxed">{block.text}</p>}
        </div>
      );
    case "quote":
      return (
        <blockquote className="not-prose my-6 border-l-2 border-[color:var(--color-brand-green)] pl-5 py-2">
          <p className="text-lg text-white/90 italic leading-relaxed">“{block.text}”</p>
          {block.author && <footer className="mt-2 text-xs text-white/50">— {block.author}</footer>}
        </blockquote>
      );
    case "video":
      return (
        <div className="not-prose my-6 aspect-video rounded-xl overflow-hidden border border-[color:var(--color-brand-border)] bg-black">
          <iframe src={block.url} title={block.title || "Video"} loading="lazy" allowFullScreen className="w-full h-full" />
        </div>
      );
  }
}

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="rounded-2xl border border-[color:var(--color-brand-border)] divide-y divide-[color:var(--color-brand-border)] bg-white/[0.02]">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left group"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="text-white font-medium group-hover:text-[color:var(--color-brand-green)] transition-colors">{f.q}</span>
              <span className={`shrink-0 w-6 h-6 rounded-full border border-[color:var(--color-brand-border)] flex items-center justify-center text-[color:var(--color-brand-green)] transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
            </button>
            {isOpen && <div className="px-5 pb-5 -mt-1 text-sm text-white/70 leading-relaxed">{f.a}</div>}
          </div>
        );
      })}
    </div>
  );
}

export function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  return (
    <div className="space-y-6">
      {questions.map((q, i) => {
        const chosen = answers[i];
        const isChecked = checked[i];
        const isCorrect = chosen === q.answerIndex;
        return (
          <div key={i} className="rounded-2xl border border-[color:var(--color-brand-border)] bg-white/[0.02] p-5">
            <div className="flex items-start gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-[color:var(--color-brand-green)]/15 text-[color:var(--color-brand-green)] font-semibold text-sm flex items-center justify-center">{i + 1}</span>
              <p className="text-white font-medium">{q.q}</p>
            </div>
            <div className="mt-4 grid gap-2">
              {q.options.map((opt, oi) => {
                const selected = chosen === oi;
                const correctOne = isChecked && oi === q.answerIndex;
                const wrongOne = isChecked && selected && oi !== q.answerIndex;
                return (
                  <button
                    key={oi}
                    type="button"
                    onClick={() => { if (!isChecked) setAnswers((a) => ({ ...a, [i]: oi })); }}
                    className={`text-left rounded-xl border px-4 py-3 text-sm transition-all ${
                      correctOne ? "border-[color:var(--color-brand-green)] bg-[color:var(--color-brand-green)]/10 text-white" :
                      wrongOne ? "border-rose-400/60 bg-rose-400/10 text-white" :
                      selected ? "border-white/40 bg-white/[0.05] text-white" :
                      "border-[color:var(--color-brand-border)] text-white/80 hover:border-white/30"
                    }`}
                  >
                    <span className="inline-block w-6 text-white/50 font-semibold">{String.fromCharCode(65 + oi)}.</span>
                    {opt}
                  </button>
                );
              })}
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              {isChecked ? (
                <p className={`text-sm ${isCorrect ? "text-[color:var(--color-brand-green)]" : "text-rose-300"}`}>
                  {isCorrect ? "Correct." : "Not quite."} {q.explanation}
                </p>
              ) : <span className="text-xs text-white/50">Select an answer and check.</span>}
              {!isChecked ? (
                <button
                  type="button"
                  disabled={chosen === undefined}
                  onClick={() => setChecked((c) => ({ ...c, [i]: true }))}
                  className="text-xs font-semibold rounded-full bg-[color:var(--color-brand-green)] text-[color:var(--color-brand-bg)] px-4 py-2 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Check
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => { setChecked((c) => { const n = { ...c }; delete n[i]; return n; }); setAnswers((a) => { const n = { ...a }; delete n[i]; return n; }); }}
                  className="text-xs font-medium rounded-full border border-[color:var(--color-brand-border)] text-white/80 px-4 py-2 hover:border-white/40"
                >
                  Try again
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
