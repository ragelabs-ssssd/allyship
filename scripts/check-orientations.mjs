import fs from 'fs';
import sharp from 'sharp';

const files = [
  'CON01357.JPG', 'CON01362.JPG', 'CON01371.JPG', 'CON01376.JPG', 'CON01411.JPG',
  'CON01459.JPG', 'CON01466.JPG', 'CON01481.JPG', 'CON01493.JPG', 'CON01501.JPG',
  'CON01502.JPG', 'CON01524.JPG', 'CON01547.JPG', 'CON01552.JPG', 'CON01567.JPG',
  'CON01569.JPG', 'CON01587.JPG', 'CON01596.JPG', 'CON01603.JPG', 'CON01609.JPG',
  'CON01638.JPG', 'CON01643.JPG', 'CON01670.JPG'
];

async function check() {
  for (const f of files) {
    const meta = await sharp(`public/photo-resources/chennai-2/${f}`).metadata();
    console.log(`${f}: ${meta.width}x${meta.height}, orientation=${meta.orientation}`);
  }
}

check();

