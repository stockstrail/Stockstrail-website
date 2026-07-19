-- =========================================================================
-- Add RLS policies for all learning tables.
-- Without these policies, tables with RLS enabled return 0 rows to 
-- client-side queries (both public users and admin panel).
-- =========================================================================

-- ============================================
-- learning_categories
-- ============================================
ALTER TABLE public.learning_categories ENABLE ROW LEVEL SECURITY;

-- Public can view published categories
CREATE POLICY "Public can view published categories"
  ON public.learning_categories
  FOR SELECT
  USING (publish = true);

-- Admins can view all categories (including drafts)
CREATE POLICY "Admins can view all categories"
  ON public.learning_categories
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can insert/update/delete categories
CREATE POLICY "Admins can manage categories"
  ON public.learning_categories
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );


-- ============================================
-- learning_courses
-- ============================================
ALTER TABLE public.learning_courses ENABLE ROW LEVEL SECURITY;

-- Public can view published courses
CREATE POLICY "Public can view published courses"
  ON public.learning_courses
  FOR SELECT
  USING (publish = true);

-- Admins can view all courses (including drafts)
CREATE POLICY "Admins can view all courses"
  ON public.learning_courses
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can insert/update/delete courses
CREATE POLICY "Admins can manage courses"
  ON public.learning_courses
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );


-- ============================================
-- learning_modules
-- ============================================
ALTER TABLE public.learning_modules ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view published modules"
  ON public.learning_modules
  FOR SELECT
  USING (publish = true);

CREATE POLICY "Admins can view all modules"
  ON public.learning_modules
  FOR SELECT
  USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "Admins can manage modules"
  ON public.learning_modules
  FOR ALL
  USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );


-- ============================================
-- learning_module_content
-- ============================================
ALTER TABLE public.learning_module_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view module content"
  ON public.learning_module_content
  FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage module content"
  ON public.learning_module_content
  FOR ALL
  USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );


-- ============================================
-- learning_quiz_questions
-- ============================================
ALTER TABLE public.learning_quiz_questions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view quiz questions"
  ON public.learning_quiz_questions
  FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage quiz questions"
  ON public.learning_quiz_questions
  FOR ALL
  USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );


-- ============================================
-- learning_course_faqs
-- ============================================
ALTER TABLE public.learning_course_faqs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view course faqs"
  ON public.learning_course_faqs
  FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage course faqs"
  ON public.learning_course_faqs
  FOR ALL
  USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );


-- Reload PostgREST schema cache
NOTIFY pgrst, 'reload schema';
