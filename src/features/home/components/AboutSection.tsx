import { Section } from '@/components/layout/Section'
import { Badge } from '@/components/ui'

interface AboutSectionProps {
  bio: string
  avatarUrl?: string
  skills?: string[]
}

export function AboutSection({ bio, avatarUrl, skills = [] }: AboutSectionProps) {
  return (
    <Section id="about" className="border-t border-border">
      <div className="grid gap-12 md:grid-cols-[1fr_auto]">
        <div className="space-y-6">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted">
            About
          </h2>
          <p className="max-w-prose text-base leading-relaxed text-foreground/80">
            {bio}
          </p>
          {skills.length > 0 && (
            <div className="space-y-3">
              <p className="text-xs text-muted">Tech I work with</p>
              <ul className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li key={skill}>
                    <Badge variant="muted">{skill}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {avatarUrl && (
          <div className="order-first md:order-last">
            <img
              src={avatarUrl}
              alt="Avatar"
              className="size-32 rounded-full object-cover grayscale"
            />
          </div>
        )}
      </div>
    </Section>
  )
}
