import type { PostMeta } from '@/features/blog/types'
import { Section } from '@/components/layout/Section'
import { PostCard } from '@/features/blog/components/PostCard'

interface BlogViewProps {
  posts: PostMeta[]
}

export function BlogView({ posts }: BlogViewProps) {
  return (
    <Section>
      <div className="space-y-10">
        <div className="space-y-2">
          <h1 className="font-[family-name:var(--font-syne)] text-3xl font-bold tracking-tight">
            Blog
          </h1>
          <p className="text-sm text-foreground/40">
            Notas sobre arquitectura, desarrollo y lo que voy aprendiendo.
          </p>
        </div>
        {posts.length === 0 ? (
          <p className="text-sm text-foreground/30">No hay publicaciones todavía.</p>
        ) : (
          <div>
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}
