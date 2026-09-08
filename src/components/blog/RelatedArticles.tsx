import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { ArrowRight, Calculator, Sparkles, TrendingUp } from "lucide-react";

interface RelatedPost {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  image_url?: string;
  created_at: string;
}

const LOCAL_BLOG_COVERS: Record<string, string> = {
  "why-is-the-market-down-a-salaried-employee-s-action-guide": "/blog/why-is-the-market-down.jpg",
  "sebi-mutual-fund-nomination-rule-september-2026": "/blog/sebi-mutual-fund-nomination-rule-september-2026.jpg",
  "the-financial-story-of-himachal-pradesh-s-emplyoee": "/blog/the-financial-story-of-himachal-pradesh-s-emplyoee.jpg",
};

export default function RelatedArticles({
  posts,
  currentSlug,
}: {
  posts: RelatedPost[];
  currentSlug: string;
}) {
  const filteredPosts = posts.filter((p) => p.slug !== currentSlug).slice(0, 3);

  if (filteredPosts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-white/10 not-prose">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <span className="text-[#00ff97] font-mono text-xs uppercase tracking-wider font-bold">
            Continue Reading
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-product-sans text-white mt-1">
            Related Financial Insights
          </h3>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 hover:bg-[#00ff97] text-white hover:text-black text-xs font-semibold transition-all duration-300 border border-white/15"
        >
          <span>View all articles</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredPosts.map((post) => {
          const cover = LOCAL_BLOG_COVERS[post.slug] || post.image_url;
          return (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-[#041a17]/90 rounded-2xl overflow-hidden border border-emerald-500/25 hover:border-[#00ff97]/70 hover:shadow-[0_8px_35px_rgba(0,255,151,0.2)] transition-all duration-300 flex flex-col"
            >
              <div className="w-full aspect-[16/9] relative bg-[#02110e] overflow-hidden">
                {cover ? (
                  <Image
                    src={cover}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-950 to-[#02110e]">
                    <Sparkles className="w-6 h-6 text-[#00ff97]" />
                  </div>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <h4 className="text-sm font-semibold font-product-sans text-white group-hover:text-[#00ff97] transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h4>
                <div className="flex items-center justify-between text-[11px] text-white/50 pt-2 border-t border-white/10 font-work-sans">
                  <span>{format(new Date(post.created_at), "MMM d, yyyy")}</span>
                  <span className="text-[#00ff97] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Article →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Mint / Moneycontrol Style High-Contrast Financial Calculator Callout */}
      <div className="mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-[#02241f] via-[#043329] to-[#011a17] border-2 border-[#00ff97]/40 p-6 sm:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#00ff97]/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#00ff97] text-[#012928] flex items-center justify-center shrink-0 shadow-[0_0_25px_rgba(0,255,151,0.5)] font-bold">
              <Calculator className="w-7 h-7 stroke-[2.5]" />
            </div>
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#00ff97]/20 border border-[#00ff97]/40 text-[#00ff97] font-mono text-[11px] font-bold uppercase tracking-wider">
                <TrendingUp className="w-3 h-3" />
                <span>Free Interactive Wealth Simulator</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white font-product-sans">
                Plan Your Financial Goals with Certified Precision
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 font-work-sans max-w-xl leading-relaxed">
                Simulate your ₹10,000/month SIP growth, calculate compounding interest on FDs, or model your retirement corpus in 1 click.
              </p>
            </div>
          </div>

          <div className="shrink-0 w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/calculators"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#00ff97] text-[#012928] font-bold text-sm sm:text-base hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(0,255,151,0.5)] hover:scale-105 active:scale-95"
            >
              <Calculator className="w-4 h-4" />
              <span>Open SIP Calculator →</span>
            </Link>
            <Link
              href="/check-risk-profile"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all"
            >
              <span>Free Risk Quiz</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

