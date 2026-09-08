import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { ArrowRight, Calculator, Sparkles } from "lucide-react";

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
          <span className="text-emerald-400 font-mono text-xs uppercase tracking-wider font-bold">
            Continue Reading
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-product-sans text-white mt-1">
            Related Financial Insights
          </h3>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-xs text-emerald-300 hover:text-white transition-colors"
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
              className="group bg-[#041a17]/80 rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-500/50 hover:shadow-[0_4px_30px_rgba(0,255,151,0.15)] transition-all flex flex-col"
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
                    <Sparkles className="w-6 h-6 text-emerald-400" />
                  </div>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <h4 className="text-sm font-semibold font-product-sans text-white group-hover:text-emerald-300 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h4>
                <div className="flex items-center justify-between text-[11px] text-white/50 pt-2 border-t border-white/5 font-work-sans">
                  <span>{format(new Date(post.created_at), "MMM d, yyyy")}</span>
                  <span className="text-emerald-400 font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                    Read →
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Mini Interactive Calculator Banner */}
      <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#03241f] via-[#053a31] to-[#021815] border border-emerald-500/35 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-[#00ff97] shrink-0">
            <Calculator className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white font-product-sans">
              Plan Your Financial Goals with Interactive Calculators
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 font-work-sans">
              Simulate SIP returns, calculate Lump Sum growth, or plan FD interest in seconds.
            </p>
          </div>
        </div>
        <div className="shrink-0 flex items-center gap-3">
          <Link
            href="/calculators"
            className="px-5 py-2.5 rounded-full bg-stockstrail-green text-black font-bold text-xs sm:text-sm hover:bg-white transition-all shadow-[0_0_15px_rgba(0,255,151,0.3)]"
          >
            Open SIP Calculator →
          </Link>
        </div>
      </div>
    </section>
  );
}
