import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const srcDir = 'photo-resources/mumbai-1';
const outDir = 'public/conclave-moments/mumbai-1';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 18 Curated Unique Photos in chronological/narrative order
const curatedMoments = [
  {
    srcFile: 'WhatsApp Image 2026-11-02 at 7.36.28 PM.jpeg',
    outName: 'mumbai-1-01.jpg',
    caption: 'VIP Delegation & Conclave Organizing Committee Arrival at the Official Media Wall',
    category: 'Media Wall',
    objectPosition: '50% 20%',
  },
  {
    srcFile: 'WhatsApp Image 2026-11-12 at 12.26.45 PM (1).jpeg',
    outName: 'mumbai-1-02.jpg',
    caption: 'Industry Delegates & University Partners Gathering at the ALLYSHIP Conclave Backdrop',
    category: 'Media Wall',
    objectPosition: '50% 25%',
  },
  {
    srcFile: 'WhatsApp Image 2026-11-12 at 12.26.46 PM (1).jpeg',
    outName: 'mumbai-1-03.jpg',
    caption: 'Corporate HR Leaders & Academic Delegates Welcomed at Hyatt Mumbai',
    category: 'Media Wall',
    objectPosition: '50% 25%',
  },
  {
    srcFile: 'WhatsApp Image 2026-11-12 at 12.26.44 PM.jpeg',
    outName: 'mumbai-1-04.jpg',
    caption: 'Conclave Community & Delegate Camaraderie at the Official Media Wall',
    category: 'Camaraderie',
    objectPosition: '50% 30%',
  },
  {
    srcFile: 'WhatsApp Image 2026-11-12 at 12.26.43 PM.jpeg',
    outName: 'mumbai-1-05.jpg',
    caption: 'Pre-Session Executive Networking & Collaborative Discourse in the Conclave Foyer',
    category: 'Networking',
    objectPosition: '50% 25%',
  },
  {
    srcFile: 'WhatsApp Image 2026-11-12 at 12.26.46 PM.jpeg',
    outName: 'mumbai-1-06.jpg',
    caption: 'Bilateral Leadership Consultation on Talent Transformation & Cross-Industry Synergies',
    category: 'Networking',
    objectPosition: '50% 25%',
  },
  {
    srcFile: 'WhatsApp Image 2026-11-12 at 12.26.44 PM (1).jpeg',
    outName: 'mumbai-1-07.jpg',
    caption: 'Inaugural Conclave Address: Emcee & Leadership Welcome at the Podium',
    category: 'Podium Address',
    objectPosition: '50% 25%',
  },
  {
    srcFile: 'WhatsApp Image 2026-11-12 at 12.26.40 PM.jpeg',
    outName: 'mumbai-1-08.jpg',
    caption: 'Stage Welcome & Ceremonial Handshake for Guest of Honor Nilesh Kulkarni',
    category: 'Stage Welcome',
    objectPosition: '50% 25%',
  },
  {
    srcFile: 'WhatsApp Image 2026-11-12 at 12.26.47 PM.jpeg',
    outName: 'mumbai-1-09.jpg',
    caption: 'Grand Felicitation of Olympian & Keynote Speaker Nilesh Kulkarni with Ceremonial Shawl & Bouquet',
    category: 'Felicitation',
    objectPosition: '50% 30%',
  },
  {
    srcFile: 'WhatsApp Image 2026-11-02 at 7.36.29 PM (1).jpeg',
    outName: 'mumbai-1-10.jpg',
    caption: 'Keynote Fireside Dialogue: High-Performance Culture & Athletic Rigor in Corporate Leadership',
    category: 'Fireside Chat',
    objectPosition: '50% 30%',
  },
  {
    srcFile: 'WhatsApp Image 2026-11-02 at 7.36.29 PM.jpeg',
    outName: 'mumbai-1-11.jpg',
    caption: 'Presentation of the Sacred Konark Sun Temple Wheel Memento to Nilesh Kulkarni',
    category: 'Honors & Memento',
    objectPosition: '50% 25%',
  },
  {
    srcFile: 'WhatsApp Image 2026-11-12 at 12.26.39 PM.jpeg',
    outName: 'mumbai-1-12.jpg',
    caption: 'Executive Panel Deliberations: Building Resilient, Inclusive & Empowered Workplace Ecosystems',
    category: 'Panel Deliberations',
    objectPosition: '50% 30%',
  },
  {
    srcFile: 'WhatsApp Image 2026-11-12 at 12.26.42 PM.jpeg',
    outName: 'mumbai-1-13.jpg',
    caption: 'Corporate Leadership Address: Industry Mentor Sharing Insights on Strategic Talent Capability',
    category: 'Panel Deliberations',
    objectPosition: '50% 25%',
  },
  {
    srcFile: 'WhatsApp Image 2026-11-12 at 12.26.42 PM (1).jpeg',
    outName: 'mumbai-1-14.jpg',
    caption: 'Conclave Plenary Assembly: Corporate Delegates Engaged in the Executive Lounge',
    category: 'Audience Assembly',
    objectPosition: '50% 35%',
  },
  {
    srcFile: 'WhatsApp Image 2026-11-12 at 12.26.41 PM (1).jpeg',
    outName: 'mumbai-1-15.jpg',
    caption: 'Focused Delegate Engagement: Corporate Leader Reflecting on Conclave Deliberations',
    category: 'Audience Candid',
    objectPosition: '50% 25%',
  },
  {
    srcFile: 'WhatsApp Image 2026-11-12 at 12.26.45 PM.jpeg',
    outName: 'mumbai-1-16.jpg',
    caption: 'Warmth & Camaraderie: Delegate Heartwarming Gesture from the Assembly Floor',
    category: 'Audience Candid',
    objectPosition: '50% 25%',
  },
  {
    srcFile: 'WhatsApp Image 2026-11-02 at 7.36.26 PM.jpeg',
    outName: 'mumbai-1-17.jpg',
    caption: 'Conclave Organizing Committee & Core Leadership on the Mumbai Main Stage',
    category: 'Organizing Leadership',
    objectPosition: '50% 20%',
  },
  {
    srcFile: 'WhatsApp Image 2026-11-12 at 12.26.41 PM.jpeg',
    outName: 'mumbai-1-18.jpg',
    caption: 'Grand Conclave Finale Ensemble: University Leadership, Keynote Dignitaries & Industry Mentors',
    category: 'Finale Ensemble',
    objectPosition: '50% 25%',
  },
];

async function run() {
  console.log(`Processing ${curatedMoments.length} curated moments into ${outDir}...`);

  for (const m of curatedMoments) {
    const inPath = path.join(srcDir, m.srcFile);
    const outPath = path.join(outDir, m.outName);

    await sharp(inPath)
      .rotate()
      .resize({ width: 1600, withoutEnlargement: true })
      .jpeg({ quality: 88, progressive: true })
      .toFile(outPath);

    const st = fs.statSync(outPath);
    console.log(`✓ ${m.outName} (${(st.size / 1024).toFixed(0)} KB) <- ${m.srcFile}`);
  }

  console.log('All 18 conclave moments generated successfully!');

  // Generate selector HTML
  const selectorHtml = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ALLYSHIP++ | Mumbai Chapter 1 Photo Selector & Narrative Order</title>
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
    .badge-number {
      background: #C5A869;
      color: #000;
      font-weight: 800;
      width: 26px;
      height: 26px;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-family: 'JetBrains Mono', monospace;
    }
  </style>
</head>
<body class="min-h-screen pb-32">

  <header class="sticky top-0 z-40 bg-surface/95 backdrop-blur-md border-b border-line px-4 sm:px-6 py-4 shadow-xl">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
      <div>
        <div class="flex items-center gap-3">
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-accent/15 text-accent border border-accent/30">
            Curated Photo Narrative
          </span>
          <h1 class="text-xl sm:text-2xl font-display font-extrabold tracking-tight text-white">
            Mumbai Chapter 1.0 Photo Gallery
          </h1>
          <span class="text-xs bg-surface-3 text-gray-300 font-mono px-2 py-0.5 rounded-md font-semibold">
            18 Curated Unique Photos
          </span>
        </div>
        <p class="text-xs text-gray-400 mt-1">
          De-duplicated, color-calibrated, and chronologically ordered from arrival to grand ensemble. (1 low-res duplicate excluded).
        </p>
      </div>

      <div class="flex items-center gap-3">
        <a href="/event#mumbai-1" class="px-4 py-2.5 rounded-xl bg-accent hover:bg-accent-light text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-accent/20 flex items-center gap-2 cursor-pointer">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          View on Event Page
        </a>
      </div>
    </div>
  </header>

  <!-- AUDIT SUMMARY BAR -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
    <div class="bg-surface-2 border border-line rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold">✓</div>
        <div>
          <span class="font-bold text-white">De-duplication Audit Complete:</span>
          <span class="text-gray-300 ml-1">Photo #5 (838x586, 86 KB) was identified as a lower-resolution duplicate of Photo #13 and excluded. All 18 remaining photos are unique, sharp, and sequenced.</span>
        </div>
      </div>
      <span class="px-2.5 py-1 rounded bg-surface-3 text-gray-300 font-mono shrink-0">18 Active Moments</span>
    </div>
  </section>

  <!-- GRID OF PHOTOS -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      ${curatedMoments.map((m, idx) => `
        <div class="group relative bg-surface-2 border border-line hover:border-accent/60 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl">
          <div class="relative aspect-[4/3] w-full bg-surface-3 overflow-hidden cursor-pointer" onclick="openLightbox('/conclave-moments/mumbai-1/${m.outName}', '${m.caption}')">
            <img 
              src="/conclave-moments/mumbai-1/${m.outName}" 
              alt="${m.caption}" 
              loading="lazy" 
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute top-2.5 left-2.5">
              <span class="badge-number shadow-lg">${idx + 1}</span>
            </div>
            <span class="absolute top-2.5 right-2.5 text-[9px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 text-gray-300">
              ${m.category}
            </span>
            <button 
              type="button" 
              class="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-full bg-black/75 hover:bg-accent text-white hover:text-black flex items-center justify-center backdrop-blur-md transition-all opacity-85 hover:opacity-100"
              title="Inspect full screen"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/></svg>
            </button>
          </div>
          <div class="p-3.5 space-y-1">
            <span class="font-mono text-[11px] font-bold text-accent">${m.outName}</span>
            <p class="text-xs text-gray-300 leading-snug line-clamp-2">
              ${m.caption}
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
      <button class="mt-4 px-4 py-1.5 rounded-lg bg-surface-2 hover:bg-surface-3 text-xs text-gray-400 uppercase tracking-wider font-bold border border-line cursor-pointer">
        Click anywhere to close
      </button>
    </div>
  </div>

  <script>
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

  fs.writeFileSync('public/mumbai-selector.html', selectorHtml);
  console.log('Successfully written public/mumbai-selector.html!');
}

run().catch(console.error);

