import { Badge } from '@/components/ui'

interface ProjectTechStackProps {
  stack: string[]
  limit?: number
}

export function ProjectTechStack({ stack, limit }: ProjectTechStackProps) {
  const visible = limit ? stack.slice(0, limit) : stack
  const hidden = limit ? stack.length - limit : 0

  return (
    <ul className="flex flex-wrap gap-1.5">
      {visible.map((tech) => (
        <li key={tech}>
          <Badge variant="muted">{tech}</Badge>
        </li>
      ))}
      {hidden > 0 && (
        <li>
          <Badge variant="outline">+{hidden}</Badge>
        </li>
      )}
    </ul>
  )
}
