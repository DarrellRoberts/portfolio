import styles from "./homepage.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className={styles.homepageCon}>
        <div className={styles.titleCon}>
          <Image
            className="heroImage"
            src="/assets/outline.svg"
            alt="profile_outline"
            width="400"
            height="400"
          />
          <div className={styles.darrellCon}>
            <h1 className={styles.heroTitleHome}>
              Darrell <br /> Roberts
            </h1>
            <h2 className="text-4xl">Fullstack Developer</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
