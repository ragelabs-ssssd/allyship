import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// User's 24 chosen photos curated so that Upper Rows feature the crowded & appreciation shots:
const kolkataCurated = [
  // ROW 1: Most Crowded & Grand Plenary / Stage Ensembles
  { num: 14, caption: "Distinguished Panelists & Conclave Dais Dignitaries Stage Ensemble", pos: "50% 30%" },
  { num: 8,  caption: "Inaugural Conclave Address & Plenary Hall Assembly", pos: "50% 25%" },
  { num: 10, caption: "Full Plenary Hall Delegation in Seated Attention", pos: "50% 30%" },
  { num: 3,  caption: "Cross-Disciplinary Enterprise Delegation at Conclave Wall", pos: "50% 25%" },

  // ROW 2: Traditional Honors & Dais Appreciation Felicitations
  { num: 37, caption: "Conclave Dais Dignitaries Presenting Floral Tribute & Honor on Stage", pos: "50% 25%" },
  { num: 16, caption: "Ceremonial Shawl & Uttariya Felicitation for Senior Dignitary", pos: "50% 25%" },
  { num: 19, caption: "Corporate Excellence & Academic Partnership Memento Handover", pos: "50% 25%" },
  { num: 32, caption: "Academic Leadership Presenting Commemorative Memento to Corporate Leader", pos: "50% 25%" },

  // ROW 3: More Stage Appreciations & Keynote Leadership
  { num: 20, caption: "Commemorative Stage Honor Presentation on Dais", pos: "50% 25%" },
  { num: 42, caption: "Distinguished Stage Felicitation Ceremony", pos: "50% 25%" },
  { num: 25, caption: "Conclave Citation & Institutional Recognition", pos: "50% 25%" },
  { num: 21, caption: "Executive Keynote Address on Cross-Disciplinary Alliances", pos: "50% 25%" },

  // ROW 4: Keynotes, Deliberations & Leadership Roundtables
  { num: 33, caption: "Industry Leader Keynote on Strategic Mentorship", pos: "50% 25%" },
  { num: 46, caption: "Interactive Panel Deliberations & Executive Exchange", pos: "50% 30%" },
  { num: 5,  caption: "Executive Roundtable: Informal Leadership Discourse in the Lounge", pos: "50% 25%" },
  { num: 26, caption: "Women Corporate Leaders & Delegation at the Conclave Wall", pos: "50% 25%" },

  // ROW 5: Executive Networking & Media Wall
  { num: 4,  caption: "Corporate Leadership Delegation at the Media Wall", pos: "50% 25%" },
  { num: 35, caption: "Distinguished Corporate Leader at the Conclave Photobooth", pos: "50% 20%" },
  { num: 36, caption: "Bilateral Corporate Collaboration & Delegate Discussion", pos: "50% 25%" },
  { num: 9,  caption: "Industry Partners in Collaborative Conclave Exchange", pos: "50% 25%" },

  // ROW 6: Bilateral Partnerships & Networking
  { num: 29, caption: "Senior Corporate Leadership Network at Hyatt Regency", pos: "50% 25%" },
  { num: 27, caption: "Industry Delegates & Corporate Alliances at the Backdrop", pos: "50% 25%" },
  { num: 6,  caption: "Corporate Leadership Partners at the Conclave Installation", pos: "50% 25%" },
  { num: 2,  caption: "Executive Delegates at the Conclave Installation Frame", pos: "50% 25%" }
];

const srcDir = 'public/photo-resources/kolkata-1';
const outDir = 'public/conclave-moments/kolkata-1';

const allFiles = fs.readdirSync(srcDir).filter(f => /\.(jpe?g|png)$/i.test(f));

async function main() {
  console.log(`Processing ${kolkataCurated.length} Kolkata photos with top-tier crowded/appreciation upper rows...`);
  for (let i = 0; i < kolkataCurated.length; i++) {
    const item = kolkataCurated[i];
    const srcFile = allFiles[item.num - 1];
    const outName = 'kolkata-1-' + String(i + 1).padStart(2, '0') + '.jpg';
    const inPath = path.join(srcDir, srcFile);
    const outPath = path.join(outDir, outName);
    
    await sharp(inPath)
      .resize({ width: 1600, withoutEnlargement: true })
      .jpeg({ quality: 82, progressive: true })
      .toFile(outPath);
      
    const stat = fs.statSync(outPath);
    console.log(`Slot ${String(i + 1).padStart(2, '0')}: #${String(item.num).padStart(2, '0')} (${srcFile}) -> ${outName} (${(stat.size / 1024).toFixed(0)} KB)`);
  }
  console.log('Done processing Kolkata photos!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
