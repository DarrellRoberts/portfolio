import Navbar from "@/components/navbar/Navbar";
import styles from "./homepage.module.css"
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <section className={styles.homepageCon}>
        <div className={styles.titleCon}>
          <Image src="/outline.svg" alt="profile_outline" width="400" height="400"></Image>
          <div className={styles.darrellCon}>
            <h1 className="heroTitle">Darrell <br/> Roberts</h1>
            <h2 className="text-4xl">Fullstack Developer</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
