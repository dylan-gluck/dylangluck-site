import Head from "next/head";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

import Loader from "../components/home/Loader.js";
import Hero from "../components/home/Hero.js";
import Intro from "../components/home/Intro.js";
import Projects from "../components/home/Projects.js";

export default function Home() {
  const [loading, setLoading] = useState(true);

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
      <AnimatePresence>
        {loading ? (
          <Loader setLoading={setLoading} key="loader" />
        ) : (
          <>
            <Header />
            <Hero />
            <Intro />
            <Projects />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
