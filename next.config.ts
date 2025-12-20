import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false, // Enforce type checking
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all external images
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // Enable experimental features and optimize for modern browsers
  experimental: {
    optimizePackageImports: ["@radix-ui/react-*", "lucide-react"],
    optimizeCss: true, // Inlines critical CSS to fix render blocking
  },
  // Optimize compression
  compress: true,
};

export default nextConfig;
