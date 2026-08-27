import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    deviceSizes: [360, 640, 768, 1024, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    qualities: [65, 75, 80],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-accordion",
      "@radix-ui/react-alert-dialog",
      "@radix-ui/react-dialog",
      "@radix-ui/react-dropdown-menu",
      "@radix-ui/react-popover",
      "@radix-ui/react-select",
      "@radix-ui/react-tabs",
      "@radix-ui/react-tooltip",
      "@radix-ui/react-navigation-menu",
      "@radix-ui/react-scroll-area",
      "lucide-react",
      "embla-carousel-react",
      "react-day-picker",
      "cmdk",
      "@supabase/supabase-js",
      "clsx",
    ],
  },
  compress: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  transpilePackages: [],
  async headers() {
    return [
      {
        // AI Agentic Browsing Discovery Header
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value: '</llms.txt>; rel="llms-txt"',
          },
        ],
      },
      {
        source: '/llms.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/markdown; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      {
        // Cache static assets (JS, CSS) for 1 year
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache images for 1 year
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Favicons: revalidate so updates reflect immediately
        source: '/favicon.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        source: '/icon.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        // Cache public assets (logos, services images) for 1 year
        source: '/:path*.(webp|png|jpg|jpeg|gif|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache fonts for 1 year
        source: '/:path*.(woff|woff2|ttf|otf|eot)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // Permanent 301 redirects
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/lets-talk',
        permanent: true,
      },
      {
        source: '/demat',
        destination: '/open-demat',
        permanent: true,
      },
      {
        source: '/financial-planning',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/loan',
        destination: '/loan',
        permanent: true,
      },
      {
        source: '/services/fixed-deposit',
        destination: '/fixed-deposit',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
