# Hannah Galocy — Personal Website

Personal portfolio built with React and TypeScript and hosted on Cloudflare Workers.

The new frontend is currently being developed separately from the original
Express/EJS site, which remains in the repository root during migration.

## Tech Stack

| Technology         | Purpose                                      |
| ------------------ | -------------------------------------------- |
| React              | Component-based user interface               |
| TypeScript         | Static typing for JavaScript                 |
| Vite               | Development server and production build tool |
| ESLint             | Code-quality and error checking              |
| Prettier           | Consistent code formatting                   |
| Cloudflare Workers | Hosts the production static assets           |
| Wrangler           | Cloudflare development and deployment CLI    |

## Development

Requires Node.js 22.13+ or 24+.

From `frontend/`:

```bash
npm install
npm run dev
```

The development server runs at:

`http://localhost:5173`

## Code Quality

Run all checks:

```bash
npm run check
```

This runs:

- ESLint
- Prettier formatting checks
- TypeScript type checking
- Vite production build

Individual commands:

```bash
npm run lint
npm run lint:fix
npm run format:check
npm run format
```

## Build

Create a production build:

```bash
npm run build
```

Vite outputs the optimized site to `dist/`.

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The frontend is deployed as static assets using Cloudflare Workers.
Deployment configuration lives in `wrangler.jsonc`.

### Authenticate

First-time setup:

```bash
npx wrangler login
npx wrangler whoami
```

### Test with Cloudflare locally

```bash
npm run preview:worker
```

### Validate deployment

```bash
npm run deploy:dry-run
```

### Deploy

```bash
npm run deploy
```

The deployment process runs the project checks and production build before
uploading `dist/` to Cloudflare.

## Architecture

```text
React + TypeScript
        ↓
       Vite
        ↓
      dist/
        ↓
Cloudflare Workers
        ↓
       CDN
```

The current deployment serves static assets only. No backend Worker is required
at this stage.

## Migration

The original Express/EJS application remains in the repository root while the
new frontend is developed and tested separately.

The existing production site is unaffected by frontend development until the
Cloudflare deployment replaces it.
