-- ============================================
-- Add Content Images to Blogs
-- ============================================

ALTER TABLE public.blogs 
ADD COLUMN IF NOT EXISTS content_images TEXT[] DEFAULT '{}';
