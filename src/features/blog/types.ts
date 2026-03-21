export interface PostMeta {
  slug: string
  title: string
  date: string        // ISO: "2025-03-21"
  description: string
  tags?: string[]
}

export interface Post extends PostMeta {
  content: string     // raw MDX source
}
