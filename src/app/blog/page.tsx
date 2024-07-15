"use client";
import styles from "./blog.module.css";
import EntriesArray from "../../components/blog-assets/EntriesArray";
import { useContext, useState } from "react";
import { ThemeContext } from "@/components/context/ThemeContext";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/search/SearchBar";

export default function Blog() {
  const [searchbar, setSearchBar] = useState<string>("");
  const { light, dark, isLightTheme } = useContext(ThemeContext);
  const themeStyles = isLightTheme ? light : dark;

  let blogArray = [];
  if (searchbar) {
    blogArray = EntriesArray.filter((text) => text.path.includes(searchbar));
  } else {
    blogArray = EntriesArray;
  }
  return (
    <div style={{ backgroundColor: themeStyles.bg }} className="">
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
              <SearchBar setSearchBar={setSearchBar} />
              {blogArray.length !== 0 ? (
                blogArray.map((item, i) => (
                  <Link
                    key={i}
                    href={`/blog/${item.path}`}
                    style={{
                      borderBottomColor: themeStyles.secondaryText,
                      borderBottomWidth: "1px",
                    }}
                  >
                    <div className={styles.posts}>
                      <h2 style={{ color: themeStyles.mainText }}>
                        {item.title}
                      </h2>
                      <h3 style={{ color: themeStyles.secondaryText }}>
                        Posted: {item.date}
                      </h3>
                    </div>
                    <div
                      style={{
                        borderColor: themeStyles.secondaryText,
                        backgroundImage: `url(${item.images})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      className={styles.rotateBorder}
                    ></div>
                  </Link>
                ))
              ) : (
                <div className={styles.noresultsCon}>
                  <h2 style={{ color: themeStyles.mainText }}>No results</h2>
                </div>
              )}
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
