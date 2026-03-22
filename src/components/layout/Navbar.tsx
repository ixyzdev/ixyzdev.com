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
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar({ items = defaultItems }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-syne)] text-base font-bold tracking-tight text-turquoise hover:opacity-80 transition-opacity"
        >
          kd.
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-steel hover:text-foreground transition-colors"
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
