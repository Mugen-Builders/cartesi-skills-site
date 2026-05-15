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

| Environment | URL |
| ----------- | --- |
| **Production** | [https://skills.mugen.builders](https://skills.mugen.builders) |
| **Staging** | [https://cartesiskills.netlify.app](https://cartesiskills.netlify.app) |

Production deploys from [`Mugen-Builders/cartesi-skills-site`](https://github.com/Mugen-Builders/cartesi-skills-site) `main` via [GitHub Pages](.github/workflows/deploy.yml) (`npm run build` → `dist/`).

Staging uses Netlify ([`netlify.toml`](netlify.toml)): `npm run build`, publish `dist/`, Node 20.

### Netlify CLI (manual staging deploy)

```sh
npm run build
netlify deploy --prod
```

Requires a linked project (`netlify link`) and Netlify CLI login (`netlify login`).

### Continuous deploy from GitHub

1. Open [Netlify → cartesiskills](https://app.netlify.com/projects/cartesiskills) → **Site configuration** → **Build & deploy** → **Configure**.
2. **Link repository** → choose **GitHub** → `riseandshaheen/cartesi-skills-site`, branch `main`.
3. Build settings are read from `netlify.toml` (build command `npm run build`, publish directory `dist`).

Use **HTTPS** in production so the **clipboard** API works for copy actions.