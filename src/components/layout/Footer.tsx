import type { SocialLink } from '@/types'

interface FooterProps {
  socialLinks?: SocialLink[]
}

const defaultLinks: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com', icon: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
]

export function Footer({ socialLinks = defaultLinks }: FooterProps) {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
        <p className="text-xs text-muted">
          © {new Date().getFullYear()} ixyz.dev
        </p>
        <ul className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <li key={link.icon}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
