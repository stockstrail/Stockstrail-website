"use client";

import React, { useState } from "react";
import { ThumbsUp, ThumbsDown, Heart, CheckCircle2, MessageSquare } from "lucide-react";

interface ArticleFeedbackProps {
  postTitle: string;
}

export default function ArticleFeedback({ postTitle }: ArticleFeedbackProps) {
  const [voted, setVoted] = useState<"up" | "down" | null>(null);

  const handleVote = (type: "up" | "down") => {
    setVoted(type);
  };

  return (
    <div className="my-10 p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 text-center space-y-4 not-prose">
      {voted ? (
        <div className="space-y-2 animate-in fade-in zoom-in-95 duration-300">
          <div className="w-10 h-10 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold text-white font-product-sans">
            Thank you for your feedback!
          </h4>
          <p className="text-xs text-slate-300 max-w-sm mx-auto font-work-sans">
            Your input helps our certified research team create higher quality, jargon-free financial guides.
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white font-product-sans">
              Was this guide helpful to your financial planning?
            </h4>
            <p className="text-xs text-white/60 font-work-sans">
              Help us improve our editorial research and investment analysis
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 pt-1">
            <button
              onClick={() => handleVote("up")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500/15 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(0,255,151,0.1)]"
            >
              <ThumbsUp className="w-4 h-4" />
              <span>Yes, very clear</span>
            </button>
            <button
              onClick={() => handleVote("down")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 text-xs font-semibold transition-all hover:scale-105 active:scale-95"
            >
              <ThumbsDown className="w-4 h-4" />
              <span>Could be better</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
