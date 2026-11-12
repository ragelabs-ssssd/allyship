import { spawnSync } from 'child_process';
import ffmpeg from 'ffmpeg-static';
import fs from 'fs';
import path from 'path';

const outDir = 'public/conclave-moments/hyderabad-2';

// 4 New high-impact replacements for 01, 02, 03, 04 from actual event scenes:
// 1. Lamp lighting / Stage invocation
// 2. Dignitaries & academic leadership at podium
// 3. Wide audience plenary with crowded tables
// 4. Distinguished panel & corporate roundtable in action
const newMoments = [
  {
    id: 'hyderabad-2-01',
    timestamp: '14.5',
    caption: 'Ceremonial Lamp Lighting & Conclave Inaugural Blessing',
    objectPosition: '50% 25%',
  },
  {
    id: 'hyderabad-2-02',
    timestamp: '21.0',
    caption: 'Leadership Conclave Keynote Address from the Dais',
    objectPosition: '50% 20%',
  },
  {
    id: 'hyderabad-2-03',
    timestamp: '29.5',
    caption: 'Grand Plenary Assembly: Enterprise Leaders & University Delegates',
    objectPosition: '50% 30%',
  },
  {
    id: 'hyderabad-2-04',
    timestamp: '45.0',
    caption: 'Executive Panel Dialogue on Cross-Disciplinary Talent Architectures',
    objectPosition: '50% 25%',
  },
];

for (const m of newMoments) {
  const outFile = path.join(outDir, `${m.id}.jpg`);
  spawnSync(ffmpeg, [
    '-ss', m.timestamp,
    '-i', 'photo-resources/hyderabad-2/SOA Allyship++ 2.O Hyd-02.mp4',
    '-frames:v', '1',
    '-q:v', '2',
    '-y',
    outFile
  ]);
  const st = fs.statSync(outFile);
  console.log(`Replaced ${m.id}.jpg at ${m.timestamp}s (${(st.size / 1024).toFixed(0)} KB)`);
}
