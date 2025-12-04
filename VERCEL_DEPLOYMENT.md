# Vercel Deployment Guide

## Pre-Deployment Checklist

- ✅ Build successful: `npm run build` passes without errors
- ✅ TypeScript errors resolved
- ✅ Environment variables documented
- ✅ .gitignore configured correctly
- ✅ No hardcoded sensitive data

## Environment Variables for Vercel

Add these environment variables in your Vercel project settings under **Settings → Environment Variables**:

### Required Variables

1. **NEXT_PUBLIC_SUPABASE_URL**
   - Get from: Supabase Dashboard → Project Settings → API
   - Example: `https://your-project.supabase.co`

2. **NEXT_PUBLIC_SUPABASE_ANON_KEY**
   - Get from: Supabase Dashboard → Project Settings → API
   - This key is public (used in browser)

3. **BLOGGER_API_KEY**
   - Get from: Google Cloud Console → APIs & Services → Credentials
   - This should be kept secure (used server-side only)

4. **BLOG_ID**
   - Your Blogger blog ID
   - Example: `8967612143410750655`

5. **NEXT_PUBLIC_SITE_URL**
   - Set to: `https://your-domain.com` (your production domain)
   - Important for metadata and OpenGraph images

## Deployment Steps

1. **Push to Git**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push
   ```

2. **Deploy to Vercel**
   - Connect your Git repository to Vercel
   - Vercel will automatically detect Next.js configuration
   - Add environment variables in project settings
   - Click Deploy

3. **Verify Deployment**
   - Check build logs for any errors
   - Visit your production URL
   - Test calculator functionality
   - Verify blog posts load correctly
   - Test Supabase connections (forms, reviews)

## Post-Deployment

- Update DNS records if using custom domain
- Test all forms (contact, inquiry submissions)
- Verify OG images work for social sharing
- Monitor error logs in Vercel dashboard

## Troubleshooting

If deployment fails:

1. **Check build logs** in Vercel dashboard
2. **Verify environment variables** are set correctly
3. **Run local build** to test: `npm run build`
4. **Check .gitignore** - ensure sensitive files are ignored

## Notes

- The project uses static generation where possible for better performance
- Dynamic routes (blog posts, calculator tabs) are server-rendered on demand
- Ensure NEXT_PUBLIC_SITE_URL is set to correct domain for proper metadata
