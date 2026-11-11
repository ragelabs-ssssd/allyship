import fs from 'fs';
import path from 'path';

const CHAPTERS = [
  { id: 'hyderabad-1', title: 'Hyderabad (Allyship 1.0 · 2nd Edition)' },
  { id: 'hyderabad-2', title: 'Hyderabad (Allyship 2.0 · 2nd Edition)' },
  { id: 'bengaluru-1', title: 'Bengaluru (Allyship 1.0 · 1st Edition)' },
  { id: 'bengaluru-2', title: 'Bengaluru (Allyship 2.0 · 1st Edition)' },
  { id: 'chennai-2', title: 'Chennai (Allyship 2.0 · 3rd Edition)' },
  { id: 'kolkata-1', title: 'Kolkata (Allyship 1.0 · 3rd Edition)' },
  { id: 'mumbai-1', title: 'Mumbai (Allyship 1.0 · 4th Edition)' },
];

function getJpegDimensions(buffer) {
  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xFF) break;
    const marker = buffer[offset + 1];
    if (marker === 0xC0 || marker === 0xC2) {
      const height = buffer.readUInt16BE(offset + 5);
      const width = buffer.readUInt16BE(offset + 7);
      return { width, height };
    }
    const len = buffer.readUInt16BE(offset + 2);
    offset += 2 + len;
  }
  return null;
}

// 1. Sync from root photo-resources to public/photo-resources if root has files
for (const ch of CHAPTERS) {
  const rootDir = path.join('photo-resources', ch.id);
  const pubDir = path.join('public', 'photo-resources', ch.id);
  if (!fs.existsSync(pubDir)) fs.mkdirSync(pubDir, { recursive: true });

  if (fs.existsSync(rootDir)) {
    const rootFiles = fs.readdirSync(rootDir).filter(f => !f.startsWith('.'));
    for (const file of rootFiles) {
      const src = path.join(rootDir, file);
      const dest = path.join(pubDir, file);
      if (!fs.existsSync(dest) || fs.statSync(src).mtime > fs.statSync(dest).mtime) {
        fs.copyFileSync(src, dest);
      }
    }
  }
}

// 2. Read all files in public/photo-resources
const catalog = {};
let totalPhotos = 0;

for (const ch of CHAPTERS) {
  const dir = path.join('public', 'photo-resources', ch.id);
  const files = fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f)).sort();
  catalog[ch.id] = files.map((filename, idx) => {
    const fullPath = path.join(dir, filename);
    const buf = fs.readFileSync(fullPath);
    const dim = getJpegDimensions(buf) || { width: 0, height: 0 };
    return {
      index: idx + 1,
      filename,
      src: `/photo-resources/${ch.id}/${filename}`,
      size: (buf.length / 1024).toFixed(1) + ' KB',
      dim: dim.width ? `${dim.width}×${dim.height}` : 'Standard',
    };
  });
  totalPhotos += catalog[ch.id].length;
}

// 3. Generate HTML picker page
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Allyship Chapter Photo Resources Explorer</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Space+Grotesk:wght@600;700&display=swap');
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #0b0f19; color: #f1f5f9; }
    .heading-font { font-family: 'Space Grotesk', sans-serif; }
  </style>
</head>
<body class="min-h-screen p-6 md:p-10">
  <div class="max-w-7xl mx-auto space-y-8">
    <header class="border-b border-slate-800 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <div class="flex items-center gap-2 text-amber-400 text-xs font-bold tracking-widest uppercase mb-1">
          <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          Photo Resources Catalog
        </div>
        <h1 class="heading-font text-2xl md:text-4xl font-extrabold text-white tracking-tight">
          Chapter Photo Selector
        </h1>
        <p class="text-slate-400 text-sm mt-1">
          Review the high-resolution photo library by chapter. Note the photo numbers (e.g., #01, #08, #14) to place them into the 24 conclave moments slots.
        </p>
      </div>
      <div class="flex items-center gap-3">
        <span class="px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300">
          Total Indexed: <strong class="text-amber-400">${totalPhotos} photos</strong>
        </span>
      </div>
    </header>

    <!-- Chapter Tabs -->
    <div class="flex flex-wrap gap-2">
      ${CHAPTERS.map((ch, i) => `
        <button
          onclick="selectChapter('${ch.id}')"
          id="btn-${ch.id}"
          class="chapter-tab px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all border ${
            i === 0
              ? 'bg-amber-400/10 border-amber-400/40 text-amber-300 shadow-sm'
              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
          }"
        >
          ${ch.title.split(' ')[0]}
          <span class="ml-1.5 px-2 py-0.5 rounded-full bg-black/40 text-[10px] font-mono text-slate-300">
            ${catalog[ch.id].length}
          </span>
        </button>
      `).join('')}
    </div>

    <!-- Chapter Galleries -->
    ${CHAPTERS.map((ch, i) => `
      <section id="section-${ch.id}" class="chapter-section space-y-5 ${i === 0 ? '' : 'hidden'}">
        <div class="flex items-center justify-between bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
          <div>
            <h2 class="heading-font text-lg md:text-xl font-bold text-white">${ch.title}</h2>
            <p class="text-xs text-slate-400 mt-0.5">
              Folder: <code class="text-amber-300/90 bg-black/30 px-2 py-0.5 rounded">public/photo-resources/${ch.id}/</code>
            </p>
          </div>
          <span class="text-xs text-slate-400 font-medium">${catalog[ch.id].length} photos available</span>
        </div>

        ${
          catalog[ch.id].length === 0
            ? `<div class="bg-slate-900/40 border border-dashed border-slate-800 rounded-3xl p-12 text-center space-y-3">
                <div class="w-12 h-12 rounded-full bg-slate-800 text-slate-500 flex items-center justify-center mx-auto text-xl">📁</div>
                <h3 class="text-sm font-bold text-slate-300">No photos dropped into this folder yet</h3>
                <p class="text-xs text-slate-500 max-w-md mx-auto">
                  Paste your photos for this chapter directly into <br />
                  <code class="text-slate-400 bg-slate-950 px-2 py-1 rounded inline-block mt-1">public/photo-resources/${ch.id}/</code><br />
                  then run <code class="text-amber-400 bg-slate-950 px-2 py-1 rounded inline-block mt-1">node scripts/index-photo-resources.mjs</code> to refresh this preview!
                </p>
              </div>`
            : `<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                ${catalog[ch.id].map(photo => `
                  <div class="group bg-slate-900 border border-slate-800 hover:border-amber-400/50 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
                    <div class="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                      <img src="${photo.src}" alt="${photo.filename}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div class="absolute top-2 left-2 px-2 py-0.5 rounded-lg bg-black/75 backdrop-blur-md text-[11px] font-mono font-bold text-amber-400 border border-amber-400/30">
                        #${String(photo.index).padStart(2, '0')}
                      </div>
                    </div>
                    <div class="p-3 space-y-1">
                      <div class="text-[11px] font-mono font-semibold text-slate-300 truncate" title="${photo.filename}">
                        ${photo.filename}
                      </div>
                      <div class="flex items-center justify-between text-[10px] text-slate-500 font-mono">
                        <span>${photo.dim}</span>
                        <span>${photo.size}</span>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>`
        }
      </section>
    `).join('')}
  </div>

  <script>
    function selectChapter(id) {
      document.querySelectorAll('.chapter-section').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.chapter-tab').forEach(el => {
        el.className = 'chapter-tab px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all border bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700';
      });
      const targetSec = document.getElementById('section-' + id);
      if (targetSec) targetSec.classList.remove('hidden');
      const targetBtn = document.getElementById('btn-' + id);
      if (targetBtn) {
        targetBtn.className = 'chapter-tab px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all border bg-amber-400/10 border-amber-400/40 text-amber-300 shadow-sm';
      }
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join('public', 'photo-picker.html'), html);
console.log('✅ Generated public/photo-picker.html');
console.log('Current Catalog Summary:');
CHAPTERS.forEach(ch => {
  console.log(`  - ${ch.title}: ${catalog[ch.id].length} photos`);
});
