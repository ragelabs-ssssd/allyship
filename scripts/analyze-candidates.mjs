import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = 'public/conclave-moments/hyderabad-2/candidates';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg')).sort();

async function analyze() {
  const stats = [];
  for (const f of files) {
    const full = path.join(dir, f);
    const img = sharp(full);
    const s = await img.stats();
    // compute mean brightness across channels
    const mean = (s.channels[0].mean + s.channels[1].mean + s.channels[2].mean) / 3;
    // compute standard deviation (contrast/detail)
    const stdev = (s.channels[0].stdev + s.channels[1].stdev + s.channels[2].stdev) / 3;
    stats.push({
      file: f,
      mean: mean.toFixed(1),
      stdev: stdev.toFixed(1),
      isDarkOrGraphic: mean < 50 || stdev < 30
    });
  }

  console.log('--- Bright, detailed real footage candidates ---');
  stats.filter(s => !s.isDarkOrGraphic && parseFloat(s.mean) > 75).forEach(s => {
    console.log(`${s.file}: brightness = ${s.mean}, contrast/detail = ${s.stdev}`);
  });
}

analyze().catch(console.error);

