# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

An educational single-page app that teaches React fundamentals (props, `useState`, `useEffect`, `useRef`) through interactive lessons, plus a small "Projects" section (e.g. a Pokédex). Each lesson page pairs an explanation with live, runnable example widgets. There is no backend and no test suite.

## Commands

The package manager is **bun** (`bun.lock` is the only lockfile).

- `bun install` — install dependencies
- `bun run dev` — start the Vite dev server with HMR
- `bun run build` — production build to `dist/`
- `bun run preview` — serve the production build locally
- `bun run lint` — run ESLint over the repo

There is no test runner configured.

## Architecture

- **Entry / routing:** `src/main.jsx` mounts `<App>` inside `<BrowserRouter>`. `App` renders `Root`, and **`src/components/Root.jsx` is the single source of truth for routes** — it holds the `Navbar` / `main` / `Footer` shell and the full `<Routes>` table. Add a new page by creating it under `src/pages/` and registering its `<Route>` here.
- **Routing library:** imports come from **`react-router` v8** (the unified package), **not** `react-router-dom`. Use `react-router` for `Route`, `Routes`, `NavLink`, etc.
- **`src/pages/`** = one component per route (the "screens"). **`src/components/`** = shared chrome (`Navbar`, `Footer`), lesson scaffolding (`ExampleHeader`, `LessonTabs`), and the interactive example widgets that lesson pages compose (`Counter`, `BatchUpdate`, `FormExample`, `BgChanger`, `ApiExample`, `RefExample`, …). A `Learn*` page imports these widgets and lays them out; the widgets own their own state and logic.
- `axios` is a dependency but the example code fetches with the native `fetch` API — match that when adding data fetching unless there's reason not to.

## Design system (important)

Styling is **Tailwind CSS v4** wired through the `@tailwindcss/vite` plugin (see `vite.config.js`) — there is no `tailwind.config.js`. The theme lives in **`src/index.css`** via the `@theme` block, which defines the design tokens as CSS custom properties (and thus the Tailwind color/font utilities):

- Colors: `brand-100…700` (crayon purple), `cream`/`line` (paper + outline), accent box `sun` / `blush` / `sky` / `mint`, and the `ink-500/700/900` text ramp. Use these token names (e.g. `bg-brand-500`, `text-ink-900`, `bg-sun`) rather than raw hex.
- Fonts: `font-sans` (Nunito, body) and `font-display` (Kalam, headings).

Three custom component classes in the `@layer components` block define the hand-drawn "crayon" look and must be reused for visual consistency:

- **`.crayon`** — 2px outline + hard offset drop shadow (the sticker/card border on nearly every surface).
- **`.crayon-press`** — press-down hover/active interaction; pair with `.crayon` on clickable elements (buttons, cards).
- **`.marker`** — highlighter swipe behind a word, used inside headings.

## Page conventions

`Learn*` pages follow a consistent structure worth matching when adding lessons: a centered header with a breadcrumb `nav` and `<span className="marker">` in the `<h1>`, then `<LessonTabs />`, then a "How it works" step grid, then numbered examples introduced with `<ExampleHeader n=… tint=… title=… subtitle=… />` — typically a dark `bg-ink-900` code panel beside the corresponding live widget.

**Data-fetching pattern:** effects that fetch use a `let ignore = false` guard with a cleanup `return () => { ignore = true }` so stale/late responses are dropped (see `ApiExample.jsx` and `Pokedex.jsx`). Reuse this pattern for new fetching UI. Under React `StrictMode` (enabled in `main.jsx`) effects run twice in dev — write them to tolerate it.
