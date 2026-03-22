# ixyzdev.com

Portfolio personal de **Kevin Díaz Cantillano** — Ingeniero Civil Informático.

Diseñado con un enfoque editorial minimalista: tipografía prominente, paleta monocromática y animaciones sutiles al hacer scroll. Construido con las mismas tecnologías que usa día a día.

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI | React 19 + Tailwind CSS v4 |
| Lenguaje | TypeScript |
| Fuente display | Cormorant Garamond |
| Fuente mono | Geist Mono |
| Animaciones | Framer Motion |
| Blog | MDX via `next-mdx-remote` |
| Iconos | Lucide React |
| Tema | next-themes (dark por defecto) |
| Compilador | React Compiler (`reactCompiler: true`) |

---

## Estructura

```
src/
├── app/                  # Rutas Next.js (capas delgadas)
├── features/
│   ├── home/
│   │   ├── views/        # HomeView — datos + composición
│   │   └── components/   # HeroSection, AboutSection, StackSection...
│   ├── blog/             # BlogListView, PostBody, lib/posts.ts
│   └── projects/         # ProjectCard, página de detalle
├── components/
│   ├── layout/           # Navbar, Footer, Section
│   ├── ui/               # AnimateIn, Badge, Button, ThemeToggle
│   └── providers/        # ThemeProvider
├── lib/                  # encode-email, utilidades
├── styles/               # globals.css — paleta y variables CSS
└── types/                # Project, SocialLink, etc.

content/
└── posts/                # Artículos del blog en formato MDX
```

---

## Desarrollo

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Build de producción
npm run lint      # ESLint
```

---

## Agregar contenido

**Nueva entrada de blog** — crear un archivo `.mdx` en `content/posts/`:

```mdx
---
title: 'Título del artículo'
date: '2025-01-01'
summary: 'Descripción breve.'
---

Contenido en Markdown...
```

**Foto de perfil** — colocar la imagen en `public/images/foto.jpg` y descomentar la línea en `src/features/home/views/HomeView.tsx`:

```tsx
// avatarUrl="/images/foto.jpg"
```

---

## Secciones

| # | Sección | Anchor |
|---|---|---|
| 1 | Hero | `#hero` |
| 2 | Acerca | `#about` |
| 3 | Stack | `#stack` |
| 4 | Experiencia | `#experience` |
| 5 | Blog | `#blog` |
| 6 | Contacto | `#contact` |

---

## Licencia

MIT — siéntete libre de usar este proyecto como base para tu propio portfolio.
