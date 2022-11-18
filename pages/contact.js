import React from "react";
import Image from "next/image";
import styles from "/styles/contact.module.css";
import Form from "../components/Form";

export default function Contact() {
  return (
    <div className={styles.page}>
      <section>
        <h2>Send Us A Message</h2>
        <div className={styles["form-wrapper"]}>
          <Form />
        </div>
      </section>
      <div className={styles["img-wrapper"]}>
        <Image src="/images/contact-image(1).jpg" fill={true} alt="Contact" />
      </div>
    </div>
  );
}
