import React from "react";
import styles from "../styles/zoom.module.css";

export default function Zoom() {
  return (
    <div className={styles["img-wrapper"]}>
      <div className={`${styles.img}`}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://ambrosiasc.com/index.html"
        >
          <img src="/images/clients/ambrosia.png" alt="" />
        </a>
      </div>
      <div className={styles.img}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.backstreetsgrill.com/"
        >
          <img src="/images/clients/backstreet.png" alt="" />
        </a>
      </div>
      <div className={styles.img}>
        <a target="_blank" rel="noreferrer" href="https://mrfriendlys.com/">
          <img src="/images/clients/friendly's.jpg" alt="" />
        </a>
      </div>
      <div className={styles.img}>
        <a target="_blank" rel="noreferrer" href="http://hendrixsc.com/">
          <img src="/images/clients/hendrix.png" alt="" />
        </a>
      </div>
      <div className={styles.img}>
        <a target="_blank" rel="noreferrer" href="https://www.ilgiorgione.com/">
          <img src="/images/clients/il-giorgione.jpg" alt="" />
        </a>
      </div>
      <div className={styles.img}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.thewoodyonmainsc.com/"
        >
          <img src="/images/clients/woody.png" alt="" />
        </a>
      </div>
      <div className={styles.img}>
        <a target="_blank" rel="noreferrer" href="https://www.saludas.com/">
          <img src="/images/clients/saludas.jpg" alt="" />
        </a>
      </div>
      <div className={styles.img}>
        <a target="_blank" rel="noreferrer" href="https://www.smokedsc.com/">
          <img src="/images/clients/smoked.avif" alt="" />
        </a>
      </div>
      <div className={styles.img}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.liveatclaussens.com/"
        >
          <img src="/images/clients/claussens.jpg" alt="" />
        </a>
      </div>
      <div className={styles.img}>
        <a target="_blank" rel="noreferrer" href="https://www.terrasc.com/">
          <img src="/images/clients/terra.jpg" alt="" />
        </a>
      </div>
    </div>
  );
}
