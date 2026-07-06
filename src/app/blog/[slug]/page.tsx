import Link from 'next/link';
import { format } from 'date-fns';
import type { Metadata } from 'next';
import { ChevronLeft, Send, Facebook, Linkedin, Instagram } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import ShareButtons from '@/components/blog/ShareButtons';
import MobileShareButton from '@/components/blog/MobileShareButton';
import { createClient } from '@/lib/supabase/server';
import JsonLd from '@/components/common/JsonLd';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export const dynamic = 'force-dynamic';

const ContactCard = () => {
  return (
    <div className="w-full bg-white/10 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-stockstrail-green-light hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-300">
      <h2 className="text-2xl font-product-sans mb-6">
        <span className="text-white">Get in </span>
        <span className="gradient-text">touch</span>
      </h2>
      <div className="space-y-4 text-white/90">
        <div>
          <div className="text-white/60 text-sm mb-1">Email</div>
          <a href="mailto:connect@stockstrail.in" className="underline hover:text-stockstrail-green-light transition-colors">connect@stockstrail.in</a>
        </div>
        <div>
          <div className="text-white/60 text-sm mb-1">WhatsApp</div>
          <a href="https://wa.me/919736304663" target="_blank" rel="noopener noreferrer" className="underline hover:text-stockstrail-green-light transition-colors">+91 97363-04663</a>
        </div>
        <div>
          <div className="text-white/60 text-sm mb-1">Mobile No.</div>
          <a href="tel:+919736304663" className="underline hover:text-stockstrail-green-light transition-colors">+91 97363-04663</a>
        </div>
      </div>
      <div className="mt-6">
        <h4 className="text-white/80 text-sm uppercase tracking-widest mb-2">Socials</h4>
        <div className="flex items-center gap-5">
          <a href="https://www.facebook.com/people/Stockstrail-Stockstrail/100089234534696/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white hover:scale-110 transition-transform duration-300"><Facebook className="w-6 h-6"/></a>
          <a href="https://www.linkedin.com/company/stockstrail/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white hover:scale-110 transition-transform duration-300"><Linkedin className="w-6 h-6"/></a>
          <a href="http://instagram.com/stockstrail/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white hover:scale-110 transition-transform duration-300"><Instagram className="w-6 h-6"/></a>
          <a href="https://t.me/stockstrail" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white hover:scale-110 transition-transform duration-300"><Send className="w-6 h-6"/></a>
        </div>
      </div>
    </div>
  );
};

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://stockstrail.in";
  const baseUrl = siteUrl.replace(/\/$/, '');
  const postUrl = `${baseUrl}/blog/${slug}`;

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

  return {
    title: `${title} | Stockstrail`,
    description: description,
    keywords: post.meta_keywords,
    openGraph: {
      type: "article",
      title: title,
      description: description,
      url: postUrl,
      siteName: "Stockstrail",
      publishedTime: post.created_at,
      authors: [authorName],
      images: post.image_url ? [{ url: post.image_url }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: post.image_url ? [post.image_url] : [],
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
    return (
      <Layout>
        <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-normal mb-6 gradient-text font-product-sans uppercase">Post Not Found</h1>
            <p className="text-red-500 mb-10 text-lg">This blog post could not be found or has been removed.</p>
            <Link href="/blog" className="inline-flex items-center text-stockstrail-green-light hover:text-white transition-colors duration-300 text-lg">
              <ChevronLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://stockstrail.in";
  const baseUrl = siteUrl.replace(/\/$/, '');
  const currentUrl = `${baseUrl}/blog/${resolvedParams.slug}`;
  const authorName = "Vikrant Bhardwaj";

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.meta_description || post.excerpt,
    image: post.image_url,
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
      <JsonLd data={articleSchema} />
      <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-white/50 hover:text-stockstrail-green-light mb-16 transition-colors duration-300 font-work-sans text-sm sm:text-base group">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to All Posts
          </Link>
            
          {/* Floating Mobile Share Button - always visible on mobile */}
          <MobileShareButton />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-stockstrail-green-light/20 hover:bg-white/10 hover:border-stockstrail-green-light/40 hover:shadow-[0_0_30px_rgba(0,255,151,0.2)] transition-all duration-500 flex flex-col">
                <div className="flex-1 p-8">
                  <article className="space-y-10 text-white">
                    <div className="text-center space-y-8">
                      <h1 className="font-product-sans text-3xl sm:text-4xl lg:text-4xl font-normal uppercase gradient-text leading-tight">
                        {post.title}
                      </h1>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base pb-8 border-b border-white/10 max-w-3xl mx-auto">
                        <p className="text-stockstrail-green-light font-work-sans uppercase tracking-wider font-medium">
                          {authorName}
                        </p>
                        <span className="hidden sm:block text-white/30">•</span>
                        <p className="text-white/50 font-work-sans">
                          {format(new Date(post.created_at), 'd MMMM, yyyy')}
                        </p>
                      </div>
                    </div>
                    {post.image_url && (
                      <div className="mb-10 w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,255,151,0.1)]">
                        <img 
                          src={post.image_url} 
                          alt={post.image_alt || post.title} 
                          className="w-full h-auto max-h-[60vh] object-cover hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    )}
                    {/* Render Markdown content with raw HTML support for legacy posts */}
                    <div className="blog-content prose prose-sm sm:prose-base lg:prose-lg mx-auto w-full prose-invert">
                      <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        components={{
                          a: ({ node, href, children, ...props }) => {
                            if (href && href.match(/\.(jpeg|jpg|gif|png|webp)$/i)) {
                              return <img src={href} alt={String(children)} className="w-full h-auto rounded-lg shadow-lg" />;
                            }
                            return <a href={href} {...props}>{children}</a>;
                          }
                        }}
                      >
                        {post.content}
                      </ReactMarkdown>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div id="share-section">
                <ShareButtons title={post.title} url={currentUrl} />
              </div>
              <div className="sticky top-24">
                <ContactCard />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .scrollable-blog-content {
          scrollbar-width: thin;
          scrollbar-color: rgba(0, 255, 151, 0.5) rgba(255, 255, 255, 0.1);
        }
        .scrollable-blog-content::-webkit-scrollbar { width: 8px; }
        .scrollable-blog-content::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); border-radius: 10px; }
        .scrollable-blog-content::-webkit-scrollbar-thumb { background: rgba(0,255,151,0.5); border-radius: 10px; }
        .scrollable-blog-content::-webkit-scrollbar-thumb:hover { background: rgba(0,255,151,0.7); }
        .blog-content { color: rgba(255,255,255,0.85); font-family: 'Work Sans', system-ui, sans-serif; line-height: 1.85; max-width: none; }
        .blog-content p { margin-bottom: 1.25rem; line-height: 1.85; color: rgba(255,255,255,0.85); font-size: 1.0625rem; }
        .blog-content img, .blog-content iframe, .blog-content video { max-width: 100%; height: auto; display: block; border-radius: 8px; margin: 2rem auto; }
        .blog-content pre, .blog-content code, .blog-content table { max-width: 100%; overflow-x: auto; }
        /* Ensure text wraps and long tokens don't cause horizontal overflow */
        .blog-content, .blog-content * { box-sizing: border-box; }
        .blog-content { overflow-wrap: anywhere; word-break: break-word; hyphens: auto; }
        .blog-content p, .blog-content li { overflow-wrap: anywhere; word-break: break-word; }
        .blog-content code { white-space: pre-wrap; word-break: break-word; }
        .blog-content pre { white-space: pre-wrap; background: #0a1210; padding: 1rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); }
        @media (max-width: 640px) { .blog-content p { font-size: 0.9375rem; margin-bottom: 1.25rem; } }
        .blog-content h1, .blog-content h2, .blog-content h3, .blog-content h4, .blog-content h5, .blog-content h6 {
          color: #00FF97 !important;
          font-family: 'Product Sans', system-ui, sans-serif; font-weight: 600; font-size: 1.5rem; margin-top: 2rem; margin-bottom: 1rem; line-height: 1.3;
        }
        .blog-content ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.25rem; }
        .blog-content ol { list-style-type: decimal; padding-left: 1.5rem; margin-bottom: 1.25rem; }
        .blog-content blockquote { border-left: 4px solid #00FF97; padding-left: 1rem; margin-left: 0; font-style: italic; color: rgba(255,255,255,0.6); }
        .blog-content a { color: #00FF97; text-decoration: underline; }
      `}</style>
    </Layout>
  );
}
