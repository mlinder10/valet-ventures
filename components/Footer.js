import Link from "next/link";
import React from "react";
import styles from "/styles/footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles["logo-wrapper"]}>
          <Image src="/images/company-logo-full.jpg" fill={true} alt="Logo" />
        </div>
        <div>
          <p className={styles.heading}>Contact</p>
          <div className={styles.contact}>
            <a href="tel:8034025782">(803) 402 - 5782</a>
            <Link href="/contact">Send us an Email</Link>
          </div>
        </div>
        <div>
          <p className={styles.heading}>Follow Us</p>
          <div className={styles.icons}>
            <a href="https://www.facebook.com/valet.ventures/">
              <div className={styles["icon-wrapper"]}>
                <Image
                  src="/images/icons/facebook.png"
                  fill={true}
                  alt="Facebook"
                />
              </div>
            </a>
            <a href="https://www.instagram.com/valet_ventures/?hl=en">
              <div className={styles["icon-wrapper"]}>
                <Image
                  src="/images/icons/insta.png"
                  fill={true}
                  alt="Instagram"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <p>© 2022 VALET VENTURES</p>
    </footer>
  );
}
