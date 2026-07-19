import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin',
        '/admin/*',
        '/dashboard',
        '/dashboard/*',
        '/api/*',
        '/auth/*',
        '/sign-in',
        '/complete-profile'
      ],
    },
    sitemap: 'https://www.stockstrail.in/sitemap.xml',
  }
}
