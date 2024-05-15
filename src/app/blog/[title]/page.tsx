"use client";

import EntriesArray from "../../../components/blog-assets/EntriesArray";
import styles from "./post.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/components/context/ThemeContext";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type ParamObject = {
  title?: string;
};

export default function BlogPost() {
  const params: ParamObject = useParams();
  const post = EntriesArray?.find(heading => heading?.title === params?.title);
  const { light, dark, isLightTheme } = useContext(ThemeContext);
  const themeStyles = isLightTheme ? light : dark;

  const postTitle = post?.title
  .split('-')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ')

  return (
    <div style={{ backgroundColor: themeStyles.bg }}>
      <section
        style={{ backgroundColor: themeStyles.bg }}
        className={styles.homepageCon}
      >
        <div className={styles.titleCon}>
          <span style={{ color: themeStyles.mainText, fontStyle: "italic"}}>
            By Darrell Roberts
          </span>
          <span style={{ color: themeStyles.mainText }}>
            Posted: {post?.date}
          </span>
          <h1
            style={{ color: themeStyles.secondaryText }}
          >
            {`${postTitle}?`}
          </h1>
        </div>
        <div className={styles.imageCon} >
          <Image
            style={{ boxShadow: "0px 0px 20px 5px" + themeStyles.secondaryText }}
            src={post?.images[0]}
            alt={post?.imageAlt[0]}
            width="850"
            height="850"
          />
          <span style={{ color: themeStyles.secondaryText }} className="mt-5">
            {post?.imageCaption[0]}
          </span>
        </div>
        <div className={isLightTheme ? styles.articleCon : styles.articleConDark}>
            {post?.article}
        </div>
        <Link style={{ color: themeStyles.secondaryText }} href="/blog" className="ml-5">
          Back to Blog homepage</Link>
      </section>
    </div>
  );
}
