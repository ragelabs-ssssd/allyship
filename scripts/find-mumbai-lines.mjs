import fs from 'fs';
const page = fs.readFileSync('src/app/event/page.tsx', 'utf8');
const lines = page.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('"mumbai-1"')) {
    console.log(idx + 1, l.trim());
  }
});

