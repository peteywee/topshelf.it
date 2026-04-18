# Top Shelf Service LLC — Landing Page

Static-first landing page. No framework. No build step. No dependencies.

## Quick start

```bash
python3 -m http.server 8080
```

Open http://localhost:8080

Alternative:

```bash
npx serve .
```

## File structure

```
topshelfservicepros.com/
├── index.html              Main page
├── assets/
│   ├── css/styles.css      Complete stylesheet
│   ├── js/main.js          Mobile nav toggle only
│   └── icons/favicon.svg   Brand favicon
├── robots.txt              Crawler rules
├── site.webmanifest        PWA manifest
├── _headers                Cloudflare security + cache headers
├── wrangler.toml           Cloudflare Pages config
└── README.md               This file
```

## Deploy to Cloudflare Pages

### Option A: Direct upload
1. Go to Cloudflare Dashboard > Pages
2. Create a project > Upload assets
3. Drag the entire project folder
4. Deploy

### Option B: Git-connected
1. Push this repo to GitHub
2. Cloudflare Dashboard > Pages > Create project > Connect repo
3. Framework preset: None
4. Build command: (leave blank)
5. Build output directory: /
6. Deploy

### Option C: Wrangler CLI
```bash
npx wrangler pages deploy . --project-name=topshelfservice
```

## Notes

- Contact uses static-safe mailto: links (no backend needed)
- Canonical URL: https://topshelfservicepros.com/
- Update email addresses in index.html as needed
- `_headers` provides Cloudflare-compatible security and caching headers
- Fonts loaded from Google Fonts CDN (Inter + Montserrat)
- Total JS: ~60 lines for mobile nav — no frameworks, no libraries
- Tested against: semantic HTML validation, heading hierarchy, focus management, reduced motion
