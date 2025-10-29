This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment

This project includes GitHub Actions workflows for automatic deployment.

### Option 1: Deploy to Vercel (Recommended)

The easiest way to deploy your Next.js app is using Vercel.

#### Automatic Deployment with GitHub Actions

1. **Set up Vercel project:**
   - Go to [Vercel](https://vercel.com) and create an account or sign in
   - Create a new project and connect it to your GitHub repository
   - After creating, you'll get `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID`

2. **Add GitHub Secrets:**
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `VERCEL_TOKEN`: Get from [Vercel Account Settings → Tokens](https://vercel.com/account/tokens)
     - `VERCEL_ORG_ID`: Found in your Vercel project settings
     - `VERCEL_PROJECT_ID`: Found in your Vercel project settings

3. **Deploy:**
   - Push to the `main` branch
   - The GitHub Action will automatically build and deploy your app

#### Manual Deployment

Alternatively, you can deploy manually using the [Vercel CLI](https://vercel.com/cli) or by connecting your repository directly in the Vercel dashboard.

### Option 2: Deploy to GitHub Pages

1. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Select "GitHub Actions" as the source

2. **Deploy:**
   - Push to the `main` branch
   - The workflow will automatically deploy to GitHub Pages

**Note:** GitHub Pages requires Next.js to export as a static site, which may limit some features.

For more deployment options, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
