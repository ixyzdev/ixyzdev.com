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
        <div>
          <Link
            href="/#projects"
            className="font-mono text-xs text-muted hover:text-foreground transition-colors"
          >
            ← Back
          </Link>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
            <span className="font-mono text-sm text-muted">{project.year}</span>
          </div>
          <p className="max-w-prose text-base text-muted leading-relaxed">
            {project.longDescription ?? project.description}
          </p>
        </div>
        <ProjectTechStack stack={project.techStack} />
        <div className="flex items-center gap-3">
          {project.repoUrl && (
            <Button asChild variant="secondary">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                View repo ↗
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live demo ↗
              </a>
            </Button>
          )}
        </div>
      </div>
    </Section>
  )
}
