import BlogHome from "@/components/blog-assets/BlogHome"
import { getPostsData } from "@/lib/posts"

export default async function BlogPage() {
  let posts = await getPostsData()
  posts = posts.reverse()
  return <BlogHome posts={posts} />
}
