import type { Project } from '@/types'
import { Section } from '@/components/layout/Section'
import { ProjectCard } from '@/features/projects/components/ProjectCard'
import { AnimateIn } from '@/components/ui/AnimateIn'

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
    <Section id="experience">
      <AnimateIn>
        <p className="font-mono text-xs text-foreground/30 tracking-widest uppercase">
          — {title}
        </p>
      </AnimateIn>
      <ul className="mt-12 space-y-4">
        {visible.map((project, i) => (
          <AnimateIn key={project.slug} delay={i * 0.1} variant="slide-up">
            <li>
              <ProjectCard project={project} />
            </li>
          </AnimateIn>
        ))}
      </ul>
    </Section>
  )
}
