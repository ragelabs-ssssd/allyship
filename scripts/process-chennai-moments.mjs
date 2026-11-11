import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const srcDir = 'public/photo-resources/chennai-2';
const outDir = 'public/conclave-moments/chennai-2';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 24 Curated Moments tailored to user requirements:
// Upper rows: Crowded audience assembly, VIP dais ensembles, prestigious awarding & memento felicitations.
// Followed by Olympic fireside dialogue, leadership keynotes, panel deliberations, and executive foyer networking.
export const chennaiMoments = [
  // 1. The Grand Conclave Plenary Ensemble - 50+ corporate leaders & SOA leadership under the Allyship 2.0 digital wall
  {
    src: 'CON01670.JPG',
    caption: 'Grand Conclave Plenary Ensemble: Corporate Leaders & SOA Academic Leadership at Chennai',
    pos: '50% 35%',
    type: 'full'
  },
  // 2. Audience Perspective - Seated delegates at banquet tables capturing the live dais proceedings
  {
    src: 'CON01643.JPG',
    caption: 'Plenary Assembly & Audience Perspective: Corporate Delegates Engaged at Hyatt Regency Chennai',
    pos: '50% 30%',
    type: 'full'
  },
  // 3. Awarding & Traditional Shawl Honor - Olympic Sprint Coach Premanand J. felicitated with ceremonial shawl & memento
  {
    src: 'CON01524.JPG',
    caption: 'Ceremonial Shawl & Commemorative Conclave Memento Presentation to Olympic Sprint Coach Premanand J.',
    pos: '50% 25%',
    type: 'full'
  },
  // 4. Central Dais Leadership & Guest Luminaries Ensemble (High-res VIP dais focus)
  {
    src: 'CON01670.JPG',
    caption: 'Dignitaries & Chief Luminaries on Dais at the ALLYSHIP 2.0 Chennai Chapter',
    pos: '50% 30%',
    type: 'vip-crop'
  },
  // 5. Corporate Partner Dais Felicitation - Floral tribute & institutional honor
  {
    src: 'CON01547.JPG',
    caption: 'Corporate Partner Felicitation & Floral Honors Presented by Conclave Leadership',
    pos: '50% 25%',
    type: 'full'
  },
  // 6. Senior Industry Partner Felicitation on Stage
  {
    src: 'CON01459.JPG',
    caption: 'Academic Leadership Presenting Commemorative Honors to Corporate Partner',
    pos: '50% 25%',
    type: 'full'
  },
  // 7. Distinguished Executive Felicitation & Dais Recognition
  {
    src: 'CON01552.JPG',
    caption: 'Industry Leadership Felicitation & Strategic Partnership Commemoration',
    pos: '50% 25%',
    type: 'full'
  },
  // 8. Welcoming Paris Olympics National Sprint Coach Premanand J. to Dais
  {
    src: 'CON01493.JPG',
    caption: 'Inaugural Felicitation & Welcome Honor for Olympic Luminary Premanand J.',
    pos: '50% 25%',
    type: 'full'
  },
  // 9. Olympic Fireside Plenary View - Coach Premanand J. in dialogue with delegates in foreground
  {
    src: 'CON01502.JPG',
    caption: 'Plenary Fireside Session: Paris Olympics National Sprint Coach Premanand J. on Dais',
    pos: '50% 30%',
    type: 'full'
  },
  // 10. Close Fireside Exchange on Athletic Rigor & Corporate Resilience
  {
    src: 'CON01501.JPG',
    caption: 'Fireside Dialogue: Olympic Lessons in Mentorship, Resilience & Sustained Performance',
    pos: '50% 20%',
    type: 'full'
  },
  // 11. Vice-Chancellor Keynote Address - Prof. (Dr.) Pradipta Kumar Nanda on University-Enterprise Covenant
  {
    src: 'CON01466.JPG',
    caption: 'Vice-Chancellor Prof. (Dr.) Pradipta Kumar Nanda Delivering the Presidential Conclave Address',
    pos: '50% 20%',
    type: 'full'
  },
  // 12. Opening Leadership Address at the Conclave Dais Podium
  {
    src: 'CON01481.JPG',
    caption: 'Inaugural Leadership Address on Sovereign Innovation & Industry-Academia Symbiosis',
    pos: '50% 20%',
    type: 'full'
  },
  // 13. Strategic Industry-Academia Panel Deliberations
  {
    src: 'CON01567.JPG',
    caption: 'Strategic Panel Deliberations: Practicing Allyship as a Core Corporate Responsibility',
    pos: '50% 30%',
    type: 'full'
  },
  // 14. Corporate Thought Leaders in Dynamic Deliberation
  {
    src: 'CON01587.JPG',
    caption: 'Enterprise Leaders Examining Cross-Disciplinary Talent Development & Innovation',
    pos: '50% 30%',
    type: 'full'
  },
  // 15. Panel Moderator Archana Grover Guiding the Executive Dialogue
  {
    src: 'CON01569.JPG',
    caption: 'Executive Panel Moderator Framing Critical Themes on Strategic Industry Mentorship',
    pos: '50% 20%',
    type: 'full'
  },
  // 16. Corporate HR Leader Sharing Actionable Insights on Talent Readiness
  {
    src: 'CON01596.JPG',
    caption: 'Corporate Leadership Perspectives on Bridging the Engineering Capability Gap',
    pos: '50% 25%',
    type: 'full'
  },
  // 17. Cross-Disciplinary Panel Deliberation on Future Tech & Industry Alignment
  {
    src: 'CON01603.JPG',
    caption: 'Industry Capability Heads Deliberating Collaborative Curriculum Architectures',
    pos: '50% 30%',
    type: 'full'
  },
  // 18. Interactive Assembly Dialogue & Corporate Audience Q&A
  {
    src: 'CON01609.JPG',
    caption: 'Interactive Conclave Discourse: Audience Reflections & Panel Exchange',
    pos: '50% 30%',
    type: 'full'
  },
  // 19. Complete Conclave Panelist & Dais Leadership Delegation
  {
    src: 'CON01638.JPG',
    caption: 'Distinguished Panelists & Conclave Dais Dignitaries Acknowledging the Assembly',
    pos: '50% 30%',
    type: 'full'
  },
  // 20. Executive Foyer Accreditation & VIP Delegate Welcome
  {
    src: 'CON01362.JPG',
    caption: 'Executive Delegate Registration & Foyer Welcome at Hyatt Regency Chennai',
    pos: '50% 30%',
    type: 'full'
  },
  // 21. Corporate Delegate Credentialing & Conclave Kit Reception
  {
    src: 'CON01411.JPG',
    caption: 'Industry Delegates Receiving Conclave Accreditation Badges & Materials',
    pos: '50% 25%',
    type: 'full'
  },
  // 22. Foyer Camaraderie & Executive Peer Networking
  {
    src: 'CON01376.JPG',
    caption: 'Corporate Leaders & Capability Heads in Collaborative Networking Exchange',
    pos: '50% 25%',
    type: 'full'
  },
  // 23. Bilateral Academic-Enterprise Partnership Dialogue
  {
    src: 'CON01357.JPG',
    caption: 'Bilateral Leadership Exchange on Research Alliances & Corporate Mentorship',
    pos: '50% 25%',
    type: 'full'
  },
  // 24. Corporate Dignitary Commemoration at the Official Media Backdrop
  {
    src: 'CON01371.JPG',
    caption: 'Corporate Partner Commemoration at the ALLYSHIP 2.0 Chennai Media Wall',
    pos: '50% 20%',
    type: 'full'
  }
];

async function main() {
  console.log(`Processing ${chennaiMoments.length} Chennai 2.0 curated photos...`);

  for (let i = 0; i < chennaiMoments.length; i++) {
    const item = chennaiMoments[i];
    const outName = `chennai-2-${String(i + 1).padStart(2, '0')}.jpg`;
    const inPath = path.join(srcDir, item.src);
    const outPath = path.join(outDir, outName);

    let pipeline = sharp(inPath).rotate(); // auto-orient based on EXIF

    if (item.type === 'vip-crop') {
      // Focus on central dais leaders in the grand group shot CON01670 (width: 7008, height: 4672)
      // Crop central region: x: 1200, y: 700, width: 4600, height: 3200
      pipeline = pipeline.extract({ left: 1200, top: 750, width: 4600, height: 3200 });
    }

    await pipeline
      .resize({ width: 1600, withoutEnlargement: true })
      .jpeg({ quality: 86, progressive: true, mozjpeg: true })
      .toFile(outPath);

    const stat = fs.statSync(outPath);
    console.log(`Slot ${String(i + 1).padStart(2, '0')}: ${item.src} -> ${outName} (${(stat.size / 1024).toFixed(0)} KB)`);
  }

  console.log('Successfully processed all 24 Chennai 2.0 moments!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
