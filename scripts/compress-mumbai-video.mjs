import { spawnSync } from 'child_process';
import ffmpeg from 'ffmpeg-static';
import fs from 'fs';
import path from 'path';

const inputVideo = path.resolve('public/photo-resources/mumbai-1/linkedin-video (1).mp4');
const outputDir = path.resolve('public/discover');
const outputVideo = path.join(outputDir, 'mumbai-1-conclave-film.mp4');

console.log('Using ffmpeg binary:', ffmpeg);
console.log('Input:', inputVideo);
console.log('Output:', outputVideo);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Compress to high quality web MP4:
// 720p (1280x720), CRF 25, AAC 128k, faststart
const args = [
  '-y',
  '-i', inputVideo,
  '-c:v', 'libx264',
  '-crf', '25',
  '-preset', 'medium',
  '-c:a', 'aac',
  '-b:a', '128k',
  '-movflags', '+faststart',
  outputVideo
];

console.log('Compressing Mumbai Conclave Film to standard web format...');
const start = Date.now();
const result = spawnSync(ffmpeg, args, { stdio: 'inherit' });

if (result.error) {
  console.error('ffmpeg failed:', result.error);
  process.exit(1);
}

const elapsed = ((Date.now() - start) / 1000).toFixed(1);
const inStat = fs.statSync(inputVideo);
const outStat = fs.statSync(outputVideo);

console.log(`\nCompression completed in ${elapsed}s!`);
console.log(`Original: ${(inStat.size / 1024 / 1024).toFixed(2)} MB`);
console.log(`Compressed: ${(outStat.size / 1024 / 1024).toFixed(2)} MB`);
