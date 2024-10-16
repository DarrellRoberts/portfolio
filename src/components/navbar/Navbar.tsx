import Link from "next/link";
import styles from "./navbar.module.css";
import DarkMode from "../dark-mode/DarkMode";

export default function NavBar() {
  return (
    <nav className={styles.navbarCon}>
      <div className={styles.leftCon}>
        <span>
          <Link href="/">DR</Link>
        </span>
      </div>
      <ul className={styles.navbarList}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li id={styles.emptyList}> | </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li id={styles.emptyList}> | </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li id={styles.emptyList}> | </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li id={styles.emptyList}> | </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className={styles.rightCon}>
        <DarkMode />
      </div>
    </nav>
  );
}
