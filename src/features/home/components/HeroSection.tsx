import type { SocialLink } from '@/types'
import { AnimateIn } from '@/components/ui/AnimateIn'

interface HeroSectionProps {
  name: string
  headline: string
  subheadline?: string
  avatarUrl?: string
  ctaHref?: string
  socialLinks?: SocialLink[]
}

export function HeroSection({
  name,
  headline,
  subheadline,
  avatarUrl,
  ctaHref = '#projects',
  socialLinks = [],
}: HeroSectionProps) {
  const [firstName, ...rest] = name.split(' ')
  const lastName = rest.join(' ')

  return (
    <section
      id="hero"
      className="relative flex min-h-screen overflow-hidden"
    >
      {/* ── Columna texto ─────────────────── */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-8 pb-16 pt-32 md:px-12 lg:px-20">

        <AnimateIn delay={0} variant="fade">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/30">
            {headline}
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1} variant="slide-up">
          <h1 className="font-[family-name:var(--font-syne)] text-[clamp(4rem,8vw,6.5rem)] font-bold leading-[0.95] tracking-normal">
            {firstName}
            <br />
            {lastName}
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.25} variant="fade">
          <div className="my-8 h-px w-16 bg-foreground/20" />
        </AnimateIn>

        {subheadline && (
          <AnimateIn delay={0.3} variant="slide-up">
            <p className="max-w-xs text-sm leading-relaxed text-foreground/40">
              {subheadline}
            </p>
          </AnimateIn>
        )}

        <AnimateIn delay={0.45} variant="fade">
          <div className="mt-10 flex flex-col gap-5">
            <a
              href={ctaHref}
              className="group flex w-fit items-center gap-2 font-[family-name:var(--font-syne)] text-sm font-semibold text-foreground transition-opacity hover:opacity-50"
            >
              Ver proyectos
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            {socialLinks.length > 0 && (
              <ul className="flex items-center gap-5">
                {socialLinks.map((link) => (
                  <li key={link.icon}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-foreground/25 transition-colors hover:text-foreground"
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

      {/* ── Foto — sangra hasta el borde derecho ── */}
      <AnimateIn
        delay={0.15}
        variant="fade"
        className="hidden md:block md:w-[38vw] lg:w-[42vw] shrink-0"
      >
        <div className="h-full min-h-screen">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt="Kevin Díaz"
              className="h-full w-full object-cover object-center"
            />
          ) : (
            /* Placeholder: agrega avatarUrl="/images/foto.jpg" en HomeView */
            <div className="flex h-full w-full flex-col justify-end bg-foreground/[0.04] p-10">
              <span
                aria-hidden
                className="select-none font-[family-name:var(--font-syne)] text-[8rem] font-extrabold leading-none text-foreground/8"
              >
                KD
              </span>
            </div>
          )}
        </div>
      </AnimateIn>

      {/* Línea divisoria vertical entre columnas */}
      <div
        aria-hidden
        className="absolute bottom-0 right-[38vw] top-0 hidden w-px bg-foreground/5 md:block lg:right-[42vw]"
      />
    </section>
  )
}
