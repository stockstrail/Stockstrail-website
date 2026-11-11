import { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase/server'
import { getCategories, getCourses } from '@/lib/learning/supabase-db'
import {
  BLOG_METADATA,
  LEARNING_CATEGORY_METADATA,
  LEARNING_COURSE_METADATA,
  LEARNING_LESSON_METADATA,
} from '@/lib/seo/blueprint-meta'

export const revalidate = 3600

const CURRENT_TIMESTAMP = new Date()
const ANNUAL_TIMESTAMP = new Date('2026-01-01T00:00:00Z')

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const mainBaseUrl = 'https://www.stockstrail.in'
  const learningBaseUrl = 'https://learning.stockstrail.in'

  const urlMap = new Map<string, MetadataRoute.Sitemap[number]>()

  const addUrl = (entry: MetadataRoute.Sitemap[number]) => {
    urlMap.set(entry.url, entry)
  }

  // 1. Main Site High-Priority Static Routes
  const mainStaticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${mainBaseUrl}/`,
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
      priority: 0.9,
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
    {
      url: `${mainBaseUrl}/sign-in`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
  mainStaticRoutes.forEach(addUrl)

  // 2. Curated Baseline Blog Articles (Guarantees presence even if DB query fails)
  Object.keys(BLOG_METADATA).forEach((slug) => {
    addUrl({
      url: `${mainBaseUrl}/blog/${slug}`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  // 3. Dynamic Blog Articles from Supabase (Live updates with exact timestamps)
  try {
    const supabase = await createClient()
    const { data: posts, error } = await supabase
      .from('blogs')
      .select('slug, updated_at, created_at')
      .eq('published', true)

    if (!error && posts) {
      posts.forEach((post) => {
        addUrl({
          url: `${mainBaseUrl}/blog/${post.slug}`,
          lastModified: new Date(post.updated_at || post.created_at || CURRENT_TIMESTAMP),
          changeFrequency: 'weekly',
          priority: 0.8,
        })
      })
    }
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
  }

  // 4. Learning Platform Static Hub Routes
  const learningStaticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${learningBaseUrl}/`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${learningBaseUrl}/categories`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${learningBaseUrl}/courses`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${learningBaseUrl}/about`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
  learningStaticRoutes.forEach(addUrl)

  // 5. Learning Category Routes (Baseline + Dynamic)
  Object.keys(LEARNING_CATEGORY_METADATA).forEach((slug) => {
    addUrl({
      url: `${learningBaseUrl}/categories/${slug}`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  try {
    const categories = await getCategories()
    ;(categories || []).forEach((cat) => {
      addUrl({
        url: `${learningBaseUrl}/categories/${cat.slug}`,
        lastModified: CURRENT_TIMESTAMP,
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })
  } catch (e) {
    console.error('Error fetching categories for sitemap:', e)
  }

  // 6. Learning Course Routes (Baseline + Dynamic)
  Object.keys(LEARNING_COURSE_METADATA).forEach((slug) => {
    addUrl({
      url: `${learningBaseUrl}/courses/${slug}`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  try {
    const courses = await getCourses()
    ;(courses || []).forEach((course) => {
      addUrl({
        url: `${learningBaseUrl}/courses/${course.slug}`,
        lastModified: new Date(course.updatedAt || CURRENT_TIMESTAMP),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })
  } catch (e) {
    console.error('Error fetching courses for sitemap:', e)
  }

  // 7. Learning Individual Lesson Routes
  Object.keys(LEARNING_LESSON_METADATA).forEach((lessonPath) => {
    addUrl({
      url: `${learningBaseUrl}/courses/${lessonPath}`,
      lastModified: CURRENT_TIMESTAMP,
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  })

  return Array.from(urlMap.values())
}
