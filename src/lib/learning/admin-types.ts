/**
 * TypeScript types for Learning CMS Supabase tables
 */

export type LearningCategory = {
  id: string;
  name: string;
  slug: string;
  short_description: string | null;
  description: string | null;
  cover_image: string | null;
  thumbnail: string | null;
  icon: string | null;
  display_order: number;
  featured: boolean;
  publish: boolean;
  show_on_homepage: boolean;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;
  canonical_url: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image: string | null;
  twitter_image: string | null;
  schema_type: string | null;
  robots: string | null;
  created_at: string;
  updated_at: string;
  course_count?: number;
};

export type LearningCourse = {
  id: string;
  category_id: string | null;
  title: string;
  slug: string;
  short_description: string | null;
  description: string | null;
  cover_image: string | null;
  thumbnail: string | null;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  reading_time: number;
  completion_time: number;
  language: string;
  author: string;
  version: string;
  tags: string[] | null;
  prerequisites: string | null;
  learning_outcomes: string | null;
  objectives: string | null;
  target_audience: string | null;
  highlights: string | null;
  display_order: number;
  featured: boolean;
  publish: boolean;
  show_on_homepage: boolean;
  key_takeaways: string[] | null;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string | null;
  canonical_url: string | null;
  og_title: string | null;
  og_description: string | null;
  og_image: string | null;
  twitter_image: string | null;
  schema_type: string | null;
  robots: string | null;
  faq_schema: object | null;
  json_ld: object | null;
  created_at: string;
  updated_at: string;
  category?: Pick<LearningCategory, 'id' | 'name' | 'slug'> | null;
  module_count?: number;
};

export type LearningModule = {
  id: string;
  course_id: string;
  title: string;
  slug: string;
  summary: string | null;
  reading_time: number;
  module_order: number;
  publish: boolean;
  free_preview: boolean;
  icon: string | null;
  banner: string | null;
  created_at: string;
  updated_at: string;
  content?: LearningModuleContent | null;
};

export type LearningModuleContent = {
  id: string;
  module_id: string;
  markdown_content: string | null;
  embedded_images: string[] | null;
  embedded_videos: string[] | null;
  raw_blocks: object | null;
  created_at: string;
  updated_at: string;
};

export type LearningQuizQuestion = {
  id: string;
  course_id: string;
  question: string;
  question_type: 'mcq' | 'true_false' | 'fill_blank' | 'scenario';
  options: string[] | null;
  correct_answer_index: number | null;
  correct_answer_text: string | null;
  explanation: string | null;
  display_order: number;
  created_at: string;
};

export type LearningCourseFAQ = {
  id: string;
  course_id: string;
  question: string;
  answer: string;
  display_order: number;
  created_at: string;
};

export type CategoryFormData = Omit<LearningCategory, 'id' | 'created_at' | 'updated_at' | 'course_count'>;
export type CourseFormData = Omit<LearningCourse, 'id' | 'created_at' | 'updated_at' | 'category' | 'module_count'>;
export type ModuleFormData = Omit<LearningModule, 'id' | 'created_at' | 'updated_at' | 'content'> & { markdown_content?: string };
export type QuizQuestionFormData = Omit<LearningQuizQuestion, 'id' | 'created_at'>;
export type CourseFAQFormData = Omit<LearningCourseFAQ, 'id' | 'created_at'>;

export const EMPTY_CATEGORY: CategoryFormData = {
  name: '', slug: '', short_description: '', description: '',
  cover_image: null, thumbnail: null, icon: '', display_order: 0,
  featured: false, publish: false, show_on_homepage: false,
  seo_title: null, seo_description: null, seo_keywords: null,
  canonical_url: null, og_title: null, og_description: null,
  og_image: null, twitter_image: null, schema_type: 'ItemList', robots: 'index,follow',
};

export const EMPTY_COURSE: CourseFormData = {
  category_id: null, title: '', slug: '', short_description: '', description: '',
  cover_image: null, thumbnail: null, difficulty: 'Beginner',
  reading_time: 0, completion_time: 0, language: 'English',
  author: 'Vikrant Bhardwaj', version: '1.0', tags: [],
  prerequisites: '', learning_outcomes: '', objectives: '',
  target_audience: '', highlights: '', display_order: 0,
  featured: false, publish: false, show_on_homepage: false, key_takeaways: [],
  seo_title: null, seo_description: null, seo_keywords: null,
  canonical_url: null, og_title: null, og_description: null,
  og_image: null, twitter_image: null, schema_type: 'Course',
  robots: 'index,follow', faq_schema: null, json_ld: null,
};
