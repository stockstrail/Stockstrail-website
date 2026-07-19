import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getCategoryBySlug, coursesByCategory } from "@/lib/courses";
import type { Category, Course } from "@/lib/courses";
import { CourseCard } from "@/components/learn/cards";

export const Route = createFileRoute("/categories/$slug")({
  loader: ({ params }): { category: Category; list: Course[] } => {
    const category = getCategoryBySlug(params.slug);
    if (!category) throw notFound();
    return { category, list: coursesByCategory(category.slug) };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Category not found" }, { name: "robots", content: "noindex" }] };
    const c = loaderData.category;
    return {
      meta: [
        { title: `${c.name} Courses — StocksTrail Learning` },
        { name: "description", content: `${c.name} — ${c.description}` },
        { property: "og:title", content: `${c.name} Courses — StocksTrail Learning` },
        { property: "og:description", content: c.description },
        { property: "og:url", content: `/categories/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/categories/${params.slug}` }],
    };
  },
  component: CategoryPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="text-3xl text-white" style={{ fontFamily: "var(--font-display)" }}>Category not found</h1>
      <Link to="/categories" className="mt-6 inline-flex rounded-full bg-[color:var(--color-brand-green)] px-5 py-2.5 text-sm font-semibold text-[color:var(--color-brand-bg)]">All categories</Link>
    </div>
  ),
});

function CategoryPage() {
  const { category, list } = Route.useLoaderData() as { category: Category; list: Course[] };

  return (
    <section className="relative overflow-hidden">
      <span className="glow-blob top-[-100px] left-[-100px] h-[420px] w-[420px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-14">
        <nav aria-label="Breadcrumb" className="text-xs text-white/50">
          <Link to="/" className="hover:text-white">Home</Link>
          <span className="mx-1">/</span>
          <Link to="/categories" className="hover:text-white">Categories</Link>
          <span className="mx-1">/</span>
          <span className="text-white/80">{category.name}</span>
        </nav>
        <div className="mt-6 flex items-start gap-5">
          <div className="w-16 h-16 rounded-2xl bg-white/5 border border-[color:var(--color-brand-border)] text-[color:var(--color-brand-green)] font-display font-bold flex items-center justify-center">
            {category.icon}
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl text-white" style={{ fontFamily: "var(--font-display)" }}>{category.name}</h1>
            <p className="mt-2 text-white/65 max-w-2xl">{category.description}</p>
          </div>
        </div>

        <div className="mt-10">
          {list.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-[color:var(--color-brand-border)] p-10 text-center text-white/60">
              We're preparing courses in this category. Check back soon.
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((c) => <CourseCard key={c.slug} course={c} />)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
