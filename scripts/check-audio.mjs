import { execSync } from 'child_process';
import ffmpeg from 'ffmpeg-static';

const files = [
  'public/discover/bengaluru-1-conclave-film.mp4',
  'public/discover/soa-allyship-hyd-compressed.mp4',
  'public/discover/mumbai-1-conclave-film.mp4'
];

for (const f of files) {
  try {
    execSync(`"${ffmpeg}" -i "${f}"`, { stdio: 'pipe' });
  } catch (e) {
    const err = e.stderr?.toString() || '';
    const audio = err.split('\n').filter(l => l.includes('Audio:'));
    console.log(f, '-> Audio stream:', audio.length > 0 ? audio[0].trim() : 'NONE (NO AUDIO)');
  }
}

