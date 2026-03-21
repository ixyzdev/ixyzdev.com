import { MDXRemote } from 'next-mdx-remote/rsc'

interface PostBodyProps {
  source: string
}

export function PostBody({ source }: PostBodyProps) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      <MDXRemote source={source} />
    </div>
  )
}
