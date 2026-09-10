import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const rawHost = request.headers.get("host") || "";
  const host = rawHost.toLowerCase().split(":")[0]; // strip port if any
  const cleanPath = url.pathname;

  const isLocalhost = host.includes("localhost") || host.includes("127.0.0.1");

  // 1. Apex Domain 301 Permanent Redirect: stockstrail.in -> www.stockstrail.in
  if (!isLocalhost && host === "stockstrail.in") {
    const destinationUrl = `https://www.stockstrail.in${url.pathname}${url.search}`;
    return NextResponse.redirect(destinationUrl, { status: 301 });
  }

  // 2. Subdomain Normalization: www.learning.stockstrail.in -> learning.stockstrail.in
  if (!isLocalhost && host === "www.learning.stockstrail.in") {
    const destinationUrl = `https://learning.stockstrail.in${url.pathname}${url.search}`;
    return NextResponse.redirect(destinationUrl, { status: 301 });
  }

  // Check if current request is on the learning subdomain
  const isLearningSubdomain = host === "learning.stockstrail.in" || host.startsWith("learning.");

  if (isLearningSubdomain) {
    // If on learning subdomain and path doesn't start with /learning, /admin, or /api, rewrite internally to /learning
    if (!url.pathname.startsWith("/learning") && !url.pathname.startsWith("/admin") && !url.pathname.startsWith("/api")) {
      url.pathname = `/learning${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  } else {
    // On the main domain (www.stockstrail.in) in production, redirect /learning/* paths to the canonical learning subdomain
    if (!isLocalhost && url.pathname.startsWith("/learning")) {
      const subPath = url.pathname.replace(/^\/learning/, "") || "/";
      const redirectUrl = `https://learning.stockstrail.in${subPath}${url.search}`;
      return NextResponse.redirect(redirectUrl, { status: 301 });
    }
  }

  // 3. 301 Permanent Redirects for Legacy Service URLs to new /services/* canonical routes
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

  // 4. Trailing slash normalization for services (e.g. /services/mutual-funds/ -> /services/mutual-funds)
  if (cleanPath.startsWith("/services/") && url.pathname.endsWith("/")) {
    const normalizedPath = url.pathname.replace(/\/+$/, "");
    const redirectUrl = new URL(normalizedPath, request.url);
    return NextResponse.redirect(redirectUrl, { status: 301 });
  }

  // 5. Canonical normalization for Financial Calculators
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

    // If a tab or type query parameter is provided on /calculators, 301 redirect to its dedicated canonical page
    if (tabParam && validTabs[tabParam]) {
      const redirectUrl = new URL(validTabs[tabParam], request.url);
      return NextResponse.redirect(redirectUrl, { status: 301 });
    }

    // Trailing slash normalization (e.g. /calculators/ -> /calculators, /calculators/sip/ -> /calculators/sip)
    if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
      const normalizedPath = url.pathname.replace(/\/+$/, "");
      const redirectUrl = new URL(normalizedPath, request.url);
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

