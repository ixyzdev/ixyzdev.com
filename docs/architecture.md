# Architecture

## Feature-based structure

Each feature is a self-contained module under `src/features/<feature-name>/`. It owns everything related to that domain: views, components, hooks, types, and utilities.

```
src/features/<feature>/
├── views/          # Top-level page compositions (rendered by app router pages)
├── components/     # UI components scoped to this feature
├── hooks/          # React hooks scoped to this feature
├── types/          # TypeScript types and interfaces
└── utils/          # Helper functions
```

`src/app/` pages are intentionally thin — they only import and render the corresponding feature view:

```tsx
// src/app/page.tsx
import { HomeView } from "@/features/home/views/HomeView"
export default function HomePage() {
  return <HomeView />
}
```

This keeps the App Router as a routing layer only, separating routing concerns from UI logic.

---

## C4 Model

### Level 1 — System Context

```mermaid
C4Context
  title System Context — ixyzdev.com

  Person(visitor, "Visitor", "Anyone browsing the site")

  System(web, "ixyzdev.com", "Personal portfolio and dev site built with Next.js")

  Rel(visitor, web, "Visits", "HTTPS")
```

---

### Level 2 — Containers

```mermaid
C4Container
  title Containers — ixyzdev.com

  Person(visitor, "Visitor")

  System_Boundary(site, "ixyzdev.com") {
    Container(nextapp, "Next.js App", "Next.js 16, React 19, TypeScript", "Renders all pages via App Router. Statically generated or server-rendered.")
    Container(styles, "Global Styles", "Tailwind CSS v4", "Design tokens, base styles, dark mode via CSS custom properties")
  }

  Rel(visitor, nextapp, "Requests pages", "HTTPS")
  Rel(nextapp, styles, "Imports", "@import tailwindcss")
```

---

### Level 3 — Components (Next.js App)

```mermaid
C4Component
  title Components — Next.js App

  Container_Boundary(nextapp, "Next.js App") {

    Component(approuter, "App Router", "src/app/", "Defines routes, layouts, and metadata. Thin layer — delegates rendering to feature views.")
    Component(layout, "Root Layout", "src/app/layout.tsx", "Applies global fonts (Geist) and imports global CSS. Wraps all pages.")

    Component(homefeature, "Home Feature", "src/features/home/", "All UI, logic, and types for the home/landing page.")
    Component(homeview, "HomeView", "src/features/home/views/HomeView.tsx", "Top-level composition component for the home page.")
  }

  Rel(approuter, layout, "Wrapped by")
  Rel(approuter, homeview, "Renders on /")
  Rel(homefeature, homeview, "Exports")
```

---

### Conventions for new features

When adding a new route (e.g. `/about`):

1. Create `src/features/about/views/AboutView.tsx`
2. Create `src/app/about/page.tsx` that only imports and renders `<AboutView />`
3. Add sub-directories (`components/`, `hooks/`, etc.) only as needed — don't create empty folders upfront
