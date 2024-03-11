"use client";

import Link from "next/link"
import styles from "./navbar.module.css"
import {useContext} from "react"
import { ThemeContext } from "@/app/context/ThemeContext";



export default function NavBar() {
    const { light, dark, isLightTheme, toggleTheme } = useContext(ThemeContext);

    const themeStyles = isLightTheme ? light : dark;

    return (
        <nav className={styles.navbarCon}>
            <div style={{borderColor: themeStyles.secondaryText}} className={styles.leftCon}>
                <span><Link style={{color: themeStyles.mainText}} href="/">DR</Link></span>
            </div>
            <ul className={isLightTheme ? styles.navbarList : styles.navbarListDark}>
                <li><Link style={{color: themeStyles.mainText}} href="/about">About</Link></li>
                <li style={{color: themeStyles.secondaryText}} id={styles.emptyList}> | </li>
                <li><Link style={{color: themeStyles.mainText}} href="/skills">Skills</Link></li>
                <li style={{color: themeStyles.secondaryText}} id={styles.emptyList}> | </li>
                <li><Link style={{color: themeStyles.mainText}} href="/portfolio">Portfolio</Link></li>
                <li style={{color: themeStyles.secondaryText}} id={styles.emptyList}> | </li>
                <li><Link style={{color: themeStyles.mainText}} href="/contact">Contact</Link></li>
            </ul>
            <div className={styles.rightCon}>
                <span><Link style={{color: themeStyles.mainText}} href="/de">DE</Link></span>
                <div 
                onClick={toggleTheme}
                className={styles.lightCircle}
                style={{backgroundColor: themeStyles.mainText}}
                ></div>
            </div>
        </nav>
    )
}