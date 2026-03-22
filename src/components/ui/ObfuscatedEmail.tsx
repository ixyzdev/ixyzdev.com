'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'

interface ObfuscatedEmailProps {
  // Pass the email encoded with encodeEmail() — never as plain text
  encoded: string
  className?: string
}

/**
 * Renders a mailto anchor only on the client (never in static HTML).
 * Accepts the email pre-encoded with encodeEmail() to avoid plain text
 * appearing in the JS bundle.
 */
export function ObfuscatedEmail({ encoded, className }: ObfuscatedEmailProps) {
  const [email, setEmail] = useState<string | null>(null)

  useEffect(() => {
    setEmail(Buffer.from(encoded, 'base64').toString('utf-8'))
  }, [encoded])

  if (!email) {
    return (
      <span
        aria-hidden
        className={cn(
          'inline-flex select-none items-center justify-center rounded-md px-6 py-3 text-base',
          'bg-foreground/10 text-transparent blur-sm',
          className
        )}
      >
        loading
      </span>
    )
  }

  const subject = encodeURIComponent('Hola Kevin — me gustaría contactarte')
  const body = encodeURIComponent('Hola Kevin,\n\nTe escribo porque...\n\nSaludos,\n')
  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(email)}&su=${subject}&body=${body}`

  return (
    <a
      href={gmailUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-all',
        'bg-foreground text-background hover:opacity-80',
        className
      )}
    >
      {email}
    </a>
  )
}
