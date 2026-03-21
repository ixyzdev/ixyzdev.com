import type { SocialLink } from '@/types'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui'

interface HeroSectionProps {
  name: string
  headline: string
  subheadline?: string
  ctaLabel?: string
  ctaHref?: string
  socialLinks?: SocialLink[]
}

export function HeroSection({
  name,
  headline,
  subheadline,
  ctaLabel = 'See my work',
  ctaHref = '#projects',
  socialLinks = [],
}: HeroSectionProps) {
  return (
    <Section id="hero" className="flex min-h-[calc(100vh-65px)] flex-col justify-center py-0">
      <div className="max-w-2xl space-y-6">
        <p className="font-mono text-sm text-muted">Hi, I&apos;m</p>
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          {name}
        </h1>
        <p className="text-2xl font-medium text-muted sm:text-3xl">{headline}</p>
        {subheadline && (
          <p className="text-base text-muted leading-relaxed">{subheadline}</p>
        )}
        <div className="flex items-center gap-4 pt-2">
          <Button asChild size="lg">
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {socialLinks.length > 0 && (
            <ul className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <li key={link.icon}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Section>
  )
}
