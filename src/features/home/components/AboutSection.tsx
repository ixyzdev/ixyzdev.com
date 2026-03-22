import { Section } from '@/components/layout/Section'
import { AnimateIn } from '@/components/ui/AnimateIn'
import { StackCard } from './StackCard'
import type { StackCategory } from './StackCard'

interface AboutSectionProps {
  bio: string
  avatarUrl?: string
  stackCategories?: StackCategory[]
}

export function AboutSection({
  bio,
  avatarUrl,
  stackCategories = [],
}: AboutSectionProps) {
  return (
    <Section id="about">
      <div className="space-y-16">

        {/* Bio */}
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

        {/* Stack categorizado */}
        {stackCategories.length > 0 && (
          <div className="space-y-4">
            <AnimateIn>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/25">
                — Stack
              </p>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {stackCategories.map((category) => (
                  <StackCard key={category.name} category={category} />
                ))}
              </div>
            </AnimateIn>
          </div>
        )}

      </div>
    </Section>
  )
}
