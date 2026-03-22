import Link from 'next/link'
import type { Project } from '@/features/projects/types'
import { ProjectTechStack } from './ProjectTechStack'

interface ProjectCardProps {
  project: Project
  variant?: 'grid' | 'list'
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border/50 bg-foreground/[0.02] p-6 transition-all duration-300 hover:border-turquoise/30 hover:bg-foreground/[0.04]">
      {/* Línea turquesa izquierda al hover */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-turquoise scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100" />

      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2 min-w-0">
          <div className="flex items-center gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="font-[family-name:var(--font-syne)] text-lg font-bold text-foreground transition-colors group-hover:text-turquoise"
            >
              {project.title}
            </Link>
            <span className="font-mono text-xs text-steel/50">{project.year}</span>
          </div>
          <p className="text-sm text-steel leading-relaxed">{project.description}</p>
        </div>
        <div className="shrink-0 flex flex-col items-end gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-turquoise hover:opacity-70 transition-opacity"
            >
              Live ↗
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-steel hover:text-foreground transition-colors"
            >
              Repo ↗
            </a>
          )}
        </div>
      </div>

      <div className="mt-4">
        <ProjectTechStack stack={project.techStack} limit={5} />
      </div>
    </article>
  )
}
