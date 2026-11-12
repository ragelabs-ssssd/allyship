import fs from 'fs';

const c = fs.readFileSync('public/hyderabad-2-selector.html', 'utf8');
console.log('File length:', c.length);
const matches = c.match(/src="([^"]+)"/g);
console.log('Src attributes:', matches ? matches.length : 0);
if (matches) console.log(matches.slice(0, 10));

