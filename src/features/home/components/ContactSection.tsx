'use client'

import { useState } from 'react'
import { Section } from '@/components/layout/Section'
import { AnimateIn } from '@/components/ui/AnimateIn'

export function ContactSection() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value
    const subject = encodeURIComponent('Contacto desde ixyzdev.com')
    const body = encodeURIComponent(`De: ${email}\n\n${message}`)
    window.location.href = `mailto:ixzy.dev@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <Section id="contact">
      <AnimateIn>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/25">
          — Contacto
        </p>
      </AnimateIn>

      <div className="mt-10 mx-auto w-full max-w-lg space-y-8 text-center">
        <AnimateIn delay={0.1}>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl font-bold leading-tight md:text-5xl">
            Construyamos<br />algo grande
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="text-base leading-relaxed text-foreground/40">
            ¿Tienes un proyecto en mente? Escríbeme, siempre estoy abierto a nuevas ideas.
          </p>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          {sent ? (
            <p className="font-mono text-sm text-foreground/50">
              Abriendo tu cliente de correo...
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="w-full space-y-4 text-left">
              <div className="space-y-1.5">
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-[0.15em] text-foreground/30">
                  Tu correo
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  className="w-full rounded-lg border border-foreground/10 bg-foreground/[0.03] px-4 py-3 text-base text-foreground placeholder:text-foreground/20 outline-none focus:border-foreground/25 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="font-mono text-xs uppercase tracking-[0.15em] text-foreground/30">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="w-full resize-none rounded-lg border border-foreground/10 bg-foreground/[0.03] px-4 py-3 text-base text-foreground placeholder:text-foreground/20 outline-none focus:border-foreground/25 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-2 font-[family-name:var(--font-syne)] text-base font-bold text-foreground transition-opacity hover:opacity-50"
              >
                Enviar mensaje
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </form>
          )}
        </AnimateIn>
      </div>
    </Section>
  )
}
