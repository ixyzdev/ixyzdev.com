import { notFound } from 'next/navigation'
import { ProjectDetailView } from '@/features/projects/views/ProjectDetailView'
import type { Project } from '@/types'

// Placeholder — replace with real data fetching (file, CMS, DB)
function getProjectBySlug(slug: string): Project | undefined {
  const projects: Project[] = []
  return projects.find((p) => p.slug === slug)
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  return <ProjectDetailView project={project} />
}
