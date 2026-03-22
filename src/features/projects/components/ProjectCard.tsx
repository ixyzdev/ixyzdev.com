import Link from 'next/link'
import type { Project } from '@/features/projects/types'
import { ProjectTechStack } from './ProjectTechStack'

interface ProjectCardProps {
  project: Project
  variant?: 'grid' | 'list'
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-xl border border-foreground/8 p-6 transition-all duration-500 hover:border-foreground/20 hover:bg-foreground/[0.03]">
      {/* Borde izquierdo — siempre presente, se ilumina al hover */}
      <div className="absolute left-0 top-4 bottom-4 w-px rounded-full bg-foreground/10 transition-all duration-500 group-hover:bg-foreground/60" />

      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2 min-w-0">
          <div className="flex items-center gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="font-[family-name:var(--font-syne)] text-xl font-bold text-foreground transition-opacity duration-300 group-hover:opacity-70"
            >
              {project.title}
            </Link>
            <span className="font-mono text-xs text-foreground/20">{project.year}</span>
          </div>
          <p className="text-base text-foreground/50 leading-relaxed">{project.description}</p>
        </div>
        <div className="shrink-0 flex flex-col items-end gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-foreground/40 hover:text-foreground transition-colors"
            >
              Live ↗
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-foreground/30 hover:text-foreground transition-colors"
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
