import { MetadataRoute } from 'next'

export const dynamic = 'force-static'
export const revalidate = 86400

export default function robots(): MetadataRoute.Robots {
  const privateRoutes = [
    '/admin',
    '/admin/*',
    '/dashboard',
    '/dashboard/*',
    '/api/*',
    '/auth/*',
    '/sign-in',
    '/complete-profile',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: privateRoutes,
      },
      // 1. Major Web Search Engines & Browsers
      { userAgent: 'Googlebot', allow: '/', disallow: privateRoutes },
      { userAgent: 'Googlebot-Image', allow: '/' },
      { userAgent: 'Googlebot-News', allow: '/' },
      { userAgent: 'Google-InspectionTool', allow: '/', disallow: privateRoutes },
      { userAgent: 'Bingbot', allow: '/', disallow: privateRoutes },
      { userAgent: 'Applebot', allow: '/', disallow: privateRoutes },
      { userAgent: 'DuckDuckBot', allow: '/', disallow: privateRoutes },
      { userAgent: 'Bravebot', allow: '/', disallow: privateRoutes },
      { userAgent: 'YandexBot', allow: '/', disallow: privateRoutes },
      { userAgent: 'Baiduspider', allow: '/', disallow: privateRoutes },
      { userAgent: 'SeznamBot', allow: '/', disallow: privateRoutes },
      { userAgent: 'Qwantify', allow: '/', disallow: privateRoutes },
      { userAgent: 'MojeekBot', allow: '/', disallow: privateRoutes },

      // 2. OpenAI (ChatGPT, SearchGPT, Operator)
      { userAgent: 'GPTBot', allow: '/', disallow: privateRoutes },
      { userAgent: 'ChatGPT-User', allow: '/', disallow: privateRoutes },
      { userAgent: 'OAI-SearchBot', allow: '/', disallow: privateRoutes },

      // 3. Google Gemini & AI Overviews
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'GoogleOther', allow: '/' },
      { userAgent: 'GoogleOther-Image', allow: '/' },
      { userAgent: 'GoogleOther-Video', allow: '/' },

      // 4. Anthropic Claude
      { userAgent: 'ClaudeBot', allow: '/', disallow: privateRoutes },
      { userAgent: 'Claude-Web', allow: '/', disallow: privateRoutes },
      { userAgent: 'anthropic-ai', allow: '/', disallow: privateRoutes },

      // 5. Perplexity AI
      { userAgent: 'PerplexityBot', allow: '/', disallow: privateRoutes },
      { userAgent: 'Perplexity-Search', allow: '/', disallow: privateRoutes },

      // 6. Apple Intelligence & Siri Knowledge
      { userAgent: 'Applebot-Extended', allow: '/' },

      // 7. Meta AI & LLaMA Assistants
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
      { userAgent: 'Meta-ExternalFetcher', allow: '/' },
      { userAgent: 'FacebookBot', allow: '/' },

      // 8. Other Premier AI LLM & Search Agents
      { userAgent: 'DeepSeekBot', allow: '/', disallow: privateRoutes },
      { userAgent: 'GrokBot', allow: '/', disallow: privateRoutes },
      { userAgent: 'xAI-Bot', allow: '/', disallow: privateRoutes },
      { userAgent: 'MistralBot', allow: '/', disallow: privateRoutes },
      { userAgent: 'cohere-ai', allow: '/' },
      { userAgent: 'Amazonbot', allow: '/' },
      { userAgent: 'Bytespider', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
      { userAgent: 'Diffbot', allow: '/' },
      { userAgent: 'YouBot', allow: '/', disallow: privateRoutes },
    ],
    sitemap: [
      'https://www.stockstrail.in/sitemap.xml',
      'https://learning.stockstrail.in/sitemap.xml',
    ],
  }
}


