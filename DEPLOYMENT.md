# GitHub Pages Deployment Guide

This guide will help you deploy your Aurras landing page to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Node.js and npm installed

## Setup Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `aurras-pmaas-spotlight`)
4. Choose "Public" visibility (required for free GitHub Pages)
5. Do NOT initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### 2. Initialize Git and Push to GitHub

If you haven't already initialized git in this project:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Aurras landing page"

# Add your GitHub repository as remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. In the left sidebar, click on "Pages"
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. That's it! The workflow will automatically deploy on push

### 4. Install Dependencies

Before deploying, make sure to install all dependencies including the new `gh-pages` package:

```bash
npm install
```

### 5. Deployment Options

#### Option A: Automatic Deployment (Recommended)

The GitHub Actions workflow is already configured. Every time you push to the `main` branch, your site will automatically build and deploy.

```bash
# Make changes to your code
git add .
git commit -m "Your commit message"
git push
```

Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

#### Option B: Manual Deployment

You can also deploy manually using the npm script:

```bash
npm run deploy
```

This will build your project and push it to the `gh-pages` branch.

### 6. Custom Domain (Optional)

If you want to use a custom domain:

1. Go to your repository's Settings > Pages
2. Under "Custom domain", enter your domain name
3. Click "Save"
4. Configure your DNS settings according to GitHub's instructions

## Development Workflow

### Local Development

Start the development server:

```bash
npm run dev
```

Your app will be available at `http://localhost:8080`

### Build for Production

Test the production build locally:

```bash
npm run build
npm run preview
```

### Environment Variables

The base path is automatically configured for GitHub Pages. If you need to customize it:

```bash
# .env file (optional)
VITE_BASE_PATH=/your-custom-path/
```

## Troubleshooting

### Issue: 404 Error on GitHub Pages

- Make sure you've enabled GitHub Pages in repository settings
- Check that the source is set to "GitHub Actions"
- Verify the workflow ran successfully in the "Actions" tab

### Issue: Assets Not Loading

- The base path is automatically set to `/<repository-name>/`
- If you're using a custom domain or root deployment, you may need to adjust `VITE_BASE_PATH`

### Issue: Build Fails in GitHub Actions

- Check the Actions tab for error messages
- Ensure all dependencies are listed in `package.json`
- Verify that `package-lock.json` is committed

### Issue: Changes Not Appearing

- Clear your browser cache
- Check the Actions tab to ensure the workflow completed successfully
- Wait a few minutes for GitHub's CDN to update

## Project Structure

```
aurras-pmaas-spotlight-main/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── .nojekyll              # Tells GitHub Pages to not use Jekyll
│   └── ...
├── src/
│   └── ...
├── package.json               # Includes deploy scripts
├── vite.config.ts            # Configured for GitHub Pages
└── DEPLOYMENT.md             # This file
```

## Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## Support

If you encounter any issues:
1. Check the GitHub Actions logs in the "Actions" tab
2. Review this deployment guide
3. Check the [GitHub Pages troubleshooting guide](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)

