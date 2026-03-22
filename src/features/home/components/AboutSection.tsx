import { Section } from '@/components/layout/Section'
import { AnimateIn } from '@/components/ui/AnimateIn'

interface AboutSectionProps {
  bio: string
  avatarUrl?: string
}

export function AboutSection({ bio, avatarUrl }: AboutSectionProps) {
  return (
    <Section id="about">
      <div className="grid gap-12 md:grid-cols-[1fr_220px]">
        <div className="space-y-6">
          <AnimateIn>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/30">
              — Acerca
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="font-[family-name:var(--font-syne)] text-2xl font-medium leading-relaxed md:text-3xl">
              {bio}
            </p>
          </AnimateIn>
        </div>
        {avatarUrl && (
          <AnimateIn delay={0.15} variant="fade" className="flex items-start justify-center md:justify-end">
            <img
              src={avatarUrl}
              alt="Kevin Díaz"
              className="size-44 rounded-2xl object-cover ring-1 ring-foreground/10"
            />
          </AnimateIn>
        )}
      </div>
    </Section>
  )
}
