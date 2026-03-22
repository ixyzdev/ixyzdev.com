import type { LucideIcon } from 'lucide-react'
import { Badge } from '@/components/ui'

export interface StackCategory {
  name: string
  Icon: LucideIcon
  technologies: string[]
}

interface StackCardProps {
  category: StackCategory
}

export function StackCard({ category: { name, Icon, technologies } }: StackCardProps) {
  return (
    <div className="rounded-xl border border-foreground/8 bg-foreground/[0.015] p-5 space-y-4 transition-colors hover:border-foreground/15">
      <div className="flex items-center gap-2.5">
        <Icon size={13} strokeWidth={1.5} className="shrink-0 text-foreground/35" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/35">
          {name}
        </span>
      </div>
      <ul className="flex flex-wrap gap-1.5">
        {technologies.map((tech) => (
          <li key={tech}>
            <Badge variant="muted">{tech}</Badge>
          </li>
        ))}
      </ul>
    </div>
  )
}
