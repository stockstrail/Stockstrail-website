import type { Metadata } from "next";
import Link from "next/link";
import { getCategories, getCourses } from "@/lib/learning/supabase-db";
import { CategoryCard } from "@/components/learn/cards";

export const metadata: Metadata = {
  title: "Categories — StocksTrail Learning",
  description: "Browse finance topics — mutual funds, SIP, insurance, stocks, tax, retirement and more.",
  openGraph: {
    title: "Categories — StocksTrail Learning",
    description: "Browse finance topics on StocksTrail Learning.",
    url: "/learning/categories",
  },
  alternates: {
    canonical: "/learning/categories",
  }
};

export default async function CategoriesPage() {
  const categories = await getCategories();
  const courses = await getCourses();

  return (
    <section className="relative overflow-hidden">
      <span className="glow-blob top-[-100px] right-[-100px] h-[420px] w-[420px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-14 animate-fade-up">
        <nav aria-label="Breadcrumb" className="text-xs text-white/50">
          <Link href="/learning" className="hover:text-white">Home</Link> <span className="mx-1">/</span> <span className="text-white/80">Categories</span>
        </nav>
        <h1 className="mt-4 text-4xl sm:text-5xl text-white" style={{ fontFamily: "var(--font-product-sans)" }}>
          Every topic, <span className="gradient-text font-bold">one place</span>
        </h1>
        <p className="mt-3 max-w-2xl text-white/65">
          Explore structured knowledge across every corner of personal finance and investing.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-fade-up" style={{ animationDelay: '100ms' }}>
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} count={courses.filter(x => x.category === c.slug).length} />
          ))}
        </div>
      </div>
    </section>
  );
}
