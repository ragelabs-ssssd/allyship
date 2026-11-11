import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const srcDir = 'public/photo-resources/chennai-2';
const outDir = 'public/conclave-moments/chennai-2';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 16 High-Impact Curated Moments (strictly crowded hall, awards, fireside, keynotes, and panel deliberations)
// Zero repetitive dais bouquet shots, zero foyer/registration desk shots.
export const chennaiMoments = [
  // 1. The Grand Conclave Plenary Ensemble
  {
    src: 'CON01670.JPG',
    caption: 'Grand Conclave Plenary Ensemble: Corporate Leaders & SOA Academic Leadership at Chennai',
    pos: '50% 35%',
    type: 'full'
  },
  // 2. Audience Perspective & Plenary Hall Assembly
  {
    src: 'CON01643.JPG',
    caption: 'Plenary Assembly & Audience Perspective: Corporate Delegates Engaged at Hyatt Regency Chennai',
    pos: '50% 30%',
    type: 'full'
  },
  // 3. Awarding & Traditional Shawl Honor to Olympic Sprint Coach Premanand J.
  {
    src: 'CON01524.JPG',
    caption: 'Ceremonial Shawl & Commemorative Conclave Memento Presentation to Olympic Sprint Coach Premanand J.',
    pos: '50% 25%',
    type: 'full'
  },
  // 4. Central Dais Leadership & Guest Luminaries Ensemble (VIP crop)
  {
    src: 'CON01670.JPG',
    caption: 'Dignitaries & Chief Luminaries on Dais at the ALLYSHIP 2.0 Chennai Chapter',
    pos: '50% 30%',
    type: 'vip-crop'
  },
  // 5. Paris Olympics National Sprint Coach Premanand J. Welcome Honor
  {
    src: 'CON01493.JPG',
    caption: 'Inaugural Felicitation & Welcome Honor for Olympic Luminary Premanand J.',
    pos: '50% 25%',
    type: 'full'
  },
  // 6. Plenary Fireside Session with Seated Audience Foreground
  {
    src: 'CON01502.JPG',
    caption: 'Plenary Fireside Session: Paris Olympics National Sprint Coach Premanand J. on Dais',
    pos: '50% 30%',
    type: 'full'
  },
  // 7. Fireside Dialogue on Mentorship, Resilience & Sustained Performance
  {
    src: 'CON01501.JPG',
    caption: 'Fireside Dialogue: Olympic Lessons in Mentorship, Resilience & Sustained Performance',
    pos: '50% 20%',
    type: 'full'
  },
  // 8. Vice-Chancellor Keynote Address - Prof. (Dr.) Pradipta Kumar Nanda
  {
    src: 'CON01466.JPG',
    caption: 'Vice-Chancellor Prof. (Dr.) Pradipta Kumar Nanda Delivering the Presidential Conclave Address',
    pos: '50% 20%',
    type: 'full'
  },
  // 9. Inaugural Leadership Address on Dais Podium
  {
    src: 'CON01481.JPG',
    caption: 'Inaugural Leadership Address on Sovereign Innovation & Industry-Academia Symbiosis',
    pos: '50% 20%',
    type: 'full'
  },
  // 10. Strategic Panel Deliberations on Practicing Allyship
  {
    src: 'CON01567.JPG',
    caption: 'Strategic Panel Deliberations: Practicing Allyship as a Core Corporate Responsibility',
    pos: '50% 30%',
    type: 'full'
  },
  // 11. Enterprise Leaders Examining Cross-Disciplinary Talent Development
  {
    src: 'CON01587.JPG',
    caption: 'Enterprise Leaders Examining Cross-Disciplinary Talent Development & Innovation',
    pos: '50% 30%',
    type: 'full'
  },
  // 12. Executive Panel Moderator Archana Grover
  {
    src: 'CON01569.JPG',
    caption: 'Executive Panel Moderator Framing Critical Themes on Strategic Industry Mentorship',
    pos: '50% 20%',
    type: 'full'
  },
  // 13. Corporate Leadership Perspectives on Capability Gap
  {
    src: 'CON01596.JPG',
    caption: 'Corporate Leadership Perspectives on Bridging the Engineering Capability Gap',
    pos: '50% 25%',
    type: 'full'
  },
  // 14. Industry Capability Heads Deliberating Collaborative Curriculum Architectures
  {
    src: 'CON01603.JPG',
    caption: 'Industry Capability Heads Deliberating Collaborative Curriculum Architectures',
    pos: '50% 30%',
    type: 'full'
  },
  // 15. Interactive Conclave Discourse & Audience Reflections
  {
    src: 'CON01609.JPG',
    caption: 'Interactive Conclave Discourse: Audience Reflections & Panel Exchange',
    pos: '50% 30%',
    type: 'full'
  },
  // 16. Distinguished Panelists & Conclave Dais Dignitaries Lineup
  {
    src: 'CON01638.JPG',
    caption: 'Distinguished Panelists & Conclave Dais Dignitaries Acknowledging the Assembly',
    pos: '50% 30%',
    type: 'full'
  }
];

async function main() {
  console.log(`Processing ${chennaiMoments.length} Chennai 2.0 curated photos...`);

  // Clean out previous files
  const existing = fs.readdirSync(outDir).filter(f => f.startsWith('chennai-2-'));
  for (const f of existing) {
    fs.unlinkSync(path.join(outDir, f));
  }

  for (let i = 0; i < chennaiMoments.length; i++) {
    const item = chennaiMoments[i];
    const outName = `chennai-2-${String(i + 1).padStart(2, '0')}.jpg`;
    const inPath = path.join(srcDir, item.src);
    const outPath = path.join(outDir, outName);

    let pipeline = sharp(inPath).rotate(); // auto-orient based on EXIF

    if (item.type === 'vip-crop') {
      pipeline = pipeline.extract({ left: 1200, top: 750, width: 4600, height: 3200 });
    }

    await pipeline
      .resize({ width: 1600, withoutEnlargement: true })
      .jpeg({ quality: 86, progressive: true, mozjpeg: true })
      .toFile(outPath);

    const stat = fs.statSync(outPath);
    console.log(`Slot ${String(i + 1).padStart(2, '0')}: ${item.src} -> ${outName} (${(stat.size / 1024).toFixed(0)} KB)`);
  }

  console.log('Successfully processed all 16 curated Chennai 2.0 moments!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
