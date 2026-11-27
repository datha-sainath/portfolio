# Datha Sainath - Portfolio

A personal portfolio built with React and Vite, featuring scroll-triggered animations, an animated hero, 3D tilt project cards, and a responsive layout.

## Tech stack

- React 18 and Vite
- Framer Motion for animations
- react-icons
- Google Fonts (Space Grotesk, Inter)

## Getting started

```bash
npm install
npm run dev      # local development
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Editing content

All text, skills, projects and links live in `src/data/resume.js`. Update that file and the site updates automatically.

## Project structure

```
src/
├── components/   # One component per section (Hero, About, Projects, ...)
├── data/         # Resume content, kept separate from presentation
├── styles/       # Global design tokens and component styles
├── App.jsx       # Section composition
└── main.jsx      # Entry point
```

## Deployment

The `base` in `vite.config.js` is set to `./`, so the build works on GitHub Pages, Vercel, Netlify or Render. For GitHub Pages, run `npm run build` and publish the `dist/` folder.
