import { MetadataRoute } from 'next';
import { createClient as createDirectClient } from '@supabase/supabase-js';
import { createClient as createServerClient } from '@/lib/supabase/server';
import { BLOG_METADATA } from '@/lib/seo/blueprint-meta';

// Revalidate every hour in background; also revalidated on-demand when blogs are published
export const revalidate = 3600;

export const SITE_URL = 'https://www.stockstrail.in';

interface StaticRouteDef {
  path: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  lastModified?: string;
}

const STATIC_MAIN_ROUTES: StaticRouteDef[] = [
  { path: '/', changeFrequency: 'daily', priority: 1.0, lastModified: '2026-11-25T00:00:00.000Z' },
  { path: '/about', changeFrequency: 'weekly', priority: 0.9, lastModified: '2026-11-20T00:00:00.000Z' },
  { path: '/services', changeFrequency: 'weekly', priority: 0.9, lastModified: '2026-11-25T00:00:00.000Z' },
  { path: '/services/mutual-funds', changeFrequency: 'weekly', priority: 0.9, lastModified: '2026-11-20T00:00:00.000Z' },
  { path: '/services/insurance', changeFrequency: 'weekly', priority: 0.9, lastModified: '2026-11-20T00:00:00.000Z' },
  { path: '/services/fixed-deposit', changeFrequency: 'weekly', priority: 0.9, lastModified: '2026-11-20T00:00:00.000Z' },
  { path: '/services/loan', changeFrequency: 'weekly', priority: 0.8, lastModified: '2026-11-20T00:00:00.000Z' },
  { path: '/services/financial-protection', changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-11-20T00:00:00.000Z' },
  { path: '/services/open-demat', changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-11-20T00:00:00.000Z' },
  { path: '/calculators', changeFrequency: 'weekly', priority: 0.9, lastModified: '2026-11-20T00:00:00.000Z' },
  { path: '/calculators/sip', changeFrequency: 'weekly', priority: 0.9, lastModified: '2026-11-20T00:00:00.000Z' },
  { path: '/calculators/fd', changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-11-20T00:00:00.000Z' },
  { path: '/calculators/lumpsum', changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-11-20T00:00:00.000Z' },
  { path: '/calculators/emi', changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-11-20T00:00:00.000Z' },
  { path: '/calculators/tax', changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-11-20T00:00:00.000Z' },
  { path: '/calculators/rd', changeFrequency: 'monthly', priority: 0.7, lastModified: '2026-11-20T00:00:00.000Z' },
  { path: '/lets-talk', changeFrequency: 'weekly', priority: 0.9, lastModified: '2026-11-20T00:00:00.000Z' },
  { path: '/check-risk-profile', changeFrequency: 'monthly', priority: 0.8, lastModified: '2026-11-20T00:00:00.000Z' },
  { path: '/blog', changeFrequency: 'daily', priority: 0.9, lastModified: '2026-11-25T00:00:00.000Z' },
  { path: '/bse-holidays', changeFrequency: 'weekly', priority: 0.8, lastModified: '2026-11-20T00:00:00.000Z' },
  { path: '/nse-holidays', changeFrequency: 'weekly', priority: 0.8, lastModified: '2026-11-20T00:00:00.000Z' },
  { path: '/editorial-policy', changeFrequency: 'monthly', priority: 0.7, lastModified: '2026-11-20T00:00:00.000Z' },
  { path: '/terms-and-conditions', changeFrequency: 'yearly', priority: 0.5, lastModified: '2026-01-01T00:00:00.000Z' },
  { path: '/commission-disclosure', changeFrequency: 'yearly', priority: 0.5, lastModified: '2026-01-01T00:00:00.000Z' },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urlMap = new Map<string, MetadataRoute.Sitemap[number]>();

  const addUrl = (entry: MetadataRoute.Sitemap[number]) => {
    urlMap.set(entry.url, entry);
  };

  // 1. Static Canonical Pages (Only https://www.stockstrail.in)
  STATIC_MAIN_ROUTES.forEach((route) => {
    const fullUrl = route.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
    addUrl({
      url: fullUrl,
      lastModified: new Date(route.lastModified || '2026-11-20T00:00:00.000Z'),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    });
  });

  // 2. Baseline Blog Articles (Guarantees presence even if DB query fails or Supabase is dormant)
  Object.keys(BLOG_METADATA).forEach((slug) => {
    addUrl({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: new Date('2026-11-20T00:00:00.000Z'),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  // 3. Dynamic Live Blog Articles from Supabase
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    const dbClient = (supabaseUrl && supabaseAnonKey)
      ? createDirectClient(supabaseUrl, supabaseAnonKey)
      : await createServerClient();

    const { data: posts, error } = await dbClient
      .from('blogs')
      .select('slug, updated_at, created_at')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (!error && posts && posts.length > 0) {
      posts.forEach((post) => {
        if (!post.slug) return;
        const postDate = new Date(post.updated_at || post.created_at || '2026-11-20T00:00:00.000Z');
        addUrl({
          url: `${SITE_URL}/blog/${post.slug}`,
          lastModified: postDate,
          changeFrequency: 'weekly',
          priority: 0.8,
        });
      });
    }
  } catch (error) {
    console.error('Error fetching live blog posts for sitemap (using baseline):', error);
  }

  return Array.from(urlMap.values());
}
