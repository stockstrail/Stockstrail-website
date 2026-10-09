const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const envContent = fs.readFileSync('.env.local', 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const [k, ...v] = line.split('=');
  if (k && v) env[k.trim()] = v.join('=').trim().replace(/^['"]|['"]$/g, '');
});

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
const parsed = JSON.parse(fs.readFileSync('blueprint_parsed.json', 'utf8'));

const blogPages = parsed.mainPages.filter(p => p.group === 'Blog Post');

async function updateBlogs() {
  console.log(`Starting update for ${blogPages.length} blog posts in Supabase...`);
  let successCount = 0;
  let errorCount = 0;

  for (const b of blogPages) {
    const slug = b.canonical.replace('https://www.stockstrail.in/blog/', '');
    const newTitle = b.newTitle;
    const newDesc = b.newDesc;

    console.log(`\nUpdating post slug: "${slug}"`);
    console.log(`  New Title (${newTitle.length} chars): ${newTitle}`);
    console.log(`  New Desc (${newDesc.length} chars): ${newDesc}`);

    const { data, error } = await supabase
      .from('blogs')
      .update({
        meta_title: newTitle,
        meta_description: newDesc
      })
      .eq('slug', slug)
      .select('id, slug, meta_title, meta_description');

    if (error) {
      console.error(`  ERROR updating "${slug}":`, error.message);
      errorCount++;
    } else if (!data || data.length === 0) {
      console.warn(`  WARNING: No record found with slug "${slug}"`);
      errorCount++;
    } else {
      console.log(`  SUCCESS! Updated row ID: ${data[0].id}`);
      successCount++;
    }
  }

  console.log(`\n=== UPDATE SUMMARY ===`);
  console.log(`Successfully updated: ${successCount}/${blogPages.length}`);
  console.log(`Errors / Not found: ${errorCount}`);
}

updateBlogs();
