# Frontend starter

A standalone React + TypeScript + Vite project. The Express/EJS application in
the repository root continues to use its own package.json, dependencies, and
startup command. This starter contains no migrated website content or Cloudflare
configuration.

## Run locally

Use Node.js 20.19+ within version 20, or Node.js 22.12 or newer. This starter was
set up with Node.js 24.18.0.

From the repository root in PowerShell:

```powershell
cd frontend
npm.cmd install
npm.cmd run dev
```

Open http://localhost:5173. Edit `src/App.tsx` and save to see changes. Press
Ctrl+C in the terminal to stop the server. The port is fixed: if 5173 is occupied,
Vite reports an error instead of silently selecting another port.

`npm.cmd` avoids PowerShell's script execution restriction on `npm.ps1`. On macOS,
Linux, or shells without that restriction, use `npm` for the same commands.
Dependencies have already been installed for this checkout; installation is
needed again after a fresh clone or dependency changes. With an existing lockfile,
`npm.cmd ci` performs a reproducible clean install of this frontend's dependencies.

## Check and build

Run these commands from `frontend/`:

```powershell
npm.cmd run build
npm.cmd run preview
```

`build` first runs TypeScript checking, then writes production HTML, JavaScript,
and CSS to `dist/`. `preview` serves that build locally, normally at
http://localhost:4173; use the URL printed in the terminal. Preview is for checking
the build, not deploying it. No deployment command is configured.

The development server transforms TypeScript quickly but does not perform full
type checking. Run `npm.cmd run build` to check types, or run
`npm.cmd exec tsc -- --noEmit` to check types without generating a build.

## How the files fit together

1. Vite serves `index.html`, whose module script loads `src/main.tsx`.
2. `main.tsx` loads the shared CSS and mounts React into `<div id="root">`.
3. `App.tsx` defines the starter UI. A `.tsx` file combines TypeScript with JSX,
   the HTML-like syntax used to describe React elements.
4. `vite.config.ts` enables React Fast Refresh, which updates components during
   development, and sets the development port.
5. `tsconfig.json` enables strict checking for the source and Vite configuration.
   TypeScript emits no files; Vite handles the browser build. Bundler module
   resolution makes TypeScript interpret imports in a way suited to Vite.

`StrictMode` adds development checks to help surface mistakes as the app grows.
These checks can cause extra renders during development.

## Why a separate package?

This directory has its own `package.json`, lockfile, and `node_modules/`. Its
`"type": "module"` enables modern JavaScript imports within this directory without
changing the root server's CommonJS `require()` behavior. Run frontend npm
commands here so dependency changes stay within this project.

React and React DOM are application dependencies. Vite, TypeScript, the React
plugin, and type declarations are development/build dependencies. The type
declarations describe APIs for the checker; they do not add browser functionality.

One TypeScript configuration covers this small project. Node types support the
Vite configuration, which runs in Node; `src/` runs in the browser, so do not use
Node APIs there. Separate browser/tooling TypeScript configurations can be added
later if stricter runtime boundaries become useful.

The frontend `.gitignore` excludes `node_modules/` and `dist/`. Commit the
lockfile to preserve resolved dependency versions. No npm workspace or root
script changes are needed. To run the old site alongside this starter, open
another terminal at the repository root and run `npm.cmd start`; Express defaults
to port 3030, while Vite uses 5173.

References: [Vite guide](https://vite.dev/guide/),
[React createRoot](https://react.dev/reference/react-dom/client/createRoot),
[React StrictMode](https://react.dev/reference/react/StrictMode), and
[TypeScript module resolution](https://www.typescriptlang.org/tsconfig/moduleResolution).
