# PeakLine Roofing — Web Application

Marketing / lead-generation site for **PeakLine Roofing**, a residential roofing &
exterior remodeling company in Denver, CO.

**Live site:** https://shahin06066.github.io/Peakline-web-application/

## Stack

- React 19 + TypeScript
- Vite 7 (with `vite-plugin-singlefile` — the production build is a single self-contained `index.html`)
- Tailwind CSS v4

## Highlights

- High-converting layout: Home, Roofing Services, Storm & Hail Damage, Project Gallery,
  Google Reviews, About, FAQ & Contact — all as anchored sections
- Two **Free Roof Inspection** lead forms with validation + success states; every service
  CTA pre-fills the form dropdown
- Sticky mobile **Call Now** bar, scrollspy nav, scroll-progress bar, scroll reveals,
  count-up stats, filterable project gallery, FAQ accordion
- Fully responsive (desktop / tablet / mobile)

## Develop

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build        # outputs a single-file dist/index.html
```

Deployment (GitHub Pages from the `gh-pages` branch):

```bash
cd dist
git init -b gh-pages && git add -A && git commit -m "deploy"
git push -f origin gh-pages
```

GitHub Pages serves the `gh-pages` branch at the live URL above.
