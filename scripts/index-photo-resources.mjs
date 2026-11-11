import fs from 'fs';
import path from 'path';

const CHAPTERS = [
  {
    id: 'bengaluru-1',
    title: 'Bengaluru (Allyship 1.0 · 1st Edition)',
    aliases: ['bengaluru-1', 'bengaluru - 1st ediiton - allyship', 'bengaluru 1', 'blr-1', 'bengaluru 1st edition']
  },
  {
    id: 'hyderabad-1',
    title: 'Hyderabad (Allyship 1.0 · 2nd Edition)',
    aliases: ['hyderabad-1', 'hyderabad 1', 'hyd-1', 'hyderabad - 1st edition', 'hyderabad 1st edition']
  },
  {
    id: 'kolkata-1',
    title: 'Kolkata (Allyship 1.0 · 3rd Edition)',
    aliases: ['kolkata-1', 'kolkata - 1st ediiton - allyship', 'kolkata - 1st edition', 'kolkata 1', 'kol-1', 'kolkata']
  },
  {
    id: 'mumbai-1',
    title: 'Mumbai (Allyship 1.0 · 4th Edition)',
    aliases: ['mumbai-1', 'mumbai - 1st ediiton - allyship', 'mumbai - 1st edition', 'mumbai 1', 'mum-1', 'mumbai']
  },
  {
    id: 'bengaluru-2',
    title: 'Bengaluru (Allyship 2.0 · 1st Edition)',
    aliases: ['bengaluru-2', 'bengaluru 2', 'blr-2', 'bengaluru 2.0']
  },
  {
    id: 'hyderabad-2',
    title: 'Hyderabad (Allyship 2.0 · 2nd Edition)',
    aliases: ['hyderabad-2', 'hyderabad 2', 'hyd-2', 'hyderabad 2.0']
  },
  {
    id: 'chennai-2',
    title: 'Chennai (Allyship 2.0 · 3rd Edition)',
    aliases: ['chennai-2', 'chennai 2', 'chn-2', 'chennai 2.0', 'chennai']
  },
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

// 1. Sync from root photo-resources folders
if (fs.existsSync('photo-resources')) {
  const rootEntries = fs.readdirSync('photo-resources', { withFileTypes: true });
  for (const ent of rootEntries) {
    if (!ent.isDirectory()) continue;
    const norm = ent.name.toLowerCase().trim();
    const matchedCh = CHAPTERS.find(c => c.aliases.some(a => norm.includes(a) || a.includes(norm)));
    if (matchedCh) {
      const srcFolder = path.join('photo-resources', ent.name);
      const destFolder = path.join('public', 'photo-resources', matchedCh.id);
      if (!fs.existsSync(destFolder)) fs.mkdirSync(destFolder, { recursive: true });

      const files = fs.readdirSync(srcFolder).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));
      for (const file of files) {
        const srcPath = path.join(srcFolder, file);
        const destPath = path.join(destFolder, file);
        if (!fs.existsSync(destPath) || fs.statSync(srcPath).mtime > fs.statSync(destPath).mtime) {
          fs.copyFileSync(srcPath, destPath);
        }
      }
    }
  }
}

// 2. Read catalog from public/photo-resources
const catalog = {};
let totalPhotos = 0;

for (const ch of CHAPTERS) {
  const dir = path.join('public', 'photo-resources', ch.id);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const files = fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f)).sort();
  catalog[ch.id] = files.map((filename, idx) => {
    const fullPath = path.join(dir, filename);
    const buf = fs.readFileSync(fullPath);
    const dim = getJpegDimensions(buf) || { width: 0, height: 0 };
    return {
      index: idx + 1,
      filename,
      src: `./photo-resources/${ch.id}/${filename}`,
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
  <title>Allyship Chapter Photo Selector · Local Resource Explorer</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@600;700&display=swap');
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #0b0f19; color: #f1f5f9; }
    .heading-font { font-family: 'Space Grotesk', sans-serif; }
    .selected-card { outline: 3px solid #f59e0b; box-shadow: 0 0 20px rgba(245, 158, 11, 0.3); }
  </style>
</head>
<body class="min-h-screen p-4 sm:p-8">
  <div class="max-w-7xl mx-auto space-y-6">
    <!-- Header -->
    <header class="border-b border-slate-800 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <div class="flex items-center gap-2 text-amber-400 text-xs font-bold tracking-widest uppercase mb-1">
          <span class="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
          Photo Resources & Conclave Gallery Curator
        </div>
        <h1 class="heading-font text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Chapter Photo Selector
        </h1>
        <p class="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl">
          Click any card to select it. Your selected photo numbers will be collected below so you can copy and paste them directly in chat to populate Conclave Moments!
        </p>
      </div>
      <div class="flex items-center gap-3">
        <span class="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300">
          Total Photos: <strong class="text-amber-400 font-mono">${totalPhotos}</strong>
        </span>
      </div>
    </header>

    <!-- Selection Bar (Sticky Bottom / Floating Bar) -->
    <div id="selection-bar" class="bg-slate-900/90 backdrop-blur-md border border-amber-400/30 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xl">
      <div class="flex items-center gap-3">
        <span class="px-2.5 py-1 rounded-lg bg-amber-400/20 text-amber-300 text-xs font-bold font-mono">
          <span id="selected-count">0</span> / 24 Selected
        </span>
        <span id="selected-list" class="text-xs font-mono text-slate-300 truncate max-w-md">
          (No photos selected yet — click photos below)
        </span>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="copySelection()" class="px-4 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-all shadow-md">
          Copy Selected Numbers
        </button>
        <button onclick="clearSelection()" class="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs font-medium transition-all">
          Clear
        </button>
      </div>
    </div>

    <!-- Chapter Tabs -->
    <div class="flex flex-wrap gap-2">
      ${CHAPTERS.map((ch, i) => `
        <button
          onclick="selectChapter('${ch.id}')"
          id="btn-${ch.id}"
          class="chapter-tab px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all border ${
            i === 0
              ? 'bg-amber-400/15 border-amber-400/50 text-amber-300 shadow-sm'
              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
          }"
        >
          ${ch.title.split(' ')[0]} ${ch.title.includes('2.0') ? '2.0' : '1.0'}
          <span class="ml-1.5 px-2 py-0.5 rounded-full bg-black/40 text-[10px] font-mono ${catalog[ch.id].length > 0 ? 'text-amber-400 font-bold' : 'text-slate-500'}">
            ${catalog[ch.id].length}
          </span>
        </button>
      `).join('')}
    </div>

    <!-- Chapter Sections -->
    ${CHAPTERS.map((ch, i) => `
      <section id="section-${ch.id}" class="chapter-section space-y-4 ${i === 0 ? '' : 'hidden'}">
        <div class="flex items-center justify-between bg-slate-900/70 p-3.5 rounded-xl border border-slate-800">
          <div>
            <h2 class="heading-font text-base sm:text-lg font-bold text-white">${ch.title}</h2>
            <p class="text-[11px] text-slate-400 font-mono mt-0.5">
              Folder: public/photo-resources/${ch.id}/
            </p>
          </div>
          <span class="text-xs text-amber-400 font-bold font-mono">${catalog[ch.id].length} Photos</span>
        </div>

        ${
          catalog[ch.id].length === 0
            ? `<div class="bg-slate-900/40 border border-dashed border-slate-800 rounded-3xl p-12 text-center space-y-2">
                <div class="text-2xl text-slate-500">📁</div>
                <h3 class="text-sm font-bold text-slate-300">No photos in this folder yet</h3>
                <p class="text-xs text-slate-500">
                  Drop photos into <code class="text-slate-400 bg-slate-950 px-2 py-0.5 rounded">photo-resources/${ch.id}/</code>
                </p>
              </div>`
            : `<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
                ${catalog[ch.id].map(photo => `
                  <div
                    id="card-${ch.id}-${photo.index}"
                    onclick="toggleSelect('${ch.id}', '${photo.filename}', ${photo.index})"
                    class="group relative bg-slate-900 border border-slate-800 hover:border-amber-400/60 rounded-xl overflow-hidden flex flex-col transition-all duration-200 cursor-pointer select-none"
                  >
                    <div class="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                      <img src="${photo.src}" alt="${photo.filename}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                      <div class="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-sm text-[11px] font-mono font-bold text-amber-400 border border-amber-400/40 shadow">
                        #${String(photo.index).padStart(2, '0')}
                      </div>
                      <div id="check-${ch.id}-${photo.index}" class="hidden absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-[10px] shadow">
                        ✓
                      </div>
                    </div>
                    <div class="p-2.5 space-y-0.5">
                      <div class="text-[11px] font-mono font-medium text-slate-300 truncate" title="${photo.filename}">
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
    let selected = [];

    function selectChapter(id) {
      document.querySelectorAll('.chapter-section').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.chapter-tab').forEach(el => {
        el.className = 'chapter-tab px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all border bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700';
      });
      const targetSec = document.getElementById('section-' + id);
      if (targetSec) targetSec.classList.remove('hidden');
      const targetBtn = document.getElementById('btn-' + id);
      if (targetBtn) {
        targetBtn.className = 'chapter-tab px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all border bg-amber-400/15 border-amber-400/50 text-amber-300 shadow-sm';
      }
    }

    function toggleSelect(chapterId, filename, num) {
      const idx = selected.findIndex(x => x.num === num && x.chapterId === chapterId);
      const card = document.getElementById('card-' + chapterId + '-' + num);
      const check = document.getElementById('check-' + chapterId + '-' + num);
      if (idx !== -1) {
        selected.splice(idx, 1);
        if (card) card.classList.remove('selected-card');
        if (check) check.classList.add('hidden');
      } else {
        selected.push({ chapterId, num, filename });
        if (card) card.classList.add('selected-card');
        if (check) check.classList.remove('hidden');
      }
      updateSelectionUI();
    }

    function updateSelectionUI() {
      const countEl = document.getElementById('selected-count');
      const listEl = document.getElementById('selected-list');
      countEl.innerText = selected.length;
      if (selected.length === 0) {
        listEl.innerText = '(No photos selected yet — click photos above)';
      } else {
        listEl.innerText = selected.map(x => '#' + String(x.num).padStart(2, '0') + ' (' + x.filename + ')').join(', ');
      }
    }

    function clearSelection() {
      selected = [];
      document.querySelectorAll('.selected-card').forEach(el => el.classList.remove('selected-card'));
      document.querySelectorAll('[id^="check-"]').forEach(el => el.classList.add('hidden'));
      updateSelectionUI();
    }

    function copySelection() {
      if (selected.length === 0) {
        alert('Please select some photos first by clicking on them!');
        return;
      }
      const text = selected.map((x, i) => 'Slot ' + (i + 1) + ': #' + String(x.num).padStart(2, '0') + ' (' + x.filename + ')').join('\\n');
      navigator.clipboard.writeText(text);
      alert('Copied ' + selected.length + ' photo choices to clipboard! You can paste them in chat.');
    }

    window.addEventListener('DOMContentLoaded', () => {
      const params = new URLSearchParams(window.location.search);
      const ch = params.get('chapter');
      if (ch) {
        selectChapter(ch);
      }
    });
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join('public', 'photo-picker.html'), html);
console.log('✅ Generated public/photo-picker.html with 109 Bengaluru photos ready!');
