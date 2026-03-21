import Link from 'next/link'
import type { PostMeta } from '@/features/blog/types'
import { Section } from '@/components/layout/Section'
import { PostCard } from '@/features/blog/components/PostCard'

interface BlogSectionProps {
  posts: PostMeta[]
}

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <Section id="blog" className="border-t border-border">
      <div className="space-y-8">
        <div className="flex items-baseline justify-between">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-widest text-muted">
            Blog
          </h2>
          <Link
            href="/blog"
            className="font-mono text-xs text-muted hover:text-foreground transition-colors"
          >
            Ver todos →
          </Link>
        </div>
        {posts.length === 0 ? (
          <p className="text-sm text-muted">No hay posts todavía.</p>
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
