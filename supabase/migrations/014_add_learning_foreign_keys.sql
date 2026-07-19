-- =========================================================================
-- SCHEMA: Add foreign key constraints for learning tables to resolve schema cache issues
-- =========================================================================

-- 1. learning_courses -> learning_categories
UPDATE public.learning_courses
SET category_id = NULL
WHERE category_id IS NOT NULL 
  AND category_id NOT IN (SELECT id FROM public.learning_categories);

ALTER TABLE public.learning_courses
DROP CONSTRAINT IF EXISTS fk_learning_courses_category,
ADD CONSTRAINT fk_learning_courses_category
FOREIGN KEY (category_id) 
REFERENCES public.learning_categories(id)
ON DELETE SET NULL;


-- 2. learning_modules -> learning_courses
DELETE FROM public.learning_modules
WHERE course_id NOT IN (SELECT id FROM public.learning_courses);

ALTER TABLE public.learning_modules
DROP CONSTRAINT IF EXISTS fk_learning_modules_course,
ADD CONSTRAINT fk_learning_modules_course
FOREIGN KEY (course_id) 
REFERENCES public.learning_courses(id)
ON DELETE CASCADE;


-- 3. learning_module_content -> learning_modules
DELETE FROM public.learning_module_content
WHERE module_id NOT IN (SELECT id FROM public.learning_modules);

ALTER TABLE public.learning_module_content
DROP CONSTRAINT IF EXISTS fk_learning_module_content_module,
ADD CONSTRAINT fk_learning_module_content_module
FOREIGN KEY (module_id) 
REFERENCES public.learning_modules(id)
ON DELETE CASCADE;


-- 4. learning_quiz_questions -> learning_courses
DELETE FROM public.learning_quiz_questions
WHERE course_id NOT IN (SELECT id FROM public.learning_courses);

ALTER TABLE public.learning_quiz_questions
DROP CONSTRAINT IF EXISTS fk_learning_quiz_questions_course,
ADD CONSTRAINT fk_learning_quiz_questions_course
FOREIGN KEY (course_id) 
REFERENCES public.learning_courses(id)
ON DELETE CASCADE;


-- 5. learning_course_faqs -> learning_courses
DELETE FROM public.learning_course_faqs
WHERE course_id NOT IN (SELECT id FROM public.learning_courses);

ALTER TABLE public.learning_course_faqs
DROP CONSTRAINT IF EXISTS fk_learning_course_faqs_course,
ADD CONSTRAINT fk_learning_course_faqs_course
FOREIGN KEY (course_id) 
REFERENCES public.learning_courses(id)
ON DELETE CASCADE;
