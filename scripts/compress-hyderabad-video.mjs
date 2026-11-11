import { spawnSync } from 'child_process';
import ffmpeg from 'ffmpeg-static';
import fs from 'fs';
import path from 'path';

const inputVideo = 'C:/Users/USER/Downloads/soa-allyship++_hyd-v0.3.mp4';
const outputDir = path.resolve('public/discover');
const outputVideo = path.join(outputDir, 'hyderabad-1-conclave-film.mp4');

console.log('Using ffmpeg binary:', ffmpeg);
console.log('Source video:', inputVideo);
console.log('Destination:', outputVideo);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Convert 4K 50fps to web-standard 1080p 30fps with high fidelity stereo audio
const args = [
  '-y',
  '-i', inputVideo,
  '-vf', 'scale=1920:1080',
  '-r', '30',
  '-c:v', 'libx264',
  '-crf', '24',
  '-preset', 'fast',
  '-c:a', 'aac',
  '-b:a', '192k',
  '-movflags', '+faststart',
  outputVideo
];

console.log('Starting compression of master Hyderabad 4K film with audio...');
const start = Date.now();
const result = spawnSync(ffmpeg, args, { stdio: 'inherit' });

if (result.error) {
  console.error('Compression failed:', result.error);
  process.exit(1);
}

const elapsed = ((Date.now() - start) / 1000).toFixed(1);
const inStat = fs.statSync(inputVideo);
const outStat = fs.statSync(outputVideo);

console.log(`\nCompression completed in ${elapsed}s!`);
console.log(`Source 4K: ${(inStat.size / 1024 / 1024).toFixed(2)} MB`);
console.log(`Web 1080p with audio: ${(outStat.size / 1024 / 1024).toFixed(2)} MB`);

