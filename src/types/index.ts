export interface Project {
  slug: string
  title: string
  description: string
  longDescription?: string
  techStack: string[]
  repoUrl?: string
  liveUrl?: string
  imageUrl?: string
  featured: boolean
  year: number
}

export interface SocialLink {
  label: string
  url: string
  icon: 'github' | 'linkedin' | 'twitter' | 'email'
}
