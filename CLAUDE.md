# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

No test runner is configured yet.

## Architecture

Next.js 16 App Router project with React 19, TypeScript, and Tailwind CSS v4. The React Compiler is enabled (`reactCompiler: true` in `next.config.ts`).

### Directory structure

- `src/app/` — Next.js App Router: layouts, pages, and the favicon. Pages are thin wrappers that delegate to feature views.
- `src/features/` — Feature-based modules. Each feature owns its own views, components, and logic. Example: `src/features/home/views/HomeView.tsx` is rendered by `src/app/page.tsx`.
- `src/styles/globals.css` — Global styles. Imports Tailwind v4 via `@import "tailwindcss"` and defines CSS custom properties for background/foreground colors (with dark mode support via `prefers-color-scheme`).

### Path alias

`@/*` maps to `./src/*` — use this for all internal imports.

### Code style

Prettier is configured (`.prettierrc`) with: single quotes, no semicolons, 2-space indent, trailing commas off, `prettier-plugin-tailwindcss` for class sorting.
