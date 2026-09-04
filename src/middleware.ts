import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") || "";
  const cleanPath = url.pathname;

  // Matches learning.stockstrail.in OR www.learning.stockstrail.in (and local equivalents)
  const isLearningSubdomain =
    host.startsWith("learning.") || host.startsWith("www.learning.");

  const isLocalhost = host.includes("localhost") || host.includes("127.0.0.1");

  if (isLearningSubdomain) {
    // If the path does not already start with /learning, /admin, or /api, rewrite it internally
    if (!url.pathname.startsWith("/learning") && !url.pathname.startsWith("/admin") && !url.pathname.startsWith("/api")) {
      url.pathname = `/learning${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  } else {
    // On the main domain in production (non-localhost), redirect /learning/* paths directly to the canonical learning subdomain
    if (!isLocalhost && url.pathname.startsWith("/learning")) {
      const learningHost = host.includes("stockstrail.in")
        ? "www.learning.stockstrail.in"
        : host.replace(/^www\./, "learning.");
      const subPath = url.pathname.replace(/^\/learning/, "") || "/";
      const redirectUrl = `https://${learningHost}${subPath}${url.search}`;
      return NextResponse.redirect(redirectUrl, { status: 301 });
    }
  }

  // 301 Permanent Redirects for Legacy Service URLs to new /services/* canonical routes
  const legacyServices: Record<string, string> = {
    "/mutual-funds": "/services/mutual-funds",
    "/fixed-deposit": "/services/fixed-deposit",
    "/insurance": "/services/insurance",
    "/loan": "/services/loan",
    "/financial-protection": "/services/financial-protection",
    "/open-demat": "/services/open-demat",
  };

  const normalizedCleanPath = cleanPath.replace(/\/+$/, "") || "/";
  if (legacyServices[normalizedCleanPath]) {
    const destination = legacyServices[normalizedCleanPath];
    const redirectUrl = new URL(destination, request.url);
    return NextResponse.redirect(redirectUrl, { status: 301 });
  }

  // Trailing slash normalization for services (e.g. /services/mutual-funds/ -> /services/mutual-funds)
  if (cleanPath.startsWith("/services/") && url.pathname.endsWith("/")) {
    const normalizedPath = url.pathname.replace(/\/+$/, "");
    const redirectUrl = new URL(normalizedPath, request.url);
    return NextResponse.redirect(redirectUrl, { status: 301 });
  }

  // Canonical normalization for Financial Calculators
  // Eliminates duplicate parameterized URLs (e.g., /calculators?tab=SIP, /calculators?type=fd, trailing slashes)
  if (cleanPath === "/calculators" || cleanPath === "/calculators/" || cleanPath.startsWith("/calculators/")) {
    const tabParam = (url.searchParams.get("tab") || url.searchParams.get("type") || "").toLowerCase().trim();
    const validTabs: Record<string, string> = {
      sip: "/calculators/sip",
      lumpsum: "/calculators/lumpsum",
      fd: "/calculators/fd",
      rd: "/calculators/rd",
      emi: "/calculators/emi",
      tax: "/calculators/tax",
    };

    // 1. If a tab or type query parameter is provided, 301 redirect to its dedicated canonical page
    if (tabParam && validTabs[tabParam]) {
      const redirectUrl = new URL(validTabs[tabParam], request.url);
      return NextResponse.redirect(redirectUrl, { status: 301 });
    }

    // 2. Trailing slash normalization (e.g. /calculators/ -> /calculators, /calculators/sip/ -> /calculators/sip)
    if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
      const normalizedPath = url.pathname.replace(/\/+$/, "");
      const redirectUrl = new URL(normalizedPath, request.url);
      return NextResponse.redirect(redirectUrl, { status: 301 });
    }

    // 3. If any extraneous or unknown query parameters exist on /calculators or /calculators/*, strip them and 301 redirect to the clean canonical URL
    if (url.search) {
      const redirectUrl = new URL(url.pathname, request.url);
      return NextResponse.redirect(redirectUrl, { status: 301 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - any static file with an extension (e.g. favicon.svg, .ico, .png)
     */
    "/((?!api|_next/static|_next/image|.*\\..*).*)",
  ],
};

