# Vercel 404 Error Fix

## Issue
Getting 404 errors when accessing URLs directly on Vercel deployment.

## Root Cause
Vercel needs proper configuration for Single Page Applications (SPAs) with client-side routing.

## Solutions

### 1. Update vercel.json (Primary Fix)
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "functions": {
    "api/create-checkout-session.js": {
      "runtime": "nodejs18.x"
    }
  },
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

### 2. Deployment Steps
1. Commit all changes to your repository
2. Push to main branch
3. Vercel will auto-deploy
4. Test all routes after deployment

### 3. Manual Vercel Settings
If still having issues, check Vercel dashboard:
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### 4. Environment Variables
Ensure these are set in Vercel dashboard:
- `VITE_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`

## Testing
After deployment, test these URLs:
- `/` (homepage)
- `/marketplace`
- `/products`
- `/dashboard`

All should work without 404 errors.