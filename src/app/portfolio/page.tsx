import NavBar from "@/components/navbar/Navbar"
import styles from "./projects.module.css"
import dynamic from "next/dynamic"

const NoSSRCarousel = dynamic(() => import("../../components/carousel/CarouselTwo"), { ssr: false})

export default function Projects() {
return (
<>
<NavBar />
<section className={styles.homepageCon}>
    <div className={styles.titleCon}>
        <div className={styles.darrellCon}>
            <h1 className="heroTitle">Portfolio</h1>
            <div className={styles.skillsCon}>
                <NoSSRCarousel />
            </div>
        </div>
    </div>
</section>
</>
    )
}