import React from "react";
import styles from "/styles/services.module.css";
import Zoom from "../components/Zoom";
import TextCarousel from "../components/TextCarousel";

export default function Services() {
  return (
    <div className={styles.page}>
      <section style={{ paddingBottom: "0" }}>
        <h3 className={styles["img-header"]}>Currently Serving</h3>
        <div className="divider margin" />
        <div className={styles["zoom-wrapper"]}>
          <Zoom />
          <h3 className={styles["text-header"]}>Frequent Events</h3>
          <div className="divider margin" />
          <TextCarousel />
        </div>
      </section>
    </div>
  );
}
