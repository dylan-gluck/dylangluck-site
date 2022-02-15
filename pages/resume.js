import Head from "next/head";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ResumePage from "../components/ResumePage";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume | Dylan Navajas Gluck</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cursor />
      <Header />
      <ResumePage />
    </>
  );
}
