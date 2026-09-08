import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import BlogPagination from '@/components/blog/BlogPagination';
import BlogListClient from '@/components/blog/BlogListClient';
import { createClient } from '@/lib/supabase/server';
import type { Metadata } from 'next';
import { Sparkles, Newspaper } from 'lucide-react';

export const dynamic = 'force-dynamic';

const POSTS_PER_PAGE = 9;

export const metadata: Metadata = {
  title: 'Financial Insights, Mutual Funds & Wealth Journal | Stockstrail',
  description: 'Certified financial analysis, SEBI regulations, mutual fund strategies, and salaried wealth management from AMFI Registered experts (ARN-284122).',
  keywords: 'Financial Blog India, Stockstrail Blog, Mutual Funds Guide, SEBI Guidelines, Salaried Wealth Planning, Best SIP 2026',
  alternates: {
    canonical: 'https://www.stockstrail.in/blog',
  },
  openGraph: {
    title: 'Financial Insights, Mutual Funds & Wealth Journal | Stockstrail',
    description: 'Certified financial analysis, SEBI regulations, mutual fund strategies, and salaried wealth management from AMFI Registered experts.',
    url: 'https://www.stockstrail.in/blog',
    siteName: 'Stockstrail',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-stockstrail.png',
        width: 1100,
        height: 630,
        alt: 'Stockstrail Financial Journal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Financial Insights & Investment Strategies | Stockstrail',
    description: 'Read the latest articles on financial planning, mutual funds, and wealth creation.',
    images: ['/og-stockstrail.png'],
  },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const requestedPage = Number(resolvedSearchParams?.page);
  const rawPage = Number.isFinite(requestedPage) && requestedPage > 0 ? Math.floor(requestedPage) : 1;

  const supabase = await createClient();

  const { count } = await supabase
    .from("blogs")
    .select("id", { count: "exact", head: true })
    .eq("published", true);

  const totalCount = count ?? 0;
  const totalPages = Math.max(1, Math.ceil(totalCount / POSTS_PER_PAGE));
  const currentPage = Math.min(rawPage, totalPages);

  const from = (currentPage - 1) * POSTS_PER_PAGE;
  const to = from + POSTS_PER_PAGE - 1;

  const { data: posts, error } = await supabase
    .from("blogs")
    .select(`
      *,
      profiles:author_id (full_name)
    `)
    .eq("published", true)
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) {
    console.error("Error fetching blogs:", error);
  }

  return (
    <Layout>
      <div className="relative pt-24 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen overflow-hidden">
        {/* Deep emerald luxury background */}
        <div className="absolute inset-0 -z-10 bg-[#011412]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Editorial Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-xs uppercase tracking-wider font-semibold">
              <Newspaper className="w-3.5 h-3.5 text-[#00ff97]" />
              <span>Stockstrail Financial Journal • AMFI ARN-284122</span>
            </div>

            <h1 className="font-product-sans text-4xl sm:text-5xl md:text-6xl font-normal uppercase bg-gradient-to-br from-white via-emerald-100 to-stockstrail-green bg-clip-text text-transparent drop-shadow-sm">
              Editorial Insights &amp; Market Intelligence
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-work-sans">
              Actionable investment research, SEBI policy breakdowns, and wealth engineering for India&apos;s salaried professionals and long-term investors.
            </p>
          </div>

          {/* Interactive Client Listing with Featured Story, Filters & Ad Placements */}
          <BlogListClient posts={posts || []} />

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12">
              <BlogPagination currentPage={currentPage} totalPages={totalPages} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

