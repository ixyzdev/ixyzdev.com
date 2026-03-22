import type { SocialLink } from '@/types'
import { Button } from '@/components/ui'
import { AnimateIn } from '@/components/ui/AnimateIn'

interface HeroSectionProps {
  name: string
  headline: string
  subheadline?: string
  avatarUrl?: string
  ctaLabel?: string
  ctaHref?: string
  socialLinks?: SocialLink[]
}

export function HeroSection({
  name,
  headline,
  subheadline,
  avatarUrl,
  ctaLabel = 'Ver proyectos',
  ctaHref = '#projects',
  socialLinks = [],
}: HeroSectionProps) {
  const [firstName, ...rest] = name.split(' ')
  const lastName = rest.join(' ')

  return (
    <section id="hero" className="flex min-h-screen items-center">
      <div className="w-full max-w-5xl mx-auto px-6 pt-28 pb-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_260px] md:items-center">

          {/* — Texto */}
          <div>
            <AnimateIn delay={0} variant="fade">
              <p className="mb-5 font-mono text-xs text-foreground/30 tracking-widest uppercase">
                Hola, soy
              </p>
            </AnimateIn>

            <AnimateIn delay={0.1} variant="slide-up">
              <h1 className="font-[family-name:var(--font-syne)] text-[clamp(3rem,9vw,7rem)] font-extrabold leading-[0.9] tracking-tight">
                {firstName}
                <br />
                {lastName}
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.2} variant="slide-up">
              <p className="mt-6 font-[family-name:var(--font-syne)] text-xl font-medium text-foreground/50 md:text-2xl">
                {headline}
              </p>
            </AnimateIn>

            {subheadline && (
              <AnimateIn delay={0.3} variant="slide-up">
                <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/35">
                  {subheadline}
                </p>
              </AnimateIn>
            )}

            <AnimateIn delay={0.45} variant="fade">
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg">
                  <a href={ctaHref}>{ctaLabel}</a>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <a href="#contact">Contactar</a>
                </Button>
                {socialLinks.length > 0 && (
                  <ul className="flex items-center gap-4 ml-1">
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

          {/* — Foto */}
          <AnimateIn
            delay={0.2}
            variant="fade"
            className="order-first md:order-last flex justify-center md:justify-end"
          >
            <div className="relative h-72 w-56 overflow-hidden rounded-2xl border border-foreground/10 md:h-80 md:w-64">
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt="Kevin Díaz"
                  className="h-full w-full object-cover"
                />
              ) : (
                /* Placeholder — reemplazar con avatarUrl="/images/foto.jpg" en HomeView */
                <div className="flex h-full w-full items-end bg-foreground/5 p-5">
                  <span className="font-[family-name:var(--font-syne)] text-5xl font-extrabold leading-none text-foreground/15 select-none">
                    KD
                  </span>
                </div>
              )}
            </div>
          </AnimateIn>

        </div>
      </div>

      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/8 to-transparent"
      />
    </section>
  )
}
