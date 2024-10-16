import Carousel from "@/components/carousel/Carousel";
import styles from "./projects.module.css";
import Loader2 from "@/components/loader2/Loader2";

export default function Projects() {
  return (
    <div>
      <section className={styles.homepageCon}>
        <div className={styles.titleCon}>
          <div className={styles.darrellCon}>
            <Loader2 />
            <div className={styles.skillsCon}>
              <Carousel />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
