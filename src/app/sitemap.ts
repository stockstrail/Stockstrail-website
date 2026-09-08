import { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { createClient } from '@/lib/supabase/server'
import { getCategories, getCourses } from '@/lib/learning/supabase-db'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const mainBaseUrl = 'https://www.stockstrail.in'
  const learningBaseUrl = 'https://www.learning.stockstrail.in'

  let isLearningSubdomain = false;
  try {
    const headersList = await headers();
    const host = headersList.get('host') || '';
    isLearningSubdomain = host.startsWith('learning.') || host.startsWith('www.learning.');
  } catch {
    // Default to main site if headers not available
  }

  // 1. Main site static routes
  const mainStaticRoutes: MetadataRoute.Sitemap = [
    {
      url: mainBaseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${mainBaseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${mainBaseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${mainBaseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${mainBaseUrl}/services/mutual-funds`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/services/fixed-deposit`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/services/insurance`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/services/loan`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/services/financial-protection`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/services/open-demat`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/calculators`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/calculators/sip`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/calculators/fd`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/calculators/lumpsum`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/calculators/rd`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${mainBaseUrl}/calculators/emi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/calculators/tax`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/lets-talk`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/nse-holidays`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${mainBaseUrl}/bse-holidays`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${mainBaseUrl}/check-risk-profile`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${mainBaseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${mainBaseUrl}/commission-disclosure`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${mainBaseUrl}/editorial-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // If requested on the learning subdomain, return only learning routes
  if (isLearningSubdomain) {
    const learningStaticRoutes: MetadataRoute.Sitemap = [
      {
        url: learningBaseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
      },
      {
        url: `${learningBaseUrl}/categories`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${learningBaseUrl}/courses`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      },
    ]

    let categoryRoutes: MetadataRoute.Sitemap = []
    try {
      const categories = await getCategories()
      categoryRoutes = categories.map((cat) => ({
        url: `${learningBaseUrl}/categories/${cat.slug}`,
        lastModified: new Date(),
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
        lastModified: new Date(course.updatedAt),
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
      .select("slug, updated_at")
      .eq("published", true)

    if (!error && posts) {
      blogRoutes = posts.map((post) => ({
        url: `${mainBaseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updated_at),
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

