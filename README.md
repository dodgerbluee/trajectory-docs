# Trajectory Documentation

This is the official documentation site for [Trajectory](https://github.com/dodgerbluee/trajectory), built using [Docusaurus](https://docusaurus.io/).

## What is Trajectory?

Trajectory is a self-hosted, privacy-first application for tracking children's health data including growth, visits, illnesses, vaccines, and documents.

## Documentation Structure

- **Getting Started** - Quick start guide and installation
- **Deployment** - Production deployment, HTTPS, backups, and updates
- **Security** - Authentication, authorization, and security best practices
- **Development** - Local development setup and contribution guide
- **Architecture** - Technical architecture and system design
- **Troubleshooting** - Common issues and solutions

## Running Documentation Locally

### Installation

```bash
npm install
```

### Local Development

```bash
npm start
```

This starts a local development server and opens up a browser window at `http://localhost:3000`. Most changes are reflected live without restarting the server.

### Build

```bash
npm run build
```

This generates static content into the `build` directory that can be served using any static hosting service.

### Serve Production Build

```bash
npm run serve
```

This serves the production build locally for testing.

## Deployment

### Automated Deployment (GitHub Actions)

The documentation is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

**What happens automatically:**
1. GitHub Actions workflow (`deploy-docs.yml`) triggers on push to `main` (when documentation files change)
2. Node.js environment is set up (v20)
3. Dependencies are installed (`npm ci`)
4. Site is built (`npm run build`)
5. Built site is deployed to GitHub Pages (`gh-pages` branch)

**Access the live site:** https://dodgerbluee.github.io/trajectory/

**Workflow file:** `.github/workflows/deploy-docs.yml`

### Manual Deployment (Local)

To manually trigger a deployment locally:

```bash
cd documentation
npm install
npm run build
npm run deploy
```

**Requirements:**
- GitHub credentials configured locally (`git config user.name` and `git config user.email`)
- Push access to the repository
- Node.js 20+

### Deployment Configuration

Key settings in `docusaurus.config.ts`:
```typescript
url: 'https://dodgerbluee.github.io',
baseUrl: '/trajectory/',
organizationName: 'dodgerbluee',
projectName: 'trajectory',
deploymentBranch: 'gh-pages',
trailingSlash: false,
```

### GitHub Pages Repository Settings

To enable GitHub Pages for this repository:

1. Go to **Settings → Pages**
2. **Source:** Select "Deploy from a branch"
3. **Branch:** Select `gh-pages` and `/ (root)`
4. **Custom domain** (optional): Leave blank to use `https://dodgerbluee.github.io/trajectory/`

### Static Hosting Alternatives

Deploy the `build/` directory to any static hosting service:
- Netlify
- Vercel
- Cloudflare Pages
- AWS S3 + CloudFront

Build the site locally: `npm run build`

## Contributing to Documentation

1. Fork the repository
2. Create a branch for your documentation changes
3. Edit markdown files in `docs/`
4. Test locally with `npm start`
5. Submit a pull request

### Writing Guidelines

- Use clear, concise language
- Include code examples where applicable
- Add screenshots for UI-related documentation
- Keep formatting consistent with existing docs
- Test all code examples before submitting

## Documentation Tools

- **Docusaurus** - Static site generator
- **MDX** - Markdown with JSX components
- **React** - Component framework
- **TypeScript** - Type safety

## License

The documentation is part of the Trajectory project and follows the same [Polyform Noncommercial 1.0.0](../LICENSE) license.

