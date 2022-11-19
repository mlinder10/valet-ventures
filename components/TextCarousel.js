import React from "react";
import styles from "/styles/textcarousel.module.css";

export default function TextCarousel() {
  return (
    <div className={styles.wrapper}>
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
  );
}
