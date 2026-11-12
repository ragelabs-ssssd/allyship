import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const srcDir = 'public/photo-resources/chennai-2';
const previewDir = 'public/chennai-previews';

if (!fs.existsSync(previewDir)) {
  fs.mkdirSync(previewDir, { recursive: true });
}

// 23 Master Photos from the raw camera upload
const masterFiles = [
  { file: 'CON01670.JPG', category: 'Plenary', desc: 'Grand Conclave Plenary Ensemble — 50+ Leaders & Dais under ALLYSHIP 2.0 Digital Wall' },
  { file: 'CON01524.JPG', category: 'Awards', desc: 'Ceremonial Shawl & Conclave Memento Presentation to Olympic Sprint Coach Premanand J.' },
  { file: 'CON01502.JPG', category: 'Fireside', desc: 'Olympic Fireside Session: Coach Premanand J. in Dialogue on Dais with Audience in Foreground' },
  { file: 'CON01501.JPG', category: 'Fireside', desc: 'Coach Premanand J. Speaking with Microphone on Athletic Rigor & Corporate Mentorship' },
  { file: 'CON01493.JPG', category: 'Awards', desc: 'Inaugural Dais Felicitation & Welcome Honor for Coach Premanand J. with Floral Bouquet' },
  { file: 'CON01466.JPG', category: 'Keynote', desc: 'Vice-Chancellor Prof. (Dr.) Pradipta Kumar Nanda Presidential Conclave Address at the Podium' },
  { file: 'CON01481.JPG', category: 'Keynote', desc: 'Conclave Leadership Inaugural Address at the Podium' },
  { file: 'CON01567.JPG', category: 'Panel', desc: 'Strategic Panel Deliberations: Practicing Allyship as a Core Corporate Responsibility (Full Stage)' },
  { file: 'CON01587.JPG', category: 'Panel', desc: 'Enterprise Leaders in Discussion on Cross-Disciplinary Talent & Curricular Alignment' },
  { file: 'CON01569.JPG', category: 'Panel', desc: 'Executive Panel Moderator Archana Grover Framing Themes on Strategic Industry Mentorship' },
  { file: 'CON01603.JPG', category: 'Panel', desc: 'Industry Capability Heads Deliberating Collaborative Curriculum Architectures' },
  { file: 'CON01609.JPG', category: 'Panel', desc: 'Interactive Assembly Discourse: Elevated Angle of Panel & Audience Engagement' },
  { file: 'CON01638.JPG', category: 'Panel', desc: 'Distinguished Panelists & Conclave Dais Dignitaries Standing Lineup Acknowledging Assembly' },
  { file: 'CON01596.JPG', category: 'Panel', desc: 'Corporate HR Leader Delivering Perspectives with Microphone during Panel Session' },
  { file: 'CON01459.JPG', category: 'Awards', desc: 'Academic Leadership Presenting Floral Honors to Corporate Partner on Stage' },
  { file: 'CON01547.JPG', category: 'Awards', desc: 'Corporate Partner Felicitation & Floral Honors on Dais' },
  { file: 'CON01552.JPG', category: 'Awards', desc: 'Senior Industry Partner Felicitation & Floral Honors on Dais' },
  { file: 'CON01643.JPG', category: 'Audience', desc: 'Audience Perspective: Corporate Delegates Seated at Round Tables Capturing the Dais' },
  { file: 'CON01362.JPG', category: 'Foyer', desc: 'Executive Delegate Registration & Foyer Welcome Desk at Hyatt Regency Chennai' },
  { file: 'CON01411.JPG', category: 'Foyer', desc: 'Corporate Delegate Receiving Conclave Accreditation Badges & Materials at Desk' },
  { file: 'CON01376.JPG', category: 'Foyer', desc: 'Corporate Leaders & Capability Heads in Collaborative Networking Exchange near Foyer Plant' },
  { file: 'CON01357.JPG', category: 'Foyer', desc: 'Bilateral Leadership Exchange on Research Alliances & Corporate Mentorship in Foyer' },
  { file: 'CON01371.JPG', category: 'Foyer', desc: 'Corporate Partner Commemoration at the ALLYSHIP 2.0 Official Media Backdrop' },
];

// Special High-Res Crops
const crops = [
  {
    id: 'CROP_CON01670_VIP_DAIS',
    src: 'CON01670.JPG',
    category: 'Crops',
    desc: 'VIP Dais Leadership Center Focus (VC Prof. Nanda, Coach Premanand J., Key Luminaries)',
    crop: { left: 1200, top: 750, width: 4600, height: 3200 }
  },
  {
    id: 'CROP_CON01670_LEFT_WING',
    src: 'CON01670.JPG',
    category: 'Crops',
    desc: 'Plenary Assembly Left Wing Delegation (Corporate Leaders & Enterprise Directors)',
    crop: { left: 200, top: 1100, width: 3400, height: 2400 }
  },
  {
    id: 'CROP_CON01670_RIGHT_WING',
    src: 'CON01670.JPG',
    category: 'Crops',
    desc: 'Plenary Assembly Right Wing Delegation (HR Leaders & Tech Executives)',
    crop: { left: 3400, top: 1100, width: 3400, height: 2400 }
  },
  {
    id: 'CROP_CON01524_MEMENTO_CLOSE',
    src: 'CON01524.JPG',
    category: 'Crops',
    desc: 'Close Honor Presentation: VC Handing Commemorative Memento to Coach Premanand J.',
    crop: { left: 1600, top: 1200, width: 3800, height: 2600 }
  },
  {
    id: 'CROP_CON01502_STAGE_FOCUS',
    src: 'CON01502.JPG',
    category: 'Crops',
    desc: 'Olympic Fireside Dais Focus (Close View of Stage Discussion with Paris 2024 Backdrop)',
    crop: { left: 2400, top: 900, width: 3200, height: 2200 }
  },
  {
    id: 'CROP_CON01466_VC_FOCUS',
    src: 'CON01466.JPG',
    category: 'Crops',
    desc: 'Vice-Chancellor Prof. Nanda Keynote Speech (Tight Focus on Podium Dialogue)',
    crop: { left: 800, top: 400, width: 2800, height: 2100 }
  },
  {
    id: 'CROP_CON01567_PANEL_CENTER',
    src: 'CON01567.JPG',
    category: 'Crops',
    desc: 'Strategic Panel Core Exchange (Archana Grover & Lead Corporate Panelists)',
    crop: { left: 1600, top: 1200, width: 4400, height: 3000 }
  },
  {
    id: 'CROP_CON01638_PANELISTS_CLOSE',
    src: 'CON01638.JPG',
    category: 'Crops',
    desc: 'Corporate Panelists Standing Lineup Focus on Stage',
    crop: { left: 1200, top: 1000, width: 4600, height: 3100 }
  }
];

async function main() {
  console.log('Generating lightweight preview images for fast interactive selector...');

  const allItems = [];

  // Process master files
  for (const m of masterFiles) {
    const inPath = path.join(srcDir, m.file);
    const outName = `prev-${m.file}`;
    const outPath = path.join(previewDir, outName);

    if (!fs.existsSync(outPath)) {
      await sharp(inPath)
        .rotate()
        .resize({ width: 900, withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true })
        .toFile(outPath);
    }

    allItems.push({
      id: m.file,
      file: m.file,
      category: m.category,
      desc: m.desc,
      preview: `/chennai-previews/${outName}`,
      isCrop: false
    });
  }

  // Process crops
  for (const c of crops) {
    const inPath = path.join(srcDir, c.src);
    const outName = `prev-${c.id}.jpg`;
    const outPath = path.join(previewDir, outName);

    if (!fs.existsSync(outPath)) {
      await sharp(inPath)
        .rotate()
        .extract(c.crop)
        .resize({ width: 900, withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true })
        .toFile(outPath);
    }

    allItems.push({
      id: c.id,
      file: `${c.src} (${c.id.replace('CROP_', '')})`,
      category: c.category,
      desc: c.desc,
      preview: `/chennai-previews/${outName}`,
      isCrop: true
    });
  }

  console.log(`Total ${allItems.length} images ready for selector!`);

  // Build the interactive HTML tool
  const html = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ALLYSHIP++ | Chennai 2.0 Photo Selector</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: ['class', '[data-theme="dark"]'],
      theme: {
        extend: {
          colors: {
            accent: '#C5A869',
            'accent-light': '#E8D5A7',
            canvas: '#0B0F19',
            surface: '#111827',
            'surface-2': '#1F2937',
            'surface-3': '#374151',
            line: 'rgba(255, 255, 255, 0.12)',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            display: ['"Plus Jakarta Sans"', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          }
        }
      }
    }
  </script>
  <style>
    body { background-color: #0B0F19; color: #FFFFFF; font-family: 'Inter', sans-serif; }
    .card.selected {
      border-color: #C5A869 !important;
      box-shadow: 0 0 0 2px #C5A869, 0 10px 25px -5px rgba(197, 168, 105, 0.3);
    }
    .badge-number {
      background: #C5A869;
      color: #000;
      font-weight: 800;
      width: 28px;
      height: 28px;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 13px;
    }
  </style>
</head>
<body class="min-h-screen pb-32">

  <!-- TOP STICKY BAR -->
  <header class="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-line px-6 py-4">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <div class="flex items-center gap-3">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-accent/15 text-accent border border-accent/30">
            Interactive Curator
          </span>
          <h1 class="text-xl sm:text-2xl font-display font-extrabold tracking-tight text-white">
            Chennai 2.0 Photo Selector
          </h1>
        </div>
        <p class="text-xs text-gray-400 mt-1">
          Click any card to select/unselect. Click the zoom icon to view full size. Target: 24 Photos.
        </p>
      </div>

      <!-- COUNTER & ACTIONS -->
      <div class="flex items-center gap-3 flex-wrap">
        <div class="bg-surface-2 border border-line rounded-xl px-4 py-2 flex items-center gap-3">
          <span class="text-xs uppercase tracking-wider text-gray-400 font-semibold">Selected:</span>
          <span id="counter" class="text-xl font-bold font-mono text-accent">0</span>
          <span class="text-sm font-bold text-gray-500">/ 24</span>
        </div>

        <button onclick="copySelection()" class="px-4 py-2.5 rounded-xl bg-accent hover:bg-accent-light text-black font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-accent/20 flex items-center gap-2 cursor-pointer">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
          Copy Selected for Chat
        </button>

        <button onclick="clearAll()" class="px-3 py-2 rounded-xl bg-surface-2 hover:bg-surface-3 border border-line text-xs font-semibold text-gray-300 transition-all cursor-pointer">
          Clear
        </button>
      </div>
    </div>

    <!-- FILTER BUTTONS -->
    <div class="max-w-7xl mx-auto flex items-center gap-2 mt-3 overflow-x-auto pb-1 text-xs">
      <button onclick="setFilter('all')" class="filter-btn active px-3 py-1.5 rounded-lg bg-accent text-black font-bold transition-all" data-cat="all">All (${allItems.length})</button>
      <button onclick="setFilter('Plenary')" class="filter-btn px-3 py-1.5 rounded-lg bg-surface-2 text-gray-300 hover:text-white border border-line transition-all" data-cat="Plenary">Plenary & Dais</button>
      <button onclick="setFilter('Awards')" class="filter-btn px-3 py-1.5 rounded-lg bg-surface-2 text-gray-300 hover:text-white border border-line transition-all" data-cat="Awards">Awards & Honors</button>
      <button onclick="setFilter('Fireside')" class="filter-btn px-3 py-1.5 rounded-lg bg-surface-2 text-gray-300 hover:text-white border border-line transition-all" data-cat="Fireside">Olympic Fireside</button>
      <button onclick="setFilter('Keynote')" class="filter-btn px-3 py-1.5 rounded-lg bg-surface-2 text-gray-300 hover:text-white border border-line transition-all" data-cat="Keynote">Keynotes</button>
      <button onclick="setFilter('Panel')" class="filter-btn px-3 py-1.5 rounded-lg bg-surface-2 text-gray-300 hover:text-white border border-line transition-all" data-cat="Panel">Panel Deliberations</button>
      <button onclick="setFilter('Crops')" class="filter-btn px-3 py-1.5 rounded-lg bg-surface-2 text-gray-300 hover:text-white border border-line transition-all" data-cat="Crops">VIP Crops</button>
      <button onclick="setFilter('Foyer')" class="filter-btn px-3 py-1.5 rounded-lg bg-surface-2 text-gray-300 hover:text-white border border-line transition-all" data-cat="Foyer">Foyer & Welcome</button>
    </div>
  </header>

  <!-- GRID OF PHOTOS -->
  <main class="max-w-7xl mx-auto px-6 pt-6">
    <div id="galleryGrid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      ${allItems.map((it, idx) => `
        <div 
          class="card group relative bg-surface-2 border border-line rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-gray-500 hover:shadow-xl"
          data-id="${it.id}"
          data-cat="${it.category}"
          onclick="toggleSelect('${it.id}')"
        >
          <!-- IMAGE HOLDER -->
          <div class="relative aspect-[4/3] w-full bg-surface-3 overflow-hidden">
            <img 
              src="${it.preview}" 
              alt="${it.desc}"
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            <!-- BADGE OVERLAY -->
            <div class="badge-slot absolute top-3 left-3 hidden">
              <span class="badge-number shadow-lg">1</span>
            </div>

            <!-- CATEGORY TAG -->
            <span class="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 text-gray-300">
              ${it.category}
            </span>

            <!-- ZOOM BUTTON -->
            <button 
              type="button" 
              onclick="event.stopPropagation(); openLightbox('${it.preview}', '${it.desc}')"
              class="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/70 hover:bg-accent text-white hover:text-black flex items-center justify-center backdrop-blur-md transition-all shadow-md opacity-80 hover:opacity-100"
              title="View full size"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/></svg>
            </button>
          </div>

          <!-- INFO -->
          <div class="p-3.5 space-y-1">
            <div class="flex items-center justify-between">
              <span class="font-mono text-xs font-bold text-accent">${it.file}</span>
              ${it.isCrop ? '<span class="text-[9px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded">Crop</span>' : ''}
            </div>
            <p class="text-xs text-gray-300 leading-snug line-clamp-2">
              ${it.desc}
            </p>
          </div>
        </div>
      `).join('')}
    </div>
  </main>

  <!-- LIGHTBOX MODAL -->
  <div id="lightbox" class="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 hidden" onclick="closeLightbox()">
    <div class="max-w-5xl max-h-[90vh] flex flex-col items-center">
      <img id="lightboxImg" src="" alt="" class="max-w-full max-h-[80vh] object-contain rounded-xl border border-line shadow-2xl" />
      <p id="lightboxCaption" class="text-sm text-gray-300 mt-3 text-center max-w-2xl font-medium"></p>
      <button class="mt-4 px-4 py-1.5 rounded-lg bg-surface-2 hover:bg-surface-3 text-xs text-gray-400 uppercase tracking-wider font-bold border border-line">
        Click anywhere to close
      </button>
    </div>
  </div>

  <!-- FLOATING NOTIFICATION -->
  <div id="toast" class="fixed bottom-6 right-6 z-50 bg-accent text-black px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-2xl transition-all duration-300 transform translate-y-20 opacity-0 flex items-center gap-2">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
    <span id="toastMsg">Copied!</span>
  </div>

  <script>
    const itemsData = ${JSON.stringify(allItems)};
    let selectedIds = [];

    // Pre-select current 24 recommendations so user starts with a ready set
    const recommendedDefault = [
      'CON01670.JPG',
      'CON01524.JPG',
      'CROP_CON01670_VIP_DAIS',
      'CROP_CON01524_MEMENTO_CLOSE',
      'CROP_CON01670_LEFT_WING',
      'CROP_CON01670_RIGHT_WING',
      'CON01502.JPG',
      'CROP_CON01502_STAGE_FOCUS',
      'CON01501.JPG',
      'CON01493.JPG',
      'CON01466.JPG',
      'CROP_CON01466_VC_FOCUS',
      'CON01567.JPG',
      'CON01587.JPG',
      'CON01569.JPG',
      'CON01603.JPG',
      'CON01609.JPG',
      'CROP_CON01567_PANEL_CENTER',
      'CROP_CON01587_PANELISTS_CLOSE',
      'CROP_CON01603_SYNERGY',
      'CON01638.JPG',
      'CROP_CON01638_PANELISTS_CLOSE',
      'CROP_CON01638_LEADERSHIP',
      'CROP_CON01670_WIDE_FINALE'
    ];

    // Initialize with 24 default recommended items
    selectedIds = itemsData.map(it => it.id).filter(id => recommendedDefault.includes(id)).slice(0, 24);
    updateUI();

    function toggleSelect(id) {
      const idx = selectedIds.indexOf(id);
      if (idx > -1) {
        selectedIds.splice(idx, 1);
      } else {
        selectedIds.push(id);
      }
      updateUI();
    }

    function updateUI() {
      document.getElementById('counter').innerText = selectedIds.length;

      document.querySelectorAll('.card').forEach(card => {
        const id = card.getAttribute('data-id');
        const pos = selectedIds.indexOf(id);
        const badgeSlot = card.querySelector('.badge-slot');
        const badgeNumber = card.querySelector('.badge-number');

        if (pos > -1) {
          card.classList.add('selected');
          badgeSlot.classList.remove('hidden');
          badgeNumber.innerText = pos + 1;
        } else {
          card.classList.remove('selected');
          badgeSlot.classList.add('hidden');
        }
      });
    }

    function clearAll() {
      selectedIds = [];
      updateUI();
    }

    function setFilter(cat) {
      document.querySelectorAll('.filter-btn').forEach(b => {
        if (b.getAttribute('data-cat') === cat) {
          b.classList.remove('bg-surface-2', 'text-gray-300');
          b.classList.add('bg-accent', 'text-black', 'font-bold');
        } else {
          b.classList.remove('bg-accent', 'text-black', 'font-bold');
          b.classList.add('bg-surface-2', 'text-gray-300');
        }
      });

      document.querySelectorAll('.card').forEach(card => {
        if (cat === 'all' || card.getAttribute('data-cat') === cat) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    function copySelection() {
      const selectedItems = selectedIds.map(id => itemsData.find(it => it.id === id)).filter(Boolean);
      const text = "Here are my selected Chennai 2.0 photos (" + selectedItems.length + " total):\\n" + 
        selectedItems.map((it, idx) => (idx + 1) + ". " + it.id + " - " + it.desc).join("\\n");

      navigator.clipboard.writeText(text).then(() => {
        showToast("Copied " + selectedItems.length + " selected photos to clipboard!");
      });
    }

    function showToast(msg) {
      const toast = document.getElementById('toast');
      document.getElementById('toastMsg').innerText = msg;
      toast.classList.remove('translate-y-20', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
      setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-20', 'opacity-0');
      }, 3000);
    }

    function openLightbox(src, caption) {
      document.getElementById('lightboxImg').src = src;
      document.getElementById('lightboxCaption').innerText = caption;
      document.getElementById('lightbox').classList.remove('hidden');
    }

    function closeLightbox() {
      document.getElementById('lightbox').classList.add('hidden');
    }
  </script>
</body>
</html>`;

  fs.writeFileSync('public/chennai-selector.html', html);
  console.log('Successfully written public/chennai-selector.html!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
