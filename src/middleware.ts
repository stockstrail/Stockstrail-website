import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const rawUrl = request.nextUrl.clone();
  const rawHost = request.headers.get("host") || "";
  const host = rawHost.toLowerCase().split(":")[0]; // strip port if any
  const pathname = rawUrl.pathname;
  const isLocalhost = host.includes("localhost") || host.includes("127.0.0.1");

  // 1. Apex Domain 301 Permanent Redirect: stockstrail.in -> www.stockstrail.in
  if (!isLocalhost && host === "stockstrail.in") {
    const destinationUrl = `https://www.stockstrail.in${pathname}${rawUrl.search}`;
    return NextResponse.redirect(destinationUrl, { status: 301 });
  }

  // 2. Redirect www.learning.stockstrail.in -> learning.stockstrail.in
  if (!isLocalhost && (host === "www.learning.stockstrail.in" || host.startsWith("www.learning."))) {
    const destinationUrl = `https://learning.stockstrail.in${pathname}${rawUrl.search}`;
    return NextResponse.redirect(destinationUrl, { status: 301 });
  }

  // Check if current request is on the learning subdomain
  const isLearningSubdomain =
    host === "learning.stockstrail.in" ||
    host.startsWith("learning.");

  if (isLearningSubdomain) {
    // If on learning subdomain and path doesn't start with /learning, /admin, or /api, rewrite internally to /learning
    if (!pathname.startsWith("/learning") && !pathname.startsWith("/admin") && !pathname.startsWith("/api")) {
      rawUrl.pathname = `/learning${pathname}`;
      return NextResponse.rewrite(rawUrl);
    }
  } else {
    // On the main domain (www.stockstrail.in) in production, redirect /learning/* paths to the canonical learning subdomain
    if (!isLocalhost && pathname.startsWith("/learning")) {
      const subPath = pathname.replace(/^\/learning/, "") || "/";
      const redirectUrl = `https://learning.stockstrail.in${subPath}${rawUrl.search}`;
      return NextResponse.redirect(redirectUrl, { status: 301 });
    }
  }

  // 3. Uppercase path normalization: redirect uppercase URLs to lowercase (e.g. /Calculators/SIP -> /calculators/sip)
  if (
    pathname !== pathname.toLowerCase() &&
    !pathname.startsWith("/api") &&
    !pathname.startsWith("/auth") &&
    !pathname.startsWith("/_next")
  ) {
    const lowerUrl = new URL(pathname.toLowerCase() + rawUrl.search, request.url);
    return NextResponse.redirect(lowerUrl, { status: 301 });
  }

  // 4. Trailing slash normalization: remove trailing slash (e.g. /about/ -> /about)
  if (
    pathname.length > 1 &&
    pathname.endsWith("/") &&
    !pathname.startsWith("/api")
  ) {
    const cleanSlashPath = pathname.replace(/\/+$/, "");
    const cleanUrl = new URL(cleanSlashPath + rawUrl.search, request.url);
    return NextResponse.redirect(cleanUrl, { status: 301 });
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


