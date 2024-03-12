"use client";
import {useContext} from "react"
import { ThemeContext } from "@/app/context/ThemeContext";

import styles from "./loader.module.css"

export default function Loader() {
    const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);

    const themeStyles = isLightTheme ? light : dark;

    return (
    <div className={styles.scribCon}>
        <div style={{borderColor: themeStyles.mainText}} className={styles.scribbleOne}>
        </div>
        <div style={{borderColor: themeStyles.mainText}} className={styles.scribbleTwo}>
        </div>
        <div style={{borderColor: themeStyles.mainText}} className={styles.scribbleThree}>
        </div>
    </div>
    )
}