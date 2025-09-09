import BlogSingle from "@/components/blog-assets/BlogSingle"
import { getPostsData } from "@/lib/posts"

export default async function BlogPage() {
  const posts = await getPostsData()

  return <BlogSingle posts={posts} />
}
