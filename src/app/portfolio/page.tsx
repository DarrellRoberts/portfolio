import NavBar from "@/components/navbar/Navbar"
import Carousel from "@/components/carousel/Carousel"
import styles from "./projects.module.css"
import dynamic from "next/dynamic"

const NoSSRCarousel = dynamic(() => import("../../components/carousel/Carousel"), { ssr: false})

export default function Projects() {
return (
<>
<NavBar />
<NoSSRCarousel />
</>
    )
}