import React from "react";
import styles from "/styles/services.module.css";
import Zoom from "../components/Zoom";
import TextCarousel from "../components/TextCarousel";

export default function Services() {
  return (
    <div className={styles.page}>
      <section style={{ paddingBottom: "0" }}>
        <h3 className={styles["img-header"]}>
          Currently Serving <span>|</span> Affiliated With
        </h3>
        <div className={styles["zoom-wrapper"]}>
          <Zoom />
          <TextCarousel />
        </div>
      </section>
    </div>
  );
}
