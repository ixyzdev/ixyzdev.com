import { Section } from '@/components/layout/Section'
import { AnimateIn } from '@/components/ui/AnimateIn'

interface AboutSectionProps {
  bio: string
  avatarUrl?: string
}

export function AboutSection({ bio, avatarUrl }: AboutSectionProps) {
  return (
    <Section id="about">
      <div className="mx-auto max-w-2xl space-y-8 text-center">
        <AnimateIn>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/30">
            — Acerca
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <p className="font-[family-name:var(--font-syne)] text-2xl font-medium leading-relaxed text-foreground/85 md:text-3xl">
            {bio}
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
