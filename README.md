# My Gold Work

My Gold Work is a Vite + React + TypeScript marketing site for a jewellery app featuring LIVE TRY-ON, catalogue browsing, saved designs, and sharing.

## Project structure

```text
index.html          Vite HTML entry point
src/
  App.tsx           Application composition
  components/       Header, hero, content sections, and footer
  hooks/            Typed scroll reveal and phone scroller hooks
  styles/global.css Preserved global design stylesheet
public/images/      JPG page imagery and logo.png
```

## Preview locally

Install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite. To test the production build locally:

```bash
npm run build
npm run preview
```

## Deploy with Vercel

The Vercel project (`my-gold-work`) is connected to this repository's `main`
branch, so pushing to `main` triggers an automatic production deployment.

To deploy manually from this project folder instead:

```bash
npm install -g vercel
vercel login
vercel deploy --prod
```

Vercel auto-detects Vite. The build command is `npm run build`, and the output directory is `dist`.
