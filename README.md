# hannahgalocy.com

Personal portfolio served as static assets on Cloudflare Workers.

## Technologies

| Technology                    | Purpose                                           |
| ----------------------------- | ------------------------------------------------- |
| React + TypeScript            | Page components and type checking                 |
| React Router                  | Page navigation                                   |
| CSS                           | Styling and responsive layouts                    |
| Vite                          | Development server and production builds          |
| ESLint + Prettier             | Code checks and formatting                        |
| Cloudflare Workers + Wrangler | Hosting, local Cloudflare preview, and deployment |

## Local setup

Requires npm and Node.js 22.22+ within the 22.x release line, or Node.js 24+.
Run commands from the repository root, where `package.json` lives.

```bash
npm ci
npm run dev
```

Open `http://localhost:5173`
If PowerShell blocks `npm` or `npx`, use `npm.cmd` or `npx.cmd`.

## Commands

| Command                  | What it does                                                                                   |
| ------------------------ | ---------------------------------------------------------------------------------------------- |
| `npm ci`                 | Installs exact lockfile dependencies.                                                          |
| `npm install`            | Installs dependencies and updates the lockfile when needed.                                    |
| `npm run dev`            | Starts the development server with live updates.                                               |
| `npm run format`         | Rewrites files using Prettier formatting.                                                      |
| `npm run format:check`   | Checks formatting without changing files.                                                      |
| `npm run lint`           | Checks code with ESLint; warnings also fail.                                                   |
| `npm run lint:fix`       | Applies available ESLint fixes; remaining issues need manual changes.                          |
| `npm run build`          | Checks TypeScript and builds the production site into `dist/`.                                 |
| `npm run check`          | Runs lint, formatting checks, TypeScript checks, and the production build. Does not fix files. |
| `npm run preview`        | Serves the existing production build locally. Run `npm run build` first.                       |
| `npm run preview:worker` | Builds and previews locally through Wrangler.                                                  |
| `npm run deploy:dry-run` | Runs all checks and prepares deployment without publishing.                                    |
| `npm run deploy`         | Runs all checks, builds, and publishes to Cloudflare.                                          |

After editing, run `npm run format` and `npm run check`. When ready to publish,
run `npm run deploy`; it repeats the checks automatically.

## Where to make changes

| Change                                          | Location                                                                 |
| ----------------------------------------------- | ------------------------------------------------------------------------ |
| Home/About content, portraits, and social links | `src/pages/HomePage.tsx`, `src/pages/AboutPage.tsx`                      |
| Shared navigation and Contact link              | `src/components/SiteHeader.tsx`                                          |
| Projects and case studies                       | `data/projects.json`; field definitions in `src/data/projects.ts`        |
| Images                                          | `data/images/`; project JSON paths are relative to this folder           |
| Resume                                          | `data/Hannah_Galocy_Resume_2026_Public.pdf`                              |
| Shared styles and home layout                   | `src/index.css`                                                          |
| Page styles                                     | `src/about.css`, `src/projects.css`, `src/project.css`, `src/resume.css` |
| Routes and default page metadata                | `src/App.tsx` and `index.html`                                           |

Good to know:

- Project `cardCaption` is the card description; `summary` is the case-study introduction. JSON array order controls cards and Next project navigation, which loops back to the first project.
- Sections support `text`, `image`, `split`, and `gallery`. Copy an existing section and give it a unique `id`.
- Use forward slashes and exact filename capitalization for assets. Project images support PNG, JPG/JPEG, SVG, WebP, and AVIF; include alt text and preferably dimensions.
- Replace the resume using the same filename. If renaming it, update the import and download filename in `src/pages/ResumePage.tsx`.
- Content, images, and the resume are bundled at build time. Redeploy to publish changes; edit source files rather than generated `dist/` files.

## Cloudflare setup

Before the first deployment, or when authentication expires:

```bash
npx wrangler login
npx wrangler whoami
```

`login` authenticates Wrangler; `whoami` confirms the account.

`wrangler.jsonc` targets `hannah-galocy-website` and uploads `dist/`. Keep its
`single-page-application` fallback so direct page links and refreshes work.
The site currently needs no backend, database, or API keys.
