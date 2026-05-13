# Deployment Guide

This application is built with TanStack Start and is configured for **Cloudflare Workers/Pages** deployment.

## Cloudflare Pages Deployment (Recommended)

### Prerequisites
- Cloudflare account
- Wrangler CLI installed: `npm install -g wrangler`

### Steps

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to Cloudflare Pages**
   ```bash
   wrangler pages deploy dist/client
   ```

3. **Or deploy using Cloudflare Dashboard**
   - Go to Cloudflare Dashboard > Pages
   - Connect your Git repository
   - Set build command: `npm run build`
   - Set build output directory: `dist/client`
   - Set environment variable: `NODE_VERSION=20`

## Cloudflare Workers Deployment

```bash
wrangler deploy
```

## Important Notes

- This app uses Server-Side Rendering (SSR)
- The app is NOT compatible with static hosting platforms like Vercel, Netlify without additional configuration
- For Vercel deployment, you would need to switch to a different adapter (not currently configured)

## Local Development

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Troubleshooting 404 Errors

If you're seeing 404 errors on deployment:

1. **Check the deployment platform**: This app is configured for Cloudflare, not Vercel
2. **Verify build output**: Ensure `dist/server` and `dist/client` directories exist after build
3. **Check routing configuration**: The app uses TanStack Router with SSR
4. **Verify wrangler.jsonc**: Ensure the configuration points to the correct entry file

## Current Configuration

- **Framework**: TanStack Start (SSR)
- **Target Platform**: Cloudflare Workers
- **Entry Point**: `src/server.ts`
- **Build Output**: `dist/server` and `dist/client`
