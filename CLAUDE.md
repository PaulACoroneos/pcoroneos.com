# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm run dev          # Start dev server
pnpm run build        # Production build (outputs to /dist)
pnpm run start        # Preview production build
pnpm run lint         # Run ESLint
pnpm run lint:fix     # ESLint with auto-fix
pnpm run format       # Prettier formatting
pnpm run test         # Run Vitest (all tests)
```

Run a single test file: `pnpm run test tests/post-parsing.spec.ts`

The pre-commit hook runs lint-staged and all tests automatically.

## Architecture

This is an **Astro static site** (pcoroneos.com) — a personal blog/portfolio. All pages are pre-built at build time.

### Routing

- `src/pages/` — Astro file-based routing
- `src/pages/blog/[...slug].astro` — dynamic catch-all for all blog post routes
- `src/pages/rss.xml.ts` — RSS feed generated at build time

### Content

Blog posts live in `app/blog/[category]/[post-slug]/page.mdx`. Each post uses export-based metadata (not YAML frontmatter):

```typescript
export const meta = {
  title: "Post Title",
  description: "Short description",
  date: "2019-08-19",
  tags?: ["tag1"],
  discussion?: "https://..."
};
```

`src/lib/posts.ts` uses `import.meta.glob()` to discover all MDX files at build time and extract metadata. `src/lib/post-parsing.ts` handles excerpt extraction and link normalization.

### Key directories

- `src/layouts/` — BaseLayout (HTML shell) and PostLayout (blog post wrapper)
- `src/components/` — Shared Astro components (Header, Footer, Card, etc.)
- `src/lib/` — TypeScript utilities for post discovery and parsing
- `app/blog/` — All MDX blog post content
- `css/` — Global styles (Tailwind directives + Night Owl syntax theme)
- `public/blog-assets/` — Images used in blog posts
- `tests/` — Vitest unit tests

### MDX Components

`mdx-components.tsx` (root) and `src/lib/mdx-components.tsx` provide custom element handlers for code blocks and images used within MDX content.

### Redirects

`astro.config.mjs` contains 40+ URL redirects mapping old routes to the current blog structure. Add new redirects there when moving/renaming posts.

## Deployment

Pushing to `main` triggers the `deploy.yml` GitHub Actions workflow which builds and deploys to GitHub Pages automatically. The `main-ci.yml` workflow runs lint + build on all PRs.
