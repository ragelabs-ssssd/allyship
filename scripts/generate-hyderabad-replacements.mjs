import fs from 'fs';
import path from 'path';

const candDir = 'public/conclave-moments/hyderabad-2/candidates';
const files = fs.readdirSync(candDir).filter(f => f.endsWith('.jpg')).sort();

const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Hyderabad 2.0 Candidates for Replacement</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-950 text-white p-6">
  <div class="max-w-7xl mx-auto">
    <h1 class="text-2xl font-bold mb-2">Candidates from Hyderabad 2.0 Video</h1>
    <p class="text-sm text-gray-400 mb-6">Select 4 to replace the 4 intro slides (#1, #2, #3, #4)</p>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      ${files.map(f => `
        <div class="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden p-2">
          <img src="/conclave-moments/hyderabad-2/candidates/${f}" class="w-full aspect-video object-cover rounded" />
          <p class="font-mono text-xs text-amber-400 font-bold mt-2">${f}</p>
        </div>
      `).join('')}
    </div>
  </div>
</body>
</html>`;

fs.writeFileSync('public/hyderabad-replacements.html', html);
console.log('Written public/hyderabad-replacements.html');

