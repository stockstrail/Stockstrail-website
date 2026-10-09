const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

const envContent = fs.readFileSync('.env.local', 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const [k, ...v] = line.split('=');
  if (k && v) env[k.trim()] = v.join('=').trim().replace(/^['"]|['"]$/g, '');
});

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

async function run() {
  const { data, error } = await supabase.from('blogs').select('id, slug, title, meta_title, meta_description');
  if (error) {
    console.error('Supabase error:', error);
    return;
  }
  console.log('Found blogs count:', data.length);
  data.forEach((b, i) => {
    console.log(`[${i+1}] ID: ${b.id}`);
    console.log(`    Slug: ${b.slug}`);
    console.log(`    Title: ${b.title}`);
    console.log(`    MetaTitle: ${b.meta_title}`);
    console.log(`    MetaDesc: ${b.meta_description}`);
  });
}
run();
