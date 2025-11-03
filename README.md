# Praxis Sarai Zeller Documentation

Comprehensive documentation site for the Praxis Sarai Zeller psychotherapy practice website, built with [Nextra](https://nextra.site/).

## Overview

This documentation provides complete information about:

- **Getting Started**: Installation, setup, and development workflow
- **Architecture**: Project structure, design patterns, and technical decisions
- **Components**: Detailed component API and usage examples
- **Deployment**: GitHub Pages deployment and custom domain setup
- **Guides**: Best practices, troubleshooting, and advanced topics

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

The documentation will be available at `http://localhost:3001`

## Technology Stack

- **Next.js 14** - React framework for documentation
- **Nextra 3** - Documentation framework with MDX support
- **Nextra Theme Docs** - Beautiful documentation theme
- **React 18** - UI library

## Project Structure

```
docs/
├── pages/                    # Documentation pages (MDX)
│   ├── getting-started/     # Installation and setup guides
│   ├── architecture/        # Architecture documentation
│   ├── components/          # Component API docs
│   ├── deployment/          # Deployment guides
│   ├── guides/              # Additional guides
│   ├── index.mdx            # Homepage
│   └── _meta.json           # Navigation structure
├── public/                   # Static assets
├── theme.config.jsx          # Nextra theme configuration
├── next.config.mjs           # Next.js configuration
└── package.json              # Dependencies

```

## Writing Documentation

### Creating New Pages

1. Create an MDX file in the appropriate directory:

```mdx
# Page Title

Your content here with markdown formatting.

## Code Examples

\`\`\`javascript
// Your code here
\`\`\`
```

2. Add the page to the navigation in `_meta.json`:

```json
{
  "your-page": "Your Page Title"
}
```

### MDX Features

Nextra supports rich MDX features:

- **Markdown** - Standard markdown syntax
- **React Components** - Import and use React components
- **Code Highlighting** - Automatic syntax highlighting
- **Callouts** - Special note blocks
- **Tabs** - Organize content in tabs

## Theme Configuration

Edit `theme.config.jsx` to customize:

- Logo and branding
- Navigation links
- Footer content
- SEO meta tags
- Color scheme (primary hue)

## Deployment

The documentation can be deployed alongside the main site or separately:

### With GitHub Pages

The documentation can be built and deployed to a `/docs` path:

```bash
npm run build
# Output in .next/ directory
```

### Standalone Deployment

Deploy to any static hosting provider:

- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages
- Cloudflare Pages

## Contributing

When adding new documentation:

1. Follow the existing structure and style
2. Include code examples where appropriate
3. Add navigation entries in `_meta.json`
4. Test locally before committing
5. Keep content clear and concise

## Support

For questions or issues with the documentation:

- Open an issue on GitHub
- Contact: kontakt@praxis-ansbach.de

---

© 2025 Praxis Sarai Zeller Documentation
