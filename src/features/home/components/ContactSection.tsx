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
      <div className="relative overflow-hidden rounded-3xl border border-turquoise/20 bg-slate/10 px-8 py-20 text-center md:px-16">
        {/* Glow de fondo */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-turquoise/5 to-transparent"
        />

        <div className="relative z-10 space-y-8 max-w-lg mx-auto">
          <AnimateIn>
            <p className="font-mono text-xs tracking-widest uppercase text-turquoise">
              — Contact
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Let&apos;s build<br />
              <span className="text-turquoise">something great</span>
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-steel leading-relaxed">
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
                        className="font-mono text-xs text-steel hover:text-turquoise transition-colors"
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

        {formEnabled && <form>{/* Contact form — coming soon */}</form>}
      </div>
    </Section>
  )
}
