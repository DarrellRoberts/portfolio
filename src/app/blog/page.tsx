"use client";
import styles from "./blog.module.css";
import EntriesArray from "../../components/blog-assets/EntriesArray";
import { useContext } from "react";
import { ThemeContext } from "@/components/context/ThemeContext";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  const { light, dark, isLightTheme } = useContext(ThemeContext);
  const themeStyles = isLightTheme ? light : dark;
  return (
    <div style={{ backgroundColor: themeStyles.bg }} className="h-screen">
      <section
        style={{ backgroundColor: themeStyles.bg }}
        className={styles.homepageCon}
      >
        <div className={styles.titleCon}>
          <div className={styles.darrellCon}>
            <h1
              style={{ color: themeStyles.secondaryText }}
              className="heroTitle"
            >
              Blog
            </h1>
            <div className={styles.postsCon}>
              {EntriesArray.map((item, i) => (
                <Link key={i} href={`/blog/${item.id}`}>
                  <div
                    style={{ borderColor: themeStyles.secondaryText }}
                    className={styles.rotateBorder}
                  ></div>
                  <div className={styles.posts}>
                    <h2 style={{ color: themeStyles.mainText }}>
                      {item.title}
                    </h2>
                    <h3 style={{ color: themeStyles.secondaryText}}>
                      Posted: {item.date}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <Image
            className={styles.mail}
            src={isLightTheme ? "/assets/blog.svg" : "/assets/blogDM.svg"}
            alt="papers"
            width="250"
            height="250"
          />
        </div>
      </section>
    </div>
  );
}
