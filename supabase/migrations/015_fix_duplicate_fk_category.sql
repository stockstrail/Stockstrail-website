-- =========================================================================
-- Fix: Drop ALL duplicate/auto-generated FK constraints on learning tables
-- that cause PostgREST PGRST201 "more than one relationship" error.
-- Then re-add only the named constraints and reload PostgREST schema cache.
-- =========================================================================

-- 1. learning_courses.category_id -> learning_categories.id
--    Drop both so we can cleanly re-add
ALTER TABLE public.learning_courses
  DROP CONSTRAINT IF EXISTS learning_courses_category_id_fkey,
  DROP CONSTRAINT IF EXISTS fk_learning_courses_category;

ALTER TABLE public.learning_courses
  ADD CONSTRAINT fk_learning_courses_category
  FOREIGN KEY (category_id)
  REFERENCES public.learning_categories(id)
  ON DELETE SET NULL;


-- 2. learning_modules.course_id -> learning_courses.id
ALTER TABLE public.learning_modules
  DROP CONSTRAINT IF EXISTS learning_modules_course_id_fkey,
  DROP CONSTRAINT IF EXISTS fk_learning_modules_course;

ALTER TABLE public.learning_modules
  ADD CONSTRAINT fk_learning_modules_course
  FOREIGN KEY (course_id)
  REFERENCES public.learning_courses(id)
  ON DELETE CASCADE;


-- 3. learning_module_content.module_id -> learning_modules.id
ALTER TABLE public.learning_module_content
  DROP CONSTRAINT IF EXISTS learning_module_content_module_id_fkey,
  DROP CONSTRAINT IF EXISTS fk_learning_module_content_module;

ALTER TABLE public.learning_module_content
  ADD CONSTRAINT fk_learning_module_content_module
  FOREIGN KEY (module_id)
  REFERENCES public.learning_modules(id)
  ON DELETE CASCADE;


-- 4. learning_quiz_questions.course_id -> learning_courses.id
ALTER TABLE public.learning_quiz_questions
  DROP CONSTRAINT IF EXISTS learning_quiz_questions_course_id_fkey,
  DROP CONSTRAINT IF EXISTS fk_learning_quiz_questions_course;

ALTER TABLE public.learning_quiz_questions
  ADD CONSTRAINT fk_learning_quiz_questions_course
  FOREIGN KEY (course_id)
  REFERENCES public.learning_courses(id)
  ON DELETE CASCADE;


-- 5. learning_course_faqs.course_id -> learning_courses.id
ALTER TABLE public.learning_course_faqs
  DROP CONSTRAINT IF EXISTS learning_course_faqs_course_id_fkey,
  DROP CONSTRAINT IF EXISTS fk_learning_course_faqs_course;

ALTER TABLE public.learning_course_faqs
  ADD CONSTRAINT fk_learning_course_faqs_course
  FOREIGN KEY (course_id)
  REFERENCES public.learning_courses(id)
  ON DELETE CASCADE;


-- Reload PostgREST schema cache so all changes take effect immediately
NOTIFY pgrst, 'reload schema';
