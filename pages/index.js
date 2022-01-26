import Head from "next/head";

import Header from "components/header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Subsquare</title>
        <meta name="description" content="Subsquare landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Footer />
    </div>
  );
}
