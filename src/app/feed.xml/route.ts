import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { BLOG_CONTENT_OVERRIDES } from '@/data/blog-content-overrides';

export const dynamic = 'force-dynamic';

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  const siteUrl = 'https://www.stockstrail.in';
  const supabase = await createClient();

  const { data: posts } = await supabase
    .from('blogs')
    .select('id, slug, title, excerpt, content, image_url, created_at, updated_at')
    .eq('published', true)
    .order('created_at', { ascending: false })
    .limit(50);

  const LOCAL_BLOG_COVERS: Record<string, string> = {
    "why-is-the-market-down-a-salaried-employee-s-action-guide": "/blog/why-is-the-market-down.jpg",
    "sebi-mutual-fund-nomination-rule-september-2026": "/blog/sebi-mutual-fund-nomination-rule-september-2026.jpg",
    "the-financial-story-of-himachal-pradesh-s-emplyoee": "/blog/the-financial-story-of-himachal-pradesh-s-emplyoee.jpg",
  };

  const blogItems = (posts || []).map((post) => {
    const postUrl = `${siteUrl}/blog/${post.slug}`;
    const rawContent = BLOG_CONTENT_OVERRIDES[post.slug] || post.content || post.excerpt || '';
    const cleanContent = rawContent.replace(/<[^>]*>?/gm, '').slice(0, 500);
    const pubDate = new Date(post.created_at).toUTCString();
    const coverPath = LOCAL_BLOG_COVERS[post.slug] || post.image_url;
    const fullCoverUrl = coverPath
      ? (coverPath.startsWith('http') ? coverPath : `${siteUrl}${coverPath}`)
      : `${siteUrl}/og-stockstrail.png`;

    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description><![CDATA[${post.excerpt || cleanContent}]]></description>
      <content:encoded><![CDATA[${rawContent.slice(0, 3000)}]]></content:encoded>
      <dc:creator><![CDATA[Vikrant Bhardwaj (AMFI ARN-284122)]]></dc:creator>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[Mutual Funds & Personal Finance]]></category>
      <enclosure url="${fullCoverUrl}" length="0" type="image/jpeg" />
    </item>`;
  }).join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:sy="http://purl.org/rss/1.0/modules/syndication/">
  <channel>
    <title><![CDATA[Stockstrail - Financial Intelligence & Market Insights]]></title>
    <link>${siteUrl}</link>
    <description><![CDATA[Actionable mutual fund research, SEBI regulatory breakdowns, and SIP wealth strategies authored by AMFI-registered distributor Vikrant Bhardwaj (ARN-284122).]]></description>
    <language>en-IN</language>
    <copyright><![CDATA[© ${new Date().getFullYear()} Stockstrail. All Rights Reserved.]]></copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${siteUrl}/stockstrail.png</url>
      <title>Stockstrail</title>
      <link>${siteUrl}</link>
    </image>
    ${blogItems}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
