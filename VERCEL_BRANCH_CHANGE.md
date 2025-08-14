# How to Change Vercel Branch from Main to Master

## KEEP YOUR LIVE KEYS - Change Branch Only

### Method 1: Vercel Dashboard (Recommended)
1. Go to your Vercel dashboard
2. Click on your project
3. Go to **Settings** tab
4. Click **Git** in the left sidebar
5. Under "Production Branch", change from `main` to `master`
6. Click **Save**
7. Go to **Deployments** tab
8. Click **Redeploy** on the latest deployment

### Method 2: Project Settings
1. In Vercel dashboard → Your Project
2. **Settings** → **General**
3. Scroll to "Git Repository"
4. Click **Edit** next to branch name
5. Change to `master`
6. Save and redeploy

### Method 3: Reconnect Repository
**ONLY if above methods don't work:**
1. Settings → Git → Disconnect Repository
2. Reconnect and select `master` branch
3. **IMPORTANT**: Your environment variables will be preserved

## Verify Environment Variables Stay
After changing branch, check:
- Settings → Environment Variables
- Your STRIPE keys should still be there
- If missing, re-add them

## Force New Deployment
After branch change:
1. Go to Deployments tab
2. Click "Redeploy" on latest
3. Or push a small change to master branch

Your live keys and settings will remain intact!