import { withUrqlClient } from "next-urql";
import Head from "next/head";
import { NavBar } from "../src/components/NavBar";
import { createUrqlClient } from "../src/utils/createUrqlClient";

function Home() {
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

export default withUrqlClient(createUrqlClient, { ssr: true })(Home);
