const fs = require('fs');
const parsed = JSON.parse(fs.readFileSync('blueprint_parsed.json', 'utf8'));

let content = `// Generated from Stockstrail_SEO_Meta_Blueprint.xlsx / stockstrail-seo-blueprint.md
export interface PageMetadataRecord {
  title: string;
  description: string;
  canonical?: string;
  indexing?: 'index' | 'noindex';
}

export const MAIN_SITE_METADATA: Record<string, PageMetadataRecord> = {
`;

// Map main site pages
parsed.mainPages.forEach(p => {
  let key = p.canonical.replace('https://www.stockstrail.in', '');
  if (key === '') key = '/';
  content += `  ${JSON.stringify(key)}: {\n`;
  content += `    title: ${JSON.stringify(p.newTitle)},\n`;
  content += `    description: ${JSON.stringify(p.newDesc)},\n`;
  content += `    canonical: ${JSON.stringify(p.canonical)},\n`;
  content += `    indexing: ${JSON.stringify(p.indexing === 'NOINDEX' ? 'noindex' : 'index')},\n`;
  content += `  },\n`;
});

content += `};\n\n`;

// Map learning hub pages
content += `export const LEARNING_HUB_METADATA: Record<string, PageMetadataRecord> = {\n`;
parsed.learningPages.filter(p => p.group === 'Learning Hub').forEach(p => {
  let key = p.canonical.replace('https://learning.stockstrail.in', '');
  if (key === '') key = '/';
  content += `  ${JSON.stringify(key)}: {\n`;
  content += `    title: ${JSON.stringify(p.newTitle)},\n`;
  content += `    description: ${JSON.stringify(p.newDesc)},\n`;
  content += `    canonical: ${JSON.stringify(p.canonical)},\n`;
  content += `    indexing: ${JSON.stringify(p.indexing === 'NOINDEX' ? 'noindex' : 'index')},\n`;
  content += `  },\n`;
});
content += `};\n\n`;

// Map learning categories
content += `export const LEARNING_CATEGORY_METADATA: Record<string, PageMetadataRecord> = {\n`;
parsed.learningPages.filter(p => p.group === 'Learning Category').forEach(p => {
  const slug = p.canonical.replace('https://learning.stockstrail.in/categories/', '');
  content += `  ${JSON.stringify(slug)}: {\n`;
  content += `    title: ${JSON.stringify(p.newTitle)},\n`;
  content += `    description: ${JSON.stringify(p.newDesc)},\n`;
  content += `    canonical: ${JSON.stringify(p.canonical)},\n`;
  content += `    indexing: ${JSON.stringify(p.indexing === 'NOINDEX' ? 'noindex' : 'index')},\n`;
  content += `  },\n`;
});
content += `};\n\n`;

// Map learning courses
content += `export const LEARNING_COURSE_METADATA: Record<string, PageMetadataRecord> = {\n`;
parsed.learningPages.filter(p => p.group === 'Learning Course').forEach(p => {
  const slug = p.canonical.replace('https://learning.stockstrail.in/courses/', '');
  content += `  ${JSON.stringify(slug)}: {\n`;
  content += `    title: ${JSON.stringify(p.newTitle)},\n`;
  content += `    description: ${JSON.stringify(p.newDesc)},\n`;
  content += `    canonical: ${JSON.stringify(p.canonical)},\n`;
  content += `    indexing: ${JSON.stringify(p.indexing === 'NOINDEX' ? 'noindex' : 'index')},\n`;
  content += `  },\n`;
});
content += `};\n\n`;

// Map learning lessons
content += `export const LEARNING_LESSON_METADATA: Record<string, PageMetadataRecord> = {\n`;
parsed.learningPages.filter(p => p.group === 'Learning Lesson').forEach(p => {
  const key = p.canonical.replace('https://learning.stockstrail.in/courses/', '');
  content += `  ${JSON.stringify(key)}: {\n`;
  content += `    title: ${JSON.stringify(p.newTitle)},\n`;
  content += `    description: ${JSON.stringify(p.newDesc)},\n`;
  content += `    canonical: ${JSON.stringify(p.canonical)},\n`;
  content += `    indexing: ${JSON.stringify(p.indexing === 'NOINDEX' ? 'noindex' : 'index')},\n`;
  content += `  },\n`;
});
content += `};\n\n`;

// Map blog posts
content += `export const BLOG_METADATA: Record<string, PageMetadataRecord> = {\n`;
parsed.mainPages.filter(p => p.group === 'Blog Post').forEach(p => {
  const slug = p.canonical.replace('https://www.stockstrail.in/blog/', '');
  content += `  ${JSON.stringify(slug)}: {\n`;
  content += `    title: ${JSON.stringify(p.newTitle)},\n`;
  content += `    description: ${JSON.stringify(p.newDesc)},\n`;
  content += `    canonical: ${JSON.stringify(p.canonical)},\n`;
  content += `    indexing: ${JSON.stringify(p.indexing === 'NOINDEX' ? 'noindex' : 'index')},\n`;
  content += `  },\n`;
});
content += `};\n`;

fs.writeFileSync('src/lib/seo/blueprint-meta.ts', content);
console.log('Successfully generated src/lib/seo/blueprint-meta.ts with ALL learning hub pages!');
