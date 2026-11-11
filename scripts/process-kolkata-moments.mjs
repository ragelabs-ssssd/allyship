import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// 24 curated non-duplicate photos representing all segments
const selectedNumbers = [
  12, // 01: Grand Conclave Hall & Stage Setup
  8,  // 02: Inaugural Keynote Deliberation & Audience Hall View
  10, // 03: Conclave Delegate Assembly in Attention
  13, // 04: Full Executive Panel Deliberations on Main Stage
  28, // 05: Women in Tech & Executive Leadership Panel
  14, // 06: Dignitaries & Panelists Congratulatory Stage Conclave
  44, // 07: Conclave Speaker in Action with Multimedia Presentation
  21, // 08: Keynote Address on Inclusive Corporate Ecosystems
  33, // 09: Industry Leader Keynote on Strategic Allyship
  43, // 10: Leadership Perspective from the Conclave Podium
  46, // 11: Interactive Stage Deliberations
  16, // 12: Ceremonial Shawl Felicitation for Senior Dignitary
  19, // 13: Corporate Excellence Memento Handover
  22, // 14: Traditional Honor & Felicitation of Conclave Guest
  23, // 15: Commemorative Conclave Citation Presentation
  24, // 16: Conclave Guest Felicitation by Academic & Industry Patrons
  38, // 17: Dais Dignitaries Presenting Commemorative Memento
  11, // 18: Executive VIP Portrait at Conclave Wall
  35, // 19: Distinguished Delegate Portrait at Conclave Backdrop
  3,  // 20: Cross-Disciplinary Corporate Delegation
  5,  // 21: Executive Roundtable Informal Discourse
  26, // 22: Women Leadership Delegation at Conclave Media Wall
  34, // 23: Corporate Partners & Alliances Network at Hyatt Wall
  36  // 24: Industry Delegates & Partners in Corporate Discussion
];

const srcDir = 'public/photo-resources/kolkata-1';
const outDir = 'public/conclave-moments/kolkata-1';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const allFiles = fs.readdirSync(srcDir).filter(f => /\.(jpe?g|png)$/i.test(f));

async function processPhotos() {
  console.log('Processing 24 curated Kolkata photos...');
  for (let i = 0; i < selectedNumbers.length; i++) {
    const num = selectedNumbers[i];
    const srcFile = allFiles[num - 1];
    const outName = 'kolkata-1-' + String(i + 1).padStart(2, '0') + '.jpg';
    const inPath = path.join(srcDir, srcFile);
    const outPath = path.join(outDir, outName);
    
    await sharp(inPath)
      .resize({ width: 1600, withoutEnlargement: true })
      .jpeg({ quality: 82, progressive: true })
      .toFile(outPath);
      
    const stat = fs.statSync(outPath);
    console.log(`[${i + 1}/24] #${num} (${srcFile}) -> ${outName} (${(stat.size / 1024).toFixed(0)} KB)`);
  }
  console.log('Successfully optimized and saved all 24 Kolkata Conclave Moments photos!');
}

processPhotos().catch(err => {
  console.error(err);
  process.exit(1);
});
