# PeakLine Roofing — Denver, CO

A premium, conversion-focused marketing website for **PeakLine Roofing**, a fictional residential roofing and exterior remodeling company based in Denver, Colorado.

Built from the client content brief in the Fiverr order, including the Home, About, Services, Storm & Hail Damage, Project Gallery, and Contact pages.

## Live site

Deployed with GitHub Pages:

**https://shahin06066.github.io/Peakline-web-application/**

Every push to `main` rebuilds and redeploys automatically via `.github/workflows/deploy.yml`.

## Tech stack

- **React 19** + **TypeScript**
- **Vite 7** (single-file production build via `vite-plugin-singlefile`)
- **Tailwind CSS 4** with a custom design token layer
- Self-hosted UI: no component library, no runtime CSS dependency
- Hash-based routing (works on any static host, including GitHub Pages)
- Fraunces + Inter typography

## Design direction

A warm, editorial-premium look built for a trust-driven local trade:

| Token | Value | Use |
| --- | --- | --- |
| Bone | `#FBF8F1` | Page canvas |
| Pine | `#0E1F19` / `#14291F` | Dark bands, primary buttons |
| Copper / clay | `#BD6740` | Accent italics, CTAs |
| Sage | `#E9EDDF` | Soft surfaces, icon chips |

Motion is restrained: a gentle page fade, one-time content reveals, and a subtle image zoom on project cards. All motion respects `prefers-reduced-motion`.

## Pages

| Route | Description |
| --- | --- |
| `#/` | Home — hero, trust badges, free-inspection quote form, services, storm process, projects, reviews |
| `#/about` | Our story, differentiators, owner-led promise, service areas |
| `#/services` | Full roof replacement, repairs & leak detection, exterior remodeling, FAQ |
| `#/storm-damage` | 4-step storm restoration process, insurance support, emergency tarping, 48-hour checklist |
| `#/projects` | Filterable gallery with keyboard-accessible lightbox |
| `#/contact` | Full inspection form, contact details, hours, service area |

## Conversion features

- Free inspection form with client-side validation, US phone auto-formatting, draft persistence for the session, and an accessible success state
- Sticky mobile "Call now / Free inspection" bar
- Click-to-call and click-to-email throughout
- 24/7 emergency storm messaging

## Local development

```bash
npm install
npm run dev      # start Vite dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Deployment notes

The production build is a single `dist/index.html` plus the images in `dist/images/`. The GitHub Actions workflow:

1. Installs dependencies with `npm ci`
2. Runs `npm run build`
3. Prefixes the absolute `/images/` references with the repository base path so assets resolve under GitHub Pages
4. Publishes the result with `actions/deploy-pages`

If you attach a custom domain, add a `CNAME` file to `public/` and update the base-path rewrite step in the workflow accordingly.

## Content notes

- Phone, email, and address are the placeholder details supplied in the brief.
- Testimonials are clearly labelled sample content for layout purposes.
- Project captions and photography are representative samples and should be replaced with real completed work before launch.

## License

Proprietary — prepared for PeakLine Roofing.
