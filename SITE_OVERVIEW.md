# Trajectory Documentation Site

This document provides an overview of the Docusaurus documentation site created for Trajectory.

## What Was Created

A complete Docusaurus documentation site has been set up at `/documentation` with the following structure:

### Documentation Pages

1. **Getting Started** (`docs/intro.md`)
   - Overview of Trajectory
   - Privacy principles
   - Requirements
   - Quick start guide
   - Next steps

2. **Deployment** (`docs/deployment.md`)
   - Production setup
   - Environment configuration
   - HTTPS/reverse proxy setup
   - Backup strategies
   - Update procedures
   - Rollback process
   - Monitoring
   - Portainer integration

3. **Security** (`docs/security.md`)
   - Authentication and authorization
   - Data protection
   - Deployment security
   - HTTPS configuration
   - Token management
   - Compliance considerations
   - Security checklist

4. **Development** (`docs/development.md`)
   - Local development setup
   - Backend development
   - Frontend development
   - Full stack development
   - Database migrations
   - Contributing guidelines
   - Debugging tips

5. **Architecture** (`docs/architecture.md`)
   - System overview
   - Technology stack
   - Data model
   - Authentication flow
   - Authorization model
   - API architecture
   - File storage
   - Database schema management

6. **Troubleshooting** (`docs/troubleshooting.md`)
   - Installation issues
   - Runtime issues
   - Performance issues
   - HTTPS/proxy issues
   - Data issues
   - Development issues
   - Browser issues

7. **Quick Reference** (`docs/quick-reference.md`)
   - Essential commands
   - Environment variables
   - Docker commands
   - Database commands
   - API endpoints
   - SQL queries
   - Backup scripts

### Site Configuration

- **Site Title**: Trajectory
- **Tagline**: Self-hosted, privacy-first app for tracking children's health data
- **Repository**: https://github.com/dodgerbluee/trajectory
- **Base URL**: /
- **Theme**: Classic with dark mode support

### Customizations

1. **Homepage** (`src/pages/index.tsx`)
   - Updated hero section
   - Custom call-to-action button
   - Updated meta description

2. **Features** (`src/components/HomepageFeatures/index.tsx`)
   - Privacy First
   - Self-Hosted
   - Comprehensive Tracking

3. **Navigation** (`docusaurus.config.ts`)
   - Docs link
   - Blog link
   - GitHub link

4. **Footer** (`docusaurus.config.ts`)
   - Getting Started link
   - Deployment link
   - Blog link
   - GitHub link

## Running the Documentation

### Development Server

```bash
cd documentation
npm start
```

The site will be available at http://localhost:3000 (or another port if 3000 is in use).

### Production Build

```bash
cd documentation
npm run build
```

This creates a `build/` directory with static files ready for deployment.

### Serve Production Build

```bash
cd documentation
npm run serve
```

## Deployment Options

The documentation site can be deployed to:

1. **GitHub Pages**
   ```bash
   GIT_USER=dodgerbluee npm run deploy
   ```

2. **Netlify**
   - Connect repository
   - Build command: `cd documentation && npm run build`
   - Publish directory: `documentation/build`

3. **Vercel**
   - Connect repository
   - Framework preset: Docusaurus
   - Root directory: `documentation`

4. **Static Hosting**
   - Build the site
   - Upload `documentation/build/` to any static host

## File Structure

```
documentation/
├── blog/                          # Blog posts (optional)
├── docs/                          # Documentation markdown files
│   ├── intro.md                   # Getting started
│   ├── deployment.md              # Deployment guide
│   ├── security.md                # Security guide
│   ├── development.md             # Development guide
│   ├── architecture.md            # Architecture overview
│   ├── troubleshooting.md         # Troubleshooting guide
│   └── quick-reference.md         # Quick reference
├── src/
│   ├── components/                # React components
│   │   └── HomepageFeatures/      # Homepage features component
│   ├── css/                       # Custom CSS
│   └── pages/                     # Custom pages
│       └── index.tsx              # Homepage
├── static/                        # Static assets
│   └── img/                       # Images
├── docusaurus.config.ts           # Site configuration
├── sidebars.ts                    # Sidebar configuration
├── package.json                   # Dependencies
├── tsconfig.json                  # TypeScript config
└── README.md                      # Documentation README
```

## Next Steps

### Recommended Enhancements

1. **Add Screenshots**
   - Place images in `static/img/`
   - Reference in docs: `![Alt text](/img/screenshot.png)`

2. **Create Blog Posts**
   - Add markdown files to `blog/`
   - Include release notes, tutorials, tips

3. **Add More Guides**
   - API reference documentation
   - Feature-specific guides
   - Migration guides
   - Best practices

4. **Improve Styling**
   - Customize colors in `src/css/custom.css`
   - Add custom components
   - Update logo in `static/img/`

5. **Add Search**
   - Integrate Algolia DocSearch
   - Configure in `docusaurus.config.ts`

6. **Versioning**
   - Add versioned docs for releases
   - Use `npm run docusaurus docs:version 1.0.0`

### Maintenance

- Update documentation with each release
- Keep examples current with latest code
- Test all code snippets and commands
- Review and update links regularly
- Monitor for broken links

## Contributing to Docs

To contribute to the documentation:

1. Edit markdown files in `docs/`
2. Test locally with `npm start`
3. Build to verify: `npm run build`
4. Submit pull request

## Markdown Features

Docusaurus supports enhanced markdown:

### Admonitions

```markdown
:::note
This is a note
:::

:::tip
This is a tip
:::

:::warning
This is a warning
:::

:::danger
This is danger
:::
```

### Code Blocks with Titles

```markdown
```bash title="Backup Script"
docker-compose exec database pg_dump...
\```
```

### Tabs

```markdown
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="npm" label="npm">
    npm install
  </TabItem>
  <TabItem value="yarn" label="Yarn">
    yarn install
  </TabItem>
</Tabs>
```

## Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Markdown Features](https://docusaurus.io/docs/markdown-features)
- [Deployment Guide](https://docusaurus.io/docs/deployment)
- [Configuration](https://docusaurus.io/docs/configuration)

## Status

✅ Site initialized
✅ Configuration customized
✅ Core documentation pages created
✅ Homepage customized
✅ Navigation configured
✅ README updated
✅ Development server tested

The documentation site is now ready to use and can be further customized as needed!
