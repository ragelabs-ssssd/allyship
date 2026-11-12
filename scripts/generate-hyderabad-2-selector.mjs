import fs from 'fs';
import path from 'path';

const momentsDir = 'public/conclave-moments/hyderabad-2';

// 1. Remove temporary sample_*.jpg files
if (fs.existsSync(momentsDir)) {
  const allFiles = fs.readdirSync(momentsDir);
  for (const f of allFiles) {
    if (f.startsWith('sample_')) {
      fs.unlinkSync(path.join(momentsDir, f));
    }
  }
}

// 2. 24 Curated Moments for Hyderabad 2.0
const moments = [
  { id: 'hyderabad-2-01', caption: 'Inaugural Conclave Assembly & ALLYSHIP 2.0 Hyderabad Stage Wall', category: 'Stage & Wall' },
  { id: 'hyderabad-2-02', caption: 'Ceremonial Conclave Lamp Lighting & Auspicious Invocation', category: 'Tradition' },
  { id: 'hyderabad-2-03', caption: 'Distinguished Dais Leadership & University Dignitaries', category: 'Dais Leadership' },
  { id: 'hyderabad-2-04', caption: 'Presidential Conclave Address: Academic & Scientific Excellence', category: 'Keynote' },
  { id: 'hyderabad-2-05', caption: 'Keynote Deliberations on Sovereign Technological Capabilities', category: 'Keynote' },
  { id: 'hyderabad-2-06', caption: 'Corporate Leadership Perspectives from the Hyderabad Tech Corridor', category: 'Enterprise' },
  { id: 'hyderabad-2-07', caption: 'Plenary Assembly: CXOs, R&D Directors & Enterprise Mentors', category: 'Plenary' },
  { id: 'hyderabad-2-08', caption: 'Executive Roundtables: Practicing Allyship for Emerging Talent', category: 'Roundtable' },
  { id: 'hyderabad-2-09', caption: 'Industry–Academia Synergy: Designing Future-Ready Curricula', category: 'Curriculum' },
  { id: 'hyderabad-2-10', caption: 'Executive Panel Discourse: Cross-Disciplinary Skill Architectures', category: 'Panel' },
  { id: 'hyderabad-2-11', caption: 'Enterprise Technology Leaders Deliberating Strategic Mentorship', category: 'Panel' },
  { id: 'hyderabad-2-12', caption: 'Leadership Dialogue on Innovation, IP & Sovereign Capability', category: 'Dialogue' },
  { id: 'hyderabad-2-13', caption: 'Interactive Floor Q&A: Corporate Mentors Engaging Young Innovators', category: 'Q&A' },
  { id: 'hyderabad-2-14', caption: 'Campus-to-Corporate Transitions: Mentorship in Action', category: 'Mentorship' },
  { id: 'hyderabad-2-15', caption: 'Ceremonial Felicitation & Memento Presentation to Industry Luminaries', category: 'Felicitations' },
  { id: 'hyderabad-2-16', caption: 'Academic Honors Bestowed on Corporate Partner Organizations', category: 'Felicitations' },
  { id: 'hyderabad-2-17', caption: 'Strategic Industry Partner Recognition on the Conclave Dais', category: 'Honors' },
  { id: 'hyderabad-2-18', caption: 'Leadership Camaraderie & Academic Alliances on Stage', category: 'Alliances' },
  { id: 'hyderabad-2-19', caption: 'Bilateral Leadership Exchanges in the Executive Foyer', category: 'Foyer' },
  { id: 'hyderabad-2-20', caption: 'Corporate Delegates & Tech Corridor Leaders Networking', category: 'Networking' },
  { id: 'hyderabad-2-21', caption: 'Enterprise HR Heads & University Leadership Consultations', category: 'Consultation' },
  { id: 'hyderabad-2-22', caption: 'Corporate Mentorship Partnerships Formed at Hyatt Hyderabad', category: 'Partnerships' },
  { id: 'hyderabad-2-23', caption: 'Grand Conclave Ensemble: Luminaries, Faculty & Industry Leaders', category: 'Ensemble' },
  { id: 'hyderabad-2-24', caption: 'Celebrating Shared Purpose: Sovereign Technological Self-Reliance', category: 'Finale' },
];

// 3. Build public/hyderabad-2-selector.html
const html = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ALLYSHIP++ | Hyderabad 2.0 Conclave Moments & Video</title>
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

  <!-- TOP STICKY BAR -->
  <header class="sticky top-0 z-40 bg-surface/95 backdrop-blur-md border-b border-line px-4 sm:px-6 py-4 shadow-xl">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
      <div>
        <div class="flex items-center gap-3">
          <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-accent/15 text-accent border border-accent/30">
            Conclave Media Review
          </span>
          <h1 class="text-xl sm:text-2xl font-display font-extrabold tracking-tight text-white">
            Hyderabad 2.0 Conclave Film & 24 Moments
          </h1>
        </div>
        <p class="text-xs text-gray-400 mt-1">
          24 full HD conclave moments curated directly from the master 1080p film (<span class="font-mono text-accent">SOA Allyship++ 2.O Hyd-02.mp4</span>).
        </p>
      </div>

      <div class="flex items-center gap-3">
        <a href="/event#hyderabad-2" class="px-4 py-2.5 rounded-xl bg-accent hover:bg-accent-light text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-accent/20 flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
          View on Main Event Page
        </a>
      </div>
    </div>
  </header>

  <!-- MASTER VIDEO PLAYER PREVIEW -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
    <div class="bg-surface-2 border border-line rounded-2xl overflow-hidden p-4 sm:p-6 shadow-2xl">
      <div class="flex items-center justify-between mb-4">
        <div>
          <span class="text-[11px] font-bold uppercase tracking-wider text-accent font-mono">Official Conclave Film</span>
          <h2 class="text-lg font-bold text-white">Hyderabad Chapter 2.0 | Gachibowli Tech Corridor</h2>
        </div>
        <span class="text-xs font-mono text-gray-400 bg-surface-3 px-3 py-1 rounded-md">1080p Full HD • 01:42</span>
      </div>
      <div class="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-white/10 shadow-inner">
        <video 
          src="/discover/hyderabad-2-conclave-film.mp4" 
          controls 
          playsinline 
          class="w-full h-full object-cover"
        ></video>
      </div>
    </div>
  </section>

  <!-- 24 CONCLAVE MOMENTS GRID -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-xl font-display font-extrabold text-white">Curated 24 Conclave Moments</h2>
        <p class="text-xs text-gray-400">Captured in full 1080p resolution across all chapters of the conclave.</p>
      </div>
      <span class="text-xs font-mono text-accent font-bold bg-accent/10 border border-accent/30 px-3 py-1 rounded-lg">
        24 / 24 Moments Active
      </span>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      ${moments.map((m, idx) => `
        <div class="group relative bg-surface-2 border border-line hover:border-accent/60 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl">
          <div class="relative aspect-[16/9] w-full bg-surface-3 overflow-hidden cursor-pointer" onclick="openLightbox('/conclave-moments/hyderabad-2/${m.id}.jpg', '${m.caption}')">
            <img 
              src="/conclave-moments/hyderabad-2/${m.id}.jpg" 
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
            <span class="font-mono text-[11px] font-bold text-accent">${m.id}.jpg</span>
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

fs.writeFileSync('public/hyderabad-2-selector.html', html);
console.log('Successfully generated public/hyderabad-2-selector.html!');

