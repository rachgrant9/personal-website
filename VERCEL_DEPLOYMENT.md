# Vercel Deployment Instructions

This portfolio website is configured for easy deployment to Vercel.

## Prerequisites
- A GitHub account with this repository
- A Vercel account (free tier available at https://vercel.com)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Sign up/Login to Vercel**
   - Go to https://vercel.com
   - Sign in with your GitHub account

2. **Import Your Repository**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find and select this repository
   - Click "Import"

3. **Configure Project**
   - Vercel will automatically detect Astro
   - Framework Preset: **Astro** (should be auto-detected)
   - Build Command: `npm run build` (default)
   - Output Directory: `dist` (default)
   - Install Command: `npm install` (default)

4. **Environment Variables** (if needed in the future)
   - You can add environment variables in the project settings
   - Currently, this project uses local config files

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at a URL like: `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
4. **For Production**
   ```bash
   vercel --prod
   ```

## Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Follow Vercel's instructions to configure DNS

## Continuous Deployment

- Vercel automatically sets up continuous deployment
- Every push to your `main` branch will trigger a new deployment
- Pull requests get preview deployments automatically

## Update Your Config

After deployment, update `config.txt` with:
- Your actual GitHub and LinkedIn URLs
- Your real email and location
- Update `cv.txt` with your actual experience and details

## Troubleshooting

If the build fails:
1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are listed in package.json
3. Test the build locally: `npm run build`
4. Check that all file paths are correct

## Support

- Vercel Documentation: https://vercel.com/docs
- Astro Documentation: https://docs.astro.build
