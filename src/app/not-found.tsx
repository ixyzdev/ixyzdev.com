import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-8">

      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/25">
        — Error 404
      </p>

      <h1 className="mt-6 font-[family-name:var(--font-syne)] text-[clamp(6rem,18vw,14rem)] font-bold leading-none text-foreground/8 select-none">
        404
      </h1>

      <p className="mt-[-1rem] font-[family-name:var(--font-syne)] text-2xl font-medium text-foreground/70">
        Página no encontrada
      </p>

      <p className="mt-4 max-w-sm text-center font-mono text-xs leading-relaxed text-foreground/30">
        La página que buscas no existe o fue movida.
      </p>

      <div className="mt-10 h-px w-12 bg-foreground/15" />

      <Link
        href="/"
        className="mt-10 group flex items-center gap-2 font-[family-name:var(--font-syne)] text-sm font-semibold text-foreground transition-opacity hover:opacity-50"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
        Volver al inicio
      </Link>

    </section>
  )
}
