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

Deployment is automated: pushing to `main` triggers
`.github/workflows/deploy.yml`, which builds the site and publishes it to
GitHub Pages (Actions source). A snapshot of the built site also lives on the
`gh-pages` branch, and the previous implementation is preserved on
`option-2-backup`.
