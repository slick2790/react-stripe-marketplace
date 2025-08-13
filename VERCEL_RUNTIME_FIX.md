# VERCEL RUNTIME VERSION FIX

## The Problem
Vercel error: "runtimes must have a valid version"

## The Solution
Updated configurations to fix runtime version issues:

### 1. Fixed vercel.json
- Updated Node.js runtime from `nodejs18.x` to `nodejs20.x`
- Removed problematic build configurations
- Kept only essential Vite framework settings

### 2. Updated package.json
- Added `engines` field specifying Node.js >= 18.0.0
- This ensures Vercel uses a compatible Node.js version

## Deploy Steps:
1. Commit these changes:
   ```bash
   git add .
   git commit -m "Fix Vercel runtime version issues"
   git push origin main
   ```

2. In Vercel dashboard:
   - Go to your project settings
   - Under "General" → "Node.js Version"
   - Set to "20.x" (latest)
   - Redeploy

## Alternative Quick Fix:
If still having issues, try this minimal vercel.json:
```json
{
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

This should resolve the runtime version error!