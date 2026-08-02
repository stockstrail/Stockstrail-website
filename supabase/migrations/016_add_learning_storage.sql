-- ============================================
-- STORAGE: learning
-- ============================================
-- Create the learning storage bucket for course cover images,
-- category images, lesson media, and other learning assets.
-- Max file size: 5MB (5242880 bytes)

INSERT INTO storage.buckets (id, name, public, file_size_limit)
VALUES ('learning', 'learning', true, 5242880)
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 5242880;

-- ============================================
-- STORAGE RLS POLICIES
-- ============================================

-- Anyone (public) can read/view learning images
CREATE POLICY "Public can view learning images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'learning');

-- Admins can upload new learning images
CREATE POLICY "Admins can upload learning images"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'learning' AND
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can update (replace) learning images
CREATE POLICY "Admins can update learning images"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'learning' AND
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can delete learning images
CREATE POLICY "Admins can delete learning images"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'learning' AND
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
