import fs from 'fs';
import path from 'path';

const dir = 'c:/Users/USER/Downloads';
const files = fs.readdirSync(dir).map(f => {
  const p = path.join(dir, f);
  const s = fs.statSync(p);
  return { name: f, isDir: s.isDirectory(), mtime: s.mtime, size: s.size };
}).sort((a, b) => b.mtime - a.mtime);

console.log('Downloads files sorted by newest:');
for (const f of files.slice(0, 25)) {
  console.log(`${f.mtime.toISOString()} | ${f.isDir ? '[DIR]' : '[FILE]'} ${f.name} (${(f.size/1024/1024).toFixed(2)} MB)`);
}

