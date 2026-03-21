import type { SocialLink } from '@/types'
import { Section } from '@/components/layout/Section'
import { ObfuscatedEmail } from '@/components/ui/ObfuscatedEmail'

interface ContactSectionProps {
  // Receive the email already encoded with encodeEmail() — never plain text
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
    <Section id="contact" className="border-t border-border">
      <div className="space-y-8 text-center max-w-lg mx-auto">
        <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted">
          Contact
        </h2>
        <p className="text-3xl font-semibold tracking-tight text-foreground">
          Let&apos;s work together
        </p>
        <p className="text-muted text-sm leading-relaxed">
          Have a project in mind or just want to say hi? My inbox is open.
        </p>
        <div className="flex flex-col items-center gap-4">
          <ObfuscatedEmail encoded={encodedEmail} />
          {socialLinks.length > 0 && (
            <ul className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <li key={link.icon}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        {formEnabled && <form>{/* Contact form — coming soon */}</form>}
      </div>
    </Section>
  )
}
