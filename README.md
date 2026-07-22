# jecolemans.com

Personal portfolio of James Coleman — [jecolemans.com](https://jecolemans.com).

## Stack

- React 18 (Create React App) + React Router
- Tailwind CSS, framer-motion, lucide-react
- Deployed on Netlify from `main`

## Structure

- [`src/data/projects.js`](src/data/projects.js) — single source of truth for every project: copy, images, links, ordering, and which projects are featured on the home collage.
- [`src/HomePage.js`](src/HomePage.js) — the one-page home layout (hero collage, about, tiered project grid, contact).
- [`src/components/ProjectPage.js`](src/components/ProjectPage.js) — the case-study template; every block is conditional, so light and heavy projects both look intentional.

## Assets

Source images and other portfolio material live in **`portfolio-assets/`** — a *separate, private* git repo, gitignored by this one, that holds full-resolution originals, CAD/print exports, and working documents. Nothing there is deployed. The site serves only the optimized copies in **`public/`** (`portfolio-assets/` → `public/` → `build/` → Netlify). See `portfolio-assets/README.md` for the source→output pipeline.

## Scripts

```bash
npm start      # dev server on localhost:3000
npm run build  # production build to build/
```
