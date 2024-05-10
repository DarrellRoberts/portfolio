"use client";

import {useContext} from "react"
import { ThemeContext } from "@/app/context/ThemeContext";
import styles from "./footer.module.css"

export default function Footer() {
    const { light, dark, isLightTheme } = useContext(ThemeContext);
    const themeStyles = isLightTheme ? light : dark;

  return (
    <div style={{backgroundColor: themeStyles.bg}} className={styles.footerCon}>
        <span style={{color: themeStyles.secondaryText}}>
            Darrell Roberts @2024
        </span>
    </div>
  )
}
