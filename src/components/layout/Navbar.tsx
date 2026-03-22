import Link from 'next/link'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

interface NavItem {
  label: string
  href: string
}

interface NavbarProps {
  items?: NavItem[]
}

const defaultItems: NavItem[] = [
  { label: 'Acerca', href: '#about' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '#contact' },
]

export function Navbar({ items = defaultItems }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/5 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-syne)] text-base font-bold tracking-tight text-foreground hover:opacity-60 transition-opacity"
        >
          kd.
        </Link>
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
