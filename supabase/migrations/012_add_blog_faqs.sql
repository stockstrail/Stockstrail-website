-- Drop the table created in the previous attempt
DROP TABLE IF EXISTS public.blog_faqs CASCADE;

-- Add faqs column of type JSONB to blogs table
ALTER TABLE public.blogs ADD COLUMN IF NOT EXISTS faqs JSONB DEFAULT '[]'::jsonb;
