import type { Project } from '@/types'
import { Section } from '@/components/layout/Section'
import { ProjectCard } from '@/features/projects/components/ProjectCard'

interface ProjectsSectionProps {
  projects: Project[]
  title?: string
  showAll?: boolean
}

export function ProjectsSection({
  projects,
  title = 'Projects',
  showAll = false,
}: ProjectsSectionProps) {
  const visible = showAll ? projects : projects.filter((p) => p.featured)

  return (
    <Section id="projects" className="border-t border-border">
      <div className="space-y-10">
        <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted">
          {title}
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {visible.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
