import { getAllPostsMeta } from '@/features/blog/lib/posts'
import { BlogView } from '@/features/blog/views/BlogView'

export const metadata = {
  title: 'Blog — Kevin Díaz',
  description: 'Notas sobre arquitectura, desarrollo y lo que voy aprendiendo.',
}

export default function BlogPage() {
  const posts = getAllPostsMeta()
  return <BlogView posts={posts} />
}
