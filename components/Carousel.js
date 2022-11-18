import React, { useEffect, useState } from "react";
import styles from "/styles/carousel.module.css";
import Image from "next/image";

export default function Carousel() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(document.body.clientWidth);
      window.addEventListener("resize", () =>
        setWidth(document.body.clientWidth)
      );
    }

    return () =>
      window.removeEventListener("resize", () =>
        setWidth(document.body.clientWidth)
      );
  }, []);

  return (
    <div className={styles.wrapper}>
      <Image
        className={`${styles.one} ${styles.img}`}
        src="/images/group-picture.jpg"
        fill={true}
        alt="group"
      />
      <Image
        className={`${styles.two} ${styles.img}`}
        src="/images/museum-of-art.jpg"
        fill={true}
        alt="art"
      />
      <Image
        className={`${styles.three} ${styles.img}`}
        src="/images/claussens.jpg"
        fill={true}
        alt="claussens"
      />
    </div>
  );
}
