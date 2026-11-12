import fs from 'fs';
import path from 'path';

function scan(dir, depth = 0) {
  if (depth > 2) return [];
  let res = [];
  try {
    const ents = fs.readdirSync(dir, { withFileTypes: true });
    for (const ent of ents) {
      if (ent.name === 'node_modules' || ent.name === '.git' || ent.name === '.next') continue;
      const full = path.join(dir, ent.name);
      try {
        const stat = fs.statSync(full);
        res.push({
          name: ent.name,
          full,
          isDir: ent.isDirectory(),
          mtime: stat.mtime,
          size: stat.size
        });
        if (ent.isDirectory() && depth < 2) {
          res = res.concat(scan(full, depth + 1));
        }
      } catch (e) {}
    }
  } catch (e) {}
  return res;
}

const dirs = [
  'c:/Users/USER/Downloads',
  'c:/Users/USER/OneDrive/Desktop',
  'public/photo-resources'
];

let all = [];
for (const d of dirs) {
  all = all.concat(scan(d));
}

// Filter to items modified in the last 24 hours
const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
const recent = all
  .filter(x => x.mtime > oneDayAgo)
  .sort((a, b) => b.mtime - a.mtime);

console.log('Recent items (last 24h):');
for (const r of recent.slice(0, 30)) {
  console.log(`${r.mtime.toISOString()} | ${r.isDir ? '[DIR]' : '[FILE]'} ${r.name} (${(r.size / 1024 / 1024).toFixed(1)} MB) -> ${r.full}`);
}

