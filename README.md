This is the personal blog/portfolio for Paul Coroneos

## Technologies used

- Astro
- React
- Tailwind
- Vitest
- Playwright (with axe accessibility checks)

## Development

Use the Node version in `.nvmrc`, then:

```bash
pnpm install
pnpm run dev        # local dev server
pnpm run test       # unit tests (Vitest)
pnpm exec playwright install chromium  # once, before the first E2E run
pnpm run test:e2e   # builds the site and runs end-to-end tests (Playwright)
```

Pushes to `main` deploy to GitHub Pages once CI passes.
