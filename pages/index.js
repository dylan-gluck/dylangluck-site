import Head from "next/head";
import { useEffect, useState, useContext } from "react";

import { MouseContext } from "../context/mouseContext";

import Cursor from "../components/Cursor.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

import Loader from "../components/home/Loader.js";
import Hero from "../components/home/Hero.js";
import Intro from "../components/home/Intro.js";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <>
      <Head>
        <title>Home | Dylan Navajas Gluck</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cursor />
      {loading ? (
        <Loader setLoading={setLoading} key="loader" />
      ) : (
        <>
          <Header />
          <Hero />
          <Intro />
          <Footer />
        </>
      )}
    </>
  );
}
