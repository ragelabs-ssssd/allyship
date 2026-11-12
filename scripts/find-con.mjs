import fs from 'fs';
import path from 'path';

function findConFiles(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir, { withFileTypes: true });
    for (const ent of list) {
      if (ent.name === 'node_modules' || ent.name === '.git') continue;
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        results = results.concat(findConFiles(full));
      } else if (ent.isFile() && /CON\d+/i.test(ent.name)) {
        results.push({ name: ent.name, full, size: fs.statSync(full).size });
      }
    }
  } catch (e) {}
  return results;
}

const found = findConFiles('c:/Users/USER/Downloads');
console.log('Found CON files:', found);

