import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function robots(): Promise<MetadataRoute.Robots> {
  let isLearningSubdomain = false;
  try {
    const headersList = await headers();
    const host = headersList.get('host') || '';
    isLearningSubdomain = host.startsWith('learning.') || host.startsWith('www.learning.');
  } catch {
    // Default to main site if headers not available
  }

  const privateRoutes = [
    '/admin',
    '/admin/*',
    '/dashboard',
    '/dashboard/*',
    '/api/*',
    '/auth/*',
    '/sign-in',
    '/complete-profile',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: privateRoutes,
      },
      // Search Engines & Inspection Tools
      { userAgent: 'Googlebot', allow: '/', disallow: privateRoutes },
      { userAgent: 'Googlebot-Image', allow: '/' },
      { userAgent: 'Google-InspectionTool', allow: '/', disallow: privateRoutes },
      { userAgent: 'Bingbot', allow: '/', disallow: privateRoutes },
      { userAgent: 'Applebot', allow: '/', disallow: privateRoutes },
      { userAgent: 'DuckDuckBot', allow: '/', disallow: privateRoutes },
      { userAgent: 'YandexBot', allow: '/', disallow: privateRoutes },
      { userAgent: 'Baiduspider', allow: '/', disallow: privateRoutes },

      // AI Crawlers & LLM Chatbots
      { userAgent: 'GPTBot', allow: '/', disallow: privateRoutes },
      { userAgent: 'ChatGPT-User', allow: '/', disallow: privateRoutes },
      { userAgent: 'OAI-SearchBot', allow: '/', disallow: privateRoutes },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'GoogleOther', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/', disallow: privateRoutes },
      { userAgent: 'Claude-Web', allow: '/', disallow: privateRoutes },
      { userAgent: 'PerplexityBot', allow: '/', disallow: privateRoutes },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
      { userAgent: 'FacebookBot', allow: '/' },
      { userAgent: 'Amazonbot', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
    ],
    sitemap: isLearningSubdomain
      ? 'https://www.learning.stockstrail.in/sitemap.xml'
      : 'https://www.stockstrail.in/sitemap.xml',
  }
}


