const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootDir = path.resolve(__dirname, '..');

const svgCanvasSize = 512;
// Perfectly centered logo mark with #012928 brand background
const svgFavicon = `
<svg xmlns="http://www.w3.org/2000/svg" width="${svgCanvasSize}" height="${svgCanvasSize}" viewBox="0 0 ${svgCanvasSize} ${svgCanvasSize}">
  <rect width="100%" height="100%" fill="#012928" />
  <g transform="translate(93.1, 73.1) scale(10.319)">
    <path
      d="M1.15294 18.553C0.922293 18.3223 0.923909 17.9479 1.15654 17.7192L15.5948 3.52791C16.0954 3.03584 16.8991 3.0393 17.3955 3.53568L18.6805 4.82068C19.183 5.32315 19.1794 6.13889 18.6726 6.63701L6.52575 18.5761C5.032 20.0444 2.63398 20.034 1.15294 18.553Z"
      fill="#00D873"
    />
    <path
      d="M20.498 0.96257C20.9132 0.86584 21.2857 1.23841 21.189 1.65361L19.7088 8.0073C19.6064 8.447 19.0607 8.6029 18.7414 8.2837L13.868 3.41016C13.5487 3.09092 13.7046 2.54519 14.1443 2.44276L20.498 0.96257Z"
      fill="#00D873"
    />
    <path
      d="M30.5214 17.0648C30.6657 17.209 30.6647 17.4433 30.5192 17.5863L15.742 32.1108C15.3414 32.5044 14.6985 32.5017 14.3014 32.1046L12.6547 30.4578C12.2527 30.0559 12.2555 29.4033 12.6609 29.0048L24.8337 17.0402C26.415 15.4859 28.9536 15.4969 30.5214 17.0648Z"
      fill="#00D873"
    />
    <path
      d="M11.0196 34.4984C10.6044 34.5951 10.2318 34.2225 10.3286 33.8073L11.8087 27.4536C11.9112 27.0139 12.4569 26.858 12.7761 27.1773L17.6496 32.0508C17.9688 32.37 17.8129 32.9157 17.3733 33.0182L11.0196 34.4984Z"
      fill="#00D873"
    />
  </g>
</svg>
`.trim();

// Function to generate multi-size ICO buffer containing PNGs
function createIco(pngBuffers) {
  const count = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + count * dirEntrySize;

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: 1 = ICO
  header.writeUInt16LE(count, 4); // count

  const entries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(item.width >= 256 ? 0 : item.width, 0);
    entry.writeUInt8(item.height >= 256 ? 0 : item.height, 1);
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(item.buffer.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    entries.push(entry);
    offset += item.buffer.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map(p => p.buffer)]);
}

async function generate() {
  const svgBuffer = Buffer.from(svgFavicon);

  // Generate resolutions:
  // 16x16, 32x32, 48x48 (for ICO)
  // 48x48 (Google search standard: favicon-48x48.png, favicon.png)
  // 96x96 (Google search high-dpi: favicon-96x96.png)
  // 180x180 (Apple touch icon: apple-touch-icon.png)
  // 192x192 (Android / PWA: icon-192.png)
  // 512x512 (PWA / Master: icon-512.png)

  const png16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  const png32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  const png48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();
  const png96 = await sharp(svgBuffer).resize(96, 96).png().toBuffer();
  const png180 = await sharp(svgBuffer).resize(180, 180).png().toBuffer();
  const png192 = await sharp(svgBuffer).resize(192, 192).png().toBuffer();
  const png512 = await sharp(svgBuffer).resize(512, 512).png().toBuffer();

  const icoBuffer = createIco([
    { width: 48, height: 48, buffer: png48 },
    { width: 32, height: 32, buffer: png32 },
    { width: 16, height: 16, buffer: png16 },
  ]);

  const outputFiles = [
    // In public/
    { path: path.join(rootDir, 'public', 'favicon.svg'), data: svgBuffer },
    { path: path.join(rootDir, 'public', 'favicon.ico'), data: icoBuffer },
    { path: path.join(rootDir, 'public', 'favicon.png'), data: png48 },
    { path: path.join(rootDir, 'public', 'favicon-48x48.png'), data: png48 },
    { path: path.join(rootDir, 'public', 'favicon-96x96.png'), data: png96 },
    { path: path.join(rootDir, 'public', 'apple-touch-icon.png'), data: png180 },
    { path: path.join(rootDir, 'public', 'apple-touch-icon-precomposed.png'), data: png180 },
    { path: path.join(rootDir, 'public', 'icon.png'), data: png512 },
    { path: path.join(rootDir, 'public', 'icon-192.png'), data: png192 },
    { path: path.join(rootDir, 'public', 'icon-512.png'), data: png512 },

    // In src/app/ (Next.js App Router metadata conventions)
    { path: path.join(rootDir, 'src', 'app', 'favicon.ico'), data: icoBuffer },
    { path: path.join(rootDir, 'src', 'app', 'icon.png'), data: png512 },
    { path: path.join(rootDir, 'src', 'app', 'apple-icon.png'), data: png180 },
  ];

  for (const file of outputFiles) {
    fs.writeFileSync(file.path, file.data);
    console.log(`Wrote: ${file.path} (${file.data.length} bytes)`);
  }

  console.log('All favicons successfully generated!');
}

generate().catch(console.error);
