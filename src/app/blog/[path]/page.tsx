"use client";

import EntriesArray from "../../../components/blog-assets/EntriesArray";
import styles from "./post.module.css";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type ParamObject = {
  path?: string;
};

export default function BlogPost() {
  const params: ParamObject = useParams();
  const post = EntriesArray?.find((heading) => heading?.path === params?.path);

  const articleIndex1 =
    EntriesArray.indexOf(post) < EntriesArray.length - 1
      ? EntriesArray.indexOf(post) + 1
      : null;
  const articleIndex2 =
    EntriesArray.indexOf(post) !== 0 ? EntriesArray.indexOf(post) - 1 : null;
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
        <div className={styles.articleCon}>{post?.article}</div>
        <div className={styles.nextArticleCon}>
          {articleIndex1 ? (
            <Link href={`/blog/${EntriesArray[articleIndex1]?.path}`}>
              <div className={styles.prevArticle}>
                <h2 className="underline">Previous</h2>
                <h3>{EntriesArray[articleIndex1]?.title}</h3>
              </div>
            </Link>
          ) : (
            <div></div>
          )}
          {articleIndex2 || EntriesArray.indexOf(post) === 1 ? (
            <Link href={`/blog/${EntriesArray[articleIndex2]?.path}`}>
              <div className={styles.nextArticle}>
                <h2 className="underline">Next</h2>
                <h3>{EntriesArray[articleIndex2]?.title}</h3>
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
  );
}
