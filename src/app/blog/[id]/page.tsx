"use client";

import EntriesArray from "../../../components/blog-assets/EntriesArray";
import styles from "./post.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/components/context/ThemeContext";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type ParamObject = {
  id?: number;
};

export default function BlogPost() {
  const params: ParamObject = useParams();
  const index = EntriesArray.length - params?.id;
  const { light, dark, isLightTheme } = useContext(ThemeContext);
  const themeStyles = isLightTheme ? light : dark;
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
            Posted: {EntriesArray[index]?.date}
          </span>
          <h1
            style={{ color: themeStyles.secondaryText }}
          >
            {EntriesArray[index]?.title}
          </h1>
        </div>
        <div className={styles.imageCon} >
          <Image
            style={{ boxShadow: "0px 0px 20px 5px" + themeStyles.secondaryText }}
            src={EntriesArray[index]?.images[index]}
            alt={EntriesArray[index]?.imageAlt[index]}
            width="850"
            height="850"
          />
          <span style={{ color: themeStyles.secondaryText }} className="mt-5">
            {EntriesArray[index]?.imageCaption[index]}
          </span>
        </div>
        <div className={isLightTheme ? styles.articleCon : styles.articleConDark}>
            {EntriesArray[index]?.article}
        </div>
        <Link style={{ color: themeStyles.secondaryText }} href="/blog" className="ml-5">
          Back to Blog homepage</Link>
      </section>
    </div>
  );
}
