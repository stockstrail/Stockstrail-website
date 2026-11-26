import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { notifyIndexNow } from '@/lib/seo/indexnow';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { slug, path: targetPath, secret } = body;

    // Optional secret verification if configured
    if (process.env.REVALIDATION_SECRET && secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid secret token' }, { status: 401 });
    }

    const revalidatedPaths: string[] = [];

    // 1. On-demand purge and revalidate key discovery hubs
    revalidatePath('/blog');
    revalidatePath('/sitemap.xml');
    revalidatePath('/rss.xml');
    revalidatePath('/feed.xml');
    revalidatePath('/');
    revalidatedPaths.push('/blog', '/sitemap.xml', '/rss.xml', '/feed.xml', '/');

    // 2. Revalidate the specific blog post URL
    if (slug) {
      const postPath = `/blog/${slug}`;
      revalidatePath(postPath, 'page');
      revalidatedPaths.push(postPath);

      // 3. Inform search engines via IndexNow (Bing, Yandex, Seznam, etc.)
      notifyIndexNow(`https://www.stockstrail.in${postPath}`).catch((e) => {
        console.warn('IndexNow notification notice (non-fatal):', e);
      });
    } else if (targetPath) {
      revalidatePath(targetPath);
      revalidatedPaths.push(targetPath);
    }

    return NextResponse.json({
      revalidated: true,
      paths: revalidatedPaths,
      timestamp: new Date().toISOString(),
    });
  } catch (err: any) {
    console.error('Revalidation error:', err);
    return NextResponse.json(
      { message: 'Error revalidating', error: err?.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
