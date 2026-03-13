# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for Synapse Edge LLC, a B2B revenue strategy consulting firm. Deployed on Vercel. No build step, no package manager, no dependencies.

## Development

**Local preview**: Open any `.html` file directly in a browser, or use any static file server:
```bash
npx serve .
# or
python -m http.server 8080
```

**Deploy**: Push to `main` branch — Vercel auto-deploys.

## Architecture

Pure HTML/CSS/JS static site. All pages share:
- `styles.css` — single global stylesheet (~34KB)
- `scripts.js` — vanilla JS (~98 lines): mobile nav toggle, scroll shadow on navbar, `IntersectionObserver` fade-up animations, form email validation
- Google Analytics 4 (ID: `G-YFVMBFQVXQ`) embedded in every page's `<head>`

### Pages
| File | Purpose |
|------|---------|
| `index.html` | Homepage — hero, social proof, how-it-works, lead magnet form |
| `services.html` | Five service disciplines |
| `approach.html` | SynapseEdge Revenue Architecture Framework™ (4-phase) |
| `case-studies.html` | Three case studies with results data |
| `about.html` | Company story and values |
| `contact.html` | Contact form |
| `strategy-call.html` | 45-minute strategy call booking form |
| `thank-you.html` | Post-form-submission confirmation |

### CSS Design System
Defined via CSS custom properties in `:root`:
- **Primary color**: `#0f3b5f` (dark blue)
- **Max container width**: `1200px`
- **Font**: Inter (Google Fonts, weights 300–900)
- **Key component classes**: `.container`, `.section`, `.btn`/`.btn-primary`/`.btn-secondary`/`.btn-white`, `.card`, `.eyebrow`, `.fade-up`, `.rule`
- Responsive via flexbox/grid and `clamp()` for fluid type

### SEO & Structured Data
Every page has canonical URLs, OG meta tags, and JSON-LD Organization schema. `case-studies.html` additionally has ItemList schema. `sitemap.xml` and `robots.txt` are at the root.

### Navigation
Global navbar on every page uses relative paths (e.g., `services.html`, `index.html`). `vercel.json` redirects `/index.html` → `/` permanently. The JS in `scripts.js` highlights the active nav link by matching `window.location.pathname`.
