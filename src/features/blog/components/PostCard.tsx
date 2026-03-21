import Link from 'next/link'
import type { PostMeta } from '@/features/blog/types'
import { Badge } from '@/components/ui'

interface PostCardProps {
  post: PostMeta
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group border-b border-border py-6 last:border-0">
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1">
          <Link
            href={`/blog/${post.slug}`}
            className="text-base font-semibold text-foreground transition-colors group-hover:text-accent"
          >
            {post.title}
          </Link>
          <p className="text-sm text-muted leading-relaxed">{post.description}</p>
        </div>
        <time
          dateTime={post.date}
          className="shrink-0 font-mono text-xs text-muted pt-0.5"
        >
          {formatDate(post.date)}
        </time>
      </div>
      {post.tags && post.tags.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="muted">{tag}</Badge>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-CL', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
