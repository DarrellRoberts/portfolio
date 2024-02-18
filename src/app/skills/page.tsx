import Navbar from "@/components/navbar/Navbar"
import styles from "./skills.module.css"

export default function About() {
    return (
        <>
    <Navbar />
    <section className={styles.homepageCon}>
        <div className={styles.titleCon}>
          <div className={styles.darrellCon}>
            <h1 className="heroTitle">Skills</h1>
            <div className={styles.skillsCon}>
                <h2> Frontend </h2>
                <ul className={styles.skillsList}>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>React</li>
                    <li>Next</li>
                </ul>
                <h2> Backend </h2>
                <ul className={styles.skillsList}>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>Java</li>
                </ul>
                <h2> Database </h2>
                <ul className={styles.skillsList}>
                    <li>SQL</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>PostresSQL</li>
                </ul>
                <h2> Tools </h2>
                <ul className={styles.skillsList}>
                    <li>Docker</li>
                    <li>Git</li>
                    <li>Gimp</li>
                    <li>Three.js</li>
                </ul>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}