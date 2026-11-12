import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const srcDir = 'public/photo-resources/chennai-2';
const previewDir = 'public/chennai-previews';
const momentsDir = 'public/conclave-moments/chennai-2';

if (!fs.existsSync(previewDir)) {
  fs.mkdirSync(previewDir, { recursive: true });
}

// 1. 23 Master DSLR Camera Photos
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

// 2. 8 High-Res Crops
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

// 3. 24 Currently Deployed Conclave Moments
const deployedMoments = [
  { id: 'chennai-2-01', file: 'chennai-2-01.jpg', category: 'Moments', desc: 'Grand Conclave Plenary Ensemble: Corporate Leaders & SOA Academic Leadership at Chennai' },
  { id: 'chennai-2-02', file: 'chennai-2-02.jpg', category: 'Moments', desc: 'Ceremonial Shawl & Commemorative Conclave Memento Presentation to Olympic Sprint Coach Premanand J.' },
  { id: 'chennai-2-03', file: 'chennai-2-03.jpg', category: 'Moments', desc: 'Dignitaries & Chief Luminaries on Dais at the ALLYSHIP 2.0 Chennai Chapter' },
  { id: 'chennai-2-04', file: 'chennai-2-04.jpg', category: 'Moments', desc: 'Vice-Chancellor Prof. Pradipta Kumar Nanda Presenting Conclave Honor to Coach Premanand J.' },
  { id: 'chennai-2-05', file: 'chennai-2-05.jpg', category: 'Moments', desc: 'Executive Industry Delegation & Senior Enterprise Partners on the Conclave Dais' },
  { id: 'chennai-2-06', file: 'chennai-2-06.jpg', category: 'Moments', desc: 'Corporate HR Heads & Technology Leaders Standing in Solidarity with ALLYSHIP 2.0' },
  { id: 'chennai-2-07', file: 'chennai-2-07.jpg', category: 'Moments', desc: 'Plenary Fireside Session: Paris Olympics National Sprint Coach Premanand J. on Dais' },
  { id: 'chennai-2-08', file: 'chennai-2-08.jpg', category: 'Moments', desc: 'Fireside Perspective: Sports Rigor and High-Performance Team Leadership in Corporate India' },
  { id: 'chennai-2-09', file: 'chennai-2-09.jpg', category: 'Moments', desc: 'Coach Premanand J. Deliberating with Paris 2024 Olympic Digital Wall in Background' },
  { id: 'chennai-2-10', file: 'chennai-2-10.jpg', category: 'Moments', desc: 'Fireside Discussion on Athletic Discipline, Early Talent Mentorship & Leadership Tenacity' },
  { id: 'chennai-2-11', file: 'chennai-2-11.jpg', category: 'Moments', desc: 'Inaugural Dais Felicitation & Welcome Honor for Coach Premanand J. with Floral Bouquet' },
  { id: 'chennai-2-12', file: 'chennai-2-12.jpg', category: 'Moments', desc: 'Vice-Chancellor Prof. (Dr.) Pradipta Kumar Nanda Delivering Presidential Conclave Address' },
  { id: 'chennai-2-13', file: 'chennai-2-13.jpg', category: 'Moments', desc: 'Vice-Chancellor Keynote: Academic Rigor, Translational R&D & Sovereign Tech Imperative' },
  { id: 'chennai-2-14', file: 'chennai-2-14.jpg', category: 'Moments', desc: 'Conclave Leadership Inaugural Address on Industry-Academia Collaborative Mandate' },
  { id: 'chennai-2-15', file: 'chennai-2-15.jpg', category: 'Moments', desc: 'Strategic Panel Deliberations: Practicing Allyship as a Core Corporate Responsibility' },
  { id: 'chennai-2-16', file: 'chennai-2-16.jpg', category: 'Moments', desc: 'Panel Dialogue: Archana Grover & Senior Enterprise Leaders on Sustainable Talent Pipelines' },
  { id: 'chennai-2-17', file: 'chennai-2-17.jpg', category: 'Moments', desc: 'Executive Panel Moderator Archana Grover Framing Themes on Strategic Industry Mentorship' },
  { id: 'chennai-2-18', file: 'chennai-2-18.jpg', category: 'Moments', desc: 'Corporate HR Leader Delivering Perspectives on Emerging Tech Roles & Curricular Synergy' },
  { id: 'chennai-2-19', file: 'chennai-2-19.jpg', category: 'Moments', desc: 'Industry Capability Heads Deliberating Practical Frameworks for Joint R&D Initiatives' },
  { id: 'chennai-2-20', file: 'chennai-2-20.jpg', category: 'Moments', desc: 'Elevated View of Plenary Hall: Active Engagement Between Panelists & Industry Delegates' },
  { id: 'chennai-2-21', file: 'chennai-2-21.jpg', category: 'Moments', desc: 'Distinguished Panelists & Conclave Dais Dignitaries Standing Lineup Acknowledging Assembly' },
  { id: 'chennai-2-22', file: 'chennai-2-22.jpg', category: 'Moments', desc: 'Panelists Standing Ovation & Recognition by Conclave Assembly at Hyatt Regency Chennai' },
  { id: 'chennai-2-23', file: 'chennai-2-23.jpg', category: 'Moments', desc: 'Corporate Partner Felicitation & Floral Honors Bestowed by SOA Leadership on Stage' },
  { id: 'chennai-2-24', file: 'chennai-2-24.jpg', category: 'Moments', desc: 'Grand Conclave Ensemble Finale: Dignitaries, Panelists & Delegates United under ALLYSHIP 2.0' },
];

async function main() {
  console.log('Generating preview images for master files and crops...');

  const allItems = [];

  // Master RAW camera files
  for (const m of masterFiles) {
    const inPath = path.join(srcDir, m.file);
    const outName = `prev-${m.file}`;
    const outPath = path.join(previewDir, outName);

    if (!fs.existsSync(outPath) && fs.existsSync(inPath)) {
      await sharp(inPath)
        .rotate()
        .resize({ width: 900, withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true })
        .toFile(outPath);
    }

    allItems.push({
      id: m.file,
      file: m.file,
      sourceType: 'Master DSLR',
      category: m.category,
      desc: m.desc,
      preview: `/chennai-previews/${outName}`,
      isCrop: false,
      isDeployed: false
    });
  }

  // Crops
  for (const c of crops) {
    const inPath = path.join(srcDir, c.src);
    const outName = `prev-${c.id}.jpg`;
    const outPath = path.join(previewDir, outName);

    if (!fs.existsSync(outPath) && fs.existsSync(inPath)) {
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
      sourceType: 'VIP Crop',
      category: 'Crops',
      desc: c.desc,
      preview: `/chennai-previews/${outName}`,
      isCrop: true,
      isDeployed: false
    });
  }

  // Deployed moments
  for (const d of deployedMoments) {
    allItems.push({
      id: d.file,
      file: d.file,
      sourceType: 'Active Moment',
      category: 'Moments',
      desc: d.desc,
      preview: `/conclave-moments/chennai-2/${d.file}`,
      isCrop: false,
      isDeployed: true
    });
  }

  console.log(`Total ${allItems.length} images compiled for Chennai picker!`);

  // Build the complete interactive image picker UI
  const html = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ALLYSHIP++ | Chennai 2.0 Master Image Picker & Curator</title>
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
      box-shadow: 0 0 0 2px #C5A869, 0 10px 30px -5px rgba(197, 168, 105, 0.4);
    }
    .check-indicator {
      transition: all 0.2s ease;
    }
    .card.selected .check-indicator {
      background: #C5A869;
      border-color: #C5A869;
      color: #000;
    }
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
    #dropZone.drag-over {
      border-color: #C5A869;
      background: rgba(197, 168, 105, 0.12);
    }
  </style>
</head>
<body class="min-h-screen pb-48" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)" ondrop="handleDrop(event)">

  <!-- HIDDEN INPUTS FOR DIRECT FOLDER & FILE PICKING -->
  <input type="file" id="folderInput" webkitdirectory directory multiple class="hidden" accept="image/*" onchange="handleFileSelect(event)">
  <input type="file" id="filesInput" multiple class="hidden" accept="image/*" onchange="handleFileSelect(event)">

  <!-- TOP STICKY BAR -->
  <header class="sticky top-0 z-40 bg-surface/95 backdrop-blur-md border-b border-line px-4 sm:px-6 py-4 shadow-xl">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
      <div>
        <div class="flex items-center gap-3">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-accent/15 text-accent border border-accent/30">
            Interactive Image Picker
          </span>
          <h1 class="text-xl sm:text-2xl font-display font-extrabold tracking-tight text-white">
            Chennai 2.0 Photo Selector
          </h1>
          <span id="totalBadge" class="text-xs bg-surface-3 text-accent font-mono px-2.5 py-0.5 rounded-md font-bold">
            ${allItems.length} Photos Loaded
          </span>
        </div>
        <p class="text-xs text-gray-400 mt-1">
          Click on any photo card to pick/unpick. Select your 24 favorites. You can also pick whole folders from your computer!
        </p>
      </div>

      <!-- PICKER CONTROLS & COUNTER -->
      <div class="flex items-center gap-2.5 flex-wrap justify-between md:justify-end">
        <!-- COUNTER WITH TARGET -->
        <div class="bg-surface-2 border border-line rounded-xl px-4 py-2 flex items-center gap-2.5 shadow-sm">
          <span class="text-xs uppercase tracking-wider text-gray-400 font-semibold">Selected:</span>
          <span id="counter" class="text-xl font-bold font-mono text-accent">0</span>
          <span class="text-sm font-bold text-gray-500">/ 24</span>
        </div>

        <!-- OPEN FOLDER BUTTON -->
        <button onclick="document.getElementById('folderInput').click()" class="px-3.5 py-2.5 rounded-xl bg-surface-2 hover:bg-surface-3 border border-line hover:border-accent text-xs font-bold text-gray-200 transition-all flex items-center gap-2 cursor-pointer shadow-sm" title="Pick a folder of photos from your computer">
          <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>
          <span>📁 Pick Folder</span>
        </button>

        <!-- OPEN FILES BUTTON -->
        <button onclick="document.getElementById('filesInput').click()" class="px-3.5 py-2.5 rounded-xl bg-surface-2 hover:bg-surface-3 border border-line hover:border-accent text-xs font-bold text-gray-200 transition-all flex items-center gap-2 cursor-pointer shadow-sm" title="Pick multiple image files from your computer">
          <svg class="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          <span>🖼️ Pick Files</span>
        </button>

        <!-- COPY SELECTION FOR CHAT -->
        <button onclick="copySelection()" class="px-4 py-2.5 rounded-xl bg-accent hover:bg-accent-light text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-accent/25 flex items-center gap-2 cursor-pointer">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
          <span>Copy Selected for Chat</span>
        </button>

        <!-- CLEAR BUTTON -->
        <button onclick="clearAll()" class="px-3 py-2 rounded-xl bg-surface-2 hover:bg-surface-3 border border-line text-xs font-semibold text-gray-400 hover:text-white transition-all cursor-pointer">
          Clear
        </button>
      </div>
    </div>

    <!-- FILTER BUTTONS, SEARCH & COLUMN SWITCHER -->
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-3 pt-3 border-t border-line/60">
      <div class="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar flex-1">
        <button onclick="setFilter('all')" class="filter-btn active px-3 py-1.5 rounded-lg bg-accent text-black font-bold transition-all whitespace-nowrap" data-cat="all">All (${allItems.length})</button>
        <button onclick="setFilter('Master DSLR')" class="filter-btn px-3 py-1.5 rounded-lg bg-surface-2 text-gray-300 hover:text-white border border-line transition-all whitespace-nowrap" data-cat="Master DSLR">Master DSLR (23)</button>
        <button onclick="setFilter('VIP Crop')" class="filter-btn px-3 py-1.5 rounded-lg bg-surface-2 text-gray-300 hover:text-white border border-line transition-all whitespace-nowrap" data-cat="VIP Crop">VIP Crops (8)</button>
        <button onclick="setFilter('Active Moment')" class="filter-btn px-3 py-1.5 rounded-lg bg-surface-2 text-gray-300 hover:text-white border border-line transition-all whitespace-nowrap" data-cat="Active Moment">Active Moments (24)</button>
        <button onclick="setFilter('Plenary')" class="filter-btn px-3 py-1.5 rounded-lg bg-surface-2 text-gray-300 hover:text-white border border-line transition-all whitespace-nowrap" data-cat="Plenary">Plenary</button>
        <button onclick="setFilter('Awards')" class="filter-btn px-3 py-1.5 rounded-lg bg-surface-2 text-gray-300 hover:text-white border border-line transition-all whitespace-nowrap" data-cat="Awards">Awards</button>
        <button onclick="setFilter('Fireside')" class="filter-btn px-3 py-1.5 rounded-lg bg-surface-2 text-gray-300 hover:text-white border border-line transition-all whitespace-nowrap" data-cat="Fireside">Olympic Fireside</button>
        <button onclick="setFilter('Keynote')" class="filter-btn px-3 py-1.5 rounded-lg bg-surface-2 text-gray-300 hover:text-white border border-line transition-all whitespace-nowrap" data-cat="Keynote">Keynote</button>
        <button onclick="setFilter('Panel')" class="filter-btn px-3 py-1.5 rounded-lg bg-surface-2 text-gray-300 hover:text-white border border-line transition-all whitespace-nowrap" data-cat="Panel">Panel</button>
        <button onclick="setFilter('Foyer')" class="filter-btn px-3 py-1.5 rounded-lg bg-surface-2 text-gray-300 hover:text-white border border-line transition-all whitespace-nowrap" data-cat="Foyer">Foyer</button>
        <button id="customFilterBtn" onclick="setFilter('Custom')" class="filter-btn hidden px-3 py-1.5 rounded-lg bg-surface-2 text-amber-300 hover:text-white border border-amber-500/30 transition-all whitespace-nowrap" data-cat="Custom">My Uploads</button>
      </div>

      <!-- SEARCH & VIEW MODE -->
      <div class="flex items-center gap-2">
        <div class="relative">
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Search filenames or keywords..." 
            oninput="handleSearch(this.value)"
            class="bg-surface-2 border border-line rounded-lg px-3 py-1.5 pl-8 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-accent w-48 sm:w-60"
          />
          <svg class="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>

        <div class="flex items-center bg-surface-2 border border-line rounded-lg p-0.5 text-xs">
          <button onclick="setCols(3)" id="btnCol3" class="px-2.5 py-1 rounded text-gray-400 hover:text-white font-mono" title="3 Columns (Large)">3</button>
          <button onclick="setCols(4)" id="btnCol4" class="px-2.5 py-1 rounded bg-accent text-black font-bold font-mono" title="4 Columns (Standard)">4</button>
          <button onclick="setCols(6)" id="btnCol6" class="px-2.5 py-1 rounded text-gray-400 hover:text-white font-mono" title="6 Columns (Compact)">6</button>
        </div>
      </div>
    </div>
  </header>

  <!-- DRAG & DROP NOTICE / FOLDER PICKER HERO -->
  <div class="max-w-7xl mx-auto px-4 sm:px-6 pt-5">
    <div id="dropZone" class="border-2 border-dashed border-line/90 rounded-2xl p-5 bg-surface-2/40 text-center transition-all flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
      <div class="flex items-center gap-4 text-left">
        <div class="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/30 text-accent flex items-center justify-center shrink-0 shadow-inner">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
        </div>
        <div>
          <h2 class="text-sm font-bold text-white flex items-center gap-2">
            Local Image & Folder Picker
            <span class="text-[10px] bg-accent/20 text-accent border border-accent/30 px-2 py-0.5 rounded font-mono font-bold">Fast & Offline</span>
          </h2>
          <p class="text-xs text-gray-400 mt-0.5">
            You can pick any folder from your computer or drag-and-drop photos here. All images render instantly in the grid below alongside the master repository photos!
          </p>
        </div>
      </div>
      <div class="flex items-center gap-2.5 shrink-0">
        <button onclick="document.getElementById('folderInput').click()" class="px-4 py-2 rounded-xl bg-accent hover:bg-accent-light text-black text-xs font-extrabold uppercase tracking-wider transition-all shadow-md shadow-accent/20 cursor-pointer">
          📁 Select Folder from PC
        </button>
        <button onclick="document.getElementById('filesInput').click()" class="px-3.5 py-2 rounded-xl bg-surface-3 hover:bg-surface-2 text-xs font-bold text-gray-200 border border-line transition-all cursor-pointer">
          🖼️ Browse Files
        </button>
      </div>
    </div>
  </div>

  <!-- GALLERY GRID OF PHOTOS -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
    <div id="galleryGrid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
      ${allItems.map((it, idx) => `
        <div 
          class="card group relative bg-surface-2 border border-line rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-gray-500 hover:shadow-xl"
          data-id="${it.id}"
          data-source="${it.sourceType}"
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
            
            <!-- PICK CHECKBOX / BADGE OVERLAY -->
            <div class="check-slot absolute top-2.5 left-2.5">
              <div class="badge-number shadow-lg hidden">1</div>
              <div class="unpicked-slot w-6 h-6 rounded-full border-2 border-white/60 bg-black/40 backdrop-blur-md flex items-center justify-center group-hover:border-accent"></div>
            </div>

            <!-- SOURCE TAG -->
            <span class="absolute top-2.5 right-2.5 text-[9px] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 ${it.sourceType === 'VIP Crop' ? 'text-amber-400 border-amber-400/30' : it.sourceType === 'Active Moment' ? 'text-emerald-400 border-emerald-400/30' : 'text-gray-300'}">
              ${it.sourceType}
            </span>

            <!-- ZOOM BUTTON -->
            <button 
              type="button" 
              onclick="event.stopPropagation(); openLightbox('${it.preview}', '${it.desc}', '${it.file}')"
              class="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-full bg-black/75 hover:bg-accent text-white hover:text-black flex items-center justify-center backdrop-blur-md transition-all shadow-md opacity-85 hover:opacity-100 cursor-pointer"
              title="Inspect full screen"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/></svg>
            </button>
          </div>

          <!-- INFO -->
          <div class="p-3 space-y-1">
            <div class="flex items-center justify-between">
              <span class="font-mono text-xs font-bold text-accent truncate" title="${it.file}">${it.file}</span>
              <span class="text-[9px] font-bold uppercase tracking-wider text-gray-400 bg-surface-3 px-1.5 py-0.5 rounded shrink-0">${it.category}</span>
            </div>
            <p class="text-xs text-gray-300 leading-snug line-clamp-2">
              ${it.desc}
            </p>
          </div>
        </div>
      `).join('')}
    </div>
  </main>

  <!-- FIXED BOTTOM SELECTION TRAY -->
  <aside id="bottomTray" class="fixed bottom-0 inset-x-0 z-40 bg-surface/95 backdrop-blur-xl border-t border-line py-3 px-4 sm:px-6 transition-all shadow-2xl">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
      <div class="flex items-center gap-3 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0" id="selectedThumbnails">
        <span class="text-xs font-bold text-gray-300 whitespace-nowrap">Your Picks (<span id="trayCounter" class="text-accent font-mono font-bold">0</span>/24):</span>
        <div id="thumbStrip" class="flex items-center gap-2 overflow-x-auto py-1">
          <span class="text-xs text-gray-500 italic">No photos selected. Click any card to add it to your 24 moments.</span>
        </div>
      </div>
      <div class="flex items-center gap-2.5 shrink-0">
        <button onclick="downloadJson()" class="px-3.5 py-2.5 rounded-xl bg-surface-2 hover:bg-surface-3 border border-line text-xs font-semibold text-gray-300 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer">
          <svg class="w-3.5 h-3.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          Export JSON
        </button>
        <button onclick="copySelection()" class="px-4 py-2.5 rounded-xl bg-accent hover:bg-accent-light text-black font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-accent/25 flex items-center gap-1.5 cursor-pointer">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
          Copy 24 for Chat
        </button>
      </div>
    </div>
  </aside>

  <!-- LIGHTBOX MODAL WITH ARROWS -->
  <div id="lightbox" class="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 hidden" onclick="closeLightbox()">
    <div class="relative max-w-5xl max-h-[90vh] flex flex-col items-center" onclick="event.stopPropagation()">
      <!-- PREV / NEXT BUTTONS -->
      <button onclick="prevLightbox(event)" class="absolute -left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface-2 hover:bg-accent text-white hover:text-black flex items-center justify-center border border-line transition-all cursor-pointer" title="Previous (Left Arrow)">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button onclick="nextLightbox(event)" class="absolute -right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface-2 hover:bg-accent text-white hover:text-black flex items-center justify-center border border-line transition-all cursor-pointer" title="Next (Right Arrow)">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </button>

      <img id="lightboxImg" src="" alt="" class="max-w-full max-h-[75vh] object-contain rounded-xl border border-line shadow-2xl" />
      <div class="mt-3 text-center">
        <span id="lightboxFile" class="font-mono text-xs text-accent font-bold"></span>
        <p id="lightboxCaption" class="text-xs text-gray-300 mt-1 max-w-2xl font-medium"></p>
      </div>
      <button onclick="closeLightbox()" class="mt-3 px-4 py-1.5 rounded-lg bg-surface-2 hover:bg-surface-3 text-xs text-gray-400 uppercase tracking-wider font-bold border border-line cursor-pointer">
        Close (Esc)
      </button>
    </div>
  </div>

  <!-- FLOATING NOTIFICATION TOAST -->
  <div id="toast" class="fixed bottom-24 right-6 z-50 bg-accent text-black px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-2xl transition-all duration-300 transform translate-y-20 opacity-0 flex items-center gap-2">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
    <span id="toastMsg">Copied!</span>
  </div>

  <script>
    let itemsData = ${JSON.stringify(allItems)};
    let selectedIds = [];
    let currentFilter = 'all';
    let searchQuery = '';
    let currentLightboxIdx = 0;

    // Load persisted selection if any
    try {
      const saved = localStorage.getItem('chennai_selected_ids');
      if (saved) {
        selectedIds = JSON.parse(saved);
      }
    } catch(e) {}

    updateUI();

    function toggleSelect(id) {
      const idx = selectedIds.indexOf(id);
      if (idx > -1) {
        selectedIds.splice(idx, 1);
      } else {
        if (selectedIds.length >= 24) {
          showToast("Target reached (24 photos selected). Unselect one first to replace it.");
          return;
        }
        selectedIds.push(id);
      }
      try {
        localStorage.setItem('chennai_selected_ids', JSON.stringify(selectedIds));
      } catch(e) {}
      updateUI();
    }

    function updateUI() {
      document.getElementById('counter').innerText = selectedIds.length;
      document.getElementById('trayCounter').innerText = selectedIds.length;
      document.getElementById('totalBadge').innerText = itemsData.length + ' Photos Loaded';

      // Update card states
      document.querySelectorAll('.card').forEach(card => {
        const id = card.getAttribute('data-id');
        const pos = selectedIds.indexOf(id);
        const badgeNumber = card.querySelector('.badge-number');
        const unpickedSlot = card.querySelector('.unpicked-slot');

        if (pos > -1) {
          card.classList.add('selected');
          if (badgeNumber) {
            badgeNumber.classList.remove('hidden');
            badgeNumber.innerText = pos + 1;
          }
          if (unpickedSlot) unpickedSlot.classList.add('hidden');
        } else {
          card.classList.remove('selected');
          if (badgeNumber) badgeNumber.classList.add('hidden');
          if (unpickedSlot) unpickedSlot.classList.remove('hidden');
        }
      });

      // Update bottom thumbnail strip
      const strip = document.getElementById('thumbStrip');
      if (selectedIds.length === 0) {
        strip.innerHTML = '<span class="text-xs text-gray-500 italic">No photos selected. Click any card to add it to your 24 moments.</span>';
      } else {
        strip.innerHTML = selectedIds.map((id, idx) => {
          const item = itemsData.find(it => it.id === id);
          if (!item) return '';
          return \`
            <div class="relative group shrink-0 cursor-pointer" onclick="toggleSelect('\${id}')" title="Click to remove \${item.file}">
              <img src="\${item.preview}" class="w-12 h-9 object-cover rounded-md border border-accent shadow" />
              <span class="absolute -top-1.5 -left-1.5 w-4 h-4 rounded-full bg-accent text-black font-bold text-[9px] flex items-center justify-center font-mono">\${idx + 1}</span>
            </div>
          \`;
        }).join('');
      }
    }

    function clearAll() {
      selectedIds = [];
      try { localStorage.removeItem('chennai_selected_ids'); } catch(e) {}
      updateUI();
      showToast("Cleared all selections");
    }

    function setFilter(cat) {
      currentFilter = cat;
      document.querySelectorAll('.filter-btn').forEach(b => {
        if (b.getAttribute('data-cat') === cat) {
          b.classList.remove('bg-surface-2', 'text-gray-300', 'text-amber-300');
          b.classList.add('bg-accent', 'text-black', 'font-bold');
        } else {
          b.classList.remove('bg-accent', 'text-black', 'font-bold');
          b.classList.add('bg-surface-2', b.getAttribute('data-cat') === 'Custom' ? 'text-amber-300' : 'text-gray-300');
        }
      });
      applyFilters();
    }

    function handleSearch(val) {
      searchQuery = (val || '').toLowerCase().trim();
      applyFilters();
    }

    function applyFilters() {
      document.querySelectorAll('.card').forEach(card => {
        const cat = card.getAttribute('data-cat');
        const source = card.getAttribute('data-source');
        const id = card.getAttribute('data-id').toLowerCase();
        const text = card.innerText.toLowerCase();

        const matchCat = (currentFilter === 'all') || (cat === currentFilter) || (source === currentFilter);
        const matchSearch = !searchQuery || id.includes(searchQuery) || text.includes(searchQuery);

        if (matchCat && matchSearch) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    function setCols(n) {
      const g = document.getElementById('galleryGrid');
      g.className = 'grid gap-4 sm:gap-5 ';
      if (n === 3) {
        g.className += 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';
      } else if (n === 6) {
        g.className += 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6';
      } else {
        g.className += 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
      }

      ['btnCol3', 'btnCol4', 'btnCol6'].forEach(btnId => {
        const b = document.getElementById(btnId);
        if (btnId === 'btnCol' + n) {
          b.className = 'px-2.5 py-1 rounded bg-accent text-black font-bold font-mono';
        } else {
          b.className = 'px-2.5 py-1 rounded text-gray-400 hover:text-white font-mono';
        }
      });
    }

    function copySelection() {
      const selectedItems = selectedIds.map(id => itemsData.find(it => it.id === id)).filter(Boolean);
      if (selectedItems.length === 0) {
        showToast("Please select at least 1 photo first!");
        return;
      }
      const text = "Here are my selected Chennai 2.0 photos (" + selectedItems.length + " total):\\n" + 
        selectedItems.map((it, idx) => (idx + 1) + ". " + it.id + " - " + it.desc).join("\\n");

      navigator.clipboard.writeText(text).then(() => {
        showToast("Copied " + selectedItems.length + " selected photos to clipboard!");
      });
    }

    function downloadJson() {
      const selectedItems = selectedIds.map(id => itemsData.find(it => it.id === id)).filter(Boolean);
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(selectedItems, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "chennai_selected_photos.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast("Downloaded selection JSON");
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

    // LIGHTBOX WITH NEXT/PREV
    function openLightbox(src, caption, file) {
      currentLightboxIdx = itemsData.findIndex(it => it.preview === src);
      if (currentLightboxIdx === -1) currentLightboxIdx = 0;
      updateLightbox();
      document.getElementById('lightbox').classList.remove('hidden');
    }

    function updateLightbox() {
      const item = itemsData[currentLightboxIdx];
      if (!item) return;
      document.getElementById('lightboxImg').src = item.preview;
      document.getElementById('lightboxFile').innerText = item.file;
      document.getElementById('lightboxCaption').innerText = item.desc;
    }

    function prevLightbox(e) {
      if (e) e.stopPropagation();
      currentLightboxIdx = (currentLightboxIdx - 1 + itemsData.length) % itemsData.length;
      updateLightbox();
    }

    function nextLightbox(e) {
      if (e) e.stopPropagation();
      currentLightboxIdx = (currentLightboxIdx + 1) % itemsData.length;
      updateLightbox();
    }

    function closeLightbox() {
      document.getElementById('lightbox').classList.add('hidden');
    }

    document.addEventListener('keydown', (e) => {
      const lb = document.getElementById('lightbox');
      if (!lb.classList.contains('hidden')) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevLightbox();
        if (e.key === 'ArrowRight') nextLightbox();
      }
    });

    // LOCAL FOLDER & DRAG/DROP HANDLING
    function handleDragOver(e) {
      e.preventDefault();
      document.getElementById('dropZone').classList.add('drag-over');
    }

    function handleDragLeave(e) {
      e.preventDefault();
      document.getElementById('dropZone').classList.remove('drag-over');
    }

    function handleDrop(e) {
      e.preventDefault();
      document.getElementById('dropZone').classList.remove('drag-over');
      if (e.dataTransfer && e.dataTransfer.files) {
        processFiles(Array.from(e.dataTransfer.files));
      }
    }

    function handleFileSelect(e) {
      if (e.target.files) {
        processFiles(Array.from(e.target.files));
      }
    }

    function processFiles(files) {
      const imgFiles = files.filter(f => /\\.(jpe?g|png|webp|avif)$/i.test(f.name));
      if (imgFiles.length === 0) {
        showToast("No image files found in selection.");
        return;
      }

      document.getElementById('customFilterBtn').classList.remove('hidden');

      imgFiles.forEach(file => {
        const id = file.name;
        if (itemsData.some(it => it.id === id)) return;

        const objUrl = URL.createObjectURL(file);
        const newItem = {
          id: id,
          file: file.name,
          sourceType: 'Custom Upload',
          category: 'Custom',
          desc: 'Local File: ' + file.name + ' (' + (file.size / 1024 / 1024).toFixed(1) + ' MB)',
          preview: objUrl,
          isCrop: false,
          isDeployed: false
        };

        itemsData.unshift(newItem); // put at top

        const grid = document.getElementById('galleryGrid');
        const card = document.createElement('div');
        card.className = "card group relative bg-surface-2 border border-line rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-gray-500 hover:shadow-xl";
        card.setAttribute('data-id', newItem.id);
        card.setAttribute('data-source', newItem.sourceType);
        card.setAttribute('data-cat', newItem.category);
        card.onclick = () => toggleSelect(newItem.id);

        card.innerHTML = \`
          <div class="relative aspect-[4/3] w-full bg-surface-3 overflow-hidden">
            <img src="\${newItem.preview}" alt="\${newItem.desc}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="check-slot absolute top-2.5 left-2.5">
              <div class="badge-number shadow-lg hidden">1</div>
              <div class="unpicked-slot w-6 h-6 rounded-full border-2 border-white/60 bg-black/40 backdrop-blur-md flex items-center justify-center group-hover:border-accent"></div>
            </div>
            <span class="absolute top-2.5 right-2.5 text-[9px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-md backdrop-blur-md">
              Custom Upload
            </span>
            <button type="button" onclick="event.stopPropagation(); openLightbox('\${newItem.preview}', '\${newItem.desc}', '\${newItem.file}')" class="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-full bg-black/75 hover:bg-accent text-white hover:text-black flex items-center justify-center backdrop-blur-md transition-all shadow-md opacity-85 hover:opacity-100 cursor-pointer" title="Inspect full screen">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/></svg>
            </button>
          </div>
          <div class="p-3 space-y-1">
            <div class="flex items-center justify-between">
              <span class="font-mono text-xs font-bold text-accent truncate" title="\${newItem.file}">\${newItem.file}</span>
            </div>
            <p class="text-xs text-gray-300 leading-snug line-clamp-2">
              \${newItem.desc}
            </p>
          </div>
        \`;
        grid.prepend(card);
      });

      showToast("Loaded " + imgFiles.length + " photos into picker!");
      updateUI();
    }
  </script>
</body>
</html>`;

  fs.writeFileSync('public/chennai-selector.html', html);
  console.log('Successfully written updated public/chennai-selector.html with all 55 photos and image picker!');
}

main().catch(console.error);
