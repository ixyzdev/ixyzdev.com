import Link from 'next/link'
import type { PostMeta } from '@/features/blog/types'
import { Badge } from '@/components/ui'

interface PostCardProps {
  post: PostMeta
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group flex items-start justify-between gap-6 border-b border-border/40 py-7 last:border-0">
      <div className="space-y-2 min-w-0">
        <Link
          href={`/blog/${post.slug}`}
          className="font-[family-name:var(--font-syne)] text-base font-semibold text-foreground transition-colors group-hover:text-turquoise"
        >
          {post.title}
        </Link>
        <p className="text-sm text-steel leading-relaxed">{post.description}</p>
        {post.tags && post.tags.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 pt-1">
            {post.tags.map((tag) => (
              <li key={tag}>
                <Badge variant="muted">{tag}</Badge>
              </li>
            ))}
          </ul>
        )}
      </div>
      <time
        dateTime={post.date}
        className="shrink-0 font-mono text-xs text-steel/50 pt-1"
      >
        {new Date(post.date).toLocaleDateString('es-CL', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </time>
    </article>
  )
}
