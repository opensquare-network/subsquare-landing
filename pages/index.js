import styled from "styled-components";
import Head from "next/head";

import Header from "components/header";
import Overview from "components/overview";
import Partner from "components/partner";
import Feature from "components/feature";
import Advantage from "components/advantage";
import Explore from "components/explore";
import Footer from "components/footer";
import Preload from "components/preload";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Main = styled.main`
  z-index: 1;
  flex-grow: 1;
  margin-top: 64px;
`;

export default function Home() {
  return (
    <>
      <Preload />
      <Layout>
        <Head>
          <title>Subsquare</title>
          <meta name="description" content="Subsquare landing page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <Main>
          <Overview />
          <Partner />
          <Feature />
          <Advantage />
          <Explore />
        </Main>
        <Footer />
      </Layout>
    </>
  );
}
