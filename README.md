# tools.thenepal.io

Free professional calculator toolkit for Nepal travel agents.
Built as a static site — no server, no database, no build step.

## File Structure

```
tools.thenepal.io/
├── index.html              ← Homepage
├── 404.html                ← Custom 404 page
├── css/
│   └── global.css          ← Shared styles + dark mode tokens
├── components/
│   ├── header.js           ← Shared header (auto-injects on every page)
│   └── footer.js           ← Shared footer (auto-injects on every page)
└── toolkit/
    └── index.html          ← Agency Toolkit (4 calculators)
```

## Adding a New Page

1. Create a new folder e.g. `budget-planner/`
2. Add `index.html` inside it
3. Use this template at the top:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Page Title — tools.thenepal.io</title>
  <link rel="stylesheet" href="/css/global.css">
  <!-- your page-specific styles here -->
</head>
<body>
<script src="/components/header.js"></script>

<main class="page-body">
  <div class="container">
    <!-- your content here -->
  </div>
</main>

<script src="/components/footer.js"></script>
</body>
</html>
```

4. Add the nav link in `components/header.js` inside the `navLinks` array:

```js
const navLinks = [
  { href: '/toolkit/', label: 'Agency Toolkit', key: 'toolkit' },
  { href: '/budget-planner/', label: 'Budget Planner', key: 'budget' }, // ← add here
];
```

## Deployment: GitHub → Cloudflare Pages

1. Push this folder to a GitHub repo (e.g. `thenepal-tools`)
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect your GitHub account → select the repo
4. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** `/` (root)
5. Click Deploy
6. In Cloudflare → Custom Domains → add `tools.thenepal.io`
7. In your DNS panel: add a CNAME pointing `tools` → your Cloudflare Pages domain

## Dark Mode

Dark mode is handled automatically by `components/header.js`.
- Saves user preference to `localStorage`
- Respects `prefers-color-scheme` on first visit
- Toggle button appears in the header on all pages

## Live Exchange Rates

The toolkit fetches live USD/NPR rates from `exchangerate-api.com` on load.
Falls back to hardcoded rates if fetch fails.
Auto-refreshes every 60 minutes while tab is open.

## Updating Permit Fees

Permit fees are inside `toolkit/index.html` in the `calcPermits()` function.
Nepal government updates fees each fiscal year (July).
Search for `// ══ TOOL 1` to find the section.

---
© thenepal.io
