import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Valet Ventures</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <meta
          name="description"
          content="Professional and Preppy Valet Service for the Columbia, SC area"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
