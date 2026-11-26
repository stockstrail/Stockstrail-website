import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
export const revalidate = 86400;

export default function robots(): MetadataRoute.Robots {
  const privateRoutes = [
    '/admin',
    '/admin/*',
    '/api/*',
    '/auth/*',
    '/dashboard',
    '/dashboard/*',
    '/sign-in',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: privateRoutes,
      },
      // Explicit allowance for leading AI search crawlers
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'GoogleOther', allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'cohere-ai', allow: '/' },
    ],
    sitemap: 'https://www.stockstrail.in/sitemap.xml',
    host: 'https://www.stockstrail.in',
  };
}
