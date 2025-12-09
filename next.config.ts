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
    qualities: [75, 85, 90], // Add quality options for responsive images
    unoptimized: false,
  },
  // Enable experimental features and optimize for modern browsers
  experimental: {
    optimizePackageImports: ["@radix-ui/react-*"],
  },
  // Optimize compression
  compress: true,
};

export default nextConfig;
