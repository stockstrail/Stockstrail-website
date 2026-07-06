-- ============================================
-- STORAGE: update blog-images size limit
-- ============================================
-- Set limit to 250KB (256000 bytes)
UPDATE storage.buckets 
SET file_size_limit = 256000
WHERE id = 'blog-images';
