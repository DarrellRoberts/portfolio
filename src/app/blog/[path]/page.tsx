"use client";

import EntriesArray from "../../../components/blog-assets/EntriesArray";
import styles from "./post.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/components/context/ThemeContext";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type ParamObject = {
  path?: string;
};

export default function BlogPost() {
  const params: ParamObject = useParams();
  const post = EntriesArray?.find((heading) => heading?.path === params?.path);
  const { light, dark, isLightTheme } = useContext(ThemeContext);
  const themeStyles = isLightTheme ? light : dark;

  const articleIndex1 =
    EntriesArray.indexOf(post) < EntriesArray.length - 1
      ? EntriesArray.indexOf(post) + 1
      : null;
  const articleIndex2 =
    EntriesArray.indexOf(post) !== 0 ? EntriesArray.indexOf(post) - 1 : null;

  console.log(articleIndex1);
  console.log(articleIndex2);
  return (
    <div style={{ backgroundColor: themeStyles.bg }}>
      <section
        style={{ backgroundColor: themeStyles.bg }}
        className={styles.homepageCon}
      >
        <div className={styles.titleCon}>
          <span style={{ color: themeStyles.mainText, fontStyle: "italic" }}>
            By Darrell Roberts
          </span>
          <span style={{ color: themeStyles.mainText }}>
            Posted: {post?.date}
          </span>
          <h1 style={{ color: themeStyles.secondaryText }}>{post?.title}</h1>
        </div>
        <div className={styles.imageCon}>
          <Image
            style={{
              boxShadow: "0px 0px 20px 5px" + themeStyles.secondaryText,
            }}
            src={post?.images[0]}
            alt={post?.imageAlt[0]}
            width="850"
            height="850"
          />
          <span style={{ color: themeStyles.secondaryText }} className="mt-5">
            {post?.imageCaption[0]}
          </span>
        </div>
        <div
          className={isLightTheme ? styles.articleCon : styles.articleConDark}
        >
          {post?.article}
        </div>
        <div className={styles.nextArticleCon}>
          {articleIndex1 ? (
            <Link href={`/blog/${EntriesArray[articleIndex1]?.path}`}>
              <div className={styles.prevArticle}>
                <h2 style={{ color: themeStyles.mainText }} className="underline">Previous</h2>
                <h3 style={{ color: themeStyles.mainText }}>
                {EntriesArray[articleIndex1]?.title}
                </h3>
              </div>
            </Link>
          ) : <div></div>}
          {articleIndex2 || EntriesArray.indexOf(post) === 1 ? (
            <Link href={`/blog/${EntriesArray[articleIndex2]?.path}`}>
              <div className={styles.nextArticle}>
                <h2 style={{ color: themeStyles.mainText }} className="underline">Next</h2>
                <h3 style={{ color: themeStyles.mainText }}>
                {EntriesArray[articleIndex2]?.title}
                </h3>
              </div>
            </Link>
          ) : null}
        </div>
        <br/>
        <Link
          style={{ color: themeStyles.secondaryText }}
          href="/blog"
          className="ml-5"
        >
          Back to Blog homepage
        </Link>
      </section>
    </div>
  );
}
