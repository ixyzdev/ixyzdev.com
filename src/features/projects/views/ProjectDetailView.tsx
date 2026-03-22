import Link from 'next/link'
import type { Project } from '@/features/projects/types'
import { Section } from '@/components/layout/Section'
import { Button } from '@/components/ui'
import { ProjectTechStack } from '@/features/projects/components/ProjectTechStack'

interface ProjectDetailViewProps {
  project: Project
}

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  return (
    <Section as="article" className="py-16">
      <div className="space-y-10">
        <Link
          href="/#projects"
          className="font-mono text-xs text-foreground/30 hover:text-foreground transition-colors"
        >
          ← Volver
        </Link>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight">
              {project.title}
            </h1>
            <span className="font-mono text-sm text-foreground/25">{project.year}</span>
          </div>
          <p className="max-w-prose text-base text-foreground/50 leading-relaxed">
            {project.longDescription ?? project.description}
          </p>
        </div>
        <ProjectTechStack stack={project.techStack} />
        <div className="flex items-center gap-3">
          {project.repoUrl && (
            <Button asChild variant="secondary">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                Repositorio ↗
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Demo en vivo ↗
              </a>
            </Button>
          )}
        </div>
      </div>
    </Section>
  )
}
