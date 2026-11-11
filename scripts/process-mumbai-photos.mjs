import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const srcDir = 'public/photo-resources/mumbai-1';
const outDir = 'public/conclave-moments/mumbai-1';

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Ensure photo-resources/mumbai-1 also has copies
const backupDir = 'photo-resources/mumbai-1';
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

const photoFiles = fs.readdirSync(srcDir).filter(f => /\.(jpe?g|png)$/i.test(f)).sort();

console.log(`Found ${photoFiles.length} Mumbai photos:`);
photoFiles.forEach(f => console.log(' -', f));

async function processMumbaiPhotos() {
  for (let i = 0; i < photoFiles.length; i++) {
    const file = photoFiles[i];
    const inPath = path.join(srcDir, file);
    const outName = `mumbai-1-0${i + 1}.jpg`;
    const outPath = path.join(outDir, outName);
    
    // Copy to backup dir as well
    fs.copyFileSync(inPath, path.join(backupDir, file));

    const meta = await sharp(inPath).metadata();
    await sharp(inPath)
      .resize({ width: 1600, withoutEnlargement: true })
      .jpeg({ quality: 82, progressive: true })
      .toFile(outPath);

    const stat = fs.statSync(outPath);
    console.log(`Processed ${outName} (${meta.width}x${meta.height}) -> ${(stat.size / 1024).toFixed(0)} KB`);
  }
}

processMumbaiPhotos().catch(err => {
  console.error(err);
  process.exit(1);
});

