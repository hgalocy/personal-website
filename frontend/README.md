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

Requires Node.js 22.22+ or 24+.

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

### Pages and project data

React Router connects `/` to the existing homepage, `/work` to the project grid,
and `/work/:slug` to a project detail page. The shared header uses router links
for internal navigation. Unknown URLs and project slugs show a not-found page.

Edit `data/projects.json` to update Navi, Pancake, and Pinball. The typed module
`src/data/projects.ts` imports this JSON once. `WorkPage` passes each entry to
`ProjectCard`; the shared `ProjectPage` finds the same entry by its URL slug.
Both views use the same title and hero image.

Each project contains:

| Field           | Purpose                                                                  |
| --------------- | ------------------------------------------------------------------------ |
| `slug`, `title` | Stable URL segment and display title.                                    |
| `heroImage`     | Image object used on the card and detail page.                           |
| `summary`       | Short introduction near the page title.                                  |
| `technologies`  | Optional array of tag strings; omit it to hide the tags.                 |
| `externalLink`  | Optional `{ "label": "View on GitHub", "url": "https://..." }`.          |
| `sections`      | Ordered array of content sections. Add, remove, or reorder these freely. |

Every section needs a unique `id`, a `type`, and a `heading`:

| Type      | Content fields                                  | Layout                                                                                                            |
| --------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `text`    | `paragraphs`                                    | Heading beside readable-width paragraphs on desktop.                                                              |
| `image`   | `image`, optional `paragraphs`                  | Wide image below its heading and any text.                                                                        |
| `split`   | `paragraphs`, `image`, optional `imagePosition` | Text beside one image; `imagePosition` is `left` or `right` (default). Stacks with text first on smaller screens. |
| `gallery` | `images`, optional `paragraphs`                 | Responsive grid supporting any number of images.                                                                  |

`ProjectSection` selects the layout by `type`. `ProjectFigure` handles image
dimensions, alt text, optional captions, and a link to view the original image.
Each paragraph is a separate string, rendered as text, not HTML.

Example section:

```json
{
  "id": "fixture",
  "type": "split",
  "heading": "Connecting software and hardware",
  "paragraphs": ["First paragraph.", "Second paragraph."],
  "imagePosition": "right",
  "image": {
    "src": "pancake/fixture.png",
    "alt": "Amplifier circuit board on the test fixture",
    "width": 1826,
    "height": 1246,
    "caption": "Optional image caption."
  }
}
```

Image `src` values are relative to `data/images/`, so `pancake/fixture.png` means
`frontend/data/images/pancake/fixture.png`. Use forward slashes in JSON, including
on Windows. The same image object format applies to `heroImage`, `image`, and
each entry in `images`. `src` and `alt` are required; captions and original pixel
dimensions are optional. Including dimensions avoids layout jumps as images load.

The data module uses Vite's asset imports to resolve these files to production
URLs; plain `data/images/...` browser URLs would not survive the build. Supported
formats are PNG, JPG/JPEG, SVG, WebP, and AVIF. Missing images and unsupported
section types produce descriptive errors. JSON is bundled at build time, so
redeploy after changing the data.

Pancake and Pinball use the supplied images and legacy project descriptions.
Navi uses placeholder artwork from `data/images/placeholder/`, placeholder copy,
and an `example.com` link until its own content is available. No legacy files
are imported at runtime or modified by the new pages.

`SiteHeader` is shared across pages. `HomePage` contains the existing hero;
`work.css` styles the Work grid, and `project.css` contains the new detail-page
styles. Neither changes the hero stylesheet.
Wrangler's existing `single-page-application` asset fallback supports direct
visits and refreshes at URLs such as `/work/pinball`.

Routing follows React Router's
[declarative setup](https://reactrouter.com/start/declarative/installation).
Local image resolution uses [Vite glob imports](https://vite.dev/guide/features.html#glob-import).

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
