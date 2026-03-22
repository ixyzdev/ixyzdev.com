import { Section } from '@/components/layout/Section'
import { Badge } from '@/components/ui'
import { AnimateIn } from '@/components/ui/AnimateIn'

interface AboutSectionProps {
  bio: string
  avatarUrl?: string
  skills?: string[]
}

export function AboutSection({ bio, avatarUrl, skills = [] }: AboutSectionProps) {
  return (
    <Section id="about">
      <div className="grid gap-16 md:grid-cols-[1fr_280px]">
        <div className="space-y-8">
          <AnimateIn>
            <p className="font-mono text-xs text-foreground/30 tracking-widest uppercase">
              — About
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="font-[family-name:var(--font-syne)] text-2xl font-medium leading-relaxed md:text-3xl">
              {bio}
            </p>
          </AnimateIn>
          {skills.length > 0 && (
            <AnimateIn delay={0.2}>
              <div className="space-y-3">
                <p className="font-mono text-xs text-foreground/25 uppercase tracking-widest">
                  Stack
                </p>
                <ul className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <li key={skill}>
                      <Badge variant="muted">{skill}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          )}
        </div>

        {avatarUrl && (
          <AnimateIn delay={0.15} variant="fade" className="flex items-start justify-center md:justify-end">
            <img
              src={avatarUrl}
              alt="Kevin Díaz"
              className="size-48 rounded-2xl object-cover ring-1 ring-foreground/10"
            />
          </AnimateIn>
        )}
      </div>
    </Section>
  )
}
