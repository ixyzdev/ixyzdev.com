import type { SocialLink } from '@/types'
import { Section } from '@/components/layout/Section'
import { ObfuscatedEmail } from '@/components/ui/ObfuscatedEmail'
import { AnimateIn } from '@/components/ui/AnimateIn'

interface ContactSectionProps {
  encodedEmail: string
  socialLinks?: SocialLink[]
  formEnabled?: boolean
}

export function ContactSection({
  encodedEmail,
  socialLinks = [],
  formEnabled = false,
}: ContactSectionProps) {
  return (
    <Section id="contact">
      <div className="space-y-10 text-center max-w-lg mx-auto">
        <AnimateIn>
          <p className="font-mono text-xs text-foreground/30 tracking-widest uppercase">
            — Contact
          </p>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight md:text-5xl">
            Let&apos;s build<br />something great
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <p className="text-foreground/40 leading-relaxed">
            ¿Tienes un proyecto en mente? Escríbeme, siempre estoy abierto a nuevas ideas.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.3}>
          <div className="flex flex-col items-center gap-4">
            <ObfuscatedEmail encoded={encodedEmail} />
            {socialLinks.length > 0 && (
              <ul className="flex items-center gap-5">
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
        {formEnabled && <form>{/* Contact form — coming soon */}</form>}
      </div>
    </Section>
  )
}
