const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDirs = [
  'public/assets',
  'public/hero',
  'public/services',
  'public/about_us',
  'public/logos'
];

async function processFile(filePath) {
  const stat = fs.statSync(filePath);
  const ext = path.extname(filePath).toLowerCase();

  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;
  if (filePath.endsWith('.docx') || filePath.endsWith('.pdf')) return;

  // Optimize files > 40KB
  if (stat.size < 40 * 1024) return;

  const originalKb = (stat.size / 1024).toFixed(1);

  try {
    const inputBuffer = fs.readFileSync(filePath);
    const image = sharp(inputBuffer);
    const metadata = await image.metadata();

    let pipeline = sharp(inputBuffer);
    // If image is larger than 1920px, scale it down proportionally
    if (metadata.width && metadata.width > 1920) {
      pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
    }

    const optimizedWebp = await pipeline
      .webp({ quality: 80, effort: 6 })
      .toBuffer();

    const newKb = (optimizedWebp.length / 1024).toFixed(1);

    if (ext === '.webp') {
      if (optimizedWebp.length < stat.size) {
        fs.writeFileSync(filePath, optimizedWebp);
        console.log(`[WebP Reduced] ${filePath}: ${originalKb}KB -> ${newKb}KB`);
      }
    } else {
      // For jpg/png, also create/update sibling .webp
      const webpPath = filePath.replace(new RegExp('\\' + ext + '$', 'i'), '.webp');
      fs.writeFileSync(webpPath, optimizedWebp);
      console.log(`[Created WebP] ${filePath} (${originalKb}KB) -> ${webpPath} (${newKb}KB)`);
      
      // Also compress the original jpg/png in place so if it's referenced directly it's light
      if (ext === '.jpg' || ext === '.jpeg') {
        const optimizedJpg = await sharp(inputBuffer)
          .resize(metadata.width && metadata.width > 1920 ? { width: 1920, withoutEnlargement: true } : undefined)
          .jpeg({ quality: 80, mozjpeg: true })
          .toBuffer();
        if (optimizedJpg.length < stat.size) {
          fs.writeFileSync(filePath, optimizedJpg);
          console.log(`[JPG Reduced] ${filePath}: ${originalKb}KB -> ${(optimizedJpg.length / 1024).toFixed(1)}KB`);
        }
      }
    }
  } catch (err) {
    console.error(`[Error] ${filePath}:`, err.message);
  }
}

async function walkDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      await walkDir(full);
    } else {
      await processFile(full);
    }
  }
}

async function main() {
  console.log('Starting image compression...');
  for (const d of targetDirs) {
    await walkDir(d);
  }
  console.log('Image compression completed!');
}

main();
