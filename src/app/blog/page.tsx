"use client";
import styles from "./blog.module.css";
import EntriesArray from "../../components/blog-assets/EntriesArray";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/search/SearchBar";
import ButtonComponent from "@/components/button/ButtonComponent";

export default function Blog() {
  const [searchbar, setSearchBar] = useState<string>("");

  let blogArray = [];
  if (searchbar) {
    blogArray = EntriesArray.filter((text) => text.path.includes(searchbar));
  } else {
    blogArray = EntriesArray;
  }

  const randomIndex = Math.floor(Math.random() * EntriesArray.length);
  return (
    <div className="">
      <section className={styles.homepageCon}>
        <div className={styles.titleCon}>
          <div className={styles.darrellCon}>
            <h1 className="heroTitle">Blog</h1>
            <div className={styles.postsCon}>
              <span className={styles.searchButtonCon}>
                <SearchBar setSearchBar={setSearchBar} />
                <Link href={`/blog/${EntriesArray[randomIndex]?.path}`}>
                  <ButtonComponent text={"I feel lucky"} />
                </Link>
              </span>
              {blogArray.length !== 0 ? (
                blogArray.map((item, i) => (
                  <Link key={i} href={`/blog/${item.path}`}>
                    <div className={styles.posts}>
                      <h2>{item.title}</h2>
                      <h3>Posted: {item.date}</h3>
                    </div>
                    <div
                      style={{
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
                  <h2>No results</h2>
                </div>
              )}
            </div>
          </div>
          <Image
            className={styles.mail + " heroImage"}
            src="/assets/blog.svg"
            alt="papers"
            width="250"
            height="250"
          />
        </div>
      </section>
    </div>
  );
}
