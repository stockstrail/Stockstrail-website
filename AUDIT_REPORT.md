# Stockstrail.in — Technical SEO Audit & Root Cause Analysis

**Date:** 2026-11-26  
**Auditor:** Senior Technical SEO & Full-Stack Engineer  
**Status:** Completed  
**Branch:** `seo-overhaul`  

---

## 1. Executive Summary & Root Cause of the Intermittent Drop

### The Primary Symptom:
`stockstrail.in` intermittently drops out of Google Search results. Searching for brand query "Stockstrail" displays LinkedIn and Google Business Profile instead of the official website. The site temporarily recovers after manual intervention, but drops again after 3–4 days of inactivity or after a new blog is published.

### Confirmed Root Causes (Ranked by Severity):

1. **[CRITICAL] Sitemap Pollution with 47 Redirecting URLs (H8)**:
   - **Evidence:** Live inspection of `https://www.stockstrail.in/sitemap.xml` revealed **146 total URLs**, of which **47 URLs were apex non-www (`https://stockstrail.in/...`)**.
   - **Impact:** Every single non-www URL returns `301 Moved Permanently` to `www.stockstrail.in`. Google Search Essentials strictly requires sitemaps to contain **only 200 OK canonical URLs**. Submitting 47 redirecting URLs triggers "Page with redirect in sitemap" alerts in Google Search Console, severely degrading crawl budget, canonical authority, and search visibility.
   - **Reference:** `src/app/sitemap.ts` lines 16–19 and 67–88 explicitly injected `MAIN_DOMAINS = ['https://www.stockstrail.in', 'https://stockstrail.in']`.

2. **[CRITICAL] Uncached Dynamic Sitemap & Cold Supabase Failures (H6, H8)**:
   - **Evidence:** `src/app/sitemap.ts` had `export const dynamic = 'force-dynamic'` and `export const revalidate = 0`.
   - **Impact:** Every single crawler request to `/sitemap.xml` triggered live runtime database queries to Supabase. On the Supabase Free tier, projects enter dormancy or experience cold-start latency (5–10s) after periods of inactivity (3–4 days). When Googlebot crawled the sitemap while Supabase was cold, the query timed out, returning an incomplete sitemap or 500 error.

3. **[CRITICAL] Blog Post 404s on Database Latency / Inactivity (H5, H6, H14)**:
   - **Evidence:** In `src/app/blog/[slug]/page.tsx` line 131–133:
     ```ts
     if (error || !post) {
       notFound();
     }
     ```
   - **Impact:** If Supabase experienced cold-start latency or a connection hiccup during Googlebot's crawl of an indexed blog post, the page threw `notFound()`, serving a **404 status** to Googlebot. Google drops 404 pages from the index almost immediately.

4. **[HIGH] Lack of On-Demand Revalidation & Auto-Discovery Pipeline for New Blogs (H14)**:
   - **Evidence:** In `src/components/features/risk-assessment/admin/BlogEditorModal.tsx`, publishing a post merely executed `supabase.from("blogs").insert(...)`.
   - **Impact:** No Next.js revalidation (`revalidatePath`) was triggered for `/blog`, `/sitemap.xml`, `/rss.xml`, or the homepage. The site relied solely on background ISR timers. Furthermore, there was no IndexNow submission, no automatic 301 redirect map when a slug was edited, and no fallback caching.

5. **[HIGH] Robots.txt Advertising 301 Redirecting Sitemap (H4)**:
   - **Evidence:** Live `https://www.stockstrail.in/robots.txt` contained:
     ```
     Sitemap: https://www.stockstrail.in/sitemap.xml
     Sitemap: https://stockstrail.in/sitemap.xml
     Sitemap: https://learning.stockstrail.in/sitemap.xml
     ```
   - **Impact:** Advertising `https://stockstrail.in/sitemap.xml` (which 301 redirects) causes Googlebot to encounter unnecessary redirects before reaching the sitemap.

6. **[MEDIUM] Inconsistent Entity URL in GBP & LinkedIn vs Canonical (H11)**:
   - **Evidence:** Google Business Profile and LinkedIn profiles point to `https://stockstrail.in` (apex) rather than the canonical `https://www.stockstrail.in`. This forces Google to resolve a 301 redirect during entity reconciliation, weakening brand authority for the "Stockstrail" query.

---

## 2. Comprehensive Hypothesis Audit (H1 – H15)

| ID | Hypothesis | Status | Evidence & Technical Findings | Severity |
| :--- | :--- | :--- | :--- | :--- |
| **H1** | Canonical errors | **PARTIALLY CONFIRMED** | Canonical on root `https://www.stockstrail.in/` has trailing slash, while sub-routes do not. All sub-routes correctly self-canonicalize. However, sitemap had 47 non-canonical URLs. | High |
| **H2** | Multiple hosts serving 200 | **RULED OUT** | Tested `http://stockstrail.in`, `https://stockstrail.in`, `http://www.stockstrail.in`, and `https://stockstrail-website.vercel.app`. All 301/308 redirect cleanly to `https://www.stockstrail.in/`. Only ONE host serves 200. | Low |
| **H3** | noindex leakage | **RULED OUT** | Live curl with Googlebot UA confirmed `meta name="robots" content="index, follow"` on all public pages. Admin and dashboard are properly noindexed. `/sign-in` was indexable and in sitemap (needs fix). | Low |
| **H4** | robots.txt instability | **CONFIRMED** | `robots.txt` advertised `https://stockstrail.in/sitemap.xml` (301 redirect) and `learning.stockstrail.in/sitemap.xml` alongside canonical sitemap. Also had 35+ redundant duplicate bot blocks. | Medium |
| **H5** | Client-side rendering | **RULED OUT (Core), CONFIRMED (Blog Error Handling)** | Core pages render Title, H1, Meta, and JSON-LD in initial server HTML. But blog post errors trigger `notFound()` instead of graceful stale-while-revalidate fallback. | High |
| **H6** | Supabase availability | **CONFIRMED** | Supabase Free Tier sleeps during inactivity. Dynamic sitemap and blog routes with zero caching cause timeouts/404s when Googlebot crawls during dormancy. | **Critical** |
| **H7** | Vercel-side blocking | **RULED OUT** | Tested Googlebot UA `Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)`. Returns HTTP 200 OK without any Cloudflare or Vercel challenge. | Low |
| **H8** | Sitemap faults | **CONFIRMED** | 47 non-www redirecting URLs, dynamic zero-cache DB calls, cross-subdomain learning URLs, and `/sign-in` in sitemap. | **Critical** |
| **H9** | Wrong status codes / Slug changes | **CONFIRMED** | Slug edits in `BlogEditorModal.tsx` create no redirect map; old URLs return hard 404s. | Medium |
| **H10**| Duplicate / thin URLs | **PARTIALLY CONFIRMED** | `/sign-in` was included in sitemap and had index: true. | Low |
| **H11**| Brand / entity weakness | **PARTIALLY CONFIRMED** | Homepage H1 and Title include "Stockstrail". Organization schema has valid NAP matching GBP. But GBP and LinkedIn link to `stockstrail.in` instead of canonical `https://www.stockstrail.in`. | Medium |
| **H12**| Performance & errors | **RESOLVED** | Turbopack chunk 404 resolved in commit `49d7c02` with `deploymentId` and CORS headers. Clean build in 32s. | Low |
| **H13**| Content & trust (YMYL) | **VERIFIED** | Author Vikrant Bhardwaj, AMFI ARN-284122 disclosure, disclaimers, About, Terms, and Contact pages exist and are linked. | Low |
| **H14**| Deploy / publish regression | **CONFIRMED** | Admin publishing lacks on-demand revalidation, RSS ping, IndexNow ping, or sitemap cache invalidation. | High |
| **H15**| Items outside code | **IDENTIFIED** | GSC domain property verification, GBP/LinkedIn URL updates, IndexNow key verification in Bing Webmaster Tools. | Medium |

---

## 3. Architecture Blueprint for Permanent Resolution

To eliminate the drops permanently, the site requires 5 pillars:
1. **Clean Canonical Sitemap (One Host Only)**:
   - Separate into a Sitemap Index (`/sitemap.xml`) referencing `/sitemap-pages.xml` and `/sitemap-blog.xml`.
   - Strip all non-www URLs, redirects, `/sign-in`, and cross-subdomain URLs.
   - Cache with `s-maxage=86400, stale-while-revalidate=604800` and provide resilient fallback if Supabase is cold.
2. **Robots.txt Simplification**:
   - Serve static 200 OK pointing exclusively to `https://www.stockstrail.in/sitemap.xml`.
3. **Resilient Server-Side Rendering (Never 404 on DB Dormancy)**:
   - For blog posts, if Supabase returns a transient error, check baseline cache (`BLOG_METADATA`) before throwing `notFound()`.
4. **Automated On-Demand Publishing Pipeline**:
   - Revalidate `/blog`, `/blog/[slug]`, `/sitemap.xml`, `/rss.xml`, and `/` on save/publish in the admin panel.
   - Ping IndexNow API for Bing, Yandex, Naver, and Seznam.
   - Maintain a slug redirect registry for slug modifications.
5. **Supabase Free Tier Keep-Alive**:
   - Install a daily Vercel cron endpoint (`/api/cron/keep-alive`) that performs a lightweight read query to prevent the free-tier database from pausing.
