import NavBar from "@/components/navbar/Navbar"
import styles from "./projects.module.css"
import dynamic from "next/dynamic"
import Loader2 from "@/components/loader2/Loader2"

const NoSSRCarousel = dynamic(() => import("../../components/carousel/Carousel"), { ssr: false})

export default function Projects() {
return (
<>
<NavBar />
<section className={styles.homepageCon}>
    <div className={styles.titleCon}>
        <div className={styles.darrellCon}>
            <Loader2 />
            <div className={styles.skillsCon}>
                <NoSSRCarousel />
            </div>
        </div>
    </div>
</section>
</>
    )
}