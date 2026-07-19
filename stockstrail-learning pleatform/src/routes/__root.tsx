import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader, SiteFooter } from "@/components/learn/site-chrome";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="gradient-text text-7xl font-bold" style={{ fontFamily: "var(--font-display)" }}>404</h1>
        <h2 className="mt-4 text-xl font-semibold text-white">Page not found</h2>
        <p className="mt-2 text-sm text-white/60">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-brand-green)] px-5 py-2.5 text-sm font-semibold text-[color:var(--color-brand-bg)] hover:bg-white transition-colors"
          >
            Go home
          </Link>
          <Link
            to="/courses"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-brand-border)] px-5 py-2.5 text-sm font-medium text-white hover:border-white/40 transition-colors"
          >
            Browse courses
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-white">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-white/60">
          Something went wrong. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--color-brand-green)] px-5 py-2.5 text-sm font-semibold text-[color:var(--color-brand-bg)]"
          >
            Try again
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-brand-border)] px-5 py-2.5 text-sm font-medium text-white">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "StocksTrail Learning — Master Investing & Personal Finance" },
      { name: "description", content: "A premium financial education hub by StocksTrail. Structured, distraction-free courses on mutual funds, SIPs, insurance, stocks, tax and personal finance." },
      { name: "author", content: "StocksTrail" },
      { name: "theme-color", content: "#012928" },
      { property: "og:site_name", content: "StocksTrail Learning" },
      { property: "og:title", content: "StocksTrail Learning — Master Investing & Personal Finance" },
      { property: "og:description", content: "Structured courses on mutual funds, SIPs, insurance, stocks, tax and personal finance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Stockstrail" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Work+Sans:wght@400;500;600&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "StocksTrail Learning",
          description: "Financial education platform by StocksTrail.",
          parentOrganization: {
            "@type": "Organization",
            name: "StocksTrail",
            url: "https://stockstrail.in",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
