import { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { createClient } from '@/lib/supabase/server'
import { getCategories, getCourses } from '@/lib/learning/supabase-db'

export const dynamic = 'force-dynamic'
export const revalidate = 0

const CURRENT_TIMESTAMP = new Date('2026-09-15T00:00:00Z')
const ANNUAL_TIMESTAMP = new Date('2026-01-01T00:00:00Z')

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const mainBaseUrl = 'https://www.stockstrail.in'
  const learningBaseUrl = 'https://learning.stockstrail.in'

  let isLearningSubdomain = false;
  try {
    const headersList = await headers();
    const host = (headersList.get('host') || '').toLowerCase();
    isLearningSubdomain =
      host.startsWith('learning.') ||
      host === 'learning.stockstrail.in' ||
      host.startsWith('www.learning.') ||
      host === 'www.learning.stockstrail.in';
  } catch {
    // Default to main site if headers not available
  }

  // 1. Learning Subdomain Routes
  if (isLearningSubdomain) {
    const learningStaticRoutes: MetadataRoute.Sitemap = [
      {
        url: learningBaseUrl,
        lastModified: CURRENT_TIMESTAMP,
        changeFrequency: 'daily',
        priority: 1.0,
      },
      {
        url: `${learningBaseUrl}/categories`,
        lastModified: CURRENT_TIMESTAMP,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${learningBaseUrl}/courses`,
        lastModified: CURRENT_TIMESTAMP,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${learningBaseUrl}/about`,
        lastModified: CURRENT_TIMESTAMP,
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    ]

    let categoryRoutes: MetadataRoute.Sitemap = []
    try {
      const categories = await getCategories()
      categoryRoutes = categories.map((cat) => ({
        url: `${learningBaseUrl}/categories/${cat.slug}`,
        lastModified: CURRENT_TIMESTAMP,
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
        lastModified: new Date(course.updatedAt || CURRENT_TIMESTAMP),
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

  // 2. Main Site High-Priority Static Routes
  const mainStaticRoutes: MetadataRoute.Sitemap = [
    {
      url: mainBaseUrl,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${mainBaseUrl}/about`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${mainBaseUrl}/services`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${mainBaseUrl}/services/mutual-funds`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${mainBaseUrl}/services/insurance`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${mainBaseUrl}/services/fixed-deposit`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/services/loan`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/services/financial-protection`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/services/open-demat`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/calculators`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${mainBaseUrl}/calculators/sip`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${mainBaseUrl}/calculators/fd`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/calculators/lumpsum`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/calculators/emi`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/calculators/tax`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/calculators/rd`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${mainBaseUrl}/lets-talk`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${mainBaseUrl}/check-risk-profile`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/blog`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${mainBaseUrl}/bse-holidays`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/nse-holidays`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/editorial-policy`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${mainBaseUrl}/terms-and-conditions`,
      lastModified: ANNUAL_TIMESTAMP,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${mainBaseUrl}/commission-disclosure`,
      lastModified: ANNUAL_TIMESTAMP,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  // 3. Dynamic Blog Articles from Database
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
        lastModified: new Date(post.updated_at || post.created_at || CURRENT_TIMESTAMP),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
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


