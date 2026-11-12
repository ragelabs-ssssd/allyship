import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const srcDir = 'public/photo-resources/chennai-2';
const thumbDir = 'public/chennai-thumbs';

if (!fs.existsSync(thumbDir)) {
  fs.mkdirSync(thumbDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(f => /\.(jpe?g|png)$/i.test(f)).sort();

async function main() {
  console.log(`Found ${files.length} raw files in ${srcDir}`);
  const items = [];

  for (const file of files) {
    const filePath = path.join(srcDir, file);
    const thumbName = `thumb-${file}`;
    const thumbPath = path.join(thumbDir, thumbName);

    const meta = await sharp(filePath).metadata();

    // Generate small thumbnail for preview
    await sharp(filePath)
      .resize({ width: 600, height: 400, fit: 'cover' })
      .jpeg({ quality: 75 })
      .toFile(thumbPath);

    items.push({
      file,
      width: meta.width,
      height: meta.height,
      aspect: (meta.width / meta.height).toFixed(2),
      thumb: `/chennai-thumbs/${thumbName}`
    });
    console.log(`Thumbnail ready: ${file} (${meta.width}x${meta.height})`);
  }

  // Generate review HTML
  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Chennai 2.0 Photo Audit</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #0b0f19; color: #fff; padding: 24px; }
    h1 { margin-bottom: 8px; color: #f59e0b; }
    p { color: #94a3b8; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }
    .card { background: #1e293b; border-radius: 12px; overflow: hidden; border: 1px solid #334155; }
    .card img { width: 100%; height: 220px; object-fit: cover; display: block; }
    .card .info { padding: 12px 16px; }
    .card .name { font-weight: bold; font-size: 14px; color: #38bdf8; }
    .card .meta { font-size: 12px; color: #94a3b8; margin-top: 4px; }
  </style>
</head>
<body>
  <h1>Chennai 2.0 Photo Audit (${items.length} Master Photos)</h1>
  <p>Auditing raw captures for audience perspective, crowded hall, awards, stage felicitations, and panel sessions.</p>
  <div class="grid">
    ${items.map((it, idx) => `
      <div class="card">
        <a href="/photo-resources/chennai-2/${it.file}" target="_blank">
          <img src="${it.thumb}" alt="${it.file}" />
        </a>
        <div class="info">
          <div class="name">#${idx + 1}: ${it.file}</div>
          <div class="meta">${it.width} × ${it.height} (Aspect: ${it.aspect})</div>
        </div>
      </div>
    `).join('')}
  </div>
</body>
</html>`;

  fs.writeFileSync('public/chennai-review.html', html);
  console.log('Written public/chennai-review.html');
}

main().catch(console.error);

