import Link from "next/link"
import styles from "../navbar/navbar.module.css"

export default function NavBar() {
    return (
        <nav className={styles.navbarCon}>
            <ul className={styles.navbarList}>
                <li><Link href="/de">Start</Link></li>
                <li><Link href="/de/about">Über mich</Link></li>
                <li><Link href="/de/skills">Fähigkeiten</Link></li>
                <li><Link href="/de/projects">Portfolio</Link></li>
                <li><Link href="/de/contact">Kontakt</Link></li>
            </ul>
        </nav>
    )
}