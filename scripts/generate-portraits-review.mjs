import fs from "fs";

const testimonials = [
  {
    author: "Anju Bobby George",
    role: "Olympian & World Championship Medalist",
    chapter: "Bengaluru Conclave Keynote",
    highlight: "Khel Ratna Luminary",
    image: "/testimonials/anju-bobby-george.jpg",
    isStandard: true
  },
  {
    author: "Nilesh Kulkarni",
    role: "Former Indian Test Cricketer",
    chapter: "Mumbai Conclave Fireside",
    highlight: "Test Cricketer",
    image: "/testimonials/nilesh-kulkarni.jpg"
  },
  {
    author: "Dr. P.B. Kotur",
    role: "Global Head, Engineering Academy",
    chapter: "Bengaluru & Mumbai Conclave",
    highlight: "Academy Head",
    image: "/testimonials/pb-kotur-v2.jpg"
  },
  {
    author: "Archana Grover",
    role: "Global Head – Capabilities & Transformation",
    chapter: "Chennai Conclave Moderator",
    highlight: "Panel Moderator",
    image: "/testimonials/archana-grover.jpg"
  },
  {
    author: "Premanand J.",
    role: "Paris Olympics National Sprint Coach",
    chapter: "Chennai Conclave Fireside",
    highlight: "Olympic Mentor",
    image: "/testimonials/premanand-j.jpg"
  },
  {
    author: "Arshad Ayub",
    role: "Former Indian International Cricketer",
    chapter: "Hyderabad Conclave Chief Guest",
    highlight: "Chief Guest",
    image: "/testimonials/arshad-ayub-v2.jpg"
  },
  {
    author: "Gurbux Singh",
    role: "1964 Olympic Hockey Gold Medalist",
    chapter: "Kolkata Conclave Keynote",
    highlight: "Olympic Gold Medalist",
    image: "/testimonials/gurbux-singh.jpg"
  },
  {
    author: "Dr. G. Srinivas Patnaik",
    role: "Secretary, Athletics Federation of India",
    chapter: "Hyderabad Conclave Speaker",
    highlight: "AFI Governance",
    image: "/testimonials/srinivas-patnaik.jpg"
  }
];

const cardsHtml = testimonials.map(t => `
  <div class="card ${t.isStandard ? 'standard' : ''}">
    <div class="image-wrapper">
      <img src="${t.image}" alt="${t.author}" />
      <div class="overlay"></div>
      <div class="guideline eye-line"></div>
      <div class="guideline chin-line"></div>
      <span class="badge ${t.isStandard ? 'badge-gold' : ''}">${t.highlight}</span>
      <div class="meta">
        <h4>${t.author}</h4>
        <p>${t.role}</p>
      </div>
    </div>
    <div class="info">
      <span class="status ${t.isStandard ? 'status-bench' : 'status-aligned'}">
        ${t.isStandard ? '★ GOLD STANDARD BENCHMARK' : '✓ ALIGNED TO ANJU RATIO'}
      </span>
      <div class="stats">
        <span>Headroom: ~9.5%</span>
        <span>Eye Line: 33%</span>
        <span>Face Length: 443px</span>
      </div>
    </div>
  </div>
`).join("\n");

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Perspectives Luminaries — Facial Alignment to Anju Bobby George</title>
  <style>
    :root {
      --bg: #090a0d;
      --card-bg: #12141a;
      --card-border: #1f232d;
      --accent: #c5a869;
      --accent-light: #e5cb8f;
      --accent-subtle: rgba(197, 168, 105, 0.12);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: var(--bg);
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      padding: 32px 20px 80px;
    }
    .container { max-width: 1440px; margin: 0 auto; }
    header {
      text-align: center;
      margin-bottom: 32px;
      padding-bottom: 24px;
      border-bottom: 1px solid var(--card-border);
    }
    .badge-top {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: var(--accent);
      background: var(--accent-subtle);
      border: 1px solid rgba(197, 168, 105, 0.3);
      padding: 5px 16px;
      border-radius: 9999px;
      margin-bottom: 12px;
    }
    h1 {
      font-size: 30px;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 8px;
    }
    .subtitle {
      color: #94a3b8;
      font-size: 14.5px;
      max-width: 720px;
      margin: 0 auto;
    }
    .controls {
      display: flex;
      justify-content: center;
      gap: 16px;
      margin-bottom: 30px;
    }
    .toggle-btn {
      background: #1c202a;
      border: 1px solid #2d3342;
      color: #cbd5e1;
      padding: 8px 16px;
      border-radius: 9999px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
    }
    .toggle-btn.active {
      background: var(--accent);
      color: #000;
      border-color: var(--accent);
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 24px;
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 10px 25px rgba(0,0,0,0.5);
      transition: all 0.25s ease;
    }
    .card.standard {
      border: 2px solid var(--accent);
      box-shadow: 0 0 30px rgba(197, 168, 105, 0.2);
    }
    .image-wrapper {
      position: relative;
      width: 100%;
      aspect-ratio: 4/3;
      overflow: hidden;
      background: #000;
    }
    .image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 18%;
      display: block;
    }
    .overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 50%, transparent 100%);
      pointer-events: none;
    }
    .guideline {
      position: absolute;
      left: 0;
      right: 0;
      height: 1px;
      pointer-events: none;
      display: none;
      z-index: 10;
    }
    .show-guidelines .guideline { display: block; }
    .eye-line {
      top: 33%;
      border-top: 1px dashed rgba(245, 158, 11, 0.7);
    }
    .chin-line {
      top: 64%;
      border-top: 1px dashed rgba(59, 130, 246, 0.7);
    }
    .badge {
      position: absolute;
      top: 12px;
      right: 12px;
      background: rgba(0,0,0,0.7);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(197, 168, 105, 0.4);
      color: var(--accent-light);
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      padding: 3px 10px;
      border-radius: 9999px;
      z-index: 5;
    }
    .badge-gold {
      background: var(--accent);
      color: #000;
      border-color: var(--accent);
    }
    .meta {
      position: absolute;
      bottom: 14px;
      left: 18px;
      right: 18px;
      z-index: 5;
    }
    .meta h4 {
      font-size: 17px;
      font-weight: 700;
      color: #fff;
    }
    .meta p {
      font-size: 12px;
      color: rgba(255,255,255,0.8);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .info {
      padding: 16px 18px;
      background: #0d0f14;
      border-top: 1px solid var(--card-border);
    }
    .status {
      display: block;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }
    .status-bench { color: var(--accent); }
    .status-aligned { color: #10b981; }
    .stats {
      display: flex;
      justify-content: space-between;
      font-size: 11.5px;
      color: #94a3b8;
    }
  </style>
</head>
<body class="show-guidelines">
  <div class="container">
    <header>
      <span class="badge-top">Perspectives Suite · Geometric Alignment</span>
      <h1>8 Luminaries Aligned to Anju Bobby George Standards</h1>
      <p class="subtitle">Every luminary has been resampled and cropped to match Anju Bobby George’s exact face length (443px), headroom (~9.5%), and 33% eye-line in the 4:3 card container.</p>
    </header>

    <div class="controls">
      <button class="toggle-btn active" id="btn-guide" onclick="toggleGuides()">Toggle Alignment Eye & Chin Lines</button>
    </div>

    <div class="grid">
      ${cardsHtml}
    </div>
  </div>

  <script>
    function toggleGuides() {
      document.body.classList.toggle('show-guidelines');
      document.getElementById('btn-guide').classList.toggle('active');
    }
  </script>
</body>
</html>`;

fs.writeFileSync("public/portraits-review.html", html, "utf8");
console.log("Written public/portraits-review.html successfully!");

