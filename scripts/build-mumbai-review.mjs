import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const srcDir = 'photo-resources/mumbai-1';
const pubResourceDir = 'public/photo-resources/mumbai-1';
const previewDir = 'public/mumbai-previews';

if (!fs.existsSync(pubResourceDir)) fs.mkdirSync(pubResourceDir, { recursive: true });
if (!fs.existsSync(previewDir)) fs.mkdirSync(previewDir, { recursive: true });

const files = fs.readdirSync(srcDir).filter(f => !f.startsWith('.'));

async function processAll() {
  const list = [];

  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    const srcPath = path.join(srcDir, f);
    const pubPath = path.join(pubResourceDir, f);
    const prevName = `thumb-${i.toString().padStart(2, '0')}.jpg`;
    const prevPath = path.join(previewDir, prevName);

    // Sync to public photo-resources
    if (!fs.existsSync(pubPath)) {
      fs.copyFileSync(srcPath, pubPath);
    }

    // Generate web-friendly 800px preview
    await sharp(srcPath)
      .rotate()
      .resize({ width: 800, withoutEnlargement: true })
      .jpeg({ quality: 85 })
      .toFile(prevPath);

    const meta = await sharp(srcPath).metadata();
    const st = fs.statSync(srcPath);

    list.push({
      index: i + 1,
      file: f,
      preview: `/mumbai-previews/${prevName}`,
      width: meta.width,
      height: meta.height,
      sizeKb: (st.size / 1024).toFixed(0),
      aspect: (meta.width / meta.height).toFixed(2),
    });
  }

  // Generate review HTML
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Mumbai Conclave Photos — Visual Audit & De-duplication</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { background: #0B0F19; color: #fff; font-family: system-ui, -apple-system, sans-serif; }
  </style>
</head>
<body class="p-8">
  <div class="max-w-7xl mx-auto">
    <div class="flex items-center justify-between mb-8 pb-4 border-b border-gray-800">
      <div>
        <span class="text-xs uppercase tracking-wider text-amber-400 font-bold font-mono">Visual Audit & De-duplication</span>
        <h1 class="text-2xl font-extrabold text-white mt-1">Mumbai Conclave Photos (${list.length} Images)</h1>
        <p class="text-xs text-gray-400 mt-1">Review all uploaded photos to identify duplicates and establish the narrative sequence.</p>
      </div>
      <span class="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-lg text-xs font-mono font-bold">
        ${list.length} Uploaded Files
      </span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      ${list.map(it => `
        <div class="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all flex flex-col">
          <div class="relative aspect-[4/3] bg-black overflow-hidden group">
            <img src="${it.preview}" alt="${it.file}" class="w-full h-full object-contain" />
            <span class="absolute top-2 left-2 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-xs font-bold text-amber-400 font-mono">
              #${it.index}
            </span>
            <span class="absolute top-2 right-2 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-gray-300 font-mono">
              ${it.width}x${it.height}
            </span>
          </div>
          <div class="p-3.5 space-y-1 flex-1 flex flex-col justify-between">
            <div>
              <p class="font-mono text-[11px] text-amber-300 font-semibold break-all">${it.file}</p>
              <p class="text-[11px] text-gray-400 mt-1">${it.sizeKb} KB • Aspect: ${it.aspect}</p>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</body>
</html>`;

  fs.writeFileSync('public/mumbai-photo-review.html', html);
  console.log(`Generated previews for ${list.length} images and created public/mumbai-photo-review.html`);
}

processAll().catch(console.error);

