import Link from 'next/link'
import type { Project } from '@/features/projects/types'
import { ProjectTechStack } from './ProjectTechStack'

interface ProjectCardProps {
  project: Project
  variant?: 'grid' | 'list'
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 p-6 transition-all duration-500 hover:border-turquoise/60 hover:bg-turquoise/5 hover:shadow-[0_0_40px_-8px_rgba(109,222,200,0.2)]">
      {/* Borde izquierdo siempre visible, se ilumina al hover */}
      <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-white/10 transition-all duration-500 group-hover:bg-turquoise group-hover:shadow-[0_0_12px_2px_rgba(109,222,200,0.6)]" />

      <div className="flex items-start justify-between gap-4">
        <div className="space-y-2 min-w-0">
          <div className="flex items-center gap-3">
            <Link
              href={`/projects/${project.slug}`}
              className="font-[family-name:var(--font-syne)] text-lg font-bold text-white transition-colors duration-300 group-hover:text-turquoise"
            >
              {project.title}
            </Link>
            <span className="font-mono text-xs text-white/30">{project.year}</span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">{project.description}</p>
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
              className="font-mono text-xs text-white/50 hover:text-white transition-colors"
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
