import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const srcDir = 'public/photo-resources/chennai-2';
const outDir = 'public/conclave-moments/chennai-2';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 24 High-Definition, Distinct Curated Moments from Chennai 2.0 Conclave
// Strictly stage, plenary, audience, awards, Olympic fireside, keynote, and panel deliberations.
// Zero repetitive bouquets, zero foyer check-ins, zero casual standing shots.
export const chennai24Moments = [
  // 1. The Grand Conclave Plenary Ensemble (Full wide angle of 50+ leaders under Allyship wall)
  {
    src: 'CON01670.JPG',
    caption: 'Grand Conclave Plenary Ensemble: Corporate Leaders & SOA Academic Leadership at Chennai',
    pos: '50% 35%',
    crop: null
  },
  // 2. Prestigious Awarding & Ceremonial Shawl (Wide stage presentation)
  {
    src: 'CON01524.JPG',
    caption: 'Ceremonial Shawl & Commemorative Conclave Memento Presentation to Olympic Sprint Coach Premanand J.',
    pos: '50% 25%',
    crop: null
  },
  // 3. Central Dais VIP Leadership & Chief Luminaries (High-res VIP dais focus from CON01670)
  {
    src: 'CON01670.JPG',
    caption: 'Dignitaries & Chief Luminaries on Dais at the ALLYSHIP 2.0 Chennai Chapter',
    pos: '50% 30%',
    crop: { left: 1200, top: 750, width: 4600, height: 3200 }
  },
  // 4. Close Awarding Honor: Vice-Chancellor Presenting Memento to Premanand J. (Tight executive crop from CON01524)
  {
    src: 'CON01524.JPG',
    caption: 'Vice-Chancellor Prof. Pradipta Kumar Nanda Presenting Conclave Honor to Coach Premanand J.',
    pos: '50% 20%',
    crop: { left: 1600, top: 1200, width: 3800, height: 2600 }
  },
  // 5. Plenary Assembly — Left Wing Corporate Leadership Delegation (High-res crop from CON01670)
  {
    src: 'CON01670.JPG',
    caption: 'Executive Industry Delegation & Senior Enterprise Partners on the Conclave Dais',
    pos: '50% 30%',
    crop: { left: 200, top: 1100, width: 3400, height: 2400 }
  },
  // 6. Plenary Assembly — Right Wing Technology & HR Delegation (High-res crop from CON01670)
  {
    src: 'CON01670.JPG',
    caption: 'Corporate HR Heads & Technology Leaders Standing in Solidarity with ALLYSHIP 2.0',
    pos: '50% 30%',
    crop: { left: 3400, top: 1100, width: 3400, height: 2400 }
  },
  // 7. Olympic Fireside Plenary View — Coach Premanand J. in conversation with delegates in foreground
  {
    src: 'CON01502.JPG',
    caption: 'Plenary Fireside Session: Paris Olympics National Sprint Coach Premanand J. on Dais',
    pos: '50% 30%',
    crop: null
  },
  // 8. Focused Olympic Fireside Dialogue on Dais (Stage-centric crop from CON01502)
  {
    src: 'CON01502.JPG',
    caption: 'Fireside Perspective: Sports Rigor and High-Performance Team Leadership in Corporate India',
    pos: '50% 25%',
    crop: { left: 2400, top: 900, width: 3200, height: 2200 }
  },
  // 9. Coach Premanand J. Addressing the Assembly (Upright medium portrait)
  {
    src: 'CON01501.JPG',
    caption: 'Fireside Dialogue: Olympic Lessons in Mentorship, Resilience & Sustained Performance',
    pos: '50% 20%',
    crop: null
  },
  // 10. Paris Olympics Coach Premanand J. Welcome Honor on Dais
  {
    src: 'CON01493.JPG',
    caption: 'Inaugural Felicitation & Welcome Honor for Olympic Luminary Premanand J.',
    pos: '50% 25%',
    crop: null
  },
  // 11. Vice-Chancellor Keynote Address — Prof. (Dr.) Pradipta Kumar Nanda at Podium
  {
    src: 'CON01466.JPG',
    caption: 'Vice-Chancellor Prof. (Dr.) Pradipta Kumar Nanda Delivering the Presidential Conclave Address',
    pos: '50% 20%',
    crop: null
  },
  // 12. Vice-Chancellor Presidential Dialogue — Close Focus on Institutional Vision
  {
    src: 'CON01466.JPG',
    caption: 'VC Prof. Pradipta Kumar Nanda Outlining the Industry-Academia Covenant for ALLYSHIP 2.0',
    pos: '50% 15%',
    crop: { left: 800, top: 400, width: 2800, height: 2100 }
  },
  // 13. Strategic Industry-Academia Panel — Complete Stage Perspective
  {
    src: 'CON01567.JPG',
    caption: 'Strategic Panel Deliberations: Practicing Allyship as a Core Corporate Responsibility',
    pos: '50% 30%',
    crop: null
  },
  // 14. Panel Deliberation — Active Leadership Discourse (Wide angle from CON01587)
  {
    src: 'CON01587.JPG',
    caption: 'Enterprise Leaders Examining Cross-Disciplinary Talent Development & Innovation',
    pos: '50% 30%',
    crop: null
  },
  // 15. Executive Panel Moderator Archana Grover Leading the Dialogue (Upright portrait)
  {
    src: 'CON01569.JPG',
    caption: 'Executive Panel Moderator Archana Grover Framing Critical Themes on Strategic Industry Mentorship',
    pos: '50% 20%',
    crop: null
  },
  // 16. Industry Capability Heads in Deep Deliberation (Medium shot from CON01603)
  {
    src: 'CON01603.JPG',
    caption: 'Industry Capability Heads Deliberating Collaborative Curriculum Architectures',
    pos: '50% 30%',
    crop: null
  },
  // 17. Panel Interaction — Cross-Perspective Elevated View (from CON01609)
  {
    src: 'CON01609.JPG',
    caption: 'Interactive Conclave Discourse: Audience Reflections & Panel Exchange',
    pos: '50% 30%',
    crop: null
  },
  // 18. Panel Discussion — Executive Insights & Discussion Focus (Medium crop from CON01567)
  {
    src: 'CON01567.JPG',
    caption: 'Corporate HR & Tech Leaders Analyzing Next-Generation Engineering Readiness',
    pos: '50% 25%',
    crop: { left: 1600, top: 1200, width: 4400, height: 3000 }
  },
  // 19. Panel Discussion — Focused Deliberations on Campus-to-Corporate Transition (Crop from CON01587)
  {
    src: 'CON01587.JPG',
    caption: 'Enterprise Panelists Exchanging Practical Frameworks for Institutional Co-Design',
    pos: '50% 25%',
    crop: { left: 1200, top: 1400, width: 4600, height: 3000 }
  },
  // 20. Panel Discussion — Cross-Disciplinary Dialogue & Synergies (Crop from CON01603)
  {
    src: 'CON01603.JPG',
    caption: 'Senior Engineering Leaders on Synergizing Academic Research with Industry Needs',
    pos: '50% 25%',
    crop: { left: 1400, top: 1300, width: 4200, height: 2800 }
  },
  // 21. Complete Conclave Panelist & Dais Leadership Lineup on Stage (CON01638)
  {
    src: 'CON01638.JPG',
    caption: 'Distinguished Panelists & Conclave Dais Dignitaries Acknowledging the Assembly',
    pos: '50% 30%',
    crop: null
  },
  // 22. Panelist Dais Lineup — Focus on Corporate Panelists (Center crop from CON01638)
  {
    src: 'CON01638.JPG',
    caption: 'Industry Panel Delegation United on the Conclave Stage at Hyatt Regency Chennai',
    pos: '50% 25%',
    crop: { left: 1200, top: 1000, width: 4600, height: 3100 }
  },
  // 23. Dais Leadership & SOA Delegation (Left-center crop from CON01638)
  {
    src: 'CON01638.JPG',
    caption: 'SOA Academic Leadership & Guest Luminaries Commemorating the Chennai Chapter',
    pos: '50% 25%',
    crop: { left: 600, top: 1100, width: 3800, height: 2700 }
  },
  // 24. Conclave Grand Finale Assembly (Wide perspective from CON01670)
  {
    src: 'CON01670.JPG',
    caption: 'National Commitment to Excellence: Full Plenary Delegation at ALLYSHIP 2.0 Chennai',
    pos: '50% 30%',
    crop: { left: 600, top: 500, width: 5800, height: 3800 }
  }
];

async function main() {
  console.log(`Processing ${chennai24Moments.length} curated Chennai 2.0 photos...`);

  // Clean out previous files
  const existing = fs.readdirSync(outDir).filter(f => f.startsWith('chennai-2-'));
  for (const f of existing) {
    fs.unlinkSync(path.join(outDir, f));
  }

  for (let i = 0; i < chennai24Moments.length; i++) {
    const item = chennai24Moments[i];
    const outName = `chennai-2-${String(i + 1).padStart(2, '0')}.jpg`;
    const inPath = path.join(srcDir, item.src);
    const outPath = path.join(outDir, outName);

    let pipeline = sharp(inPath).rotate(); // auto-orient based on EXIF

    if (item.crop) {
      pipeline = pipeline.extract(item.crop);
    }

    await pipeline
      .resize({ width: 1600, withoutEnlargement: true })
      .jpeg({ quality: 86, progressive: true, mozjpeg: true })
      .toFile(outPath);

    const stat = fs.statSync(outPath);
    console.log(`Slot ${String(i + 1).padStart(2, '0')}: ${item.src} -> ${outName} (${(stat.size / 1024).toFixed(0)} KB)`);
  }

  console.log('Successfully generated all 24 curated Chennai 2.0 moments!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
