-- ============================================
-- STORAGE: update blog-images size limit to 5MB
-- ============================================
-- Set limit to 5MB (5242880 bytes)
UPDATE storage.buckets 
SET file_size_limit = 5242880
WHERE id = 'blog-images';
