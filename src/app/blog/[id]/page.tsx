"use client";

import EntriesArray from "../../../components/blog-assets/EntriesArray";
import styles from "./post.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/components/context/ThemeContext";
import { useParams } from "next/navigation";
import Image from "next/image";

type ParamObject = {
  id?: number;
};

export default function BlogPost() {
  const params: ParamObject = useParams();
  const index = EntriesArray.length - params?.id;
  const { light, dark, isLightTheme } = useContext(ThemeContext);
  const themeStyles = isLightTheme ? light : dark;
  return (
    <div style={{ backgroundColor: themeStyles.bg }} className="h-screen">
      <section
        style={{ backgroundColor: themeStyles.bg }}
        className={styles.homepageCon}
      >
        <div className={styles.titleCon}>
          <span style={{ color: themeStyles.mainText }}>
            Posted: {EntriesArray[index]?.date}
          </span>
          <h1
            style={{ color: themeStyles.secondaryText }}
            className="heroTitle"
          >
            {EntriesArray[index]?.title}
          </h1>
        </div>
        <div className={styles.imageCon}>
          <Image
            src={EntriesArray[index]?.images[0]}
            alt={EntriesArray[index]?.imageAlt[0]}
            width="250"
            height="250"
          />
        </div>
        <div className={styles.articleCon}>
          <p style={{ color: themeStyles.mainText }}>
            {EntriesArray[index]?.article}
          </p>
        </div>
        <ul className={styles.listCon}>
          {EntriesArray[index]?.lists.map((item, i) => (
            <li style={{ color: themeStyles.mainText }} key={i}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
