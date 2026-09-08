"use client";

import React, { useState, useEffect } from "react";
import { Bookmark, BookmarkCheck, Share2, Check, MessageCircle, Send, Linkedin, Twitter, Copy } from "lucide-react";

interface ArticleActionBarProps {
  slug: string;
  title: string;
  url: string;
  readTimeMinutes: number;
  category: string;
}

export default function ArticleActionBar({
  slug,
  title,
  url,
  readTimeMinutes,
  category,
}: ArticleActionBarProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("stockstrail_saved_articles") || "[]");
      setIsBookmarked(saved.includes(slug));
    } catch {
      // safe fallback
    }
  }, [slug]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const toggleBookmark = () => {
    try {
      const saved: string[] = JSON.parse(localStorage.getItem("stockstrail_saved_articles") || "[]");
      let updated: string[];
      if (saved.includes(slug)) {
        updated = saved.filter((s) => s !== slug);
        setIsBookmarked(false);
        showToast("Article removed from your saved list");
      } else {
        updated = [...saved, slug];
        setIsBookmarked(true);
        showToast("★ Saved to your reading list!");
      }
      localStorage.setItem("stockstrail_saved_articles", JSON.stringify(updated));
    } catch {
      setIsBookmarked(!isBookmarked);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      showToast("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="relative my-6 py-3 px-4 sm:px-6 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md flex flex-wrap items-center justify-between gap-4">
      {/* Toast popup */}
      {toastMessage && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-emerald-500 text-black font-bold text-xs shadow-[0_0_20px_rgba(0,255,151,0.4)] transition-all animate-in fade-in slide-in-from-bottom-2 z-50 pointer-events-none">
          {toastMessage}
        </div>
      )}

      {/* Left: Metadata pills */}
      <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
        <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-300">
          {category}
        </span>
        <span className="text-xs text-white/50 font-mono">
          ⏱️ {readTimeMinutes} min read
        </span>
      </div>

      {/* Right: Interactive actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Bookmark Button */}
        <button
          onClick={toggleBookmark}
          aria-label="Save Article"
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
            isBookmarked
              ? "bg-[#00ff97] text-black shadow-[0_0_15px_rgba(0,255,151,0.4)]"
              : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
          }`}
        >
          {isBookmarked ? (
            <>
              <BookmarkCheck className="w-3.5 h-3.5" />
              <span>Saved</span>
            </>
          ) : (
            <>
              <Bookmark className="w-3.5 h-3.5 text-stockstrail-green" />
              <span>Save</span>
            </>
          )}
        </button>

        {/* WhatsApp Share */}
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className="p-2 rounded-full bg-white/10 text-white hover:bg-[#25D366] hover:text-black transition-all"
          title="Share on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5" />
        </a>

        {/* Telegram Share */}
        <a
          href={`https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on Telegram"
          className="p-2 rounded-full bg-white/10 text-white hover:bg-[#229ED9] hover:text-white transition-all"
          title="Share on Telegram"
        >
          <Send className="w-3.5 h-3.5" />
        </a>

        {/* LinkedIn Share */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share on LinkedIn"
          className="p-2 rounded-full bg-white/10 text-white hover:bg-[#0A66C2] hover:text-white transition-all hidden sm:inline-flex"
          title="Share on LinkedIn"
        >
          <Linkedin className="w-3.5 h-3.5" />
        </a>

        {/* Copy Link */}
        <button
          onClick={handleCopy}
          aria-label="Copy Link"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-white hover:bg-stockstrail-green hover:text-black transition-all text-xs font-semibold border border-white/10"
          title="Copy Link"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
    </div>
  );
}
