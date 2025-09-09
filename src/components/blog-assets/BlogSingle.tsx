"use client"

// import EntriesArray from "../../../components/blog-assets/EntriesArray"
import styles from "./post.module.css"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

type ParamObject = {
  path?: string
}

export default function BlogPost({ posts }) {
  const params: ParamObject = useParams()
  const post = posts?.find((heading) => heading?.path === params?.path)

  const articleIndex1 =
    posts.indexOf(post) < posts.length - 1 ? posts.indexOf(post) + 1 : null
  const articleIndex2 =
    posts.indexOf(post) !== 0 ? posts.indexOf(post) - 1 : null
  return (
    <div>
      <section className={styles.homepageCon}>
        <div className={styles.titleCon}>
          <span>By Darrell Roberts</span>
          <span>Posted: {post?.date}</span>
          <h1>{post?.title}</h1>
        </div>
        <div className={styles.imageCon}>
          <Image
            src={post?.images[0]}
            alt={post?.imageAlt[0]}
            width="850"
            height="850"
          />
          <span className="mt-5">{post?.imageCaption[0]}</span>
        </div>
        <div
          className={styles.articleCon}
          dangerouslySetInnerHTML={{ __html: post?.article }}
        />
        <div className={styles.nextArticleCon}>
          {articleIndex1 ? (
            <Link href={`/blog/${posts[articleIndex1]?.path}`}>
              <div className={styles.prevArticle}>
                <h2 className="underline">Previous</h2>
                <h3>{posts[articleIndex1]?.title}</h3>
              </div>
            </Link>
          ) : (
            <div></div>
          )}
          {articleIndex2 || posts.indexOf(post) === 1 ? (
            <Link href={`/blog/${posts[articleIndex2]?.path}`}>
              <div className={styles.nextArticle}>
                <h2 className="underline">Next</h2>
                <h3>{posts[articleIndex2]?.title}</h3>
              </div>
            </Link>
          ) : null}
        </div>
        <br />
        <Link href="/blog" className="ml-5">
          Back to Blog homepage
        </Link>
      </section>
    </div>
  )
}
