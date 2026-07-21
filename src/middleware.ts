import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get("host") || "";

  // Matches learning.stockstrail.in OR www.learning.stockstrail.in (and local equivalents)
  const isLearningSubdomain =
    host.startsWith("learning.") || host.startsWith("www.learning.");

  const isLocalhost = host.includes("localhost") || host.includes("127.0.0.1");

  if (isLearningSubdomain) {
    // If the path does not already start with /learning, rewrite it internally
    if (!url.pathname.startsWith("/learning")) {
      url.pathname = `/learning${url.pathname}`;
      return NextResponse.rewrite(url);
    }
  } else {
    // On the main domain in production (non-localhost), redirect /learning/* paths to the learning subdomain
    if (!isLocalhost && url.pathname.startsWith("/learning")) {
      const learningHost = host.replace(/^www\./, "learning.");
      const subPath = url.pathname.replace(/^\/learning/, "") || "/";
      const redirectUrl = `${url.protocol}//${learningHost}${subPath}${url.search}`;
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
