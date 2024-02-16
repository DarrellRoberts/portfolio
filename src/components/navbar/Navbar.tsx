import Link from "next/link"
import styles from "./navbar.module.css"

export default function NavBar() {
    return (
        <nav className={styles.navbarCon}>
            <ul className={styles.navbarList}>
                <li className={styles.home}><Link href="/">Home</Link></li>
                <li className={styles.about}><Link href="/about">About</Link></li>
                <li><Link href="/skills">Skills</Link></li>
                <li><Link href="/projects">Portfolio</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}