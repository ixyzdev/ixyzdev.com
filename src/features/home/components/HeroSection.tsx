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
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Blobs de fondo */}
      <div
        aria-hidden
        className="animate-blob absolute -top-32 -left-32 h-[600px] w-[600px] rounded-full bg-turquoise opacity-[0.06] blur-[120px]"
      />
      <div
        aria-hidden
        className="animate-blob animation-delay-3s absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-slate opacity-[0.12] blur-[100px]"
      />
      <div
        aria-hidden
        className="animate-blob animation-delay-6s absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-turquoise opacity-[0.04] blur-[80px]"
      />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-24 pb-16">
        <AnimateIn delay={0} variant="fade">
          <p className="mb-6 font-mono text-sm text-steel tracking-widest uppercase">
            Hola, soy
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1} variant="slide-up">
          <h1 className="font-[family-name:var(--font-syne)] text-[clamp(3.5rem,10vw,8rem)] font-extrabold leading-[0.9] tracking-tight">
            <span className="text-foreground">{firstName}</span>
            <br />
            <span className="text-turquoise">{lastName}</span>
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.25} variant="slide-up">
          <p className="mt-8 font-[family-name:var(--font-syne)] text-2xl font-medium text-white/80 md:text-3xl">
            {headline}
          </p>
        </AnimateIn>

        {subheadline && (
          <AnimateIn delay={0.35} variant="slide-up">
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/50">
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
              <ul className="flex items-center gap-4 ml-2">
                {socialLinks.map((link) => (
                  <li key={link.icon}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-white/50 hover:text-turquoise transition-colors"
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

      {/* Línea decorativa inferior */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-turquoise/30 to-transparent"
      />
    </section>
  )
}
