'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { SquareCode } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  items?: NavItem[]
}

const defaultItems: NavItem[] = [
  { label: 'Acerca', href: '/#about' },
  { label: 'Stack', href: '/#stack' },
  { label: 'Experiencia', href: '/#experience' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Contacto', href: '/#contact' },
]

export function Navbar({ items = defaultItems }: NavbarProps) {
  const pathname = usePathname()
  const router = useRouter()

  function handleHome() {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      router.push('/')
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
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-foreground/40 hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
