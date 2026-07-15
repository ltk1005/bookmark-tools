# AGENTS.md

## Purpose

Bookmark Tools — static PWA for managing and browsing categorized URL bookmarks with an embedded iframe viewer. Vietnamese UI. Hosted on GitHub Pages.

## Tech Stack

- Vanilla HTML/CSS/JS (single `index.html` with inline `<style>` and `<script>`)
- jQuery 3.7.1 (CDN)
- Bootstrap 5.3.3 (CDN)
- Font Awesome 5.15.3 (CDN)
- Google Fonts: Inter
- PWA via `manifest.json` (manifest_version 2)

No build step, no bundler, no package manager, no tests.

## Directory Layout

```
bookmark-tools/
├── index.html          # Entire app: HTML + CSS + JS (inline)
├── root-urls.js        # Bookmark data — add new links here
├── manifest.json       # PWA manifest
├── .version.txt        # Current version (semver string)
├── assets/
│   ├── css/style.css   # Additional styles (not used by index.html)
│   └── js/
│       ├── constants.js
│       └── script.js   # Additional scripts (not used by index.html)
├── dakia/              # Side project / unrelated HTML
├── docs/wiki/          # Wiki documentation
├── .github/workflows/  # CI/CD
│   ├── deploy-gh-pages.yml
│   ├── html-static.yml
│   ├── changelog.yml
│   └── sync-wiki.yml
└── README.md
```

## Key Conventions

- **All app logic lives in `index.html`** — inline CSS in `<style>`, inline JS in `<script>` tags. `assets/js/` and `assets/css/` exist but are not referenced by the main app.
- **Data model**: `root-urls.js` exports a global `urls` array of `UrlGroup` objects. Each group has `group`, `group_id`, and `links[]`. Links have `name`, `path`, optional `title`, `description`, `hints[]`, `target`.
- **State persistence**: `localStorage` keys `lastOpenedUrl` and `sidebarCollapsed`.
- **URL params**: All links get `?ref=nqdev&utm_source=bookmarks&timestamp=<ts>` appended.
- **Language**: Vietnamese UI strings in HTML; English in code comments.
- **jQuery-centric DOM manipulation** — all rendering via `renderList()`.

## Adding Bookmarks

Edit `root-urls.js`, add objects to the `urls` array following the `UrlGroup` / `LinkItem` typedefs defined in that file.

## Deployment

GitHub Pages from `main` branch. Workflow: `.github/workflows/deploy-gh-pages.yml`.

## Gotchas

- `renderList` is defined **twice** in `index.html` (lines ~690 and ~1056) — the second definition shadows the first. The second version includes context-menu support.
- Anti-cache: `root-urls.js` loaded with `?t=<timestamp>` query param.
- iframe `sandbox` attribute is permissive (allow-scripts, allow-same-origin, allow-popups, etc.).
- `.version.txt` must be updated manually for releases.
