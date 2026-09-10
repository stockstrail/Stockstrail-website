import { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { createClient } from '@/lib/supabase/server'
import { getCategories, getCourses } from '@/lib/learning/supabase-db'

export const revalidate = 86400

const STATIC_LASTMOD_RECENT = new Date('2026-03-01T00:00:00Z')
const STATIC_LASTMOD_ANNUAL = new Date('2026-01-01T00:00:00Z')

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const mainBaseUrl = 'https://www.stockstrail.in'
  const learningBaseUrl = 'https://learning.stockstrail.in'

  let isLearningSubdomain = false;
  try {
    const headersList = await headers();
    const host = headersList.get('host') || '';
    isLearningSubdomain = host.startsWith('learning.') || host === 'learning.stockstrail.in';
  } catch {
    // Default to main site if headers not available
  }

  // 1. Main site static routes
  const mainStaticRoutes: MetadataRoute.Sitemap = [
    {
      url: mainBaseUrl,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${mainBaseUrl}/blog`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${mainBaseUrl}/about`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${mainBaseUrl}/services`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${mainBaseUrl}/services/mutual-funds`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/services/fixed-deposit`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/services/insurance`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/services/loan`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/services/financial-protection`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/services/open-demat`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/calculators`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/calculators/sip`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/calculators/fd`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/calculators/lumpsum`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/calculators/rd`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${mainBaseUrl}/calculators/emi`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/calculators/tax`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/lets-talk`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/nse-holidays`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${mainBaseUrl}/bse-holidays`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${mainBaseUrl}/check-risk-profile`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/terms-and-conditions`,
      lastModified: STATIC_LASTMOD_ANNUAL,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${mainBaseUrl}/commission-disclosure`,
      lastModified: STATIC_LASTMOD_ANNUAL,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${mainBaseUrl}/editorial-policy`,
      lastModified: STATIC_LASTMOD_RECENT,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // If requested on the learning subdomain, return only learning routes
  if (isLearningSubdomain) {
    const learningStaticRoutes: MetadataRoute.Sitemap = [
      {
        url: learningBaseUrl,
        lastModified: STATIC_LASTMOD_RECENT,
        changeFrequency: 'weekly',
        priority: 1.0,
      },
      {
        url: `${learningBaseUrl}/categories`,
        lastModified: STATIC_LASTMOD_RECENT,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${learningBaseUrl}/courses`,
        lastModified: STATIC_LASTMOD_RECENT,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${learningBaseUrl}/about`,
        lastModified: STATIC_LASTMOD_RECENT,
        changeFrequency: 'weekly',
        priority: 0.8,
      },
    ]

    let categoryRoutes: MetadataRoute.Sitemap = []
    try {
      const categories = await getCategories()
      categoryRoutes = categories.map((cat) => ({
        url: `${learningBaseUrl}/categories/${cat.slug}`,
        lastModified: STATIC_LASTMOD_RECENT,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
    } catch (e) {
      console.error('Error fetching categories for sitemap:', e)
    }

    let courseRoutes: MetadataRoute.Sitemap = []
    try {
      const courses = await getCourses()
      courseRoutes = courses.map((course) => ({
        url: `${learningBaseUrl}/courses/${course.slug}`,
        lastModified: new Date(course.updatedAt || '2026-03-01T00:00:00Z'),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
    } catch (e) {
      console.error('Error fetching courses for sitemap:', e)
    }

    return [
      ...learningStaticRoutes,
      ...categoryRoutes,
      ...courseRoutes,
    ]
  }

  // 2. Fetch dynamic blog posts from Supabase for main site
  let blogRoutes: MetadataRoute.Sitemap = []
  try {
    const supabase = await createClient()
    const { data: posts, error } = await supabase
      .from("blogs")
      .select("slug, updated_at, created_at")
      .eq("published", true)

    if (!error && posts) {
      blogRoutes = posts.map((post) => ({
        url: `${mainBaseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at || post.created_at || '2026-03-01T00:00:00Z'),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }))
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  return [
    ...mainStaticRoutes,
    ...blogRoutes,
  ]
}


