# Deployment Guide

This project includes GitHub Actions workflows for automatic deployment to Vercel or GitHub Pages.

## Quick Start: Deploy to Vercel

### Step 1: Get Vercel Credentials

1. Sign up/login at [vercel.com](https://vercel.com)
2. Create a new project and connect your GitHub repository
3. In your Vercel project settings, find:
   - **Organization ID** (`VERCEL_ORG_ID`)
   - **Project ID** (`VERCEL_PROJECT_ID`)
4. Create a token at [vercel.com/account/tokens](https://vercel.com/account/tokens) for `VERCEL_TOKEN`

### Step 2: Configure GitHub Secrets

1. Go to your GitHub repository
2. Navigate to: **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add:
   - Name: `VERCEL_TOKEN` | Value: Your Vercel token
   - Name: `VERCEL_ORG_ID` | Value: Your organization ID
   - Name: `VERCEL_PROJECT_ID` | Value: Your project ID

### Step 3: Deploy

1. Push your code to the `main` branch:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. The GitHub Action will automatically:
   - Install dependencies
   - Run linter
   - Build the application
   - Deploy to Vercel

3. Check the Actions tab in GitHub to see the deployment progress

## Deploy to GitHub Pages

### Enable GitHub Pages

1. Go to your repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The `deploy-pages.yml` workflow will handle deployment

**Note:** GitHub Pages deployment requires static export. Some Next.js features may not work.

## Manual Deployment

If you prefer to deploy manually:

### Vercel CLI

```bash
npm i -g vercel
vercel
```

### Vercel Dashboard

1. Visit [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Deploy

## Troubleshooting

### GitHub Actions Fails

- Check that all secrets are correctly set
- Verify your Vercel project is connected to the repository
- Check the Actions tab for error details

### Build Errors

- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test
- Check for TypeScript or linting errors

