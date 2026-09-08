import Link from 'next/link';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import type { Metadata } from 'next';
import { ChevronLeft, ChevronRight, ShieldCheck, UserCheck, Sparkles, CheckCircle2, MessageSquare, Phone, Mail, MessageCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ReadingProgressBar from '@/components/blog/ReadingProgressBar';
import ArticleActionBar from '@/components/blog/ArticleActionBar';
import ArticleTableOfContents from '@/components/blog/ArticleTableOfContents';
import ArticleFeedback from '@/components/blog/ArticleFeedback';
import AdSenseSlot from '@/components/blog/AdSenseSlot';
import BlogNewsletterCard from '@/components/blog/BlogNewsletterCard';
import RelatedArticles from '@/components/blog/RelatedArticles';
import MobileShareButton from '@/components/blog/MobileShareButton';
import { createClient } from '@/lib/supabase/server';
import { BlogFAQ } from '@/types';
import JsonLd from '@/components/common/JsonLd';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const dynamic = 'force-dynamic';

const LOCAL_BLOG_COVERS: Record<string, string> = {
  'why-is-the-market-down-a-salaried-employee-s-action-guide': '/blog/why-is-the-market-down.jpg',
  'sebi-mutual-fund-nomination-rule-september-2026': '/blog/sebi-mutual-fund-nomination-rule-september-2026.jpg',
  'the-financial-story-of-himachal-pradesh-s-emplyoee': '/blog/the-financial-story-of-himachal-pradesh-s-emplyoee.jpg',
};

function getCategoryFromTitle(title: string): string {
  const lower = title.toLowerCase();
  if (lower.includes('nomination') || lower.includes('sebi') || lower.includes('rule')) {
    return 'REGULATION';
  } else if (lower.includes('market down') || lower.includes('vix') || lower.includes('correction')) {
    return 'MARKET STRATEGY';
  } else if (lower.includes('tax') || lower.includes('taxation')) {
    return 'TAX PLANNING';
  } else if (lower.includes('sip') || lower.includes('lump sum') || lower.includes('mutual fund')) {
    return 'MUTUAL FUNDS';
  } else if (lower.includes('himachal') || lower.includes('salaried') || lower.includes('employee')) {
    return 'WEALTH PLANNING';
  }
  return 'MUTUAL FUNDS';
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const postUrl = `https://www.stockstrail.in/blog/${slug}`;

  const supabase = await createClient();
  const { data: post } = await supabase
    .from("blogs")
    .select(`*, profiles:author_id(full_name)`)
    .eq("slug", slug)
    .single();

  if (!post) {
    return {
      title: "Blog Post Not Found | Stockstrail",
      description: "Read our latest financial insights",
    };
  }

  const title = post.meta_title || post.title;
  const description = post.meta_description || post.excerpt || "Stockstrail blog post";
  const authorName = "Vikrant Bhardwaj";
  const heroImage = LOCAL_BLOG_COVERS[slug] || post.image_url;
  const ogImages = heroImage
    ? [{ url: heroImage.startsWith('http') ? heroImage : `https://www.stockstrail.in${heroImage}` }]
    : [{ url: "/og-stockstrail.png", width: 1100, height: 630, alt: title }];

  return {
    title: `${title} | Stockstrail`,
    description: description,
    keywords: post.meta_keywords,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: "article",
      title: title,
      description: description,
      url: postUrl,
      siteName: "Stockstrail",
      publishedTime: post.created_at,
      authors: [authorName],
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: ogImages.map((img) => img.url),
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  
  const supabase = await createClient();
  const { data: post, error } = await supabase
    .from("blogs")
    .select(`*, profiles:author_id(full_name)`)
    .eq("slug", slug)
    .single();

  if (error || !post) {
    notFound();
  }

  // Fetch latest published posts for related recommendations
  const { data: allPosts } = await supabase
    .from("blogs")
    .select("id, slug, title, excerpt, image_url, created_at")
    .eq("published", true)
    .order("created_at", { ascending: false })
    .limit(4);

  const blogFaqs = (post.faqs as BlogFAQ[] || []).filter(faq => faq.is_published);

  const faqSchema = blogFaqs && blogFaqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: blogFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  } : null;

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.stockstrail.in";
  const baseUrl = siteUrl.replace(/\/$/, '');
  const currentUrl = `${baseUrl}/blog/${resolvedParams.slug}`;
  const authorName = "Vikrant Bhardwaj";
  const featuredImage = LOCAL_BLOG_COVERS[slug] || post.image_url;
  const category = getCategoryFromTitle(post.title);
  const wordCount = post.content ? post.content.split(/\s+/).length : 400;
  const readTimeMinutes = Math.max(2, Math.ceil(wordCount / 220));

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.meta_description || post.excerpt,
    image: featuredImage,
    author: {
      '@type': 'Person',
      name: authorName,
      url: baseUrl
    },
    publisher: {
      '@type': 'Organization',
      name: 'Stockstrail',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/stockstrail.png`
      }
    },
    datePublished: post.created_at,
    dateModified: post.updated_at || post.created_at,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    }
  };

  return (
    <Layout>
      <ReadingProgressBar />
      <JsonLd data={articleSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <div className="pt-24 pb-28 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-8 font-work-sans flex-wrap">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3 text-white/30" />
            <span className="text-emerald-400 font-mono font-semibold uppercase">{category}</span>
          </nav>

          {/* Floating Mobile Share Button */}
          <MobileShareButton />

          {/* Leaderboard Top Sponsor Slot */}
          <AdSenseSlot format="leaderboard" className="mb-8" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Main Article Content Column */}
            <div className="lg:col-span-8">
              <div className="bg-[#031d1a]/85 backdrop-blur-xl rounded-3xl border border-emerald-500/25 p-6 sm:p-10 shadow-2xl space-y-8">
                <article className="space-y-8 text-white">
                  {/* Article Header */}
                  <header className="space-y-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs">
                      <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/35 text-emerald-300 font-mono font-bold uppercase tracking-wider text-[11px]">
                        {category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-black/50 border border-white/10 text-white/70 font-mono text-[11px]">
                        ⏱️ {readTimeMinutes} min read
                      </span>
                      <span className="text-white/30 hidden sm:inline">•</span>
                      <span className="text-white/50 text-xs font-work-sans">
                        Published {format(new Date(post.created_at), 'MMMM d, yyyy')}
                      </span>
                    </div>

                    <h1 className="font-product-sans text-3xl sm:text-4xl lg:text-5xl font-normal uppercase bg-gradient-to-br from-white via-emerald-100 to-[#00ff97] bg-clip-text text-transparent leading-tight">
                      {post.title}
                    </h1>

                    {/* Verified Author Attribution Bar */}
                    <div className="flex items-center justify-between py-4 border-y border-white/10 flex-wrap gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-[#00ff97] text-black font-bold flex items-center justify-center font-product-sans text-sm shadow-[0_0_15px_rgba(0,255,151,0.3)]">
                          VB
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 font-semibold text-sm text-white">
                            <span>{authorName}</span>
                            <UserCheck className="w-4 h-4 text-[#00ff97]" />
                          </div>
                          <div className="text-[11px] text-white/50 font-mono">
                            AMFI ARN-284122 • NISM Series V-A Certified
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>

                  {/* 16:9 Cover Image */}
                  {featuredImage && (
                    <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_8px_30px_rgba(0,255,151,0.15)] aspect-[16/9] relative bg-[#0a1a17]">
                      <img 
                        src={featuredImage} 
                        alt={post.image_alt || post.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Interactive Action Bar (Bookmark, Share, Read Time) */}
                  <ArticleActionBar
                    slug={slug}
                    title={post.title}
                    url={currentUrl}
                    readTimeMinutes={readTimeMinutes}
                    category={category}
                  />

                  {/* Finshots / Groww Style: 30-Second Fast-Track Key Takeaways */}
                  {post.excerpt && (
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-[#02241f] via-[#043329] to-[#011614] border border-emerald-500/40 space-y-3 shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full pointer-events-none" />
                      <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#00ff97] animate-pulse" />
                        <span>30-Second Fast Track Summary</span>
                      </div>
                      <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic font-work-sans">
                        &ldquo;{post.excerpt}&rdquo;
                      </p>
                    </div>
                  )}

                  {/* Render Markdown content */}
                  <div className="blog-content prose prose-sm sm:prose-base lg:prose-lg mx-auto w-full prose-invert pt-2">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                      components={{
                        a: ({ node, href, children, ...props }) => {
                          if (href && href.match(/\.(jpeg|jpg|gif|png|webp)$/i)) {
                            return <img src={href} alt={String(children)} className="w-full h-auto rounded-xl shadow-lg" />;
                          }
                          return <a href={href} {...props}>{children}</a>;
                        }
                      }}
                    >
                      {post.content}
                    </ReactMarkdown>
                  </div>

                  {/* Mid-Article Native Sponsor Insight */}
                  <AdSenseSlot format="in-article" />

                  {/* Reader Feedback Scoring Widget */}
                  <ArticleFeedback postTitle={post.title} />

                  {/* Actionable Strategy CTA Card */}
                  <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#042823] to-[#021817] border border-emerald-500/40 text-center space-y-4 shadow-xl">
                    <h3 className="text-xl sm:text-2xl font-bold font-product-sans text-white">
                      Need Certified Guidance on Your Mutual Funds Portfolio?
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-work-sans">
                      Stockstrail is an AMFI-Registered Mutual Fund Distributor (ARN-284122). Take our free 2-minute risk assessment or speak directly with our certified advisors.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                      <Link
                        href="/check-risk-profile"
                        className="px-6 py-3 rounded-full bg-stockstrail-green text-black font-bold text-xs sm:text-sm hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,151,0.3)]"
                      >
                        Take Free Risk Quiz
                      </Link>
                      <Link
                        href="/lets-talk"
                        className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm transition-all"
                      >
                        Book Free Strategy Call →
                      </Link>
                    </div>
                  </div>
                </article>
              </div>

              {/* FAQs Section */}
              {blogFaqs && blogFaqs.length > 0 && (
                <div className="mt-8 bg-[#031d1a]/85 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-emerald-500/25 shadow-xl space-y-6">
                  <h2 className="font-product-sans text-2xl sm:text-3xl font-normal uppercase gradient-text">
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {blogFaqs.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`faq-${index}`}
                        className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:border-stockstrail-green/50 transition-colors"
                      >
                        <AccordionTrigger className="text-left text-white text-base sm:text-lg font-work-sans py-4 hover:no-underline hover:text-stockstrail-green">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-white/80 text-sm sm:text-base leading-relaxed pb-6 whitespace-pre-line">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )}

              {/* In-Article Newsletter Subscription */}
              <div className="mt-10">
                <BlogNewsletterCard variant="full" />
              </div>

              {/* Related Articles Carousel / Grid */}
              {allPosts && allPosts.length > 0 && (
                <RelatedArticles posts={allPosts} currentSlug={slug} />
              )}
            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-4 sticky-sidebar space-y-6">
              {/* Table of Contents */}
              {post.content && <ArticleTableOfContents content={post.content} />}

              {/* Sticky Sidebar Sponsor / Google Ad Slot */}
              <AdSenseSlot format="sidebar" />

              {/* Author & Advisory Profile Card */}
              <div className="bg-[#031d1a]/90 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/30 space-y-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-[#00ff97] text-black font-bold flex items-center justify-center font-product-sans text-lg">
                    VB
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-product-sans text-base flex items-center gap-1.5">
                      <span>Vikrant Bhardwaj</span>
                      <ShieldCheck className="w-4 h-4 text-[#00ff97]" />
                    </h4>
                    <p className="text-xs text-emerald-400 font-mono">Mutual Fund Distributor</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-work-sans">
                  AMFI Registered (ARN-284122) & NISM certified wealth advisor guiding retail and salaried investors across India to build long-term wealth through disciplined asset allocation.
                </p>

                <div className="pt-2 border-t border-white/10 space-y-2">
                  <a
                    href="https://wa.me/919736304663"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/25 transition-all text-xs font-semibold"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp Advisor</span>
                  </a>
                  <a
                    href="tel:+919736304663"
                    className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-xs font-medium transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+91 97363-04663</span>
                  </a>
                </div>
              </div>

              {/* Compact Newsletter Subscription */}
              <BlogNewsletterCard variant="compact" />
            </aside>
          </div>
        </div>
      </div>

      <style>{`
        .blog-content { color: rgba(255,255,255,0.9); font-family: 'Work Sans', system-ui, sans-serif; line-height: 1.85; max-width: none; }
        .blog-content p { margin-bottom: 1.35rem; line-height: 1.85; color: rgba(255,255,255,0.85); font-size: 1.0625rem; }
        .blog-content img, .blog-content iframe, .blog-content video { max-width: 100%; height: auto; display: block; border-radius: 12px; margin: 2rem auto; }
        .blog-content pre, .blog-content code, .blog-content table { max-width: 100%; overflow-x: auto; }
        .blog-content, .blog-content * { box-sizing: border-box; }
        .blog-content { overflow-wrap: anywhere; word-break: break-word; hyphens: auto; }
        .blog-content p, .blog-content li { overflow-wrap: anywhere; word-break: break-word; }
        .blog-content code { white-space: pre-wrap; word-break: break-word; }
        .blog-content pre { white-space: pre-wrap; background: #0a1210; padding: 1rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); }
        @media (max-width: 640px) { .blog-content p { font-size: 0.9375rem; margin-bottom: 1.25rem; } }
        .blog-content h1, .blog-content h2, .blog-content h3, .blog-content h4, .blog-content h5, .blog-content h6 {
          color: #00FF97 !important;
          font-family: 'Product Sans', system-ui, sans-serif; font-weight: 600; font-size: 1.45rem; margin-top: 2.25rem; margin-bottom: 1rem; line-height: 1.3;
        }
        .blog-content ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.25rem; }
        .blog-content ol { list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 1.25rem; }
        .blog-content li { margin-bottom: 0.5rem; }
        .blog-content blockquote { border-left: 4px solid #00FF97; padding-left: 1rem; margin-left: 0; font-style: italic; color: rgba(255,255,255,0.7); background: rgba(0, 255, 151, 0.04); padding: 0.75rem 1rem; border-radius: 0 8px 8px 0; }
        .blog-content a { color: #00FF97; text-decoration: underline; font-weight: 500; }
        @media (min-width: 1024px) {
          .sticky-sidebar {
            position: -webkit-sticky !important;
            position: sticky !important;
            top: 6rem !important;
          }
        }
      `}</style>
    </Layout>
  );
}

