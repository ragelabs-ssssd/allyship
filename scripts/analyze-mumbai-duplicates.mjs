import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = 'photo-resources/mumbai-1';
const files = fs.readdirSync(dir).filter(f => !f.startsWith('.'));

async function getHash(filePath) {
  const { data } = await sharp(filePath)
    .resize(16, 16, { fit: 'fill' })
    .grayscale()
    .raw()
    .toBuffer({ resolveWithObject: true });
  return data;
}

function compareBuffers(bufA, bufB) {
  let diff = 0;
  for (let i = 0; i < bufA.length; i++) {
    diff += Math.abs(bufA[i] - bufB[i]);
  }
  return diff / bufA.length;
}

async function analyze() {
  const hashes = [];
  for (let i = 0; i < files.length; i++) {
    const h = await getHash(path.join(dir, files[i]));
    hashes.push({ index: i + 1, file: files[i], hash: h });
  }

  const allPairs = [];
  for (let i = 0; i < hashes.length; i++) {
    for (let j = i + 1; j < hashes.length; j++) {
      const avgDiff = compareBuffers(hashes[i].hash, hashes[j].hash);
      allPairs.push({
        pair: `#${hashes[i].index} & #${hashes[j].index}`,
        file1: hashes[i].file,
        file2: hashes[j].file,
        diff: avgDiff
      });
    }
  }

  allPairs.sort((a, b) => a.diff - b.diff);

  console.log('Top 15 most similar pairs (lowest difference):');
  allPairs.slice(0, 15).forEach(p => {
    console.log(`${p.pair}: diff = ${p.diff.toFixed(2)} | ${p.file1} <=> ${p.file2}`);
  });
}

analyze().catch(console.error);
