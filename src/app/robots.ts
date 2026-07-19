import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers()
  const host = headersList.get('host') || 'www.stockstrail.in'
  const isLearning = host.includes('learning.')

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
    sitemap: isLearning 
      ? 'https://learning.stockstrail.in/sitemap.xml'
      : 'https://www.stockstrail.in/sitemap.xml',
  }
}
