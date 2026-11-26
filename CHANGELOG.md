# Changelog — Stockstrail.in Technical SEO Overhaul

All notable changes made during the Technical SEO Recovery and Stability Overhaul.

## [SEO Overhaul] - 2026-11-26

### Fixed (Root Cause Fixes)
- **Sitemap Canonical Origin & Redirect Elimination (`ACT-01`)**:
  - Removed all 47 non-www redirecting URLs (`https://stockstrail.in/...`) from `src/app/sitemap.ts`.
  - Enforced single canonical origin `https://www.stockstrail.in`.
  - Added 1-hour ISR cache (`revalidate = 3600`) with dynamic on-demand purging.
  - Implemented resilient fallback to curated blueprint metadata so the sitemap never returns empty or 500 when Supabase is cold.
  - Excluded `/sign-in` and cross-subdomain URLs from the main sitemap.
- **Resilient Blog Post Rendering (`ACT-02`)**:
  - In `src/app/blog/[slug]/page.tsx`, wrapped database fetch with fallback to `BLOG_METADATA` and `BLOG_CONTENT_OVERRIDES` before calling `notFound()`.
  - Prevents Googlebot from encountering transient 404s during Supabase dormancy or cold starts.
- **Robots.txt Simplification & Single Sitemap Directive (`ACT-03`)**:
  - Cleaned `src/app/robots.ts` to output a unified `User-agent: *` block.
  - Removed redirecting sitemap `https://stockstrail.in/sitemap.xml` and advertised solely `https://www.stockstrail.in/sitemap.xml`.
  - Explicitly disallowed private and authentication areas (`/admin`, `/api`, `/auth`, `/dashboard`, `/sign-in`).
- **Blog Heading Demotion (`ACT-07`)**:
  - Demoted markdown `# Heading` inside `ReactMarkdown` components in `src/app/blog/[slug]/page.tsx` to render as `<h2>`.
  - Enforced strictly ONE `<h1>` tag per page across all indexable routes.
- **Blog Slug 301 Redirection Middleware (`ACT-05`)**:
  - Created `src/lib/seo/slug-redirects.ts` and added interceptor in `src/middleware.ts` to 301-redirect modified blog slugs to their canonical URLs, preventing broken links and 404 drops.

### Added (Features & Enhancements)
- **On-Demand Revalidation & Auto-Indexing Pipeline (`ACT-04`)**:
  - Created `/api/revalidate` route to purge and revalidate `/blog`, `/blog/[slug]`, `/sitemap.xml`, `/rss.xml`, and `/` immediately when a post is created or updated.
  - Wired auto-revalidation into `BlogEditorModal.tsx` and `AdminBlogsContent.tsx`.
  - Implemented IndexNow notification client (`src/lib/seo/indexnow.ts`) and hosted verification key at `/c07a4a9840eb4243b74fa8764045f4df.txt`.
- **Supabase Free Tier Keep-Alive Heartbeat (`ACT-06`)**:
  - Created `/api/cron/keep-alive` executing lightweight database head queries.
  - Scheduled daily cron execution in `vercel.json` (`0 2 * * *`).
- **BreadcrumbList JSON-LD Schema (`ACT-08`)**:
  - Injected structured Schema.org `BreadcrumbList` markup into `/services`, `/calculators`, `/blog`, `/blog/[slug]`, and `/lets-talk`.
- **SEO Regression Guard (`ACT-10`)**:
  - Added `scripts/seo-audit-guard.js` and npm script `"audit:seo"`.
  - Validates robots.txt, sitemap URLs, heading counts, and absence of noindex leakage across all generated HTML pages.
- **Simulation Test Suite**:
  - Added `scripts/test-simulation.js` to simulate downtime and verify resilience.

### Changed
- Marked `/sign-in` as `index: false, follow: false` in `src/app/sign-in/layout.tsx` (`ACT-09`).
- Added resilient fallback and cache headers to `src/app/feed.xml/route.ts`.
