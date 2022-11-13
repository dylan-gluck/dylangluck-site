import Head from "next/head";
import { useEffect, useState, useContext } from "react";

import Cursor from "../components/Cursor";
import Header from "../components/Header";
import Loader from "../components/home/Loader";
import Hero from "../components/home/Hero";

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
      <Cursor />
      {loading ? (
        <Loader setLoading={setLoading} key="loader" />
      ) : (
        <>
          <Header />
          <Hero />
        </>
      )}
    </>
  );
}
