-- ============================================
-- TABLE: blogs
-- ============================================
CREATE TABLE IF NOT EXISTS public.blogs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  image_url TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  
  -- If author is deleted, keep the blog but set author to NULL (Anonymous)
  author_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL, 
  
  -- SEO Fields
  meta_title TEXT,
  meta_description TEXT,
  meta_keywords TEXT,
  
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_blogs_slug ON public.blogs(slug);
CREATE INDEX IF NOT EXISTS idx_blogs_published ON public.blogs(published);
CREATE INDEX IF NOT EXISTS idx_blogs_created_at ON public.blogs(created_at DESC);

-- Enable RLS
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- ============================================
-- RLS POLICIES FOR BLOGS
-- ============================================

-- Public can view PUBLISHED blogs
CREATE POLICY "Public can view published blogs"
  ON public.blogs
  FOR SELECT
  USING (published = true);

-- Admins can view all blogs (including drafts)
CREATE POLICY "Admins can view all blogs"
  ON public.blogs
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can insert/update/delete blogs
CREATE POLICY "Admins can manage blogs"
  ON public.blogs
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Trigger for updated_at
CREATE TRIGGER update_blogs_updated_at
  BEFORE UPDATE ON public.blogs
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============================================
-- STORAGE: blog-images
-- ============================================
-- Create bucket if it doesn't exist. Set strict 100KB (102400 bytes) limit
INSERT INTO storage.buckets (id, name, public, file_size_limit) 
VALUES ('blog-images', 'blog-images', true, 102400)
ON CONFLICT (id) DO UPDATE SET file_size_limit = 102400;

-- Storage Policies
-- Public can read images
CREATE POLICY "Public can view blog images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'blog-images');

-- Admins can insert/update/delete images
CREATE POLICY "Admins can manage blog images"
  ON storage.objects FOR ALL
  USING (
    bucket_id = 'blog-images' AND 
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
