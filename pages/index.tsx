import Head from "next/head";
import { NavBar } from "../src/components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spivapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
    </div>
  );
}
