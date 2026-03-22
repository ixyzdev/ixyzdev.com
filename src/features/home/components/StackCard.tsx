import type { LucideIcon } from 'lucide-react'

export interface TechEntry {
  name: string
  role: string
}

export interface TechStack {
  name: string
  description: string
  technologies: TechEntry[]
  Icon: LucideIcon
}

interface StackCardProps {
  stack: TechStack
}

export function StackCard({ stack: { name, description, technologies, Icon } }: StackCardProps) {
  return (
    <div className="group rounded-2xl border border-foreground/8 bg-foreground/[0.02] p-6 space-y-5 transition-colors hover:border-foreground/15 hover:bg-foreground/[0.035]">

      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-2.5">
          <Icon size={14} strokeWidth={1.5} className="shrink-0 text-foreground/40" />
          <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-foreground/90 leading-none">
            {name}
          </h3>
        </div>
        <p className="font-mono text-xs leading-relaxed text-foreground/30">
          {description}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-foreground/6" />

      {/* Technologies — name + role */}
      <ul className="space-y-2.5">
        {technologies.map(({ name: tech, role }) => (
          <li key={tech} className="flex items-baseline justify-between gap-4">
            <span className="font-mono text-sm font-medium text-foreground/70 group-hover:text-foreground/85 transition-colors shrink-0">
              {tech}
            </span>
            <span className="font-mono text-xs text-foreground/25 text-right">
              {role}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
