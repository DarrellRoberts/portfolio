"use client";

import Navbar from "@/components/navbar/Navbar";
import styles from "./homepage.module.css"
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

export default function Home() {
  const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);

  const themeStyles = isLightTheme ? light : dark;

  return (
    <main className="" style={{backgroundColor: themeStyles.bg}}>
      <Navbar />
      <section className={styles.homepageCon}>
        <div className={styles.titleCon}>
          {isLightTheme ? (
          <Image src="/outline.svg" alt="profile_outline" width="400" height="400"></Image>
          ) : (
          <Image src="/outlineD.svg" alt="profile_outline" width="400" height="400"></Image>
          )}
          <div className={styles.darrellCon}>
            <h1 
            style={{color: themeStyles.mainText}}
            className={styles.heroTitleHome}>Darrell <br/> Roberts</h1>
            <h2 
            style={{color: themeStyles.mainText}}
            className="text-4xl">Fullstack Developer</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
