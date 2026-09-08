"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Sparkles, ArrowRight, Bookmark, Flame, ShieldCheck, Newspaper } from "lucide-react";
import AdSenseSlot from "./AdSenseSlot";
import BlogNewsletterCard from "./BlogNewsletterCard";
import SponsorCallout from "./SponsorCallout";

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt?: string;
  content?: string;
  image_url?: string;
  image_alt?: string;
  created_at: string;
}

const LOCAL_BLOG_COVERS: Record<string, string> = {
  "why-is-the-market-down-a-salaried-employee-s-action-guide": "/blog/why-is-the-market-down.jpg",
  "sebi-mutual-fund-nomination-rule-september-2026": "/blog/sebi-mutual-fund-nomination-rule-september-2026.jpg",
  "the-financial-story-of-himachal-pradesh-s-emplyoee": "/blog/the-financial-story-of-himachal-pradesh-s-emplyoee.jpg",
};

const CATEGORIES = ["ALL", "MUTUAL FUNDS", "MARKET STRATEGY", "REGULATION", "WEALTH PLANNING"];

function getCategoryForPost(post: BlogPost): string {
  const lowerTitle = post.title.toLowerCase();
  if (lowerTitle.includes("nomination") || lowerTitle.includes("sebi") || lowerTitle.includes("rule")) {
    return "REGULATION";
  } else if (lowerTitle.includes("market down") || lowerTitle.includes("vix") || lowerTitle.includes("correction")) {
    return "MARKET STRATEGY";
  } else if (lowerTitle.includes("tax") || lowerTitle.includes("taxation")) {
    return "WEALTH PLANNING";
  } else if (lowerTitle.includes("sip") || lowerTitle.includes("lump sum") || lowerTitle.includes("mutual fund")) {
    return "MUTUAL FUNDS";
  } else if (lowerTitle.includes("himachal") || lowerTitle.includes("salaried") || lowerTitle.includes("employee")) {
    return "WEALTH PLANNING";
  }
  return "MUTUAL FUNDS";
}

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const category = getCategoryForPost(post);
      const matchesCategory = selectedCategory === "ALL" || category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  // Featured story (Top story on page 1)
  const featuredPost = posts.length > 0 ? posts[0] : null;
  const gridPosts = selectedCategory === "ALL" && searchQuery === "" ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="space-y-16">
      {/* Editorial Leaderboard Sponsor Banner */}
      <AdSenseSlot format="leaderboard" />

      {/* Featured Editor's Pick Story (Only when not filtering) */}
      {featuredPost && selectedCategory === "ALL" && searchQuery === "" && (
        <section className="relative group">
          <div className="overflow-hidden rounded-3xl border border-emerald-500/35 bg-gradient-to-br from-[#03211c] via-[#053028] to-[#011412] shadow-2xl transition-all duration-500 hover:border-emerald-400/60 flex flex-col lg:flex-row">
            {/* Cover image (16:9 on desktop) */}
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="lg:w-7/12 relative aspect-[16/9] overflow-hidden bg-[#021411] block"
            >
              <Image
                src={LOCAL_BLOG_COVERS[featuredPost.slug] || featuredPost.image_url || "/blog/why-is-the-market-down.jpg"}
                alt={featuredPost.title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#021c17] via-transparent to-transparent opacity-60" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/75 border border-emerald-400/40 text-[11px] font-mono font-bold uppercase tracking-wider text-[#00ff97] backdrop-blur-md flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Featured Analysis</span>
              </div>
            </Link>

            {/* Featured Post Details */}
            <div className="lg:w-5/12 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-mono font-semibold uppercase text-[10px]">
                    {getCategoryForPost(featuredPost)}
                  </span>
                  <span className="text-white/40 font-mono">
                    ⏱️ {Math.max(2, Math.ceil((featuredPost.content?.split(/\s+/).length || 400) / 220))} min read
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold font-product-sans text-white group-hover:text-emerald-300 transition-colors leading-tight">
                  <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                </h2>

                {featuredPost.excerpt && (
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-work-sans line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="text-xs text-white/50 font-work-sans">
                  By <strong className="text-emerald-300">Vikrant Bhardwaj</strong> • {format(new Date(featuredPost.created_at), "MMM d, yyyy")}
                </div>
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-[#00ff97] text-black font-bold text-xs sm:text-sm hover:opacity-90 transition-all shadow-[0_0_20px_rgba(0,255,151,0.25)]"
                >
                  <span>Read Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 font-work-sans ${
                  isActive
                    ? "bg-[#00ff97] text-black shadow-[0_0_20px_rgba(0,255,151,0.35)] scale-105"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full pl-4 pr-4 py-2 rounded-full bg-black/40 border border-white/10 text-white placeholder-white/40 text-xs focus:outline-none focus:border-emerald-400 transition-colors"
          />
        </div>
      </div>

      {/* Main Articles Grid & Trending Sidebar Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Grid */}
        <div className="lg:col-span-8 space-y-8">
          {gridPosts.length === 0 ? (
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center space-y-3">
              <p className="text-white text-lg font-product-sans">No matching insights found</p>
              <p className="text-white/60 text-sm">Try resetting filters or searching for different keywords.</p>
              <button
                onClick={() => {
                  setSelectedCategory("ALL");
                  setSearchQuery("");
                }}
                className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {gridPosts.map((post) => {
                const category = getCategoryForPost(post);
                const postPath = `/blog/${post.slug}`;
                const coverImage = LOCAL_BLOG_COVERS[post.slug] || post.image_url;
                const wordCount = post.content ? post.content.split(/\s+/).length : 400;
                const readTimeMinutes = Math.max(2, Math.ceil(wordCount / 220));

                return (
                  <article
                    key={post.id}
                    className="group bg-[#041a17]/70 backdrop-blur-md rounded-2xl overflow-hidden border border-emerald-900/40 hover:border-emerald-500/50 hover:shadow-[0_8px_40px_rgba(0,255,151,0.15)] transition-all duration-500 hover:-translate-y-1 flex flex-col h-full"
                  >
                    <Link href={postPath} className="block w-full shrink-0 relative overflow-hidden group/img cursor-pointer">
                      <div className="w-full aspect-[16/9] relative bg-[#0a1a17]">
                        {coverImage ? (
                          <Image
                            src={coverImage}
                            alt={post.image_alt || post.title}
                            fill
                            className="object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-emerald-950 to-[#02110e]">
                            <Sparkles className="w-6 h-6 text-emerald-400" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#041a17] via-transparent to-transparent opacity-70" />
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#011a18]/85 border border-emerald-500/40 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-300 backdrop-blur-md">
                          {category}
                        </div>
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] font-mono text-slate-300 backdrop-blur-md">
                          ⏱️ {readTimeMinutes} min
                        </div>
                      </div>
                    </Link>

                    <div className="flex-1 flex flex-col p-5 sm:p-6">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 font-product-sans leading-snug text-white group-hover:text-emerald-300 transition-colors line-clamp-2">
                          <Link href={postPath}>{post.title}</Link>
                        </h3>
                        {post.excerpt && (
                          <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 font-work-sans">
                            {post.excerpt}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-4 mt-auto border-t border-white/5">
                        <span className="text-white/40 text-xs font-work-sans">
                          {format(new Date(post.created_at), "MMM d, yyyy")}
                        </span>
                        <Link
                          href={postPath}
                          className="inline-flex items-center gap-1.5 text-xs text-emerald-300 hover:text-white font-semibold transition-colors"
                        >
                          <span>Read</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* In-Feed Native Sponsorship Card */}
          <AdSenseSlot format="in-article" />
        </div>

        {/* Right Sidebar: Trending Posts & Newsletter & Sponsor Slot */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Trending / Most Read Widget */}
          <div className="rounded-2xl border border-emerald-500/25 bg-[#031d1a]/85 backdrop-blur-md p-6 shadow-xl space-y-5">
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase font-bold tracking-wider">
              <Flame className="w-4 h-4 text-orange-400" />
              <span>Trending Reads</span>
            </div>

            <div className="space-y-4">
              {posts.slice(0, 3).map((post, idx) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="flex items-start gap-4 group p-2 rounded-xl hover:bg-white/5 transition-all"
                >
                  <span className="font-mono text-2xl font-bold text-emerald-500/40 group-hover:text-[#00ff97] transition-colors shrink-0">
                    0{idx + 1}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-xs sm:text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors line-clamp-2 font-product-sans">
                      {post.title}
                    </h4>
                    <span className="text-[11px] text-white/40 font-mono block">
                      {format(new Date(post.created_at), "MMM d, yyyy")}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Compact Newsletter Subscription */}
          <BlogNewsletterCard variant="compact" />

          {/* Sidebar Sponsor / Ad Slot */}
          <AdSenseSlot format="sidebar" />
        </aside>
      </div>

      {/* Full Width Newsletter Subscription Banner */}
      <BlogNewsletterCard variant="full" />

      {/* Direct Sponsor Acquisition Banner */}
      <SponsorCallout />
    </div>
  );
}
