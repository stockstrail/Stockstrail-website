import { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { createClient } from '@/lib/supabase/server'
import { getCategories, getCourses } from '@/lib/learning/supabase-db'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers()
  const host = headersList.get('host') || 'www.stockstrail.in'

  // If host is the learning subdomain
  if (host.includes('learning.')) {
    const baseUrl = 'https://www.learning.stockstrail.in'
    const staticRoutes: MetadataRoute.Sitemap = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
      },
      {
        url: `${baseUrl}/categories`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/courses`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      }
    ]

    let categoryRoutes: MetadataRoute.Sitemap = []
    let courseRoutes: MetadataRoute.Sitemap = []

    try {
      const categories = await getCategories()
      categoryRoutes = categories.map((cat) => ({
        url: `${baseUrl}/categories/${cat.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
    } catch (e) {
      console.error('Error fetching categories for sitemap:', e)
    }

    try {
      const courses = await getCourses()
      courseRoutes = courses.map((course) => ({
        url: `${baseUrl}/courses/${course.slug}`,
        lastModified: new Date(course.updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
    } catch (e) {
      console.error('Error fetching courses for sitemap:', e)
    }

    return [...staticRoutes, ...categoryRoutes, ...courseRoutes]
  }

  // Otherwise, return main site www.stockstrail.in sitemap
  const baseUrl = 'https://www.stockstrail.in'

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/mutual-funds`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fixed-deposit`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insurance`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/loan`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/financial-protection`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/open-demat`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/calculators`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/lets-talk`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/nse-holidays`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/bse-holidays`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/commission-disclosure`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  let blogRoutes: MetadataRoute.Sitemap = []
  try {
    const supabase = await createClient()
    const { data: posts, error } = await supabase
      .from("blogs")
      .select("slug, updated_at")
      .eq("published", true)

    if (!error && posts) {
      blogRoutes = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  return [...staticRoutes, ...blogRoutes]
}
