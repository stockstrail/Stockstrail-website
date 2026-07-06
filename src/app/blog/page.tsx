import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import Layout from '@/components/layout/Layout';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financial Insights & Investment Strategies Blog | Stockstrail',
  description: 'Read the latest articles on financial planning, mutual funds, and wealth creation from the certified experts at Stockstrail.',
  keywords: 'Financial Blog, Stockstrail Blog, Investment Strategies, Mutual Funds Info',
  alternates: {
    canonical: 'https://stockstrail.in/blog',
  }
};

export default async function BlogPage() {
  const supabase = await createClient();
  
  // Fetch published blogs from Supabase
  const { data: posts, error } = await supabase
    .from("blogs")
    .select(`
      *,
      profiles:author_id (full_name)
    `)
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching blogs:", error);
  }

  return (
    <Layout>
      <div className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0 -z-10 bg-[#020d0b]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-stockstrail-green/10 blur-[120px] rounded-full opacity-50 -z-10" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h1 className="font-product-sans text-5xl sm:text-6xl md:text-7xl font-normal uppercase bg-gradient-to-br from-white via-emerald-100 to-stockstrail-green bg-clip-text text-transparent drop-shadow-sm">
              Discover Our Insights
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto font-work-sans">
              Expert analysis, financial strategies, and market trends to help you secure your financial future.
            </p>
          </div>

          {!posts || posts.length === 0 ? (
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 text-center">
              <p className="text-white/60 text-lg">No blog posts found at the moment. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {posts.map((post) => {
                const authorName = 'Vikrant Bhardwaj';
                const postPath = `/blog/${post.slug}`;
                
                return (
                  <article
                    key={post.id}
                    className="relative group bg-[#051613]/50 backdrop-blur-md rounded-2xl overflow-hidden border border-emerald-900/40 hover:border-emerald-500/50 hover:shadow-[0_8px_40px_rgba(0,255,151,0.12)] transition-all duration-500 hover:-translate-y-1 flex flex-col h-full"
                  >
                    {/* Inner glowing accent */}
                    <div className="absolute inset-0 bg-gradient-to-b from-stockstrail-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <Link href={postPath} className="block w-full shrink-0 relative overflow-hidden group/img cursor-pointer">
                      {post.image_url ? (
                        <div className="w-full h-48 sm:h-56 relative bg-[#0a1a17]">
                          <Image
                            src={post.image_url}
                            alt={post.image_alt || post.title}
                            fill
                            className="object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#051613] via-transparent to-transparent opacity-80" />
                        </div>
                      ) : (
                        <div className="w-full h-48 sm:h-56 relative bg-gradient-to-br from-emerald-900/40 to-[#051613] flex items-center justify-center">
                          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
                          <div className="w-16 h-16 rounded-full bg-stockstrail-green/10 flex items-center justify-center border border-stockstrail-green/20 group-hover/img:scale-110 group-hover/img:bg-stockstrail-green/20 transition-all duration-500">
                             <svg className="w-8 h-8 text-stockstrail-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
                             </svg>
                          </div>
                        </div>
                      )}
                      
                    </Link>

                    <div className="flex-1 flex flex-col p-5 sm:p-6 relative z-10">
                      <div className="flex-1">
                        <h2 className="text-lg sm:text-xl font-semibold mb-2 font-product-sans leading-snug text-stockstrail-green group-hover:text-emerald-300 transition-colors duration-300 line-clamp-2">
                          <Link href={postPath} className="focus:outline-none before:absolute before:inset-0">
                            {post.title}
                          </Link>
                        </h2>
                        {post.excerpt && (
                          <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2 font-work-sans">
                            {post.excerpt}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-5 mt-auto border-t border-white/5 group-hover:border-emerald-500/20 transition-colors duration-500">
                        <p className="text-white/40 text-xs sm:text-sm font-work-sans flex items-center gap-1.5">
                           <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {format(new Date(post.created_at), 'MMM d, yyyy')}
                        </p>
                        <Link href={postPath} className="relative z-20 inline-flex items-center gap-1.5 bg-gradient-to-r from-emerald-500/20 to-stockstrail-green/20 hover:from-emerald-400/40 hover:to-stockstrail-green/40 border border-emerald-500/30 hover:border-emerald-400 text-stockstrail-green hover:text-white font-medium transition-all duration-300 font-work-sans text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,255,151,0.1)] hover:shadow-[0_0_20px_rgba(0,255,151,0.3)] backdrop-blur-md group-hover:gap-2.5">
                          Read Post
                          <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
