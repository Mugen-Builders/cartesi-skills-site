# Cartesi Skills Site

A small static site that presents [Mugen-Builders/cartesi-skills](https://github.com/Mugen-Builders/cartesi-skills) the same way agent-oriented skill pages are usually browsed: hero, install command, cards, and full `SKILL.md` in a modal.

Skill bodies are loaded **at runtime** from `raw.githubusercontent.com` (no local copy of the markdown in the bundle). Contribute links open the matching file on GitHub.

## Requirements

- Node.js 18+ (recommended)

## Setup

```sh
npm install
```

## Scripts

| Command        | Description                    |
| -------------- | ------------------------------ |
| `npm run dev`  | Vite dev server (with HMR)     |
| `npm run build`| Production build → `dist/`     |
| `npm run preview` | Serve `dist/` locally       |

## Project layout

- `index.html` — structure and copy
- `src/main.js` — hero copy control, modal fetch/abort, clipboard
- `src/skillRemote.js` — GitHub raw + blob URL helpers
- `src/style.css` — layout and theme
- `public/` — `favicon.svg`, hero image, static assets

## Deploy

Build and host the `dist/` folder on any static host (GitHub Pages, Netlify, Vercel, etc.). Ensure the site is served over **HTTPS** so the `clipboard` API works for copy actions.