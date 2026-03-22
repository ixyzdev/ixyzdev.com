'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { SquareCode } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

interface NavChild {
  label: string
  href: string
}

interface NavItem {
  label: string
  href: string
  children?: NavChild[]
}

interface NavbarProps {
  items?: NavItem[]
}

const defaultItems: NavItem[] = [
  { label: 'Acerca', href: '/#about' },
  { label: 'Stack', href: '/#stack' },
  { label: 'Experiencia', href: '/#experience' },
  {
    label: 'Blog',
    href: '/#blog',
    children: [
      { label: 'Todos los artículos', href: '/blog' },
    ],
  },
  { label: 'Contacto', href: '/#contact' },
]

export function Navbar({ items = defaultItems }: NavbarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState<string | null>(null)

  function scrollToId(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  function handleHome() {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
    }
  }

  function handleNavClick(e: React.MouseEvent, href: string) {
    setOpen(null)
    const hash = href.startsWith('/#') ? href.slice(2) : null
    if (!hash) return
    if (pathname === '/') {
      e.preventDefault()
      scrollToId(hash)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/5 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <button
          onClick={handleHome}
          className="flex items-center gap-2 font-[family-name:var(--font-syne)] text-base font-bold tracking-tight text-foreground hover:opacity-60 transition-opacity"
        >
          <SquareCode size={16} strokeWidth={1.5} className="text-foreground/50" />
          ixyzdev
        </button>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {items.map((item) => (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpen(item.href)}
                onMouseLeave={() => setOpen(null)}
              >
                <Link
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm text-foreground/40 hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>

                {/* Dropdown */}
                {item.children && open === item.href && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                    <div className="min-w-[160px] rounded-xl border border-foreground/8 bg-background/95 backdrop-blur-md py-1.5 shadow-lg">
                      {/* Separador visual: el item principal */}
                      <div className="px-4 py-2 border-b border-foreground/6">
                        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-foreground/25">
                          {item.label}
                        </span>
                      </div>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(null)}
                          className="block px-4 py-2.5 text-sm text-foreground/50 hover:text-foreground hover:bg-foreground/[0.04] transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
