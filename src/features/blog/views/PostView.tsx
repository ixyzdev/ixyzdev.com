import Link from 'next/link'
import type { Post } from '@/features/blog/types'
import { Section } from '@/components/layout/Section'
import { Badge } from '@/components/ui'
import { PostBody } from '@/features/blog/components/PostBody'

interface PostViewProps {
  post: Post
}

export function PostView({ post }: PostViewProps) {
  return (
    <Section className="py-16">
      <div className="space-y-10">
        <div>
          <Link
            href="/blog"
            className="font-mono text-xs text-muted hover:text-foreground transition-colors"
          >
            ← Blog
          </Link>
        </div>
        <div className="space-y-4">
          <time
            dateTime={post.date}
            className="font-mono text-xs text-muted"
          >
            {new Date(post.date).toLocaleDateString('es-CL', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <h1 className="text-3xl font-bold tracking-tight">{post.title}</h1>
          <p className="text-muted leading-relaxed">{post.description}</p>
          {post.tags && post.tags.length > 0 && (
            <ul className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <li key={tag}>
                  <Badge variant="muted">{tag}</Badge>
                </li>
              ))}
            </ul>
          )}
        </div>
        <hr className="border-border" />
        <PostBody source={post.content} />
      </div>
    </Section>
  )
}
