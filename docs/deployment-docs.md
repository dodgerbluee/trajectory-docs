---
title: Documentation Deployment Guide
description: Guide for deploying the Trajectory documentation to GitHub Pages
---

# Documentation Deployment

The Trajectory documentation is automatically deployed to GitHub Pages using GitHub Actions. This guide covers setup and troubleshooting.

## Live Site

- **URL:** https://dodgerbluee.github.io/trajectory/
- **Branch:** `gh-pages` (automatically managed)
- **Updated:** On every push to `main` (when documentation changes)

## Automatic Deployment (GitHub Actions)

### How It Works

1. **Trigger:** Push changes to `main` branch in `documentation/` folder
2. **Build:** GitHub Actions runs the build process (Node.js 20)
3. **Deploy:** Built site is automatically pushed to `gh-pages` branch
4. **Publish:** GitHub Pages serves from `gh-pages` branch

### Workflow File

Location: `.github/workflows/deploy-docs.yml`

The workflow:
- Triggers on pushes to `main` when documentation files change
- Installs dependencies (`npm ci`)
- Builds the site (`npm run build`)
- Uploads to GitHub Pages artifact
- Deploys using GitHub Pages action

### Monitoring Deployments

1. Go to **Actions** tab on GitHub
2. Look for **"Deploy Documentation"** workflow
3. Each push shows a run with status (✓ passed or ✗ failed)
4. Click run to see detailed logs

## Manual Deployment

### Prerequisites

```bash
# Verify Node.js version (need 20+)
node --version

# Verify git is configured
git config user.name
git config user.email
```

### Steps

```bash
# Navigate to documentation folder
cd documentation

# Install dependencies
npm install

# Build the site
npm run build

# Deploy to gh-pages branch
npm run deploy
```

### Local Testing Before Deployment

```bash
# Build and serve locally to test
cd documentation
npm run build
npm run serve

# Visit http://localhost:3000/trajectory/
```

## GitHub Pages Configuration

### Current Settings

In `docusaurus.config.ts`:
```typescript
url: 'https://dodgerbluee.github.io',
baseUrl: '/trajectory/',
organizationName: 'dodgerbluee',
projectName: 'trajectory',
deploymentBranch: 'gh-pages',
trailingSlash: false,
```

### Repository Settings

To verify GitHub Pages is configured:

1. Go to **Settings** → **Pages**
2. **Source:** Should be "Deploy from a branch"
3. **Branch:** Should be `gh-pages` with `/ (root)` folder
4. **Custom domain:** (optional, leave blank for GitHub-hosted domain)

## Troubleshooting

### Deployment Workflow Fails

**Check the logs:**
1. Go to **Actions** → **Deploy Documentation**
2. Click the failed run
3. Expand job details to see error

**Common issues:**
- **Dependency cache error:** Delete `.github/workflows/deploy-docs.yml` cache in Actions settings
- **Node version:** Verify Node 20+ is used (check workflow file)
- **Broken links:** Build may fail with `onBrokenLinks: 'throw'` - fix links in markdown

### Site Not Updating

1. Check GitHub Actions workflow ran successfully
2. Verify `gh-pages` branch exists and has recent commits
3. Clear browser cache and hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
4. Wait 1-2 minutes for GitHub Pages to rebuild

### 404 on Live Site

**Check:**
- Path includes `/trajectory/` (e.g., `https://dodgerbluee.github.io/trajectory/docs`)
- File was built correctly: `npm run build && ls build/`
- No typos in `baseUrl` in `docusaurus.config.ts`

### Missing Assets (CSS/JS)

**Cause:** Incorrect `baseUrl` causes asset paths to be wrong

**Fix:**
1. Verify `baseUrl: '/trajectory/'` in `docusaurus.config.ts`
2. Rebuild: `npm run build`
3. Test locally: `npm run serve`

## Documentation Build Process

### Build Command

```bash
npm run build
```

Generates:
- `build/` directory with static HTML/CSS/JS
- Includes `.nojekyll` file (tells GitHub Pages to skip Jekyll)
- Ready for deployment to any static host

### What Gets Built

- All markdown files in `docs/` → `.html` pages
- Blog posts in `blog/` → `blog/` pages
- Static assets in `static/` → copied to `build/`
- Images, stylesheets, JavaScript bundles

### Build Warnings

The build may show warnings like:
- **Unresolved markdown links:** Referenced files don't exist (non-breaking)
- **Missing tags:** Blog tags not in `tags.yml` (non-breaking)
- **Untruncated blog posts:** No `<!-- truncate -->` marker (non-breaking)

These warnings don't prevent deployment.

## Performance

- **Build time:** ~30-40 seconds on GitHub Actions
- **Deployment time:** ~1-2 minutes total
- **Site size:** ~50MB (includes all assets, history)
- **CDN:** GitHub Pages uses Fastly CDN (fast worldwide delivery)

## Rollback

To revert to previous documentation version:

1. Identify the commit hash: `git log --oneline -- documentation/`
2. Force push that commit's build: `git checkout <commit> -- documentation/`
3. Commit and push: `git commit -am "Revert documentation" && git push`
4. Workflow will rebuild with old version

Or manually push old version to `gh-pages`:
```bash
# From local gh-pages branch with old build
git push origin gh-pages --force
```

## Additional Resources

- [Docusaurus Deployment Docs](https://docusaurus.io/docs/deployment)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

## Support

For issues or questions:
1. Check workflow logs in **Actions** tab
2. Test build locally: `npm run build`
3. Review error messages in `build` output
4. Check Docusaurus documentation for configuration issues
