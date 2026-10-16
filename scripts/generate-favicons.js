const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const svgPath = path.join(__dirname, '../public/favicon.svg');
  const pngLogoPath = path.join(__dirname, '../public/stockstrail.png');
  const publicDir = path.join(__dirname, '../public');
  const appDir = path.join(__dirname, '../src/app');

  console.log('Generating high-res favicons for Google and all devices...');

  // Use the SVG logo or high-res PNG
  // For SVG: ensure it renders on the brand background (#012928 or transparent)
  // Let's create an icon with the brand icon
  const sizes = [16, 32, 48, 96, 144, 180, 192, 512];

  for (const size of sizes) {
    const outputPath = path.join(publicDir, `favicon-${size}x${size}.png`);
    await sharp(svgPath, { density: 300 })
      .resize(size, size, { fit: 'contain', background: { r: 1, g: 41, b: 40, alpha: 1 } })
      .png()
      .toFile(outputPath);
    console.log(`Generated: ${outputPath}`);
  }

  // 180x180 apple-touch-icon
  await sharp(svgPath, { density: 300 })
    .resize(180, 180, { fit: 'contain', background: { r: 1, g: 41, b: 40, alpha: 1 } })
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Generated: apple-touch-icon.png');

  // Also copy apple-touch-icon into src/app
  await sharp(svgPath, { density: 300 })
    .resize(180, 180, { fit: 'contain', background: { r: 1, g: 41, b: 40, alpha: 1 } })
    .png()
    .toFile(path.join(appDir, 'apple-icon.png'));

  // 48x48 icon.png for Next.js app directory
  await sharp(svgPath, { density: 300 })
    .resize(48, 48, { fit: 'contain', background: { r: 1, g: 41, b: 40, alpha: 1 } })
    .png()
    .toFile(path.join(appDir, 'icon.png'));

  // 32x32 PNG for favicon.ico conversion
  const icon32 = await sharp(svgPath, { density: 300 })
    .resize(32, 32, { fit: 'contain', background: { r: 1, g: 41, b: 40, alpha: 1 } })
    .png()
    .toBuffer();

  // Create a valid ICO header containing a 32x32 PNG
  // ICO header: 6 bytes (0,0, 1,0, 1,0)
  // Directory entry: 16 bytes:
  // width (32), height (32), colorCount (0), reserved (0), planes (1,0), bitCount (32,0), bytesInRes (4 bytes), imageOffset (4 bytes = 22)
  const icoHeader = Buffer.alloc(22);
  icoHeader.writeUInt16LE(0, 0); // reserved
  icoHeader.writeUInt16LE(1, 2); // type 1 = ICO
  icoHeader.writeUInt16LE(1, 4); // 1 image
  icoHeader.writeUInt8(32, 6);   // width
  icoHeader.writeUInt8(32, 7);   // height
  icoHeader.writeUInt8(0, 8);    // colors
  icoHeader.writeUInt8(0, 9);    // reserved
  icoHeader.writeUInt16LE(1, 10); // planes
  icoHeader.writeUInt16LE(32, 12); // bpp
  icoHeader.writeUInt32LE(icon32.length, 14); // image size
  icoHeader.writeUInt32LE(22, 18); // offset to image

  const icoBuffer = Buffer.concat([icoHeader, icon32]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  console.log('Generated: favicon.ico in public/ and src/app/');
}

generateFavicons().catch(console.error);
