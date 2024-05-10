"use client";

import styles from "./projects.module.css"
import dynamic from "next/dynamic"
import Loader2 from "@/components/loader2/Loader2"
import {useContext} from "react"
import { ThemeContext } from "@/app/context/ThemeContext";

const NoSSRCarousel = dynamic(() => import("../../components/carousel/Carousel"), { ssr: false})

export default function Projects() {
const { light, dark, isLightTheme} = useContext(ThemeContext);

const themeStyles = isLightTheme ? light : dark;
return (
<div style={{backgroundColor: themeStyles.bg}}>
<section style={{backgroundColor: themeStyles.bg}} className={styles.homepageCon}>
    <div className={styles.titleCon}>
        <div className={styles.darrellCon}>
            <Loader2 />
            <div className={styles.skillsCon}>
                <NoSSRCarousel />
            </div>
        </div>
    </div>
</section>
</div>
    )
}