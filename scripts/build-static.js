import { writeFileSync, mkdirSync, cpSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

// Create a simple index.html that loads the client-side app
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thiru Annamalai Natural Foods — Handmade Laddus, Bars & Natural Snacks</title>
  <meta name="description" content="Premium handmade laddus, peanut bars, gingelly bars, and kamarkat from Madurai, Tamil Nadu. Natural ingredients, no preservatives, made with traditional recipes.">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600&display=swap">
  <style>
    body { margin: 0; font-family: Inter, system-ui, sans-serif; }
    #root { min-height: 100vh; }
    .loading {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      font-size: 1.25rem;
      color: #64748b;
    }
  </style>
</head>
<body>
  <div id="root">
    <div class="loading">Loading...</div>
  </div>
  <noscript>
    <div style="padding: 2rem; text-align: center;">
      <h1>JavaScript Required</h1>
      <p>This application requires JavaScript to run. Please enable JavaScript in your browser.</p>
    </div>
  </noscript>
  <script>
    // This is a placeholder - TanStack Start requires SSR
    // For Vercel deployment, this app needs to be migrated to a different framework
    // or deployed to Cloudflare Workers/Pages
    document.getElementById('root').innerHTML = \`
      <div style="padding: 2rem; max-width: 800px; margin: 0 auto; font-family: system-ui;">
        <h1 style="color: #e11d48;">Deployment Configuration Error</h1>
        <p>This application is built with <strong>TanStack Start</strong>, which requires server-side rendering (SSR) and is configured for <strong>Cloudflare Workers/Pages</strong>.</p>
        <h2>To fix this:</h2>
        <ol>
          <li><strong>Deploy to Cloudflare Pages</strong> (Recommended):
            <pre style="background: #f1f5f9; padding: 1rem; border-radius: 0.5rem; overflow-x: auto;">npm install -g wrangler
npm run build
wrangler pages deploy dist/client</pre>
          </li>
          <li>Or connect your GitHub repository to Cloudflare Pages dashboard</li>
        </ol>
        <p>See <code>DEPLOYMENT.md</code> in the repository for detailed instructions.</p>
        <hr style="margin: 2rem 0;">
        <p><strong>For developers:</strong> This app uses <code>@cloudflare/vite-plugin</code> and <code>@tanstack/react-start</code> which are not compatible with Vercel's static hosting or serverless functions without significant reconfiguration.</p>
      </div>
    \`;
  </script>
</body>
</html>`;

// Ensure dist/client exists
const distClient = join(rootDir, 'dist', 'client');
if (!existsSync(distClient)) {
  mkdirSync(distClient, { recursive: true });
}

// Write index.html
writeFileSync(join(distClient, 'index.html'), html);

console.log('✓ Created static index.html for Vercel');
console.log('⚠ Note: This is a placeholder. For full functionality, deploy to Cloudflare Pages.');
