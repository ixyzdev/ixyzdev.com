import { Section } from '@/components/layout/Section'
import { AnimateIn } from '@/components/ui/AnimateIn'

interface AboutSectionProps {
  bio: string
  avatarUrl?: string
}

export function AboutSection({ bio, avatarUrl }: AboutSectionProps) {
  return (
    <Section id="about">
      <AnimateIn>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/30">
          — Acerca
        </p>
      </AnimateIn>
      <div className="mx-auto mt-8 max-w-2xl space-y-8">
        <AnimateIn delay={0.1}>
          <p className="text-center font-[family-name:var(--font-syne)] text-2xl font-medium italic leading-relaxed text-foreground/85 md:text-3xl">
            "{bio}"
          </p>
        </AnimateIn>
        {avatarUrl && (
          <AnimateIn delay={0.15} variant="fade">
            <img
              src={avatarUrl}
              alt="Kevin Díaz"
              className="mx-auto size-28 rounded-2xl object-cover ring-1 ring-foreground/10"
            />
          </AnimateIn>
        )}
      </div>
    </Section>
  )
}
