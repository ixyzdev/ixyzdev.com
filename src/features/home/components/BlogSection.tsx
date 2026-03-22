import Link from 'next/link'
import type { PostMeta } from '@/features/blog/types'
import { Section } from '@/components/layout/Section'
import { PostCard } from '@/features/blog/components/PostCard'
import { AnimateIn } from '@/components/ui/AnimateIn'

interface BlogSectionProps {
  posts: PostMeta[]
}

export function BlogSection({ posts }: BlogSectionProps) {
  return (
    <Section id="blog">
      <div className="space-y-12">
        <AnimateIn>
          <div className="flex items-baseline justify-between">
            <p className="font-mono text-xs tracking-widest uppercase text-turquoise">
              — Blog
            </p>
            <Link
              href="/blog"
              className="font-mono text-xs text-white/50 hover:text-turquoise transition-colors"
            >
              Ver todos →
            </Link>
          </div>
        </AnimateIn>

        {posts.length === 0 ? (
          <p className="text-sm text-white/50">No hay posts todavía.</p>
        ) : (
          <div>
            {posts.map((post, i) => (
              <AnimateIn key={post.slug} delay={i * 0.1}>
                <PostCard post={post} />
              </AnimateIn>
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}
