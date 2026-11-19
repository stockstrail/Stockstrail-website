import { MetadataRoute } from 'next'
import { createClient as createDirectClient } from '@supabase/supabase-js'
import { createClient as createServerClient } from '@/lib/supabase/server'
import { getCategories, getCourses } from '@/lib/learning/supabase-db'
import {
  BLOG_METADATA,
  LEARNING_CATEGORY_METADATA,
  LEARNING_COURSE_METADATA,
  LEARNING_LESSON_METADATA,
} from '@/lib/seo/blueprint-meta'

// Always dynamically serve fresh sitemap on request so new blog posts and courses are indexed automatically
export const dynamic = 'force-dynamic'
export const revalidate = 0

const MAIN_DOMAINS = [
  'https://www.stockstrail.in',
  'https://stockstrail.in',
]

const LEARNING_BASE_URL = 'https://learning.stockstrail.in'

interface StaticRouteDef {
  path: string
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

const STATIC_MAIN_ROUTES: StaticRouteDef[] = [
  { path: '', changeFrequency: 'daily', priority: 1.0 },
  { path: '/about', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services/mutual-funds', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services/insurance', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services/fixed-deposit', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services/loan', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/services/financial-protection', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/open-demat', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/calculators', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/calculators/sip', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/calculators/fd', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/calculators/lumpsum', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/calculators/emi', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/calculators/tax', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/calculators/rd', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/lets-talk', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/check-risk-profile', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/blog', changeFrequency: 'daily', priority: 0.9 },
  { path: '/bse-holidays', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/nse-holidays', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/editorial-policy', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/terms-and-conditions', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/commission-disclosure', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/sign-in', changeFrequency: 'monthly', priority: 0.5 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentTimestamp = new Date()
  const annualTimestamp = new Date('2026-01-01T00:00:00Z')

  const urlMap = new Map<string, MetadataRoute.Sitemap[number]>()

  const addUrl = (entry: MetadataRoute.Sitemap[number]) => {
    urlMap.set(entry.url, entry)
  }

  // Helper to add URL for BOTH www and non-www domains
  const addMainUrlBothDomains = (
    path: string,
    options: {
      lastModified?: Date
      changeFrequency?: MetadataRoute.Sitemap[number]['changeFrequency']
      priority?: number
    }
  ) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    const normalizedPath = cleanPath === '/' ? '' : cleanPath

    MAIN_DOMAINS.forEach((domain) => {
      const fullUrl = `${domain}${normalizedPath || '/'}`
      addUrl({
        url: fullUrl,
        lastModified: options.lastModified || currentTimestamp,
        changeFrequency: options.changeFrequency || 'weekly',
        priority: options.priority !== undefined ? options.priority : 0.8,
      })
    })
  }

  // 1. Main Site Static Routes (both www and non-www)
  STATIC_MAIN_ROUTES.forEach((route) => {
    const isLegal = route.path === '/terms-and-conditions' || route.path === '/commission-disclosure'
    addMainUrlBothDomains(route.path, {
      lastModified: isLegal ? annualTimestamp : currentTimestamp,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })
  })

  // 2. Curated Baseline Blog Articles (guarantees presence even if DB query fails)
  Object.keys(BLOG_METADATA).forEach((slug) => {
    addMainUrlBothDomains(`/blog/${slug}`, {
      lastModified: currentTimestamp,
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  // 3. Dynamic Blog Articles from Supabase (Live updates with exact timestamps - both www and non-www)
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    // Use direct Supabase client for reliable server-side read without cookie overhead
    const dbClient = (supabaseUrl && supabaseAnonKey)
      ? createDirectClient(supabaseUrl, supabaseAnonKey)
      : await createServerClient()

    const { data: posts, error } = await dbClient
      .from('blogs')
      .select('slug, updated_at, created_at')
      .eq('published', true)
      .order('created_at', { ascending: false })

    if (!error && posts && posts.length > 0) {
      posts.forEach((post) => {
        if (!post.slug) return
        const postDate = new Date(post.updated_at || post.created_at || currentTimestamp)
        addMainUrlBothDomains(`/blog/${post.slug}`, {
          lastModified: postDate,
          changeFrequency: 'weekly',
          priority: 0.8,
        })
      })
    }
  } catch (error) {
    console.error('Error fetching live blog posts for sitemap:', error)
  }

  // 4. Learning Platform Static Hub Routes
  const learningStaticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${LEARNING_BASE_URL}/`,
      lastModified: currentTimestamp,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${LEARNING_BASE_URL}/categories`,
      lastModified: currentTimestamp,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${LEARNING_BASE_URL}/courses`,
      lastModified: currentTimestamp,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${LEARNING_BASE_URL}/about`,
      lastModified: currentTimestamp,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
  learningStaticRoutes.forEach(addUrl)

  // 5. Learning Category Routes (Baseline + Dynamic)
  Object.keys(LEARNING_CATEGORY_METADATA).forEach((slug) => {
    addUrl({
      url: `${LEARNING_BASE_URL}/categories/${slug}`,
      lastModified: currentTimestamp,
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  try {
    const categories = await getCategories()
    ;(categories || []).forEach((cat) => {
      addUrl({
        url: `${LEARNING_BASE_URL}/categories/${cat.slug}`,
        lastModified: currentTimestamp,
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
      url: `${LEARNING_BASE_URL}/courses/${slug}`,
      lastModified: currentTimestamp,
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  try {
    const courses = await getCourses()
    ;(courses || []).forEach((course) => {
      addUrl({
        url: `${LEARNING_BASE_URL}/courses/${course.slug}`,
        lastModified: new Date(course.updatedAt || currentTimestamp),
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
      url: `${LEARNING_BASE_URL}/courses/${lessonPath}`,
      lastModified: currentTimestamp,
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  })

  return Array.from(urlMap.values())
}
