import Navbar from "@/components/navbar/Navbar"
import styles from "./about.module.css"

export default function About() {
    return (
        <>
    <Navbar />
    <section className={styles.homepageCon}>
        <div className={styles.titleCon}>
          <div className={styles.darrellCon}>
            <h1 className="heroTitle">About</h1>
            <ol>
                <li>Email</li>
                <li>Github</li>
                <li>LinkedIn</li>
            </ol>
          </div>
        </div>
      </section>
        </>
    )
}