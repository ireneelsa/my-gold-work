# My Gold Work

My Gold Work is a static marketing landing page for a jewellery app featuring LIVE TRY-ON, catalogue browsing, saved designs, and sharing.

## Project structure

```text
index.html       Page markup
css/style.css    Extracted page styles
js/main.js       Extracted page interactions
images/          JPG page imagery and logo.png
```

## Preview locally

From this folder, run any static HTTP server, for example:

```bash
python -m http.server 8000
```

Then open <http://localhost:8000> in a browser. The project has no build step and does not require a `vercel.json` file.

## Deploy with Vercel

Install and authenticate the Vercel CLI if needed, then run:

```bash
npm install -g vercel
vercel login
vercel deploy
```

Run those commands from this project folder and follow the prompts to link or create the Vercel project.
