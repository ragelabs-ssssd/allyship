import fs from 'fs';
import path from 'path';

const momentsDir = 'public/conclave-moments/hyderabad-2';
const candDir = 'public/conclave-moments/hyderabad-2/candidates';
const resDir = 'public/photo-resources/hyderabad-2';

// 1. 22 Master DSLR Camera Photos
const masterDslrPhotos = [
  { id: 'HYD2_DSLR_01_FRONT_ROW_LEADERSHIP', file: 'HYD2_DSLR_01_FRONT_ROW_LEADERSHIP.jpg', category: 'Leadership', desc: 'SOA Leadership Delegation: Prof. (Dr.) Raj Kumar Hota & Corporate Dignitaries in Plenary Assembly (Orange Armchairs)' },
  { id: 'HYD2_DSLR_02_STAGE_FELICITATION_MEMENTO', file: 'HYD2_DSLR_02_STAGE_FELICITATION_MEMENTO.jpg', category: 'Felicitations', desc: 'Ceremonial Felicitation: SOA Leadership Presenting Commemorative Conclave Memento on Stage' },
  { id: 'HYD2_DSLR_03_KEYNOTE_SPEAKER_MICROPHONE', file: 'HYD2_DSLR_03_KEYNOTE_SPEAKER_MICROPHONE.jpg', category: 'Keynote', desc: 'Executive Keynote Dialogue: Industry Speaker Addressing the Hyderabad Conclave at Microphone' },
  { id: 'HYD2_DSLR_04_WIDE_PLENARY_HALL_FRONT', file: 'HYD2_DSLR_04_WIDE_PLENARY_HALL_FRONT.jpg', category: 'Plenary', desc: 'Grand Plenary Assembly: Enterprise Leaders & University Delegates at Le Meridien Hyderabad (Chandelier & Full Hall)' },
  { id: 'HYD2_DSLR_05_PLENARY_ASSEMBLY_REAR_VIEW', file: 'HYD2_DSLR_05_PLENARY_ASSEMBLY_REAR_VIEW.jpg', category: 'Plenary', desc: 'Plenary Hall Perspective: Corporate CXOs & Enterprise Leaders Facing Main Digital Dais Screen' },
  { id: 'HYD2_DSLR_06_FRONT_ROW_DIGNITARIES', file: 'HYD2_DSLR_06_FRONT_ROW_DIGNITARIES.jpg', category: 'Enterprise', desc: 'Corporate Leadership Perspectives: Senior Dignitaries Engaged in Plenary Deliberations' },
  { id: 'HYD2_DSLR_07_CORPORATE_DELEGATES_ASSEMBLY', file: 'HYD2_DSLR_07_CORPORATE_DELEGATES_ASSEMBLY.jpg', category: 'Roundtable', desc: 'Executive Roundtables: Corporate Delegates Collaborating at Le Meridien Hyderabad Banquet Tables' },
  { id: 'HYD2_DSLR_08_HOTA_PODIUM_ADDRESS', file: 'HYD2_DSLR_08_HOTA_PODIUM_ADDRESS.jpg', category: 'Keynote', desc: 'Prof. (Dr.) Raj Kumar Hota Delivering the Conclave Leadership Keynote Address from the Podium' },
  { id: 'HYD2_DSLR_09_EXECUTIVE_PANEL_TRIO', file: 'HYD2_DSLR_09_EXECUTIVE_PANEL_TRIO.jpg', category: 'Panel', desc: 'Executive Panel Deliberations: Corporate HR & Capability Leaders on Stage Addressing the Assembly' },
  { id: 'HYD2_DSLR_10_DELEGATE_FLOOR_QA', file: 'HYD2_DSLR_10_DELEGATE_FLOOR_QA.jpg', category: 'Q&A', desc: 'Interactive Floor Q&A: Corporate Delegate Engaging Conclave Panelists on Talent Readiness' },
  { id: 'HYD2_DSLR_11_ACADEMIC_HONORS_SHAWL', file: 'HYD2_DSLR_11_ACADEMIC_HONORS_SHAWL.jpg', category: 'Felicitations', desc: 'Academic Honors & Recognition: Commemorative Conclave Memento Presented to Corporate Dignitary' },
  { id: 'HYD2_DSLR_12_PARTNER_MEMENTO_STAGE', file: 'HYD2_DSLR_12_PARTNER_MEMENTO_STAGE.jpg', category: 'Honors', desc: 'Strategic Industry Partner Felicitation: SOA Leadership Presenting Honors to Corporate Luminary' },
  { id: 'HYD2_DSLR_13_FLORAL_BOUQUET_WELCOME', file: 'HYD2_DSLR_13_FLORAL_BOUQUET_WELCOME.jpg', category: 'Alliances', desc: 'Inaugural Stage Felicitation: Floral Bouquet & Conclave Welcome Bestowed on Keynote Speaker' },
  { id: 'HYD2_DSLR_14_PLENARY_AUDIENCE_APPLAUSE', file: 'HYD2_DSLR_14_PLENARY_AUDIENCE_APPLAUSE.jpg', category: 'Finale', desc: 'Grand Plenary Ovation: Corporate Delegates Celebrating Shared Purpose & Industry-Academia Synergy' },
  { id: 'HYD2_DSLR_15_VIP_FRONT_ROW_WIDE', file: 'HYD2_DSLR_15_VIP_FRONT_ROW_WIDE.jpg', category: 'Leadership', desc: 'Front Row Executive Assembly: SOA Leadership Delegation & Corporate Dignitaries at Le Meridien Hyderabad' },
  { id: 'HYD2_DSLR_16_CONCLAVE_GROUP_SELFIE', file: 'HYD2_DSLR_16_CONCLAVE_GROUP_SELFIE.jpg', category: 'Networking', desc: 'Conclave Floor Camaraderie: Corporate HR Leaders & Young Professionals Capturing Conclave Memories' },
  { id: 'HYD2_DSLR_17_GRAND_CONCLAVE_ENSEMBLE', file: 'HYD2_DSLR_17_GRAND_CONCLAVE_ENSEMBLE.jpg', category: 'Ensemble', desc: 'Grand Conclave Plenary Ensemble: 10 Distinguished Dignitaries, Panelists & Academic Leaders on Dais' },
  { id: 'HYD2_DSLR_18_BIKRAM_NAYAK_PANEL_ADDRESS', file: 'HYD2_DSLR_18_BIKRAM_NAYAK_PANEL_ADDRESS.jpg', category: 'Panel', desc: 'Executive Panel Perspective: Bikram K. Nayak (VP HR, NCC Ltd) Deliberating on Emerging Workforce Capability' },
  { id: 'HYD2_DSLR_19_FULL_PANEL_SANJAY_DHIR', file: 'HYD2_DSLR_19_FULL_PANEL_SANJAY_DHIR.jpg', category: 'Panel', desc: 'Conclave Panel Discourse: Moderator Prof. Sanjay Dhir (IIT Delhi) & Corporate Panelists on Stage' },
  { id: 'HYD2_DSLR_20_PANEL_INTERACTIVE_MOMENT', file: 'HYD2_DSLR_20_PANEL_INTERACTIVE_MOMENT.jpg', category: 'Panel', desc: 'Interactive Panel Discourse: Industry Leaders Addressing Campus-to-Corporate Transitions' },
  { id: 'HYD2_DSLR_21_SPORTS_GUEST_KEYNOTE', file: 'HYD2_DSLR_21_SPORTS_GUEST_KEYNOTE.jpg', category: 'Sports Guest', desc: 'Chief Guest Fireside: Dr. G. Srinivas Patnaik (Secretary, Athletics Federation of India) on Discipline & Grit' },
  { id: 'HYD2_DSLR_22_ROSE_BOUQUET_FELICITATION', file: 'HYD2_DSLR_22_ROSE_BOUQUET_FELICITATION.jpg', category: 'Felicitations', desc: 'Dais Felicitation: Dr. G. Srinivas Patnaik Presenting Floral Honors to University Leadership' },
];

// 2. 24 Currently Deployed Moments
const deployedMoments = [
  { id: 'hyderabad-2-01', file: 'hyderabad-2-01.jpg', category: 'Tradition', desc: 'Ceremonial Lamp Lighting & Conclave Inaugural Blessing' },
  { id: 'hyderabad-2-02', file: 'hyderabad-2-02.jpg', category: 'Keynote', desc: 'Executive Keynote Dialogue: Industry Speaker Addressing the Hyderabad Conclave' },
  { id: 'hyderabad-2-03', file: 'hyderabad-2-03.jpg', category: 'Plenary', desc: 'Grand Plenary Assembly: Enterprise Leaders & University Delegates at Le Meridien Hyderabad' },
  { id: 'hyderabad-2-04', file: 'hyderabad-2-04.jpg', category: 'Leadership', desc: 'SOA Leadership Delegation: Prof. (Dr.) Raj Kumar Hota & Corporate Dignitaries in Plenary Assembly' },
  { id: 'hyderabad-2-05', file: 'hyderabad-2-05.jpg', category: 'Keynote', desc: 'Prof. (Dr.) Raj Kumar Hota Delivering the Conclave Leadership Keynote Address from the Podium' },
  { id: 'hyderabad-2-06', file: 'hyderabad-2-06.jpg', category: 'Enterprise', desc: 'Corporate Leadership Perspectives: Senior Dignitaries Engaged in Plenary Deliberations' },
  { id: 'hyderabad-2-07', file: 'hyderabad-2-07.jpg', category: 'Plenary', desc: 'Plenary Hall Perspective: Corporate CXOs & Enterprise Leaders Facing Main Digital Dais' },
  { id: 'hyderabad-2-08', file: 'hyderabad-2-08.jpg', category: 'Roundtable', desc: 'Executive Roundtables: Corporate Delegates Collaborating at Le Meridien Hyderabad' },
  { id: 'hyderabad-2-09', file: 'hyderabad-2-09.jpg', category: 'Leadership', desc: 'Front Row Executive Assembly: SOA Leadership Delegation & Corporate Dignitaries at Le Meridien Hyderabad' },
  { id: 'hyderabad-2-10', file: 'hyderabad-2-10.jpg', category: 'Panel', desc: 'Executive Panel Deliberations: Corporate HR & Capability Leaders Addressing the Assembly' },
  { id: 'hyderabad-2-11', file: 'hyderabad-2-11.jpg', category: 'Panel', desc: 'Executive Panel Perspective: Bikram K. Nayak (VP HR, NCC Ltd) Deliberating on Emerging Workforce Capability' },
  { id: 'hyderabad-2-12', file: 'hyderabad-2-12.jpg', category: 'Panel', desc: 'Conclave Panel Discourse: Moderator Prof. Sanjay Dhir (IIT Delhi) & Corporate Panelists on Stage' },
  { id: 'hyderabad-2-13', file: 'hyderabad-2-13.jpg', category: 'Q&A', desc: 'Interactive Floor Q&A: Corporate Delegate Engaging Conclave Panelists on Talent Readiness' },
  { id: 'hyderabad-2-14', file: 'hyderabad-2-14.jpg', category: 'Panel', desc: 'Interactive Panel Discourse: Industry Leaders Addressing Campus-to-Corporate Transitions' },
  { id: 'hyderabad-2-15', file: 'hyderabad-2-15.jpg', category: 'Felicitations', desc: 'Ceremonial Felicitation: SOA Leadership Presenting Commemorative Conclave Memento on Stage' },
  { id: 'hyderabad-2-16', file: 'hyderabad-2-16.jpg', category: 'Felicitations', desc: 'Academic Honors & Recognition: Commemorative Conclave Memento Presented to Corporate Dignitary' },
  { id: 'hyderabad-2-17', file: 'hyderabad-2-17.jpg', category: 'Honors', desc: 'Strategic Industry Partner Felicitation: SOA Leadership Presenting Honors to Corporate Luminary' },
  { id: 'hyderabad-2-18', file: 'hyderabad-2-18.jpg', category: 'Alliances', desc: 'Inaugural Stage Felicitation: Floral Bouquet & Conclave Welcome Bestowed on Keynote Speaker' },
  { id: 'hyderabad-2-19', file: 'hyderabad-2-19.jpg', category: 'Sports Guest', desc: 'Chief Guest Fireside: Dr. G. Srinivas Patnaik (Secretary, Athletics Federation of India) on Discipline & Grit' },
  { id: 'hyderabad-2-20', file: 'hyderabad-2-20.jpg', category: 'Felicitations', desc: 'Dais Felicitation: Dr. G. Srinivas Patnaik Presenting Floral Honors to University Leadership' },
  { id: 'hyderabad-2-21', file: 'hyderabad-2-21.jpg', category: 'Networking', desc: 'Conclave Floor Camaraderie: Corporate HR Leaders & Young Professionals Capturing Conclave Memories' },
  { id: 'hyderabad-2-22', file: 'hyderabad-2-22.jpg', category: 'Partnerships', desc: 'Corporate Mentorship Partnerships Formed at Hyatt Hyderabad' },
  { id: 'hyderabad-2-23', file: 'hyderabad-2-23.jpg', category: 'Ensemble', desc: 'Grand Conclave Plenary Ensemble: 10 Distinguished Dignitaries, Panelists & Academic Leaders on Dais' },
  { id: 'hyderabad-2-24', file: 'hyderabad-2-24.jpg', category: 'Finale', desc: 'Grand Plenary Ovation: Corporate Delegates Celebrating Shared Purpose & Industry-Academia Synergy' },
];

// 3. Candidate Frames Extracted Across the Video
const candFiles = fs.existsSync(candDir)
  ? fs.readdirSync(candDir).filter(f => f.endsWith('.jpg')).sort()
  : [];

const allItems = [];

// Add Master DSLR Photos
for (const p of masterDslrPhotos) {
  const relPath = `/photo-resources/hyderabad-2/${p.file}`;
  allItems.push({
    id: p.id,
    file: p.file,
    sourceType: 'Master DSLR',
    previewUrl: relPath,
    fullUrl: relPath,
    category: p.category,
    desc: p.desc,
    initialChecked: true,
  });
}

// Add Deployed Moments
for (const m of deployedMoments) {
  const relPath = `/conclave-moments/hyderabad-2/${m.file}`;
  allItems.push({
    id: m.id,
    file: m.file,
    sourceType: 'Active Moments',
    previewUrl: relPath,
    fullUrl: relPath,
    category: 'Active (Current)',
    desc: m.desc,
    initialChecked: true,
  });
}

// Add Candidate Frames
for (const f of candFiles) {
  const relPath = `/conclave-moments/hyderabad-2/candidates/${f}`;
  const timeMatch = f.match(/_([0-9.]+)s/);
  const timeSec = timeMatch ? `${timeMatch[1]}s` : '';
  allItems.push({
    id: f.replace('.jpg', ''),
    file: f,
    sourceType: 'Video Candidates',
    previewUrl: relPath,
    fullUrl: relPath,
    category: `Candidate (${timeSec})`,
    desc: `HD Video Capture at timestamp ${timeSec} — Hyderabad 2.0 Conclave Film`,
    initialChecked: false,
  });
}

console.log(`Total items compiled: ${allItems.length}`);

// Generate HTML
const html = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ALLYSHIP++ | Hyderabad 2.0 Conclave Moments & Local Photo Picker</title>
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
    .custom-scroll::-webkit-scrollbar {
      height: 6px;
      width: 6px;
    }
    .custom-scroll::-webkit-scrollbar-track {
      background: #111827;
    }
    .custom-scroll::-webkit-scrollbar-thumb {
      background: #374151;
      border-radius: 3px;
    }
  </style>
</head>
<body class="min-h-screen pb-32">

  <!-- TOP STICKY BAR -->
  <header class="sticky top-0 z-40 bg-surface/95 backdrop-blur-md border-b border-line px-4 sm:px-6 py-4 shadow-xl">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
      <div>
        <div class="flex items-center gap-3">
          <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-accent/20 text-accent border border-accent/40">
            HYDERABAD 2.0 • PHOTO SELECTOR
          </span>
          <span class="text-xs text-white/50 font-mono">Le Meridien, Gachibowli</span>
        </div>
        <h1 class="text-xl sm:text-2xl font-black font-display tracking-tight text-white mt-1">
          Hyderabad Chapter 2.0 Conclave Moments & Local Photo Picker
        </h1>
        <p class="text-xs sm:text-sm text-white/60">
          Browse all ${allItems.length} photos (${masterDslrPhotos.length} Master DSLR captures + 24 active deployed moments + ${candFiles.length} video frames), pick photos from your local PC folder, select your 24 favorites, and copy the list for chat.
        </p>
      </div>

      <!-- COUNTER & ACTIONS -->
      <div class="flex items-center gap-3 self-end md:self-center">
        <div class="bg-surface-2 border border-line px-4 py-2 rounded-xl text-center">
          <div class="text-[10px] uppercase font-mono tracking-wider text-white/50">Selected</div>
          <div id="selection-counter" class="text-lg font-black font-mono text-accent">24 / 24</div>
        </div>

        <button onclick="copySelectionForChat()" class="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent-light text-black font-bold text-sm px-4 py-2.5 rounded-xl hover:brightness-110 active:scale-95 transition shadow-lg shadow-accent/20">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>
          <span>📋 Copy 24 for Chat</span>
        </button>

        <button onclick="resetToDefaults()" class="border border-line bg-surface-2 hover:bg-surface-3 text-white/80 text-xs px-3 py-2.5 rounded-xl font-medium transition" title="Reset selection to default active 24 moments">
          Reset (Active 24)
        </button>
      </div>
    </div>

    <!-- LOCAL FOLDER & FILE PICKER BAR -->
    <div class="max-w-7xl mx-auto mt-4 pt-3 border-t border-line/60 flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-2">
        <span class="text-xs font-mono uppercase text-accent font-semibold tracking-wider">📁 Local Pickers:</span>
        <label class="cursor-pointer inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition shadow">
          <span>📁 Choose Local Folder</span>
          <input type="file" id="local-folder-input" webkitdirectory directory multiple class="hidden" onchange="handleLocalFiles(event)" />
        </label>
        <label class="cursor-pointer inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition shadow">
          <span>🖼️ Pick Images Directly</span>
          <input type="file" id="local-files-input" multiple accept="image/*" class="hidden" onchange="handleLocalFiles(event)" />
        </label>
        <span id="local-files-status" class="text-xs text-white/50 font-mono italic">No local folder selected yet</span>
      </div>

      <!-- FILTER TABS -->
      <div class="flex items-center gap-1.5 overflow-x-auto custom-scroll pb-1">
        <button onclick="filterSource('all')" class="filter-tab active px-3 py-1 rounded-lg text-xs font-semibold bg-accent text-black transition" data-source="all">
          All (<span id="count-all">${allItems.length}</span>)
        </button>
        <button onclick="filterSource('Master DSLR')" class="filter-tab px-3 py-1 rounded-lg text-xs font-semibold bg-surface-2 text-white/80 hover:bg-surface-3 transition" data-source="Master DSLR">
          Master DSLR (${masterDslrPhotos.length})
        </button>
        <button onclick="filterSource('Active Moments')" class="filter-tab px-3 py-1 rounded-lg text-xs font-semibold bg-surface-2 text-white/80 hover:bg-surface-3 transition" data-source="Active Moments">
          Active Deployed (24)
        </button>
        <button onclick="filterSource('Video Candidates')" class="filter-tab px-3 py-1 rounded-lg text-xs font-semibold bg-surface-2 text-white/80 hover:bg-surface-3 transition" data-source="Video Candidates">
          Candidate Frames (${candFiles.length})
        </button>
        <button onclick="filterSource('Local Uploads')" class="filter-tab px-3 py-1 rounded-lg text-xs font-semibold bg-surface-2 text-white/80 hover:bg-surface-3 transition" data-source="Local Uploads">
          Local Files (<span id="count-local">0</span>)
        </button>
      </div>
    </div>
  </header>

  <!-- MASTER VIDEO PREVIEW ACCORDION -->
  <section class="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
    <details class="bg-surface border border-line rounded-2xl overflow-hidden group">
      <summary class="px-5 py-4 cursor-pointer font-bold flex items-center justify-between text-sm sm:text-base hover:bg-surface-2 transition select-none">
        <div class="flex items-center gap-3">
          <span class="text-accent text-lg">🎬</span>
          <span>Hyderabad 2.0 Conclave Film (1080p Master Video)</span>
          <span class="text-xs font-mono bg-accent/20 text-accent px-2 py-0.5 rounded-full">01:42 Full HD</span>
        </div>
        <span class="text-xs text-white/50 font-mono group-open:rotate-180 transition-transform">▼ Click to expand video</span>
      </summary>
      <div class="p-5 border-t border-line bg-canvas/60">
        <video controls class="w-full max-h-[460px] rounded-xl bg-black shadow-2xl mx-auto" preload="metadata">
          <source src="/discover/hyderabad-2-conclave-film.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <p class="text-xs text-white/50 mt-3 font-mono text-center">
          Location: <code class="text-accent">public/discover/hyderabad-2-conclave-film.mp4</code> — All candidate frames below were extracted from this film.
        </p>
      </div>
    </details>
  </section>

  <!-- PHOTO GALLERY GRID -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
    <div class="flex items-center justify-between mb-4">
      <div class="text-xs sm:text-sm text-white/60">
        Click any photo card to zoom into high-res lightbox. Use the checkbox to select/deselect for your 24 picks.
      </div>
      <div class="flex items-center gap-2">
        <button onclick="selectAllVisible()" class="text-xs text-accent hover:underline font-mono">Select Visible</button>
        <span class="text-white/20">•</span>
        <button onclick="deselectAll()" class="text-xs text-white/50 hover:underline font-mono">Deselect All</button>
      </div>
    </div>

    <div id="photos-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <!-- Items dynamically populated via JS -->
    </div>
  </main>

  <!-- BOTTOM FLOATING SELECTED TRAY -->
  <footer id="bottom-tray" class="fixed bottom-0 inset-x-0 z-40 bg-surface/95 backdrop-blur-lg border-t border-line shadow-2xl p-3 transform transition-transform">
    <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
      <div class="flex items-center gap-3 min-w-0">
        <div class="flex items-center gap-2">
          <span class="text-xs font-mono font-bold text-accent uppercase tracking-wider">Your Picks:</span>
          <span id="tray-counter" class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-surface-2 text-white border border-line">24 / 24</span>
        </div>
        <!-- Thumbnails strip -->
        <div id="tray-strip" class="flex items-center gap-1.5 overflow-x-auto custom-scroll py-1 max-w-[50vw]">
          <!-- Thumbnails rendered here -->
        </div>
      </div>

      <div class="flex items-center gap-2 shrink-0">
        <button onclick="copySelectionForChat()" class="bg-gradient-to-r from-accent to-accent-light text-black font-bold text-xs sm:text-sm px-4 py-2 rounded-xl hover:brightness-110 active:scale-95 transition shadow-lg">
          📋 Copy 24 for Chat
        </button>
      </div>
    </div>
  </footer>

  <!-- FULLSCREEN LIGHTBOX -->
  <div id="lightbox" class="fixed inset-0 z-50 bg-black/90 backdrop-blur-md hidden flex flex-col items-center justify-center p-4">
    <button onclick="closeLightbox()" class="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-2.5 transition">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
    <button onclick="prevLightbox()" class="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
    </button>
    <button onclick="nextLightbox()" class="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
    </button>

    <div class="max-w-5xl max-h-[82vh] flex flex-col items-center justify-center">
      <img id="lightbox-img" src="" alt="" class="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl" />
      <div class="mt-3 text-center">
        <div id="lightbox-title" class="font-bold text-white text-base"></div>
        <div id="lightbox-desc" class="text-xs text-white/60 font-mono mt-1"></div>
      </div>
    </div>
  </div>

  <!-- SCRIPT -->
  <script>
    const INITIAL_ITEMS = ${JSON.stringify(allItems, null, 2)};
    let allPhotos = [...INITIAL_ITEMS];
    let selectedSet = new Set(INITIAL_ITEMS.filter(i => i.sourceType === 'Active Moments').map(i => i.id));
    let currentFilter = 'all';
    let lightboxIndex = 0;
    let visiblePhotos = [];

    function renderGrid() {
      const grid = document.getElementById('photos-grid');
      grid.innerHTML = '';

      visiblePhotos = allPhotos.filter(p => {
        if (currentFilter === 'all') return true;
        return p.sourceType === currentFilter;
      });

      visiblePhotos.forEach((photo, idx) => {
        const isChecked = selectedSet.has(photo.id);
        const card = document.createElement('div');
        card.className = \`group relative bg-surface border rounded-xl overflow-hidden transition-all duration-200 hover:border-accent/60 hover:shadow-xl \${
          isChecked ? 'border-accent bg-accent/5 ring-1 ring-accent' : 'border-line'
        }\`;
        card.id = \`card-\${photo.id}\`;

        card.innerHTML = \`
          <div class="relative aspect-video bg-black overflow-hidden cursor-pointer" onclick="openLightbox(\${idx})">
            <img src="\${photo.previewUrl}" alt="\${photo.id}" loading="lazy" class="w-full h-full object-cover transition duration-300 group-hover:scale-105" />
            
            <!-- SOURCE BADGE -->
            <div class="absolute top-2 left-2 flex items-center gap-1.5">
              <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase \${
                photo.sourceType === 'Master DSLR' ? 'bg-purple-600 text-white' :
                photo.sourceType === 'Active Moments' ? 'bg-emerald-500 text-black' :
                photo.sourceType === 'Video Candidates' ? 'bg-amber-500 text-black' :
                'bg-blue-500 text-white'
              }">
                \${photo.sourceType}
              </span>
              \${isChecked ? '<span class="badge-number">✓</span>' : ''}
            </div>
          </div>

          <div class="p-3">
            <div class="flex items-start justify-between gap-2">
              <div class="min-w-0">
                <div class="font-mono text-xs font-bold text-accent truncate" title="\${photo.id}">\${photo.id}</div>
                <div class="text-xs text-white/80 line-clamp-2 mt-0.5" title="\${photo.desc}">\${photo.desc}</div>
              </div>

              <!-- CHECKBOX -->
              <input type="checkbox" id="check-\${photo.id}" \${isChecked ? 'checked' : ''} onchange="toggleSelect('\${photo.id}', this.checked)" class="w-5 h-5 rounded border-line bg-surface-2 text-accent focus:ring-accent cursor-pointer shrink-0 mt-0.5" />
            </div>
          </div>
        \`;

        grid.appendChild(card);
      });

      updateSelectionUI();
    }

    function toggleSelect(id, checked) {
      if (checked) {
        if (selectedSet.size >= 24) {
          alert('You have already selected 24 moments. Deselect one first if you want to replace it!');
          const cb = document.getElementById('check-' + id);
          if (cb) cb.checked = false;
          return;
        }
        selectedSet.add(id);
      } else {
        selectedSet.delete(id);
      }
      updateSelectionUI();
      const card = document.getElementById('card-' + id);
      if (card) {
        if (selectedSet.has(id)) {
          card.classList.add('border-accent', 'bg-accent/5', 'ring-1', 'ring-accent');
          card.classList.remove('border-line');
        } else {
          card.classList.remove('border-accent', 'bg-accent/5', 'ring-1', 'ring-accent');
          card.classList.add('border-line');
        }
      }
    }

    function updateSelectionUI() {
      const count = selectedSet.size;
      const counterEl = document.getElementById('selection-counter');
      const trayCounterEl = document.getElementById('tray-counter');
      if (counterEl) {
        counterEl.textContent = \`\${count} / 24\`;
        counterEl.className = \`text-lg font-black font-mono \${count === 24 ? 'text-emerald-400' : 'text-accent'}\`;
      }
      if (trayCounterEl) {
        trayCounterEl.textContent = \`\${count} / 24\`;
      }

      // Update tray thumbnails
      const trayStrip = document.getElementById('tray-strip');
      if (trayStrip) {
        trayStrip.innerHTML = '';
        let num = 1;
        selectedSet.forEach(id => {
          const item = allPhotos.find(p => p.id === id);
          if (item) {
            const thumb = document.createElement('div');
            thumb.className = 'relative shrink-0 w-12 h-8 rounded border border-accent/60 overflow-hidden cursor-pointer group';
            thumb.title = \`#\${num}: \${item.id}\`;
            thumb.innerHTML = \`
              <img src="\${item.previewUrl}" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center font-mono font-bold text-[10px] text-accent">#\${num}</div>
              <button onclick="event.stopPropagation(); toggleSelect('\${item.id}', false); renderGrid();" class="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-4 h-4 text-[9px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition">✕</button>
            \`;
            trayStrip.appendChild(thumb);
            num++;
          }
        });
      }
    }

    function filterSource(source) {
      currentFilter = source;
      document.querySelectorAll('.filter-tab').forEach(btn => {
        if (btn.getAttribute('data-source') === source) {
          btn.classList.add('active', 'bg-accent', 'text-black');
          btn.classList.remove('bg-surface-2', 'text-white/80');
        } else {
          btn.classList.remove('active', 'bg-accent', 'text-black');
          btn.classList.add('bg-surface-2', 'text-white/80');
        }
      });
      renderGrid();
    }

    function selectAllVisible() {
      for (const p of visiblePhotos) {
        if (selectedSet.size >= 24) break;
        selectedSet.add(p.id);
      }
      renderGrid();
    }

    function deselectAll() {
      selectedSet.clear();
      renderGrid();
    }

    function resetToDefaults() {
      selectedSet = new Set(INITIAL_ITEMS.filter(i => i.sourceType === 'Active Moments').map(i => i.id));
      renderGrid();
    }

    // LOCAL FILE & FOLDER HANDLING
    function handleLocalFiles(event) {
      const files = Array.from(event.target.files);
      if (!files.length) return;

      const imgFiles = files.filter(f => f.type.startsWith('image/') || /\\.(jpg|jpeg|png|webp)$/i.test(f.name));
      if (!imgFiles.length) {
        alert('No image files found in the selected folder/files.');
        return;
      }

      document.getElementById('local-files-status').textContent = \`Loaded \${imgFiles.length} local images\`;
      document.getElementById('count-local').textContent = imgFiles.length;

      imgFiles.forEach(f => {
        const url = URL.createObjectURL(f);
        allPhotos.push({
          id: f.name.replace(/\\.[^/.]+$/, ''),
          file: f.name,
          sourceType: 'Local Uploads',
          previewUrl: url,
          fullUrl: url,
          category: 'Local File',
          desc: \`Local file: \${f.name} (\${(f.size / 1024).toFixed(0)} KB)\`,
          initialChecked: false,
        });
      });

      document.getElementById('count-all').textContent = allPhotos.length;
      filterSource('Local Uploads');
    }

    // COPY EXPORT
    function copySelectionForChat() {
      const list = Array.from(selectedSet).map((id, index) => {
        const item = allPhotos.find(p => p.id === id);
        return \`#\${index + 1}: \${id} (\${item ? item.sourceType : 'Photo'}) — \${item ? item.desc : ''}\`;
      });

      const text = \`HYDERABAD CHAPTER 2.0 CONCLAVE MOMENTS SELECTION (\${selectedSet.size} / 24):\\n\\n\` + list.join('\\n');
      navigator.clipboard.writeText(text).then(() => {
        alert(\`Copied \${selectedSet.size} selections to clipboard! Paste it directly in the chat.\`);
      }).catch(err => {
        prompt('Copy selection manually:', text);
      });
    }

    // LIGHTBOX
    function openLightbox(idx) {
      lightboxIndex = idx;
      updateLightboxContent();
      document.getElementById('lightbox').classList.remove('hidden');
    }

    function closeLightbox() {
      document.getElementById('lightbox').classList.add('hidden');
    }

    function prevLightbox() {
      if (lightboxIndex > 0) {
        lightboxIndex--;
      } else {
        lightboxIndex = visiblePhotos.length - 1;
      }
      updateLightboxContent();
    }

    function nextLightbox() {
      if (lightboxIndex < visiblePhotos.length - 1) {
        lightboxIndex++;
      } else {
        lightboxIndex = 0;
      }
      updateLightboxContent();
    }

    function updateLightboxContent() {
      const item = visiblePhotos[lightboxIndex];
      if (!item) return;
      document.getElementById('lightbox-img').src = item.fullUrl;
      document.getElementById('lightbox-title').textContent = item.id;
      document.getElementById('lightbox-desc').textContent = item.desc;
    }

    document.addEventListener('keydown', (e) => {
      if (document.getElementById('lightbox').classList.contains('hidden')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
    });

    // Initial render
    renderGrid();
  </script>
</body>
</html>
`;

fs.writeFileSync('public/hyderabad-2-selector.html', html, 'utf8');
console.log('Successfully regenerated public/hyderabad-2-selector.html with all 114 items!');
