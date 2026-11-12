import fs from 'fs';

const files = fs.readdirSync('public/conclave-moments/hyderabad-2/candidates');
const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Hyderabad 2.0 Candidates</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-black text-white p-6">
  <h1 class="text-xl font-bold mb-4">Sampled Candidate Frames (${files.length})</h1>
  <div class="grid grid-cols-4 gap-4">
    ${files.map(f => `
      <div class="bg-gray-900 p-2 rounded border border-gray-800">
        <img src="/conclave-moments/hyderabad-2/candidates/${f}" class="w-full aspect-video object-cover rounded mb-1" />
        <p class="text-xs font-mono text-amber-400 font-bold">${f}</p>
      </div>
    `).join('')}
  </div>
</body>
</html>`;

fs.writeFileSync('public/hyderabad-2-candidates.html', html);
console.log(`Written public/hyderabad-2-candidates.html with ${files.length} frames`);

