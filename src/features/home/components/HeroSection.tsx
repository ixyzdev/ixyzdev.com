import type { SocialLink } from '@/types'
import { Button } from '@/components/ui'
import { AnimateIn } from '@/components/ui/AnimateIn'

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
  ctaLabel = 'Ver proyectos',
  ctaHref = '#projects',
  socialLinks = [],
}: HeroSectionProps) {
  const [firstName, ...rest] = name.split(' ')
  const lastName = rest.join(' ')

  return (
    <section id="hero" className="flex min-h-screen items-center">
      <div className="w-full max-w-5xl mx-auto px-6 pt-24 pb-16">
        <AnimateIn delay={0} variant="fade">
          <p className="mb-6 font-mono text-xs text-foreground/30 tracking-widest uppercase">
            Hola, soy
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1} variant="slide-up">
          <h1 className="font-[family-name:var(--font-syne)] text-[clamp(3.5rem,10vw,8rem)] font-extrabold leading-[0.9] tracking-tight text-foreground">
            {firstName}
            <br />
            {lastName}
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.25} variant="slide-up">
          <p className="mt-8 font-[family-name:var(--font-syne)] text-2xl font-medium text-foreground/50 md:text-3xl">
            {headline}
          </p>
        </AnimateIn>

        {subheadline && (
          <AnimateIn delay={0.35} variant="slide-up">
            <p className="mt-4 max-w-xl text-base leading-relaxed text-foreground/35">
              {subheadline}
            </p>
          </AnimateIn>
        )}

        <AnimateIn delay={0.5} variant="fade">
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <a href={ctaHref}>{ctaLabel}</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#contact">Contactar</a>
            </Button>
            {socialLinks.length > 0 && (
              <ul className="flex items-center gap-5 ml-2">
                {socialLinks.map((link) => (
                  <li key={link.icon}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-foreground/30 hover:text-foreground transition-colors"
                    >
                      {link.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </AnimateIn>
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent"
      />
    </section>
  )
}
