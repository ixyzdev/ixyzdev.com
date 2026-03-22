import type { SocialLink } from '@/types'

interface FooterProps {
  socialLinks?: SocialLink[]
}

const defaultLinks: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/IxyzDev', icon: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/ixyzdev', icon: 'linkedin' },
]

export function Footer({ socialLinks = defaultLinks }: FooterProps) {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
        <p className="font-mono text-xs text-steel/60">
          © {new Date().getFullYear()} Kevin Díaz
        </p>
        <ul className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <li key={link.icon}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-steel hover:text-turquoise transition-colors"
              >
                {link.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
