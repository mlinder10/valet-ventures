import Link from "next/link";
import Carousel from "../components/Carousel";
import styles from "/styles/index.module.css";

export default function Home() {
  return (
    <div>
      <Carousel />
      <p className={styles.motto}>
        We are Preppy, Polite, and Professional Valets
      </p>
      <section className={styles.section}>
        <article>
          <h2>Resturants</h2>
          <p>
            We are valet wizards. We turn your parking problems into parking
            solutions.
          </p>
          <Link href="/">Our Clientele</Link>
        </article>
        <div className="divider" />
        <article>
          <h2>Special Events</h2>
          <p>
            Don&apos;t make your guests walk a mile to your party... hire us. We
            make sure all the ladies can wear their fanciest shoes... even their
            red bottom Christian Louboutins.
          </p>
          <Link href="/">Contact Us</Link>
        </article>
      </section>
    </div>
  );
}
