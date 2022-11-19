import React from "react";
import styles from "/styles/textcarousel.module.css";

export default function TextCarousel() {
  return (
    <div className={styles.wrapper}>
      <ul>
        <li className={styles.left}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.columbiamuseum.org/"
          >
            Columbia Art Museum
          </a>
        </li>
        <li className={styles.right}>
          <a target="_blank" rel="noreferrer" href="https://sc.edu/">
            University of South Carolina
          </a>
        </li>
        <li className={styles.left}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.dickdyermercedes.com/"
          >
            Dick Dyer Mercedes
          </a>
        </li>
        <li className={styles.right}>
          <a target="_blank" rel="noreferrer" href="https://701whaley.com/">
            701 Whaley
          </a>
        </li>
        <li className={styles.left}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.f2tproductions.com/"
          >
            Farm2Table
          </a>
        </li>
        <li className={styles.right}>
          <a target="_blank" rel="noreferrer" href="https://segrapark.com/">
            Segra Park
          </a>
        </li>
        <li className={styles.left}>
          <a target="_blank" rel="noreferrer" href="https://www.scwren.org/">
            Wren
          </a>
        </li>
        <li className={styles.right}>
          <a target="_blank" rel="noreferrer" href="https://www.scwren.org/">
            Jim Hudson Automodive
          </a>
        </li>
        <li className={styles.left}>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.flockandrally.com/"
          >
            Flock and Rally
          </a>
        </li>
      </ul>
    </div>
  );
}
