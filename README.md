# Lechoneria New York

A modern, mobile-first demo website for **Lechoneria New York** — a casual Colombian restaurant in Maspeth, Queens.

Built with React, Vite, TypeScript, and Tailwind CSS.

## Live Site

After deployment, the site will be available at:

**https://astridbonoan.github.io/LechoneriaNY.io/**

## GitHub Pages Setup

1. Go to **Settings → Pages** in the GitHub repository
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Select branch: **`gh-pages`** and folder: **`/ (root)`**
4. Save — the GitHub Action will build and push to `gh-pages` on every push to `main`

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to preview locally.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  components/   # UI sections (Hero, Menu, Location, etc.)
  data/         # Restaurant info and menu data
  hooks/        # Fade-in animation hook
```

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- GitHub Actions → GitHub Pages (gh-pages branch)
