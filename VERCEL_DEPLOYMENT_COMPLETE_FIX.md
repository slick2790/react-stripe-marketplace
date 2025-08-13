# COMPLETE VERCEL DEPLOYMENT FIX

## The Problem
Getting 404 errors on Vercel deployment for React Router routes.

## EXACT STEPS TO FIX:

### 1. Delete Current Vercel Project
- Go to vercel.com dashboard
- Find your project
- Settings → General → Delete Project
- Confirm deletion

### 2. Fresh Deployment
```bash
# Install Vercel CLI if not installed
npm i -g vercel

# In your project root
vercel --prod
```

### 3. Manual Project Settings (CRITICAL)
After deployment, go to Vercel dashboard:
- Project Settings → General
- Framework Preset: **Vite**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### 4. Environment Variables
If using any env vars, add them in:
- Project Settings → Environment Variables

### 5. Force Redeploy
```bash
vercel --prod --force
```

## Alternative: GitHub Integration
1. Push code to GitHub
2. Import project from GitHub in Vercel
3. Set Framework to **Vite**
4. Deploy

## If Still Getting 404s:
1. Check build logs in Vercel dashboard
2. Verify `dist` folder contains `index.html`
3. Check Network tab in browser dev tools
4. Try: Settings → Functions and Middleware → Edge Functions → Disable

## Test URLs After Deployment:
- `/` (should work)
- `/products` (should work, not 404)
- `/dashboard` (should work, not 404)

The updated vercel.json should now work correctly with explicit Vite configuration.