import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategoryBySlug, getCoursesByCategory } from "@/lib/learning/supabase-db";
import { CourseCardsGrid } from "@/components/learn/CourseCardsGrid";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) {
    return {
      title: "Category not found — Stockstrail Learning",
    };
  }
  const shareImage = category.ogImage || category.coverImage || category.thumbnail;

  return {
    title: `${category.name} Courses — Stockstrail Learning`,
    description: category.description,
    openGraph: {
      title: `${category.name} Courses — Stockstrail Learning`,
      description: category.description,
      url: `https://www.learning.stockstrail.in/categories/${slug}`,
      siteName: "Stockstrail Learning",
      images: shareImage ? [{ url: shareImage, alt: category.name }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} Courses — Stockstrail Learning`,
      description: category.description,
      images: shareImage ? [shareImage] : undefined,
    },
    alternates: {
      canonical: `https://www.learning.stockstrail.in/categories/${slug}`,
    }
  };
}

export default async function CategoryDetailPage({ params }: Props) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) {
    notFound();
  }

  const list = await getCoursesByCategory(category.slug);

  return (
    <section className="relative overflow-hidden">
      <span className="glow-blob top-[-100px] left-[-100px] h-[420px] w-[420px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-14 animate-fade-up">
        <nav aria-label="Breadcrumb" className="text-xs text-white/50">
          <Link href="/learning" className="hover:text-white">Home</Link>
          <span className="mx-1">/</span>
          <Link href="/learning/categories" className="hover:text-white">Categories</Link>
          <span className="mx-1">/</span>
          <span className="text-white/80">{category.name}</span>
        </nav>
        <div className="mt-6 flex items-start gap-5">
          <div className="shrink-0 w-16 h-16 rounded-2xl bg-white/5 border border-[color:var(--color-brand-border)] text-[color:var(--color-brand-green)] font-display font-semibold flex items-center justify-center text-base shadow-inner overflow-hidden">
            {category.thumbnail ? (
              <img src={category.thumbnail} alt={category.name} className="w-full h-full object-cover" />
            ) : (
              category.icon || (() => {
                const words = category.name.trim().split(/\s+/).filter(Boolean);
                if (words.length === 0) return "";
                if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
                return (words[0][0] + words[1][0]).toUpperCase();
              })()
            )}
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl text-white font-normal" style={{ fontFamily: "var(--font-product-sans)" }}>{category.name}</h1>
            <p className="mt-2 text-white/65 max-w-2xl">{category.description}</p>
          </div>
        </div>

        <div className="mt-10 animate-fade-up" style={{ animationDelay: '100ms' }}>
          {list.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-[color:var(--color-brand-border)] p-10 text-center text-white/60">
              We're preparing courses in this category. Check back soon.
            </div>
          ) : (
            <CourseCardsGrid courses={list} />
          )}
        </div>
      </div>
    </section>
  );
}
