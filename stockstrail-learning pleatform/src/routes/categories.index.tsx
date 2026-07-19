import { createFileRoute, Link } from "@tanstack/react-router";
import { categories, coursesByCategory } from "@/lib/courses";
import { CategoryCard } from "@/components/learn/cards";

export const Route = createFileRoute("/categories/")({
  head: () => ({
    meta: [
      { title: "Categories — StocksTrail Learning" },
      { name: "description", content: "Browse finance topics — mutual funds, SIP, insurance, stocks, tax, retirement and more." },
      { property: "og:title", content: "Categories — StocksTrail Learning" },
      { property: "og:description", content: "Browse finance topics on StocksTrail Learning." },
      { property: "og:url", content: "/categories" },
    ],
    links: [{ rel: "canonical", href: "/categories" }],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <section className="relative overflow-hidden">
      <span className="glow-blob top-[-100px] right-[-100px] h-[420px] w-[420px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-14">
        <nav aria-label="Breadcrumb" className="text-xs text-white/50">
          <Link to="/" className="hover:text-white">Home</Link> <span className="mx-1">/</span> <span className="text-white/80">Categories</span>
        </nav>
        <h1 className="mt-4 text-4xl sm:text-5xl text-white" style={{ fontFamily: "var(--font-display)" }}>
          Every topic, one place
        </h1>
        <p className="mt-3 max-w-2xl text-white/65">
          Explore structured knowledge across every corner of personal finance and investing.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((c) => (
            <CategoryCard key={c.slug} category={c} count={coursesByCategory(c.slug).length} />
          ))}
        </div>
      </div>
    </section>
  );
}
