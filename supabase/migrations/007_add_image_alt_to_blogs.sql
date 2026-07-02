-- ============================================
-- Add Image Alt Text to Blogs
-- ============================================

ALTER TABLE public.blogs 
ADD COLUMN IF NOT EXISTS image_alt TEXT;
