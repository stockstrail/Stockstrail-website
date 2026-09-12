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

  // Check if current request is on the learning subdomain (supports learning.stockstrail.in & www.learning.stockstrail.in)
  const isLearningSubdomain =
    host === "learning.stockstrail.in" ||
    host === "www.learning.stockstrail.in" ||
    host.startsWith("learning.") ||
    host.startsWith("www.learning.");

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

  // 4. Trailing slash normalization: remove trailing slash (e.g. /calculators/ -> /calculators)
  if (
    pathname.length > 1 &&
    pathname.endsWith("/") &&
    !pathname.startsWith("/api")
  ) {
    const cleanSlashPath = pathname.replace(/\/+$/, "");
    const cleanUrl = new URL(cleanSlashPath + rawUrl.search, request.url);
    return NextResponse.redirect(cleanUrl, { status: 301 });
  }

  // 5. Calculator Clean URL Normalization (Eliminates ?tab=SIP, ?type=sip, ?calc=sip duplicate URLs)
  const isCalcPath = pathname === "/calculators" || pathname.startsWith("/calculators/");
  if (isCalcPath) {
    const searchParams = rawUrl.searchParams;
    const calcQuery = (
      searchParams.get("tab") ||
      searchParams.get("type") ||
      searchParams.get("calc") ||
      searchParams.get("calculator") ||
      searchParams.get("t") ||
      ""
    ).toLowerCase().trim();

    const calcMapping: Record<string, string> = {
      sip: "/calculators/sip",
      fd: "/calculators/fd",
      "fixed-deposit": "/calculators/fd",
      lumpsum: "/calculators/lumpsum",
      "lump-sum": "/calculators/lumpsum",
      rd: "/calculators/rd",
      "recurring-deposit": "/calculators/rd",
      emi: "/calculators/emi",
      loan: "/calculators/emi",
      tax: "/calculators/tax",
      "income-tax": "/calculators/tax",
    };

    // If query parameter maps to a calculator, 301 redirect to clean canonical URL with no query params
    if (calcQuery && calcMapping[calcQuery]) {
      const canonicalCalcUrl = new URL(calcMapping[calcQuery], request.url);
      canonicalCalcUrl.search = ""; // strip duplicate query string
      return NextResponse.redirect(canonicalCalcUrl, { status: 301 });
    }

    // If already on a dedicated calculator page (e.g. /calculators/sip) with redundant tab query params, strip them
    if (pathname.startsWith("/calculators/") && (searchParams.has("tab") || searchParams.has("type") || searchParams.has("calc"))) {
      const cleanCalcSubUrl = new URL(pathname, request.url);
      cleanCalcSubUrl.search = "";
      return NextResponse.redirect(cleanCalcSubUrl, { status: 301 });
    }
  }

  // 6. Services Clean URL Normalization (Eliminates ?service=..., ?tab=..., and legacy /mutual-funds paths)
  const legacyServices: Record<string, string> = {
    "/mutual-funds": "/services/mutual-funds",
    "/fixed-deposit": "/services/fixed-deposit",
    "/insurance": "/services/insurance",
    "/loan": "/services/loan",
    "/financial-protection": "/services/financial-protection",
    "/open-demat": "/services/open-demat",
  };

  const normalizedCleanPath = pathname.replace(/\/+$/, "") || "/";
  if (legacyServices[normalizedCleanPath]) {
    const destination = legacyServices[normalizedCleanPath];
    const redirectUrl = new URL(destination, request.url);
    redirectUrl.search = "";
    return NextResponse.redirect(redirectUrl, { status: 301 });
  }

  const isServicesPath = pathname === "/services" || pathname.startsWith("/services/");
  if (isServicesPath) {
    const searchParams = rawUrl.searchParams;
    const serviceQuery = (
      searchParams.get("service") ||
      searchParams.get("tab") ||
      searchParams.get("type") ||
      searchParams.get("s") ||
      ""
    ).toLowerCase().trim();

    const serviceMapping: Record<string, string> = {
      "mutual-funds": "/services/mutual-funds",
      mutualfunds: "/services/mutual-funds",
      mf: "/services/mutual-funds",
      sip: "/services/mutual-funds",
      "fixed-deposit": "/services/fixed-deposit",
      fixeddeposit: "/services/fixed-deposit",
      fd: "/services/fixed-deposit",
      insurance: "/services/insurance",
      ins: "/services/insurance",
      loan: "/services/loan",
      loans: "/services/loan",
      lamf: "/services/loan",
      "open-demat": "/services/open-demat",
      demat: "/services/open-demat",
      "financial-protection": "/services/financial-protection",
      protection: "/services/financial-protection",
    };

    // If query parameter maps to a service, 301 redirect to clean canonical URL
    if (serviceQuery && serviceMapping[serviceQuery]) {
      const canonicalServiceUrl = new URL(serviceMapping[serviceQuery], request.url);
      canonicalServiceUrl.search = ""; // strip duplicate query string
      return NextResponse.redirect(canonicalServiceUrl, { status: 301 });
    }

    // If already on a dedicated service page (e.g. /services/mutual-funds) with redundant query params, strip them
    if (pathname.startsWith("/services/") && (searchParams.has("service") || searchParams.has("tab") || searchParams.has("type"))) {
      const cleanServiceSubUrl = new URL(pathname, request.url);
      cleanServiceSubUrl.search = "";
      return NextResponse.redirect(cleanServiceSubUrl, { status: 301 });
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


