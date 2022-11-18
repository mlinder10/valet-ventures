import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "/styles/header.module.css";

export default function Header() {
  const [scroll, setScroll] = useState(false);

  function checkScroll() {
    if (window.scrollY > 20) setScroll(true);
    else setScroll(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scroll ? styles.scroll : ""} `}>
      <div className={styles.top}>
        <a href="tel:8034025782">Contact Us (803) 402 - 5782</a>
      </div>
      <nav>
        <div>
          <Link href="/" className={styles["home-link"]}>
            <Image
              src="/images/company-logo-blue.png"
              width={36}
              height={60}
              alt="null"
            />
            <h1>Valet Ventures</h1>
          </Link>
        </div>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
