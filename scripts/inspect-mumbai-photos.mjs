import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = 'photo-resources/mumbai-1';
const files = fs.readdirSync(dir).filter(f => !f.startsWith('.'));

async function inspect() {
  console.log(`Inspecting ${files.length} images in ${dir}...\n`);
  const details = [];

  for (const f of files) {
    const full = path.join(dir, f);
    const meta = await sharp(full).metadata();
    const st = fs.statSync(full);
    details.push({
      file: f,
      size: (st.size / 1024).toFixed(1) + ' KB',
      width: meta.width,
      height: meta.height,
      aspect: (meta.width / meta.height).toFixed(2),
      orientation: meta.orientation || 1
    });
  }

  console.table(details);
}

inspect().catch(console.error);

