import Link from 'next/link'
import type { Project } from '@/features/projects/types'
import { ProjectTechStack } from './ProjectTechStack'

interface ProjectCardProps {
  project: Project
  variant?: 'grid' | 'list'
}

export function ProjectCard({ project, variant = 'grid' }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col justify-between rounded-lg border border-border p-5 transition-colors hover:border-foreground/30 hover:bg-foreground/[0.02]">
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors"
          >
            {project.title}
          </Link>
          <span className="shrink-0 font-mono text-xs text-muted">{project.year}</span>
        </div>
        <p className="text-xs text-muted leading-relaxed">{project.description}</p>
      </div>
      <div className="mt-4 flex items-end justify-between gap-2">
        <ProjectTechStack stack={project.techStack} limit={4} />
        <div className="flex shrink-0 items-center gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-foreground transition-colors"
            >
              Repo ↗
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-foreground transition-colors"
            >
              Live ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
