const fs = require('fs');
const path = require('path');

const files = [
  'privacy-policy',
  'terms-conditions',
  'shipping-policy',
  'cancellation-refund'
];

files.forEach(filename => {
  const filepath = path.join(__dirname, 'src', 'routes', `${filename}.tsx`);
  let content = fs.readFileSync(filepath, 'utf8');
  
  // Replace imports
  content = content.replace(
    /import { createFileRoute, Link } from "@tanstack\/react-router";/g,
    'import { Link } from "react-router-dom";'
  );
  content = content.replace(
    /import { createFileRoute } from "@tanstack\/react-router";/g,
    ''
  );
  
  // Remove Route export and head config
  content = content.replace(
    /export const Route = createFileRoute\([^)]+\)\(\{[\s\S]*?\}\);/g,
    ''
  );
  
  // Convert function to default export
  const funcName = filename.split('-').map((w, i) => 
    i === 0 ? w : w[0].toUpperCase() + w.slice(1)
  ).join('') + 'Page';
  
  content = content.replace(
    new RegExp(`function ${funcName}\\(\\)`, 'g'),
    `export default function ${funcName}()`
  );
  
  fs.writeFileSync(filepath, content);
  console.log(`✓ Converted ${filename}.tsx`);
});

console.log('All policy pages converted!');
