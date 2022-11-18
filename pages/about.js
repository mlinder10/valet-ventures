import React from "react";
import styles from "/styles/about.module.css";
import Image from "next/image";
import Zoom from "../components/Zoom";

export default function About() {
  return (
    <div className={styles.page}>
      <section className={styles.grid}>
        <article>
          <h3 className={styles.heading}>Our Mission</h3>
          <p className={styles.body}>
            Carlie Flowers opened Valet Ventures in 2011 focusing on delivering
            polite and professional valet services for the fine dining industry
            in the Midlands. She saw an opportunity to give the area polite and
            preppy valets with some of the most secure valet podiums in the
            industry.
          </p>
        </article>
        <div className={styles["img-wrapper"]}>
          <Image
            src="/images/valet-sign-daytime.jpg"
            fill={true}
            alt="Sign Light"
          />
        </div>
        <article>
          <h3 className={styles.heading}>Previous Experience</h3>
          <p className={styles.body}>
            Carlie has been in the valet industry since 2000. She helped opened
            two valet companies prior to opening Valet Ventures. Carlie had
            always loved cars… maybe it was the name. Her love for vehicles
            began with her father who owned every exotic car around. It was such
            a natural fit to combine her gift of gab and love of fancy cars to
            form Valet Ventures.
          </p>
        </article>
        <article>
          <h3 className={styles.heading}>Clientele</h3>
          <p className={styles.body}>
            In 2011, Carlie started Valet Ventures with Terra and Mr
            Friendly&apos;s… and now she has worked with over thirteen different
            restaurants around the area. If you want to know where to eat… just
            ask her. She has been delivering reliable and quality service to
            areas finest dining locations for over a decade.
          </p>
        </article>
        <article>
          <h3 className={styles.heading}>Our Brand</h3>
          <p className={styles.body}>
            Carlie chose the name Valet Ventures because of… alliteration.
            It&apos;s cute and catchy. And she&apos;s kind of a nerd. Valet
            Ventures has won awards for girliest valet and most likely to knock
            off a Peter Milar polo. Valet Ventures currently provides valet
            services for Mr. Friendly&apos;s, Terra, Hendrix, Backstreets, Il
            Giorgione, The Woody, Saluda&apos;s, Smoked, and Ambrosia.
          </p>
        </article>
        <div className={styles["img-wrapper"]}>
          <Image
            src="/images/valet-sign-dark.jpg"
            fill={true}
            alt="Sign Dark"
          />
        </div>
      </section>
      <section style={{ paddingBottom: "0" }}>
        <h3 className={styles["img-header"]}>
          Currently Serving <span>|</span> Affiliated With
        </h3>
        <div className={styles["zoom-wrapper"]}>
          <Zoom />
          <ul>
            <li>Columbia Art Museum</li>
            <li>University of South Carolina</li>
            <li>Dick Dyer Mercades</li>
            <li>701 Whaley</li>
            <li>Farm2Table</li>
            <li>Segra Park</li>
            <li>Wren</li>
            <li>Jim Hudson Automodive</li>
            <li>Flock and Rally</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
