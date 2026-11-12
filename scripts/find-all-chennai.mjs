import fs from 'fs';
import path from 'path';

const roots = [
  'c:/Users/USER/Downloads',
  'c:/Users/USER/OneDrive/Desktop',
  'c:/Users/USER/OneDrive',
  'c:/Users/USER/Pictures',
  'c:/Users/USER/Desktop'
];

function findRecentOrName(dir, depth = 0) {
  if (depth > 3) return [];
  let res = [];
  try {
    const list = fs.readdirSync(dir, { withFileTypes: true });
    for (const ent of list) {
      if (ent.name === 'node_modules' || ent.name === '.git' || ent.name === '.next' || ent.name === 'AppData') continue;
      const full = path.join(dir, ent.name);
      const isMatch = /chennai|con\d+|drive-download/i.test(ent.name);
      
      let stat;
      try { stat = fs.statSync(full); } catch (e) { continue; }
      
      const isRecent = stat.mtime > new Date(Date.now() - 48 * 60 * 60 * 1000);

      if (isMatch || (isRecent && ent.isDirectory())) {
        res.push({
          name: ent.name,
          full,
          isDir: ent.isDirectory(),
          mtime: stat.mtime,
          size: stat.size
        });
      }

      if (ent.isDirectory() && depth < 3) {
        res = res.concat(findRecentOrName(full, depth + 1));
      }
    }
  } catch (e) {}
  return res;
}

let found = [];
for (const r of roots) {
  try {
    if (fs.existsSync(r)) {
      found = found.concat(findRecentOrName(r));
    }
  } catch (e) {}
}

console.log(`Found ${found.length} matches:`);
for (const f of found) {
  console.log(`${f.isDir ? '[DIR]' : '[FILE]'} ${f.name} (${(f.size/1024/1024).toFixed(1)}MB, ${f.mtime.toISOString()}) -> ${f.full}`);
}

